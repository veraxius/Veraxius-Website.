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

export function FinalCtaSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/final-cta-earth-photo.png"
          alt="Earth from orbit at dawn, with the Veraxius mark glowing on the horizon"
          width={1672}
          height={941}
          className="h-full w-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        {/* Darken the left side so the copy stays legible over the photo */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.62) 42%, rgba(10,10,11,0.15) 62%, transparent 78%)" }}
        />
      </div>

      <div className="relative z-10 vx-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[640px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-[var(--amber)]" />
            <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
              The window is now
            </span>
          </div>

          <h2
            className="font-syne font-extrabold mt-6 uppercase"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "#ffffff" }}
          >
            AI can act.
            <br />
            <span style={{ color: "var(--amber)" }}>
              The question is
              <br />
              whether it should.
            </span>
          </h2>

          <p className="font-dm-sans mt-6" style={{ fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)" }}>
            AIM is ready for its next test.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={JOIN_NOW_LOGIN_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-7 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
              style={{ letterSpacing: "0.06em" }}
            >
              Build a pilot
              <ArrowIcon className="h-3 w-3" />
            </a>
            <a
              href={JOIN_NOW_LOGIN_URL}
              className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta transition-colors"
              style={{ letterSpacing: "0.06em", borderColor: "var(--amber)", color: "#ffffff" }}
            >
              Challenge AIM
              <ArrowIcon className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-10 h-px w-full max-w-[280px]" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

          <p className="font-dm-sans mt-6" style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(255,255,255,0.7)" }}>
            Trust must be measured.
            <br />
            Authority must be earned.
          </p>
        </motion.div>
      </div>

      {/* Bookend tagline — bottom right */}
      <p
        className="hidden lg:block absolute bottom-8 right-6 z-10 text-right font-dm-mono"
        style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.14em", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}
      >
        A more
        <br />
        trustworthy
        <br />
        AI future.
      </p>
    </section>
  );
}
