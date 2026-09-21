"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AuthorityStatesPanels } from "./authority-states-panels";

export function AuthorityGateSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="solutions" ref={sectionRef} className="vx-section scroll-mt-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="vx-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[760px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-[var(--amber)]" />
            <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
              From trust to control
            </span>
          </div>

          <h2
            className="font-syne font-extrabold mt-6 uppercase"
            style={{ fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
          >
            Trust should change
            <br />
            <span style={{ color: "var(--amber)" }}>what happens next.</span>
          </h2>

          <p className="font-dm-sans mt-5" style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--text-secondary)" }}>
            AIM&apos;s Authority Gate translates trust state and context into
            bounded decisions.
          </p>
        </motion.div>

        {/* Five authority states — built with real components, not a screenshot */}
        <div className="mt-12">
          <AuthorityStatesPanels />
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex flex-col gap-6 border-t pt-10 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--divider)" }}
        >
          <h3
            className="font-syne font-bold"
            style={{ fontSize: "clamp(20px, 2.6vw, 30px)", lineHeight: "1.3", color: "var(--text-primary)" }}
          >
            Trust becomes operational when it{" "}
            <span style={{ color: "var(--amber)" }}>changes authority.</span>
          </h3>

          <p
            className="font-dm-mono text-right uppercase shrink-0"
            style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.14em", lineHeight: 1.6, color: "var(--text-tertiary)" }}
          >
            A more
            <br />
            trustworthy
            <br />
            AI future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
