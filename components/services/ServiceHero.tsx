import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
};

export default function ServiceHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0B7DDA22,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#39D35322,transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2">

        {/* Left */}
        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#39D353]">
            AK IT Solutions
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-[#0B7DDA] px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Get Free Quote
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 transition hover:bg-slate-800"
            >
              View Portfolio
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

            <img
              src="/images/services/web-development.png"
              alt={title}
              className="w-full max-w-md"
            />

          </div>

        </div>

      </div>

    </section>
  );
}