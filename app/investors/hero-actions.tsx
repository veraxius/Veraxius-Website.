"use client";

import { REQUEST_DECK_EVENT } from "./investor-form";

function scrollToForm() {
  document.getElementById("investor-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
      <a
        href="#investor-form"
        onClick={(e) => {
          e.preventDefault();
          scrollToForm();
        }}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--amber)] px-7 py-4 font-dm-mono font-semibold text-[13px] uppercase text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)]"
        style={{ letterSpacing: "0.08em" }}
      >
        Contact the founders
      </a>
      <a
        href="#investor-form"
        onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(new Event(REQUEST_DECK_EVENT));
          scrollToForm();
        }}
        className="inline-flex min-h-11 items-center justify-center rounded-full border px-7 py-4 font-dm-mono font-semibold text-[13px] uppercase transition hover:opacity-80"
        style={{ letterSpacing: "0.08em", borderColor: "rgba(255,184,77,0.45)", color: "var(--amber)" }}
      >
        Request the deck
      </a>
    </div>
  );
}
