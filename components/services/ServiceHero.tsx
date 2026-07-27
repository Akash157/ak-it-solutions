type Props = {
  title: string;
  subtitle: string;
};

export default function ServiceHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#39D353]">
          Our Services
        </p>

        <h1 className="text-5xl font-black md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          {subtitle}
        </p>

      </div>
    </section>
  );
}