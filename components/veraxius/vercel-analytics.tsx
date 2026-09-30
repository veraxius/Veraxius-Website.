"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";
import { CONSENT_CHANGED_EVENT, readChoice } from "./consent-banner";

// Vercel Web Analytics and Speed Insights, loaded only after the visitor clicks
// "Accept" on the cookie notice — same rule as Google Analytics (see app/privacy).
export function VercelAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const sync = () => setAccepted(readChoice() === "accepted");
    sync();
    window.addEventListener(CONSENT_CHANGED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, sync);
  }, []);

  return accepted ? (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  ) : null;
}
