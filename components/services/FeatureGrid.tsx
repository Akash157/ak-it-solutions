import { CheckCircle2 } from "lucide-react";

type Props = {
  title: string;
  items: string[];
};

export default function FeatureGrid({
  title,
  items,
}: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-slate-900">
          {title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <CheckCircle2
                size={24}
                className="text-[#39D353]"
              />

              <span className="font-medium">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}