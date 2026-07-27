import Image from "next/image";

const tech = [
  "nextjs",
  "react",
  "typescript",
  "tailwind",
  "wordpress",
  "nodejs",
];

export default function TechLogos() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Technologies We Work With
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

          {tech.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <Image
                src={`/images/tech/${item}.png`}
                alt={item}
                width={70}
                height={70}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}