import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const services = [
  "Website Development",
  "Networking",
  "Cyber Security",
  "Cloud Solutions",
  "CCTV Installation",
  "VoIP / IP PBX",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>

          <Image
            src="/images/logo-white.png"
            alt="AK IT Solutions"
            width={190}
            height={60}
            className="h-14 w-auto"
          />

          <p className="mt-6 leading-7 text-slate-400">
            AK IT Solutions provides complete IT services including
            website development, networking, cloud infrastructure,
            cyber security, CCTV, VoIP and IT consultancy.
          </p>

        </div>

        {/* Services */}
        <div>

          <h3 className="mb-6 text-xl font-bold">
            Services
          </h3>

          <div className="space-y-3">

            {services.map((item) => (
              <Link
                key={item}
                href="/services"
                className="block text-slate-400 transition hover:text-[#39D353]"
              >
                {item}
              </Link>
            ))}

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-6 text-xl font-bold">
            Quick Links
          </h3>

          <div className="space-y-3">

            <Link href="/" className="block text-slate-400 hover:text-[#39D353]">
              Home
            </Link>

            <Link href="/about" className="block text-slate-400 hover:text-[#39D353]">
              About
            </Link>

            <Link href="/portfolio" className="block text-slate-400 hover:text-[#39D353]">
              Portfolio
            </Link>

            <Link href="/contact" className="block text-slate-400 hover:text-[#39D353]">
              Contact
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-6 text-xl font-bold">
            Contact
          </h3>

          <div className="space-y-5 text-slate-400">

            <a
              href="tel:+923054353729"
              className="flex items-start gap-3 hover:text-[#39D353]"
            >
              <Phone size={18} />
              <span>0305 4353729</span>
            </a>

            <a
              href="mailto:contact@ak-it-sol.com"
              className="flex items-start gap-3 hover:text-[#39D353]"
            >
              <Mail size={18} />
              <span>contact@ak-it-sol.com</span>
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={18} />
              <span>
                Henry K Colony,
                <br />
                Gulberg III,
                Lahore 54000
              </span>
            </div>

            <a
              href="https://ak-it-sol.com"
              target="_blank"
              className="flex items-center gap-3 hover:text-[#39D353]"
            >
              <Globe size={18} />
              ak-it-sol.com
            </a>

            <a
              href="https://web.facebook.com/AKITSolution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#39D353]">
              <ExternalLink size={18} />
              Facebook
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 AK IT Solutions. All Rights Reserved.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#39D353]"
          >
            Let's Build Something Amazing
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>

    </footer>
  );
}