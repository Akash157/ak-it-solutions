"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/data/services";

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
              From websites to networking, cloud infrastructure, cybersecurity
              and digital transformation, we provide complete IT solutions for
              businesses of every size.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.slug}
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
                    href={`/services/${service.slug}`}
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