export default function Clients() {
  const clients = [
    "Riz Energy",
    "Adam Technologies",
    "NexTech Live",
    "TOIT Training",
    "Genova IVF Labs",
    "Cloud Services Group",
    "Guidance Way",
    "Kyaas Solutions",
    "Blue Tech",
    "Cybex Solutions",
    "Vortex Global",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Trusted by Businesses
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Companies We've Worked With
          </h2>

          <p className="mt-4 text-slate-600">
            Delivering professional IT solutions across multiple industries.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <h3 className="font-semibold text-slate-700">
                {client}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}