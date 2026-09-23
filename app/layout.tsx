import "./globals.css";
import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import { ConsentBanner } from "@/components/veraxius/consent-banner";


const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

// TODO-COPY: title/description below are unchanged on purpose — this exact
// text ("Integrity Infrastructure for an AI-saturated world") doesn't match
// the site's current messaging anymore. Marketing/copy owner should confirm
// the final wording; not something to guess here.
const SITE_TITLE = "Veraxius | Integrity Infrastructure";
const SITE_DESCRIPTION =
  "Veraxius replaces assumption with measurable integrity. Integrity Infrastructure for an AI-saturated world.";

export const metadata: Metadata = {
  metadataBase: new URL("https://veraxius.com"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "https://veraxius.com",
  },
  icons: {
    icon: "/veraxius-favicon.ico",
    shortcut: "/veraxius-favicon.ico",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://veraxius.com",
    siteName: "Veraxius",
    type: "website",
    // TODO: no 1200x630 OG image exists yet in /public — add one and
    // reference it here (images: [{ url: "/og-image.png", width: 1200,
    // height: 630 }]) once the team has it. Without it, shared links fall
    // back to no preview image instead of a broken one.
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veraxius",
  url: "https://veraxius.com",
  logo: "https://veraxius.com/veraxius-logo-horizontal.png",
  sameAs: ["https://www.linkedin.com/company/veraxius/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JG1KHEG2SP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Consent Mode v2 — granted by default so analytics measures
            // from the visitor's first pageview. The banner in
            // components/veraxius/consent-banner.tsx sends a
            // gtag('consent','update', ...denied) if the visitor clicks
            // Reject, which turns analytics off from that point on.
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted'
            });
            gtag('js', new Date());
            gtag('config', 'G-JG1KHEG2SP');
          `}
        </Script>
      </head>
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
