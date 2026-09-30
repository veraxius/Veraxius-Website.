import type { Metadata } from "next";

// Site-wide defaults, used by the root layout for any route without its own metadata.
// TODO-COPY: title/description below are unchanged on purpose — this exact
// text ("Integrity Infrastructure for an AI-saturated world") doesn't match
// the site's current messaging anymore. Marketing/copy owner should confirm
// the final wording; not something to guess here.
export const SITE_URL = "https://veraxius.com";
export const SITE_TITLE = "Veraxius | Integrity Infrastructure";
export const SITE_DESCRIPTION =
  "Veraxius replaces assumption with measurable integrity. Integrity Infrastructure for an AI-saturated world.";

/**
 * Full per-route metadata: title and description for search, Open Graph and
 * Twitter, plus the route's own canonical URL and og:url. Next.js replaces
 * (does not merge) a parent's `openGraph`/`twitter` when a page sets its own,
 * so every field is set here.
 */
export function routeMeta(path: string, title: string, description: string): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Veraxius", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
