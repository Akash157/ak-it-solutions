"use client";

import FadeIn from "@/components/animations/FadeIn";
import {
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Users,
  Headphones,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "We build secure, scalable, and future-ready IT solutions using industry best practices.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Every project follows a structured process to ensure timely delivery without compromising quality.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our professionals have experience across web development, networking, cloud, CCTV, and cybersecurity.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "From consultation to deployment and maintenance, we're here to support your business.",
  },
];

const checklist = [
  "Free IT Consultation",
  "Transparent Pricing",
  "Enterprise-Grade Solutions",
  "Latest Technologies",
  "24/7 Technical Support",
  "Long-Term Maintenance",
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <FadeIn>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Your Trusted Technology Partner
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              AK IT Solutions delivers innovative IT services that help
              businesses improve productivity, strengthen security and
              accelerate digital transformation.
            </p>

            <div className="mt-10 space-y-4">

              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#39D353]"
                  />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#0B7DDA] to-[#39D353] p-8 text-white shadow-xl">

              <div className="flex items-center gap-4">

                <Trophy size={42} />

                <div>
                  <h3 className="text-2xl font-bold">
                    Customer Satisfaction
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Building long-term relationships through quality,
                    transparency and reliable support.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="grid gap-6">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B7DDA] hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B7DDA]/10 transition-all duration-300 group-hover:bg-[#0B7DDA]">

                      <Icon
                        size={30}
                        className="text-[#0B7DDA] group-hover:text-white"
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {feature.description}
                      </p>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </FadeIn>
    </section>
  );
}