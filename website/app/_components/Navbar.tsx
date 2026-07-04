"use client";

import { useState } from "react";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[linear-gradient(90deg,#151515_0%,#1F4D3A_35%,#219f98,#94a930_100%)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-16">
        {/* Logo */}
        <span className="text-3xl font-bold text-[#6FC5A8]">Kamilyan</span>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#6FC5A8]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-[#1F4D3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1FA7A0]"
            >
              Schedule Consultation
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#151515] px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-zinc-300 hover:text-[#6FC5A8]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded-lg bg-[#1F4D3A] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Schedule Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
