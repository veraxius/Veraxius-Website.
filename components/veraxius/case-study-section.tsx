"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CaseStudySection() {
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
          What changes in practice.
        </motion.h2>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-mono text-[11px] tracking-eyebrow uppercase text-center mt-8"
          style={{
            letterSpacing: "0.18em",
            color: "var(--amber)",
          }}
        >
          HIRING DECISION
        </motion.div>

        {/* Comparison */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Without Veraxius */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="vx-panel p-8 relative"
            style={{
              borderTop: "2px solid var(--red)",
            }}
          >
            <h3
              className="font-syne font-bold"
              style={{
                fontSize: "20px",
                color: "var(--red)",
              }}
            >
              WITHOUT VERAXIUS
            </h3>

            <div className="mt-8 space-y-4">
              <p
                className="font-dm-sans"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--text-secondary)",
                }}
              >
                The hiring manager reviews a polished resume. References are
                provided—curated, naturally. The candidate interviews well,
                presenting confidence and competence. A background check confirms
                no criminal record. The offer is made.
              </p>

              <p
                className="font-dm-sans"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--text-secondary)",
                }}
              >
                Six months later: missed deadlines, mismatched skills, cultural
                friction. The candidate optimized for getting hired, not for
                doing the job. The cost: six months of salary, team disruption,
                opportunity cost, and the cost of starting over.
              </p>
            </div>

            {/* Cost Block */}
            <div
              className="mt-8 p-4"
              style={{
                backgroundColor: "rgba(255, 107, 87, 0.1)",
                borderLeft: "2px solid var(--red)",
              }}
            >
              <span
                className="font-dm-mono text-[12px]"
                style={{ color: "var(--red)" }}
              >
                COST: 6 months salary + team disruption + rehiring cycle
              </span>
            </div>
          </motion.div>

          {/* With Veraxius */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="vx-panel p-8 relative"
            style={{
              borderTop: "2px solid var(--green)",
            }}
          >
            <h3
              className="font-syne font-bold"
              style={{
                fontSize: "20px",
                color: "var(--green)",
              }}
            >
              WITH VERAXIUS
            </h3>

            <div className="mt-8 space-y-4">
              <p
                className="font-dm-sans"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--text-secondary)",
                }}
              >
                The same candidate enters the system. Veraxius cross-references
                claims against actual work products. The timeline shows consistent
                delivery patterns. Communication analysis reveals collaborative
                behavior. But: a flag surfaces—three projects with similar scope
                were abandoned before completion.
              </p>

              <p
                className="font-dm-sans"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--text-secondary)",
                }}
              >
                The hiring manager sees the full picture: strong skills,
                questionable follow-through. Interview questions are adjusted
                to probe for completion patterns. A different role—better suited
                to the candidate's actual working style—is considered.
              </p>
            </div>

            {/* Result Block */}
            <div
              className="mt-8 p-4"
              style={{
                backgroundColor: "rgba(87, 209, 140, 0.1)",
                borderLeft: "2px solid var(--green)",
              }}
            >
              <span
                className="font-dm-mono text-[12px]"
                style={{ color: "var(--green)" }}
              >
                RESULT: Informed decision, matched expectations, reduced risk
              </span>
            </div>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-mono text-center mt-12"
          style={{
            fontSize: "14px",
            color: "var(--text-tertiary)",
          }}
        >
          The difference is not information. It is signal quality.
        </motion.p>
      </div>
    </section>
  );
}
