import type { Metadata } from "next";
import { routeMeta } from "@/lib/seo";
import Image from "next/image";
import { SiteHeader, SiteFooter } from "@/components/veraxius";
import { LinkedInIcon } from "@/components/veraxius/linkedin-icon";
import { HeroActions } from "./hero-actions";
import { InvestorForm } from "./investor-form";

export const metadata: Metadata = routeMeta(
  "/investors",
  "Investors | Veraxius",
  "Veraxius decides what AI agents are allowed to do before they act. Investor information and contact.",
);

const SNAPSHOT = [
  { label: "Product", value: "AIM MVP5 is live" },
  { label: "Pilots", value: "3 pilots underway" },
  { label: "Team", value: "2 full-time co-founders" },
  { label: "Ecosystem", value: "Member of the NVIDIA Inception program" },
];

const AUTHORITY_STATES = ["Execute", "Constrain", "Challenge", "Escalate", "Block"];

const PILOT_STEPS = ["Simulation", "Sandbox", "Shadow mode", "Constrained live"];

const TEAM = [
  {
    name: "Antonio Lovera",
    title: "Co-founder & CEO",
    photo: "/Antonio%20Ant%20Lovera%20Veraxius%20Website%20Picture.PNG",
    linkedin: "https://www.linkedin.com/in/antoniolovera/",
  },
  {
    name: "Adriel Rodriguez",
    title: "Co-founder & CTO",
    photo: "/IMG_4327.jpg",
    linkedin: "https://www.linkedin.com/in/adriel-rodriguez-b5b05029b",
  },
];

