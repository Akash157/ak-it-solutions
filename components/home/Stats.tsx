"use client";

import { Briefcase, Users, Clock3, Headphones } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "150+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    number: "50+",
    label: "Happy Clients",
  },
  {
    icon: Clock3,
    number: "8+",
    label: "Years Experience",
  },
  {
    icon: Headphones,
    number: "24/7",
    label: "Technical Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0F172A] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <Icon
                size={42}
                className="mx-auto mb-4 text-[#39D353]"
              />

              <h3 className="text-4xl font-black">
                {item.number}
              </h3>

              <p className="mt-2 text-slate-300">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}