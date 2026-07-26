"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide IT services across Pakistan?",
    answer:
      "Yes. We provide remote and on-site IT services for businesses throughout Pakistan. Selected international projects are also supported remotely.",
  },
  {
    question: "How much does a business website cost?",
    answer:
      "Every project is different. Pricing depends on the number of pages, features, integrations, and design requirements. Contact us for a free quotation.",
  },
  {
    question: "Do you provide annual maintenance?",
    answer:
      "Yes. We offer website maintenance, server management, networking support, security updates, CCTV maintenance, and AMC packages.",
  },
  {
    question: "Which networking solutions do you provide?",
    answer:
      "We install and configure MikroTik, Cisco, Ubiquiti, VPNs, structured cabling, wireless networks, enterprise Wi-Fi, and complete office infrastructure.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign outdated websites with modern UI/UX, better performance, SEO improvements, and mobile responsiveness.",
  },
  {
    question: "Do you offer free consultation?",
    answer:
      "Yes. We provide a free consultation to understand your business needs and recommend the best technology solution.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B7DDA]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Here are answers to the questions our clients ask most often.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index
                    ? "max-h-96 px-7 pb-6"
                    : "max-h-0"
                }`}
              >
                <p className="leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}