"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { JOIN_NOW_LOGIN_URL } from "./constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const FLOW_STEPS = ["Evidence", "Trust", "Authority", "Action", "Outcome"];

const CLOSING_LINE_STEPS = [
  {
    label: "Evidence changed.",
    icon: (
      <path
        d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5H8Z M14 3.5V8h4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "Trust changed.",
    icon: (
      <path
        d="M4 19V13M9.5 19V9M15 19V6M20 19V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "Authority changed.",
    icon: (
      <path
        d="M12 3.5 5 6.5v5c0 4.5 3 7.6 7 8.9 4-1.3 7-4.4 7-8.9v-5L12 3.5Z M9.2 12.2l1.9 1.9 3.7-3.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "Action enabled.",
    icon: (
      <path
        d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "Measurable outcomes.",
    icon: (
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
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

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "140px",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none vx-grid-bg"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          WebkitMaskImage: "radial-gradient(ellipse at center top, black 30%, transparent 70%)",
          maskImage: "radial-gradient(ellipse at center top, black 30%, transparent 70%)",
        }}
      />

      {/* Radial Amber Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[10%] h-[min(600px,80vw)] w-[min(600px,100vw)] max-w-full -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, var(--amber-glow-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="vx-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-10">
          {/* LEFT COLUMN — copy */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-[560px]">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-6 h-px bg-[var(--amber)]"></div>
              <span
                className="font-dm-mono text-[11px] tracking-eyebrow uppercase text-[var(--amber)]"
                style={{ letterSpacing: "0.18em" }}
              >
                Trust + Authority Infrastructure for AI
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-syne font-extrabold mt-6 uppercase"
              style={{
                fontSize: "clamp(28px, 3.2vw, 50px)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
              }}
            >
              AI is moving
              <br />
              from answers
              <br />
              to actions.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-dm-sans mt-5 font-semibold"
              style={{
                fontSize: "19px",
                lineHeight: "1.5",
                color: "var(--text-primary)",
              }}
            >
              Capability doesn&apos;t equal authority.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-dm-sans mt-3 max-w-xl"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              AIM™ is the Trust + Authority Layer for AI. It uses evidence to
              dynamically determine what an AI system should be allowed to do
              next.
            </motion.p>

            {/* Flow line */}
            <motion.div
              variants={itemVariants}
              className="font-dm-mono mt-5 flex flex-wrap items-center gap-x-2 gap-y-1"
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--text-tertiary)",
              }}
            >
              {FLOW_STEPS.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="uppercase">{step}</span>
                  {i < FLOW_STEPS.length - 1 && <ArrowIcon className="h-2.5 w-2.5 text-[var(--amber)]" />}
                </span>
              ))}
            </motion.div>

            {/* CTA Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={JOIN_NOW_LOGIN_URL}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-7 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
                style={{ letterSpacing: "0.06em" }}
              >
                Build a pilot
                <ArrowIcon className="h-3 w-3" />
              </a>
              <a
                href="#system-preview"
                className="inline-flex items-center rounded-full border px-7 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta transition-all"
                style={{
                  letterSpacing: "0.06em",
                  borderColor: "var(--divider)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--amber-border)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.backgroundColor = "var(--surface-input)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--divider)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                See AIM
              </a>
            </motion.div>

            {/* NVIDIA Inception badge */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4 text-left">
              <Image
                src="/nvidia-transparent.png"
                alt="NVIDIA Inception Program"
                width={2067}
                height={761}
                className="h-10 w-auto max-w-[min(140px,100%)] shrink-0 object-contain object-left opacity-90 transition-opacity hover:opacity-100 sm:h-14 sm:max-w-[min(180px,100%)] md:h-16 md:max-w-[min(200px,100%)]"
                style={{ marginLeft: "-12px" }}
              />
              <div className="h-10 w-px shrink-0 sm:h-14 md:h-16" style={{ backgroundColor: "var(--divider-strong)" }} />
              <p
                className="font-dm-sans"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  color: "var(--text-secondary-strong)",
                }}
              >
                Member of the
                <br />
                NVIDIA Inception program
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — product visual, matched to the copy column's height */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div
              className="overflow-hidden rounded-2xl border shadow-2xl"
              style={{ borderColor: "var(--divider)" }}
            >
              <Image
                src="/foto-hero.png"
                alt="Veraxius AIM — live Trust and Authority dashboard"
                width={1572}
                height={1001}
                priority
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Closing strip — Evidence → Trust → Authority → Action → Outcome, restated as change */}
      <div className="relative z-10 mt-16 border-t" style={{ borderColor: "var(--divider)" }}>
        <div className="vx-container flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-7">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {CLOSING_LINE_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                  style={{ borderColor: "var(--amber-border)", color: "var(--amber)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    {step.icon}
                  </svg>
                </span>
                <span
                  className="font-dm-mono uppercase whitespace-nowrap"
                  style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--text-secondary)" }}
                >
                  {step.label}
                </span>
                {i < CLOSING_LINE_STEPS.length - 1 && (
                  <ArrowIcon className="hidden h-2.5 w-2.5 shrink-0 sm:block" style={{ color: "var(--text-tertiary)" }} />
                )}
              </div>
            ))}
          </div>

          <p
            className="hidden lg:block text-right font-dm-mono"
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              lineHeight: 1.6,
              color: "var(--text-tertiary)",
            }}
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
