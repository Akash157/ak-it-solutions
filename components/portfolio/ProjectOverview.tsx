type Props = {
  challenge: string;
  solution: string;
};

export default function ProjectOverview({
  challenge,
  solution,
}: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-slate-50 p-10">

          <h2 className="text-3xl font-black">
            Challenge
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            {challenge}
          </p>

        </div>

        <div className="rounded-3xl bg-[#0B7DDA] p-10 text-white">

          <h2 className="text-3xl font-black">
            Solution
          </h2>

          <p className="mt-6 leading-8">
            {solution}
          </p>

        </div>

      </div>
    </section>
  );
}