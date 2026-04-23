"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { SiteHeader } from "@/components/veraxius";
import { cn } from "@/lib/utils";
import {
  SvgBrokenShield,
  SvgCalendarCheck,
  SvgDoubleChevrons,
  SvgHeroCrosshair,
  SvgHubNetwork,
  SvgIsometricLayers,
  SvgMountainFlag,
  SvgOpenBoxRays,
  SvgPersonCrosshair,
  SvgRadialNetwork,
} from "@/components/vasp/svgs";
import { ACCENT, BG, MUTED, TEXT } from "@/components/vasp/tokens";
import { useReveal } from "@/components/vasp/use-reveal";

const APPLY_URL = "https://zfrmz.com/ygXQEHswQtHrFGtcWzwg";

function RevealSection({
  id,
  className,
  children,
  padded = true,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  padded?: boolean;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      className={cn(padded && "vx-section", "vasp-reveal", visible && "visible", className)}
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <div className={cn(padded && "vx-container")}>{children}</div>
    </section>
  );
}

function StepCircle({ n, active }: { n: number; active: boolean }) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-dm-mono text-sm font-semibold md:h-14 md:w-14 md:text-base",
        active ? "text-[#0A0A0A]" : "border-white bg-transparent text-white"
      )}
      style={
        active
          ? { backgroundColor: ACCENT, borderColor: ACCENT }
          : { borderColor: TEXT, backgroundColor: BG }
      }
    >
      {n}
    </div>
  );
}

