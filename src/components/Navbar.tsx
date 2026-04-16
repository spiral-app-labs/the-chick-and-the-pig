"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#specials", label: "Daily Specials" },
    { href: "#menu", label: "Menu Preview" },
    { href: "#sauces", label: "Sauces" },
    { href: "#catering", label: "Catering" },
    { href: "#location", label: "Location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-smoky-brown/95 backdrop-blur-md shadow-2xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-3xl font-heading text-amber-gold tracking-[0.08em] group-hover:text-white transition-colors">
            THE CHICK & THE PIG
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-amber-gold transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_LINKS.toast}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bbq-red hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 shadow-lg"
          >
            ORDER TOAST
          </a>
          <a
            href={SITE_LINKS.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-gold transition-colors text-sm font-medium tracking-wide uppercase hover:text-white"
          >
            Gift Cards
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-amber-gold transition-all ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber-gold transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber-gold transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="glass-dark mx-4 mt-2 rounded-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-cream/90 hover:text-amber-gold transition-colors text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_LINKS.toast}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-bbq-red text-white text-center px-5 py-3 rounded-full font-bold text-lg mt-4"
          >
            ORDER TOAST
          </a>
          <a
            href={SITE_LINKS.doorDash}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-amber-gold/30 text-amber-gold text-center px-5 py-3 rounded-full font-bold text-lg"
          >
            DOORDASH
          </a>
        </div>
      </div>
    </nav>
  );
}
