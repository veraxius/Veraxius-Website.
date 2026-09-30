"use client";

import { motion } from "framer-motion";

const INK = "#131316";
const SUBTLE = "rgba(19,19,22,0.55)";
const FAINT = "rgba(19,19,22,0.08)";

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

const ICONS = {
  document: "M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1ZM13 3.5V8h4",
  bars: "M4 19V13M9.5 19V9M15 19V6M20 19V11",
  people: "M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 11a2.6 2.6 0 1 0 0-5.2M15 20c0-2.6 2-4.6 4.5-4.6",
  alert: "M12 3.5 3 20h18L12 3.5ZM12 10v4M12 17h.01",
  bell: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9ZM10.5 21a1.7 1.7 0 0 0 3 0",
  play: "M7 4.5v15l13-7.5-13-7.5Z",
  lock: "M7 10.5V8a5 5 0 0 1 10 0v2.5M6 10.5h12a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1Z",
  shield: "M12 3.5 5 6.5v5c0 4.5 3 7.6 7 8.9 4-1.3 7-4.4 7-8.9v-5L12 3.5Z",
  question: "M9.5 9a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.2 1-1.2 1.8v.5M12 17h.01",
  network: "M12 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5.5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM18.5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 7.5v4M12 11.5 5.5 17M12 11.5 18.5 17",
  arrowUp: "M12 19V5M6 11l6-6 6 6",
  arrowDown: "M12 5v14M18 13l-6 6-6-6",
  check: "M4.5 12.5 9 17l10.5-11",
  bolt: "M13 3 5 13.5h5.5L11 21l8-11h-5.5L13 3Z",
  refresh: "M4 12a8 8 0 0 1 13.7-5.7L20 8M20 3v5h-5M20 12a8 8 0 0 1-13.7 5.7L4 16M4 21v-5h5",
};

function Dots() {
  return (
    <svg viewBox="0 0 20 6" className="h-3 w-5" style={{ color: SUBTLE }}>
      <circle cx="2" cy="3" r="1.6" fill="currentColor" />
      <circle cx="10" cy="3" r="1.6" fill="currentColor" />
      <circle cx="18" cy="3" r="1.6" fill="currentColor" />
    </svg>
  );
}

function PanelShell({
  n,
  title,
  subtitle,
  icon,
  children,
}: {
  n: string;
  title: string;
  subtitle: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.06 * Number(n), ease: [0.25, 0.1, 0.25, 1] }}
      className="flex min-w-0 flex-1 flex-col rounded-2xl"
      style={{ backgroundColor: "#f5f5f7" }}
    >
      <div className="flex min-w-0 items-start justify-between gap-2 px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="flex min-w-0 items-baseline gap-2">
          <span className="font-dm-mono font-bold" style={{ fontSize: "13px", color: "var(--amber)" }}>
            {n}
          </span>
          <div className="min-w-0">
            <p className="font-syne font-bold leading-tight" style={{ fontSize: "15px", color: INK }}>
              {title}
            </p>
            <p className="leading-tight" style={{ fontSize: "11px", color: SUBTLE }}>
              {subtitle}
            </p>
          </div>
        </div>
        <Dots />
      </div>
      <div className="mt-4 flex-1 px-4 pb-4 sm:px-5 sm:pb-5">
        {icon && (
          <span
            className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ backgroundColor: FAINT, color: INK }}
          >
            <Icon d={icon} className="h-4 w-4" />
          </span>
        )}
        {children}
      </div>
    </motion.div>
  );
}

function StatusPill({ tone, children }: { tone: "positive" | "new" | "decayed"; children: React.ReactNode }) {
  const isPositive = tone === "positive";
  if (tone === "decayed") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 font-medium" style={{ fontSize: "10px", backgroundColor: FAINT, color: SUBTLE }}>
        <Icon d={ICONS.refresh} className="h-2.5 w-2.5" />
        {children}
      </span>
    );
  }
  return (
    <span
      className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 font-medium"
      style={{
        fontSize: "10px",
        backgroundColor: isPositive ? "rgba(87,209,140,0.14)" : "rgba(255,107,87,0.14)",
        color: isPositive ? "#1e8a52" : "#c73a26",
      }}
    >
      <Icon d={isPositive ? ICONS.check : ICONS.alert} className="h-2.5 w-2.5" />
      {children}
    </span>
  );
}

