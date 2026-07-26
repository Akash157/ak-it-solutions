import PageLayout from "@/components/layout/PageLayout";

import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Stats from "@/components/home/Stats";
import TechStack from "@/components/home/TechStack";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <PageLayout>
      <Hero />

      <Clients />

      <Services />

      <WhyChoose />

      <Stats />

      <TechStack />

      <Portfolio />

      <Process />

      <FAQ />

      <CTA />
    </PageLayout>
  );
}