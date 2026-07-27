import Image from "next/image";

type Props = {
  technologies: string[];
};

const logoMap: Record<string, string> = {
  "Next.js": "nextjs",
  React: "react",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwind",
  WordPress: "wordpress",
  "Node.js": "nodejs",

  Cisco: "cisco",
  MikroTik: "mikrotik",
  Ubiquiti: "ubiquiti",
  Fortinet: "fortinet",

  AWS: "aws",
  Azure: "azure",
  "Microsoft 365": "microsoft365",
  "Google Cloud": "googlecloud",

  Hikvision: "hikvision",
  Dahua: "dahua",
  EZVIZ: "ezviz",

  "Google Analytics": "googleanalytics",
  "Google Ads": "googleads",
  "Search Console": "searchconsole",
  "Meta Ads": "meta",

  "3CX": "3cx",
  Asterisk: "asterisk",
  Grandstream: "grandstream",
  Yeastar: "yeastar",
};

export default function TechnologyLogos({
  technologies,
}: Props) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Technologies We Work With
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

          {technologies.map((tech) => {
            const file = logoMap[tech];

            return (
              <div
                key={tech}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                {file ? (
                  <Image
                    src={`/images/tech/${file}.svg`}
                    alt={tech}
                    width={70}
                    height={70}
                    className="h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-center font-semibold">
                    {tech}
                  </span>
                )}

                <p className="mt-4 text-center text-sm font-medium">
                  {tech}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}