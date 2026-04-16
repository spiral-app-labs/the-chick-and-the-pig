"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DAILY_SPECIALS, SITE_LINKS } from "@/lib/siteData";

export default function DailySpecials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="specials" className="relative overflow-hidden bg-cream py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-gold">Seven day rotation</p>
            <h2 className="font-heading text-5xl text-smoky-brown sm:text-6xl md:text-7xl">
              DAILY SPECIALS
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-smoky-light sm:text-base">
              A different special every day keeps lunch and dinner regulars checking in all
              week. The lineup stays easy to scan here, while exact pricing and add-ons stay
              inside the live Toast order flow.
            </p>

            <div className={`mt-10 grid gap-4 sm:grid-cols-2 stagger-children ${isVisible ? "visible" : ""}`}>
              {DAILY_SPECIALS.map((special) => (
                <div
                  key={special.day}
                  className="rounded-[1.5rem] border border-smoky-brown/10 bg-white px-5 py-5 shadow-[0_18px_45px_rgba(62,39,35,0.08)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-gold">
                    {special.day}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl text-smoky-brown">
                    {special.item}
                  </h3>
                  <p className="mt-2 text-sm text-smoky-light">
                    Check the live order path for today&apos;s current pricing, modifiers, and side
                    options.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`stagger-children ${isVisible ? "visible" : ""}`}>
            <div className="rounded-[2rem] bg-smoky-brown p-7 text-white shadow-[0_24px_60px_rgba(25,15,11,0.28)]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-gold">
                Plan your week
              </p>
              <div className="mt-5 space-y-4 text-base leading-7 text-cream/84">
                <p>Seven specials, seven days, with pickup and delivery built into the regular routine.</p>
                <p>Friday and Saturday run late. Monday and Sunday wrap earlier at 8pm.</p>
                <p>Gift cards, sauces, and the full menu are all one click away when you need more than tonight&apos;s special.</p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={SITE_LINKS.toast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-bbq-red px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white"
                >
                  Start Order
                </a>
                <a
                  href={SITE_LINKS.giftCards}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-amber-gold/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-gold"
                >
                  Buy Gift Cards
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