function EvidenceRow({ icon, label, source, value, tone }: { icon: string; label: string; source: string; value: string; tone: "positive" | "new" | "decayed" }) {
  const positive = value.startsWith("+");
  return (
    <div className="flex items-center justify-between gap-2 py-2.5" style={{ borderTop: `1px solid ${FAINT}` }}>
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: FAINT, color: INK }}>
          <Icon d={icon} className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-medium" style={{ fontSize: "12.5px", color: INK }}>
            {label}
          </p>
          <p className="truncate" style={{ fontSize: "10.5px", color: SUBTLE }}>
            {source}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <StatusPill tone={tone}>{tone === "positive" ? "Positive" : tone === "decayed" ? "Decayed" : "New"}</StatusPill>
        <span className="font-dm-mono font-semibold" style={{ fontSize: "12px", color: positive ? "#1e8a52" : "#c73a26" }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function RecentRow({ icon, label, time, value }: { icon: string; label: string; time: string; value: string }) {
  const positive = value.startsWith("+");
  return (
    <div className="flex items-center justify-between gap-2 py-2.5" style={{ borderTop: `1px solid ${FAINT}` }}>
      <div className="flex min-w-0 items-center gap-2.5">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: positive ? "rgba(87,209,140,0.14)" : "rgba(255,107,87,0.14)", color: positive ? "#1e8a52" : "#c73a26" }}
        >
          <Icon d={icon} className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-medium" style={{ fontSize: "12.5px", color: INK }}>
            {label}
          </p>
          <p className="truncate" style={{ fontSize: "10.5px", color: SUBTLE }}>
            {time}
          </p>
        </div>
      </div>
      <span className="shrink-0 font-dm-mono font-semibold" style={{ fontSize: "12px", color: positive ? "#1e8a52" : "#c73a26" }}>
        {value}
      </span>
    </div>
  );
}

function Ring({ value, label, sublabel, color }: { value: number; label: string; sublabel?: string; color: string }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke={FAINT} strokeWidth="6" />
        <circle cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-syne font-extrabold leading-none" style={{ fontSize: "18px", color: INK }}>
          {value}
        </span>
      </div>
      <span className="absolute -bottom-4 whitespace-nowrap text-center leading-tight" style={{ fontSize: "9px", color: SUBTLE, transform: sublabel ? "translateY(50%)" : undefined }}>
        {label}
        {sublabel && <span className="block">{sublabel}</span>}
      </span>
    </div>
  );
}

function SignalImpactRow({ label, value, up }: { label: string; value: string; up: boolean }) {
  return (
    <div className="flex items-center justify-between py-2" style={{ borderTop: `1px solid ${FAINT}` }}>
      <span style={{ fontSize: "12.5px", color: INK }}>{label}</span>
      <span className="flex items-center gap-1.5 font-dm-mono font-semibold" style={{ fontSize: "12px", color: up ? "#1e8a52" : "#c73a26" }}>
        {value}
        <Icon d={up ? ICONS.arrowUp : ICONS.arrowDown} className="h-3 w-3" />
      </span>
    </div>
  );
}

function AuthorityPill({ tone, state, note }: { tone: "execute" | "constrain"; state: string; note: string }) {
  const isExecute = tone === "execute";
  return (
    <div
      className="flex items-center gap-3 rounded-xl border-2 px-4 py-3"
      style={{
        borderColor: isExecute ? "#57D18C" : "var(--amber)",
        backgroundColor: isExecute ? "rgba(87,209,140,0.08)" : "rgba(255,184,77,0.1)",
      }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: isExecute ? "#57D18C" : "var(--amber)", color: isExecute ? "#0a3320" : "#3a2600" }}
      >
        <Icon d={isExecute ? ICONS.play : ICONS.lock} className="h-4 w-4" />
      </span>
      <div>
        <p className="font-syne font-extrabold leading-tight" style={{ fontSize: "15px", color: INK }}>
          {state}
        </p>
        <p className="leading-tight" style={{ fontSize: "11px", color: SUBTLE }}>
          {note}
        </p>
      </div>
    </div>
  );
}

function NotifyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 flex min-w-0 items-start gap-2.5 rounded-xl px-3.5 py-3" style={{ backgroundColor: FAINT }}>
      <Icon d={ICONS.bell} className="mt-0.5 h-4 w-4 shrink-0" style={{ color: SUBTLE }} />
      <p className="min-w-0" style={{ fontSize: "12px", lineHeight: 1.4, color: INK }}>{children}</p>
    </div>
  );
}

