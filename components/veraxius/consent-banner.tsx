"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Opt-in analytics: Google Analytics is NOT loaded until the visitor clicks
// "Accept". "Reject" or closing the notice keeps it off. The choice is
// remembered in localStorage, and the footer's "Cookie settings" link fires
// OPEN_EVENT to reopen this notice so the visitor can change it.
const GA_ID = "G-JG1KHEG2SP";
const CONSENT_KEY = "vx_analytics_consent"; // "accepted" | "rejected"
export const OPEN_COOKIE_SETTINGS_EVENT = "vx-open-cookie-settings";

type Choice = "accepted" | "rejected";

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Ignore — worst case the notice reappears next visit (analytics stays off).
  }
}

function loadAnalytics() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = false;
  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

function disableAnalytics() {
  // Only relevant if analytics was accepted earlier in this page session.
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  // Remove any GA cookies already set for this site.
  try {
    const host = location.hostname;
    const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) {
        domains.forEach((d) => {
          document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
        });
      }
    });
  } catch {
    // ignore
  }
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === "accepted") loadAnalytics();
    else if (choice === null) setVisible(true);

    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  function accept() {
    saveChoice("accepted");
    loadAnalytics();
    setVisible(false);
  }

  function reject() {
    saveChoice("rejected");
    disableAnalytics();
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
      <div className="vx-container relative flex flex-col items-center justify-between gap-3 py-4 pr-10 sm:flex-row">
        <p className="font-dm-sans text-center sm:text-left" style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
          We use analytics cookies to understand how the site is used. They stay off unless you accept.{" "}
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
            onClick={accept}
            className="rounded-full px-5 py-2 font-dm-mono font-semibold text-[12px] uppercase tracking-cta transition-colors"
            style={{ backgroundColor: "var(--amber)", color: "var(--text-on-amber)" }}
          >
            Accept
          </button>
        </div>
        <button
          type="button"
          onClick={reject}
          aria-label="Close cookie notice (analytics stays off)"
          title="Close (analytics stays off)"
          className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-75"
          style={{ color: "var(--text-tertiary)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
