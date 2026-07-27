"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const filters = [
  "All",
  "Web Development",
  "Networking",
  "CCTV",
  "Cloud",
  "Cyber Security",
  "VoIP",
];

const projects = [
  {
    name: "Riz Energy",
    category: "Web Development",
    image: "/images/portfolio/rizenergy.png",
    url: "https://rizenergy.com",
    description: "Corporate energy website with lead generation.",
  },
  {
    name: "Adam Technologies",
    category: "Web Development",
    image: "/images/portfolio/adamtech.png",
    url: "https://adamtechpk.com",
    description: "Modern responsive corporate website.",
  },
  {
    name: "NexTech Live",
    category: "Web Development",
    image: "/images/portfolio/nextech.png",
    url: "https://www.nextechlive.com",
    description: "Technology company website.",
  },
  {
    name: "TOIT Training",
    category: "Web Development",
    image: "/images/portfolio/toit.png",
    url: "https://www.toittraining.com",
    description: "Professional training institute website.",
  },
  {
    name: "Enterprise Network",
    category: "Networking",
    image: "/images/portfolio/networking.png",
    description: "Cisco & MikroTik deployment.",
  },
  {
    name: "Hospital CCTV",
    category: "CCTV",
    image: "/images/portfolio/cctv.png",
    description: "Hikvision surveillance solution.",
  },
  {
    name: "Cloud Migration",
    category: "Cloud",
    image: "/images/portfolio/cloud.png",
    description: "Microsoft 365 migration project.",
  },
  {
    name: "Firewall Security",
    category: "Cyber Security",
    image: "/images/portfolio/security.png",
    description: "Firewall & VPN implementation.",
  },
  {
    name: "IP PBX Deployment",
    category: "VoIP",
    image: "/images/portfolio/voip.png",
    description: "Business communication solution.",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-slate-50 py-24">
      <>
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
              Portfolio
            </p>

            <h2 className="mt-4 text-4xl font-black text-black md:text-5xl">
              Our Recent Projects
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
              Explore some of the solutions we've delivered across web development,
              networking, cloud, cybersecurity, CCTV and VoIP.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-2 font-medium transition ${
                  active === filter
                    ? "bg-[#0B7DDA] text-white"
                    : "bg-white border border-slate-200 hover:border-[#0B7DDA]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.name}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-60">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-[#0B7DDA]">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {project.description}
                  </p>

                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B7DDA]"
                    >
                      Visit Website
                      <ArrowUpRight size={18} />
                    </Link>
                  ) : (
                    <button className="mt-6 font-semibold text-[#0B7DDA]">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </>
    </section>
  );
}