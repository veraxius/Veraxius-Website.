"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CAPABILITY_ITEMS = [
  { label: "Generate content", icon: "document" },
  { label: "Communicate", icon: "chat" },
  { label: "Coordinate", icon: "people" },
  { label: "Decide", icon: "gear" },
  { label: "Transact", icon: "card" },
  { label: "Execute", icon: "bolt" },
] as const;

const AUTHORITY_ITEMS = [
  { label: "Verified signals", icon: "document" },
  { label: "No contradictions", icon: "shield" },
  { label: "Within policy", icon: "people" },
  { label: "Sufficient context", icon: "stack" },
  { label: "Real-time evaluation", icon: "clock" },
] as const;

type IconKey = (typeof CAPABILITY_ITEMS)[number]["icon"] | (typeof AUTHORITY_ITEMS)[number]["icon"];

const ICON_PATHS: Record<IconKey, React.ReactNode> = {
  document: (
    <path
      d="M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1ZM13 3.5V8h4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chat: (
    <path
      d="M4 5.5h16a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H9l-4 3.5V17H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  people: (
    <path
      d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 11a2.6 2.6 0 1 0 0-5.2M15 20c0-2.6 2-4.6 4.5-4.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  gear: (
    <path
      d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z M12 3.5v2.2M12 18.3v2.2M4.9 6.9l1.6 1.6M17.5 15.5l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.9 17.1l1.6-1.6M17.5 8.5l1.6-1.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  card: (
    <path
      d="M4 6.5h16a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1ZM3 10.5h18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  bolt: (
    <path
      d="M13 3 5 13.5h5.5L11 21l8-11h-5.5L13 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  shield: (
    <path
      d="M12 3.5 5 6.5v5c0 4.5 3 7.6 7 8.9 4-1.3 7-4.4 7-8.9v-5L12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  stack: (
    <path
      d="M12 3.5 4 7.5l8 4 8-4-8-4ZM4 12l8 4 8-4M4 16.5l8 4 8-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  clock: (
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5.5l3.5 2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckBadge({ tone }: { tone: "dark" | "light" }) {
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
      style={{
        borderColor: "rgba(87, 209, 140, 0.35)",
        backgroundColor: "rgba(87, 209, 140, 0.12)",
        color: "var(--green)",
      }}
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
        <path d="M3 8.5 6.2 11.5 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ChecklistCard({
  eyebrow,
  heading,
  items,
  footer,
  variant,
  delay,
}: {
  eyebrow: string;
  heading: string;
  items: ReadonlyArray<{ label: string; icon: IconKey }>;
  footer: string;
  variant: "dark" | "light";
  delay: number;
}) {
  const isLight = variant === "light";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="min-w-0 rounded-2xl border p-6 sm:p-7"
      style={{
        borderColor: isLight ? "rgba(19,19,22,0.08)" : "var(--divider)",
        backgroundColor: isLight ? "#f5f5f7" : "var(--bg-panel)",
        boxShadow: isLight ? "0 30px 60px -20px rgba(255, 184, 77, 0.25)" : "none",
      }}
    >
      <p
        className="font-dm-mono uppercase"
        style={{
          fontSize: "11px",
          letterSpacing: "0.16em",
          color: isLight ? "rgba(19,19,22,0.5)" : "var(--text-tertiary)",
        }}
      >
        {eyebrow}
      </p>
      <h3
        className="font-syne font-bold mt-3"
        style={{
          fontSize: "clamp(20px, 2.2vw, 26px)",
          lineHeight: "1.25",
          color: isLight ? "#131316" : "var(--text-primary)",
        }}
      >
        {heading}
      </h3>

      <ul className="mt-6 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex min-w-0 items-center justify-between gap-3 rounded-xl border px-3.5 py-3"
            style={{
              borderColor: isLight ? "rgba(19,19,22,0.08)" : "var(--divider)",
              backgroundColor: isLight ? "#ffffff" : "var(--bg-secondary)",
            }}
          >
            <span className="flex min-w-0 items-center gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: isLight ? "rgba(19,19,22,0.06)" : "var(--surface-input)",
                  color: isLight ? "#131316" : "var(--text-secondary)",
                }}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  {ICON_PATHS[item.icon]}
                </svg>
              </span>
              <span
                className="min-w-0 font-dm-sans font-medium"
                style={{ fontSize: "15px", color: isLight ? "#131316" : "var(--text-primary)" }}
              >
                {item.label}
              </span>
            </span>
            <CheckBadge tone={variant} />
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-5 border-t" style={{ borderColor: isLight ? "rgba(19,19,22,0.08)" : "var(--divider)" }}>
        <p
          className="font-dm-mono uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            lineHeight: 1.6,
            color: isLight ? "rgba(19,19,22,0.45)" : "var(--text-tertiary)",
          }}
        >
          {footer}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyNowSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="vx-section" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="vx-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center lg:gap-10">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[var(--amber)]" />
              <span
                className="font-dm-mono text-[11px] uppercase text-[var(--amber)]"
                style={{ letterSpacing: "0.18em" }}
              >
                The Shift
              </span>
            </div>

            <h2
              className="font-syne font-extrabold mt-6 uppercase"
              style={{
                fontSize: "clamp(24px, 2.6vw, 38px)",
                lineHeight: "1.1",
                letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}
            >
              AI can increasingly act.
              <br />
              Who decides
              <br />
              when it should?
            </h2>

            <div
              className="font-dm-sans mt-6"
              style={{ fontSize: "17px", lineHeight: "1.65", color: "var(--text-secondary)" }}
            >
              <p>AI systems are moving beyond generating information.</p>
              <p className="mt-3">
                They can recommend.
                <br />
                Communicate.
                <br />
                Coordinate.
                <br />
                Decide.
                <br />
                Transact.
                <br />
                Execute.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row">
              <div className="sm:border-l sm:pl-6" style={{ borderColor: "var(--divider)" }}>
                <p className="font-dm-sans" style={{ fontSize: "15px", color: "var(--text-secondary)" }}>
                  Capability answers:
                </p>
                <p
                  className="font-syne font-bold mt-1"
                  style={{ fontSize: "20px", color: "var(--text-primary)" }}
                >
                  What can AI do?
                </p>
              </div>
              <div className="sm:border-l sm:pl-6" style={{ borderColor: "var(--divider)" }}>
                <p className="font-dm-sans" style={{ fontSize: "15px", color: "var(--text-secondary)" }}>
                  AIM addresses another question:
                </p>
                <p
                  className="font-syne font-bold mt-1"
                  style={{ fontSize: "20px", lineHeight: "1.3", color: "var(--amber)" }}
                >
                  What should AI
                  <br />
                  be allowed to do?
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Capability -> Authority transition */}
          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
            <ChecklistCard
              eyebrow="Capability"
              heading="Can the system act?"
              items={CAPABILITY_ITEMS}
              footer="AI can do more than ever before."
              variant="dark"
              delay={0.1}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center"
            >
              <ArrowIcon className="h-6 w-10 rotate-90 text-[var(--amber)] sm:rotate-0" />
            </motion.div>

            <ChecklistCard
              eyebrow="Authority"
              heading="Does the available evidence justify allowing it?"
              items={AUTHORITY_ITEMS}
              footer="AIM determines what should be allowed."
              variant="light"
              delay={0.25}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
