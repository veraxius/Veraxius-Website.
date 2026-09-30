"use client";

import { FormEvent, useEffect, useState } from "react";
import { CHECK_SIZES } from "./constants";

// Fired by the hero's "Request the deck" button to pre-check the deck box.
export const REQUEST_DECK_EVENT = "vx-request-deck";

type FormState = {
  name: string;
  email: string;
  firm: string;
  role: string;
  checkSize: string;
  message: string;
  deck: boolean;
  website: string; // honeypot
};

const initial: FormState = { name: "", email: "", firm: "", role: "", checkSize: "", message: "", deck: false, website: "" };

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-3 text-[15px] text-[var(--text-primary)] outline-none transition focus:border-[var(--amber)]";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export function InvestorForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [invalid, setInvalid] = useState("");

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  useEffect(() => {
    const onDeck = () => {
      setStatus((s) => (s === "sent" ? "idle" : s));
      setForm((f) => ({ ...f, deck: true }));
    };
    window.addEventListener(REQUEST_DECK_EVENT, onDeck);
    return () => window.removeEventListener(REQUEST_DECK_EVENT, onDeck);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name.trim() || !form.firm.trim()) return setInvalid("Please add your name and firm or fund.");
    if (!isEmail(form.email)) return setInvalid("Please enter a valid email.");
    setInvalid("");
    setStatus("sending");
    try {
      const res = await fetch("/api/investor-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl border p-8 text-center"
        style={{ borderColor: "rgba(87,209,140,0.4)", backgroundColor: "rgba(87,209,140,0.06)" }}
        role="status"
      >
        <p className="font-syne font-bold text-[20px]" style={{ color: "#8FE3B4" }}>
          Thanks. A founder will reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" required>
          <input className={inputClass} value={form.name} onChange={(e) => set("name", e.target.value)} required maxLength={120} autoComplete="name" />
        </Field>
        <Field label="Email" required>
          <input className={inputClass} type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required maxLength={200} autoComplete="email" />
        </Field>
        <Field label="Firm or fund" required>
          <input className={inputClass} value={form.firm} onChange={(e) => set("firm", e.target.value)} required maxLength={160} autoComplete="organization" />
        </Field>
        <Field label="Role">
          <input className={inputClass} value={form.role} onChange={(e) => set("role", e.target.value)} maxLength={120} autoComplete="organization-title" />
        </Field>
      </div>

      <Field label="Typical check size">
        <select
          className={inputClass}
          style={{ colorScheme: "dark" }}
          value={form.checkSize}
          onChange={(e) => set("checkSize", e.target.value)}
        >
          <option value="">Select…</option>
          {CHECK_SIZES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message">
        <textarea
          className={`${inputClass} resize-none`}
          rows={4}
          maxLength={3000}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </Field>

      <label className="flex min-h-11 cursor-pointer items-center gap-3 font-dm-sans text-[15px]" style={{ color: "var(--text-primary)" }}>
        <input
          type="checkbox"
          checked={form.deck}
          onChange={(e) => set("deck", e.target.checked)}
          className="h-5 w-5 shrink-0 accent-[var(--amber)]"
        />
        Request the deck
      </label>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} />
        </label>
      </div>

      {(invalid || status === "error") && (
        <p className="text-[14px]" style={{ color: "#FF8A7A" }} role="alert">
          {invalid || "Something went wrong. Please email signal@veraxius.com."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--amber)] px-7 py-4 font-dm-mono font-semibold text-[13px] uppercase text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)] disabled:opacity-60 md:w-auto"
        style={{ letterSpacing: "0.08em" }}
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      <p className="font-dm-sans text-[12px]" style={{ color: "var(--text-tertiary)" }}>
        We&apos;ll use this information to respond to your inquiry. See our{" "}
        <a href="/privacy" className="underline hover:no-underline" style={{ color: "var(--text-secondary)" }}>
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-dm-mono mb-2 block text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: "var(--amber)" }}>
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
