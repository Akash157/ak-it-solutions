import {
  Award,
  Clock3,
  Headphones,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Team",
    text: "Our certified professionals have years of experience delivering reliable IT solutions.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    text: "Projects are completed on schedule without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Solutions",
    text: "Security best practices are built into every website and IT infrastructure we deploy.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    text: "We provide ongoing technical support and maintenance after project delivery.",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    text: "We use modern frameworks and enterprise-grade tools to deliver future-ready solutions.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    text: "Every solution is customized to match your business goals and budget.",
  },
];

export default function WhyChooseService() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Why Businesses Choose AK IT Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We combine technical expertise, modern technologies and outstanding
            customer support to deliver IT solutions that help businesses grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B7DDA]/10">
                  <Icon className="h-8 w-8 text-[#0B7DDA]" />
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}