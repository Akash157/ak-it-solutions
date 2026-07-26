import {
  ShieldCheck,
  Headphones,
  BadgeCheck,
  Laptop,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Experienced Team",
    text: "Certified professionals delivering reliable IT solutions.",
    icon: Users,
  },
  {
    title: "Complete IT Solutions",
    text: "From websites to networking, CCTV and security—all under one roof.",
    icon: Laptop,
  },
  {
    title: "24/7 Technical Support",
    text: "Quick response and dependable after-sales support.",
    icon: Headphones,
  },
  {
    title: "Secure Infrastructure",
    text: "Security-first approach for every project we deliver.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Guaranteed",
    text: "Professional workmanship with attention to detail.",
    icon: BadgeCheck,
  },
  {
    title: "On-Time Delivery",
    text: "Projects completed within agreed timelines.",
    icon: Clock3,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Why Choose AK IT Solutions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We provide reliable, scalable and secure IT services that help
            businesses grow through technology.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}