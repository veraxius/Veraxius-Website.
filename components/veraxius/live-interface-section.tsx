"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LiveInterfacePanels } from "./live-interface-panels";

export function LiveInterfaceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="vx-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="vx-container">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1fr)] lg:items-start"
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[var(--amber)]" />
              <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
                AIM MVP5
              </span>
            </div>

            <h2
              className="font-syne font-extrabold mt-6 uppercase"
              style={{ fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              See why AI <span style={{ color: "var(--amber)" }}>was allowed</span> to act.
            </h2>

            <p
              className="font-dm-mono mt-5 uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}
            >
              Real interface. Real evidence. Real explainability.
            </p>
          </div>

          <div className="hidden h-full w-px lg:block" style={{ backgroundColor: "var(--divider)" }} />

          <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
            <p
              className="font-dm-mono uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.08em", lineHeight: 1.7, color: "var(--text-secondary)" }}
            >
              From signals
              <br />
              to authority.
              <br />
              In real time.
            </p>
            <p className="font-dm-sans" style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--text-secondary)" }}>
              The actual AIM interface showing how evidence becomes trust, and
              trust informs authority.
            </p>
          </div>
        </motion.div>

        {/* Live interface — built with real components, not a screenshot */}
        <div className="mt-12">
          <LiveInterfacePanels />
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 flex flex-col gap-8 border-t pt-10 sm:flex-row sm:items-start sm:justify-between"
          style={{ borderColor: "var(--divider)" }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
            <h3
              className="font-syne font-extrabold uppercase"
              style={{ fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: "1.3", color: "var(--text-primary)" }}
            >
              Every measurement
              <br />
              should be <span style={{ color: "var(--amber)" }}>explainable.</span>
            </h3>
            <div className="hidden w-px sm:block" style={{ backgroundColor: "var(--divider)" }} />
            <h3
              className="font-syne font-extrabold uppercase"
              style={{ fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: "1.3", color: "var(--text-primary)" }}
            >
              Every consequential action
              <br />
              should be <span style={{ color: "var(--amber)" }}>traceable.</span>
            </h3>
          </div>

          <p
            className="font-dm-mono text-right uppercase"
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
