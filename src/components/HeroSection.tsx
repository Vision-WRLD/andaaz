import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30884522/pexels-photo-30884522.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Indian jewellery background"
          className="w-full h-full object-cover animate-fadeIn"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 sm:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-2xl">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] text-amber-400 uppercase mb-4 sm:mb-6 animate-fadeInUp">
            Handcrafted Indian Jewellery
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-white leading-tight tracking-wide animate-fadeInUp delay-100">
            Where Heritage
            <br />
            <span className="font-light italic text-amber-200">
              Meets
            </span>{" "}
            Heart
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-lg animate-fadeInUp delay-200">
            Handcrafted Indian jewellery rooted in tradition, made for your
            story. From jhumkas to kundan, each piece is crafted with love
            and made to be cherished forever.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fadeInUp delay-300">
            <Link
              to="/shop"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-amber-700 text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-amber-800 transition-all duration-300"
            >
              Explore Collection
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 border border-white/30 text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-px h-10 sm:h-12 bg-gradient-to-b from-transparent to-white/50 mx-auto" />
        <p className="text-[9px] sm:text-[10px] tracking-widest text-white/50 uppercase mt-2">
          Scroll
        </p>
      </div>
    </section>
  );
}
