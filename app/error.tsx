"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="max-w-lg text-center">

        <h1 className="text-6xl font-black text-red-600">
          Oops!
        </h1>

        <p className="mt-6 text-slate-600">
          Something went wrong while loading this page.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <button
            onClick={reset}
            className="rounded-xl bg-[#0B7DDA] px-6 py-3 font-semibold text-white"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border px-6 py-3 font-semibold"
          >
            Home
          </Link>

        </div>

      </div>

    </main>
  );
}