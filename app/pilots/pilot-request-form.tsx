"use client";

import { FormEvent, useState } from "react";

const USE_CASES = ["Health", "People", "Finance", "Autonomous agents", "Other"] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  useCase: (typeof USE_CASES)[number];
  message: string;
  website: string; // honeypot
};

const initial: FormState = { name: "", email: "", company: "", role: "", useCase: "Health", message: "", website: "" };

const inputClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-3 text-[15px] text-[var(--text-primary)] outline-none transition focus:border-[var(--amber)]";

export function PilotRequestForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/pilot-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl border p-8 text-center"
        style={{ borderColor: "rgba(87,209,140,0.4)", backgroundColor: "rgba(87,209,140,0.06)" }}
        role="status"
      >
        <p className="font-syne font-bold text-[22px]" style={{ color: "#8FE3B4" }}>
          Request received.
        </p>
        <p className="mt-2 text-[15px]" style={{ color: "var(--text-secondary)" }}>
          Thanks for your interest in an AIM pilot. Our team will reach out to you shortly.
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
        <Field label="Work email" required>
          <input className={inputClass} type="email" value={form.email} onChange={(e) => set("email", e.target.value)} required maxLength={200} autoComplete="email" />
        </Field>
        <Field label="Company" required>
          <input className={inputClass} value={form.company} onChange={(e) => set("company", e.target.value)} required maxLength={160} autoComplete="organization" />
        </Field>
        <Field label="Role">
          <input className={inputClass} value={form.role} onChange={(e) => set("role", e.target.value)} maxLength={120} autoComplete="organization-title" />
        </Field>
      </div>

      <Field label="Where would your AI act?" group>
        <div className="flex flex-wrap gap-2">
          {USE_CASES.map((u) => {
            const active = form.useCase === u;
            return (
              <button
                key={u}
                type="button"
                onClick={() => set("useCase", u)}
                aria-pressed={active}
                className="min-h-11 rounded-full border px-4 text-[14px] transition"
                style={{
                  borderColor: active ? "var(--amber)" : "rgba(255,255,255,0.14)",
                  backgroundColor: active ? "rgba(255,184,77,0.12)" : "transparent",
                  color: active ? "var(--amber)" : "var(--text-secondary)",
                }}
              >
                {u}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="What decision do you want your AI to earn authority for?">
        <textarea
          className={`${inputClass} resize-none`}
         
          rows={4}
          maxLength={3000}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="e.g. Our support agent drafts refunds. We want it to send small ones on its own and escalate the rest."
        />
      </Field>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} />
        </label>
      </div>

      {status === "error" && (
        <p className="text-[14px]" style={{ color: "#FF8A7A" }} role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--amber)] px-7 py-4 font-dm-mono font-semibold text-[13px] uppercase text-[var(--text-on-amber)] transition hover:bg-[var(--amber-glow)] disabled:opacity-60 md:w-auto"
        style={{ letterSpacing: "0.08em" }}
      >
        {status === "sending" ? "Sending…" : "Request your pilot"}
      </button>
    </form>
  );
}

function Field({ label, required, group, children }: { label: string; required?: boolean; group?: boolean; children: React.ReactNode }) {
  const Tag = group ? "div" : "label";
  return (
    <Tag className="block" {...(group ? { role: "group", "aria-label": label } : {})}>
      <span className="font-dm-mono mb-2 block text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: "var(--amber)" }}>
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </Tag>
  );
}
