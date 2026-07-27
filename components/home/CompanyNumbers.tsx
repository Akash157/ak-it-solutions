"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 50,
    suffix: "+",
    title: "Projects Delivered",
  },
  {
    value: 25,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    value: 8,
    suffix: "+",
    title: "Years Experience",
  },
  {
    value: 99,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

export default function CompanyNumbers() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 text-center md:grid-cols-4">

          {stats.map((item) => (
            <div key={item.title}>

              <h2 className="text-5xl font-black text-[#39D353]">
                <CountUp
                  end={item.value}
                  duration={3}
                />
                {item.suffix}
              </h2>

              <p className="mt-4 text-lg text-slate-300">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}