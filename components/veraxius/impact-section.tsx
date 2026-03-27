"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const impactCards = [
  {
    title: "Hiring",
    description:
      "Move beyond resume polish. See who completes what they start. Identify the gap between claimed expertise and demonstrated capability before the offer is made.",
  },
  {
    title: "Investment",
    description:
      "Due diligence without the theater. Surface behavioral patterns in founders and key executives that predict execution vs. projection. Know who ships.",
  },
  {
    title: "Partnerships",
    description:
      "Vendor selection based on actual delivery history, not case studies. Identify partners with consistent follow-through before contracts are signed.",
  },
  {
    title: "Platforms",
    description:
      "Enable trust at scale. Give your users the tools to verify credibility without relying on easily-gamed reputation scores or review systems.",
  },
];

export function ImpactSection() {
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
          Decisions stop guessing.
        </motion.h2>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="vx-panel p-8 relative group cursor-default"
              style={{
                borderTop: "2px solid transparent",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = "var(--amber)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = "transparent";
              }}
            >
              <h3
                className="font-syne font-bold"
                style={{
                  fontSize: "24px",
                  color: "var(--text-primary)",
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-dm-sans mt-4"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--text-tertiary)",
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-mono text-center mt-16"
          style={{
            fontSize: "14px",
            letterSpacing: "0.04em",
            color: "var(--text-tertiary)",
          }}
        >
          Veraxius does not remove judgment. It upgrades the quality of judgment.
        </motion.p>
      </div>
    </section>
  );
}
