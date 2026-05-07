import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--footer-bg)", color: "var(--text-muted)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 leading-tight">
              <span className="block text-2xl font-light tracking-[0.25em] text-white">Ethnic</span>
              <span className="block text-2xl font-light tracking-[0.25em] text-white">Andaaz</span>
            </div>
            <p className="text-sm leading-relaxed">
              A woman-owned Indian jewellery studio crafting timeless pieces that
              honour heritage, celebrate culture, and carry love through
              generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "/shop" },
                { label: "Our Story", to: "/history" },
                { label: "Track Order", to: "/track-order" },
                { label: "Favorites", to: "/favorites" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              {["Rings", "Earrings", "Necklaces", "Bracelets"].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/shop"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>info@ethnicandaaz.com</li>
              <li>+1 (647) 867-6900</li>
              <li>
                4 Cuddles Ct
                <br />
                Bolton, ON L7E 4K8
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(232,224,214,0.15)" }}>
          <p className="text-xs tracking-wider">
            © 2026 Ethnic Andaaz Jewellery. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs tracking-wider">
            <span
              className="cursor-pointer transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Privacy Policy
            </span>
            <span
              className="cursor-pointer transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
