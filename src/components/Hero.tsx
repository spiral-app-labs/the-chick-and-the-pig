"use client";

import { useParallax } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const offset = useParallax();

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1920&q=80")',
          transform: `translateY(${offset * 0.4}px)`,
        }}
      />

      {/* Smoke overlay */}
      <div className="absolute inset-0 smoke-overlay" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-smoky-brown/60 via-smoky-brown/40 to-smoky-brown/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-in">
          <p className="text-amber-gold font-medium tracking-[0.3em] uppercase text-sm sm:text-base mb-4">
            Algonquin, Illinois
          </p>
        </div>

        <h1
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-2 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          THE CHICK
          <br />
          <span className="text-amber-gold">&</span> THE PIG
        </h1>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-cream/90 text-lg sm:text-xl md:text-2xl font-light tracking-wide mt-4 mb-2">
            SAVORY FRIED CHICKEN & BBQ
          </p>
          <p className="text-amber-gold/80 text-sm sm:text-base tracking-widest uppercase">
            Chef Mat&apos;s Homemade Sauces • Smoked Low & Slow
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="https://order.toasttab.com/online/thechickandthepig"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bbq-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 shadow-2xl shadow-red-900/40"
          >
            🔥 ORDER NOW
          </a>
          <a
            href="#menu"
            className="glass text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 hover:bg-white/20"
          >
            VIEW MENU
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-amber-gold rounded-full animate-fade-in" />
          </div>
        </div>
      </div>
    </section>
  );
}
