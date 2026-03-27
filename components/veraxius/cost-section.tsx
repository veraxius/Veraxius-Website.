"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const costItems = [
  "Bad hires.",
  "Failed partnerships.",
  "Misallocated capital.",
  "False confidence.",
  "Delayed detection.",
];

export function CostSection() {
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
        <div className="max-w-[800px] mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-syne font-extrabold"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: "1.1",
              color: "var(--text-primary)",
            }}
          >
            You are already paying for this problem.
          </motion.h2>

          {/* Cost Lines */}
          <div className="mt-16 space-y-6">
            {costItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 * index,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="font-syne font-semibold"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "var(--text-tertiary)",
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* Amber Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-12 h-px w-32"
            style={{
              backgroundColor: "var(--amber)",
            }}
          />

          {/* Closing Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
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
              Every decision made with poor signal quality carries a cost. Some
              are visible: the bad hire, the failed vendor, the partnership
              that collapsed. Others are invisible: the opportunity missed because
              you were distracted by the wrong problem, the good candidate
              rejected because their resume was less polished.
            </p>

            <p
              className="font-dm-sans mt-4"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              Veraxius does not add cost. It restructures cost—moving from
              reactive damage control to proactive signal quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
