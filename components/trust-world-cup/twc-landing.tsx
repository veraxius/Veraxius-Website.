"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/components/vasp/use-reveal";
import {
  SvgIconAccess,
  SvgIconArchive,
  SvgIconBriefing,
  SvgIconChannel,
  SvgIconMission,
  SvgIconPriority,
  SvgIconScore,
  SvgIconSignal,
  SvgSignalLayer,
} from "@/components/trust-world-cup/twc-svgs";

const APPLY_URL = "#apply";
const APPLY_FORM_URL = "https://zfrmz.com/oKZlIcsJRcHQ28CXIPDo";
const STICKY_BAR_HEIGHT = 52;

/** Syne titles — responsive clamps aligned with homepage */
const TWC_TITLE_DISPLAY = "twc-headline-display font-syne font-extrabold";
const TWC_TITLE_SECTION = "twc-headline-section font-syne font-extrabold text-center";
const TWC_TITLE_CARD = "vx-title-card font-syne text-balance break-words";
const TWC_TITLE_STATEMENT = "vx-title-statement font-syne text-balance break-words text-center";

function scrollToApplySection(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const target = document.getElementById("apply");
  if (!target) return;
  const top =
    target.getBoundingClientRect().top + window.scrollY - STICKY_BAR_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

function RevealSection({
  id,
  className,
  children,
  padded = true,
  dark = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  padded?: boolean;
  dark?: boolean;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "w-full",
        padded && "vx-section",
        "twc-reveal",
        visible && "visible",
        className,
      )}
      style={{
        backgroundColor: dark ? "var(--bg-secondary)" : "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div
        className={cn(
          "twc-section-inner",
          padded ? "vx-container" : "vx-container w-full",
        )}
      >
        {children}
      </div>
    </section>
  );
}

function TwcCta({
  href = APPLY_URL,
  children,
  size = "default",
  outline = false,
  className,
  onClick,
  external = false,
}: {
  href?: string;
  children: React.ReactNode;
  size?: "default" | "large" | "small";
  outline?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  external?: boolean;
}) {
  const isApplyLink = href === APPLY_URL || href?.endsWith("#apply");
  const sizeClasses = {
    small:
      "min-h-[44px] px-5 py-2.5 text-[10px] md:text-[11px]",
    default:
      "min-h-[44px] px-8 py-4 text-[12px] md:text-[13px]",
    large:
      "min-h-[48px] px-10 py-5 text-[13px] md:text-[14px]",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick ?? (isApplyLink ? scrollToApplySection : undefined)}
      aria-label={
        external
          ? "Join the experiment — open application form in a new tab"
          : undefined
      }
      className={cn(
        "inline-flex max-w-full items-center justify-center text-center font-dm-mono font-medium uppercase tracking-cta transition-[filter,background-color,border-color] hover:brightness-110",
        sizeClasses[size],
        outline
          ? "border border-[var(--amber-border)] bg-transparent text-[var(--amber)] hover:border-[var(--amber)]"
          : "twc-cta-glow bg-[var(--amber)] text-[var(--bg-primary)]",
        className,
      )}
      style={{ letterSpacing: "0.08em" }}
    >
      {children}
    </a>
  );
}

