import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Portfolio from "@/components/home/Portfolio";
import CTA from "@/components/home/CTA";

export default function PortfolioPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Portfolio"
        subtitle="Explore websites, networking, cloud, CCTV, cybersecurity and VoIP projects delivered by AK IT Solutions."
      />

      <Portfolio />

      <CTA />
    </PageLayout>
  );
}