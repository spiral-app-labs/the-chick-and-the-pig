"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const specials = [
  { day: "Monday", item: "Pulled Pork Sandwich", price: "$9", emoji: "🐖", desc: "+ side + drink" },
  { day: "Tuesday", item: "Fried Chicken Sandwich", price: "$7", emoji: "🍗", desc: "Pickle, garlic aioli, lettuce, cornbread bun + side + drink" },
  { day: "Wednesday", item: "Burger", price: "$10", emoji: "🍔", desc: "Lettuce, onion, tomato + side + drink" },
  { day: "Thursday", item: "2 Char Dogs", price: "$7", emoji: "🌭", desc: "Chicago style + side + drink" },
  { day: "Friday", item: "Chopped Brisket Sandwich", price: "$10", emoji: "🥩", desc: "+ side + drink" },
  { day: "Saturday", item: "6pc Jumbo Wings", price: "$8", emoji: "🍗", desc: "+ side + drink" },
  { day: "Sunday", item: "½ Slab Ribs", price: "$18", emoji: "🔥", desc: "+ side + drink" },
];

export default function DailySpecials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="specials" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-bbq-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Something Special Every Day
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            DAILY SPECIALS
          </h2>
          <p className="text-smoky-light mt-4 max-w-2xl mx-auto">
            Every day of the week, we&apos;ve got a deal that&apos;ll make you smile. 
            Upgrade any meal to Deluxe for just $3!
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children ${isVisible ? "visible" : ""}`}>
          {specials.map((special) => (
            <div
              key={special.day}
              className="tilt-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-gold/10 hover:border-amber-gold/30 cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {special.emoji}
              </div>
              <p className="text-amber-gold font-bold text-xs tracking-[0.2em] uppercase">
                {special.day}
              </p>
              <h3 className="font-heading text-2xl text-smoky-brown mt-1 mb-2">
                {special.item}
              </h3>
              <p className="text-smoky-light text-sm mb-3">{special.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-heading text-bbq-red">
                  {special.price}
                </span>
                <a
                  href="https://order.toasttab.com/online/thechickandthepig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-gold/10 text-amber-gold hover:bg-amber-gold hover:text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all"
                >
                  ORDER
                </a>
              </div>
            </div>
          ))}

          {/* Deluxe upgrade card */}
          <div className="tilt-card bg-gradient-to-br from-amber-gold to-yellow-600 rounded-2xl p-6 shadow-lg text-white">
            <div className="text-4xl mb-3">⭐</div>
            <p className="font-bold text-xs tracking-[0.2em] uppercase text-white/80">
              UPGRADE
            </p>
            <h3 className="font-heading text-2xl mt-1 mb-2">GO DELUXE</h3>
            <p className="text-white/90 text-sm mb-3">
              Add 4oz beans, 4oz slaw & 2oz pickles to any special
            </p>
            <span className="text-3xl font-heading">+$3</span>
          </div>
        </div>
      </div>
    </section>
  );
}
