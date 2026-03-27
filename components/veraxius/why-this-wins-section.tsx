"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defensibilityItems = [
  "Data moat: Every integration increases signal resolution",
  "Model advantage: Feedback loops improve prediction accuracy",
  "Switching costs: Historical integrity profiles become infrastructure",
  "Network effects: More users = better signals = more users",
];

export function WhyThisWinsSection() {
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
        <div className="max-w-[640px]">
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
            Integrity compounds. Static systems don&apos;t.
          </motion.h2>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8"
          >
            <p
              className="font-dm-sans"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              Every signal Veraxius processes makes the next prediction better.
              Every user adds data that improves the model. Every year of
              operation increases the gap between Veraxius and any potential
              competitor.
            </p>

            <p
              className="font-dm-sans mt-4"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              This is not a feature. This is structural advantage. The system
              gets smarter. The data gets richer. The moat gets deeper.
            </p>
          </motion.div>

          {/* Defensibility List */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 space-y-4"
          >
            {defensibilityItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span
                  className="font-dm-mono text-lg"
                  style={{ color: "var(--amber)", lineHeight: 1 }}
                >
                  ·
                </span>
                <span
                  className="font-dm-mono text-[13px]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Closing Blockquote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 pl-5"
            style={{
              borderLeft: "3px solid var(--amber)",
            }}
          >
            <p
              className="font-syne font-semibold"
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "var(--text-primary)",
              }}
            >
              &quot;The winner in integrity infrastructure will not be the company
              with the best marketing. It will be the company with the most
              data, the best model, and the deepest integrations.&quot;
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
