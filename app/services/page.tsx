import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Network,
  Shield,
  Camera,
  Phone,
  Cloud,
  Search,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import PageLayout from "@/components/layout/PageLayout";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Our Services | AK IT Solutions",
  description:
    "Explore the complete range of IT services offered by AK IT Solutions including website development, networking, cyber security, CCTV, cloud solutions, VoIP and IT consultancy.",
};

const services = [
  {
    title: "Website Development",
    icon: Globe,
    href: "/services/website-development",
    description: "Modern business websites, eCommerce stores and custom web applications.",
  },
  {
    title: "Networking",
    icon: Network,
    href: "/services/networking",
    description: "Professional Cisco and MikroTik networking solutions.",
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    href: "/services/cloud-solutions",
    description: "Microsoft 365, cloud migration and cloud infrastructure.",
  },
  {
    title: "Cyber Security",
    icon: Shield,
    href: "/services/cyber-security",
    description: "Firewalls, VPNs, endpoint protection and security audits.",
  },
  {
    title: "CCTV Installation",
    icon: Camera,
    href: "/services/cctv-installation",
    description: "Professional surveillance systems for homes and businesses.",
  },
  {
    title: "VoIP / IP PBX",
    icon: Phone,
    href: "/services/voip-ip-pbx",
    description: "Modern business communication systems.",
  },
  {
    title: "SEO & Digital Marketing",
    icon: Search,
    href: "/services/seo-digital-marketing",
    description: "Improve rankings and grow your online presence.",
  },
  {
    title: "IT Consultancy",
    icon: Briefcase,
    href: "/services/it-consultancy",
    description: "Expert IT planning and business technology consulting.",
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#39D353]">
            Our Services
          </p>

          <h1 className="text-5xl font-black md:text-6xl">
            Complete IT Solutions Under One Roof
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            From website development to networking, cloud, cyber security,
            CCTV and VoIP, we help businesses build reliable and scalable
            technology solutions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="mb-6 h-10 w-10 text-[#0B7DDA]" />

                <h2 className="text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B7DDA]">
                  Learn More
                  <ArrowRight size={18} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <ServiceCTA />
    </PageLayout>
  );
}