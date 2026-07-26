"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

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
    <section className="overflow-hidden bg-white py-24">

      <FadeIn>

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
              Trusted By
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Businesses That Trust AK IT Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We are proud to work with startups, SMEs and enterprise
              organizations, delivering websites, networking, cybersecurity,
              CCTV, cloud and VoIP solutions.
            </p>

          </div>

          <div className="relative">

            {/* Left Gradient */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

            {/* Right Gradient */}
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

            <div className="client-slider flex w-max items-center gap-16">

              {items.map((logo, index) => (

                <div
                  key={index}
                  className="flex h-24 w-52 items-center justify-center"
                >

                  <Image
                    src={`/images/clients/${logo}`}
                    alt={logo}
                    width={220}
                    height={90}
                    className="max-h-20 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:scale-110 hover:grayscale-0 hover:opacity-100"
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </FadeIn>

    </section>
  );
}