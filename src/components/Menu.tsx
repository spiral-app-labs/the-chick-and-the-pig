"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MENU_CATEGORIES, SITE_LINKS } from "@/lib/siteData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Real menu structure
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            OUR MENU
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-smoky-light sm:text-base">
            Rebuilt around the live Toast and DoorDash category structure so the site reflects what guests can actually order: appetizers, wings, sandwiches, smoked meats, sides, desserts, drinks, and sauces by the jar.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 stagger-children ${isVisible ? "visible" : ""}`}>
          {MENU_CATEGORIES.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all ${
                activeCategory === i
                  ? "bg-smoky-brown text-amber-gold shadow-lg scale-105"
                  : "bg-white text-smoky-brown hover:bg-smoky-brown/10 border border-smoky-brown/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-amber-gold/10">
          <div className="mb-6 flex flex-col gap-3 border-b border-amber-gold/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-gold">
                {MENU_CATEGORIES[activeCategory].accent}
              </p>
              <h3 className="mt-2 font-heading text-3xl text-smoky-brown">
                {MENU_CATEGORIES[activeCategory].name}
              </h3>
            </div>
            <a
              href={SITE_LINKS.fullMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-smoky-brown/12 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-smoky-brown transition-colors hover:bg-cream"
            >
              Full Toast Menu
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MENU_CATEGORIES[activeCategory].items.map((item) => (
              <div
                key={item}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-cream transition-colors"
              >
                <div className="mt-1 h-3 w-3 rounded-full bg-amber-gold transition-transform group-hover:scale-125" />
                <div className="flex-1 border-b border-dashed border-smoky-brown/10 pb-4">
                  <h4 className="font-bold text-smoky-brown text-lg group-hover:text-bbq-red transition-colors">
                    {item}
                  </h4>
                  <p className="text-smoky-light text-sm mt-1">
                    See live modifiers, sides, and sauce choices in the full ordering flow.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={SITE_LINKS.toast}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-gold hover:bg-yellow-600 text-smoky-brown px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-lg"
          >
            Order Toast
          </a>
          <a
            href={SITE_LINKS.doorDash}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-smoky-brown hover:bg-smoky-light text-cream px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-lg"
          >
            DoorDash Delivery
          </a>
          <a
            href={SITE_LINKS.fullMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-smoky-brown/15 bg-white px-8 py-4 rounded-full font-bold tracking-wide text-smoky-brown transition-all hover:scale-105 shadow-lg"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
