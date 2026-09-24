import React from 'react';
import { Users2, Heart, MessageCircle, Briefcase, ArrowUpRight } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

interface OccasionsProps {
  onReserveClick: () => void;
}

export const OccasionsSection: React.FC<OccasionsProps> = ({ onReserveClick }) => {
  const occasionIcons = {
    family: Users2,
    couples: Heart,
    friends: MessageCircle,
    meetings: Briefcase,
  };

  return (
    <section id="experience" className="py-20 lg:py-24 bg-[#0F0F0F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A86A]/70" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C9A86A]">
              THE DINING EXPERIENCE
            </span>
            <span className="w-6 h-[1px] bg-[#C9A86A]/70" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Made for Every Occasion
          </h2>
          <p className="text-sm sm:text-base text-[#BFB5A7] font-light leading-relaxed">
            From lively shared celebrations to quiet romantic moments, Breeze Restaurant is designed
            with versatile spaces that adapt to the moments that matter.
          </p>
        </div>

        {/* 4 Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessInfo.occasions.map((item, index) => {
            const Icon = occasionIcons[item.id as keyof typeof occasionIcons] || Users2;
            return (
              <div
                key={item.id}
                className="group relative bg-[#171513] border border-white/10 hover:border-[#C9A86A]/60 p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#221F1C] border border-[#C9A86A]/30 flex items-center justify-center text-[#C9A86A] group-hover:scale-105 group-hover:bg-[#C9A86A] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#7D7468] tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#C9A86A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#BFB5A7] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4">
                  <p className="text-xs text-[#8A8173] italic">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action callout banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#181614] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-serif font-semibold text-white">
              Planning a visit with loved ones or colleagues?
            </h4>
            <p className="text-xs sm:text-sm text-[#A89E90] mt-1">
              Contact our hospitality team directly to reserve comfortable seating for your group.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onReserveClick}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] transition-colors cursor-pointer"
            >
              Reserve a Table
            </button>
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white border border-white/20 hover:border-white transition-colors"
            >
              Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
