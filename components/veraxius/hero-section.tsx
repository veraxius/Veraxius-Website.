"use client";

import { motion } from "framer-motion";
import { JOIN_NOW_LOGIN_URL, joinNowButtonClassName } from "./mvp4-launch-section";

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

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[860px]"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-6 h-px bg-[var(--amber)]"></div>
            <span
              className="font-dm-mono text-[11px] tracking-eyebrow uppercase text-[var(--amber)]"
              style={{ letterSpacing: "0.18em" }}
            >
              INTEGRITY INFRASTRUCTURE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-syne font-extrabold mt-6"
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Every decision today runs on unverified signals.{" "}
            <span style={{ color: "var(--amber)" }}>That is now a risk.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="font-dm-sans mt-6 max-w-2xl"
            style={{
              fontSize: "19px",
              fontWeight: 400,
              lineHeight: "1.65",
              color: "var(--text-secondary)",
            }}
          >
            AI made information infinite. It also made deception scalable. Veraxius
            replaces assumptions with measurable integrity, so you can act with confidence.
          </motion.p>

          {/* Support Line */}
          <motion.p
            variants={itemVariants}
            className="font-dm-mono mt-6"
            style={{
              fontSize: "12px",
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "var(--text-tertiary)",
            }}
          >
            Built for a world where decisions can no longer rely on unverified information.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a href={JOIN_NOW_LOGIN_URL} className={joinNowButtonClassName}>
              Join Now
            </a>
            <a
              href="#how-it-works"
              className="font-dm-mono font-medium text-[13px] tracking-cta uppercase px-8 py-4 border transition-all"
              style={{
                letterSpacing: "0.08em",
                borderColor: "var(--divider)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--amber-border)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--divider)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
