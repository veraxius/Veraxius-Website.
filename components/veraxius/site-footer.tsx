"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 10v6.5M7.5 7.6v.01M11 16.5v-4c0-1.4 1-2.3 2.2-2.3 1.2 0 2 .8 2 2.3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const LINKS_COLUMN_1 = [
  { label: "AIM", href: "/#product" },
  { label: "Pilots", href: "#" },
  { label: "Research", href: "#" },
  { label: "Developers", href: "/aimsignalprogram" },
  { label: "Company", href: "#" },
  { label: "Investors", href: "#" },
];

const LINKS_COLUMN_2 = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-16"
      style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--divider)" }}
    >
      <div className="vx-container">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Logo + tagline */}
          <div className="col-span-2 sm:col-span-1">
            <Image
              src="/veraxius-logo-horizontal.png"
              alt="Veraxius"
              width={200}
              height={40}
              className="h-9 w-auto"
              style={{ width: "auto" }}
            />
            <p className="font-dm-sans mt-4" style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
              Trust + Authority Infrastructure for AI
            </p>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            {LINKS_COLUMN_1.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-dm-sans transition-opacity hover:opacity-75"
                style={{ fontSize: "15px", color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 2 — LinkedIn + legal */}
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/company/veraxius/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-dm-sans transition-opacity hover:opacity-75"
              style={{ fontSize: "15px", color: "var(--text-secondary)" }}
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <div className="mt-2 flex flex-col gap-3">
              {LINKS_COLUMN_2.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-dm-sans transition-opacity hover:opacity-75"
                  style={{ fontSize: "15px", color: "var(--text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* NVIDIA badge */}
          <div className="col-span-2 sm:col-span-1">
            <Image
              src="/nvidia-inception-program-badge-rgb-for-screen.png"
              alt="NVIDIA Inception Program"
              width={451}
              height={166}
              className="h-auto w-full max-w-[220px] object-contain"
            />
            <p className="font-dm-sans mt-3" style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>
              Member of the NVIDIA Inception program
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center gap-4 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
          style={{ borderTop: "1px solid var(--divider)" }}
        >
          <p className="font-dm-sans" style={{ fontSize: "14px", color: "var(--text-tertiary)" }}>
            © 2026 Veraxius Inc.
          </p>

          <div className="flex items-center gap-3">
            <div className="h-px w-6" style={{ backgroundColor: "var(--amber)" }} />
            <span
              className="font-dm-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--text-secondary)" }}
            >
              Trust must be measured.
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
