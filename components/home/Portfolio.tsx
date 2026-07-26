import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Riz Energy",
    category: "Energy Broker Website",
    image: "/images/portfolio/rizenergy.png",
    url: "https://rizenergy.com",
  },
  {
    name: "Adam Technologies",
    category: "Corporate Website",
    image: "/images/portfolio/adamtech.png",
    url: "https://adamtechpk.com",
  },
  {
    name: "NexTech Live",
    category: "Technology Website",
    image: "/images/portfolio/nextech.png",
    url: "http://www.nextechlive.com",
  },
  {
    name: "TOIT Training",
    category: "Training Institute",
    image: "/images/portfolio/toit.png",
    url: "https://www.toittraining.com",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            A selection of websites and digital solutions we've delivered for our clients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-[#0B7DDA]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {project.name}
                </h3>

                <Link
                  href={project.url}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#0B7DDA]"
                >
                  Visit Website
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}