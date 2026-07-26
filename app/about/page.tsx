import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Website Design & Development",
  "Networking Solutions",
  "Cyber Security",
  "CCTV Installation",
  "VoIP / IP PBX",
  "Cloud Solutions",
  "SEO & Digital Marketing",
  "Professional IT Consultancy",
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About AK IT Solutions"
        subtitle="We provide complete IT solutions that help businesses grow through modern technology, secure infrastructure, and reliable support."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#0B7DDA]">
              WHO WE ARE
            </p>

            <h2 className="text-4xl font-bold text-slate-900">
              Your Trusted Technology Partner
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              AK IT Solutions is a Lahore-based IT company providing complete
              technology solutions for startups, SMEs, and enterprises. We
              specialize in website development, networking, CCTV, cloud
              infrastructure, VoIP solutions, cyber security, SEO, and digital
              marketing.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Our mission is simple: deliver reliable, secure, and innovative
              technology that helps businesses succeed in today's digital world.
            </p>
          </div>

          {/* Right Side */}
          <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Our Core Services
            </h3>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}