"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SiteFooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={footerRef}
      className="py-16"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--divider)",
      }}
    >
      <div className="vx-container">
        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p
            className="font-syne font-semibold"
            style={{
              fontSize: "24px",
              lineHeight: "1.5",
              color: "var(--text-primary)",
            }}
          >
            The infrastructure for trustworthy decisions does not exist yet.
            We are building it.
          </p>

          <p
            className="font-dm-sans mt-6"
            style={{
              fontSize: "15px",
              lineHeight: "1.65",
              color: "var(--text-tertiary)",
            }}
          >
            If you understand why this matters, you are already behind.
            The window for early access is closing.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: "1px solid var(--divider)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-syne font-extrabold text-lg tracking-logo uppercase"
            style={{ letterSpacing: "0.12em", color: "var(--text-primary)" }}
          >
            {"VERA".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
            <span style={{ color: "var(--amber)" }}>X</span>
            {"IUS".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </a>

          {/* Copyright */}
          <p
            className="font-dm-mono text-[12px]"
            style={{ color: "var(--text-disabled)" }}
          >
            © 2024 Veraxius. All rights reserved.
          </p>

          {/* CTA */}
          <a
            href="#early-access"
            className="font-dm-mono font-medium text-[11px] tracking-cta uppercase px-5 py-3 transition-colors"
            style={{
              letterSpacing: "0.08em",
              backgroundColor: "var(--amber)",
              color: "var(--bg-primary)",
            }}
          >
            Request Early Access
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