// Sample data: the Billing Refund Agent example from /docs (policy refunds v1.0).
const WHY_ITEMS: { text: string; value: string | null; tone: "positive" | "negative" | null }[] = [
  { text: "Three positive signals support trust.", value: "+0.62", tone: "positive" },
  { text: "One older contradiction, decayed.", value: "−0.08", tone: "negative" },
  { text: "Policy refunds v1.0, rule 3 matched: trust ≥ 60 and amount ≤ $1,000 → EXECUTE", value: null, tone: null },
];

const LINEAGE_ITEMS: { label: string; time: string; icon: string; tone: "positive" | "warn" }[] = [
  { label: "Decision created", time: "9/29/2026, 2:02:10 PM", icon: ICONS.document, tone: "positive" },
  { label: "Trust evaluated (70)", time: "9/29/2026, 2:02:10 PM", icon: ICONS.bars, tone: "positive" },
  { label: "Authority issued (EXECUTE)", time: "9/29/2026, 2:02:10 PM", icon: ICONS.lock, tone: "positive" },
  { label: "Refund executed ($180)", time: "9/29/2026, 2:02:11 PM", icon: ICONS.bolt, tone: "positive" },
  { label: "Outcome recorded (refund_settled)", time: "9/29/2026, 2:05:40 PM", icon: ICONS.check, tone: "positive" },
  { label: "Trust updated (70 → 72)", time: "9/29/2026, 2:05:41 PM", icon: ICONS.refresh, tone: "positive" },
];

const REJECTED: { state: string; reason: string }[] = [
  { state: "ESCALATE", reason: "amount is below the $1,000 human-review threshold" },
  { state: "BLOCK", reason: "trust is above 40" },
];

