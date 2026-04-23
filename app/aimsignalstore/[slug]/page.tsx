import Link from "next/link";
import { SiteHeader } from "@/components/veraxius";

type Props = { params: Promise<{ slug: string }> };

export default async function AimSignalStoreSignalPage({ params }: Props) {
  const { slug } = await params;
  const label = slug.replace(/-/g, " ").toUpperCase();

  return (
    <>
      <SiteHeader />
      <main
        className="min-h-screen px-5 pb-24 pt-32 md:px-12 md:pt-40"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
      <div className="mx-auto max-w-[720px] text-center">
        <p className="font-dm-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--aim-accent)" }}>
          AIM SIGNAL STORE — ACTIVATION
        </p>
        <h1 className="mt-6 font-syne text-3xl font-extrabold uppercase tracking-tight md:text-4xl">{label}</h1>
        <p className="mt-6 font-dm-sans text-base leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
          This route reserves the signal layer. Full activation flow connects here when the system is live.
        </p>
        <Link
          href="/aimsignalstore"
          className="mt-12 inline-block rounded-[4px] px-8 py-4 font-dm-mono text-[11px] font-medium uppercase tracking-[0.12em] transition-[filter] duration-200 hover:brightness-[0.92]"
          style={{ backgroundColor: "var(--aim-accent)", color: "var(--bg-primary)" }}
        >
          ← Back to store
        </Link>
      </div>
    </main>
    </>
  );
}
