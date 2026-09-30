import type { Metadata } from "next";
import { routeMeta } from "@/lib/seo";
import {
  SiteHeader,
  HeroSection,
  WhyNowSection,
  ProductSection,
  LiveInterfaceSection,
  AuthorityGateSection,
  TrustLineageSection,
  RoadmapSection,
  PilotSection,
  ResearchSection,
  AboutSection,
  ValidationWindowSection,
  NvidiaEcosystemSection,
  FinalCtaSection,
  SiteFooter,
  ScrollProgress,
} from "@/components/veraxius";

export const metadata: Metadata = routeMeta(
  "/",
  "Veraxius | Decide what AI agents are allowed to do",
  "Before every action, Veraxius decides whether an AI agent can execute, needs limits, or must ask a human, and records why.",
);

export default function HomePage() {
  return (
    <main
      className="vx-home-surface min-h-screen"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <ScrollProgress />
      <SiteHeader />
      <HeroSection />
      <WhyNowSection />
      <ProductSection />
      <LiveInterfaceSection />
      <AuthorityGateSection />
      <TrustLineageSection />
      <RoadmapSection />
      <PilotSection />
      <ResearchSection />
      <AboutSection />
      <ValidationWindowSection />
      <NvidiaEcosystemSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
