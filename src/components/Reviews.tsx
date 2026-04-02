"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    text: "The Chick and the Pig approaches barbecue with a playful, almost avant-garde sensibility. Yes, the meat-by-the-pound is the main event — smoky, satisfying, and exactly what you want.",
    source: "Yelp",
    stars: 5,
  },
  {
    text: "We got a pulled pork sandwich with regular bbq sauce, a chopped brisket sandwich with bourbon peach sauce, and some mac n cheese. All of it was great! The sandwiches were overflowing with meat, the mac n cheese was super creamy, and the sauces were on point!",
    source: "DoorDash",
    stars: 5,
  },
  {
    text: "6pc Smoked Chicken Wings & 2pc Fried Chicken Dinner were both really good dinners with Blueberry Sauce & Biscuit Honey Butter! Their Mashed Potato are heavenly!!!! Also, their Vinaigrette Pickles are sssooo yummy!!!",
    source: "DoorDash",
    stars: 5,
  },
  {
    text: "BEST TACO PLACE AROUND BY FAR!!!",
    source: "Yelp",
    stars: 5,
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Don&apos;t Take Our Word For It
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            WHAT PEOPLE SAY
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-amber-gold text-2xl">★</span>
            ))}
            <span className="text-amber-gold/40 text-2xl">★</span>
            <span className="text-smoky-light ml-2 font-bold">4.4 / 5</span>
            <span className="text-smoky-light/60 ml-1">• 210+ reviews</span>
          </div>
        </div>

        {/* Review carousel */}
        <div className={`relative scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="bg-cream rounded-3xl p-8 sm:p-12 shadow-lg border border-amber-gold/10 min-h-[250px] flex flex-col items-center justify-center text-center">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: reviews[current].stars }).map((_, i) => (
                <span key={i} className="text-amber-gold text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-smoky-brown text-lg sm:text-xl leading-relaxed max-w-3xl italic">
              &ldquo;{reviews[current].text}&rdquo;
            </blockquote>
            <p className="mt-6 text-amber-gold font-bold text-sm tracking-wide">
              — {reviews[current].source} Reviewer
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {reviews.map((_, i) => (
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
