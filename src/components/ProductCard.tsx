import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favored = isFavorite(product.id);

  return (
    <div className="group relative rounded-sm overflow-hidden transition-all duration-500 hover-lift" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-warm)" }}>
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden" style={{ backgroundColor: "var(--bg-sidebar)" }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(product)}
        className="absolute top-3 right-3 p-2 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: "rgba(255,253,249,0.85)" }}
      >
        <Heart
          size={18}
          className={`transition-colors duration-300 ${
            favored ? "fill-red-500 text-red-500" : ""
          }`}
          style={{ color: favored ? undefined : "var(--text-muted)" }}
        />
      </button>

      {/* Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--accent-gold)" }}>
            {product.category}
          </p>
          <h3 className="font-light text-base tracking-wide" style={{ color: "var(--text-primary)" }}>
            {product.name}
          </h3>
          <p className="font-medium mt-1" style={{ color: "var(--text-secondary)" }}>
            ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </Link>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 text-white text-xs tracking-widest uppercase transition-all duration-300 rounded-sm"
          style={{ backgroundColor: "var(--btn-primary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--btn-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--btn-primary)")}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
