"use client";

import { FormEvent, useMemo, useState } from "react";

const SERVICE_OPTIONS = [
  "Brand Strategy Development",
  "Logo & Visual Identity",
  "Marketing Strategy",
  "Email Marketing",
  "Lead Generation Campaigns",
  "AI Support",
] as const;

type ServiceOption = (typeof SERVICE_OPTIONS)[number];
type Urgency = "low" | "medium" | "high";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  serviceInterest: ServiceOption[];
  budget: string;
  urgency: Urgency;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  serviceInterest: [],
  budget: "",
  urgency: "medium",
};

export function TestContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const canSubmit = useMemo(
    () =>
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      !isLoading,
    [form.firstName, form.lastName, form.email, isLoading]
  );

  const toggleService = (service: ServiceOption) => {
    setForm((prev) => {
      const exists = prev.serviceInterest.includes(service);
      return {
        ...prev,
        serviceInterest: exists
          ? prev.serviceInterest.filter((s) => s !== service)
          : [...prev.serviceInterest, service],
      };
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const numericBudget = form.budget.replace(/[^\d]/g, "");

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
      serviceInterest: form.serviceInterest.join("; "),
      source: "Website",
      budget: numericBudget,
      urgency: form.urgency,
    };

    try {
      const response = await fetch(
        "https://wholebranding.app.n8n.cloud/webhook/lead-intake-router",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      setSuccessMessage("Gracias. Tu mensaje fue enviado correctamente.");
      setForm(initialState);
    } catch {
      setErrorMessage(
        "Hubo un problema al enviar. Intenta nuevamente en unos minutos."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-sm md:p-8">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Test</p>
        <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
          Contacto
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Formulario privado para captacion de leads.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="First name"
            value={form.firstName}
            onChange={(value) => setForm((prev) => ({ ...prev, firstName: value }))}
            required
          />
          <InputField
            label="Last name"
            value={form.lastName}
            onChange={(value) => setForm((prev) => ({ ...prev, lastName: value }))}
            required
          />
          <InputField
            label="Email"
            value={form.email}
            type="email"
            onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
            required
          />
          <InputField
            label="Phone"
            value={form.phone}
            onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
          />
          <InputField
            label="Company"
            value={form.company}
            onChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
          />
          <InputField
            label="Budget (number only)"
            value={form.budget}
            inputMode="numeric"
            onChange={(value) =>
              setForm((prev) => ({ ...prev, budget: value.replace(/[^\d]/g, "") }))
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/80">Service Interest</label>
          <div className="grid gap-2 sm:grid-cols-2">
            {SERVICE_OPTIONS.map((option) => {
              const checked = form.serviceInterest.includes(option);
              return (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(option)}
                    className="h-4 w-4 accent-white"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/80">Urgency</label>
          <select
            value={form.urgency}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, urgency: event.target.value as Urgency }))
            }
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-white/40"
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/80">Message</label>
          <textarea
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
            rows={5}
            className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-white/40"
            placeholder="Escribe detalles de tu proyecto..."
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Loading..." : "Send"}
        </button>

        {successMessage ? (
          <p className="text-sm text-emerald-300">{successMessage}</p>
        ) : null}

        {errorMessage ? <p className="text-sm text-red-300">{errorMessage}</p> : null}
      </form>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  required?: boolean;
  inputMode?: "text" | "numeric" | "email" | "tel" | "search" | "url";
};

function InputField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  inputMode = "text",
}: InputFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/80">{label}</span>
      <input
        type={type}
        value={value}
        inputMode={inputMode}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-white/40"
      />
    </label>
  );
}
