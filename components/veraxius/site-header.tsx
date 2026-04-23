"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
        <Link
          href="/"
          aria-label="Veraxius home"
          className="flex shrink-0 items-center -ml-2 sm:-ml-3 md:-ml-4"
        >
          <Image
            src="/Veraxius Logo FINAL FINAL 2 Horizontal Version-02.png"
            alt="Veraxius"
            width={180}
            height={36}
            priority
            style={{ height: "36px", width: "auto" }}
          />
        </Link>

        <div className="flex shrink-0 items-center gap-6 sm:gap-7 -mr-2 sm:-mr-3 md:-mr-4">
          <a
            href="#early-access"
            className="font-dm-mono font-medium text-[11px] tracking-cta uppercase bg-[var(--amber)] text-[var(--bg-primary)] px-5 py-3 transition-colors hover:bg-[var(--amber-glow)]"
            style={{ letterSpacing: "0.08em" }}
          >
            Request Early Access
          </a>

          <div
            className="flex items-center gap-4 sm:gap-5 md:gap-6"
            style={{ color: "var(--amber)" }}
          >
            <Link
              href="/aimprogram"
              className="font-dm-mono font-medium text-[10px] uppercase transition-opacity hover:opacity-80"
              style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
              aria-label="Veraxius AIM Signal Operators Program (go to the AIM Program page)"
            >
              aim program
            </Link>
            <span
              className="font-dm-mono text-[10px] select-none leading-none"
              style={{ color: "var(--amber)" }}
              aria-hidden
            >
              |
            </span>
            <a
              href="#contact-us"
              className="font-dm-mono font-medium text-[10px] uppercase transition-opacity hover:opacity-80"
              style={{ color: "var(--amber)", letterSpacing: "0.08em" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
