"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const integrationCards = [
  {
    icon: "</>",
    title: "API",
    description:
      "Integrate integrity signals directly into your existing workflows. RESTful endpoints, webhook support, and comprehensive documentation.",
  },
  {
    icon: "▦",
    title: "Dashboard",
    description:
      "Visual interface for exploring integrity signals, managing entities, and exporting reports. Role-based access control included.",
  },
  {
    icon: "→",
    title: "Decision Layer",
    description:
      "Embed integrity scoring into your decision pipelines. Real-time scoring, batch processing, and confidence thresholds.",
  },
];

const useCases = [
  "Hiring platforms",
  "Investment due diligence",
  "Vendor management",
  "Partnership screening",
  "Platform trust",
  "Compliance verification",
];

export function IntegrationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="integration"
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
          Built to integrate.
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
          Veraxius is not a silo. It is infrastructure meant to power your
          existing systems, workflows, and decisions.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {integrationCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + 0.1 * index,
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
              <div
                className="font-dm-mono text-2xl mb-4"
                style={{ color: "var(--amber)" }}
              >
                {card.icon}
              </div>
              <h3
                className="font-syne font-bold"
                style={{
                  fontSize: "20px",
                  color: "var(--text-primary)",
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-dm-sans mt-3"
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

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex flex-wrap justify-center items-center gap-x-2 gap-y-2"
        >
          {useCases.map((useCase, index) => (
            <span key={index} className="flex items-center">
              <span
                className="font-dm-mono text-[13px]"
                style={{ color: "var(--text-tertiary)" }}
              >
                {useCase}
              </span>
              {index < useCases.length - 1 && (
                <span
                  className="mx-2"
                  style={{ color: "var(--divider)" }}
                >
                  /
                </span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-sans text-center mt-12 max-w-2xl mx-auto"
          style={{
            fontSize: "17px",
            lineHeight: "1.65",
            color: "var(--text-secondary)",
          }}
        >
          Whatever system you have, Veraxius connects to it. Integrity becomes
          a native feature of your existing infrastructure.
        </motion.p>
      </div>
    </section>
  );
}
