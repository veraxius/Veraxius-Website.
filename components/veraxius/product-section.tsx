"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { JOIN_NOW_LOGIN_URL } from "./constants";

type LoopStep = {
  n: string;
  title: string;
  question: string;
  iconPath: string;
  angleDeg: number;
};

function StepIcon({ d, className }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const LOOP_STEPS: LoopStep[] = [
  {
    n: "01",
    title: "Evidence",
    question: "What do we know?",
    angleDeg: 90,
    iconPath: "M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1ZM13 3.5V8h4",
  },
  {
    n: "02",
    title: "Trust",
    question: "What confidence does the evidence justify?",
    angleDeg: 30,
    iconPath: "M12 3.5 5 6.5v5c0 4.5 3 7.6 7 8.9 4-1.3 7-4.4 7-8.9v-5L12 3.5Z",
  },
  {
    n: "03",
    title: "Authority",
    question: "What should be permitted?",
    angleDeg: -30,
    iconPath: "M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 11a2.6 2.6 0 1 0 0-5.2M15 20c0-2.6 2-4.6 4.5-4.6",
  },
  {
    n: "04",
    title: "Action",
    question: "What happens next?",
    angleDeg: -90,
    iconPath: "M13 3 5 13.5h5.5L11 21l8-11h-5.5L13 3Z",
  },
  {
    n: "05",
    title: "Outcome",
    question: "What actually happened?",
    angleDeg: -150,
    iconPath: "M4.5 12.5 9 17l10.5-11",
  },
  {
    n: "06",
    title: "Updated trust",
    question: "What should change?",
    angleDeg: 150,
    iconPath: "M4 12a8 8 0 0 1 13.7-5.7L20 8M20 3v5h-5M20 12a8 8 0 0 1-13.7 5.7L4 16M4 21v-5h5",
  },
];

const RADIUS = 39; // percent of the square container — where the node cards sit
const CENTER = 50;
// Arcs stay on the exact same circle as the cards (RADIUS) so they visually
// reach each card instead of floating at a mismatched radius — they're just
// trimmed a few degrees short on each end so the tip lands at the card's
// facing edge instead of piercing through to its center / number tab.
const ARC_TRIM_DEG = 18;

// Rounded to 3 decimals: Math.cos/sin can return a value whose last digit
// differs by a hair between the server's V8 and the browser's, which was
// enough for React to flag a hydration mismatch on the generated path string.
function pointOnCircle(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round((CENTER + radius * Math.cos(rad)) * 1000) / 1000,
    y: Math.round((CENTER - radius * Math.sin(rad)) * 1000) / 1000,
  };
}

