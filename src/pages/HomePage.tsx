import HeroSection from "../components/HeroSection";
import JewelryCarousel from "../components/JewelryCarousel";
import { Link } from "react-router-dom";
import { ArrowRight, Gem, Shield, Truck } from "lucide-react";
import { Reveal } from "../hooks/useScrollReveal";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      {/* Jewelry Carousel Section */}
      <JewelryCarousel />

      {/* Features Section */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: "var(--bg-sidebar)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {[
              { Icon: Gem, title: "Ethically Sourced", desc: "Every gemstone and material is ethically sourced, ensuring beauty you can feel good about." },
              { Icon: Shield, title: "Lifetime Warranty", desc: "Each piece comes with a lifetime warranty. Our commitment to quality is unwavering." },
              { Icon: Truck, title: "Free Shipping", desc: "Complimentary insured shipping on all orders. Delivered safely to your doorstep." },
            ].map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="text-center p-6 sm:p-8">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 flex items-center justify-center rounded-full animate-pulseGlow"
                    style={{ border: `1px solid var(--accent-gold)` }}
                  >
                    <Icon size={20} className="sm:w-[22px] sm:h-[22px]" style={{ color: "var(--accent-gold)" }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-light tracking-wide mb-2 sm:mb-3" style={{ color: "var(--text-primary)" }}>
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <Reveal>
        <section className="py-16 sm:py-24 relative overflow-hidden" style={{ backgroundColor: "var(--footer-bg)" }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl" style={{ backgroundColor: "var(--accent-gold-light)" }} />
            <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl" style={{ backgroundColor: "var(--accent-gold)" }} />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4" style={{ color: "var(--accent-gold-light)" }}>
              New Arrival
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-wide mb-4 sm:mb-6">
              The Bridal Collection
            </h2>
            <p className="text-sm sm:text-base font-light leading-relaxed mb-6 sm:mb-8" style={{ color: "var(--text-muted)" }}>
              Discover our newest bridal collection — kundan necklaces, polki
              bangles, and maang tikkas handcrafted for your most special day.
              Tradition made timeless.
            </p>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 text-white text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover-lift"
              style={{ backgroundColor: "var(--accent-gold)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-gold)")}
            >
              View Collection
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
