import "./globals.css";
import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import { ConsentBanner } from "@/components/veraxius/consent-banner";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/seo";


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

// Canonical URL and og:url are set per route (lib/seo.ts → routeMeta), never
// here: a value in the root layout is inherited by every page and would point
// them all at the home page.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/veraxius-favicon.ico",
    shortcut: "/veraxius-favicon.ico",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
        {/* Google Analytics is opt-in: it is loaded only after the visitor
            clicks "Accept" — see components/veraxius/consent-banner.tsx. */}
      </head>
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
