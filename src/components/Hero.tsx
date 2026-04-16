"use client";

import { useParallax } from "@/hooks/useScrollAnimation";
import { BUSINESS, GALLERY_IMAGES, SITE_LINKS } from "@/lib/siteData";

export default function Hero() {
  const offset = useParallax();

  return (
    <section className="relative min-h-[720px] overflow-hidden pt-20 sm:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${BUSINESS.heroImage}")`,
          transform: `translateY(${offset * 0.25}px)`,
        }}
      />
      <div className="absolute inset-0 smoke-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,23,0.14),transparent_30%),linear-gradient(180deg,rgba(25,15,11,0.22)_0%,rgba(25,15,11,0.72)_45%,rgba(25,15,11,0.95)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
        <div className="max-w-5xl">
          <p className="animate-fade-in text-amber-gold font-semibold tracking-[0.3em] uppercase text-[11px] sm:text-xs">
            Takeout • delivery • catering only
          </p>

          <h1
            className="font-heading text-[4rem] leading-[0.9] text-white sm:text-[5.5rem] lg:text-[7rem] animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            FRIED CHICKEN,
            <br />
            HICKORY SMOKED BBQ,
            <br />
            <span className="text-amber-gold">AND DAILY SPECIALS ALL WEEK.</span>
          </h1>

          <p
            className="mt-5 max-w-3xl text-base leading-7 text-cream/88 sm:text-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Pickup, delivery, gift cards, and catering from 1000 N Main St in
            Algonquin, with Chef Mat&apos;s sauce shelf, late Friday and Saturday hours,
            and a menu that covers weeknight dinners, smokehouse plates, and bigger
            group orders.
          </p>

          <div
            className="mt-7 flex flex-wrap gap-3 text-sm uppercase tracking-[0.18em] text-cream/76 animate-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            <span>The Chick &amp; The Pig</span>
            <span className="text-amber-gold">•</span>
            <span>1000 N Main St</span>
            <span className="text-amber-gold">•</span>
            <span>{BUSINESS.phoneDisplay}</span>
            <span className="text-amber-gold">•</span>
            <span>Late Friday &amp; Saturday</span>
          </div>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href={SITE_LINKS.toast}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-bbq-red px-8 py-4 text-center font-bold text-sm tracking-[0.18em] text-white transition-all hover:scale-[1.02] hover:bg-red-700 shadow-2xl shadow-red-950/30"
            >
              Order Toast
            </a>
            <a
              href={SITE_LINKS.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-black/25 px-8 py-4 text-center font-bold text-sm tracking-[0.18em] text-white transition-all hover:scale-[1.02] hover:bg-white/12"
            >
              DoorDash
            </a>
            <a
              href={SITE_LINKS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-amber-gold/35 bg-amber-gold/10 px-8 py-4 text-center font-bold text-sm tracking-[0.18em] text-amber-gold transition-all hover:scale-[1.02] hover:bg-amber-gold/20"
            >
              Gift Cards
            </a>
          </div>

          <div
            className="mt-10 grid max-w-5xl gap-4 lg:grid-cols-[1.05fr_0.95fr] animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/12 bg-black/28 p-5 backdrop-blur-sm md:col-span-2">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-gold">
                  Fastest order path
                </p>
                <p className="mt-2 text-lg text-white">
                  Start with Toast for pickup, jump to DoorDash for delivery, or
                  check the full live menu before you commit.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-black/28 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-gold">
                  Crowd staples
                </p>
                <p className="mt-2 text-lg text-white">
                  Fried chicken meals, smoked ribs, sandwiches, wings, and a full
                  run of comfort sides.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-black/28 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-gold">
                  Catering
                </p>
                <p className="mt-2 text-lg text-white">
                  Call or email for office lunches, parties, and larger pickup
                  orders with a 48-hour heads-up.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {GALLERY_IMAGES.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-black/20 shadow-2xl shadow-black/20 backdrop-blur-sm"
                >
                  <div
                    className="h-40 bg-cover bg-center sm:h-48"
                    style={{ backgroundImage: `url("${image.src}")` }}
                    role="img"
                    aria-label={image.alt}
                  />
                  <div className="border-t border-white/10 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-amber-gold">
                      Real food photo
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{image.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
