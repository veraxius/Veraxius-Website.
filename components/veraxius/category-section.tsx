"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const negationLines = [
  "Veraxius is not a scoring tool.",
  "It is not a reputation platform.",
  "It is not another layer of surface credibility.",
];

export function CategorySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="vx-section"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="vx-container">
        <div className="max-w-[860px] mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-dm-mono text-[11px] tracking-eyebrow uppercase"
            style={{
              letterSpacing: "0.18em",
              color: "var(--amber)",
            }}
          >
            INTRODUCING
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-syne font-extrabold mt-4"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: "1.1",
              color: "var(--text-primary)",
            }}
          >
            Integrity{" "}
            <span style={{ color: "var(--amber)" }}>Infrastructure.</span>
          </motion.h2>

          {/* Negation Lines */}
          <div className="mt-12 space-y-3">
            {negationLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + 0.1 * index,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-center justify-center gap-3"
              >
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
                    color: "var(--text-tertiary)",
                  }}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Positive Body */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12"
          >
            <p
              className="font-dm-sans"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              Veraxius is a system for measuring alignment between what someone claims
              and how they actually behave. It integrates across sources—resumes, work
              products, communication patterns, temporal signals—to produce a single
              integrity metric. This metric adapts over time. It learns. It surfaces
              inconsistencies that human review would miss.
            </p>

            <p
              className="font-dm-sans mt-4"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              We are not building a score. We are building the infrastructure that makes
              scores obsolete.
            </p>
          </motion.div>

          {/* Closing Blockquote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 pl-5 text-left"
            style={{
              borderLeft: "3px solid var(--amber)",
            }}
          >
            <p
              className="font-syne font-semibold"
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: "1.5",
                color: "var(--text-primary)",
              }}
            >
              "This is the layer beneath reputation. It does not matter what someone
              says they are. It matters what their behavior proves."
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
