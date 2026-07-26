import {
  Globe,
  Search,
  Share2,
  Network,
  Camera,
  ShieldCheck,
  PhoneCall,
  Cloud,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Modern, responsive websites and web applications built for performance.",
  },
  {
    title: "SEO",
    icon: Search,
    description:
      "Improve your Google rankings and attract more customers organically.",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    description:
      "Grow your brand across Facebook, Instagram, LinkedIn and more.",
  },
  {
    title: "Networking",
    icon: Network,
    description:
      "Enterprise networking, routing, switching and structured cabling.",
  },
  {
    title: "CCTV Solutions",
    icon: Camera,
    description:
      "Professional CCTV installation and surveillance systems.",
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    description:
      "Protect your business with advanced security solutions.",
  },
  {
    title: "VoIP & IP PBX",
    icon: PhoneCall,
    description:
      "Reliable business communication with modern VoIP solutions.",
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    description:
      "Cloud migration, hosting and scalable infrastructure services.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Complete IT Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Everything your business needs under one roof.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}