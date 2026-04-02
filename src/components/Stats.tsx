"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 9, suffix: "", label: "Signature Sauces", icon: "🍯" },
  { value: 210, suffix: "+", label: "Google Reviews", icon: "⭐" },
  { value: 7, suffix: "", label: "Daily Specials", icon: "📅" },
  { value: 4, suffix: ".4★", label: "Star Rating", icon: "🏆" },
];

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-smoky-brown/85" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                {stat.icon}
              </div>
              <div className="font-heading text-5xl sm:text-6xl text-amber-gold">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-cream/70 mt-2 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
