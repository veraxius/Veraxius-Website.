"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type HomeSectionId = "early-access" | "contact-us";

function scrollToHomeSection(id: HomeSectionId) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  const url = `${window.location.pathname}${window.location.search}#${id}`;
  window.history.replaceState(null, "", url);
}

const navLinkClass =
  "font-dm-mono font-medium text-[10px] uppercase transition-opacity hover:opacity-80 min-h-[44px] inline-flex items-center";

export function SiteHeader() {
  const pathname = usePathname();
  const isStore = pathname?.startsWith("/aimsignalstore") ?? false;
  const isHome = pathname === "/";
  const contactHref =
    pathname?.startsWith("/aimsignalstore") || pathname?.startsWith("/aimsignalprogram")
      ? "/#contact-us"
      : "#contact-us";
  const [storeScrolled, setStoreScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onHomeInPageNav = useCallback(
    (id: HomeSectionId) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (!isHome) return;
      e.preventDefault();
      setMenuOpen(false);
      if (window.location.hash === `#${id}`) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
        requestAnimationFrame(() => scrollToHomeSection(id));
        return;
      }
      scrollToHomeSection(id);
    },
    [isHome],
  );

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

  const navLinks = (
    <>
      {isHome && (
        <Link
          href="/trustworldcup"
          className={navLinkClass}
          style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
          onClick={() => setMenuOpen(false)}
        >
          trust world cup
        </Link>
      )}
      <Link
        href="/aimsignalprogram"
        className={navLinkClass}
        style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
        onClick={() => setMenuOpen(false)}
      >
        aim signal program
      </Link>
      <Link
        href="/aimsignalstore"
        className={navLinkClass}
        style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
        onClick={() => setMenuOpen(false)}
      >
        aim signal store
      </Link>
      <a
        href={contactHref}
        className={navLinkClass}
        style={{ color: "var(--amber)", letterSpacing: "0.08em" }}
        onClick={(e) => {
          onHomeInPageNav("contact-us")(e);
          setMenuOpen(false);
        }}
      >
        Contact Us
      </a>
    </>
  );

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
            src="/Veraxius Logo FINAL FINAL 2 Horizontal Version-02.png"
            alt="Veraxius"
            width={180}
            height={36}
            priority
            className="h-7 w-auto max-w-[min(140px,42vw)] sm:h-8 md:h-9"
            style={{ width: "auto" }}
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <a
            href={isHome ? "#early-access" : "/#early-access"}
            className="hidden min-h-[44px] items-center justify-center font-dm-mono font-medium text-[11px] uppercase tracking-cta bg-[var(--amber)] px-4 py-3 text-[var(--bg-primary)] transition-colors hover:bg-[var(--amber-glow)] sm:inline-flex md:px-5"
            style={{ letterSpacing: "0.08em" }}
            onClick={onHomeInPageNav("early-access")}
          >
            Request Early Access
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-4 lg:flex lg:gap-6"
            style={{ color: "var(--amber)" }}
            aria-label="Main navigation"
          >
            {isHome && (
              <>
                <Link
                  href="/trustworldcup"
                  className={navLinkClass}
                  style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
                >
                  trust world cup
                </Link>
                <span
                  className="font-dm-mono text-[10px] select-none leading-none"
                  style={{ color: "var(--amber)" }}
                  aria-hidden
                >
                  |
                </span>
              </>
            )}
            <Link
              href="/aimsignalprogram"
              className={navLinkClass}
              style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
            >
              aim signal program
            </Link>
            <span
              className="font-dm-mono text-[10px] select-none leading-none"
              style={{ color: "var(--amber)" }}
              aria-hidden
            >
              |
            </span>
            <Link
              href="/aimsignalstore"
              className={navLinkClass}
              style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
            >
              aim signal store
            </Link>
            <span
              className="font-dm-mono text-[10px] select-none leading-none"
              style={{ color: "var(--amber)" }}
              aria-hidden
            >
              |
            </span>
            <a
              href={contactHref}
              className={navLinkClass}
              style={{ color: "var(--amber)", letterSpacing: "0.08em" }}
              onClick={onHomeInPageNav("contact-us")}
            >
              Contact Us
            </a>
          </nav>

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
            <nav
              className="flex flex-col px-4 py-4"
              style={{ color: "var(--amber)" }}
              aria-label="Mobile navigation"
            >
              {navLinks}
              <a
                href={isHome ? "#early-access" : "/#early-access"}
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center font-dm-mono font-medium text-[11px] uppercase tracking-cta bg-[var(--amber)] px-5 py-3 text-[var(--bg-primary)] transition-colors hover:bg-[var(--amber-glow)]"
                style={{ letterSpacing: "0.08em" }}
                onClick={onHomeInPageNav("early-access")}
              >
                Request Early Access
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
