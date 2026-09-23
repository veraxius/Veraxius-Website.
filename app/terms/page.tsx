import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/veraxius";

export const metadata: Metadata = {
  title: "Terms of Service | Veraxius",
  description: "Terms governing use of veraxius.com.",
};

const LAST_UPDATED = "September 23, 2026";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-syne font-bold mt-10 mb-3"
      style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "var(--text-primary)" }}
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-dm-sans mt-3" style={{ fontSize: "15px", lineHeight: "1.75", color: "var(--text-secondary)" }}>
      {children}
    </p>
  );
}

export default function TermsPage() {
  return (
    <main className="vx-home-surface min-h-screen" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      <section className="vx-section" style={{ paddingTop: "180px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <div className="mx-auto max-w-[720px]">
            <p
              className="font-syne font-extrabold mb-2"
              style={{ fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: "1.2", color: "var(--amber)", letterSpacing: "-0.02em" }}
            >
              Terms of Service
            </p>
            <p className="font-dm-mono uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>
              Last updated: {LAST_UPDATED}
            </p>

            <P>
              These Terms of Service (&quot;Terms&quot;) govern your use of veraxius.com (the &quot;Site&quot;),
              operated by Veraxius, Inc. (&quot;Veraxius,&quot; &quot;we,&quot; &quot;us&quot;). By browsing or
              using the Site, you agree to these Terms. These Terms cover only this marketing Site — use of the
              Veraxius AIM application at app.veraxius.com is governed by its own separate terms of service, which
              you agree to when you create an account there.
            </P>

            <H2>Use of the Site</H2>
            <P>
              The Site is provided to share information about Veraxius, AIM™ (the Adaptive Integrity Model), and
              related programs (including the AIM Signal Program and AIM Signal Store), and to let visitors get in
              touch or apply to those programs. You agree to use the Site only for lawful purposes and not to
              interfere with its normal operation, attempt to gain unauthorized access to it, or scrape or harvest
              content from it without our written permission.
            </P>

            <H2>Intellectual property</H2>
            <P>
              The Site&apos;s content — including text, graphics, the Veraxius name and logo, and the AIM™ mark —
              is owned by Veraxius, Inc. or its licensors. &quot;Veraxius AIM Model&quot; and the AIM™ mark are
              trademarks of Veraxius IP Holdings, LLC, used under license. You may view and share pages of the
              Site for personal, non-commercial purposes, but you may not reproduce, modify, or redistribute its
              content for any other purpose without our written permission.
            </P>

            <H2>Third-party links and forms</H2>
            <P>
              The Site links to services we don&apos;t control, including the AIM Signal Program application
              (hosted by Zoho Corporation) and the Veraxius AIM application at app.veraxius.com. We aren&apos;t
              responsible for the content, terms, or privacy practices of those third-party services once you
              leave this Site.
            </P>

            <H2>No warranty</H2>
            <P>
              The Site and its content are provided &quot;as is&quot; and &quot;as available,&quot; without
              warranties of any kind, express or implied. We don&apos;t guarantee that the Site will be
              uninterrupted, error-free, or that any statement about AIM™&apos;s capabilities constitutes a
              guarantee of results for any specific use case — pilots and research engagements exist precisely to
              test those claims.
            </P>

            <H2>Limitation of liability</H2>
            <P>
              To the fullest extent permitted by law, Veraxius will not be liable for any indirect, incidental, or
              consequential damages arising from your use of, or inability to use, the Site.
            </P>

            <H2>Changes to these Terms</H2>
            <P>
              We may update these Terms from time to time. Continued use of the Site after an update means you
              accept the revised Terms. Material changes will be reflected by updating the &quot;Last
              updated&quot; date above.
            </P>

            <H2>Governing law</H2>
            <P>
              These Terms are governed by the laws of the State of Florida, USA, without regard to its conflict of
              laws principles.
            </P>

            <H2>Contact us</H2>
            <P>
              Veraxius, Inc. · Boca Raton, FL, USA ·{" "}
              <a href="mailto:signal@veraxius.com" className="underline hover:no-underline" style={{ color: "var(--amber)" }}>
                signal@veraxius.com
              </a>{" "}
              ·{" "}
              <a href="tel:+15612008845" className="underline hover:no-underline" style={{ color: "var(--amber)" }}>
                +1 (561) 200-8845
              </a>
            </P>

            {/* Drafted from the Site's actual current functionality (no
                accounts, no checkout, links to Zoho's form and to the
                separate App) rather than a generic template — but this is
                not legal advice. Recommend a quick pass from counsel before
                treating it as final, in particular the Florida governing-law
                assumption (based on the Boca Raton contact address) and
                whether the App's separate ToS actually exists at
                app.veraxius.com/terms as referenced above. */}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
