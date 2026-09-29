import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/veraxius";
import { PilotRequestForm } from "./pilot-request-form";
import { PilotVideo } from "./pilot-video";

export const metadata: Metadata = {
  title: "AIM Pilots | Veraxius",
  description:
    "Run an AIM pilot: give your AI authority it has earned with evidence, keep humans in charge where it matters, and audit every decision.",
};

const INCLUDES = [
  { title: "Your own isolated workspace", body: "A dedicated, private environment for your organization. Your data is never visible to anyone else." },
  { title: "Simple REST integration", body: "Your systems register agents, send signals and ask AIM before acting. It works with the AI you already run." },
  { title: "Policies you define", body: "Write the rules for each decision once. Every version is kept, so you can always prove which rule applied." },
  { title: "Trust built on evidence", body: "AIM scores each agent from its real behavior: reliability, consistency, peer validation, contradictions and decay." },
  { title: "Five authority states", body: "Execute, Constrain, Challenge, Escalate or Block — decided before the action happens, not after." },
  { title: "Humans where it matters", body: "High-stakes decisions go to your reviewers, with deadlines, backups and a clear record of who decided what." },
];

const STEPS = [
  { n: "01", title: "Scope", body: "Pick one consequential action your AI takes today: a refund, a patient message, a payment, a hiring step." },
  { n: "02", title: "Connect", body: "Register your agents and policy, and stream the signals AIM needs to build trust from evidence." },
  { n: "03", title: "Govern", body: "Every decision passes the Authority Gate. Low risk runs; high risk waits for a person." },
  { n: "04", title: "Measure", body: "See approvals, escalations, review times and outcomes — and decide where to scale with evidence." },
];

const DOMAINS = [
  { name: "AIM Health", q: "Can this AI influence patient care?" },
  { name: "AIM People", q: "Can this AI influence a human decision?" },
  { name: "AIM Finance", q: "Can this AI move or restrict money?" },
  { name: "AIM Agents", q: "Can this AI act autonomously?" },
];

const PRINCIPLES = [
  "Authority is earned with evidence, never assumed.",
  "Silence never approves: unanswered reviews are held, not granted.",
  "An AI can never approve its own request.",
  "Every decision leaves a tamper-evident trail.",
];

const eyebrow = "font-dm-mono text-[11px] uppercase text-[var(--amber)]";

export default function PilotsPage() {
  return (
    <main className="vx-home-surface min-h-screen" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      {/* Hero + video */}
      <section className="vx-section" style={{ paddingTop: "150px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[760px] text-center">
            <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
              AIM Pilots
            </span>
            <h1
              className="font-syne font-extrabold mt-4"
              style={{ fontSize: "clamp(34px, 4.8vw, 60px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Let your AI <span style={{ color: "var(--amber)", textShadow: "0 0 28px rgba(255,184,77,0.25)" }}>earn</span> its authority.
            </h1>
            <p className="font-dm-sans mx-auto mt-5 max-w-[600px]" style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--text-secondary)" }}>
              A pilot puts one real AI workflow under AIM: trust measured from evidence, authority decided before every action,
              and a full audit trail of what happened and why.
            </p>
          </div>

          <div className="mx-auto mt-12 w-full max-w-[1000px]">
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: "rgba(255,184,77,0.25)", boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 60px rgba(255,184,77,0.06)" }}
            >
              <PilotVideo
                src="/veraxius-aim-integration-guide.mp4"
                poster="/veraxius-aim-integration-guide-poster.jpg"
                label="AIM integration guide video"
              />
            </div>
            <p className="font-dm-mono mt-4 text-center text-[12px] uppercase" style={{ letterSpacing: "0.14em", color: "var(--text-tertiary, rgba(245,247,250,0.48))" }}>
              How a company connects its AI to AIM
            </p>
          </div>
        </div>
      </section>

      {/* What a pilot includes */}
      <section className="vx-section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[1100px]">
            <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
              What you get
            </span>
            <h2 className="font-syne font-extrabold mt-3" style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, color: "#ffffff" }}>
              Everything a pilot includes
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDES.map((i) => (
                <div
                  key={i.title}
                  className="rounded-2xl border p-6"
                  style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <div className="h-1.5 w-8 rounded-full" style={{ backgroundColor: "var(--amber)" }} />
                  <h3 className="font-syne font-bold mt-4 text-[19px]" style={{ color: "#ffffff" }}>
                    {i.title}
                  </h3>
                  <p className="font-dm-sans mt-2 text-[15px]" style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    {i.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section className="vx-section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[1100px]">
            <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
              How it works
            </span>
            <h2 className="font-syne font-extrabold mt-3" style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, color: "#ffffff" }}>
              Four steps, one real workflow
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.n} className="rounded-2xl border p-6" style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                  <span className="font-dm-mono text-[13px]" style={{ color: "var(--amber)" }}>
                    {s.n}
                  </span>
                  <h3 className="font-syne font-bold mt-2 text-[20px]" style={{ color: "#ffffff" }}>
                    {s.title}
                  </h3>
                  <p className="font-dm-sans mt-2 text-[15px]" style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domains + principles */}
      <section className="vx-section" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-2">
            <div>
              <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
                Where pilots fit
              </span>
              <h2 className="font-syne font-extrabold mt-3" style={{ fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15, color: "#ffffff" }}>
                Built for decisions with real consequences
              </h2>
              <div className="mt-6 space-y-3">
                {DOMAINS.map((d) => (
                  <div key={d.name} className="flex flex-col gap-1 rounded-xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <span className="font-syne font-bold text-[17px]" style={{ color: "var(--amber)" }}>
                      {d.name}
                    </span>
                    <span className="font-dm-sans text-[15px]" style={{ color: "var(--text-secondary)" }}>
                      {d.q}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
                Our principles
              </span>
              <h2 className="font-syne font-extrabold mt-3" style={{ fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15, color: "#ffffff" }}>
                What AIM guarantees in every pilot
              </h2>
              <ul className="mt-6 space-y-3">
                {PRINCIPLES.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl border px-5 py-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 rounded-[2px]" style={{ backgroundColor: "var(--amber)" }} />
                    <span className="font-dm-sans text-[15px]" style={{ lineHeight: 1.6, color: "#ffffff" }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + form */}
      <section id="request" className="vx-section scroll-mt-24" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "120px" }}>
        <div className="vx-container">
          <div
            className="mx-auto max-w-[760px] rounded-3xl border p-7 sm:p-10"
            style={{ borderColor: "rgba(255,184,77,0.25)", background: "linear-gradient(180deg, rgba(255,184,77,0.06), rgba(255,255,255,0.01))" }}
          >
            <div className="text-center">
              <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
                Limited pilot spots
              </span>
              <h2 className="font-syne font-extrabold mt-3" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", lineHeight: 1.12, color: "#ffffff" }}>
                Ready to run your <span style={{ color: "var(--amber)" }}>pilot</span>?
              </h2>
              <p className="font-dm-sans mx-auto mt-3 max-w-[520px]" style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                Tell us about the AI decision you want to govern. We&apos;ll get back to you to scope a pilot that fits your team.
              </p>
            </div>
            <div className="mt-8">
              <PilotRequestForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
