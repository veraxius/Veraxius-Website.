import {
  SiteHeader,
  HeroSection,
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
  EarlyAccessSection,
  SiteFooter,
  ScrollProgress,
} from "@/components/veraxius";

export default function HomePage() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <ScrollProgress />
      <SiteHeader />
      <HeroSection />
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
      <EarlyAccessSection />
      <SiteFooter />
    </main>
  );
}
