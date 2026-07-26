"use client";

import FadeIn from "@/components/animations/FadeIn";
import {
  Search,
  ClipboardList,
  Code2,
  Headphones,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business goals, challenges and technical requirements before proposing the best solution.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Our team designs the project architecture, prepares timelines and selects the right technologies.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, configure, test and deploy your solution following industry best practices.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Support",
    description:
      "After deployment, we provide maintenance, monitoring and long-term technical support.",
    icon: Headphones,
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900">
              How We Work
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Every successful project follows a proven process that ensures
              quality, transparency and long-term success.
            </p>

          </div>

          <div className="relative mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-[#0B7DDA] hover:shadow-2xl"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-full top-14 hidden h-0.5 w-8 bg-slate-300 lg:block" />
                  )}

                  {/* Step Number */}
                  <div className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition group-hover:text-[#0B7DDA]/10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B7DDA]/10 transition-all duration-300 group-hover:bg-[#0B7DDA]">
                    <Icon
                      size={32}
                      className="text-[#0B7DDA] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
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