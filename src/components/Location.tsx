"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BUSINESS, HOURS, SITE_LINKS } from "@/lib/siteData";

export default function Location() {
  const { ref, isVisible } = useScrollAnimation();

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="location" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Come Find Us
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            LOCATION & HOURS
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 stagger-children ${isVisible ? "visible" : ""}`}>
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.7!2d-88.3168!3d42.1716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z1000+N+Main+St+Algonquin+IL!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Chick and The Pig Location"
            />
          </div>

          {/* Hours & Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-amber-gold/10">
            <h3 className="font-heading text-3xl text-smoky-brown mb-6">
              📍 {BUSINESS.addressLine1}
              <br />
              <span className="text-xl text-smoky-light">{BUSINESS.addressLine2}</span>
            </h3>

            <div className="space-y-3 mb-8">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className={`flex justify-between items-center py-2 px-4 rounded-lg transition-colors ${
                    h.day === today
                      ? "bg-amber-gold/10 border border-amber-gold/30"
                      : "hover:bg-cream"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      h.day === today ? "text-amber-gold font-bold" : "text-smoky-brown"
                    }`}
                  >
                    {h.day}
                    {h.day === today && (
                      <span className="ml-2 text-xs bg-amber-gold text-white px-2 py-0.5 rounded-full">
                        TODAY
                      </span>
                    )}
                  </span>
                  <span className="text-smoky-light">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 rounded-2xl bg-cream p-5 text-sm text-smoky-light">
              <p className="font-semibold uppercase tracking-[0.16em] text-smoky-brown">Reach us directly</p>
              <a href={BUSINESS.phoneHref} className="mt-3 block hover:text-bbq-red transition-colors">
                {BUSINESS.phoneDisplay}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="mt-2 block hover:text-bbq-red transition-colors">
                {BUSINESS.email}
              </a>
              <a href={`mailto:${BUSINESS.cateringEmail}`} className="mt-2 block hover:text-bbq-red transition-colors">
                {BUSINESS.cateringEmail}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex-1 bg-smoky-brown text-amber-gold text-center px-6 py-3 rounded-full font-bold tracking-wide transition-all hover:scale-105"
              >
                📞 Call Us
              </a>
              <a
                href={SITE_LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-amber-gold text-smoky-brown text-center px-6 py-3 rounded-full font-bold tracking-wide transition-all hover:scale-105"
              >
                🗺️ Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
