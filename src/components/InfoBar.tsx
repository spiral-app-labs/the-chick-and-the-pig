"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BUSINESS, HOURS, SITE_LINKS } from "@/lib/siteData";

export default function InfoBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`bg-white py-8 text-smoky-brown sm:py-10 ${isVisible ? "visible" : ""}`}
    >
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3">
        <div
          className="rounded-[1.5rem] border border-smoky-brown/10 bg-cream px-6 py-6 scroll-animate"
          style={{
            transitionDelay: "0.1s",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-gold">Order the easy way</p>
          <p className="mt-3 text-lg font-semibold">Toast for pickup, DoorDash for delivery, gift cards for regulars.</p>
          <a
            href={SITE_LINKS.fullMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-bbq-red transition-colors hover:text-smoky-brown"
          >
            Browse the live menu
          </a>
        </div>

        <div
          className="rounded-[1.5rem] border border-smoky-brown/10 bg-white px-6 py-6"
          style={{
            transitionDelay: "0.2s",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-gold">Built for tonight&apos;s crowd</p>
          <p className="mt-3 text-lg font-semibold">Daily specials all week, with later Friday and Saturday hours for the after-work and night-shift run.</p>
          <p className="mt-3 text-sm text-smoky-light">
            Monday {HOURS[0].time} • Friday-Saturday {HOURS[4].time}
          </p>
        </div>

        <div
          className="rounded-[1.5rem] border border-smoky-brown/10 bg-cream px-6 py-6"
          style={{
            transitionDelay: "0.3s",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-gold">Need catering info?</p>
          <p className="mt-3 text-lg font-semibold">Call or email the restaurant directly instead of dropping into the regular order flow.</p>
          <div className="mt-3 space-y-1 text-sm text-smoky-light">
            <a href={BUSINESS.phoneHref} className="block transition-colors hover:text-bbq-red">
              {BUSINESS.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS.cateringEmail}`} className="block transition-colors hover:text-bbq-red">
              {BUSINESS.cateringEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
