const industries = [
  "Healthcare",
  "Education",
  "Energy",
  "Manufacturing",
  "Retail",
  "Real Estate",
  "Finance",
  "Logistics",
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
            Industries
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Industries We Serve
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">

          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-xl font-semibold shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {industry}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}