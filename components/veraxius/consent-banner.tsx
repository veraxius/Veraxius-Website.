"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "vx_cookie_consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(granted: boolean) {
  window.gtag?.("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
  });
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === "granted") {
        updateConsent(true);
      } else if (stored !== "denied") {
        setVisible(true);
      }
      // stored === "denied": consent already stays at its default-denied
      // state (set in app/layout.tsx), nothing to do.
    } catch {
      // localStorage unavailable (private browsing, blocked storage) — show
      // the banner every visit rather than silently assuming consent.
      setVisible(true);
    }
  }, []);

  function choose(granted: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      // Ignore — worst case the banner reappears next visit.
    }
    updateConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
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
            onClick={() => choose(false)}
            className="rounded-full border px-5 py-2 font-dm-mono font-medium text-[12px] uppercase tracking-cta transition-colors"
            style={{ borderColor: "var(--divider)", color: "var(--text-secondary)" }}
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
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
