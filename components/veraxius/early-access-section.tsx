"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const participantTypes = [
  "HR Tech Platforms",
  "Investment Funds",
  "Enterprise Hiring",
  "Verification Providers",
];

export function EarlyAccessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: "" }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("You're on the list.");
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="early-access"
      className="vx-section"
      style={{
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="vx-container">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-dm-mono text-[11px] tracking-eyebrow uppercase"
            style={{
              letterSpacing: "0.18em",
              color: "var(--amber)",
            }}
          >
            LIMITED ACCESS
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-syne font-extrabold mt-4"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: "1.1",
              color: "var(--text-primary)",
            }}
          >
            Access the layer before it becomes standard.
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-dm-sans mt-6 max-w-xl mx-auto"
            style={{
              fontSize: "17px",
              lineHeight: "1.65",
              color: "var(--text-secondary)",
            }}
          >
            Early access includes direct implementation support, API credits,
            and influence over product development. We are selective—we
            prioritize high-signal integrations over volume.
          </motion.p>

          {/* Participant Types */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {participantTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="font-dm-mono text-lg"
                  style={{ color: "var(--amber)" }}
                >
                  ·
                </span>
                <span
                  className="font-dm-mono text-[13px]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {type}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 max-w-[480px] mx-auto"
          >
            {status === "success" ? (
              <div
                className="font-dm-mono text-center py-4"
                style={{ color: "var(--green)" }}
              >
                {message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 font-dm-sans px-4 py-4 outline-none transition-colors"
                  style={{
                    backgroundColor: "var(--bg-panel)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--divider)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--amber-border)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--divider)";
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="font-dm-mono font-medium text-[13px] tracking-cta uppercase px-8 py-4 transition-colors disabled:opacity-50"
                  style={{
                    letterSpacing: "0.08em",
                    backgroundColor: "var(--amber)",
                    color: "var(--bg-primary)",
                  }}
                >
                  {status === "submitting" ? "Submitting..." : "Request Access"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p
                className="font-dm-mono text-center mt-3"
                style={{
                  fontSize: "12px",
                  color: "var(--red)",
                }}
              >
                {message}
              </p>
            )}
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-dm-mono text-center mt-6"
            style={{
              fontSize: "11px",
              color: "var(--text-disabled)",
            }}
          >
            High-signal outreach only.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
