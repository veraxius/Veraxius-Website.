import { NextResponse } from "next/server";
import { Resend } from "resend";

// Pilot requests from /pilots are emailed to the team through Resend.
// PILOT_REQUEST_TO / PILOT_REQUEST_FROM can override the defaults per environment.
const TO = process.env.PILOT_REQUEST_TO || "signal@veraxius.com";
const FROM = process.env.PILOT_REQUEST_FROM || "Veraxius Pilots <noreply@veraxius.com>";

const USE_CASES = ["Health", "People", "Finance", "Autonomous agents", "Other"] as const;

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  useCase?: string;
  message?: string;
  website?: string; // honeypot: real people never fill it
};

// Small in-memory limit per IP (best effort; resets on redeploy).
const WINDOW_MS = 10 * 60 * 1000;
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
    const company = clean(body.company, 160);
    const role = clean(body.role, 120);
    const useCase = USE_CASES.includes(body.useCase as (typeof USE_CASES)[number]) ? (body.useCase as string) : "Other";
    const message = clean(body.message, 3000);

    if (!name || !company) {
      return NextResponse.json({ error: "Please add your name and company." }, { status: 400 });
    }
    if (!email || !isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("POST /api/pilot-request: RESEND_API_KEY is not set");
      return NextResponse.json({ error: "We couldn't send your request right now. Please email signal@veraxius.com." }, { status: 500 });
    }

    const rows: [string, string][] = [
      ["Name", name],
      ["Work email", email],
      ["Company", company],
      ["Role", role || "—"],
      ["Use case", useCase],
    ];

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">New AIM pilot request</h2>
        <table style="border-collapse:collapse">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin:16px 0 4px;color:#666">What they want to govern</p>
        <p style="margin:0;white-space:pre-wrap">${escapeHtml(message || "—")}</p>
        <p style="margin:20px 0 0;font-size:12px;color:#999">Sent from veraxius.com/pilots</p>
      </div>`;

    const text = `New AIM pilot request\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nWhat they want to govern:\n${message || "—"}\n\nSent from veraxius.com/pilots`;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `AIM pilot request: ${company} (${useCase})`,
      html,
      text,
    });

    if (error) {
      console.error("POST /api/pilot-request: Resend error", error);
      return NextResponse.json({ error: "We couldn't send your request right now. Please email signal@veraxius.com." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/pilot-request", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
