import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /test is a debug page, not a real marketing route — kept out of
        // discovery entirely (also noindex'd on the page itself).
        disallow: ["/test"],
      },
    ],
    sitemap: "https://veraxius.com/sitemap.xml",
  };
}
