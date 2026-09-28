import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader, SiteFooter } from "@/components/veraxius";

export const metadata: Metadata = {
  title: "About Us | Veraxius",
  description: "The people building Veraxius and AIM, the trust + authority layer for AI.",
};

type Founder = {
  name: string;
  role: string;
  photo: string;
  alt: string;
  width: number;
  height: number;
  quote: string;
  signature: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "Antonio “Ant” Lovera",
    role: "Founder & Trust + Authority Architect, Veraxius",
    photo: "/Antonio%20Ant%20Lovera%20Veraxius%20Website%20Picture.PNG",
    alt: "Antonio “Ant” Lovera, Founder of Veraxius",
    width: 1086,
    height: 1448,
    quote:
      "I learned that trust is not something we own. It is something we earn, lose, question, and earn again. AIM was born from that lesson. Not to teach machines how to be human, but to help humanity remember that power without earned trust should never become authority.",
    signature: "— Antonio “Ant” Lovera",
  },
  {
    name: "Adriel Rodriguez",
    role: "CTO & Co-Founder, Veraxius",
    photo: "/IMG_4327.jpg",
    alt: "Adriel Rodriguez, CTO and Co-Founder of Veraxius",
    width: 1104,
    height: 974,
    quote:
      "I build systems the way trust is built — slowly, transparently, and with proof. A machine deserves no authority it hasn't earned, and at Veraxius, I make sure AIM is not just intelligent, but accountable.",
    signature: "— Adriel Rodriguez",
  },
];

function FounderCard({ founder, reverse }: { founder: Founder; reverse: boolean }) {
  return (
    <article
      className={`flex flex-col items-center gap-8 md:gap-14 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div
        className="relative w-full max-w-[300px] shrink-0 overflow-hidden rounded-full border md:w-[300px]"
        style={{ aspectRatio: "1 / 1", borderColor: "rgba(255,184,77,0.25)", boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
      >
        <Image
          src={founder.photo}
          alt={founder.alt}
          fill
          sizes="(max-width: 768px) 90vw, 340px"
          className="object-cover object-top"
        />
      </div>

      <figure className="max-w-[560px]">
        <span
          className="font-syne font-extrabold block leading-none"
          style={{ fontSize: "64px", color: "var(--amber)", opacity: 0.5 }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote
          className="font-dm-sans -mt-4"
          style={{ fontSize: "clamp(17px, 1.6vw, 20px)", lineHeight: 1.7, color: "rgba(255,255,255,0.86)" }}
        >
          {founder.quote}
        </blockquote>
        <figcaption className="mt-6">
          <div className="h-px w-10" style={{ backgroundColor: "var(--amber)" }} />
          <p className="font-syne font-bold mt-4" style={{ fontSize: "18px", color: "#ffffff" }}>
            {founder.signature}
          </p>
          <p
            className="font-dm-mono mt-1 uppercase"
            style={{ fontSize: "12px", letterSpacing: "0.12em", color: "var(--amber)" }}
          >
            {founder.role}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default function AboutUsPage() {
  return (
    <main className="vx-home-surface min-h-screen" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      <section className="vx-section" style={{ paddingTop: "160px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[640px] text-center">
            <span
              className="font-dm-mono text-[11px] uppercase text-[var(--amber)]"
              style={{ letterSpacing: "0.18em" }}
            >
              Veraxius
            </span>
            <h1
              className="font-syne font-extrabold mt-4"
              style={{
                fontSize: "clamp(32px, 4.2vw, 52px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--amber)",
                textShadow: "0 0 28px rgba(255,184,77,0.22)",
              }}
            >
              About Us
            </h1>
            <div className="mt-6 h-px w-10 mx-auto" style={{ backgroundColor: "var(--amber)" }} />
          </div>

          <div
            className="mx-auto mt-16 flex max-w-[1000px] flex-col md:mt-20"
            style={{ gap: "clamp(92px, 8vw, 104px)" }}
          >
            {FOUNDERS.map((founder, i) => (
              <FounderCard key={founder.name} founder={founder} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
