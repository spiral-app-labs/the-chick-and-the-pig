"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const menuCategories = [
  {
    name: "Fried Chicken",
    emoji: "🍗",
    items: [
      { name: "2pc Fried Chicken Dinner", desc: "With your choice of side" },
      { name: "4pc Fried Chicken Dinner", desc: "With your choice of side" },
      { name: "8pc Fried Chicken Dinner", desc: "Family size with sides" },
      { name: "12pc Fried Chicken Dinner", desc: "Party size with sides" },
      { name: "Fried Chicken Breast Sandwich", desc: "Pickle, garlic aioli, lettuce, cornbread bun" },
      { name: "Chicken Tenders", desc: "Hand-breaded, golden & crispy" },
    ],
  },
  {
    name: "BBQ & Smoked Meats",
    emoji: "🔥",
    items: [
      { name: "Pulled Pork Sandwich", desc: "Slow-smoked, hand-pulled with your choice of sauce" },
      { name: "Chopped Brisket Sandwich", desc: "Smoky chopped brisket piled high" },
      { name: "½ Slab Baby Back Ribs", desc: "Fall-off-the-bone tender, glazed to perfection" },
      { name: "Full Slab Baby Back Ribs", desc: "A full rack of our signature ribs" },
      { name: "6pc Smoked Chicken Wings", desc: "Jumbo wings, smoked low & slow" },
      { name: "Smoked Sausage", desc: "House-smoked, juicy & flavorful" },
    ],
  },
  {
    name: "Burgers & Dogs",
    emoji: "🍔",
    items: [
      { name: "Burger", desc: "Lettuce, onion, tomato — add bacon $2, cheese $1" },
      { name: "Char Dogs (2pc)", desc: "Chicago style with all the fixings" },
    ],
  },
  {
    name: "Sides",
    emoji: "🥗",
    items: [
      { name: "Mac & Cheese", desc: "Super creamy, homestyle perfection" },
      { name: "Mashed Potatoes", desc: "\"Heavenly\" — our customers' words" },
      { name: "Coleslaw", desc: "Fresh, crunchy, tangy" },
      { name: "Baked Beans", desc: "Slow-cooked with smoky goodness" },
      { name: "Cornbread", desc: "Golden & buttery" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            What We&apos;re Cookin&apos;
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            OUR MENU
          </h2>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 stagger-children ${isVisible ? "visible" : ""}`}>
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all ${
                activeCategory === i
                  ? "bg-smoky-brown text-amber-gold shadow-lg scale-105"
                  : "bg-white text-smoky-brown hover:bg-smoky-brown/10 border border-smoky-brown/10"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-amber-gold/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuCategories[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-cream transition-colors"
              >
                <div className="text-2xl mt-1 group-hover:scale-110 transition-transform">
                  {menuCategories[activeCategory].emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-smoky-brown text-lg group-hover:text-bbq-red transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-smoky-light text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://order.toasttab.com/online/thechickandthepig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-gold hover:bg-yellow-600 text-smoky-brown px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-lg"
          >
            📱 Order Online for Pickup or Delivery
          </a>
        </div>
      </div>
    </section>
  );
}
