"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Catering() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="catering" className="relative py-24 overflow-hidden">
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80")',
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
            From office lunches to backyard parties, let us bring the BBQ to you. 
            Our catering menu features all your favorites — fried chicken, 
            smoked meats, homemade sides, and Chef Mat&apos;s signature sauces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18472612222"
              className="glass text-white px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 hover:bg-white/20"
            >
              📞 Call to Order Catering
            </a>
            <a
              href="https://order.toasttab.com/online/thechickandthepig"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-gold hover:bg-yellow-600 text-smoky-brown px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 shadow-xl"
            >
              🍖 View Catering Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
