"use client";

import { useParallax } from "@/hooks/useScrollAnimation";
import { BUSINESS, SITE_LINKS } from "@/lib/siteData";

export default function Hero() {
  const offset = useParallax();

  return (
    <section className="relative min-h-[760px] overflow-hidden pt-24 sm:pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${BUSINESS.heroImage}")`,
          transform: `translateY(${offset * 0.4}px)`,
        }}
      />
      <div className="absolute inset-0 smoke-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,23,0.22),transparent_30%),linear-gradient(180deg,rgba(32,18,12,0.24)_0%,rgba(32,18,12,0.7)_45%,rgba(32,18,12,0.96)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <p className="animate-fade-in text-amber-gold font-medium tracking-[0.34em] uppercase text-xs sm:text-sm">
            Algonquin smokehouse • fried chicken • sauces by the jar
          </p>

          <h1
            className="font-heading text-[4.1rem] leading-[0.88] text-white sm:text-[5.8rem] lg:text-[8rem] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            THE CHICK
            <br />
            <span className="text-amber-gold">&</span> THE PIG
          </h1>

          <p
            className="mt-5 max-w-2xl text-base leading-7 text-cream/85 sm:text-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Real fried chicken, smoked meats, seven day specials, and Chef Mat&apos;s
            sauces built for pickup, delivery, and catering.
          </p>

          <div
            className="mt-7 flex flex-wrap gap-3 text-sm uppercase tracking-[0.18em] text-cream/72 animate-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            <span>1000 N Main St</span>
            <span className="text-amber-gold">•</span>
            <span>{BUSINESS.phoneDisplay}</span>
            <span className="text-amber-gold">•</span>
            <span>Open late Fri-Sat</span>
          </div>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href={SITE_LINKS.toast}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bbq-red px-8 py-4 text-center rounded-full font-bold text-sm tracking-[0.18em] text-white transition-all hover:scale-[1.02] hover:bg-red-700 shadow-2xl shadow-red-950/30"
            >
              Order Online
            </a>
            <a
              href={SITE_LINKS.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 text-center rounded-full font-bold text-sm tracking-[0.18em] text-white transition-all hover:scale-[1.02] hover:bg-white/20"
            >
              DoorDash
            </a>
            <a
              href={SITE_LINKS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-amber-gold/35 bg-black/20 px-8 py-4 text-center font-bold text-sm tracking-[0.18em] text-amber-gold transition-all hover:scale-[1.02] hover:bg-black/35"
            >
              Gift Cards
            </a>
          </div>

          <div
            className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="glass rounded-[1.75rem] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-gold">Menu paths</p>
              <p className="mt-2 text-lg text-white">Toast ordering, DoorDash delivery, and direct full menu access.</p>
            </div>
            <div className="glass rounded-[1.75rem] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-gold">Sauce shelf</p>
              <p className="mt-2 text-lg text-white">Nine jar-ready sauces and dressings anchored around Chef Mat&apos;s lineup.</p>
            </div>
            <div className="glass rounded-[1.75rem] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-gold">Catering</p>
              <p className="mt-2 text-lg text-white">Corporate lunches, parties, and pickup catering with a 48 hour heads-up for big orders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
