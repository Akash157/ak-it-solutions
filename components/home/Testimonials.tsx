"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riz Nabi",
    company: "Riz Energy LLC",
    review:
      "AK IT Solutions completely redesigned our website and delivered exactly what we needed. Professional communication and excellent technical expertise.",
  },
  {
    name: "Management Team",
    company: "Adam Technologies",
    review:
      "Their team provided outstanding support for our website and networking infrastructure. Highly recommended for reliable IT solutions.",
  },
  {
    name: "Operations",
    company: "Genova IVF Labs",
    review:
      "Professional CCTV and VoIP deployment with excellent after-sales support. Everything was delivered on time.",
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

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We build long-term relationships by delivering reliable,
            high-quality technology solutions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.company}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 flex">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="#FFD43B"
                    color="#FFD43B"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-6">

                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-[#0B7DDA]">
                  {item.company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}