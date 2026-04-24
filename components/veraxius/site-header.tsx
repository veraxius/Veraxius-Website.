"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type MouseEvent } from "react";

type HomeSectionId = "early-access" | "contact-us";

function scrollToHomeSection(id: HomeSectionId) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  const url = `${window.location.pathname}${window.location.search}#${id}`;
  window.history.replaceState(null, "", url);
}

export function SiteHeader() {
  const pathname = usePathname();
  const isStore = pathname?.startsWith("/aimsignalstore") ?? false;
  const isHome = pathname === "/";
  const contactHref =
    pathname?.startsWith("/aimsignalstore") || pathname?.startsWith("/aimsignalprogram")
      ? "/#contact-us"
      : "#contact-us";
  const [storeScrolled, setStoreScrolled] = useState(false);

  const onHomeInPageNav = useCallback(
    (id: HomeSectionId) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (!isHome) return;
      e.preventDefault();
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

  const storeHeaderSolid = isStore && storeScrolled;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={
        storeHeaderSolid
          ? "fixed top-0 left-0 right-0 z-50 border-b border-[var(--divider)] transition-[background-color,backdrop-filter,border-color] duration-300 ease-out"
          : "fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-[background-color,backdrop-filter,border-color] duration-300 ease-out"
      }
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
      <div className="flex w-full items-center justify-between py-4 pl-2 pr-2 sm:pl-3 sm:pr-3 md:pl-4 md:pr-4 lg:pl-5 lg:pr-5">
        <Link
          href="/"
          aria-label="Veraxius home"
          className="flex shrink-0 items-center"
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

        <div className="flex shrink-0 items-center gap-4 sm:gap-5 md:gap-6">
          <a
            href={isHome ? "#early-access" : "/#early-access"}
            className="font-dm-mono font-medium text-[11px] tracking-cta uppercase bg-[var(--amber)] text-[var(--bg-primary)] px-5 py-3 transition-colors hover:bg-[var(--amber-glow)]"
            style={{ letterSpacing: "0.08em" }}
            onClick={onHomeInPageNav("early-access")}
          >
            Request Early Access
          </a>

          <div
            className="flex items-center gap-4 sm:gap-5 md:gap-6"
            style={{ color: "var(--amber)" }}
          >
            <Link
              href="/aimsignalprogram"
              className="font-dm-mono font-medium text-[10px] uppercase transition-opacity hover:opacity-80"
              style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
              aria-label="Veraxius AIM Signal Operators Program (go to the AIM Signal Program page)"
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
              className="font-dm-mono font-medium text-[10px] uppercase transition-opacity hover:opacity-80"
              style={{ letterSpacing: "0.08em", color: "var(--amber)" }}
              aria-label="Veraxius AIM Signal Store (go to the AIM Signal Store page)"
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
              className="font-dm-mono font-medium text-[10px] uppercase transition-opacity hover:opacity-80"
              style={{ color: "var(--amber)", letterSpacing: "0.08em" }}
              aria-label="Contact Veraxius (go to contact section on the home page)"
              onClick={onHomeInPageNav("contact-us")}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
