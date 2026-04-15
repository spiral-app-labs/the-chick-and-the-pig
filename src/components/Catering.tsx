"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BUSINESS, SITE_LINKS } from "@/lib/siteData";

export default function Catering() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="catering" className="relative py-20 sm:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url("${BUSINESS.heroImage}")`,
        }}
      />
      <div className="absolute inset-0 bg-smoky-brown/80" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Feed The Whole Crew
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white mb-6">
            CATERING
          </h2>
          <p className="text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Corporate lunches, weddings, rehearsal dinners, birthday parties, and private home parties are all in the live catering flow. For parties of 50 or more, plan on a 48 hour lead time.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.18em] text-cream/70">
            <span>General: {BUSINESS.email}</span>
            <span className="text-amber-gold">•</span>
            <span>Catering: {BUSINESS.cateringEmail}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="glass text-white px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 hover:bg-white/20"
            >
              📞 Call to Order Catering
            </a>
            <a
              href={SITE_LINKS.fullMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-gold hover:bg-yellow-600 text-smoky-brown px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 shadow-xl"
            >
              🍖 View Full Catering Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
