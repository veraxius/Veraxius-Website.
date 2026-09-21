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

type ResearchStep = {
  n: string;
  title: string;
  lines: [string, string];
  color: string;
  icon: React.ReactNode;
};

const RESEARCH_STEPS: ResearchStep[] = [
  {
    n: "01",
    title: "Research questions",
    lines: ["Define hypotheses.", "Explore assumptions."],
    color: "#34D6B0",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M4 5.5c2.5-1 5.5-1 8 0v13c-2.5-1-5.5-1-8 0v-13ZM20 5.5c-2.5-1-5.5-1-8 0v13c2.5-1 5.5-1 8 0v-13Z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Experiment design",
    lines: ["Test under real", "and adversarial conditions."],
    color: "#4DA3FF",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M9.5 3.5h5M10.5 3.5v5.3L6 17a1.6 1.6 0 0 0 1.4 2.4h9.2A1.6 1.6 0 0 0 18 17l-4.5-8.2V3.5" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Analyze results",
    lines: ["Measure trust, authority", "and failure modes."],
    color: "#FFA94D",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M4 19V13M9.5 19V9M15 19V6M20 19V11" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Publish & share",
    lines: ["Independent findings.", "Stronger AI for everyone."],
    color: "#A78BFA",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 11a2.6 2.6 0 1 0 0-5.2M15 20c0-2.6 2-4.6 4.5-4.6" />
      </svg>
    ),
  },
];

const QUESTIONS = [
  "Can dynamic evidence produce useful trust states?",
  "Can trust reliably inform authority?",
  "How should contradictory evidence change authority?",
  "How should trust decay?",
  "When should humans override AIM?",
  "Can people understand why AIM decided?",
  "Where does the model fail?",
];

const TOPICS = [
  "AI Governance",
  "Trustworthy AI",
  "AI Safety",
  "Explainable AI",
  "Human-AI Interaction",
  "Agentic Systems",
  "Decision Science",
  "Computational Trust",
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ResearchSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="vx-section" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="vx-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,0.75fr)] lg:items-start lg:gap-8">
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
                Research + Independent Validation
              </span>
            </div>

            <h2
              className="font-syne font-extrabold mt-6 uppercase"
              style={{ fontSize: "clamp(20px, 2.4vw, 30px)", lineHeight: "1.15", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              We built
              <br />
              the model.
              <br />
              <span style={{ color: "var(--amber)" }}>
                Help us find
                <br />
                where it breaks.
              </span>
            </h2>

            <p className="font-dm-sans mt-5" style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--text-secondary)" }}>
              We are seeking universities, laboratories, and independent
              researchers interested in testing adaptive trust + authority.
            </p>

            <div className="mt-8 h-px w-full" style={{ backgroundColor: "var(--divider)" }} />

            <p className="font-dm-sans mt-8" style={{ fontSize: "16px", color: "var(--text-secondary)" }}>
              Not endorsing AIM.
            </p>
            <p className="font-syne font-extrabold uppercase mt-1" style={{ fontSize: "24px", color: "var(--amber)" }}>
              Challenging it.
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

          {/* MIDDLE — 4 research steps */}
          <div className="space-y-3">
            {RESEARCH_STEPS.map((step, i) => (
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

                {i < RESEARCH_STEPS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg viewBox="0 0 10 16" className="h-4 w-2.5" style={{ color: RESEARCH_STEPS[i + 1].color }} fill="none">
                      <path d="M5 0.5V14M5 14L1 10M5 14L9 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* RIGHT — questions worth testing */}
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
              Questions worth testing
            </p>

            <ul className="mt-5 space-y-3">
              {QUESTIONS.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: "rgba(87, 209, 140, 0.4)", backgroundColor: "rgba(87, 209, 140, 0.15)", color: "var(--green)" }}
                  >
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                      <path d="M3 8.5 6.2 11.5 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-dm-sans" style={{ fontSize: "15px", lineHeight: 1.4, color: "var(--text-primary)" }}>
                    {q}
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
              Research with AIM
              <ArrowIcon className="h-3 w-3" />
            </a>
          </motion.div>
        </div>

        {/* Bottom topics line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <p
            className="font-dm-sans"
            style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-tertiary)" }}
          >
            {TOPICS.join("  ·  ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
