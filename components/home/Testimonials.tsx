import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riz Energy",
    role: "Energy Company",
    review:
      "AK IT Solutions completely redesigned our website. The project was delivered professionally and exceeded our expectations.",
  },
  {
    name: "Adam Technologies",
    role: "Technology Company",
    review:
      "Excellent communication, modern design and outstanding technical expertise. Highly recommended.",
  },
  {
    name: "TOIT Training",
    role: "Training Institute",
    review:
      "Our new website is faster, easier to manage and looks fantastic. Great experience working with the team.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We pride ourselves on building long-term relationships by delivering
            reliable, high-quality IT solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}