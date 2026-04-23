"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SiteHeader } from "@/components/veraxius";
import { useReveal } from "@/components/vasp/use-reveal";
import { cn } from "@/lib/utils";

const IMG = {
  header: "/Veraxius AIM Signal Store -Header.png",
  merch: "/Veraxius AIM Signal Store -Merch Signals.png",
} as const;

function StoreReveal({
  id,
  className,
  style,
  children,
  padded = true,
}: {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  padded?: boolean;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      className={cn("vasp-reveal snap-start snap-always", visible && "visible", className)}
      style={style}
    >
      {padded ? (
        <div className="relative mx-auto w-full max-w-[1200px] px-5 py-20 md:px-10 md:py-28 lg:px-12">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

function StoreCta({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[4px] px-8 py-4 font-dm-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A0A0A] transition-[filter,transform] duration-200 ease-out hover:brightness-[0.92] active:scale-[0.99]",
        className
      )}
      style={{ backgroundColor: "var(--aim-accent)" }}
    >
      {children}
    </a>
  );
}

export default function AimSignalStorePage() {
  useEffect(() => {
    document.documentElement.style.scrollSnapType = "y proximity";
    return () => {
      document.documentElement.style.scrollSnapType = "";
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
        {/* HERO */}
        <section className="snap-start snap-always">
          <div className="relative h-[min(68vh,820px)] min-h-[22rem] w-full">
            <Image
              src={IMG.header}
              alt="AIM Signal Store — system access"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div
            className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-12 text-center md:py-16"
            style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
          >
            <StoreCta href="#product-grid">
              DEFINE YOUR SIGNAL →
            </StoreCta>
            <p
              className="mt-6 font-dm-mono text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "var(--text-tertiary)" }}
            >
              T-Shirts • Hoodies • Caps • Identity Assets
            </p>
          </div>
        </section>

        {/* MOMENT OF TRUTH */}
        <StoreReveal style={{ backgroundColor: "#000000", color: "#fff" }}>
          <h2 className="text-center font-syne text-[clamp(1.5rem,4vw,2.75rem)] font-extrabold uppercase tracking-tight">
            THIS IS WHERE YOU STOP OBSERVING
          </h2>
          <MomentStatements />
          <p
            className="mx-auto mt-14 max-w-3xl text-center font-syne text-lg font-bold uppercase leading-snug md:text-xl"
            style={{ color: "var(--aim-accent)" }}
          >
            Most people stop at intention. This system does not.
          </p>
        </StoreReveal>

        {/* WHAT THIS IS */}
        <StoreReveal style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
          <h2 className="text-center font-syne text-[clamp(1.65rem,4vw,2.85rem)] font-extrabold uppercase tracking-tight">
            THIS IS NOT MERCH
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-dm-sans text-base font-medium md:text-lg">
            This is a declaration system.
          </p>
          <ul className="mx-auto mt-12 max-w-2xl list-none space-y-5 text-center font-dm-sans text-base font-medium leading-relaxed md:text-lg">
            <li>
              <span className="font-dm-mono font-bold" style={{ color: "var(--aim-accent)" }}>
                —{" "}
              </span>
              Every item represents a position
            </li>
            <li>
              <span className="font-dm-mono font-bold" style={{ color: "var(--aim-accent)" }}>
                —{" "}
              </span>
              Every position can be tested
            </li>
            <li>
              <span className="font-dm-mono font-bold" style={{ color: "var(--aim-accent)" }}>
                —{" "}
              </span>
              Every action affects your score
            </li>
          </ul>
          <p className="mx-auto mt-14 max-w-2xl text-center font-syne text-lg font-bold uppercase leading-snug md:text-xl">
            You are not buying apparel. You are entering a system.
          </p>
        </StoreReveal>

        {/* HOW IT WORKS */}
        <StoreReveal style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-primary)" }}>
          <p className="text-center font-dm-mono text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: "var(--aim-accent)" }}>
            HOW IT WORKS
          </p>
          <h2 className="mt-4 text-center font-syne text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold uppercase tracking-tight">
            FROM CLAIM TO PROOF
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              { n: "01", t: "DECLARE", d: "Choose what you stand for" },
              { n: "02", t: "COMMIT", d: "Make it real" },
              { n: "03", t: "ACTIVATE", d: "Enter the system" },
              { n: "04", t: "PROVE", d: "Your behavior defines you" },
            ].map((step) => (
              <div key={step.n} className="border border-white/[0.08] bg-[#0A0A0B]/40 p-6 md:p-7">
                <p className="font-syne text-4xl font-extrabold md:text-5xl" style={{ color: "var(--aim-accent)" }}>
                  {step.n}
                </p>
                <p className="mt-4 font-syne text-lg font-extrabold uppercase tracking-tight">{step.t}</p>
                <p className="mt-2 font-dm-sans text-sm leading-relaxed md:text-[15px]" style={{ color: "var(--text-secondary)" }}>
                  {step.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-center font-syne text-base font-bold uppercase md:text-lg">
            You don&apos;t state identity. You demonstrate it.
          </p>
        </StoreReveal>

        {/* SIGNALS — single composite (replaces 6-card grid) */}
        <StoreReveal
          id="product-grid"
          className="scroll-mt-[88px]"
          style={{
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-primary)",
          }}
        >
          <h2 className="text-center font-syne text-[clamp(1.65rem,4vw,2.85rem)] font-extrabold uppercase tracking-tight">
            SIGNALS AVAILABLE
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center font-dm-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--text-tertiary)" }}>
            Each signal carries weight.
          </p>
          <div
            className="relative z-10 mt-10 w-full overflow-hidden border border-white/[0.1] bg-[#0A0A0A] md:mt-14"
            style={{ borderRadius: "4px" }}
          >
            {/* Native img: avoids next/image optimizer edge cases with spaces in public filenames */}
            <img
              src={encodeURI(IMG.merch)}
              alt="Veraxius AIM Signal Store — six signals: activate, trust, signal, integrity layer, score, symbol cap"
              className="relative z-10 block h-auto w-full max-w-full"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </StoreReveal>

        {/* WHY THIS EXISTS */}
        <StoreReveal style={{ backgroundColor: "#000000", color: "#fff" }}>
          <h2 className="text-center font-syne text-[clamp(1.5rem,4vw,2.75rem)] font-extrabold uppercase tracking-tight">
            AI IS SCALING. TRUST IS NOT.
          </h2>
          <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-2 md:gap-16 md:pt-16">
            <div>
              <p className="font-dm-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--text-tertiary)" }}>
                WHAT NO LONGER WORKS
              </p>
              <ul className="mt-6 space-y-4 font-dm-sans text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
                <li>Content is infinite</li>
                <li>Credentials are diluted</li>
                <li>Attention is cheap</li>
              </ul>
            </div>
            <div>
              <p className="font-dm-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--aim-accent)" }}>
                WHAT MATTERS NOW
              </p>
              <ul className="mt-6 space-y-4 font-dm-sans text-base font-medium leading-relaxed md:text-lg">
                <li>Signal quality</li>
                <li>Behavioral consistency</li>
                <li>Verifiable credibility</li>
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-center font-dm-sans text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.78)" }}>
            Veraxius measures that. This store makes it visible.
          </p>
        </StoreReveal>

        {/* WHO THIS IS FOR */}
        <StoreReveal style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
          <h2 className="text-center font-syne text-[clamp(1.65rem,4vw,2.85rem)] font-extrabold uppercase tracking-tight">
            NOT FOR EVERYONE
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center font-dm-sans text-base leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
            This is for people who prefer proof over perception. Who act consistently. Who accept evaluation. Who stand by their decisions.
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-center font-syne text-lg font-extrabold uppercase md:text-xl" style={{ color: "var(--aim-accent)" }}>
            If not, don&apos;t enter.
          </p>
        </StoreReveal>

        {/* FUNDING */}
        <StoreReveal
          className="relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-primary)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-center font-syne text-[clamp(1.5rem,3.8vw,2.5rem)] font-extrabold uppercase tracking-tight">
              EVERY PURCHASE BUILDS THE SYSTEM
            </h2>
            <ul className="mx-auto mt-12 max-w-xl space-y-4 font-dm-sans text-base leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
              <li className="flex gap-3">
                <span className="shrink-0 font-dm-mono font-bold" style={{ color: "var(--aim-accent)" }}>
                  —
                </span>
                Fund Veraxius operations
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-dm-mono font-bold" style={{ color: "var(--aim-accent)" }}>
                  —
                </span>
                Accelerate AIM development
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-dm-mono font-bold" style={{ color: "var(--aim-accent)" }}>
                  —
                </span>
                Expand the Integrity Layer
              </li>
            </ul>
            <p className="mx-auto mt-12 max-w-2xl text-center font-syne text-base font-bold uppercase md:text-lg">
              You are not consuming. You are contributing.
            </p>
          </div>
        </StoreReveal>

        {/* FINAL CTA */}
        <StoreReveal
          padded={false}
          style={{ backgroundColor: "#000000", color: "#fff" }}
          className="flex min-h-[85vh] flex-col justify-center"
        >
          <div className="mx-auto w-full max-w-[1200px] px-5 py-24 text-center md:px-12 md:py-32">
            <p className="font-syne font-extrabold uppercase tracking-[-0.03em]" style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)", lineHeight: 1.05 }}>
              YOU MADE A CLAIM.
            </p>
            <p className="mt-4 font-syne font-extrabold uppercase tracking-[-0.03em]" style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)", lineHeight: 1.05 }}>
              NOW PROVE IT.
            </p>
            <p className="mx-auto mt-8 max-w-md font-dm-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.5)" }}>
              This decision will be measured.
            </p>
            <StoreCta href="#product-grid" className="mt-12 px-12 py-5 text-[12px] md:text-[13px]">
              ENTER THE SIGNAL STORE →
            </StoreCta>
            <p className="mx-auto mt-8 max-w-sm font-dm-sans text-sm" style={{ color: "rgba(255,255,255,0.42)" }}>
              If you don&apos;t activate, this is just clothing.
            </p>
          </div>
        </StoreReveal>

        {/* FOOTER */}
        <footer
          className="snap-start border-t border-white/[0.08] px-5 py-16 md:px-12"
          style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-secondary)" }}
        >
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3 font-dm-sans text-sm leading-relaxed">
              <p className="font-syne font-bold text-[var(--text-primary)]">Veraxius, Inc. — Public Benefit Corporation</p>
              <p>AIM™ — Veraxius IP Holdings, LLC</p>
              <p className="font-dm-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--aim-accent)" }}>
                Integrity is measured.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 font-dm-mono text-[10px] uppercase tracking-[0.16em]">
              <Link href="/aimsignalstore" className="transition-opacity hover:opacity-80" style={{ color: "var(--aim-accent)" }}>
                Store
              </Link>
              <a href="#product-grid" className="transition-opacity hover:opacity-80" style={{ color: "var(--aim-accent)" }}>
                Activate
              </a>
              <Link href="/aimsignalprogram" className="transition-opacity hover:opacity-80" style={{ color: "var(--aim-accent)" }}>
                System
              </Link>
              <a
                href="https://veraxius.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                style={{ color: "var(--aim-accent)" }}
              >
                veraxius.com
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}

function MomentStatements() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const lines = [
    "When you choose → You declare.",
    "When you buy → You commit.",
    "When you activate → You accept being measured.",
  ];
  return (
    <div ref={ref} className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
      {lines.map((line, i) => (
        <p
          key={line}
          className={cn(
            "border border-white/10 bg-white/[0.03] px-5 py-6 text-center font-dm-sans text-base font-semibold leading-snug transition-all duration-700 md:text-lg",
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          )}
          style={{ transitionDelay: visible ? `${100 + i * 120}ms` : "0ms" }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
