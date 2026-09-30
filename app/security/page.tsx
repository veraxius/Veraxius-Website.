import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/veraxius";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta(
  "/security",
  "Security & Data | Veraxius",
  "How AIM isolates your data, protects credentials, and records every decision in a hash-chained governance log.",
);

const eyebrow = "font-dm-mono text-[11px] uppercase text-[var(--amber)]";
const cardStyle = { borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" } as const;
const linkStyle = { color: "var(--amber)" } as const;

const Email = () => (
  <a href="mailto:signal@veraxius.com" className="underline hover:no-underline" style={linkStyle}>
    signal@veraxius.com
  </a>
);

const SECTIONS: { title: string; items: ReactNode[] }[] = [
  {
    title: "Isolation by organization",
    items: [
      "Every API request is authenticated with your organization's API key, and each organization only ever sees its own data. Requests for another organization's records return \"not found.\"",
      "Each pilot receives its own base URL and API key when it starts.",
    ],
  },
  {
    title: "Credentials",
    items: [
      "API keys are shown once when issued. We store only their hash.",
      "Human approvals require a separate operator sign-in. Operators receive a 12-hour token and can only act for their own organization.",
    ],
  },
  {
    title: "Integrity and audit",
    items: [
      "Every event in a decision's life is written to a hash-chained governance log: each event stores the hash of the previous one, and you can verify the chain for any decision through the API.",
      "Evidence submitted to AIM is stored with a SHA-256 hash of its content.",
      "Policies are versioned and immutable, so you can always prove which rule applied.",
    ],
  },
  {
    title: "Safe execution",
    items: [
      "An authority can be used once. Validation and consumption are atomic, even under concurrent requests.",
      "Actions must fit the authorized envelope, for example a maximum refund amount.",
      "Idempotency keys make retries safe: nothing executes twice.",
      "An AI can never approve its own request, and unanswered reviews are held, not granted.",
    ],
  },
  {
    title: "Data handling",
    items: [
      "We process pilot data on your organization's behalf and under your instructions.",
      "Send only what AIM needs: agent identifiers, proposed actions, outcomes and evidence. Please don't send sensitive personal data.",
      "AIM scores may not be used to decide eligibility for employment, credit, housing, insurance or government benefits.",
      "We do not sell personal information.",
      <>
        <a href="/privacy" className="underline hover:no-underline" style={linkStyle}>
          Website privacy policy
        </a>
        {" · "}
        <a href="https://app.veraxius.com/privacy" className="underline hover:no-underline" style={linkStyle}>
          App privacy policy
        </a>
      </>,
    ],
  },
  {
    title: "Transport and availability",
    items: ["All traffic uses HTTPS.", "Rate limits protect the service, and responses include standard RateLimit headers."],
  },
];

export default function SecurityPage() {
  return (
    <main className="vx-home-surface min-h-screen overflow-x-clip" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      <section className="vx-section" style={{ paddingTop: "150px", paddingBottom: "40px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[820px] text-center">
            <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
              Security &amp; data
            </span>
            <h1
              className="font-syne font-extrabold mt-4"
              style={{ fontSize: "clamp(32px, 4.4vw, 54px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              How AIM protects your data and{" "}
              <span style={{ color: "var(--amber)", textShadow: "0 0 28px rgba(255,184,77,0.25)" }}>proves every decision.</span>
            </h1>
            <p className="font-dm-sans mx-auto mt-5 max-w-[620px]" style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--text-secondary)" }}>
              What we do today, stated plainly. Have a security questionnaire? Email <Email />.
            </p>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[900px] pb-24">
            {SECTIONS.map((sec) => (
              <section key={sec.title} className="pt-12">
                <h2 className="font-syne font-extrabold text-center" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.2, color: "#ffffff" }}>
                  {sec.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {sec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border px-5 py-4" style={cardStyle}>
                      <span className="mt-2 h-2 w-2 shrink-0 rotate-45 rounded-[2px]" style={{ backgroundColor: "var(--amber)" }} />
                      <span className="font-dm-sans min-w-0 text-[16px]" style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="pt-12">
              <div
                className="rounded-2xl border p-6 text-center sm:p-8"
                style={{ borderColor: "rgba(255,184,77,0.25)", backgroundColor: "rgba(255,184,77,0.04)" }}
              >
                <h2 className="font-syne font-extrabold" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.2, color: "#ffffff" }}>
                  Report a vulnerability
                </h2>
                <p className="font-dm-sans mx-auto mt-3 max-w-[600px] text-[16px]" style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
                  If you find a security issue, email <Email />. We&apos;ll acknowledge your report and keep you updated.
                </p>
              </div>
            </section>

            <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/docs"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--amber)] px-7 py-4 font-dm-mono font-semibold text-[13px] uppercase text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
                style={{ letterSpacing: "0.08em" }}
              >
                Read the API docs
              </a>
              <a
                href="/pilots"
                className="inline-flex min-h-11 items-center justify-center rounded-full border px-7 py-4 font-dm-mono font-semibold text-[13px] uppercase transition hover:opacity-80"
                style={{ letterSpacing: "0.08em", borderColor: "rgba(255,184,77,0.45)", color: "var(--amber)" }}
              >
                Request a pilot
              </a>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
