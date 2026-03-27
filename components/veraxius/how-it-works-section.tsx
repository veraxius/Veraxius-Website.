"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Raw behavioral data from multiple touchpoints: work products, communication patterns, timeline adherence, and third-party verifications.",
  },
  {
    number: "02",
    title: "Normalize",
    description:
      "Standardize disparate inputs into comparable formats. Context-weighted normalization accounts for industry, role, and environmental factors.",
  },
  {
    number: "03",
    title: "Extract",
    description:
      "Feature extraction identifies signal from noise. Key integrity indicators: consistency index, behavioral variance, temporal reliability.",
  },
  {
    number: "04",
    title: "Compute",
    description:
      "The AIM engine runs multi-factor analysis, weighting signals by their predictive validity. Outliers are flagged, patterns are surfaced.",
  },
  {
    number: "05",
    title: "Learn",
    description:
      "Feedback loops refine the model. Prediction accuracy improves over time. The system adapts to new manipulation patterns.",
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "A clean integrity signal: score, confidence interval, trend direction, and contextual flags. Ready for human decision-making.",
  },
];

export function HowItWorksSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
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
          From behavior to decision signal.
        </motion.h2>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="vx-panel p-8 group cursor-default"
              style={{
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--amber-border)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--divider)";
              }}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="font-dm-mono text-[13px]"
                  style={{ color: "var(--amber)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-syne font-bold"
                  style={{
                    fontSize: "20px",
                    color: "var(--text-primary)",
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <p
                className="font-dm-sans mt-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--text-tertiary)",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-mono text-center mt-16"
          style={{
            fontSize: "14px",
            letterSpacing: "0.04em",
            color: "var(--text-tertiary)",
          }}
        >
          Integrity is no longer a subjective impression. It becomes a system output.
        </motion.p>
      </div>
    </section>
  );
}