const eyebrow = "font-dm-mono text-[11px] uppercase text-[var(--amber)]";
const h2Class = "font-syne font-extrabold mt-3";
const h2Style = { fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.15, color: "#ffffff" } as const;
const bodyStyle = { fontSize: "17px", lineHeight: 1.7, color: "var(--text-secondary)" } as const;
const cardStyle = { borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" } as const;

function Section({ label, title, children, id }: { label: string; title?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="vx-section scroll-mt-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="vx-container">
        <div className="mx-auto max-w-[900px]">
          <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
            {label}
          </span>
          {title && (
            <h2 className={h2Class} style={h2Style}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export default function InvestorsPage() {
  return (
    <main className="vx-home-surface min-h-screen overflow-x-clip" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      {/* Hero */}
      <section className="vx-section" style={{ paddingTop: "150px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[820px] text-center">
            <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
              Investor information
            </span>
            <h1
              className="font-syne font-extrabold mt-4"
              style={{ fontSize: "clamp(32px, 4.6vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              We decide what AI agents are allowed to do{" "}
              <span style={{ color: "var(--amber)", textShadow: "0 0 28px rgba(255,184,77,0.25)" }}>before they act.</span>
            </h1>
            <p className="font-dm-sans mx-auto mt-5 max-w-[600px]" style={bodyStyle}>
              Veraxius is raising its pre-seed round. Here is where we are, stated plainly.
            </p>
            <HeroActions />
          </div>

          {/* Snapshot */}
          <div className="mx-auto mt-14 grid max-w-[1100px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SNAPSHOT.map((s) => (
              <div key={s.label} className="rounded-2xl border p-6" style={cardStyle}>
                <span className="font-dm-mono text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: "var(--amber)" }}>
                  {s.label}
                </span>
                <p className="font-syne font-bold mt-2 text-[18px]" style={{ lineHeight: 1.3, color: "#ffffff" }}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section label="The problem">
        <p className="font-dm-sans mt-4" style={bodyStyle}>
          AI is moving from answers to actions: agents now issue refunds, send messages, and move money. Companies either
          lock their agents down so tightly they add little value, or grant them permissions they haven&apos;t earned.
          Neither scales.
        </p>
      </Section>

      <Section label="What we built">
        <p className="font-dm-sans mt-4" style={bodyStyle}>
          AIM (Adaptive Integrity Model) turns evidence into trust, and trust into bounded authority. Before an agent acts,
          AIM weighs its track record, the signals and contradictions around it, and the organization&apos;s policy, then
          decides:
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {AUTHORITY_STATES.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span
                className="rounded-full border px-4 py-2 font-dm-mono text-[12px] uppercase"
                style={{ letterSpacing: "0.1em", borderColor: "rgba(255,184,77,0.35)", color: "var(--amber)" }}
              >
                {s}
              </span>
              {i < AUTHORITY_STATES.length - 1 && (
                <span aria-hidden="true" style={{ color: "var(--text-tertiary)" }}>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
        <p className="font-dm-sans mt-5" style={bodyStyle}>
          Every decision is explainable, and every step is recorded in Trust Lineage: evidence, trust state, authority,
          action, outcome, and updated trust.
        </p>
        <p className="font-dm-sans mt-4" style={bodyStyle}>
          <strong style={{ color: "#ffffff" }}>Built in MVP5:</strong> Signal Store, Trust Engine, Authority Gate,
          Governance Log, Trust Lineage, API layer, and human-facing UI.
        </p>
      </Section>

      <Section label="Built for enterprise trust">
        <ul className="mt-5 space-y-3">
          {[
            "Companies connect through a simple REST API and keep the AI they already run.",
            "Each organization gets its own isolated workspace, and every policy version is kept, so it is always provable which rule applied.",
            "An AI can never approve its own request, and unanswered reviews are held, not granted.",
            "Every decision is written to a tamper-evident, hash-chained governance log.",
          ].map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border px-5 py-4" style={cardStyle}>
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 rounded-[2px]" style={{ backgroundColor: "var(--amber)" }} />
              <span className="font-dm-sans text-[16px]" style={{ lineHeight: 1.6, color: "#ffffff" }}>
                {p}
              </span>
            </li>
          ))}
        </ul>
        <p className="font-dm-sans mt-5 text-[15px]">
          <a href="/security" className="underline hover:no-underline" style={{ color: "var(--amber)" }}>
            See Security &amp; data
          </a>
        </p>
      </Section>

      <Section label="Where we start">
        <p className="font-dm-sans mt-4" style={bodyStyle}>
          The AIM engine measures trust for people and AI agents alike. Our first focus is AI agents that take actions
          involving money, such as refunds, credits, and payments, where the value of each decision is clear and
          measurable.
        </p>
      </Section>

      <Section label="Why now">
        <ul className="mt-5 space-y-3">
          {[
            "Gartner predicts that guardian agents, technologies that supervise AI agents, will account for 10–15% of the agentic AI market by 2030 (Gartner, June 2025).",
            "In the EU, human oversight and record-keeping obligations for high-risk AI systems are set to apply from December 2027.",
          ].map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border px-5 py-4" style={cardStyle}>
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 rounded-[2px]" style={{ backgroundColor: "var(--amber)" }} />
              <span className="font-dm-sans text-[16px]" style={{ lineHeight: 1.6, color: "#ffffff" }}>
                {p}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="How pilots work" title="One workflow. One authority problem. One measurable test.">
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PILOT_STEPS.map((s, i) => (
            <li key={s} className="rounded-2xl border p-5" style={cardStyle}>
              <span className="font-dm-mono text-[13px]" style={{ color: "var(--amber)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-syne font-bold mt-1 text-[18px]" style={{ color: "#ffffff" }}>
                {s}
              </p>
            </li>
          ))}
        </ol>
        <p className="font-dm-sans mt-5" style={bodyStyle}>
          Pilot results will be published here as they are validated.
        </p>
      </Section>

      <Section label="Team">
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TEAM.map((m) => (
            <div key={m.name} className="flex flex-col items-center rounded-2xl border p-7 text-center" style={cardStyle}>
              <div
                className="relative h-32 w-32 overflow-hidden rounded-full border"
                style={{ borderColor: "rgba(255,184,77,0.25)" }}
              >
                <Image src={m.photo} alt={m.name} fill sizes="128px" className="object-cover object-top" />
              </div>
              <p className="font-syne font-bold mt-5 text-[20px]" style={{ color: "#ffffff" }}>
                {m.name}
              </p>
              <p className="font-dm-mono mt-1 text-[12px] uppercase" style={{ letterSpacing: "0.12em", color: "var(--amber)" }}>
                {m.title}
              </p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border px-5 font-dm-sans text-[14px] transition-opacity hover:opacity-75"
                style={{ borderColor: "rgba(255,184,77,0.35)", color: "var(--amber)" }}
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Who we'd like to talk to">
        <p className="font-dm-sans mt-4" style={bodyStyle}>
          Investors with experience in AI infrastructure, security, fintech, or risk, and anyone who can introduce us to
          companies running AI agents in customer operations.
        </p>
      </Section>

      {/* Contact form */}
      <section id="investor-form" className="vx-section scroll-mt-24" style={{ backgroundColor: "var(--bg-primary)", paddingBottom: "120px" }}>
        <div className="vx-container">
          <div
            className="mx-auto max-w-[760px] rounded-3xl border p-6 sm:p-10"
            style={{ borderColor: "rgba(255,184,77,0.25)", background: "linear-gradient(180deg, rgba(255,184,77,0.06), rgba(255,255,255,0.01))" }}
          >
            <div className="text-center">
              <span className={eyebrow} style={{ letterSpacing: "0.18em" }}>
                Contact the founders
              </span>
            </div>
            <div className="mt-6">
              <InvestorForm />
            </div>
          </div>
          <p className="font-dm-sans mt-6 text-center text-[15px]" style={{ color: "var(--text-secondary)" }}>
            Prefer email?{" "}
            <a href="mailto:signal@veraxius.com" className="underline hover:no-underline" style={{ color: "var(--amber)" }}>
              signal@veraxius.com
            </a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
