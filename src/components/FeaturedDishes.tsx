"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const dishes = [
  {
    name: "Fried Chicken Dinner",
    desc: "Golden, crispy fried chicken served with your choice of homemade sides",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
    tag: "Fan Favorite",
  },
  {
    name: "Smoked Brisket",
    desc: "Low and slow smoked brisket, chopped and piled high with our signature sauce",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",
    tag: "Pitmaster's Pick",
  },
  {
    name: "Baby Back Ribs",
    desc: "Fall-off-the-bone tender ribs glazed with Chef Mat's handcrafted BBQ sauce",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tag: "Best Seller",
  },
  {
    name: "Smoked Wings",
    desc: "6pc jumbo wings smoked to perfection — try them with Blueberry BBQ!",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80",
    tag: "Must Try",
  },
  {
    name: "Mac & Cheese",
    desc: '"Super creamy" — the perfect sidekick to any BBQ plate',
    image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&q=80",
    tag: "Comfort Classic",
  },
  {
    name: "Pulled Pork Sandwich",
    desc: "Tender pulled pork piled on a bun with your choice of Chef Mat's sauces",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    tag: "Crowd Pleaser",
  },
];

export default function FeaturedDishes() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="text-amber-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            From Our Kitchen
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-smoky-brown">
            FEATURED DISHES
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger-children ${isVisible ? "visible" : ""}`}>
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="tilt-card group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smoky-brown/80 via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="glass-dark text-amber-gold text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {dish.tag}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-amber-gold/0 group-hover:bg-amber-gold/10 transition-all duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-heading text-2xl mb-1">{dish.name}</h3>
                <p className="text-cream/80 text-sm">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 scroll-animate ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
          <a
            href="https://order.toasttab.com/online/thechickandthepig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bbq-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-xl"
          >
            🔥 Order Your Favorites
          </a>
        </div>
      </div>
    </section>
  );
}
