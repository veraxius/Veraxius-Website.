import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/veraxius";

export const metadata: Metadata = {
  title: "Contact | Veraxius",
  description: "Get in touch with Veraxius.",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 10v6.5M7.5 7.6v.01M11 16.5v-4c0-1.4 1-2.3 2.2-2.3 1.2 0 2 .8 2 2.3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="vx-home-surface min-h-screen" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      <section className="vx-section" style={{ paddingTop: "180px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[520px] text-center">
            <p
              className="font-syne font-extrabold mb-5"
              style={{
                fontSize: "clamp(28px, 3.6vw, 40px)",
                lineHeight: "1.2",
                color: "var(--amber)",
                letterSpacing: "-0.02em",
                textShadow: "0 0 28px rgba(255,184,77,0.22)",
              }}
            >
              Contact Us
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href="mailto:signal@veraxius.com"
                className="font-dm-mono text-[15px] transition-colors hover:underline"
                style={{ color: "var(--text-secondary)" }}
              >
                signal@veraxius.com
              </a>
              <a
                href="tel:5612008845"
                className="font-dm-mono text-[15px] transition-colors hover:underline"
                style={{ color: "var(--text-secondary)" }}
              >
                (561) 200-8845
              </a>
              <p className="font-dm-mono text-[15px]" style={{ color: "var(--text-secondary)" }}>
                Boca Raton, FL. USA
              </p>
            </div>

            <div className="mt-8 h-px w-10 mx-auto" style={{ backgroundColor: "var(--amber)" }} />

            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/veraxius_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veraxius on Instagram"
                className="flex items-center gap-2 font-dm-mono text-[14px] transition-colors hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/veraxius/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veraxius on LinkedIn"
                className="flex items-center gap-2 font-dm-mono text-[14px] transition-colors hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
