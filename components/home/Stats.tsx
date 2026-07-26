"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Users,
  Headphones,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 8,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Technical Support",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-[#0B7DDA] py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15"
            >
              <Icon
                size={44}
                className="mx-auto mb-5 text-[#39D353]"
              />

              <h2 className="text-5xl font-black">
                {inView ? (
                  <CountUp
                    end={item.value}
                    duration={2}
                  />
                ) : (
                  0
                )}
                {item.suffix}
              </h2>

              <p className="mt-3 text-slate-200">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}