function LoopDiagram() {
  const arcs = LOOP_STEPS.map((step, i) => {
    const next = LOOP_STEPS[(i + 1) % LOOP_STEPS.length];
    const from = pointOnCircle(step.angleDeg - ARC_TRIM_DEG, RADIUS);
    const to = pointOnCircle(next.angleDeg + ARC_TRIM_DEG, RADIUS);
    return { id: `${step.n}-${next.n}`, from, to };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      {/* Arrows between nodes, drawn along the circle */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <marker id="loop-arrow" viewBox="0 0 20 20" refX="15" refY="10" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path
              d="M4 4 Q13 7.5 17 10 Q13 12.5 4 16"
              fill="none"
              stroke="var(--amber-glow)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
          {/* Subtle neon glow — soft blur behind the line, kept small so it reads as a glow, not a haze */}
          <filter id="arrow-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {arcs.map((arc) => (
          <path
            key={arc.id}
            d={`M ${arc.from.x} ${arc.from.y} A ${RADIUS} ${RADIUS} 0 0 1 ${arc.to.x} ${arc.to.y}`}
            fill="none"
            stroke="var(--amber-glow)"
            strokeWidth="0.6"
            markerEnd="url(#loop-arrow)"
            filter="url(#arrow-glow)"
          />
        ))}
      </svg>

      {/* Center — AIM mark */}
      <div
        className="absolute rounded-full border flex flex-col items-center justify-center gap-2 px-6 text-center"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "44%",
          height: "44%",
          borderColor: "var(--amber-border)",
          background: "radial-gradient(circle, var(--amber-glow-subtle) 0%, transparent 75%)",
        }}
      >
        <Image src="/Veraxius AIM model Logo & Icon.png" alt="" width={80} height={80} className="h-10 w-10 sm:h-12 sm:w-12" />
        <span className="font-syne font-extrabold lowercase leading-none" style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--text-primary)" }}>
          aim
        </span>
        <span
          className="font-dm-mono uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.14em", color: "var(--amber)" }}
        >
          Adaptive Integrity Model
        </span>
      </div>

      {/* Nodes */}
      {LOOP_STEPS.map((step, i) => {
        const pos = pointOnCircle(step.angleDeg, RADIUS);
        return (
          // Plain div handles the centering transform. framer-motion owns
          // `transform` entirely on any motion.div that animates `scale`/etc,
          // so a CSS `transform: translate(-50%,-50%)` set directly in a
          // motion.div's style gets silently discarded — the card then sits
          // with its top-left corner (not its center) at the computed point,
          // throwing every card off by half its own size. Splitting the
          // positioning (here) from the animation (the motion.div inside)
          // avoids that conflict.
          <div
            key={step.n}
            className="absolute w-[40%] max-w-[190px]"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative rounded-xl border p-2.5 sm:p-3"
              style={{ borderColor: "var(--divider)", backgroundColor: "var(--bg-panel)" }}
            >
              <span
                className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-md font-dm-mono font-bold"
                style={{ fontSize: "10px", backgroundColor: "var(--amber)", color: "var(--text-on-amber)" }}
              >
                {step.n}
              </span>
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2"
                  style={{ borderColor: "var(--amber-border)", backgroundColor: "var(--amber-glow-subtle)", color: "var(--amber)" }}
                >
                  <StepIcon d={step.iconPath} className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-syne font-bold uppercase leading-tight" style={{ fontSize: "12px", color: "var(--text-primary)" }}>
                    {step.title}
                  </p>
                  <p className="font-dm-sans mt-0.5 leading-tight" style={{ fontSize: "10px", color: "var(--text-tertiary)" }}>
                    {step.question}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export function ProductSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="product" ref={sectionRef} className="vx-section overflow-hidden scroll-mt-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="vx-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[var(--amber)]" />
              <span className="font-dm-mono text-[11px] uppercase text-[var(--amber)]" style={{ letterSpacing: "0.18em" }}>
                Meet AIM™
              </span>
            </div>

            <h2
              className="font-syne font-extrabold mt-6 uppercase"
              style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "var(--text-primary)" }}
            >
              Trust becomes
              <br />
              <span style={{ color: "var(--amber)" }}>authority.</span>
            </h2>

            <p className="font-dm-sans mt-6" style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--text-secondary)" }}>
              AIM™ is the Adaptive Integrity Model developed by Veraxius.
            </p>
            <p className="font-dm-sans mt-4" style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--text-secondary)" }}>
              It converts evidence into dynamic trust states and uses those
              states to inform bounded authority.
            </p>

            <div className="mt-8 h-px w-full max-w-[280px]" style={{ backgroundColor: "var(--divider)" }} />

            <p className="font-syne font-bold mt-8" style={{ fontSize: "22px", color: "var(--text-primary)" }}>
              Trust is not static.
            </p>
            <p className="font-dm-sans mt-1" style={{ fontSize: "17px", color: "var(--text-secondary)" }}>
              Neither should authority be.
            </p>

            <a
              href={JOIN_NOW_LOGIN_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-7 py-3.5 font-dm-mono font-semibold text-[13px] uppercase tracking-cta text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
              style={{ letterSpacing: "0.06em" }}
            >
              Explore AIM
              <svg viewBox="0 0 16 10" className="h-3 w-3" fill="none" aria-hidden="true">
                <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* RIGHT — control loop */}
          <div className="flex items-center justify-center">
            <LoopDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
