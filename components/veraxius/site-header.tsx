"use client";

import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--divider)]"
      style={{
        backgroundColor: "var(--bg-header)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="vx-container flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-syne font-extrabold text-lg tracking-logo uppercase text-[var(--text-primary)]"
          style={{ letterSpacing: "0.12em" }}
        >
          {"VERA".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
          <span className="text-[var(--amber)]">X</span>
          {"IUS".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </a>

        {/* CTA Button */}
        <a
          href="#early-access"
          className="font-dm-mono font-medium text-[11px] tracking-cta uppercase bg-[var(--amber)] text-[var(--bg-primary)] px-5 py-3 transition-colors hover:bg-[var(--amber-glow)]"
          style={{ letterSpacing: "0.08em" }}
        >
          Request Early Access
        </a>
      </div>
    </motion.header>
  );
}
