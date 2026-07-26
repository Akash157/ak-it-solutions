"use client";

import Image from "next/image";

const logos = [
  "riz-energy.png",
  "adam-tech.png",
  "nextech.png",
  "toit.png",
  "kyaas.png",
  "cloud-services.png",
  "dgs.png",
  "bluetech.png",
  "guidanceway.png",
  "vortex.png",
  "cybex.png",
  "genova.png",
  "nexa.png",
];

export default function Clients() {
  const items = [...logos, ...logos];

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
            Trusted By
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Organizations We've Worked With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            From startups to established businesses, we deliver reliable
            technology solutions that help organizations grow securely.
          </p>

        </div>

        <div className="relative mt-14 overflow-hidden">

          <div className="client-slider flex w-max items-center gap-16">

            {items.map((logo, index) => (
              <div
                key={index}
                className="flex h-24 w-52 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={`/images/clients/${logo}`}
                  alt={logo}
                  width={180}
                  height={80}
                  className="h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}