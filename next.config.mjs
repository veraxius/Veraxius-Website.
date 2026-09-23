/** @type {import('next').NextConfig} */

function buildContentSecurityPolicy() {
  return [
    "default-src 'self'",
    // 'unsafe-inline' stays for now: the site uses next/script inline gtag
    // config (app/layout.tsx) and, throughout components/veraxius, plain
    // React `style={{...}}` inline styles pervasively — both need
    // 'unsafe-inline' without nonces. Flagged as tech debt in the security
    // report rather than forced now (would need a broad refactor).
    // 'unsafe-eval' only in dev: Turbopack's HMR/fast-refresh client uses
    // eval() internally; not needed (and not added) in production.
    process.env.NODE_ENV === "development"
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com"
      : "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data:",
    "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");
}

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/vasp", destination: "/aimsignalprogram", permanent: true },
      { source: "/aimprogram", destination: "/aimsignalprogram", permanent: true },
      { source: "/aim-signal-store", destination: "/aimsignalstore", permanent: true },
    ];
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 384],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy-Report-Only",
            value: buildContentSecurityPolicy(),
          },
          // No iframes anywhere in this site or in the app (confirmed via
          // Fase 0), so DENY is safe with no known breakage.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            // includeSubDomains/preload NOT added — not confirmed that every
            // veraxius.com subdomain is HTTPS-only, and preload is very hard
            // to revert once submitted to browsers' preload lists.
            value: "max-age=63072000",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
