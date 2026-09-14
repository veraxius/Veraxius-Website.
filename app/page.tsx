import {
  SiteHeader,
  HeroSection,
  Mvp4LaunchSection,
  BreakdownSection,
  NumbersSection,
  SystemPreviewSection,
  LineInSandSection,
  CategorySection,
  IntegrityStackSection,
  ArchitectureDiagramSection,
  HowItWorksSection,
  CaseStudySection,
  ImpactSection,
  WhyThisWinsSection,
  IntegrationSection,
  CostSection,
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
      <Mvp4LaunchSection />
      <BreakdownSection />
      <NumbersSection />
      <SystemPreviewSection />
      <LineInSandSection />
      <CategorySection />
      <IntegrityStackSection />
      <ArchitectureDiagramSection />
      <HowItWorksSection />
      <CaseStudySection />
      <ImpactSection />
      <WhyThisWinsSection />
      <IntegrationSection />
      <CostSection />
      <SiteFooter />
    </main>
  );
}
