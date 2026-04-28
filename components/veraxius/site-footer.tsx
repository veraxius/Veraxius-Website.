"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function SiteFooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={footerRef}
      className="py-20"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--divider)",
      }}
    >
      <div className="vx-container">

        {/* Closing statement */}
        <div className="max-w-[520px] mx-auto text-center">

          {/* Headline — two lines, each as its own statement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-syne font-extrabold"
            style={{
              fontSize: "clamp(22px, 2.8vw, 34px)",
              lineHeight: "1.2",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            The infrastructure for reliable decisions is being built.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.14, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-syne font-extrabold mt-1"
            style={{
              fontSize: "clamp(22px, 2.8vw, 34px)",
              lineHeight: "1.2",
              color: "var(--amber)",
              letterSpacing: "-0.02em",
              textShadow: "0 0 28px rgba(255,185,0,0.22)",
            }}
          >
            Veraxius is defining it.
          </motion.p>

        </div>

        <div
          className="mt-20"
          style={{ borderTop: "1px solid var(--divider)" }}
        />

        {/* Contact Us */}
        <motion.div
          id="contact-us"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 text-center scroll-mt-24"
        >
          <p
            className="font-syne font-extrabold mb-5"
            style={{
              fontSize: "clamp(16px, 2vw, 22px)",
              lineHeight: "1.2",
              color: "var(--amber)",
              letterSpacing: "-0.02em",
              textShadow: "0 0 28px rgba(255,185,0,0.22)",
            }}
          >
            Contact Us
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:signal@veraxius.com"
              className="font-dm-mono text-[13px] transition-colors hover:underline"
              style={{ color: "var(--text-secondary)" }}
            >
              signal@veraxius.com
            </a>
            <a
              href="tel:5612008845"
              className="font-dm-mono text-[13px] transition-colors hover:underline"
              style={{ color: "var(--text-secondary)" }}
            >
              (561) 200-8845
            </a>
            <p
              className="font-dm-mono text-[13px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Boca Raton, FL. USA
            </p>
          </div>
        </motion.div>

        {/* Supporters */}
        <motion.div
          id="supporters"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 scroll-mt-24"
        >
          <div
            className="w-full text-center"
            style={{ borderTop: "1px solid var(--divider)" }}
          >
            <p
              className="font-syne font-extrabold mb-5 pt-6 sm:pt-7"
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                lineHeight: "1.2",
                color: "var(--amber)",
                letterSpacing: "-0.02em",
                textShadow: "0 0 28px rgba(255,185,0,0.22)",
              }}
            >
              Those Who Support Us
            </p>
            <div
              className="flex w-full min-h-[96px] flex-wrap items-center justify-start gap-x-6 gap-y-3 px-0 pb-0"
              aria-label="Supporters and partners"
            >
              <a
                href="https://lexora.up.railway.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-full shrink-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50"
                aria-label="Lexora — open sign in in a new tab"
              >
                <Image
                  src="/icono-lexora.png"
                  alt="Lexora"
                  width={900}
                  height={180}
                  className="-translate-y-1 h-16 w-auto max-w-[min(500px,100%)] object-contain object-left opacity-90 transition-opacity hover:opacity-100 sm:h-24 sm:max-w-[min(620px,100%)] md:h-28 md:max-w-[min(700px,100%)] lg:h-36 lg:max-w-[min(780px,100%)] xl:h-40 2xl:h-44 2xl:max-w-[min(860px,100%)]"
                  sizes="(min-width: 1536px) 860px, (min-width: 1280px) 780px, (min-width: 1024px) 700px, (min-width: 768px) 620px, (min-width: 640px) 500px, 95vw"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.72, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--divider)" }}
        >
          {/* Logo */}
          <a href="#" aria-label="Veraxius home" className="flex items-center">
            <Image
              src="/Veraxius Logo FINAL FINAL 2 Horizontal Version-02.png"
              alt="Veraxius"
              width={200}
              height={40}
              priority
              style={{ height: "40px", width: "auto" }}
            />
          </a>

          {/* Copyright */}
          <p
            className="font-dm-mono text-[11px]"
            style={{ color: "var(--text-secondary)", letterSpacing: "0.06em" }}
          >
            © 2026 Veraxius. All rights reserved.
          </p>

          {/* Footer CTA */}
          <a
            href="#early-access"
            className="font-dm-mono font-medium text-[11px] uppercase px-5 py-3 transition-all"
            style={{
              letterSpacing: "0.1em",
              backgroundColor: "var(--amber)",
              color: "var(--bg-primary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "brightness(1.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
            }}
          >
            Apply for Early Access
          </a>
        </motion.div>

      </div>
    </footer>
  );
}
