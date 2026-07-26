"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B7DDA] via-sky-600 to-[#39D353]" />

      {/* Glow */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <FadeIn>

        <div className="relative mx-auto max-w-6xl px-6 text-center text-white">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
            Let's Work Together
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Ready to Transform
            <br />
            Your Business?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you need a modern website, secure networking,
            cybersecurity, cloud infrastructure, CCTV, or complete IT
            consultancy, our team is ready to help.
          </p>

          {/* Trust Points */}

          <div className="mt-12 flex flex-wrap justify-center gap-8">

            {[
              "Free Consultation",
              "Fast Response",
              "Nationwide Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  className="text-white"
                  size={22}
                />

                <span className="font-medium">
                  {item}
                </span>
              </div>
            ))}

          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#0B7DDA] transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="https://wa.me/923054353729"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </Link>

          </div>

        </div>

      </FadeIn>

    </section>
  );
}