import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  website?: string;
};

export default function CaseStudyHero({
  title,
  category,
  description,
  image,
  website,
}: Props) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        <div>

          <span className="rounded-full bg-[#0B7DDA] px-4 py-2 text-sm font-semibold">
            {category}
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight">
            {title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            {description}
          </p>

          {website && (
            <Link
              href={website}
              target="_blank"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#0B7DDA] px-8 py-4 font-semibold hover:bg-blue-700"
            >
              Visit Website
              <ArrowUpRight size={18} />
            </Link>
          )}

        </div>

        <div>

          <Image
            src={image}
            alt={title}
            width={1200}
            height={700}
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}