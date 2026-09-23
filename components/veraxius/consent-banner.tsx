"use client";

import { useEffect, useState } from "react";

// Business decision: this banner is shown for visibility, but neither button
// gates measurement — analytics_storage is granted by default in
// app/layout.tsx regardless of what's clicked here. This only remembers
// that the visitor dismissed the banner so it doesn't reappear.
const DISMISSED_KEY = "vx_cookie_banner_dismissed";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISSED_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Ignore — worst case the banner reappears next visit.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[70] border-t"
      style={{ backgroundColor: "var(--bg-header)", backdropFilter: "blur(16px)", borderColor: "var(--divider)" }}
    >
      <div className="vx-container flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
        <p className="font-dm-sans text-center sm:text-left" style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
          We use cookies to measure site analytics.{" "}
          <a href="/privacy" className="underline hover:no-underline" style={{ color: "var(--text-secondary-strong)" }}>
            Learn more
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full border px-5 py-2 font-dm-mono font-medium text-[12px] uppercase tracking-cta transition-colors"
            style={{ borderColor: "var(--divider)", color: "var(--text-secondary)" }}
          >
            Reject
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full px-5 py-2 font-dm-mono font-semibold text-[12px] uppercase tracking-cta transition-colors"
            style={{ backgroundColor: "var(--amber)", color: "var(--text-on-amber)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
