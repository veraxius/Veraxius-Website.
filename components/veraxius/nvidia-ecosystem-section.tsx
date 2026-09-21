"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Icon({ d, className, style }: { d: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg {...ICON_PROPS} className={className} style={style}>
      <path d={d} />
    </svg>
  );
}

const BENEFITS = [
  { label: "Ecosystem access", icon: "M9 11a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16.5 11a2.6 2.6 0 1 0 0-5.2M16 14.5c2.5.3 4.5 2.4 4.5 5.5" },
  { label: "Technical resources", icon: "M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z M12 3.5v2.2M12 18.3v2.2M4.9 6.9l1.6 1.6M17.5 15.5l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.9 17.1l1.6-1.6M17.5 8.5l1.6-1.6" },
  { label: "Training", icon: "M4 5.5c2.5-1 5.5-1 8 0v13c-2.5-1-5.5-1-8 0v-13ZM20 5.5c-2.5-1-5.5-1-8 0v13c2.5-1 5.5-1 8 0v-13Z" },
  { label: "Growth opportunities", icon: "M4 19V13M9.5 19V9M15 19V6M20 19V11M4 8l5-4 4 3 6-5" },
];

export function NvidiaEcosystemSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden aspect-[1774/887] min-h-[560px]" style={{ backgroundColor: "#0d0d10" }}>
      {/* Right panel — photo */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src="/ChatGPT Image 20 sept 2026, 03_02_32 p.m..png"
          alt="The NVIDIA Inception Program sign in a modern office"
          width={1774}
          height={887}
          className="h-full w-full object-cover object-right"
        />
        {/* Soft fade into the left panel so the seam isn't a hard cut */}
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: "50%", background: "linear-gradient(90deg, #0d0d10 0%, rgba(13,13,16,0.75) 35%, transparent 100%)" }}
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="vx-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex max-w-[480px] flex-col"
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full border"
                style={{ borderColor: "var(--amber-border)", color: "var(--amber)" }}
              >
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
                NVIDIA Inception
              </span>
            </div>

            <h2
              className="font-syne font-extrabold mt-4 uppercase"
              style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: "1.15", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              Building within
              <br />
              <span style={{ color: "var(--amber)" }}>a global AI ecosystem.</span>
            </h2>

            <p className="font-dm-sans mt-5 font-semibold" style={{ fontSize: "16px", color: "var(--text-primary)" }}>
              Veraxius is a member of the NVIDIA Inception program.
            </p>

            <p className="font-dm-sans mt-3" style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--text-secondary)" }}>
              Our participation provides access to NVIDIA&apos;s startup
              ecosystem, technical resources, training, and growth
              opportunities as we continue developing and validating AIM.
            </p>

            <div className="mt-6 h-px w-10" style={{ backgroundColor: "var(--amber)" }} />

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
              {BENEFITS.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <Icon d={item.icon} className="h-6 w-6" style={{ color: "var(--amber)" }} />
                  <span
                    className="font-dm-mono uppercase leading-tight"
                    style={{ fontSize: "10.5px", letterSpacing: "0.06em", color: "var(--text-secondary)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="font-dm-mono mt-10 uppercase"
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
      </div>
    </section>
  );
}
