// Measured with backend/scripts/benchmark-mvp5.mjs (MVP repo) on 2026-09-29.
// Update these numbers from a new run's report; do not edit them by hand otherwise.
export const PERFORMANCE = {
  rateLimit: "120 requests per minute per client IP.",
  intro:
    "Latency of the full governed flow (decision → trust → authority → action, four API calls), measured end to end by a client, with synthetic data. The numbers below exclude internet round-trips between your servers and ours.",
  headline: [
    { label: "Governed flow · p50", value: "47 ms", note: "All four steps, one client, median." },
    { label: "Governed flow · p95", value: "121 ms", note: "95% of flows finished within this." },
    { label: "Reliability", value: "0 errors", note: "1,650 governed flows at 1–100 concurrent clients." },
  ],
  table: {
    columns: ["Step", "p50", "p95"],
    rows: [
      ["Create decision", "5.5 ms", "6.7 ms"],
      ["Evaluate trust", "16.4 ms", "20.5 ms"],
      ["Evaluate authority", "11.1 ms", "13.5 ms"],
      ["Execute action", "13.6 ms", "15.6 ms"],
      ["Record outcome", "16.8 ms", "18.3 ms"],
    ],
  },
  method: [
    "Run on a single 2-core laptop (Intel i7-7500U, 12 GB RAM) hosting the API, the database and the load generator at once; production infrastructure is dedicated and larger.",
    "On that machine throughput levels off at about 30 governed flows per second (about 150 API calls per second); beyond that, requests queue rather than fail.",
    "Every flow wrote its full record to the tamper-evident governance log; no step was skipped or cached to produce these numbers.",
    "The benchmark script is reproducible and ships with the codebase; results are available on request.",
  ],
};
