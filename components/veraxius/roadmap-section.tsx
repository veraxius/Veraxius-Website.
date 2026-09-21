"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RoadmapPanels } from "./roadmap-panels";

export function RoadmapSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="vx-section" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="vx-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1fr)] lg:items-center"
        >
          <div>
            <span
              className="font-dm-mono text-[11px] uppercase text-[var(--text-tertiary)]"
              style={{ letterSpacing: "0.18em" }}
            >
              September 2026
            </span>

            <h2
              className="font-syne font-extrabold mt-4 uppercase"
              style={{ fontSize: "clamp(24px, 2.8vw, 36px)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              Built.
              <br />
              Now ready
              <br />
              <span style={{ color: "var(--amber)" }}>to be challenged.</span>
            </h2>
          </div>

          <div className="hidden h-full w-px lg:block" style={{ backgroundColor: "var(--divider)" }} />

          <div className="border-l-2 pl-5" style={{ borderColor: "var(--amber)" }}>
            <p
              className="font-syne font-semibold"
              style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "1.4", color: "var(--text-primary)" }}
            >
              The next milestone
              <br />
              is not another model.
              <br />
              <span className="font-extrabold" style={{ color: "var(--amber)" }}>
                It is evidence.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Built -> Validating now -> Next — built with real components, not a screenshot */}
        <div className="mt-12">
          <RoadmapPanels />
        </div>
      </div>
    </section>
  );
}
