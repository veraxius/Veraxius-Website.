// Best-effort per-IP limiter shared by the form routes (in memory; resets on redeploy).

// Prefer headers set by the hosting proxy over a client-supplied x-forwarded-for entry.
export function clientIp(request: Request) {
  const h = request.headers;
  return (
    h.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip")?.trim() ||
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

// A form submission is a few KB at most; refuse anything much bigger before parsing it.
export function tooLarge(request: Request, maxBytes = 20_000) {
  const len = Number(request.headers.get("content-length") ?? 0);
  return Number.isFinite(len) && len > maxBytes;
}

export function createRateLimiter(windowMs: number, max: number) {
  const hits = new Map<string, number[]>();
  return (ip: string) => {
    const now = Date.now();
    // Keep the map bounded: drop expired entries once it grows large.
    if (hits.size > 5000) {
      for (const [key, times] of hits) {
        if (times.every((t) => now - t >= windowMs)) hits.delete(key);
      }
    }
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
    recent.push(now);
    hits.set(ip, recent);
    return recent.length > max;
  };
}

// Header values must stay on one line.
export const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");
