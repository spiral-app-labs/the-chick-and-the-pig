"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SITE_LINKS } from "@/lib/siteData";

export default function Social() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-smoky-brown relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-gold/5 to-bbq-red/5" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 text-center">
        <div className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Keep the fast paths obvious</p>
          <h2 className="font-heading text-5xl sm:text-6xl text-white mb-6">
            ORDER, GIFT, OR FOLLOW
          </h2>
          <p className="text-cream/60 text-lg mb-10">
            The old site won on convenience. This preserves that strength with the three highest intent actions in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={SITE_LINKS.toast}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-3 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
            >
              <span className="text-white font-bold">Toast Ordering</span>
            </a>
            <a
              href={SITE_LINKS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-3 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
            >
              <span className="text-white font-bold">Gift Cards</span>
            </a>
            <a
              href={SITE_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-3 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
            >
              <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-white font-bold">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
