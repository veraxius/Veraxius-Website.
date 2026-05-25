"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
const STICKY_BAR_HEIGHT = 52;

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
}: {
  href?: string;
  children: React.ReactNode;
  size?: "default" | "large" | "small";
  outline?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
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
      onClick={onClick ?? (isApplyLink ? scrollToApplySection : undefined)}
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

function scrollToPageTop(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function StickyBar({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className={cn(
        "twc-sticky-bar fixed left-0 right-0 top-0 z-50 flex min-w-0 items-center justify-between gap-3 px-4 sm:px-5 md:px-8",
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
      <a
        href="#"
        onClick={scrollToPageTop}
        aria-label="Trust World Cup — volver arriba"
        className="group flex min-w-0 max-w-[calc(100%-7rem)] shrink items-center gap-2 rounded-sm font-dm-mono text-[10px] uppercase leading-none tracking-[0.12em] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--amber)] sm:max-w-none sm:gap-2.5 sm:text-[12px]"
      >
        <Image
          src="/logo-simple.png"
          alt=""
          width={40}
          height={40}
          className="h-8 w-8 shrink-0 object-contain transition-[filter] duration-200 group-hover:brightness-125 sm:h-[40px] sm:w-[40px]"
          aria-hidden
        />
        <span className="truncate transition-colors duration-200 group-hover:text-[var(--amber)]">
          TRUST WORLD CUP™
        </span>
      </a>
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
    "TRUST WORLD CUP™",
    "THE WORLD WILL ARGUE.",
    "WE WILL OBSERVE.",
    "500 PEOPLE.",
    "ONE WORLD CUP.",
    "MILLIONS OF SIGNALS.",
  ];

  return (
    <section
      className="relative flex min-h-[100svh] w-full min-w-0 flex-col"
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
          "twc-reveal relative z-10 flex min-w-0 flex-1 flex-col justify-center pb-16 pt-[4.5rem] lg:pb-0 lg:pt-[3.25rem]",
          "w-full",
          visible && "visible",
        )}
      >
        <div className="vx-container w-full max-w-full text-center lg:text-left">
          <h1 className="twc-headline-hero uppercase">
            {lines.map((line, i) => (
              <span
                key={line}
                className="block"
                style={{
                  color: i === 0 ? "var(--amber)" : "var(--text-primary)",
                  marginTop: i > 0 ? "0.12em" : 0,
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
            <p
              className="mt-4 font-dm-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color: "var(--text-tertiary)" }}
            >
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
        "twc-reveal py-6 text-center font-dm-sans text-[clamp(17px,4vw,24px)] leading-snug md:py-8",
        visible && "visible",
      )}
      style={{
        color: "var(--text-primary)",
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
    <div ref={ref} className="w-full text-center">
      <p className="twc-headline-xl tabular-nums text-amber">
        {count}
        <span style={{ color: "var(--text-tertiary)" }}> / 500</span>
      </p>
      <p
        className="mt-4 font-dm-mono text-[11px] uppercase tracking-[0.14em]"
        style={{ color: "var(--text-secondary)" }}
      >
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
    <div className="mx-auto max-w-2xl">
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
                className="min-w-0 flex-1 break-words pr-2 font-dm-sans text-[15px] leading-snug sm:text-[17px]"
                style={{ color: "var(--text-primary)" }}
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
                  <p
                    className="pb-5 font-dm-sans text-[15px] leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
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
    body: "Football is the test environment. Trust is the subject.",
  },
];

const WHY_JOINING = [
  "Because they love football.",
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
      className="h-full rounded-sm border p-6 transition-shadow duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
      style={{
        backgroundColor: "var(--bg-panel)",
        borderColor: "var(--divider)",
      }}
    >
      <p
        className="break-words font-dm-mono text-[11px] font-medium uppercase tracking-[0.08em]"
        style={{ color: "var(--amber)" }}
      >
        {name}
      </p>
      <p
        className="mt-3 font-dm-sans text-[14px] leading-snug"
        style={{ color: "var(--text-secondary)" }}
      >
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
      className="twc-page min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <StickyBar visible />

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. WORLD CUP WILL TEST TRUST */}
      <RevealSection dark className="!py-24 md:!py-32">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h2 className="twc-headline-cinematic uppercase text-primary">
            THE NEXT WORLD CUP
            <br />
            WILL TEST
            <br />
            MORE THAN TEAMS.
            <br />
            <span className="text-amber">IT WILL TEST TRUST.</span>
          </h2>
        </div>
      </RevealSection>

      {/* 3. THIS IS NOT A FAN CLUB */}
      <RevealSection>
        <div className="mx-auto w-full max-w-[960px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {NOT_FAN_CLUB_CARDS.map((card) => (
              <div
                key={card.title}
                className="vx-panel p-8 text-center transition-shadow duration-250 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <h3
                  className="font-syne text-lg font-bold uppercase md:text-xl"
                  style={{ letterSpacing: "0.04em", color: "var(--text-primary)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-4 font-dm-sans text-[15px] leading-relaxed md:text-[16px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* 4. WHY PEOPLE ARE JOINING */}
      <RevealSection dark>
        <div className="mx-auto w-full max-w-xl text-center">
          {WHY_JOINING.map((line, i) => (
            <StaggeredStatement key={line} line={line} index={i} />
          ))}
        </div>
      </RevealSection>

      {/* 5. WHO BELONGS HERE */}
      <RevealSection>
        <div className="mx-auto w-full max-w-2xl px-0 text-center">
          <p
            className="font-dm-sans text-[clamp(17px,4vw,22px)] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            If you&apos;ve ever questioned what you&apos;re being told.
          </p>
          <p
            className="mt-6 font-dm-sans text-[clamp(17px,4vw,22px)] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            If you believe the next World Cup will be about more than scores.
          </p>
          <p
            className="mt-6 font-dm-sans text-[clamp(17px,4vw,22px)] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            If you want to be in the room when something new begins.
          </p>
          <p className="twc-headline-accent mt-14">You belong here.</p>
        </div>
      </RevealSection>

      {/* 6. CHOOSE YOUR MISSION */}
      <RevealSection dark>
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="twc-headline-lg mb-12 text-center uppercase md:mb-16">
            Choose Your Mission
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MISSIONS_TOP.map((m) => (
              <MissionCard key={m.name} name={m.name} desc={m.desc} />
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {MISSIONS_BOTTOM.map((m) => (
              <div
                key={m.name}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
              >
                <MissionCard name={m.name} desc={m.desc} />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* 7. NOT EVERYONE WILL GET IN */}
      <RevealSection dark className="!py-28 md:!py-40">
        <div className="mx-auto w-full max-w-5xl text-center">
          <div
            className="mx-auto mb-10 h-px w-24"
            style={{ backgroundColor: "var(--amber)" }}
            aria-hidden
          />
          <h2 className="twc-headline-cinematic uppercase">
            NOT EVERYONE
            <br />
            WILL GET IN.
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
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="twc-headline-lg mb-12 text-center uppercase md:mb-16">
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
                  <p className="break-words font-syne text-base font-bold">{b.label}</p>
                  <p
                    className="mt-2 font-dm-sans text-[14px] leading-snug"
                    style={{ color: "var(--text-secondary)" }}
                  >
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
        <div className="mx-auto max-w-3xl">
          <AnimatedCounter target={247} />
          <div className="mt-16 border-t pt-12" style={{ borderColor: "var(--divider)" }}>
            <p
              className="mb-8 text-center font-dm-mono text-[10px] uppercase tracking-[0.14em]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Countries joining
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {COUNTRIES.map((c) => (
                <span
                  key={c}
                  className="font-dm-mono text-[12px] tracking-[0.06em]"
                  style={{ color: "var(--text-secondary)" }}
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
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="twc-headline-md uppercase">The tournament begins.</p>
          <p className="twc-headline-md mt-8 uppercase">The window closes.</p>
          <p className="twc-headline-md mt-8 uppercase text-amber">
            Apply before the first whistle.
          </p>
        </div>
      </RevealSection>

      {/* 11. HISTORY IS STARTING */}
      <RevealSection>
        <div className="mx-auto w-full max-w-2xl px-0 text-center">
          <p
            className="font-dm-sans text-[clamp(17px,4vw,22px)] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Every movement has a beginning.
          </p>
          <p
            className="mt-6 font-dm-sans text-[clamp(17px,4vw,22px)] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            This is ours.
          </p>
          <p className="twc-headline-lg mt-10 font-bold normal-case">
            500 people will be there when it starts.
          </p>
          <p className="twc-headline-accent mt-6 normal-case">Will you?</p>
        </div>
      </RevealSection>

      {/* 12. FINAL CTA — JOIN THE EXPERIMENT */}
      <RevealSection
        id="apply"
        dark
        className="scroll-mt-[52px] !py-28 md:!py-36"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-0 text-center">
          <h2 className="twc-headline-lg w-full uppercase">
            Will you help shape trust?
          </h2>
          <p className="twc-headline-lg mt-6 w-full uppercase text-tertiary">
            Or watch history happen?
          </p>
          <div className="mt-12 flex w-full flex-col items-center md:mt-16">
            <TwcCta
              size="large"
              className="w-full max-w-sm !text-[13px] sm:w-auto md:!px-14 md:!py-6 md:!text-[15px]"
            >
              JOIN THE EXPERIMENT
            </TwcCta>
            <p
              className="mt-5 max-w-xs px-2 font-dm-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] sm:max-w-none sm:text-[11px] sm:tracking-[0.1em]"
              style={{ color: "var(--text-tertiary)" }}
            >
              2–4 minute application · 500 spots only
            </p>
          </div>
        </div>
      </RevealSection>

      {/* 13. FAQ */}
      <RevealSection>
        <h2 className="twc-headline-lg mb-10 text-center uppercase md:mb-14">FAQ</h2>
        <FaqAccordion />
      </RevealSection>

      {/* 14. FOOTER */}
      <RevealSection dark className="!pb-16 !pt-16">
        <footer className="mx-auto w-full max-w-3xl text-center">
          <p
            className="font-syne text-xl font-extrabold uppercase tracking-[0.08em]"
            style={{ color: "var(--text-primary)" }}
          >
            VERAXIUS
          </p>
          <p
            className="mt-4 font-dm-sans text-[14px] leading-relaxed md:text-[15px]"
            style={{ color: "var(--text-secondary)" }}
          >
            A Public Benefit Corporation. Integrity Infrastructure for the AI Era.
          </p>
          <nav
            className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-dm-mono text-[11px] uppercase tracking-[0.08em]"
            style={{ color: "var(--text-tertiary)" }}
          >
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
          <p
            className="mt-10 font-dm-sans text-[12px] leading-relaxed md:text-[13px]"
            style={{ color: "var(--text-tertiary)" }}
          >
            © 2026 Veraxius, Inc. All rights reserved. AIM™ is a trademark of Veraxius IP
            Holdings LLC.
          </p>
        </footer>
      </RevealSection>
    </main>
  );
}
