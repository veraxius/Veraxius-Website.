"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ArchitectureDiagramSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="vx-section"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="vx-container">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-syne font-extrabold text-center"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: "1.1",
            color: "var(--text-primary)",
          }}
        >
          Integrity requires architecture.
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-sans text-center mt-6 max-w-2xl mx-auto"
          style={{
            fontSize: "17px",
            lineHeight: "1.65",
            color: "var(--text-secondary)",
          }}
        >
          Data enters. Patterns emerge. A signal crystallizes. This is not magic—this
          is computation.
        </motion.p>

        {/* Diagram Panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="vx-panel mt-16 relative overflow-hidden"
          style={{
            borderColor: "var(--amber-border)",
            padding: "48px",
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, var(--amber) 0%, var(--amber-glow) 50%, transparent 100%)",
            }}
          />
          {/* Flow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Data Inputs */}
            <div className="text-center">
              <div
                className="px-6 py-4 border"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-dm-mono text-[12px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Data Inputs
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div
              className="font-dm-mono text-lg hidden md:block"
              style={{ color: "var(--text-tertiary)" }}
            >
              →
            </div>
            <div
              className="font-dm-mono text-lg md:hidden"
              style={{ color: "var(--text-tertiary)" }}
            >
              ↓
            </div>

            {/* Normalization */}
            <div className="text-center">
              <div
                className="px-6 py-4 border"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-dm-mono text-[12px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Normalization
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div
              className="font-dm-mono text-lg hidden md:block"
              style={{ color: "var(--text-tertiary)" }}
            >
              →
            </div>
            <div
              className="font-dm-mono text-lg md:hidden"
              style={{ color: "var(--text-tertiary)" }}
            >
              ↓
            </div>

            {/* Feature Extraction */}
            <div className="text-center">
              <div
                className="px-6 py-4 border"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-dm-mono text-[12px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Feature Extraction
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div
              className="font-dm-mono text-lg hidden md:block"
              style={{ color: "var(--text-tertiary)" }}
            >
              →
            </div>
            <div
              className="font-dm-mono text-lg md:hidden"
              style={{ color: "var(--text-tertiary)" }}
            >
              ↓
            </div>

            {/* AIM Engine */}
            <div className="text-center relative">
              <div
                className="px-6 py-4 border-2"
                style={{
                  borderColor: "var(--amber)",
                }}
              >
                <span
                  className="font-dm-mono text-[12px] uppercase tracking-label font-medium"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--amber)",
                  }}
                >
                  AIM Engine
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div
              className="font-dm-mono text-lg hidden md:block"
              style={{ color: "var(--text-tertiary)" }}
            >
              →
            </div>
            <div
              className="font-dm-mono text-lg md:hidden"
              style={{ color: "var(--text-tertiary)" }}
            >
              ↓
            </div>

            {/* Score Output */}
            <div className="text-center relative">
              <div
                className="px-6 py-4 border"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-dm-mono text-[12px] uppercase tracking-label"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Score Output
                </span>
              </div>

              {/* Feedback Loop Line */}
              <div
                className="hidden lg:block absolute top-full left-1/2 mt-4 w-px h-8"
                style={{
                  background: `repeating-linear-gradient(to bottom, var(--amber-border) 0, var(--amber-border) 4px, transparent 4px, transparent 8px)`,
                }}
              />
              <div
                className="hidden lg:block absolute top-[calc(100%+32px)] left-1/2 w-[200px] h-px"
                style={{
                  background: `repeating-linear-gradient(to left, var(--amber-border) 0, var(--amber-border) 4px, transparent 4px, transparent 8px)`,
                }}
              />
              <div
                className="hidden lg:block absolute top-[calc(100%+32px)] left-[calc(50%-200px)] w-px h-[120px]"
                style={{
                  background: `repeating-linear-gradient(to bottom, transparent 0, transparent 4px, var(--amber-border) 4px, var(--amber-border) 8px)`,
                }}
              />
              {/* Feedback Engine Label */}
              <div
                className="hidden lg:block absolute top-[calc(100%+140px)] left-[calc(50%-200px)]"
                style={{
                  transform: 'translateX(-50%)',
                }}
              >
                <span
                  className="font-dm-mono text-[10px] uppercase"
                  style={{
                    letterSpacing: "0.15em",
                    color: "var(--amber)",
                  }}
                >
                  FEEDBACK ENGINE
                </span>
              </div>
            </div>
          </div>

          {/* Signal Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span
              className="font-dm-mono text-[11px] uppercase tracking-label px-4 py-2"
              style={{
                letterSpacing: "0.15em",
                backgroundColor: "rgba(77, 163, 255, 0.1)",
                color: "var(--blue)",
              }}
            >
              Behavioral Signals
            </span>
            <span
              className="font-dm-mono text-[11px] uppercase tracking-label px-4 py-2"
              style={{
                letterSpacing: "0.15em",
                backgroundColor: "rgba(255, 184, 77, 0.1)",
                color: "var(--amber)",
              }}
            >
              Contextual Data
            </span>
            <span
              className="font-dm-mono text-[11px] uppercase tracking-label px-4 py-2"
              style={{
                letterSpacing: "0.15em",
                backgroundColor: "rgba(108, 114, 127, 0.1)",
                color: "var(--steel)",
              }}
            >
              Temporal Patterns
            </span>
          </div>

          {/* Caption */}
          <p
            className="font-dm-mono text-center mt-8 italic"
            style={{
              fontSize: "13px",
              color: "var(--text-tertiary)",
            }}
          >
            Integrity is computed, not declared.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
