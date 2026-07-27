import { CheckCircle2 } from "lucide-react";

type Props = {
  results: string[];
};

export default function ProjectResults({
  results,
}: Props) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-center text-4xl font-black">
          Results Delivered
        </h2>

        <div className="mt-14 space-y-6">

          {results.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <CheckCircle2 className="mt-1 text-[#39D353]" />

              <p className="text-lg text-slate-700">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}