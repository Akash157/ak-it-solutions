import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import FAQ from "@/components/home/FAQ";
import Process from "@/components/home/Process";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Professional Website Development services by AK IT Solutions. Business websites, eCommerce, CMS, Next.js, WordPress and custom web applications.",
};

const services = [
  "Corporate Business Websites",
  "Custom Web Applications",
  "E-Commerce Stores",
  "WordPress Development",
  "Next.js Development",
  "Landing Pages",
  "Portfolio Websites",
  "Website Maintenance",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "PHP",
  "Node.js",
  "MySQL",
];

const benefits = [
  "Modern Responsive Design",
  "SEO Optimized Structure",
  "Fast Loading Performance",
  "Secure Development",
  "Mobile Friendly",
  "Google Ready",
  "Easy Content Management",
  "One Year Support",
];

export default function WebsiteDevelopmentPage() {
  return (
    <PageLayout>

      <ServiceHero
        title="Website Development"
        subtitle="We design and develop modern, fast and SEO-friendly websites that help businesses establish a strong online presence and generate more customers."
      />

      <FeatureGrid
        title="What We Offer"
        items={services}
      />

      <FeatureGrid
        title="Technologies We Use"
        items={technologies}
      />

      <FeatureGrid
        title="Why Choose Our Development Services"
        items={benefits}
      />

      <Process />

      <FAQ />

      <ServiceCTA />

    </PageLayout>
  );
}