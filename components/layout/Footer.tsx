import { Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Image
              src="/images/logo-white.png"
              alt="AK IT Solutions"
              width={220}
              height={60}
            />

            <p className="mt-6 text-slate-400 leading-8">
              {site.tagline}
            </p>

            <p className="mt-4 text-slate-500">
              {site.slogan}
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link href="/">Home</Link><br/>

              <Link href="/about">About</Link><br/>

              <Link href="/services">Services</Link><br/>

              <Link href="/portfolio">Portfolio</Link><br/>

              <Link href="/contact">Contact</Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Services
            </h3>

            <div className="space-y-3 text-slate-300">

              <p>Website Development</p>

              <p>Networking</p>

              <p>Cyber Security</p>

              <p>CCTV Solutions</p>

              <p>VoIP / IP PBX</p>

              <p>Cloud Solutions</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone className="text-blue-400"/>

                <span>{site.phone}</span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-blue-400"/>

                <span>{site.email}</span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-blue-400"/>

                <span>{site.address}</span>

              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <FaFacebook className="cursor-pointer text-xl hover:text-blue-400 transition" />
              <FaInstagram className="cursor-pointer text-xl hover:text-pink-400 transition" />
              <FaLinkedin className="cursor-pointer text-xl hover:text-blue-500 transition" />

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} AK IT Solutions.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}