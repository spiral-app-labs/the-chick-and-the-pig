"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BEST_SELLERS, BUSINESS, SITE_LINKS } from "@/lib/siteData";

export default function FeaturedDishes() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Most ordered right now</p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            BEST SELLERS
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger-children ${isVisible ? "visible" : ""}`}>
          {BEST_SELLERS.map((dish, index) => (
            <div
              key={dish.name}
              className="tilt-card group relative rounded-[1.75rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div
                className="relative h-80 overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(12,6,4,0.05), rgba(12,6,4,0.86)), url("${BUSINESS.heroImage}")`,
                  backgroundPosition: `${30 + index * 18}% center`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,23,0.22),transparent_35%)]" />
                <div className="absolute top-4 left-4">
                  <span className="glass-dark text-amber-gold text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {dish.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-amber-gold/0 group-hover:bg-amber-gold/10 transition-all duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="font-heading text-2xl">{dish.name}</h3>
                  <span className="rounded-full bg-amber-gold px-3 py-1 text-sm font-bold text-smoky-brown">
                    {dish.price}
                  </span>
                </div>
                <p className="text-cream/80 text-sm leading-6">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 scroll-animate ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
          <a
            href={SITE_LINKS.fullMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bbq-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-xl"
          >
            View Full Toast Menu
          </a>
        </div>
      </div>
    </section>
  );
}
