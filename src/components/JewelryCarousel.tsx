import { useState, useEffect, useCallback } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 4;
const TOTAL_PAGES = 3;
const AUTO_SCROLL_INTERVAL = 3000;

export default function JewelryCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextPage, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [nextPage]);

  const currentProducts = products.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "var(--accent-gold)" }}>
          Curated For You
        </p>
        <h2 className="text-3xl sm:text-4xl font-light tracking-wide" style={{ color: "var(--text-primary)" }}>
          Featured Pieces
        </h2>
        <div className="w-16 h-px mx-auto mt-6" style={{ backgroundColor: "var(--accent-gold)" }} />
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 shadow-lg rounded-full p-2 transition-colors hidden sm:block"
          style={{ backgroundColor: "var(--bg-card)", color: "var(--text-secondary)" }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 shadow-lg rounded-full p-2 transition-colors hidden sm:block"
          style={{ backgroundColor: "var(--bg-card)", color: "var(--text-secondary)" }}
        >
          <ChevronRight size={20} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Page Indicators */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentPage ? "w-8 h-2" : "w-2 h-2"
            }`}
            style={{
              backgroundColor: i === currentPage ? "var(--accent-gold)" : "var(--border-warm)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
