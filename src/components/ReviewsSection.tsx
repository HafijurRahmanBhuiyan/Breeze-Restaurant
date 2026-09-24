import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink } from 'lucide-react';
import { guestReviews, businessInfo } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [expandedReviews, setExpandedReviews] = useState(false);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F9F6F0] text-[#1E1B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#A9884A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D37]">
              CUSTOMER EXPERIENCES
            </span>
            <span className="w-8 h-[1px] bg-[#A9884A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#171513] mb-4 [text-wrap:balance]">
            What Our Guests Say
          </h2>
          <p className="text-sm sm:text-base text-[#575047] font-light max-w-xl mx-auto leading-relaxed">
            Honest guest feedback reflecting the dining atmosphere, service, decor, and culinary experiences at Breeze Restaurant.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="max-w-xl mx-auto bg-white border border-[#E5DDD2] p-8 shadow-sm mb-16 text-center">
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl font-serif font-bold text-[#171513] tabular-nums mb-2">
              {businessInfo.googleRating}
            </div>

            <div className="flex items-center text-[#C9A86A] gap-1 mb-2" aria-label="Rating 4.4 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? 'fill-[#C9A86A] text-[#C9A86A]'
                      : 'fill-[#C9A86A]/40 text-[#C9A86A]'
                  }`}
                />
              ))}
            </div>

            <p className="text-sm font-semibold text-[#171513] tracking-wide">
              {businessInfo.totalReviews} Total Verified Reviews
            </p>

            <p className="text-xs text-[#7A7266] mt-1">
              Google Customer Rating Summary for Breeze Restaurant
            </p>

            <div className="mt-4 pt-4 border-t border-[#F0E9DF] flex flex-wrap items-center justify-center gap-4 text-xs text-[#5C554B]">
              <span className="inline-flex items-center gap-1.5 text-[#2E6B3C]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Authentic Patron Feedback
              </span>
              <span>·</span>
              <span>Price Range: {businessInfo.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {guestReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E8E1D5] p-6 sm:p-8 shadow-xs flex flex-col justify-between relative hover:border-[#8C6D37]/50 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C6D37] block">
                      {rev.highlightTag}
                    </span>
                    <span className="text-xs text-[#827A6E]">
                      {rev.timeContext}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#C9A86A] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-[#C9A86A] text-[#C9A86A]'
                            : 'text-[#DCD5C9]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <MessageSquareQuote className="w-6 h-6 text-[#D5CBC0]/50 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-sm sm:text-base text-[#423C35] font-light leading-relaxed pl-6">
                    {rev.reviewText}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4EFE7] flex items-center justify-between text-xs text-[#8C8377]">
                <span className="font-medium text-[#171513]">
                  Guest Feedback Record
                </span>
                <span className="italic">
                  Dhaka Dining
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Notice & Google Search Button */}
        <div className="text-center mt-12">
          <p className="text-xs text-[#7A7266] max-w-xl mx-auto mb-4">
            Guest reviews are shared to reflect genuine patron experiences regarding atmosphere, value, service, and menu selections.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Breeze+Restaurant+Dhaka+House+1C+1D+Road+16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#171513] border border-[#171513] hover:bg-[#171513] hover:text-white transition-colors"
          >
            <span>Read More Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
