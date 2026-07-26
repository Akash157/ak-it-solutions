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
    color: "text-green-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    color: "text-sky-500",
  },
  {
    icon: Camera,
    title: "CCTV",
    color: "text-orange-500",
  },
  {
    icon: PhoneCall,
    title: "VoIP / IP PBX",
    color: "text-violet-500",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B7DDA] text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0B7DDA]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#39D353]/20 blur-3xl" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#39D353]">
            🚀 Complete IT Solutions for Modern Businesses
          </p>

          <h1 className="text-5xl font-black leading-tight lg:text-7xl">
            Complete IT
            <br />
            Solutions
            <span className="block text-[#39D353]">
              Under One Roof
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            AK IT Solutions helps businesses grow through modern websites,
            secure networks, cloud infrastructure, cyber security, CCTV,
            VoIP, and professional IT consultancy.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#39D353]"
                />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#39D353] px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/portfolio"
              className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-3xl font-black">150+</h3>
              <p className="text-slate-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">50+</h3>
              <p className="text-slate-400">Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">24/7</h3>
              <p className="text-slate-400">Support</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <Icon
                  size={42}
                  className={card.color}
                />

                <h3 className="mt-6 text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Professional enterprise-grade solutions tailored for your business.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}