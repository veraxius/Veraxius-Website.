"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const JOIN_NOW_LOGIN_URL = "https://app.veraxius.com/login";

export const joinNowButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-[var(--amber)] px-7 py-3 font-semibold text-[var(--bg-primary)] transition hover:opacity-90";

const mvp4CtaButtonClassName =
  "inline-flex min-h-[64px] items-center justify-center font-dm-mono font-semibold text-[14px] uppercase px-14 py-5 text-[var(--bg-primary)] transition-all";

const mvp4Features = [
  {
    number: "01",
    title: "Behavior-Based Trust Scoring",
    body: "Your AIM score reflects real interactions and outcomes, not self-reported claims.",
  },
  {
    number: "02",
    title: "Adaptive Over Time",
    body: "Trust isn't static. Scores adjust automatically as new activity and outcomes come in, with built-in decay for inactivity.",
  },
  {
    number: "03",
    title: "Transparent Explanations",
    body: "Every score change comes with a clear reason — you always know what moved your trust up or down.",
  },
  {
    number: "04",
    title: "Real-Time Trajectory",
    body: "Track your AIM score's movement over the last 30 days with a live, continuously updating chart.",
  },
] as const;

export function Mvp4LaunchSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="mvp4-launch"
      className="vx-section"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="vx-container">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-dm-mono text-center text-[11px] uppercase"
          style={{ letterSpacing: "0.18em", color: "var(--amber)" }}
        >
          FROM VERAXIUS
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-syne mt-4 text-center font-extrabold"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: "1.1",
            color: "var(--text-primary)",
          }}
        >
          MVP4 is{" "}
          <span
            style={{
              color: "var(--amber)",
              textShadow: "0 0 28px rgba(255,185,0,0.25)",
            }}
          >
            live.
          </span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="font-dm-sans mx-auto mt-6 max-w-2xl text-center"
          style={{
            fontSize: "17px",
            lineHeight: "1.65",
            color: "var(--text-secondary)",
          }}
        >
          Veraxius is moving from preview to product. MVP4 is our first publicly
          accessible release of Integrity Infrastructure — built for teams that
          need measurable signal quality, not polished narratives.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="font-dm-mono mx-auto mt-4 max-w-xl text-center text-[11px]"
          style={{ letterSpacing: "0.06em", color: "var(--text-tertiary)" }}
        >
          Sign in and start using the layer where decisions actually happen.
        </motion.p>

        {/* Features label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-14 mb-6 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10" style={{ background: "var(--amber)", opacity: 0.4 }} />
          <span
            className="font-dm-mono text-[11px] uppercase"
            style={{ letterSpacing: "0.16em", color: "var(--text-primary)" }}
          >
            What MVP4 proves
          </span>
          <div className="h-px w-10" style={{ background: "var(--amber)", opacity: 0.4 }} />
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mvp4Features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.32 + index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="vx-panel relative flex cursor-default flex-col p-6 sm:p-7"
              style={{
                borderTop: "2px solid transparent",
                transition: "border-color 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = "var(--amber)";
                e.currentTarget.style.background = "rgba(255,185,0,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = "transparent";
                e.currentTarget.style.background = "";
              }}
            >
              <span
                className="font-dm-mono mb-4 block text-[11px]"
                style={{ color: "var(--amber)", opacity: 0.6, letterSpacing: "0.1em" }}
              >
                {feature.number}
              </span>

              <h3
                className="font-syne font-bold"
                style={{
                  fontSize: "19px",
                  lineHeight: "1.25",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.title}
              </h3>

              <p
                className="font-dm-sans mt-3 flex-1"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "var(--text-tertiary)",
                }}
              >
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.64, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <div
            className="mx-auto mb-8 h-px w-8"
            style={{ background: "var(--divider)" }}
          />
          <a
            href={JOIN_NOW_LOGIN_URL}
            className={mvp4CtaButtonClassName}
            style={{
              letterSpacing: "0.12em",
              backgroundColor: "var(--amber)",
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
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
