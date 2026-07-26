"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "Website Development",
    href: "/services",
  },
  {
    name: "Networking Solutions",
    href: "/services",
  },
  {
    name: "Cloud Solutions",
    href: "/services",
  },
  {
    name: "Cyber Security",
    href: "/services",
  },
  {
    name: "CCTV Installation",
    href: "/services",
  },
  {
    name: "VoIP / IP PBX",
    href: "/services",
  },
  {
    name: "SEO & Digital Marketing",
    href: "/services",
  },
  {
    name: "IT Consultancy",
    href: "/services",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-lg border-b border-slate-200"
          : "border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="AK IT Solutions"
            width={190}
            height={60}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition hover:text-[#0B7DDA] ${
                pathname === item.href
                  ? "text-[#0B7DDA]"
                  : "text-slate-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="group relative">

            <button
              className={`flex items-center gap-1 font-medium transition hover:text-[#0B7DDA] ${
                pathname.startsWith("/services")
                  ? "text-[#0B7DDA]"
                  : "text-slate-700"
              }`}
            >
              Services

              <ChevronDown
                size={17}
                className="transition group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-0 top-full mt-5 w-72 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-100 hover:text-[#0B7DDA]"
                >
                  {service.name}
                </Link>
              ))}

            </div>

          </div>

          {navLinks.slice(2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition hover:text-[#0B7DDA] ${
                pathname === item.href
                  ? "text-[#0B7DDA]"
                  : "text-slate-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-[#0B7DDA] px-6 py-3 font-semibold text-white transition hover:bg-blue-700 lg:block"
        >
          Get Free Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col p-6">

            <Link href="/" onClick={() => setMobileOpen(false)} className="py-3">
              Home
            </Link>

            <Link href="/about" onClick={() => setMobileOpen(false)} className="py-3">
              About
            </Link>

            <Link href="/services" onClick={() => setMobileOpen(false)} className="py-3">
              Services
            </Link>

            <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="py-3">
              Portfolio
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3">
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-xl bg-[#0B7DDA] py-3 text-center font-semibold text-white"
            >
              Get Free Quote
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}