import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { services } from "@/data/services";

import PageLayout from "@/components/layout/PageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import TechnologyLogos from "@/components/services/TechnologyLogos";
import WhyChooseService from "@/components/services/WhyChooseService";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | AK IT Solutions`,
    description: service.subtitle,
  };
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <PageLayout>
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
      />

      <FeatureGrid
        title="Our Services"
        items={service.features}
      />

      <TechnologyLogos
        technologies={service.technologies}
      />

      <WhyChooseService />

      <Process />

      <FAQ />

      <ServiceCTA />
    </PageLayout>
  );
}