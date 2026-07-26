import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Riz Energy",
    category: "Website Development",
    image: "/portfolio/rizenergy.jpg",
    url: "https://rizenergy.com",
  },
  {
    title: "Adam Technologies",
    category: "Website Development",
    image: "/portfolio/adamtech.jpg",
    url: "https://adamtechpk.com",
  },
  {
    title: "NexTech Live",
    category: "Website Development",
    image: "/portfolio/nextech.jpg",
    url: "http://www.nextechlive.com",
  },
  {
    title: "TOIT Training",
    category: "Website Development",
    image: "/portfolio/toit.jpg",
    url: "https://www.toittraining.com",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            FEATURED PROJECTS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Our Portfolio
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            A selection of projects delivered for our valued clients.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">

                <span className="text-2xl font-bold text-slate-500">
                  Screenshot Coming Soon
                </span>

              </div>

              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {project.title}
                </h3>

                <a
                  href={project.url}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}