import type { MetadataRoute } from "next";

const BASE_URL = "https://veraxius.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only routes that actually resolve today (confirmed during the security
  // audit). /privacy and /terms now have real content and are linked from
  // the footer, so they're included. /aimsignalstore/[slug] is a dynamic
  // route with no known static slugs to enumerate here; add specific
  // product URLs once that catalog exists.
  const routes = ["", "/contact", "/aimsignalprogram", "/aimsignalstore", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
