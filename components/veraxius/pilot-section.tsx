"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { JOIN_NOW_LOGIN_URL } from "./constants";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type PilotStep = {
  n: string;
  title: string;
  lines: [string, string];
  color: string;
  icon: React.ReactNode;
};

const PILOT_STEPS: PilotStep[] = [
  {
    n: "01",
    title: "Simulation",
    lines: ["Start safely.", "Test scenarios."],
    color: "#34D6B0",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M3.5 5.5h17a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1ZM9 20.5h6M12 17v3.5" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Sandbox",
    lines: ["Integrate and test", "in a controlled environment."],
    color: "#4DA3FF",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M12 4.5c4.4 0 8 1.1 8 2.5S16.4 9.5 12 9.5 4 8.4 4 7s3.6-2.5 8-2.5ZM4 7v10c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V7M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Shadow mode",
    lines: ["Run in parallel.", "Compare outcomes."],
    color: "#FFA94D",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Constrained live",
    lines: ["Limited scope.", "Real-world validation."],
    color: "#A78BFA",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z M12 3.5v2.2M12 18.3v2.2M4.9 6.9l1.6 1.6M17.5 15.5l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.9 17.1l1.6-1.6M17.5 8.5l1.6-1.6" />
      </svg>
    ),
  },
];

const IDEAL_PILOT_ITEMS = [
  "Meaningful action.",
  "Available evidence.",
  "Defined outcomes.",
  "Measurable risk.",
  "Human oversight.",
  "A bounded testing environment.",
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PilotSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" ref={sectionRef} className="vx-section scroll-mt-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="vx-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,0.75fr)] lg:items-start lg:gap-8">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[var(--amber)]" />
              <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
                Pilot with Veraxius
              </span>
            </div>

            <h2
              className="font-syne font-extrabold mt-6 uppercase"
              style={{ fontSize: "clamp(20px, 2.4vw, 30px)", lineHeight: "1.15", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              Don&apos;t believe AIM.
              <br />
              <span style={{ color: "var(--amber)" }}>Test it.</span>
            </h2>

            <p className="font-dm-sans mt-5" style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--text-secondary)" }}>
              We are selecting focused environments where AI decisions carry
              meaningful consequences.
            </p>

            <div className="mt-8 h-px w-full" style={{ backgroundColor: "var(--divider)" }} />

            <p className="font-dm-mono mt-8 uppercase" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--text-tertiary)" }}>
              The pilot formula
            </p>
            <p className="font-syne font-extrabold uppercase mt-3" style={{ fontSize: "22px", lineHeight: "1.5", color: "var(--text-primary)" }}>
              <span style={{ color: "var(--amber)" }}>One</span> workflow.
              <br />
              <span style={{ color: "var(--amber)" }}>One</span> authority problem.
              <br />
              <span style={{ color: "var(--amber)" }}>One</span> measurable test.
            </p>

            <div className="mt-8 h-px w-full" style={{ backgroundColor: "var(--divider)" }} />

            <p className="font-dm-mono mt-8 uppercase" style={{ fontSize: "11px", letterSpacing: "0.1em", lineHeight: 1.8, color: "var(--text-tertiary)" }}>
              Pilot design depends on the workflow, risk profile and
              participating organization.
            </p>

            <p
              className="font-dm-mono mt-auto pt-10 uppercase"
              style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.14em", lineHeight: 1.6, color: "var(--text-tertiary)" }}
            >
              A more
              <br />
              trustworthy
              <br />
              AI future.
            </p>
          </motion.div>

          {/* MIDDLE — 4 pilot steps */}
          <div className="space-y-3">
            {PILOT_STEPS.map((step, i) => (
              <motion.div key={step.n}>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative flex items-center gap-4 rounded-2xl border-2 p-5"
                    style={{
                      borderColor: `${step.color}66`,
                      backgroundColor: `${step.color}0D`,
                      boxShadow: `0 0 14px -8px ${step.color}66`,
                    }}
                  >
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2"
                      style={{
                        borderColor: `${step.color}99`,
                        backgroundColor: `${step.color}1A`,
                        color: step.color,
                        boxShadow: `0 0 10px -1px ${step.color}`,
                      }}
                    >
                      {step.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-dm-mono font-semibold" style={{ fontSize: "12px", color: step.color }}>
                        {step.n}
                      </p>
                      <p className="font-syne font-bold uppercase" style={{ fontSize: "18px", color: "var(--text-primary)" }}>
                        {step.title}
                      </p>
                      <p className="font-dm-sans mt-0.5" style={{ fontSize: "14px", lineHeight: 1.4, color: "var(--text-tertiary)" }}>
                        {step.lines[0]}
                        <br />
                        {step.lines[1]}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {i < PILOT_STEPS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg viewBox="0 0 10 16" className="h-4 w-2.5" style={{ color: PILOT_STEPS[i + 1].color }} fill="none">
                      <path d="M5 0.5V14M5 14L1 10M5 14L9 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* RIGHT — ideal pilot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border-2 p-6 sm:p-7"
            style={{
              borderColor: "rgba(87, 209, 140, 0.55)",
              backgroundColor: "rgba(87, 209, 140, 0.05)",
              boxShadow: "0 0 16px -10px rgba(87, 209, 140, 0.7)",
            }}
          >
            <p className="font-dm-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--green)" }}>
              Ideal pilot
            </p>
            <p className="font-syne font-bold mt-3" style={{ fontSize: "19px", color: "var(--text-primary)" }}>
              Bring us an AI workflow with:
            </p>

            <ul className="mt-5 space-y-3">
              {IDEAL_PILOT_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: "rgba(87, 209, 140, 0.4)", backgroundColor: "rgba(87, 209, 140, 0.15)", color: "var(--green)" }}
                  >
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                      <path d="M3 8.5 6.2 11.5 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-dm-sans" style={{ fontSize: "15px", color: "var(--text-primary)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 h-px w-full" style={{ backgroundColor: "rgba(87, 209, 140, 0.2)" }} />

            <a
              href={JOIN_NOW_LOGIN_URL}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--amber)] px-6 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
              style={{ letterSpacing: "0.06em" }}
            >
              Propose a pilot
              <ArrowIcon className="h-3 w-3" />
            </a>

            <p className="mt-4 text-center font-dm-sans" style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>
              Pilot conversations are open now.
            </p>
          </motion.div>
        </div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-end"
        >
          <p
            className="font-dm-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--text-tertiary)" }}
          >
            Measure&nbsp;&nbsp;|&nbsp;&nbsp;Explain&nbsp;&nbsp;|&nbsp;&nbsp;Control
          </p>
        </motion.div>
      </div>
    </section>
  );
}
