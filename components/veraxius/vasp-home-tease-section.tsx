"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Textos tomados del brief de la landing /aimprogram (aim program — Veraxius AIM Signal Operators Program).
 * Sin copy inventado.
 */
const EYEBROW = "aim program — Veraxius AIM Signal Operators Program";
const BODY =
  "A 6-month operator program where you don't study integrity. You generate it, break it, and prove it inside a live system.";
const SUPPORT = "Monthly selection. Limited seats per cohort.";

export function VaspHomeTeaseSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="aimprogram"
      className="vx-section scroll-mt-24"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--divider)",
      }}
    >
      <div className="vx-container">
        <div className="mx-auto max-w-[600px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-dm-mono text-[11px] normal-case"
            style={{ letterSpacing: "0.18em", color: "var(--amber)" }}
          >
            {EYEBROW}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-dm-sans mt-5 leading-relaxed"
            style={{
              fontSize: "clamp(16px, 1.6vw, 19px)",
              color: "var(--text-secondary)",
            }}
          >
            {BODY}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="font-dm-mono mt-4 text-[11px]"
            style={{ letterSpacing: "0.06em", color: "var(--text-tertiary)" }}
          >
            {SUPPORT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8"
          >
            <Link
              href="/aimprogram"
              className="inline-flex font-dm-mono text-[12px] font-semibold uppercase px-8 py-4 transition-all"
              style={{
                letterSpacing: "0.12em",
                backgroundColor: "var(--amber)",
                color: "var(--bg-primary)",
                boxShadow: "0 0 24px rgba(255,185,0,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 36px rgba(255,185,0,0.4)";
                e.currentTarget.style.filter = "brightness(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 24px rgba(255,185,0,0.25)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
              aria-label="Apply Now — go to the Veraxius AIM Signal Operators Program (AIM Program) page"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
