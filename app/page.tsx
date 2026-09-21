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
