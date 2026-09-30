import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/veraxius";

export const metadata: Metadata = {
  title: "Privacy Policy | Veraxius",
  description: "How Veraxius collects, uses, and protects information on veraxius.com.",
};

// Policy text exactly as provided. Bracketed placeholders (e.g. [DATE]) are
// highlighted on the page until they are filled in.
const POLICY = `
# Privacy Policy

Last updated: [DATE]

This Privacy Policy explains how Veraxius, Inc. ("Veraxius," "we," "us") handles personal information in connection with our website, veraxius.com (the "Site"). It does not cover the Veraxius AIM application at app.veraxius.com, which has its own privacy policy at app.veraxius.com/privacy.

## 1. Information we collect on this Site

- **Pilot requests.** When you submit the form on our Pilots page, we collect your full name, work email, company, role, the area where your AI would act, a description of the decision you want to govern, and your company website. This information is sent to [FORM DESTINATION, e.g., "Zoho CRM, a service provided by Zoho Corporation"].
- **Investor inquiries.** When you submit the form on our Investors page, we collect your full name, email, firm or fund, role, typical check size, and message, and whether you requested our deck. This information is sent to our team by email through Resend, a service provider.
- **AIM Signal Program applications.** "Apply Now" on the AIM Signal Program page takes you to an application form hosted by Zoho Corporation. Information you submit there is collected on our behalf and is also subject to Zoho's privacy practices.
- **Direct contact.** Our Contact page lists an email address and phone number. If you write to us or call, we receive the information you choose to share.
- **Usage data.** If you accept analytics cookies, Google Analytics collects information about how you use the Site, such as pages viewed, time on page, approximate location, and device and browser type.

We do not operate a newsletter sign-up, e-commerce checkout, or account system on this Site.

## 2. How we use information

- To respond to pilot requests, scope pilots, and follow up about Veraxius pilots and related updates. You can ask us to stop contacting you at any time.
- To review AIM Signal Program applications.
- To answer questions you send us.
- To understand how visitors use the Site and improve it (only if you accept analytics cookies).
- To keep the Site secure and comply with the law.

We do not sell personal information, and we do not share it for cross-context behavioral advertising.

## 3. Cookies and analytics

A cookie notice appears on your first visit. Analytics cookies are off until you click "Accept." If you click "Reject" or close the notice, analytics stays off. You can change your choice at any time through the "Cookie settings" link in the footer. We do not use advertising pixels or third-party ad trackers on this Site.

## 4. Legal bases (EEA and UK)

We rely on legitimate interests to respond to pilot requests and inquiries and to keep the Site secure; on consent for analytics cookies, which you can withdraw at any time; and on legal obligations where they apply.

## 5. Who we share information with

- **Service providers** that help us run the Site and handle requests, under contracts that limit how they use data: Google (Google Analytics), Zoho Corporation (forms), Resend (email delivery), [hosting provider].
- **Authorities,** when required by law or to protect rights and safety.
- **A buyer or successor,** if Veraxius is involved in a merger, acquisition, or sale of assets, subject to this policy.

## 6. Retention

We keep pilot requests and inquiries for up to [24] months after our last contact, unless you become a customer or ask us to delete them sooner. Analytics data is kept according to our Google Analytics retention settings.

## 7. Your rights

Depending on where you live, you may have the right to access, correct, delete, or receive a copy of your personal information, and to object to or restrict certain processing.

California residents have the right to know, delete, and correct their personal information, and to opt out of its sale or sharing (we do not sell or share it). We will not discriminate against you for exercising these rights. An authorized agent may submit a request on your behalf.

To make a request, email signal@veraxius.com. We will verify your identity and respond within 30 days, or 45 days where California law allows an extension. You can also opt out of Google Analytics with Google's browser add-on: https://tools.google.com/dlpage/gaoptout

## 8. International transfers

Veraxius is based in the United States. Our service providers may process data in the United States and other countries, and members of our team may access data from outside the United States. Where required, we use appropriate safeguards such as the European Commission's Standard Contractual Clauses.

## 9. Children

This Site is not directed at children under 16, and we do not knowingly collect personal information from them.

## 10. Changes to this policy

We will post updates on this page and change the "Last updated" date.

## 11. Contact

Veraxius, Inc. · Boca Raton, FL, USA · signal@veraxius.com · +1 (561) 200-8845
`;

const textStyle = { fontSize: "15px", lineHeight: "1.75", color: "var(--text-secondary)" } as const;
const linkStyle = { color: "var(--amber)" } as const;

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*)|(\[[^\]]+\])|(https?:\/\/[^\s)]+)|([\w.+-]+@[\w-]+\.[\w.]+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      out.push(<strong key={i++} style={{ color: "var(--text-primary)" }}>{m[1].slice(2, -2)}</strong>);
    } else if (m[2]) {
      out.push(
        <mark
          key={i++}
          title="Placeholder — fill in before publishing"
          className="rounded px-1"
          style={{ backgroundColor: "rgba(245, 166, 35, 0.15)", color: "var(--amber)" }}
        >
          {m[2]}
        </mark>,
      );
    } else if (m[3]) {
      out.push(
        <a key={i++} href={m[3]} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline break-all" style={linkStyle}>
          {m[3]}
        </a>,
      );
    } else if (m[4]) {
      out.push(
        <a key={i++} href={`mailto:${m[4]}`} className="underline hover:no-underline" style={linkStyle}>
          {m[4]}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function PolicyDocument({ source }: { source: string }) {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  let key = 0;
  const flush = () => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={key++} className="mt-3 space-y-2 pl-5" style={{ ...textStyle, listStyleType: "disc" }}>
        {bullets.map((b, i) => (
          <li key={i}>{inline(b)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  for (const raw of source.trim().split("\n")) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith("- ")) {
      bullets.push(line.slice(2));
      continue;
    }
    flush();
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="font-syne font-bold mt-10 mb-3" style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "var(--text-primary)" }}>
          {inline(line.slice(3))}
        </h2>,
      );
    } else if (line.startsWith("# ")) {
      blocks.push(
        <h1
          key={key++}
          className="font-syne font-extrabold mb-2"
          style={{ fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: "1.2", color: "var(--amber)", letterSpacing: "-0.02em" }}
        >
          {inline(line.slice(2))}
        </h1>,
      );
    } else {
      blocks.push(
        <p key={key++} className="font-dm-sans mt-3" style={textStyle}>
          {inline(line)}
        </p>,
      );
    }
  }
  flush();
  return <Fragment>{blocks}</Fragment>;
}

export default function PrivacyPage() {
  return (
    <main className="vx-home-surface min-h-screen" style={{ color: "var(--text-primary)" }}>
      <SiteHeader />

      <section className="vx-section" style={{ paddingTop: "180px", backgroundColor: "var(--bg-primary)" }}>
        <div className="vx-container">
          <article className="mx-auto max-w-[720px]">
            <PolicyDocument source={POLICY} />
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