function StepTrackerVisual() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [lit, setLit] = useState(() => [true, false, false, false, false]);

  useEffect(() => {
    if (!visible) return;
    const timers = [1, 2, 3, 4].map((idx) =>
      window.setTimeout(() => {
        setLit((prev) => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
      }, idx * 300)
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [visible]);

  const nodes = [0, 1, 2, 3, 4].map((i) => (
    <Fragment key={i}>
      <StepCircle n={i + 1} active={lit[i]} />
      {i < 4 && (
        <>
          <div
            className="block h-8 w-[2px] shrink-0 md:hidden"
            style={{ backgroundColor: TEXT }}
            aria-hidden
          />
          <div
            className="hidden h-[2px] min-w-[20px] max-w-[56px] flex-1 shrink-0 md:block"
            style={{ backgroundColor: TEXT }}
            aria-hidden
          />
        </>
      )}
    </Fragment>
  ));

  return (
    <div ref={ref} className="mb-14 md:mb-16">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-0">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-3 lg:gap-4">
          {nodes}
        </div>
      </div>
    </div>
  );
}

function DashList({
  items,
  className,
  centered = false,
}: {
  items: string[];
  className?: string;
  centered?: boolean;
}) {
  return (
    <ul
      className={cn(
        "mx-auto max-w-2xl space-y-4",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {items.map((t) => (
        <li
          key={t}
          className={cn(
            "font-dm-sans text-[max(0.95rem,14px)] leading-relaxed md:text-[1.05rem]",
            centered
              ? "flex items-start justify-center gap-3"
              : "flex gap-3"
          )}
          style={{ color: TEXT }}
        >
          <span className="shrink-0 font-dm-mono" style={{ color: ACCENT }}>
            —
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
      {items.map((t) => (
        <div
          key={t}
          className="flex gap-3 font-dm-sans text-[max(0.95rem,14px)] leading-snug md:text-[1.05rem]"
          style={{ color: TEXT }}
        >
          <span style={{ color: ACCENT }} className="shrink-0 pt-0.5">
            ✓
          </span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

const STEP_CARDS = [
  {
    title: "Apply",
    desc: "Submit your information and prequalify",
  },
  {
    title: "Attend Live Briefing",
    desc: "30-minute session. No fluff. Full context",
  },
  {
    title: "Get Selected",
    desc: "We choose based on signal, not background",
  },
  {
    title: "Enter AIM System",
    desc: "You operate inside a live environment",
  },
  {
    title: "Build + Get Scored",
    desc: "Your actions define your credibility",
  },
];

const HERO_INTRO =
  "A 6-month operator program where you don't study integrity. You generate it, break it, and prove it inside a live system.";
const HERO_SUPPORT = "Monthly selection. Limited seats per cohort.";

function HeroReveal() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "vasp-reveal flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-[7.5rem] md:px-12",
        visible && "visible"
      )}
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
        <div className="flex w-full max-w-[600px] flex-col items-center">
          <Image
            src="/aimprogram.png"
            alt="Veraxius AIM Signal Operators Program (AIM Program)"
            width={3334}
            height={1250}
            sizes="(max-width: 600px) 100vw, 480px"
            className="h-auto w-full max-w-[min(100%,480px)] object-contain"
            priority
            quality={90}
          />
          <p
            className="mx-auto mt-5 max-w-[600px] font-dm-sans leading-relaxed"
            style={{
              color: MUTED,
              fontSize: "clamp(16px, 1.6vw, 19px)",
            }}
          >
            {HERO_INTRO}
          </p>
          <p
            className="mt-4 max-w-[600px] font-dm-mono text-[11px]"
            style={{ letterSpacing: "0.06em", color: MUTED }}
          >
            {HERO_SUPPORT}
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full max-w-sm items-center justify-center rounded-full px-10 py-4 font-dm-mono text-[12px] font-medium uppercase tracking-cta transition-[filter] hover:brightness-110 sm:w-auto md:text-[13px]"
            style={{ backgroundColor: ACCENT, color: BG }}
            aria-label="Apply now to the Veraxius AIM Signal Operators Program (opens in a new tab)"
          >
            Apply Now
          </a>
        </div>

        <div className="mt-24 w-full sm:mt-32">
          <SvgHeroCrosshair />
          <h1
            className="mt-8 font-syne font-extrabold tracking-tight"
            style={{
              color: TEXT,
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              lineHeight: 1.08,
            }}
          >
            Build trust systems. Or expose why they fail.
          </h1>
          <a
            href="#how-it-works"
            className="mt-8 inline-block font-dm-mono text-[10px] uppercase tracking-cta text-white/80 transition-colors hover:text-white md:mt-10 md:text-[11px]"
          >
            See How It Works
          </a>
        </div>
      </div>
    </div>
  );
}

export function VaspLanding() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: BG, color: TEXT }}>
      <SiteHeader />
      <HeroReveal />

      {/* SECTION 2 */}
      <RevealSection id="how-it-works" className="scroll-mt-28">
        <div className="text-center">
          <StepTrackerVisual />
          <h2 className="vx-h2 mb-12 md:mb-14">How It Works</h2>
          <div className="mx-auto mt-8 grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEP_CARDS.map((s, i) => (
              <div key={s.title} className="text-left lg:text-center">
                <p className="font-dm-mono text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
                  {i + 1}.
                </p>
                <p className="font-syne mt-2 text-lg font-bold md:text-xl">{s.title}</p>
                <p className="mt-2 font-dm-sans text-[max(0.9rem,14px)] leading-relaxed md:text-[1rem]" style={{ color: MUTED }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-3xl font-syne text-xl font-bold leading-snug md:text-2xl">
            No resumes. No guessing. Your signal decides.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 3 */}
      <RevealSection>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SvgBrokenShield />
          </div>
          <h2 className="vx-h2 mb-10 mt-10">The Problem</h2>
          <p
            className="mx-auto mt-10 max-w-2xl text-center font-dm-sans text-[max(1.15rem,18px)] leading-relaxed md:text-2xl"
            style={{ color: TEXT }}
          >
            Every system claims trust. None can measure it.
          </p>
          <DashList
            centered
            className="mt-10 !mx-auto !max-w-2xl"
            items={[
              "AI scales faster than credibility",
              "Platforms reward noise over truth",
              "Credentials don't reflect behavior",
            ]}
          />
          <p className="mx-auto mt-12 text-center font-syne text-xl font-bold md:text-2xl" style={{ color: ACCENT }}>
            Decisions are made on signals nobody can verify.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 4 */}
      <RevealSection>
        <div className="mx-auto max-w-3xl text-center">
          <SvgIsometricLayers />
          <h2 className="vx-h2 mb-10 mt-10">The Shift</h2>
          <div className="mx-auto mt-10 max-w-xl space-y-5 text-left md:text-center">
            <p className="font-dm-sans text-[max(1rem,18px)] leading-relaxed md:text-xl" style={{ color: TEXT }}>
              Veraxius is building the Trust Layer for AI systems.
            </p>
            <p className="font-dm-sans text-[max(1rem,18px)] leading-relaxed md:text-xl" style={{ color: TEXT }}>
              We don&apos;t define truth.
            </p>
            <p className="font-dm-sans text-[max(1rem,18px)] leading-relaxed md:text-xl" style={{ color: TEXT }}>
              We measure credibility over time.
            </p>
          </div>
          <p className="mt-8 font-dm-sans text-sm italic md:text-base" style={{ color: MUTED }}>
            This is infrastructure. Not theory.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 5 */}
      <RevealSection>
        <div className="mx-auto max-w-3xl">
          <SvgHubNetwork />
          <h2 className="vx-h2 mb-10 mt-10 text-center">What You Actually Do</h2>
          <DashList
            centered
            className="mt-12 !mx-auto !max-w-2xl"
            items={[
              "Deconstruct how systems get manipulated",
              "Work inside a live trust-scoring engine",
              "Rotate across tech, behavior, markets, and governance",
              "Stress test the system by trying to break it",
              "Build and ship real components",
            ]}
          />
          <p className="mt-12 text-center font-syne text-lg font-bold md:text-xl">
            Every action feeds your measurable credibility score.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 6 */}
      <RevealSection>
        <div className="mx-auto max-w-3xl">
          <SvgOpenBoxRays />
          <h2 className="vx-h2 mb-10 mt-10 text-center">What You Get</h2>
          <div className="mt-12">
            <CheckGrid
              items={[
                "Direct access to the core system",
                "Ownership tied to contribution",
                "Signal-based reputation",
                "Real evaluation based on outcomes",
                "Exposure to high-level decision making",
                "No busy work. No observation roles",
              ]}
            />
          </div>
        </div>
      </RevealSection>

      {/* SECTION 7 */}
      <RevealSection>
        <div className="mx-auto max-w-3xl">
          <SvgPersonCrosshair />
          <h2 className="vx-h2 mb-10 mt-10 text-center">Who This Is For</h2>
          <p className="mt-10 text-center font-dm-sans text-[max(1.15rem,20px)] font-normal md:text-2xl">
            You don&apos;t need a perfect resume.
          </p>
          <DashList
            centered
            className="mt-10 !mx-auto !max-w-2xl"
            items={[
              "Clear thinking under pressure",
              "Willingness to challenge assumptions",
              "Ability to work across disciplines",
              "High personal standards",
            ]}
          />
          <p className="mt-12 text-center font-syne text-lg font-bold md:text-xl">
            If you wait for instructions, this is not for you.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 8 */}
      <RevealSection>
        <div className="mx-auto max-w-4xl">
          <h2 className="vx-h2 mb-10 text-center">What Makes This Different</h2>
          <SvgDoubleChevrons />
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
            <div className="md:border-r md:border-white/[0.08] md:pr-10">
              <h3 className="font-syne text-xl font-bold md:text-2xl">Most Programs</h3>
              <ul className="mt-6 space-y-4 font-dm-sans text-[max(0.95rem,15px)] leading-relaxed md:text-[1.05rem]" style={{ color: TEXT }}>
                <li className="flex gap-2">
                  <span style={{ color: MUTED }}>•</span>
                  Teach theory
                </li>
                <li className="flex gap-2">
                  <span style={{ color: MUTED }}>•</span>
                  Delay responsibility
                </li>
                <li className="flex gap-2">
                  <span style={{ color: MUTED }}>•</span>
                  Protect you from failure
                </li>
              </ul>
            </div>
            <div className="md:pl-10">
              <h3 className="font-syne text-xl font-bold md:text-2xl" style={{ color: ACCENT }}>
                This Program
              </h3>
              <ul className="mt-6 space-y-4 font-dm-sans text-[max(0.95rem,15px)] leading-relaxed md:text-[1.05rem]" style={{ color: TEXT }}>
                <li className="flex gap-2">
                  <span style={{ color: ACCENT }}>•</span>
                  Gives responsibility immediately
                </li>
                <li className="flex gap-2">
                  <span style={{ color: ACCENT }}>•</span>
                  Forces real decisions
                </li>
                <li className="flex gap-2">
                  <span style={{ color: ACCENT }}>•</span>
                  Measures your impact in real time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* SECTION 9 */}
      <RevealSection>
        <div className="mx-auto max-w-2xl text-center">
          <SvgRadialNetwork />
          <h2 className="vx-h2 mb-10 mt-10">Why This Exists</h2>
          <p className="mt-10 font-dm-sans text-[max(1rem,18px)] md:text-xl" style={{ color: TEXT }}>
            Built by operators working across:
          </p>
          <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 text-left font-dm-sans text-[max(0.95rem,15px)] md:text-[1.05rem]">
            <p className="flex gap-2" style={{ color: TEXT }}>
              <span style={{ color: MUTED }}>•</span>
              AI systems
            </p>
            <p className="flex gap-2" style={{ color: TEXT }}>
              <span style={{ color: MUTED }}>•</span>
              Behavioral modeling
            </p>
            <p className="flex gap-2" style={{ color: TEXT }}>
              <span style={{ color: MUTED }}>•</span>
              Trust architecture
            </p>
            <p className="flex gap-2" style={{ color: TEXT }}>
              <span style={{ color: MUTED }}>•</span>
              Real-world platform design
            </p>
          </div>
          <p className="mt-10 font-dm-sans text-sm md:text-base" style={{ color: MUTED }}>
            Powered by the Veraxius AIM Model.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 10 */}
      <RevealSection>
        <div className="mx-auto max-w-2xl">
          <SvgCalendarCheck />
          <h2 className="vx-h2 mb-10 mt-10 text-center">Cohort Access</h2>
          <DashList
            centered
            className="mt-10 !mx-auto !max-w-2xl"
            items={["Monthly intake", "Limited seats per cycle", "Selection based on signal, not background"]}
          />
          <div
            className="mx-auto mt-10 max-w-xl rounded-lg px-6 py-5 text-center font-syne text-lg font-bold leading-snug md:text-xl"
            style={{ backgroundColor: "#111111", color: ACCENT }}
          >
            Next live session: Thursday, May 7, 2026 @ 10:30 am EST
          </div>
        </div>
      </RevealSection>

      {/* SECTION 11 */}
      <RevealSection>
        <div className="mx-auto max-w-2xl">
          <SvgMountainFlag />
          <h2 className="vx-h2 mb-10 mt-10 text-center">The Commitment</h2>
          <DashList
            centered
            className="mt-10 !mx-auto !max-w-2xl"
            items={["Duration: 6 months", "Weekly intensity: high", "Output: real"]}
          />
          <p className="mt-12 text-center font-syne text-xl font-bold md:text-2xl">
            If you don&apos;t produce, you don&apos;t progress.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 12 */}
      <RevealSection>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="relative mx-auto flex h-[160px] w-[160px] items-center justify-center">
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{ border: `2px solid ${ACCENT}` }}
              aria-hidden
            />
            <Image
              src="/aimprogram.png"
              alt="Veraxius AIM Signal Operators Program (AIM Program)"
              width={240}
              height={240}
              sizes="120px"
              className="relative z-10 h-[120px] w-[120px] shrink-0 object-contain"
              quality={90}
            />
          </div>
          <h2 className="font-syne mt-10 text-[clamp(1.6rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight md:mt-12">
            Don&apos;t apply to learn.
            <br />
            Apply to prove what kind of signal you are.
          </h2>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full px-10 py-4 font-dm-mono text-[11px] font-medium uppercase tracking-cta transition-[filter] hover:brightness-110 md:w-auto md:text-[13px]"
            style={{ backgroundColor: ACCENT, color: BG }}
            aria-label="Apply now to the Veraxius AIM Signal Operators Program (opens in a new tab)"
          >
            Apply Now
          </a>
          <a
            href="#"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3 font-dm-mono text-[10px] font-medium uppercase tracking-cta text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.04] md:w-auto md:text-[11px]"
          >
            Reserve Your Spot for the Live Session
          </a>
        </div>
      </RevealSection>

      {/* SECTION 13 — FOOTER */}
      <RevealSection className="!pb-16 !pt-16">
        <footer className="mx-auto max-w-3xl text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/aimprogram.png"
              alt="Veraxius AIM Signal Operators Program (AIM Program)"
              width={320}
              height={320}
              sizes="80px"
              className="h-auto w-[80px] max-w-full shrink-0 object-contain object-left"
              quality={90}
            />
          </div>
          <div className="mt-8 space-y-2 font-dm-sans text-[max(0.85rem,13px)] leading-relaxed md:text-[0.95rem]" style={{ color: TEXT }}>
            <p className="font-syne font-bold">Veraxius, Inc.</p>
            <p style={{ color: MUTED }}>
              The AIM Signal Operators Program is an initiative of Veraxius, Inc.
            </p>
            <p style={{ color: MUTED }}>
              Veraxius AIM Model is a trademark of Veraxius IP Holdings, LLC
            </p>
            <p style={{ color: MUTED }}>All rights reserved © 2026</p>
          </div>
          <address className="mt-8 not-italic">
            <ul className="space-y-2 font-dm-sans text-[max(0.85rem,13px)] md:text-[0.95rem]" style={{ color: MUTED }}>
              <li>
                Email:{" "}
                <a href="mailto:aimprogram@veraxius.com" className="transition-colors hover:text-[#F5A623]">
                  aimprogram@veraxius.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+15613768886" className="transition-colors hover:text-[#F5A623]">
                  +1 (561) 376-8886
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://veraxius.com/aimprogram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#F5A623]"
                >
                  https://veraxius.com/aimprogram
                </a>
              </li>
              <li>Location: Boca Raton, FL, USA</li>
            </ul>
          </address>
        </footer>
      </RevealSection>
    </main>
  );
}