function SubHead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-syne font-bold ${className}`} style={{ fontSize: "14px", color: INK }}>
      {children}
    </p>
  );
}

export function LiveInterfacePanels() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      {/* 01 — EVIDENCE */}
      <PanelShell n="01" title="Evidence" subtitle="Real signals. Real sources.">
        <div className="flex items-center justify-between">
          <SubHead>Top Drivers</SubHead>
          <span className="rounded-md px-2 py-1 font-dm-mono" style={{ fontSize: "10px", backgroundColor: FAINT, color: SUBTLE }}>
            All Signals ⌄
          </span>
        </div>
        <div>
          <EvidenceRow icon={ICONS.bars} label="outcome_success" source="Payment system" value="+0.30" tone="positive" />
          <EvidenceRow icon={ICONS.check} label="consistency" source="Governance log" value="+0.20" tone="positive" />
          <EvidenceRow icon={ICONS.people} label="peer_validation" source="Support lead review" value="+0.12" tone="positive" />
          <EvidenceRow icon={ICONS.alert} label="contradiction" source="Payment processor" value="−0.08" tone="decayed" />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <SubHead>Recent evidence</SubHead>
          <span className="font-dm-mono" style={{ fontSize: "10px", color: "var(--amber-glow)" }}>
            View all →
          </span>
        </div>
        <div>
          <RecentRow icon={ICONS.bars} label="Refund settled" time="2 minutes ago" value="+0.30" />
          <RecentRow icon={ICONS.check} label="Actions matched policy (40 of 40)" time="1 hour ago" value="+0.20" />
          <RecentRow icon={ICONS.people} label="Reviewed by support lead" time="1 day ago" value="+0.12" />
          <RecentRow icon={ICONS.alert} label="Refund reversed by processor" time="21 days ago (decayed)" value="−0.08" />
        </div>
      </PanelShell>

      {/* 02 — TRUST STATE */}
      <PanelShell n="02" title="Trust State" subtitle="Dynamic. Always updated.">
        <div className="flex items-center justify-between">
          <SubHead>Agent</SubHead>
          <Dots />
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--amber)", color: "#3a2600" }}
          >
            <Icon d={ICONS.bolt} className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate font-syne font-bold" style={{ fontSize: "13px", color: INK }}>
              Billing Refund Agent
            </p>
            <p className="truncate" style={{ fontSize: "10.5px", color: SUBTLE }}>
              AI agent
            </p>
            <p className="truncate" style={{ fontSize: "10.5px", color: SUBTLE }}>
              decision type: refund
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex flex-col items-center gap-9 pb-4">
            <Ring value={70} label="Previous" sublabel="at decision" color="rgba(19,19,22,0.35)" />
            <Ring value={72} label="Current" sublabel="after outcome" color="var(--amber)" />
          </div>
          <NotifyBox>Refund settled. Trust state updated.</NotifyBox>
        </div>

        <SubHead className="mt-6">Signal Impact</SubHead>
        <div>
          <SignalImpactRow label="Refund settled · Reliability" value="+2" up />
        </div>
      </PanelShell>

      {/* 03 — AUTHORITY */}
      <PanelShell n="03" title="Authority" subtitle="What should be permitted?" icon={ICONS.lock}>
        <SubHead>Proposed action</SubHead>
        <p className="mt-2 font-dm-mono" style={{ fontSize: "12px", color: INK }}>
          issue_refund · $180
        </p>

        <SubHead className="mt-4">Authority Status</SubHead>
        <div className="mt-2">
          <AuthorityPill tone="execute" state="EXECUTE" note="Within envelope: amount ≤ $1,000" />
        </div>

        <NotifyBox>Policy: refunds v1.0, rule 3 (trust ≥ 60 and amount ≤ $1,000)</NotifyBox>

        <SubHead className="mt-5">Rejected alternatives</SubHead>
        <div className="mt-2 space-y-2">
          {REJECTED.map((r) => (
            <div key={r.state} className="flex min-w-0 items-start gap-2.5">
              <Icon d={ICONS.shield} className="mt-0.5 h-4 w-4 shrink-0" style={{ color: SUBTLE }} />
              <p className="min-w-0" style={{ fontSize: "12px", lineHeight: 1.4, color: INK }}>
                <span className="font-dm-mono font-semibold">{r.state}:</span> {r.reason}
              </p>
            </div>
          ))}
        </div>
      </PanelShell>

      {/* 04 — WHY? */}
      <PanelShell n="04" title="Why?" subtitle="Clear and human-readable." icon={ICONS.question}>
        <SubHead>Why the agent was allowed to act</SubHead>
        <div className="mt-3 space-y-3">
          {WHY_ITEMS.map((item, i) => (
            <div key={item.text} className="flex min-w-0 items-start justify-between gap-2">
              <div className="flex min-w-0 items-start gap-2.5">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-dm-mono font-bold"
                  style={{ fontSize: "10px", backgroundColor: FAINT, color: INK }}
                >
                  {i + 1}
                </span>
                <p className="min-w-0" style={{ fontSize: "12.5px", lineHeight: 1.4, color: INK }}>{item.text}</p>
              </div>
              {item.value && (
                <span
                  className="shrink-0 font-dm-mono font-semibold"
                  style={{ fontSize: "12px", color: item.tone === "positive" ? "#1e8a52" : "#c73a26" }}
                >
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl px-3.5 py-3" style={{ backgroundColor: "rgba(255,184,77,0.12)" }}>
          <p style={{ fontSize: "12px", lineHeight: 1.5, color: INK }}>
            &quot;Recent refunds settled cleanly and the amount is inside the agent&apos;s envelope. Anything above $1,000 would go to a human.&quot;
          </p>
        </div>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 font-dm-mono font-semibold uppercase tracking-cta"
          style={{ fontSize: "11px", letterSpacing: "0.06em", backgroundColor: "var(--amber)", color: "#0A0A0B" }}
        >
          View evidence →
        </button>
      </PanelShell>

      {/* 05 — TRUST LINEAGE */}
      <PanelShell n="05" title="Trust Lineage™" subtitle="Complete and auditable." icon={ICONS.network}>
        <SubHead>Trust Lineage™</SubHead>
        <div className="relative mt-4 pl-8">
          <div className="absolute left-[13px] top-2 bottom-2 w-px" style={{ backgroundColor: FAINT }} />
          <div className="space-y-4">
            {LINEAGE_ITEMS.map((item) => {
              const color = item.tone === "positive" ? "#57D18C" : "var(--amber)";
              return (
                <div key={item.label} className="relative flex items-start gap-2.5">
                  <span
                    className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ backgroundColor: color, color: item.tone === "positive" ? "#0a3320" : "#3a2600" }}
                  >
                    <Icon d={item.icon} className="h-3 w-3" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium" style={{ fontSize: "12.5px", color: INK }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "10.5px", color: SUBTLE }}>{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border py-3 font-dm-mono font-semibold uppercase tracking-cta"
          style={{ fontSize: "11px", letterSpacing: "0.06em", borderColor: FAINT, color: INK }}
        >
          View lineage →
        </button>
      </PanelShell>
    </div>
  );
}
