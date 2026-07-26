type Props = {
  subtitle: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="font-semibold uppercase tracking-[0.3em] text-[#0B7DDA]">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
        {description}
      </p>
    </div>
  );
}