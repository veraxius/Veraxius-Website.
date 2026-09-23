"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { JOIN_NOW_LOGIN_URL } from "./constants";

const navLinkClass =
  "font-dm-sans text-[14px] font-medium min-h-[44px] inline-flex items-center rounded-full px-3 transition-colors";

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className={navLinkClass}
      style={{ color: "var(--text-secondary-strong)" }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }}
    >
      {children}
    </Link>
  );
}

// Each item scrolls to the matching home-page section (works from any page,
// since it's an absolute "/#id" path) rather than a bare "#" placeholder.
const NAV_ITEMS = [
  { label: "AIM", href: "/#product" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Validation", href: "/#validation" },
  { label: "About", href: "/#about" },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 10" className={className} fill="none" aria-hidden="true">
      <path d="M0.5 5H14.5M14.5 5L10.5 1M14.5 5L10.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isStore = pathname?.startsWith("/aimsignalstore") ?? false;
  const [storeScrolled, setStoreScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isStore) return;
    const onScroll = () => setStoreScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isStore]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const storeHeaderSolid = isStore && storeScrolled;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ease-out",
        storeHeaderSolid ? "border-[var(--divider)]" : "border-transparent",
      )}
      style={
        isStore && !storeScrolled
          ? {
              backgroundColor: "transparent",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
            }
          : {
              backgroundColor: "var(--bg-header)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }
      }
    >
      <div className="flex w-full min-w-0 items-center justify-between gap-2 py-3 pl-3 pr-3 sm:gap-3 sm:py-4 sm:pl-4 sm:pr-4 lg:pl-5 lg:pr-5">
        <Link
          href="/"
          aria-label="Veraxius home"
          className="flex min-w-0 shrink items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/veraxius-logo-horizontal.png"
            alt="Veraxius"
            width={180}
            height={36}
            priority
            className="h-7 w-auto max-w-[min(140px,42vw)] sm:h-8 md:h-9"
            style={{ width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={JOIN_NOW_LOGIN_URL}
            className="hidden min-h-[44px] items-center gap-1.5 rounded-full px-5 font-dm-mono font-semibold text-[12px] uppercase tracking-cta transition-colors sm:inline-flex"
            style={{ letterSpacing: "0.06em", backgroundColor: "var(--amber)", color: "var(--text-on-amber)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--amber-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--amber)";
            }}
          >
            Pilot AIM
            <ArrowIcon className="h-3 w-3" />
          </a>
          <a
            href={JOIN_NOW_LOGIN_URL}
            className="hidden min-h-[44px] items-center rounded-full border-2 px-5 font-dm-mono font-semibold text-[12px] uppercase tracking-cta transition-colors sm:inline-flex"
            style={{ letterSpacing: "0.06em", borderColor: "var(--amber)", color: "var(--amber)", backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,184,77,0.14)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            Log in
          </a>

          <p
            className="hidden pl-4 xl:block font-dm-mono"
            style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.12em", lineHeight: 1.5, color: "var(--text-tertiary)" }}
          >
            TRUST
            <br />
            MUST BE
            <br />
            MEASURED.
          </p>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-header-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 top-0 block h-px w-5 bg-[var(--amber)] transition-transform duration-200",
                  menuOpen && "top-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[5px] block h-px w-5 bg-[var(--amber)] transition-opacity duration-200",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[10px] block h-px w-5 bg-[var(--amber)] transition-transform duration-200",
                  menuOpen && "top-[5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="site-header-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-[var(--divider)] lg:hidden"
            style={{ backgroundColor: "var(--bg-header)" }}
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={JOIN_NOW_LOGIN_URL}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-full bg-[var(--amber)] font-dm-mono font-semibold text-[12px] uppercase tracking-cta text-[var(--text-on-amber)]"
                  style={{ letterSpacing: "0.06em" }}
                >
                  Pilot AIM
                  <ArrowIcon className="h-3 w-3" />
                </a>
                <a
                  href={JOIN_NOW_LOGIN_URL}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border-2 font-dm-mono font-semibold text-[12px] uppercase tracking-cta"
                  style={{ letterSpacing: "0.06em", borderColor: "var(--amber)", color: "var(--amber)" }}
                >
                  Log in
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
