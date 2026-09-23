import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/veraxius";

export const metadata: Metadata = {
  title: "Privacy Policy | Veraxius",
  description: "How Veraxius collects, uses, and protects information on veraxius.com.",
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

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 space-y-2 pl-5" style={{ listStyleType: "disc", fontSize: "15px", lineHeight: "1.75", color: "var(--text-secondary)" }}>
      {children}
    </ul>
  );
}

export default function PrivacyPage() {
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
              Privacy Policy
            </p>
            <p className="font-dm-mono uppercase" style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>
              Last updated: {LAST_UPDATED}
            </p>

            <P>
              This Privacy Policy explains how Veraxius, Inc. (&quot;Veraxius,&quot; &quot;we,&quot; &quot;us&quot;) handles
              information in connection with this website, veraxius.com (the &quot;Site&quot;). It does not cover the
              Veraxius AIM application at app.veraxius.com (the &quot;App&quot;), which has its own privacy policy
              covering account data, AIM scoring, and other information collected once you sign in — see that
              policy at app.veraxius.com/privacy.
            </P>

            <H2>Information we collect on this Site</H2>
            <P>
              The Site itself does not host any sign-up, contact, or checkout forms that submit data to our
              servers. Specifically:
            </P>
            <Ul>
              <li>
                The Contact page lists an email address and phone number as plain links — reaching out that way
                goes through your own email or phone app, not through this Site.
              </li>
              <li>
                &quot;Apply Now&quot; on the AIM Signal Program page takes you to a third-party application form
                hosted by Zoho Corporation. Information you submit there is collected by Zoho on our behalf and is
                subject to Zoho&apos;s own privacy practices in addition to this policy.
              </li>
              <li>
                We do not currently operate a newsletter sign-up, e-commerce checkout, or account system on this
                Site.
              </li>
            </Ul>

            <H2>Analytics and cookies</H2>
            <P>
              We use Google Analytics to understand how visitors use the Site — for example, which pages are
              viewed, how long visitors stay, and general device/browser information. Google Analytics sets
              cookies to do this. We do not currently run advertising pixels or third-party ad trackers on this
              Site.
            </P>
            <P>
              A cookie notice appears on your first visit. Analytics is on by default. If you click
              &quot;Reject,&quot; analytics is turned off for you going forward; if you click &quot;Accept&quot; or
              dismiss the notice, analytics continues as normal.
            </P>

            <H2>Third parties we use</H2>
            <Ul>
              <li><strong style={{ color: "var(--text-primary)" }}>Google Analytics</strong> (Google LLC) — site usage analytics.</li>
            </Ul>
            <P>
              We do not sell personal information, and we do not share analytics data with these providers beyond
              what&apos;s needed for them to provide their service to us.
            </P>

            <H2>Your choices and rights</H2>
            <P>
              Depending on where you live, you may have rights to access, correct, or request deletion of
              personal information we hold about you, or to object to certain processing. To make a request,
              email us at{" "}
              <a href="mailto:signal@veraxius.com" className="underline hover:no-underline" style={{ color: "var(--amber)" }}>
                signal@veraxius.com
              </a>. You can also control cookies directly through your browser settings, and opt out of Google
              Analytics using Google&apos;s{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
                style={{ color: "var(--amber)" }}
              >
                browser add-on
              </a>.
            </P>

            <H2>Children&apos;s privacy</H2>
            <P>
              This Site is not directed at children under 16, and we do not knowingly collect personal
              information from them.
            </P>

            <H2>Changes to this policy</H2>
            <P>
              We may update this policy as the Site changes. Material changes will be reflected by updating the
              &quot;Last updated&quot; date above.
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

            {/* Drafted from the Site's actual, current data practices (no
                forms of our own, GA only, no ad trackers) rather than a
                generic template — but this is not legal advice. Recommend a
                quick pass from counsel before treating it as final, in
                particular the governing-jurisdiction assumption (Florida,
                USA, based on the Boca Raton contact address) and whether any
                GDPR/CCPA-specific disclosures are required for your actual
                visitor base. */}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
