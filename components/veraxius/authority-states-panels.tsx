"use client";

import { motion } from "framer-motion";

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

const ICONS = {
  play: "M8 5.5v13l11-6.5-11-6.5Z",
  lock: "M7 10.5V8a5 5 0 0 1 10 0v2.5M6 10.5h12a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1Z",
  search: "M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM20.5 20.5l-4.4-4.4",
  people: "M9 11a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16.5 11a2.6 2.6 0 1 0 0-5.2M16 14.5c2.5.3 4.5 2.4 4.5 5.5",
  block: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM5.6 5.6l12.8 12.8",
  document: "M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1ZM13 3.5V8h4",
  sliders: "M4 6h9M17 6h3M4 12h3M11 12h9M4 18h13M20 18h0",
  question: "M9.5 9a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.2 1-1.2 1.8v.5M12 17h.01",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8",
  shield: "M12 3.5 5 6.5v5c0 4.5 3 7.6 7 8.9 4-1.3 7-4.4 7-8.9v-5L12 3.5Z",
};

type AuthorityState = {
  n: string;
  title: string;
  subtitle: string;
  color: string;
  icon: keyof typeof ICONS;
  rangeLabel: string;
  fillPct: number;
  whenLabel: string;
  items: string[];
  exampleIcon: keyof typeof ICONS;
  example: string;
};

const STATES: AuthorityState[] = [
  {
    n: "01",
    title: "Execute",
    subtitle: "Proceed.",
    color: "#34D6B0",
    icon: "play",
    rangeLabel: "≥ 75%",
    fillPct: 92,
    whenLabel: "When AIM will execute:",
    items: ["Trust is high and stable", "No material contradictions", "Within approved scope", "Meets safety and policy rules"],
    exampleIcon: "document",
    example: "Post content to LinkedIn on your behalf.",
  },
  {
    n: "02",
    title: "Constrain",
    subtitle: "Proceed within defined limits.",
    color: "var(--amber)",
    icon: "lock",
    rangeLabel: "50% – 74%",
    fillPct: 62,
    whenLabel: "When AIM will constrain:",
    items: ["Trust is moderate", "Some uncertainty or limited evidence", "Allowed in reduced scope", "Additional monitoring applied"],
    exampleIcon: "sliders",
    example: "Draft an email, but require your review before sending.",
  },
  {
    n: "03",
    title: "Challenge",
    subtitle: "Require additional evidence.",
    color: "#FF9142",
    icon: "search",
    rangeLabel: "30% – 49%",
    fillPct: 38,
    whenLabel: "When AIM will challenge:",
    items: ["Conflicting signals detected", "Evidence is insufficient", "High-impact decision", "Requires human validation"],
    exampleIcon: "question",
    example: "Pause a financial recommendation and request additional sources.",
  },
  {
    n: "04",
    title: "Escalate",
    subtitle: "Transfer authority.",
    color: "var(--red)",
    icon: "people",
    rangeLabel: "10% – 29%",
    fillPct: 18,
    whenLabel: "When AIM will escalate:",
    items: ["High-risk or sensitive action", "Significant contradiction", "Outside normal scope", "Requires human decision"],
    exampleIcon: "person",
    example: "Escalate a contract decision to a human team member.",
  },
  {
    n: "05",
    title: "Block",
    subtitle: "Do not permit the action.",
    color: "var(--red)",
    icon: "block",
    rangeLabel: "< 10%",
    fillPct: 8,
    whenLabel: "When AIM will block:",
    items: ["Trust is very low", "Unacceptable risk", "Policy or compliance violation", "Potential harm detected"],
    exampleIcon: "shield",
    example: "Block a fund transfer due to suspicious activity.",
  },
];

function StateCard({ state, delay }: { state: AuthorityState; delay: number }) {
  const { color } = state;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex min-w-0 flex-1 flex-col rounded-2xl border-2 p-5"
      style={{
        borderColor: color,
        backgroundColor: "var(--bg-panel)",
        boxShadow: `0 0 24px -6px ${color}66, inset 0 0 30px -20px ${color}`,
      }}
    >
      <span className="font-dm-mono font-extrabold" style={{ fontSize: "18px", color }}>
        {state.n}
      </span>

      <div className="mt-1 flex flex-col items-center text-center">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-full border-2"
          style={{ borderColor: color, backgroundColor: `${color}14`, color, boxShadow: `0 0 18px -2px ${color}` }}
        >
          <Icon d={ICONS[state.icon]} className="h-7 w-7" />
        </span>
        <p className="font-syne font-extrabold uppercase mt-3" style={{ fontSize: "20px", color: "var(--text-primary)" }}>
          {state.title}
        </p>
        <p className="mt-0.5" style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
          {state.subtitle}
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <span className="font-dm-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>
            Trust range
          </span>
          <span className="font-dm-mono font-semibold" style={{ fontSize: "13px", color: "var(--text-primary)" }}>
            {state.rangeLabel}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
          <div className="h-full rounded-full" style={{ width: `${state.fillPct}%`, backgroundColor: color }} />
        </div>
      </div>

      <div className="mt-5 rounded-xl border p-4" style={{ borderColor: "var(--divider)" }}>
        <p className="font-syne font-bold" style={{ fontSize: "13px", color: "var(--text-primary)" }}>
          {state.whenLabel}
        </p>
        <ul className="mt-2.5 space-y-2">
          {state.items.map((item) => (
            <li key={item} className="flex min-w-0 items-start gap-2">
              <span
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: color, color: "var(--bg-panel)" }}
              >
                <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none">
                  <path d="M3 8.5 6.2 11.5 13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="min-w-0" style={{ fontSize: "12.5px", lineHeight: 1.4, color: "var(--text-secondary)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-xl border p-4" style={{ borderColor: "var(--divider)" }}>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: "var(--surface-input)", color: "var(--text-secondary)" }}
        >
          <Icon d={ICONS[state.exampleIcon]} className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="font-dm-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>
            Example
          </p>
          <p className="mt-0.5" style={{ fontSize: "12.5px", lineHeight: 1.4, color: "var(--text-primary)" }}>
            {state.example}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function AuthorityStatesPanels() {
  return (
    <div className="grid grid-cols-2 gap-4 xl:flex xl:flex-row">
      {STATES.map((state, i) => (
        <StateCard key={state.n} state={state} delay={0.06 * i} />
      ))}
    </div>
  );
}
