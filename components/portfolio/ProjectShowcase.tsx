import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  category: string;
  description: string;
  image: string;
  url?: string;
};

export default function ProjectShowcase({
  title,
  category,
  description,
  image,
  url,
}: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={700}
            className="w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0B7DDA]">
            {category}
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {description}
          </p>

          <ul className="mt-10 space-y-4 text-slate-700">
            <li>✔ Responsive Design</li>
            <li>✔ SEO Optimized</li>
            <li>✔ High Performance</li>
            <li>✔ Mobile Friendly</li>
            <li>✔ Secure Development</li>
          </ul>

          {url && (
            <Link
              href={url}
              target="_blank"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#0B7DDA] px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Visit Live Website
              <ArrowUpRight size={18} />
            </Link>
          )}

        </div>

      </div>
    </section>
  );
}