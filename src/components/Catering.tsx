"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BUSINESS, SITE_LINKS } from "@/lib/siteData";

export default function Catering() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="catering" className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8e7_0%,#f3e5cf_100%)] py-20 sm:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(212,165,23,0.16),transparent_62%)] lg:block" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-4">
        <div className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="grid gap-8 rounded-[2rem] border border-smoky-brown/10 bg-white p-8 shadow-[0_24px_60px_rgba(62,39,35,0.08)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-gold">
                Feed the whole crew
              </p>
              <h2 className="mt-3 font-heading text-5xl text-smoky-brown sm:text-6xl md:text-7xl">
                CATERING
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-smoky-light sm:text-lg">
                For office lunches, parties, rehearsal dinners, and larger pickup orders, call
                or email the restaurant directly. Give the team about 48 hours notice for bigger
                counts so everything lands on time.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-cream p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-gold">Direct contact</p>
                  <a href={BUSINESS.phoneHref} className="mt-3 block text-lg font-semibold text-smoky-brown transition-colors hover:text-bbq-red">
                    {BUSINESS.phoneDisplay}
                  </a>
                  <a href={`mailto:${BUSINESS.cateringEmail}`} className="mt-2 block text-sm text-smoky-light transition-colors hover:text-bbq-red">
                    {BUSINESS.cateringEmail}
                  </a>
                </div>
                <div className="rounded-[1.5rem] bg-smoky-brown p-5 text-cream">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-gold">Best fit</p>
                  <p className="mt-3 text-sm leading-7 text-cream/82">
                    Office lunches, party spreads, family-style pickup, and events where the food needs to travel well.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-smoky-brown p-7 text-cream">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-gold">Use the right path</p>
              <p className="mt-4 text-sm leading-7 text-cream/82">
                Use the everyday menu for regular pickup and delivery orders. For catering
                timing, party counts, and quotes, call or email so the team can plan it right.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={SITE_LINKS.cateringInquiry}
                  className="inline-flex items-center justify-center rounded-full bg-amber-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-smoky-brown"
                >
                  Email Catering
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white"
                >
                  Call Catering
                </a>
                <a
                  href={SITE_LINKS.fullMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-amber-gold/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-gold"
                >
                  See Everyday Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
