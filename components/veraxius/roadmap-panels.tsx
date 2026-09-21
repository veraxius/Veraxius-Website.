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
  cube: "M12 3.5 4 7.5l8 4 8-4-8-4ZM4 12l8 4 8-4M4 16.5l8 4 8-4",
  people: "M9 11a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16.5 11a2.6 2.6 0 1 0 0-5.2M16 14.5c2.5.3 4.5 2.4 4.5 5.5",
  bars: "M4 19V13M9.5 19V9M15 19V6M20 19V11",
};

function ArrowIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 10" className={className} style={style} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type RoadmapStage = {
  n: string;
  title: string;
  subtitle: string;
  color: string;
  icon: keyof typeof ICONS;
  items: string[];
  dominant?: boolean;
};

const STAGES: RoadmapStage[] = [
  {
    n: "01",
    title: "Built",
    subtitle: "AIM MVP5",
    color: "#4DA3FF",
    icon: "cube",
    items: ["Signal Store", "Trust Engine", "Trust State", "Authority Gate", "Governance Log", "Trust Lineage™", "API layer", "Human-facing UI"],
  },
  {
    n: "02",
    title: "Validating now",
    subtitle: "The current window",
    color: "var(--amber)",
    icon: "people",
    items: ["Enterprise pilots", "Independent research", "Integration testing", "Adversarial testing", "Human experience validation"],
    dominant: true,
  },
  {
    n: "03",
    title: "Next",
    subtitle: "Evidence → Scale",
    color: "#34D6B0",
    icon: "bars",
    items: ["Pilot evidence", "Independent validation", "Production hardening", "Commercial deployment"],
  },
];

function StageCard({ stage, delay }: { stage: RoadmapStage; delay: number }) {
  const { color, dominant } = stage;
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
        boxShadow: dominant ? `0 0 40px -4px ${color}99, inset 0 0 40px -20px ${color}` : `0 0 20px -8px ${color}66`,
      }}
    >
      <span className="font-dm-mono font-extrabold" style={{ fontSize: "18px", color }}>
        {stage.n}
      </span>

      <div className="mt-2 flex items-center gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2"
          style={{ borderColor: color, backgroundColor: `${color}14`, color, boxShadow: `0 0 16px -2px ${color}` }}
        >
          <Icon d={ICONS[stage.icon]} className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <p className="font-syne font-extrabold uppercase leading-tight" style={{ fontSize: "18px", color: "var(--text-primary)" }}>
            {stage.title}
          </p>
          <p
            className="font-dm-mono uppercase leading-tight"
            style={{ fontSize: "10.5px", letterSpacing: "0.08em", color: "var(--text-tertiary)" }}
          >
            {stage.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-4 h-px w-full" style={{ backgroundColor: "var(--divider)" }} />

      <ul className="mt-4 space-y-2.5">
        {stage.items.map((item) => (
          <li key={item} className="flex min-w-0 items-center gap-2.5">
            <span
              className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: color, color: "var(--bg-panel)" }}
            >
              <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none">
                <path d="M3 8.5 6.2 11.5 13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="min-w-0" style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function RoadmapPanels() {
  return (
    <div>
      <div className="grid grid-cols-2 items-stretch gap-6 xl:flex xl:flex-row xl:items-stretch xl:gap-4">
        {STAGES.map((stage, i) => (
          <div key={stage.n} className="flex min-w-0 flex-1 items-center gap-4 xl:contents">
            <StageCard stage={stage} delay={0.08 * i} />
            {i < STAGES.length - 1 && (
              <div className="hidden shrink-0 xl:flex xl:items-center xl:justify-center">
                <ArrowIcon className="h-6 w-10" style={{ color: stage.dominant ? "var(--amber-glow)" : "var(--text-tertiary)" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress timeline */}
      <div className="relative mt-14 hidden px-4 sm:block">
        <div
          className="absolute left-4 right-4 top-2 h-[2px]"
          style={{ background: `linear-gradient(90deg, ${STAGES[0].color}, ${STAGES[1].color}, ${STAGES[2].color})` }}
        />
        <div className="relative flex items-start justify-between">
          {STAGES.map((stage) => (
            <div key={stage.n} className="flex flex-col items-center gap-3">
              <span
                className="block rounded-full"
                style={{
                  width: stage.dominant ? 20 : 14,
                  height: stage.dominant ? 20 : 14,
                  backgroundColor: stage.color,
                  boxShadow: `0 0 14px 2px ${stage.color}`,
                }}
              />
              <span
                className="font-dm-mono uppercase"
                style={{
                  fontSize: stage.dominant ? "13px" : "11px",
                  fontWeight: stage.dominant ? 700 : 500,
                  letterSpacing: "0.1em",
                  color: stage.dominant ? stage.color : "var(--text-tertiary)",
                }}
              >
                {stage.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
