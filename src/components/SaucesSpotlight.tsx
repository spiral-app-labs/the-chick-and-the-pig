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
      className="relative overflow-hidden bg-smoky-brown py-20 sm:py-24"
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-bbq-red/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-gold">
              Sauce shelf
            </p>
            <h2 className="font-heading text-5xl text-white sm:text-6xl md:text-7xl">
              CHEF MAT&apos;S SAUCES
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-cream/68 sm:text-base">
              Chef Mat&apos;s lineup gives the menu its own lane, from wings and sandwiches to
              smokehouse plates and take-home jars.
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-sm leading-7 text-cream/78">
              Ask for Original BBQ, Bourbon Peach, Blueberry BBQ, or Atomic Cocktail on your
              order, then bring a jar home for the fridge.
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-5 sm:grid-cols-3 stagger-children ${isVisible ? "visible" : ""}`}>
          {SAUCES.map((sauce, index) => (
            <div
              key={sauce}
              className="group rounded-2xl border border-white/10 bg-white/6 p-5 text-center transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative mx-auto mb-4 h-28 w-20">
                <div className={`absolute inset-x-2 top-0 h-4 bg-gradient-to-r ${sauceAccents[index]} rounded-t-lg`} />
                <div className={`absolute inset-x-0 top-3 bottom-0 bg-gradient-to-b ${sauceAccents[index]} rounded-b-xl shadow-lg group-hover:shadow-2xl transition-shadow`} />
                <div className="absolute inset-x-0 top-3 bottom-0 rounded-b-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              </div>

              <h3 className="font-heading text-xl text-amber-gold">{sauce}</h3>
              <p className="mt-1 text-sm text-cream/56">12oz jar or add-on</p>
            </div>
          ))}
        </div>
        </div>

        <div className={`mt-10 scroll-animate ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
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
