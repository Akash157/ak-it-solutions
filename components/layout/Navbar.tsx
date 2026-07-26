"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="AK IT Solutions"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium transition hover:text-[#0B7DDA]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-[#0B7DDA] px-5 py-3 font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          Get Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white shadow-lg md:hidden">
          <nav className="flex flex-col p-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b py-4 text-lg hover:text-[#0B7DDA]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-xl bg-[#0B7DDA] py-3 text-center font-semibold text-white"
            >
              Get Free Quote
            </Link>

            <div className="mt-6 text-center text-sm text-slate-500">
              📞 +92 305 4353729
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}