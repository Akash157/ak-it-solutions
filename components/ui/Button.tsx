type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#0B7DDA] text-white hover:bg-blue-700"
      : "border border-[#0B7DDA] text-[#0B7DDA] hover:bg-[#0B7DDA] hover:text-white";

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition ${styles}`}
    >
      {children}
    </button>
  );
}