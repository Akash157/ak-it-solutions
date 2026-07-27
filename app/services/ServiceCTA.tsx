import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="bg-[#0B7DDA] py-24 text-white">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-black">
          Ready to Start Your Project?
        </h2>

        <p className="mt-6 text-lg leading-8">
          Let's discuss your requirements and build a reliable IT solution
          tailored to your business.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#0B7DDA] transition hover:scale-105"
        >
          Get Free Consultation
        </Link>

      </div>

    </section>
  );
}