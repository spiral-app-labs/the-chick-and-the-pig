"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SAUCES, SITE_LINKS } from "@/lib/siteData";

const sauceAccents = [
  "from-amber-800 to-amber-600",
  "from-yellow-700 to-yellow-500",
  "from-indigo-800 to-indigo-500",
  "from-pink-800 to-pink-500",
  "from-orange-600 to-orange-400",
  "from-rose-700 to-orange-500",
  "from-red-700 to-red-500",
  "from-stone-300 to-stone-100",
  "from-blue-300 to-blue-100",
];

export default function SaucesSpotlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="sauces"
      className="py-20 sm:py-28 bg-smoky-brown relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-bbq-red/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            The Secret Weapon
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white">
            CHEF MAT&apos;S SAUCES
          </h2>
          <p className="text-cream/60 mt-4 max-w-xl mx-auto">
            9 handcrafted sauces & dressings made in-house. Take a 12oz mason jar home for $8.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 stagger-children ${isVisible ? "visible" : ""}`}>
          {SAUCES.map((sauce, index) => (
            <div
              key={sauce}
              className="tilt-card group glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative mx-auto w-20 h-28 mb-4">
                <div className={`absolute inset-x-2 top-0 h-4 bg-gradient-to-r ${sauceAccents[index]} rounded-t-lg`} />
                <div className={`absolute inset-x-0 top-3 bottom-0 bg-gradient-to-b ${sauceAccents[index]} rounded-b-xl shadow-lg group-hover:shadow-2xl transition-shadow`} />
                <div className="absolute inset-x-0 top-3 bottom-0 rounded-b-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              </div>

              <h3 className="font-heading text-xl text-amber-gold">{sauce}</h3>
              <p className="text-cream/50 text-sm mt-1">$8 / 12oz jar</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 scroll-animate ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
          <a
            href={SITE_LINKS.fullMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-amber-gold/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-gold transition-colors hover:bg-white/10"
          >
            Browse Sauces & Jar Add-ons
          </a>
        </div>
      </div>
    </section>
  );
}
