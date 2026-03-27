"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const breakdownItems = [
  "Resumes are optimized, not truthful.",
  "Reputation is curated, not proven.",
  "Data is abundant, but validation is missing.",
  "For years, people mistook visibility for credibility.",
  "AI did not create that weakness. It exposed it at scale.",
];

const signalData = [
  { label: "Resume accuracy", value: 28 },
  { label: "Verified claims", value: 31 },
  { label: "Behavioral match", value: 22 },
  { label: "Signal confidence", value: 19 },
];

function AnimatedBar({ value, delay }: { value: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="h-1 flex-1 bg-[var(--divider)] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-full"
        style={{ backgroundColor: "var(--red-transparent)" }}
      />
    </div>
  );
}

export function BreakdownSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="vx-section"
      style={{
        background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
        borderTop: "1px solid var(--divider)",
      }}
    >
      <div className="vx-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="font-syne font-extrabold"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: "1.1",
                color: "var(--text-primary)",
              }}
            >
              The system is already failing.
            </h2>

            <div className="mt-10">
              {breakdownItems.map((item, index) => (
                <div
                  key={index}
                  className="py-4 border-b"
                  style={{ borderColor: "var(--divider)" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-dm-mono text-lg"
                      style={{ color: "var(--red)" }}
                    >
                      —
                    </span>
                    <span
                      className="font-dm-sans"
                      style={{
                        fontSize: "17px",
                        lineHeight: "1.7",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Quote */}
            <div
              className="mt-8 pl-5"
              style={{
                borderLeft: "2px solid var(--amber-border)",
              }}
            >
              <p
                className="italic"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "var(--text-tertiary)",
                }}
              >
                Now the gap is clear: we are making{" "}
                <span style={{ color: "var(--text-secondary)", fontStyle: "normal" }}>
                  high-stakes decisions
                </span>{" "}
                with low-integrity inputs.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="vx-panel p-8 relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background: "linear-gradient(90deg, var(--red) 0%, transparent 100%)",
              }}
            />

            {/* Label */}
            <div
              className="font-dm-mono text-[10px] tracking-label uppercase"
              style={{
                letterSpacing: "0.15em",
                color: "var(--red)",
              }}
            >
              SIGNAL FAILURE INDICATORS
            </div>

            {/* Bars */}
            <div className="mt-8 space-y-6">
              {signalData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className="font-dm-mono text-[13px]"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="font-dm-mono text-[12px]"
                      style={{ color: "var(--red)" }}
                    >
                      {item.value}%
                    </span>
                  </div>
                  <AnimatedBar value={item.value} delay={0.3 + index * 0.1} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
