type Props = {
  title: string;
  subtitle: string;
};

export default function PageHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h1 className="text-5xl font-black">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 leading-8">
          {subtitle}
        </p>

      </div>
    </section>
  );
}