function StickyBar({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className={cn(
        "twc-sticky-bar fixed left-0 right-0 top-0 z-50 flex min-w-0 items-center justify-between gap-2 px-3 sm:gap-3 sm:px-5 md:px-8",
        visible && "visible",
      )}
      style={{
        backgroundColor: "var(--bg-header)",
        borderBottom: "1px solid var(--amber-border)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
      aria-hidden={!visible}
    >
      <Link
        href="/"
        aria-label="Veraxius home"
        className="flex min-w-0 shrink items-center transition-opacity hover:opacity-80"
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
      <TwcCta size="small" outline className="ml-auto shrink-0 sm:ml-0">
        <span className="sm:hidden">JOIN</span>
        <span className="hidden sm:inline">JOIN THE EXPERIMENT</span>
      </TwcCta>
    </motion.div>
  );
}

function HeroSection() {
  const { ref: revealRef, visible } = useReveal<HTMLDivElement>();

  const lines = [
    "Trust World Cup™",
    "The world will argue.",
    "We will observe.",
    "500 people.",
    "One World Cup.",
    "Millions of signals.",
  ];

  return (
    <section
      className="relative flex min-h-[100dvh] min-h-[100svh] w-full min-w-0 flex-col overflow-x-clip pb-6 lg:min-h-[100svh] lg:pb-8"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Signal visual — decorative overlay on the right; section bg stays uniform */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] overflow-hidden opacity-60 lg:block"
        aria-hidden
      >
        <SvgSignalLayer />
      </div>

      <motion.div
        ref={revealRef}
        className={cn(
          "twc-reveal relative z-10 flex min-w-0 flex-1 flex-col justify-start pb-12 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:justify-center sm:pb-16 sm:pt-[4.5rem] lg:pb-6 lg:pt-[3.25rem]",
          "w-full",
          visible && "visible",
        )}
      >
        <div className="vx-container w-full min-w-0 max-w-full text-center lg:text-left">
          <h1 className={TWC_TITLE_DISPLAY}>
            {lines.map((line, i) => (
              <span
                key={line}
                className={cn("block", i > 0 && "mt-[0.12em]")}
                style={{
                  color: i === 0 ? "var(--amber)" : "var(--text-primary)",
                }}
              >
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-10 flex flex-col items-center md:mt-12 lg:items-start">
            <TwcCta size="large" className="w-full max-w-xs sm:w-auto">
              JOIN THE EXPERIMENT
            </TwcCta>
            <p className="vx-mono-sm mt-4 text-[var(--text-tertiary)]">
              2–4 minute application
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StaggeredStatement({ line, index }: { line: string; index: number }) {
  const { ref, visible } = useReveal<HTMLParagraphElement>();
  return (
    <p
      ref={ref}
      className={cn(
        "twc-reveal min-w-0 px-1 py-5 sm:px-0 sm:py-8",
        TWC_TITLE_STATEMENT,
        visible && "visible",
      )}
      style={{
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {line}
    </p>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target]);

  return (
    <div ref={ref} className="w-full min-w-0 text-center">
      <p className={cn(TWC_TITLE_DISPLAY, "tabular-nums text-[var(--amber)]")}>
        {count}
        <span style={{ color: "var(--text-tertiary)" }}> / 500</span>
      </p>
      <p className="vx-eyebrow mt-4 !text-[var(--text-secondary)]">
        Founding Operatives Applied
      </p>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the Trust World Cup™?",
      a: "A live trust observation experiment during the next World Cup. Five hundred founding operatives will track how credibility forms, breaks, and spreads — in real time, at global scale.",
    },
    {
      q: "Who can apply to be a Founding Trust Operative™?",
      a: "Anyone who thinks clearly under pressure. No credentials required. We select for signal — curiosity, judgment, and willingness to observe without performing.",
    },
    {
      q: "What will I actually do?",
      a: "You receive a mission assignment — scout, hunter, reviewer, or another role. You observe, report signals, and contribute to a live trust map as the tournament unfolds.",
    },
    {
      q: "Is this free?",
      a: "Yes. Founding membership costs nothing. Your contribution is your attention, judgment, and signal.",
    },
    {
      q: "How long does the application take?",
      a: "Two to four minutes. Short by design. We measure fit, not résumés.",
    },
    {
      q: "When does it start?",
      a: "Before the first whistle. Founding operatives are onboarded in the weeks leading up to the tournament opening.",
    },
    {
      q: "What if I'm not accepted?",
      a: "Five hundred spots. Not everyone gets in. If you're not selected, you can reapply for future operations. The window stays open — but founding status does not.",
    },
  ];

  return (
    <div className="w-full min-w-0">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="border-b"
            style={{ borderColor: "var(--divider)" }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full min-h-[44px] items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(TWC_TITLE_CARD, "min-w-0 flex-1 pr-2")}
              >
                {item.q}
              </span>
              <span
                className="shrink-0 font-dm-mono text-lg transition-transform duration-200"
                style={{
                  color: "var(--amber)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="vx-body-sm break-words pb-5">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const NOT_FAN_CLUB_CARDS = [
  {
    title: "Not a fan club",
    body: "We don't cheer for teams. We observe how trust forms and breaks under global pressure.",
  },
  {
    title: "Not media",
    body: "No hot takes. No punditry. Signal over narrative, always.",
  },
  {
    title: "Not sports content",
    body: "Soccer is the test environment. Trust is the subject.",
  },
];

const WHY_JOINING = [
  "Because they love soccer.",
  "Because they question narratives.",
  "Because they want to be early.",
  "Because they believe trust is infrastructure.",
  "Because they want to be part of history.",
];

const MISSIONS_TOP = [
  { name: "Signal Scout™", desc: "Track emerging narratives before they become consensus." },
  { name: "Trust Hunter™", desc: "Find where credibility breaks under tournament pressure." },
  { name: "Referee Reviewer™", desc: "Observe decisions that shape perception and outcome." },
  { name: "Prediction Watcher™", desc: "Monitor forecasts, markets, and confidence signals." },
];

const MISSIONS_BOTTOM = [
  { name: "Meme Operative™", desc: "Read cultural velocity as trust infrastructure." },
  { name: "Creator / Storyteller™", desc: "Translate complex signals into clear witness." },
  { name: "Research Operative™", desc: "Deep-dive the data behind the noise." },
];

function MissionCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div
      className="h-full min-w-0 rounded-sm border p-5 transition-shadow duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:p-6"
      style={{
        backgroundColor: "var(--bg-panel)",
        borderColor: "var(--divider)",
      }}
    >
      <p className={cn(TWC_TITLE_CARD, "break-words text-[var(--amber)]")}>{name}</p>
      <p className="vx-body-sm mt-3">
        {desc}
      </p>
    </div>
  );
}

const BENEFITS = [
  {
    icon: SvgIconAccess,
    label: "Founding Operative Status",
    desc: "Permanent marker in the movement's origin cohort.",
  },
  {
    icon: SvgIconSignal,
    label: "Direct Access",
    desc: "First access to trust signals before public release.",
  },
  {
    icon: SvgIconMission,
    label: "Mission Assignment",
    desc: "Assigned role based on your signal profile.",
  },
  {
    icon: SvgIconChannel,
    label: "Private Channel",
    desc: "Direct line to the operation as it unfolds.",
  },
  {
    icon: SvgIconScore,
    label: "Credibility Score",
    desc: "Your contributions build measurable reputation.",
  },
  {
    icon: SvgIconArchive,
    label: "History Archive",
    desc: "Permanent record of your role at the beginning.",
  },
  {
    icon: SvgIconBriefing,
    label: "Pre-Tournament Briefings",
    desc: "Context before the world arrives.",
  },
  {
    icon: SvgIconPriority,
    label: "Selection Priority",
    desc: "Founding members considered first for future operations.",
  },
];

const COUNTRIES = [
  "Brazil",
  "United Kingdom",
  "Germany",
  "Nigeria",
  "Japan",
  "United States",
  "France",
  "Argentina",
  "South Korea",
  "Mexico",
  "Netherlands",
  "Portugal",
];

export function TwcLanding() {
  return (
    <main
      className="twc-page min-h-screen min-w-0 w-full"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <StickyBar visible />

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. WORLD CUP WILL TEST TRUST */}
      <RevealSection dark className="!pt-[6.25rem] !pb-24 md:!pt-[8.25rem] md:!pb-32">
        <div className="mx-auto w-full min-w-0 max-w-5xl text-center">
          <h2 className={TWC_TITLE_SECTION}>
            <span className="block">The next World Cup</span>
            <span className="mt-[0.12em] block">Will test</span>
            <span className="mt-[0.12em] block">More than teams.</span>
            <span className="mt-[0.12em] block text-[var(--amber)]">It will test trust.</span>
          </h2>
        </div>
      </RevealSection>

      {/* 3. THIS IS NOT A FAN CLUB */}
      <RevealSection>
        <div className="mx-auto w-full min-w-0 max-w-[960px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {NOT_FAN_CLUB_CARDS.map((card) => (
              <div
                key={card.title}
                className="vx-panel min-w-0 p-6 text-center transition-shadow duration-250 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:p-8"
              >
                <h3 className={cn(TWC_TITLE_CARD, "text-center")}>{card.title}</h3>
                <p className="vx-body-sm mt-4 text-center">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* 4. WHY PEOPLE ARE JOINING */}
      <RevealSection dark>
        <div className="mx-auto w-full min-w-0 max-w-xl px-1 text-center sm:px-0">
          {WHY_JOINING.map((line, i) => (
            <StaggeredStatement key={line} line={line} index={i} />
          ))}
        </div>
      </RevealSection>

      {/* 5. WHO BELONGS HERE */}
      <RevealSection>
        <div className="mx-auto w-full min-w-0 max-w-2xl px-0 text-center">
          <p className="vx-body">If you&apos;ve ever questioned what you&apos;re being told.</p>
          <p className="vx-body mt-6">
            If you believe the next World Cup will be about more than scores.
          </p>
          <p className="vx-body mt-6">
            If you want to be in the room when something new begins.
          </p>
          <p className={cn(TWC_TITLE_DISPLAY, "mt-14 text-center text-[var(--amber)]")}>
            You belong here.
          </p>
        </div>
      </RevealSection>

      {/* 6. CHOOSE YOUR MISSION */}
      <RevealSection dark>
        <div className="mx-auto w-full min-w-0 max-w-5xl">
          <h2 className={cn(TWC_TITLE_SECTION, "mb-12 md:mb-16")}>Choose Your Mission</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MISSIONS_TOP.map((m) => (
              <MissionCard key={m.name} name={m.name} desc={m.desc} />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MISSIONS_BOTTOM.map((m) => (
              <MissionCard key={m.name} name={m.name} desc={m.desc} />
            ))}
          </div>
        </div>
      </RevealSection>

      {/* 7. NOT EVERYONE WILL GET IN */}
      <RevealSection dark className="!py-28 md:!py-40">
        <div className="mx-auto w-full min-w-0 max-w-5xl text-center">
          <div
            className="mx-auto mb-10 h-px w-24"
            style={{ backgroundColor: "var(--amber)" }}
            aria-hidden
          />
          <h2 className={TWC_TITLE_SECTION}>
            <span className="block">Not everyone</span>
            <span className="mt-[0.12em] block">Will get in.</span>
          </h2>
          <div
            className="mx-auto mt-10 h-px w-24"
            style={{ backgroundColor: "var(--amber)" }}
            aria-hidden
          />
        </div>
      </RevealSection>

      {/* 8. FOUNDING MEMBER BENEFITS */}
      <RevealSection>
        <div className="mx-auto w-full min-w-0 max-w-4xl">
          <h2 className={cn(TWC_TITLE_SECTION, "mb-12 md:mb-16")}>
            Founding Member Benefits
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="min-w-0 text-center">
                  <div className="mb-4 flex justify-center">
                    <Icon />
                  </div>
                  <p className={cn(TWC_TITLE_CARD, "text-center")}>{b.label}</p>
                  <p className="vx-body-sm mt-2">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* 9. GLOBAL SIGNAL */}
      <RevealSection dark>
        <div className="mx-auto w-full min-w-0 max-w-3xl">
          <AnimatedCounter target={247} />
          <div className="mt-16 border-t pt-12" style={{ borderColor: "var(--divider)" }}>
            <p className="vx-eyebrow mb-8 text-center !text-[var(--text-tertiary)]">
              Countries joining
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-8">
              {COUNTRIES.map((c) => (
                <span
                  key={c}
                  className="vx-mono-sm text-[var(--text-secondary)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 10. BEFORE THE FIRST WHISTLE */}
      <RevealSection dark className="!py-28 md:!py-36">
        <div className="mx-auto w-full min-w-0 max-w-3xl text-center">
          <p className={TWC_TITLE_DISPLAY}>The tournament begins.</p>
          <p className={cn(TWC_TITLE_DISPLAY, "mt-[0.12em]")}>The window closes.</p>
          <p className={cn(TWC_TITLE_DISPLAY, "mt-[0.12em] text-[var(--amber)]")}>
            Apply before the first whistle.
          </p>
        </div>
      </RevealSection>

      {/* 11. HISTORY IS STARTING */}
      <RevealSection>
        <div className="mx-auto w-full min-w-0 max-w-2xl px-0 text-center">
          <p className="vx-body">Every movement has a beginning.</p>
          <p className="vx-body mt-6">This is ours.</p>
          <p className={cn(TWC_TITLE_DISPLAY, "mt-10")}>
            500 people will be there when it starts.
          </p>
          <p className={cn(TWC_TITLE_DISPLAY, "mt-6 text-[var(--amber)]")}>Will you?</p>
        </div>
      </RevealSection>

      {/* 12. FINAL CTA — JOIN THE EXPERIMENT */}
      <RevealSection
        id="apply"
        dark
        className="scroll-mt-[52px] !py-28 md:!py-36"
      >
        <div className="mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center px-2 text-center sm:px-0">
          <h2 className={cn(TWC_TITLE_DISPLAY, "w-full")}>Will you help shape trust?</h2>
          <p
            className={cn(
              TWC_TITLE_DISPLAY,
              "mt-[0.12em] w-full text-[var(--text-tertiary)]",
            )}
          >
            Or watch history happen?
          </p>
          <div className="mt-12 flex w-full flex-col items-center md:mt-16">
            <TwcCta
              href={APPLY_FORM_URL}
              external
              size="large"
              className="w-full max-w-sm !text-[12px] sm:w-auto sm:!text-[13px] md:!px-14 md:!py-6 md:!text-[15px]"
            >
              JOIN THE EXPERIMENT
            </TwcCta>
            <p className="vx-mono-sm mt-5 max-w-xs px-2 leading-relaxed text-[var(--text-tertiary)] sm:max-w-none">
              2–4 minute application · 500 spots only
            </p>
          </div>
        </div>
      </RevealSection>

      {/* 13. FAQ */}
      <RevealSection>
        <div className="mx-auto w-full min-w-0 max-w-2xl">
          <h2 className={cn(TWC_TITLE_SECTION, "mb-10 md:mb-14")}>Faq</h2>
          <FaqAccordion />
        </div>
      </RevealSection>

      {/* 14. FOOTER */}
      <RevealSection dark className="!pb-16 !pt-16">
        <footer className="mx-auto w-full min-w-0 max-w-3xl px-2 text-center sm:px-0">
          <p
            className="font-syne font-extrabold text-balance break-words"
            style={{
              fontSize: "clamp(22px, 2.8vw, 34px)",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            VERAXIUS
          </p>
          <p className="vx-body-sm mt-4">
            A Public Benefit Corporation. Integrity Infrastructure for the AI Era.
          </p>
          <nav className="vx-mono-sm mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 uppercase text-[var(--text-tertiary)]">
            <a href="/privacy" className="transition-colors hover:text-[var(--amber)]">
              Privacy Policy
            </a>
            <span aria-hidden>·</span>
            <a href="/terms" className="transition-colors hover:text-[var(--amber)]">
              Terms
            </a>
            <span aria-hidden>·</span>
            <a
              href="https://veraxius.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--amber)]"
            >
              veraxius.com
            </a>
          </nav>
          <p className="vx-mono-sm mt-10 break-words px-2 leading-relaxed text-[var(--text-tertiary)] sm:px-0">
            © 2026 Veraxius, Inc. All rights reserved. AIM™ is a trademark of Veraxius IP
            Holdings LLC.
          </p>
        </footer>
      </RevealSection>
    </main>
  );
}
