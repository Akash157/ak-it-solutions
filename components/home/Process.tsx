import {
  MessageSquare,
  ClipboardList,
  Code2,
  Bug,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "We understand your business goals and requirements.",
    icon: MessageSquare,
  },
  {
    title: "Planning",
    description: "We prepare a detailed project roadmap and timeline.",
    icon: ClipboardList,
  },
  {
    title: "Development",
    description: "Our team builds your solution using modern technologies.",
    icon: Code2,
  },
  {
    title: "Testing",
    description: "Every project is tested for quality, speed and security.",
    icon: Bug,
  },
  {
    title: "Deployment",
    description: "Your project is launched smoothly with zero hassle.",
    icon: Rocket,
  },
  {
    title: "Support",
    description: "We continue supporting your business after delivery.",
    icon: Headphones,
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            OUR PROCESS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            How We Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            A simple and transparent process from consultation to long-term
            support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {index + 1}
                </div>

                <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}