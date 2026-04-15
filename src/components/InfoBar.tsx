"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BUSINESS, HOURS } from "@/lib/siteData";

export default function InfoBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`bg-smoky-brown text-cream py-6 ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="flex items-center justify-center gap-3 scroll-animate" style={{ transitionDelay: "0.1s", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
          <span className="text-2xl">📍</span>
          <div>
            <p className="font-semibold text-amber-gold">Visit Us</p>
            <p className="text-sm text-cream/80">{BUSINESS.addressLine1}, Algonquin, IL</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3" style={{ transitionDelay: "0.2s", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
          <span className="text-2xl">🕐</span>
          <div>
            <p className="font-semibold text-amber-gold">Weekly Hours</p>
            <p className="text-sm text-cream/80">{HOURS[0].day} {HOURS[0].time} • Fri-Sat {HOURS[4].time}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3" style={{ transitionDelay: "0.3s", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
          <span className="text-2xl">✉️</span>
          <div>
            <p className="font-semibold text-amber-gold">Call or Email</p>
            <a href={BUSINESS.phoneHref} className="text-sm text-cream/80 hover:text-amber-gold transition-colors">
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
