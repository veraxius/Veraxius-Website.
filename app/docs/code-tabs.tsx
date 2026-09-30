"use client";

import { useState } from "react";

export type CodeSample = { label: string; code: string };

export function CodeTabs({ samples }: { samples: CodeSample[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(samples[active].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked; the code is still selectable.
    }
  }

  return (
    <div className="mt-5 overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(0,0,0,0.35)" }}>
      <div className="flex items-center justify-between gap-2 border-b px-2" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="flex min-w-0 overflow-x-auto" role="tablist">
          {samples.map((s, i) => (
            <button
              key={s.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="min-h-11 shrink-0 px-4 font-dm-mono text-[12px] uppercase transition-colors"
              style={{
                letterSpacing: "0.1em",
                color: i === active ? "var(--amber)" : "var(--text-tertiary)",
                boxShadow: i === active ? "inset 0 -2px 0 var(--amber)" : "none",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="min-h-11 shrink-0 px-3 font-dm-mono text-[11px] uppercase transition-opacity hover:opacity-75"
          style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 font-dm-mono text-[13px]" style={{ lineHeight: 1.65, color: "var(--text-primary)" }}>
        <code>{samples[active].code}</code>
      </pre>
    </div>
  );
}
