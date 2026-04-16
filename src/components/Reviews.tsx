"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { REVIEWS } from "@/lib/siteData";

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Recent delivery feedback</p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            WHAT COMES BACK IN THE ORDERS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-smoky-light">
            Recent DoorDash feedback from real orders, with the food that regulars mention most.
          </p>
        </div>

        <div className={`relative scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-lg border border-amber-gold/10 min-h-[250px] flex flex-col items-center justify-center text-center">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-amber-gold text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-smoky-brown text-lg sm:text-xl leading-relaxed max-w-3xl italic">
              &ldquo;{REVIEWS[current].quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-amber-gold font-bold text-sm tracking-wide">
              {REVIEWS[current].source} • {REVIEWS[current].date}
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current
                    ? "bg-amber-gold scale-125"
                    : "bg-smoky-brown/20 hover:bg-smoky-brown/40"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
