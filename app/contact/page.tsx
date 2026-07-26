import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss your next IT project. We'd love to hear from you."
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">

          {/* Contact Info */}

          <div>
            <h2 className="text-3xl font-bold">
              Get in Touch
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Whether you need a new website, networking, CCTV,
              VoIP, SEO or IT consulting, our team is ready to help.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" />
                <span>+92 305 4353729</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" />
                <span>contact@ak-it-sol.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" />
                <span>
                  M Block, Gulberg III, Lahore, Pakistan
                </span>
              </div>

            </div>
          </div>

          {/* Contact Form */}

          <form
            action="https://formsubmit.co/contact@ak-it-sol.com"
            method="POST"
            className="rounded-3xl bg-white p-8 shadow-lg space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border p-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full rounded-xl border p-4"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-xl border p-4"
            />

            <select
              name="service"
              className="w-full rounded-xl border p-4"
            >
              <option>Website Development</option>
              <option>SEO</option>
              <option>Networking</option>
              <option>CCTV</option>
              <option>VoIP</option>
              <option>Cloud</option>
              <option>Cyber Security</option>
            </select>

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border p-4"
            />

            <button
              className="w-full rounded-xl bg-[#0B7DDA] py-4 font-semibold text-white hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>
    </PageLayout>
  );
}