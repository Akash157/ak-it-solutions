"use client";

import Link from "next/link";
import {
  Globe,
  Network,
 ShieldCheck,
  Camera,
  PhoneCall,
  Cloud,
  Search,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies.",
    icon: Globe,
    href: "/services/website-development",
  },
  {
    title: "Networking Solutions",
    description:
      "Enterprise networking, structured cabling, MikroTik, Cisco and Ubiquiti deployments.",
    icon: Network,
    href: "/services/networking",
  },
  {
    title: "Cyber Security",
    description:
      "Secure your infrastructure with firewalls, VPNs, monitoring and endpoint protection.",
    icon: ShieldCheck,
    href: "/services/cyber-security",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud migration, Microsoft 365, Google Workspace and server infrastructure.",
    icon: Cloud,
    href: "/services/cloud",
  },
  {
    title: "CCTV Systems",
    description:
      "Professional surveillance solutions for offices, industries and commercial facilities.",
    icon: Camera,
    href: "/services/cctv",
  },
  {
    title: "VoIP / IP PBX",
    description:
      "Business phone systems with crystal-clear communication and advanced call management.",
    icon: PhoneCall,
    href: "/services/voip",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Increase your online visibility with SEO, Google Ads and social media marketing.",
    icon: Search,
    href: "/services/digital-marketing",
  },
  {
    title: "IT Consultancy",
    description:
      "Strategic technology consulting to help businesses plan, optimize and scale.",
    icon: Briefcase,
    href: "/services/consultancy",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Complete IT Services Under One Roof
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              From websites to networking, cloud infrastructure and cyber
              security, we provide end-to-end technology solutions for
              businesses of every size.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0B7DDA] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B7DDA]/10 transition-all duration-300 group-hover:bg-[#0B7DDA]">
                    <Icon
                      size={32}
                      className="text-[#0B7DDA] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-grow leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B7DDA] transition-all duration-300 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}

          </div>

        </div>
      </FadeIn>
    </section>
  );
}