import React from 'react';
import { Sparkles, Users, HeartHandshake, Coffee } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';
import { restaurantImages } from '../data/images';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F9F6F0] text-[#221F1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Editorial Frames */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 mx-auto max-w-lg lg:max-w-none">
              {/* Main Feature Image */}
              <div className="relative overflow-hidden shadow-2xl border-4 border-white aspect-4/3">
                <img
                  src={restaurantImages.hero.src}
                  alt="Breeze Restaurant interior and dining arrangement"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Offset Secondary Image overlay */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 aspect-square overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={restaurantImages.coffee.src}
                  alt="Specialty coffee and warm hospitality at Breeze"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-serif italic tracking-wide">
                    Artisan Coffee & Warm Hospitality
                  </span>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-4 -left-4 bg-[#1C1A18] text-[#C9A86A] p-4 shadow-xl border border-[#C9A86A]/30">
                <span className="block text-[10px] uppercase tracking-widest font-semibold text-[#A9884A]">
                  LOCATION
                </span>
                <span className="text-xs font-serif font-bold text-white">
                  Dhaka 1229
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Factual Highlights */}
          <div className="lg:col-span-6 lg:pl-4">
            {/* Small decorative label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9884A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A9884A]">
                BREEZE RESTAURANT
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#171513] leading-tight mb-6 [text-wrap:balance]">
              An Experience Beyond the Plate
            </h2>

            {/* Bangla subtitle */}
            <p className="text-base sm:text-lg font-bangla text-[#8C6D37] font-medium mb-4">
              {businessInfo.banglaName} — ঢাকার একটি আধুনিক ফাইন ডাইনিং অভিজ্ঞতা
            </p>

            {/* Factual Description */}
            <div className="space-y-4 text-[#4A453F] leading-relaxed text-sm sm:text-base font-light">
              <p>
                Breeze Restaurant is a fine dining restaurant situated at{' '}
                <strong className="font-semibold text-[#171513]">House# 1/C, 1/D, Road# 16, Dhaka 1229</strong>,
                located within <span className="text-[#171513] font-medium">{businessInfo.locatedIn}</span>.
              </p>
              <p>
                Celebrated by guests for its stylish and chic interior, attractive décor, and comfortable seating,
                the restaurant provides a welcoming atmosphere attended by friendly and courteous staff.
              </p>
              <p>
                Whether you are organizing a meaningful family gathering, a relaxed evening for couples, an enjoyable
                catch-up with friends, or an informal casual meeting, Breeze offers a thoughtful setting crafted for
                unhurried conversations and memorable dining.
              </p>
            </div>

            {/* 4 Feature Highlights directly based on verified feedback */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E3DCD1]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#EFE8DC] text-[#8C6D37] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#171513]">
                    Stylish & Chic Décor
                  </h3>
                  <p className="text-xs text-[#635D55] mt-0.5">
                    Thoughtfully designed lighting and comfortable seating.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#EFE8DC] text-[#8C6D37] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#171513]">
                    Welcoming Staff
                  </h3>
                  <p className="text-xs text-[#635D55] mt-0.5">
                    Attentive service and warm dining hospitality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#EFE8DC] text-[#8C6D37] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#171513]">
                    Families & Friends
                  </h3>
                  <p className="text-xs text-[#635D55] mt-0.5">
                    Spacious tables for group gatherings and platters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#EFE8DC] text-[#8C6D37] flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#171513]">
                    Couples & Meetings
                  </h3>
                  <p className="text-xs text-[#635D55] mt-0.5">
                    Inviting corners for relaxed dates and casual work talks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
