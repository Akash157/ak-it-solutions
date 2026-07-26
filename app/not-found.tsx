import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">

        <h1 className="text-8xl font-black text-[#0B7DDA]">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0B7DDA] px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Homepage
        </Link>

      </div>
    </main>
  );
}