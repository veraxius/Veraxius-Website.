"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stackItems = [
  {
    number: "01",
    title: "Veraxius Trust Layer",
    description:
      "The foundational data fabric that connects disparate signal sources into a unified integrity graph. Resilient, auditable, and privacy-preserving by design.",
  },
  {
    number: "02",
    title: "Adaptive Integrity Model",
    description:
      "A machine learning architecture that weights signals based on their predictive validity—not all data is equally trustworthy. The model evolves as new patterns emerge.",
  },
  {
    number: "03",
    title: "Adaptive Integrity Metric (AIM)",
    description:
      "The core computation that translates multi-source signals into a single interpretable score. AIM captures consistency, reliability, and behavioral alignment.",
  },
  {
    number: "04",
    title: "Trust Score",
    description:
      "The output interface: a normalized integrity rating with confidence intervals, trend analysis, and contextual flags. Not a final judgment—a decision support signal.",
  },
];

export function IntegrityStackSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="vx-section"
      style={{
        backgroundColor: "var(--bg-secondary)",
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
          The Veraxius Integrity Stack.
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
          Four layers. One system. Each component feeds the next, creating an
          integrity signal that is greater than the sum of its inputs.
        </motion.p>

        {/* Stack Items */}
        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{
              backgroundColor: "var(--amber-border)",
            }}
          />

          <div className="space-y-12 lg:pl-12">
            {stackItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + 0.1 * index,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative"
              >
                {/* Horizontal connector line (desktop only) */}
                <div
                  className="absolute -left-12 top-6 w-8 h-px hidden lg:block"
                  style={{
                    background: `linear-gradient(90deg, var(--amber-border) 0%, transparent 100%)`,
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span
                    className="font-dm-mono text-[13px]"
                    style={{ color: "var(--amber)", minWidth: "24px" }}
                  >
                    {item.number}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="font-syne font-bold"
                      style={{
                        fontSize: "24px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-dm-sans mt-2"
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.65",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-mono text-center mt-16"
          style={{
            fontSize: "13px",
            letterSpacing: "0.04em",
            color: "var(--text-tertiary)",
          }}
        >
          Simple to read. Hard to fake. Designed to adapt.
        </motion.p>
      </div>
    </section>
  );
}
