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

type Step = {
  n: string;
  title: string;
  question: string;
  color: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Evidence",
    question: "What do we know?",
    color: "#34D6B0",
    icon: (
      <svg {...ICON_PROPS} className="h-5 w-5">
        <path d="M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1ZM13 3.5V8h4" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Trust State",
    question: "What does the evidence indicate?",
    color: "#4DA3FF",
    icon: (
      <svg {...ICON_PROPS} className="h-5 w-5">
        <path d="M4 19V13M9.5 19V9M15 19V6M20 19V11" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Authority",
    question: "What is allowed?",
    color: "#FFC24D",
    icon: (
      <svg {...ICON_PROPS} className="h-5 w-5">
        <path d="M7 10.5V8a5 5 0 0 1 10 0v2.5M6 10.5h12a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Action",
    question: "What happens next?",
    color: "#FF9142",
    icon: (
      <svg {...ICON_PROPS} className="h-5 w-5">
        <path d="M13 3 5 13.5h5.5L11 21l8-11h-5.5L13 3Z" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Outcome",
    question: "What actually happened?",
    color: "#57D18C",
    icon: (
      <svg {...ICON_PROPS} className="h-5 w-5">
        <path d="M4.5 12.5 9 17l10.5-11" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Updated Trust",
    question: "What should change?",
    color: "#A78BFA",
    icon: (
      <svg {...ICON_PROPS} className="h-5 w-5">
        <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 3v5h-5M20 12a8 8 0 0 1-13.7 5.7L4 16M4 21v-5h5" />
      </svg>
    ),
  },
];

function ArrowIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 10" className={className} style={style} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIcon({ step, size = 40 }: { step: Step; size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full border-2"
      style={{
        width: size,
        height: size,
        borderColor: `${step.color}99`,
        backgroundColor: `${step.color}1A`,
        color: step.color,
        boxShadow: `0 0 10px -1px ${step.color}`,
      }}
    >
      {step.icon}
    </span>
  );
}

export function TrustLineageSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="vx-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="vx-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[var(--amber)]" />
              <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
                Trust Lineage™
              </span>
            </div>

            <h2
              className="font-syne font-extrabold mt-6 uppercase"
              style={{ fontSize: "clamp(22px, 2.6vw, 34px)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              Don&apos;t just record
              <br />
              what AI did.
              <br />
              <span style={{ color: "var(--amber)" }}>
                Preserve why
                <br />
                it was allowed.
              </span>
            </h2>

            <p
              className="font-dm-sans font-semibold mt-8"
              style={{ fontSize: "17px", color: "var(--text-primary)" }}
            >
              AIM connects:
            </p>

            <ul className="mt-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.n}
                  className="flex items-center gap-3 py-2.5"
                  style={{ borderTop: i > 0 ? "1px solid var(--divider)" : "none" }}
                >
                  <StepIcon step={step} size={34} />
                  <span className="font-dm-sans font-medium" style={{ fontSize: "15px", color: "var(--text-primary)" }}>
                    {step.title}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-dm-sans mt-6" style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--text-secondary)" }}>
              Creating a traceable history of how evidence influenced
              authority over time.
            </p>

            <a
              href={JOIN_NOW_LOGIN_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-7 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
              style={{ letterSpacing: "0.06em" }}
            >
              Explore Trust Lineage™
              <ArrowIcon className="h-3 w-3" />
            </a>
          </motion.div>

          {/* RIGHT — vertical timeline */}
          <div className="relative pl-14 sm:pl-16">
            {/* Gradient line */}
            <div
              className="absolute left-[15px] top-2 bottom-2 w-[3px] rounded-full sm:left-[17px]"
              style={{
                background: `linear-gradient(180deg, ${STEPS.map((s) => s.color).join(", ")})`,
              }}
            />

            <div className="space-y-4">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative"
                >
                  {/* Dot on the line */}
                  <span
                    className="absolute -left-[48px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 sm:-left-[50px]"
                    style={{
                      backgroundColor: step.color,
                      borderColor: "var(--bg-primary)",
                      boxShadow: `0 0 10px 1px ${step.color}`,
                    }}
                  />

                  <div
                    className="flex items-center gap-4 rounded-2xl border-2 p-4 sm:p-5"
                    style={{
                      borderColor: `${step.color}66`,
                      backgroundColor: `${step.color}0D`,
                      boxShadow: `0 0 14px -8px ${step.color}66`,
                    }}
                  >
                    <StepIcon step={step} size={44} />
                    <div className="min-w-0">
                      <p className="flex items-baseline gap-2">
                        <span className="font-dm-mono font-semibold" style={{ fontSize: "12px", color: step.color }}>
                          {step.n}
                        </span>
                        <span className="font-syne font-bold uppercase" style={{ fontSize: "16px", color: "var(--text-primary)" }}>
                          {step.title}
                        </span>
                      </p>
                      <p className="font-dm-sans mt-0.5" style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>
                        {step.question}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing strip */}
      <div className="mt-16 border-t" style={{ borderColor: "var(--divider)" }}>
        <div className="vx-container flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-7">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex items-center gap-3">
                <StepIcon step={step} size={36} />
                <span
                  className="font-dm-mono uppercase whitespace-nowrap"
                  style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--text-secondary)" }}
                >
                  {step.title}
                </span>
                {i < STEPS.length - 1 && (
                  <ArrowIcon className="hidden h-2.5 w-2.5 shrink-0 sm:block" style={{ color: "var(--text-tertiary)" }} />
                )}
              </div>
            ))}
          </div>

          <p
            className="hidden lg:block text-right font-dm-mono"
            style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.14em", lineHeight: 1.6, color: "var(--text-tertiary)" }}
          >
            A MORE
            <br />
            TRUSTWORTHY
            <br />
            AI FUTURE.
          </p>
        </div>
      </div>
    </section>
  );
}
