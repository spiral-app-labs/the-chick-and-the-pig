"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BEST_SELLERS, GALLERY_IMAGES, SITE_LINKS } from "@/lib/siteData";

export default function FeaturedDishes() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-gold">Popular order picks</p>
            <h2 className="font-heading text-5xl text-smoky-brown sm:text-6xl md:text-7xl">
              WHAT PEOPLE ACTUALLY ORDER
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-smoky-light sm:text-base">
              From fried chicken meals to smoked ribs and Texas Twinkies, the menu has more range
              than a one-note chicken stop. These are the kinds of orders that make the brand easy
              to recognize at a glance.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {GALLERY_IMAGES.map((image) => (
                <div
                  key={image.alt}
                  className="overflow-hidden rounded-[1.75rem] border border-smoky-brown/10 bg-cream"
                >
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url("${image.src}")` }}
                    role="img"
                    aria-label={image.alt}
                  />
                  <div className="px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-gold">
                      From the official site
                    </p>
                    <p className="mt-2 text-sm leading-6 text-smoky-light">{image.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 stagger-children ${isVisible ? "visible" : ""}`}>
            {BEST_SELLERS.map((dish, index) => (
              <div
                key={dish.name}
                className="group rounded-[1.75rem] border border-smoky-brown/10 bg-white p-6 shadow-[0_20px_50px_rgba(62,39,35,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-amber-gold/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-gold">
                      {dish.tag}
                    </span>
                    <h3 className="mt-4 font-heading text-3xl text-smoky-brown">{dish.name}</h3>
                  </div>
                  <span className="rounded-full bg-smoky-brown px-3 py-1 text-sm font-bold text-cream">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-smoky-light">{dish.description}</p>
                <p className="mt-5 border-t border-dashed border-smoky-brown/12 pt-4 text-sm font-semibold text-bbq-red">
                  {index < 2 ? "Weeknight favorite" : "Adds range to the order"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={SITE_LINKS.toast}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-smoky-brown px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-smoky-light"
          >
            Start Pickup Order
          </a>
          <a
            href={SITE_LINKS.fullMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-smoky-brown/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-smoky-brown transition-colors hover:bg-cream"
          >
            View Full Toast Menu
          </a>
        </div>
      </div>
    </section>
  );
}
