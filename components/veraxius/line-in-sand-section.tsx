"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contrasts = [
  { trust: "Trust is assumed.", integrity: "Integrity is measured." },
  { trust: "Trust is declared.", integrity: "Integrity is demonstrated." },
  { trust: "Trust is static.", integrity: "Integrity adapts." },
];

export function LineInSandSection() {
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
        <div className="max-w-[800px] mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-syne font-extrabold"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: "1.1",
              color: "var(--text-primary)",
            }}
          >
            Trust is no longer enough.
          </motion.h2>

          {/* Contrast Rows */}
          <div className="mt-16 space-y-8">
            {contrasts.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center"
              >
                {/* Left - Trust (strikethrough, tertiary) */}
                <div
                  className="font-syne font-semibold text-right"
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 28px)",
                    color: "var(--text-tertiary)",
                    textDecoration: "line-through",
                  }}
                >
                  {row.trust}
                </div>

                {/* Divider - Amber vertical line */}
                <div
                  className="hidden md:block w-px h-8"
                  style={{
                    backgroundColor: "var(--amber)",
                  }}
                />
                <div
                  className="md:hidden h-px w-16 mx-auto"
                  style={{
                    backgroundColor: "var(--amber)",
                  }}
                />

                {/* Right - Integrity (primary) */}
                <div
                  className="font-syne font-semibold text-left"
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 28px)",
                    color: "var(--text-primary)",
                  }}
                >
                  {row.integrity}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16"
          >
            <p
              className="font-dm-sans"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              Trust asks us to believe. Integrity asks us to verify. In a world where
              fabrication is trivial, trust becomes a liability. Integrity becomes the
              infrastructure that makes decisions safe again.
            </p>
            <p
              className="font-dm-sans mt-4"
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "var(--text-secondary)",
              }}
            >
              Veraxius does not restore trust. It replaces it with something better:
              measurable, adaptive, and resistant to manipulation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
