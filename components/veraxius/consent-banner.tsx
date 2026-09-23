"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Business decision: analytics_storage is granted by default in
// app/layout.tsx, so measurement starts from the visitor's first pageview
// regardless of this banner. Accept just dismisses (keeps the default).
// Reject calls gtag('consent','update', ...denied) so analytics stops for
// this visitor going forward, then dismisses.
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

  function reject() {
    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    dismiss();
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
            onClick={reject}
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
