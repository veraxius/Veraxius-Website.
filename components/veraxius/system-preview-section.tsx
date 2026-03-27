"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SystemPreviewSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="system-preview"
      className="vx-section"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--divider)",
      }}
    >
      <div className="vx-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="vx-panel p-8 relative overflow-hidden order-2 lg:order-1"
            style={{
              borderColor: "var(--amber-border)",
            }}
          >
            {/* Top Accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background: "linear-gradient(90deg, var(--amber) 0%, var(--amber-glow) 50%, transparent 100%)",
              }}
            />

            {/* Header */}
            <div className="flex justify-between items-center">
              <span
                className="font-dm-mono text-[11px] tracking-label uppercase"
                style={{
                  letterSpacing: "0.15em",
                  color: "var(--text-tertiary)",
                }}
              >
                CANDIDATE_ENTITY_VX_2847
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full vx-pulse"
                  style={{ backgroundColor: "var(--green)" }}
                />
                <span
                  className="font-dm-mono text-[10px] uppercase"
                  style={{ color: "var(--green)" }}
                >
                  LIVE
                </span>
              </div>
            </div>

            {/* Score */}
            <div className="mt-8 flex items-baseline gap-4">
              <span
                className="font-syne font-extrabold"
                style={{
                  fontSize: "72px",
                  color: "var(--amber)",
                }}
              >
                84
              </span>
              <div className="flex flex-col">
                <span
                  className="font-dm-mono text-[10px] tracking-label uppercase"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-tertiary)",
                  }}
                >
                  INTEGRITY SCORE
                </span>
                <span
                  className="font-dm-mono text-[12px] mt-1"
                  style={{ color: "var(--green)" }}
                >
                  +6 / 30 days
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center py-3 border-b"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-dm-mono text-[11px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-tertiary)",
                  }}
                >
                  CONSISTENCY INDEX
                </span>
                <span
                  className="font-dm-mono text-[12px]"
                  style={{ color: "var(--green)" }}
                >
                  High
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-dm-mono text-[11px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-tertiary)",
                  }}
                >
                  BEHAVIORAL VARIANCE
                </span>
                <span
                  className="font-dm-mono text-[12px]"
                  style={{ color: "var(--green)" }}
                >
                  Low
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-dm-mono text-[11px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-tertiary)",
                  }}
                >
                  SIGNAL CONFIDENCE
                </span>
                <span
                  className="font-dm-mono text-[12px]"
                  style={{ color: "var(--amber)" }}
                >
                  87%
                </span>
              </div>
            </div>

            {/* Flags */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--red)" }} />
                <span
                  className="font-dm-mono text-[11px]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  minor inconsistency in timeline
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--green)" }} />
                <span
                  className="font-dm-mono text-[11px]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  strong alignment with stated values
                </span>
              </div>
            </div>

            {/* Insights */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--divider)" }}>
              <div className="flex items-center gap-2">
                <span
                  className="font-dm-mono text-[10px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--green)",
                  }}
                >
                  reliability improving
                </span>
                <span className="text-[var(--divider)]">|</span>
                <span
                  className="font-dm-mono text-[10px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--green)",
                  }}
                >
                  high follow-through
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div
              className="font-dm-mono text-[11px] tracking-eyebrow uppercase"
              style={{
                letterSpacing: "0.18em",
                color: "var(--amber)",
              }}
            >
              LIVE SYSTEM PREVIEW
            </div>

            {/* Headline */}
            <h2
              className="font-syne font-extrabold mt-4"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: "1.1",
                color: "var(--text-primary)",
              }}
            >
              This is what integrity looks like.
            </h2>

            {/* Body */}
            <p
              className="font-dm-sans mt-6"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              Every interaction leaves a trace. Not of what someone claims—but of how they
              actually operate. Veraxius surfaces patterns that correlate with reliability,
              consistency, and follow-through. This is not sentiment analysis. It is
              behavioral signal extraction.
            </p>

            <p
              className="font-dm-sans mt-4"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              The dashboard you see is a live representation of how the system interprets
              multi-source inputs into a single integrity signal. High confidence means
              the data converges. Flags indicate where the signal is noisy or contradictory.
            </p>

            {/* CTA */}
            <a
              href="#architecture"
              className="inline-block font-dm-mono font-medium text-[13px] tracking-cta uppercase mt-8 px-8 py-4 border transition-all"
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
              See Full Breakdown
            </a>

            {/* Support */}
            <p
              className="font-dm-mono mt-6"
              style={{
                fontSize: "11px",
                color: "var(--text-disabled)",
              }}
            >
              Early system logic in development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
