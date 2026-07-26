"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Network,
  Cloud,
  PhoneCall,
  Camera,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const services = [
  "Website Development",
  "Networking Solutions",
  "Cyber Security",
  "Cloud Solutions",
  "VoIP / IP PBX",
  "CCTV Surveillance",
];

const cards = [
  {
    icon: Globe,
    title: "Website Development",
    color: "text-[#0B7DDA]",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    color: "text-red-500",
  },
  {
    icon: Network,
    title: "Networking",
    color: "text-green-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    color: "text-sky-500",
  },
  {
    icon: Camera,
    title: "CCTV Systems",
    color: "text-orange-500",
  },
  {
    icon: PhoneCall,
    title: "VoIP Solutions",
    color: "text-violet-500",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B7DDA] text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0B7DDA]/20 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#39D353]/20 blur-3xl"></div>

      <FadeIn>

        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#39D353]">
              🚀 Trusted IT Partner for Businesses
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
              Complete IT
              <br />
              Solutions
              <span className="block text-[#39D353]">
                Under One Roof
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              AK IT Solutions delivers professional website development,
              networking, cybersecurity, cloud infrastructure, CCTV,
              VoIP systems and IT consultancy that help businesses grow.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#39D353]"
                    size={20}
                  />

                  <span>{service}</span>
                </div>
              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#39D353] px-8 py-4 font-semibold text-slate-900 transition duration-300 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                View Portfolio
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">

              <div>
                <h2 className="text-4xl font-black text-[#39D353]">
                  150+
                </h2>

                <p className="text-slate-400">
                  Projects
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-[#39D353]">
                  50+
                </h2>

                <p className="text-slate-400">
                  Happy Clients
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-[#39D353]">
                  24/7
                </h2>

                <p className="text-slate-400">
                  Support
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-[#39D353]/50 hover:bg-white/15"
                >
                  <Icon
                    size={44}
                    className={`${card.color} transition-transform duration-300 group-hover:scale-110`}
                  />

                  <h3 className="mt-6 text-xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Enterprise-grade solutions designed for modern businesses.
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </FadeIn>

    </section>
  );
}