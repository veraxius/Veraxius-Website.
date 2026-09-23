import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/veraxius";

export const metadata: Metadata = {
  title: "Terms of Service | Veraxius",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <main className="vx-home-surface min-h-screen" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      <section className="vx-section" style={{ paddingTop: "180px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[720px]">
            <p
              className="font-syne font-extrabold mb-6"
              style={{ fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: "1.2", color: "var(--amber)", letterSpacing: "-0.02em" }}
            >
              Terms of Service
            </p>
            {/* TODO-LEGAL: placeholder structure only — no terms of service
                text has been written or approved yet. Do not publish or
                link this page until legal/compliance signs off. */}
            <p className="font-dm-sans" style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-secondary)" }}>
              TODO-LEGAL: this page is a placeholder pending review and approval.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
