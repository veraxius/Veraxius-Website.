"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { JOIN_NOW_LOGIN_URL } from "./constants";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Icon({ d, className }: { d: string; className?: string }) {
  return (
    <svg {...ICON_PROPS} className={className}>
      <path d={d} />
    </svg>
  );
}

const FOCUS_ITEMS = [
  { label: "Build.", icon: "M12 2.5a2.3 2.3 0 0 0-1.6 3.9A9.5 9.5 0 0 0 5.1 9a2.3 2.3 0 1 0 .6 4.5A9.5 9.5 0 0 0 9 18.3a2.3 2.3 0 1 0 4.5.6A9.5 9.5 0 0 0 18.3 15a2.3 2.3 0 1 0-.6-4.5A9.5 9.5 0 0 0 15 5.1a2.3 2.3 0 0 0-3-2.6ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
  { label: "Test.", icon: "M9.5 3.5h5M10.5 3.5v5.3L6 17a1.6 1.6 0 0 0 1.4 2.4h9.2A1.6 1.6 0 0 0 18 17l-4.5-8.2V3.5" },
  { label: "Measure.", icon: "M4 19V13M9.5 19V9M15 19V6M20 19V11" },
  { label: "Learn.", icon: "M4 5.5c2.5-1 5.5-1 8 0v13c-2.5-1-5.5-1-8 0v-13ZM20 5.5c-2.5-1-5.5-1-8 0v13c2.5-1 5.5-1 8 0v-13Z" },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative max-w-full overflow-hidden aspect-[1632/964] min-h-[520px] scroll-mt-24"
    >
      {/* Background photo — container matches the photo's own aspect ratio so
          object-cover never has to crop it; a taller box (from a long text
          block) would otherwise crop the top/bottom and collide with the
          "Antonio Ant Lovera" caption baked into the lower-left of the photo. */}
      <div className="absolute inset-0">
        <Image
          src="/Veraxius Website 2.0 -SECTION 10 PHOTO.png"
          alt="Antonio Lovera, Veraxius Founder, at his desk with the AIM interface"
          width={1632}
          height={964}
          className="h-full w-full object-cover"
        />
        {/* Darken the left side so the copy stays legible over the photo */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(10,10,11,0.88) 0%, rgba(10,10,11,0.72) 32%, rgba(10,10,11,0.25) 55%, transparent 68%)" }}
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="vx-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[520px]"
        >
          <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
            Veraxius
          </span>

          <h2
            className="font-syne font-extrabold mt-4 uppercase break-words"
            style={{ fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em", color: "#ffffff" }}
          >
            Building the layer
            <br />
            Between <span style={{ color: "var(--amber)" }}>intelligence</span>
            <br />
            and action.
          </h2>

          <p className="font-dm-sans mt-5" style={{ fontSize: "16px", lineHeight: "1.65", color: "rgba(255,255,255,0.75)" }}>
            Veraxius is developing trust + authority infrastructure for
            increasingly autonomous AI systems.
          </p>

          <div className="mt-6 h-px w-full max-w-[280px]" style={{ backgroundColor: "rgba(255,255,255,0.18)" }} />

          <p className="mt-6" style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)" }}>
            Our current focus is simple:
          </p>

          <ul className="mt-4 space-y-3">
            {FOCUS_ITEMS.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(255,184,77,0.14)", color: "var(--amber)" }}
                >
                  <Icon d={item.icon} className="h-4 w-4" />
                </span>
                <span className="font-syne font-bold" style={{ fontSize: "16px", color: "#ffffff" }}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5" style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)" }}>
            Then scale what the evidence supports.
          </p>

          <a
            href={JOIN_NOW_LOGIN_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-7 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
            style={{ letterSpacing: "0.06em" }}
          >
            About Veraxius
            <ArrowIcon className="h-3 w-3" />
          </a>
        </motion.div>
        </div>
      </div>

      {/* Glass panel — not baked into the photo, added here */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-[6%] right-[3%] z-10 hidden w-[190px] rounded-lg border p-4 backdrop-blur-md lg:block"
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          borderColor: "rgba(255,255,255,0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        }}
      >
        <p className="font-dm-sans font-medium" style={{ fontSize: "13px", lineHeight: 1.5, color: "#ffffff" }}>
          Evidence builds trust.
        </p>
        <p className="font-dm-sans font-medium mt-2" style={{ fontSize: "13px", lineHeight: 1.5, color: "#ffffff" }}>
          Trust enables a better tomorrow.
        </p>
      </motion.div>
    </section>
  );
}
