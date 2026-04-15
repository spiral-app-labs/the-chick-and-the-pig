"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DAILY_SPECIALS, SITE_LINKS } from "@/lib/siteData";

export default function DailySpecials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="specials" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-bbq-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Seven day rotation</p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            DAILY SPECIALS
          </h2>
          <p className="text-smoky-light mt-4 max-w-2xl mx-auto">
            The original site&apos;s strongest utility was obvious daily offers. This keeps that path visible without making you dig through delivery apps first.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children ${isVisible ? "visible" : ""}`}>
          {DAILY_SPECIALS.map((special) => (
            <div
              key={special.day}
              className="tilt-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-gold/10 hover:border-amber-gold/30"
            >
              <p className="text-amber-gold font-bold text-xs tracking-[0.2em] uppercase">
                {special.day}
              </p>
              <h3 className="font-heading text-2xl text-smoky-brown mt-1 mb-2">
                {special.item}
              </h3>
              <p className="text-smoky-light text-sm mb-3">Includes a side and a drink. Upgrade to deluxe for +$3.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-heading text-bbq-red">
                  {special.price}
                </span>
                <a
                  href={SITE_LINKS.toast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-gold/10 text-amber-gold hover:bg-amber-gold hover:text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all"
                >
                  ORDER
                </a>
              </div>
            </div>
          ))}

          {/* Deluxe upgrade card */}
          <div className="tilt-card bg-gradient-to-br from-amber-gold to-yellow-600 rounded-2xl p-6 shadow-lg text-white">
            <p className="font-bold text-xs tracking-[0.2em] uppercase text-white/80">
              PLAN AHEAD
            </p>
            <h3 className="font-heading text-2xl mt-1 mb-2">GIFT CARDS & CATERING</h3>
            <p className="text-white/90 text-sm mb-3">
              Keep the utility stack from the old site: gift cards, catering, exact hours, and fast order routing.
            </p>
            <a
              href={SITE_LINKS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white/35 px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em]"
            >
              Buy Gift Cards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
