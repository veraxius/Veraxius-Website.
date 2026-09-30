import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CHECK_SIZES } from "@/app/investors/constants";

// Investor inquiries from /investors are emailed to the team through Resend.
// Uses the same sender address as pilot requests (PILOT_REQUEST_FROM).
const TO = process.env.INVESTOR_INBOX || "signal@veraxius.com";
const FROM = process.env.PILOT_REQUEST_FROM || "Veraxius Pilots <noreply@veraxius.com>";


type Payload = {
  name?: string;
  email?: string;
  firm?: string;
  role?: string;
  checkSize?: string;
  message?: string;
  deck?: boolean;
  website?: string; // honeypot: real people never fill it
};

// Small in-memory limit per IP (best effort; resets on redeploy).
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = (await request.json().catch(() => null)) as Payload | null;
    if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

    // Bots that fill the hidden field get a silent success.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const firm = clean(body.firm, 160);
    const role = clean(body.role, 120);
    const checkSizeRaw = clean(body.checkSize, 40);
    const checkSize = (CHECK_SIZES as readonly string[]).includes(checkSizeRaw) ? checkSizeRaw : "";
    const message = clean(body.message, 3000);
    const deck = body.deck === true;

    if (!name || !firm) {
      return NextResponse.json({ error: "Please add your name and firm or fund." }, { status: 400 });
    }
    if (!email || !isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("POST /api/investor-inquiry: RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
    }

    const submittedAt = new Date().toISOString();
    const rows: [string, string][] = [
      ["Full name", name],
      ["Email", email],
      ["Firm or fund", firm],
      ["Role", role || "—"],
      ["Typical check size", checkSize || "—"],
      ["Deck requested", deck ? "Yes" : "No"],
      ["Submitted at", submittedAt],
    ];

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">New investor inquiry</h2>
        <table style="border-collapse:collapse">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin:16px 0 4px;color:#666">Message</p>
        <p style="margin:0;white-space:pre-wrap">${escapeHtml(message || "—")}</p>
        <p style="margin:20px 0 0;font-size:12px;color:#999">Sent from veraxius.com/investors</p>
      </div>`;

    const text = `New investor inquiry\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message || "—"}\n\nSent from veraxius.com/investors`;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Investor inquiry: ${name} (${firm})`,
      html,
      text,
    });

    if (error) {
      console.error("POST /api/investor-inquiry: Resend error", error);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/investor-inquiry", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
