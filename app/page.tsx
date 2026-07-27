import PageLayout from "@/components/layout/PageLayout";

import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Stats from "@/components/home/Stats";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Industries from "@/components/home/Industries";
import TechStack from "@/components/home/TechStack";
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

      <Portfolio />

      <Testimonials />

      <Industries />

      <TechStack />

      <Process />

      <FAQ />

      <CTA />
    </PageLayout>
  );
}