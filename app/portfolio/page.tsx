import Image from "next/image";
import Link from "next/link";

import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { portfolio } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Portfolio"
        subtitle="A selection of websites and IT projects delivered by AK IT Solutions."
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-2">

            {portfolio.map((project) => (

              <div
                key={project.title}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-[320px]">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition duration-500 hover:scale-105"
                  />

                </div>

                <div className="p-8">

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {project.category}
                  </span>

                  <h2 className="mt-4 text-3xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-slate-500">
                    {project.client}
                  </p>

                  <p className="mt-5 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <Link
                    href={project.url}
                    target="_blank"
                    className="mt-8 inline-block rounded-xl bg-[#0B7DDA] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Visit Website →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </PageLayout>
  );
}