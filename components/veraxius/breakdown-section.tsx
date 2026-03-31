"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const breakdownItems = [
  "Bad hires are scaling.",
  "Perception replaces reality.",
  "Noise is mistaken for signal.",
  "The loudest wins, not the most accurate.",
  "It amplified it to a breaking point.",
];

// Original indicators data and bar component (restored)
const signalData = [
  { label: "Resume accuracy", value: 28 },
  { label: "Verified claims", value: 31 },
  { label: "Behavioral match", value: 22 },
  { label: "Signal confidence", value: 19 },
];

function AnimatedBar({ value, delay }: { value: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

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
                High-stakes decisions are now being made on low-integrity inputs. That is no longer sustainable.
              </p>
            </div>
          </motion.div>

          {/* Right Column — both panels stacked inside a single column wrapper */}
          <div className="flex flex-col gap-3">
            {/* Panel 1: Signal Failure Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
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

            {/* Panel 2: Without / With Veraxius */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="vx-panel p-8 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: "linear-gradient(90deg, var(--amber) 0%, transparent 100%)",
                }}
              />

              {/* Header */}
              <div className="grid grid-cols-3 gap-4 items-end">
                <div></div>
                <div
                  className="text-center font-dm-mono text-[11px] uppercase pb-2"
                  style={{
                    letterSpacing: "0.12em",
                    color: "var(--red)",
                    borderBottom: "2px solid var(--red)",
                  }}
                >
                  Without Veraxius
                </div>
                <div
                  className="text-center font-dm-mono text-[11px] uppercase pb-2"
                  style={{
                    letterSpacing: "0.12em",
                    color: "var(--amber)",
                    borderBottom: "2px solid var(--amber)",
                  }}
                >
                  With Veraxius
                </div>
              </div>

              {/* Rows */}
              <div className="mt-6 divide-y" style={{ borderColor: "var(--divider)" }}>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="font-dm-sans" style={{ color: "var(--text-secondary)", fontSize: "16px" }}>Signal confidence</div>
                  <div className="text-center font-dm-sans" style={{ color: "var(--red)", fontSize: "16px" }}>Low</div>
                  <div className="text-center font-dm-sans" style={{ color: "var(--amber)", fontSize: "16px" }}>High</div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="font-dm-sans" style={{ color: "var(--text-secondary)", fontSize: "16px" }}>Claim validation</div>
                  <div className="text-center font-dm-sans" style={{ color: "var(--red)", fontSize: "16px" }}>Manual</div>
                  <div className="text-center font-dm-sans" style={{ color: "var(--amber)", fontSize: "16px" }}>Automated</div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="font-dm-sans" style={{ color: "var(--text-secondary)", fontSize: "16px" }}>Decision risk</div>
                  <div className="text-center font-dm-sans" style={{ color: "var(--red)", fontSize: "16px" }}>High</div>
                  <div className="text-center font-dm-sans" style={{ color: "var(--amber)", fontSize: "16px" }}>Reduced</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
