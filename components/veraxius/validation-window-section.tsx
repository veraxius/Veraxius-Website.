"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { JOIN_NOW_LOGIN_URL } from "./constants";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Percentages are matched to where each of the 4 cards sits inside the
// graphic image, so these sit right at the bottom of their own card.
const CARD_CTAS: { label: string; left: number; width: number; color: string; textColor?: string }[] = [
  { label: "Build a pilot", left: 4.05, width: 19, color: "#34D6B0" },
  { label: "Research with us", left: 28.7, width: 19, color: "#4DA3FF" },
  { label: "Build with AIM", left: 53.5, width: 19, color: "var(--amber)" },
  { label: "Investor information", left: 77.4, width: 19, color: "#A78BFA" },
];

export function ValidationWindowSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="validation" ref={sectionRef} className="vx-section overflow-hidden scroll-mt-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="vx-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.8fr)] lg:items-center">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col"
          >
            <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
              The validation window
            </span>

            <h2
              className="font-syne font-extrabold mt-4 uppercase"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: "1.15", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              AIM needs more
              <br />
              than users.
              <br />
              <span style={{ color: "var(--amber)" }}>
                It needs
                <br />
                challengers.
              </span>
            </h2>

            <div className="mt-6 h-px w-10" style={{ backgroundColor: "var(--amber)" }} />

            <p className="font-dm-sans mt-6" style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--text-secondary)" }}>
              Different perspectives. A stronger, more trustworthy AIM for
              everyone.
            </p>

            <p
              className="font-dm-mono mt-auto pt-12 uppercase"
              style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.14em", lineHeight: 1.6, color: "var(--text-tertiary)" }}
            >
              A more
              <br />
              trustworthy
              <br />
              AI future.
            </p>
          </motion.div>

          {/* RIGHT — pre-built graphic (transparent PNG) + real CTA buttons overlaid,
              since the cards themselves don't have buttons baked in */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
            style={{ marginLeft: "clamp(24px, 6vw, 90px)" }}
          >
            <Image
              src="/ChatGPT Image 20 sept 2026, 02_44_27 p.m..png"
              alt="Enterprise: Test AIM. Research: Challenge AIM. Technology: Connect AIM. Capital: Scale AIM."
              width={1708}
              height={920}
              className="h-auto w-full"
              style={{ opacity: 0.82 }}
            />

            {CARD_CTAS.map((cta) => (
              <a
                key={cta.label}
                href={JOIN_NOW_LOGIN_URL}
                className="absolute flex items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full font-dm-mono font-semibold uppercase"
                style={{
                  left: `${cta.left}%`,
                  width: `${cta.width}%`,
                  bottom: "13.3%",
                  height: "5.2%",
                  fontSize: "clamp(7px, 0.8vw, 10px)",
                  letterSpacing: "0.02em",
                  backgroundColor: cta.color,
                  color: cta.textColor ?? "#0A0A0B",
                }}
              >
                {cta.label}
                <ArrowIcon className="h-[0.9em] w-[0.9em] shrink-0" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
