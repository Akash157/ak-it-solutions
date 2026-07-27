import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";
import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import TechLogos from "@/components/services/TechLogos";
import WhyChooseService from "@/components/services/WhyChooseService";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Website Development | AK IT Solutions",
  description:
    "Professional Website Development services by AK IT Solutions. We build responsive, SEO-friendly websites, eCommerce stores, custom web applications, WordPress websites and modern Next.js solutions.",
  keywords: [
    "Website Development",
    "Web Design",
    "Next.js Development",
    "React Development",
    "WordPress Development",
    "Business Website",
    "E-Commerce Website",
    "Lahore Web Development",
    "Pakistan Web Development",
  ],
};

const services = [
  "Corporate Business Websites",
  "Custom Web Applications",
  "E-Commerce Stores",
  "WordPress Development",
  "Next.js Development",
  "Landing Pages",
  "Portfolio Websites",
  "School & College Websites",
  "Hospital & Clinic Websites",
  "Website Maintenance & Support",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Node.js",
  "PHP",
  "Laravel",
  "MySQL",
  "Cloudflare",
];

const benefits = [
  "Modern Responsive UI/UX",
  "SEO Optimized Development",
  "Lightning Fast Performance",
  "Mobile First Design",
  "Google Search Ready",
  "Secure Coding Standards",
  "Scalable Architecture",
  "Cross Browser Compatibility",
  "Easy Content Management",
  "Free Technical Support",
];

export default function WebsiteDevelopmentPage() {
  return (
    <PageLayout>
      <ServiceHero
        title="Website Development"
        subtitle="We build modern, responsive and high-performing websites that help businesses establish a powerful online presence, generate more leads and grow faster."
      />

      <FeatureGrid
        title="Our Website Development Services"
        items={services}
      />

      <TechLogos />

      <FeatureGrid
        title="Technologies We Use"
        items={technologies}
      />

      <WhyChooseService />

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