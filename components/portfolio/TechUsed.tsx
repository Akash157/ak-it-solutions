type Props = {
  tech: string[];
};

export default function TechUsed({
  tech,
}: Props) {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-black">
          Technologies Used
        </h2>

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold shadow-sm"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}