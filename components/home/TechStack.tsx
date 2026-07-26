const technologies = [
  "Next.js",
  "React",
  "WordPress",
  "PHP",
  "HTML5",
  "CSS3",
  "JavaScript",
  "MikroTik",
  "Cisco",
  "Ubiquiti",
  "Fortinet",
  "Cloudflare",
  "GitHub",
  "Vercel",
  "Google Workspace",
  "Hikvision",
  "Dahua",
  "VoIP",
];

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Technologies We Work With
        </h2>

        <p className="mt-4 text-slate-600">
          Trusted technologies that power secure, scalable, and modern IT solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:border-[#0B7DDA] hover:text-[#0B7DDA]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}