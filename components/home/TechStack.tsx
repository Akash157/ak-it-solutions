import Image from "next/image";

const tech = [
  { name: "Next.js", file: "nextjs.svg" },
  { name: "React", file: "react.svg" },
  { name: "TypeScript", file: "typescript.svg" },
  { name: "Tailwind CSS", file: "tailwind.svg" },
  { name: "WordPress", file: "wordpress.svg" },
  { name: "MikroTik", file: "mikrotik.svg" },
  { name: "Cisco", file: "cisco.svg" },
  { name: "Cloudflare", file: "cloudflare.svg" },
  { name: "GitHub", file: "github.svg" },
  { name: "Vercel", file: "vercel.svg" },
  { name: "Hikvision", file: "hikvision.svg" },
  { name: "Ubiquiti", file: "ubiquiti.svg" },
];

export default function TechStack() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
            Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Technologies We Work With
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We build solutions using industry-leading platforms, frameworks,
            networking equipment and cloud technologies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {tech.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-20 items-center justify-center">
                <Image
                  src={`/images/tech/${item.file}`}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <p className="mt-5 text-center font-semibold text-slate-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}