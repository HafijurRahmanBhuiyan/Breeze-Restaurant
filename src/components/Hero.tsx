import React from 'react';
import { Star, ChevronDown, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';
import { restaurantImages } from '../data/images';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantImages.hero.src}
          alt={restaurantImages.hero.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 animate-subtle-zoom"
          loading="eager"
        />
        {/* Layered cinematic gradient overlays for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/75 to-[#0F0F0F]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,15,15,0.7)_100%)]" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 animate-fade-in opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards]">
          <span className="w-6 sm:w-10 h-[1px] bg-[#C9A86A]/70" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-[#DFC288]">
            WELCOME TO BREEZE
          </span>
          <span className="w-6 sm:w-10 h-[1px] bg-[#C9A86A]/70" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance] animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
          A Taste of Elegance in Every Moment
        </h1>

        {/* Supporting text in English and Bangla */}
        <p className="text-base sm:text-lg md:text-xl text-[#E5DDD0] font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed [text-wrap:balance] animate-fade-in-up opacity-0 [animation-delay:450ms] [animation-fill-mode:forwards]">
          <span className="font-bangla font-normal text-[#C9A86A] block sm:inline mb-1 sm:mb-0">
            {businessInfo.banglaName}
          </span>
          <span className="hidden sm:inline"> — </span>
          <span>where exceptional food, warm hospitality, and an inviting atmosphere come together.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 sm:mb-12 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto min-w-[180px] px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] active:bg-[#A9884A] transition-all duration-200 shadow-lg shadow-black/40 cursor-pointer text-center"
          >
            Explore Menu
          </button>
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto min-w-[180px] px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#F4EFEB] bg-transparent hover:bg-white/10 active:bg-white/15 border border-[#C9A86A]/60 hover:border-[#C9A86A] transition-all duration-200 cursor-pointer text-center"
          >
            Reserve a Table
          </button>
        </div>

        {/* Information Row: Ratings & Price Range */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-white/15 text-xs sm:text-sm text-[#D1C7B8] animate-fade-in opacity-0 [animation-delay:750ms] [animation-fill-mode:forwards]">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-[#C9A86A]" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]" />
              ))}
            </div>
            <span className="font-semibold text-white tabular-nums">{businessInfo.googleRating} / 5</span>
            <span className="text-[#A39B8E]">from {businessInfo.totalReviews} Reviews</span>
          </div>

          <span className="hidden sm:inline text-white/30" aria-hidden="true">·</span>

          {/* Price Range */}
          <div className="flex items-center gap-2">
            <span className="text-[#A39B8E]">Price Range:</span>
            <span className="font-medium text-white tabular-nums">{businessInfo.priceRange}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#info"
          className="mt-10 sm:mt-12 text-[#A39B8E] hover:text-[#C9A86A] transition-colors p-2"
          aria-label="Scroll to restaurant details"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
