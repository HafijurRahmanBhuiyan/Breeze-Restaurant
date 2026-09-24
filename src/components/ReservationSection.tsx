import React from 'react';
import { Phone, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';
import { restaurantImages } from '../data/images';

interface ReservationSectionProps {
  onScrollToContact: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onScrollToContact }) => {
  return (
    <section id="reserve" className="relative py-24 lg:py-32 bg-[#0C0B0A] text-white overflow-hidden">
      {/* Background with measured cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantImages.hero.src}
          alt="Breeze Restaurant table setting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/85 to-[#0C0B0A]/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C9A86A]">
            TABLE RESERVATIONS
          </span>
          <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight mb-6 [text-wrap:balance]">
          Your Table Awaits
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#E0D8CB] font-light max-w-2xl mx-auto mb-10 leading-relaxed [text-wrap:balance]">
          Planning a family gathering, date, casual meeting, or dinner with friends? Get in touch with Breeze Restaurant.
        </p>

        {/* Hours & Contact summary bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 py-3 px-6 bg-black/60 border border-white/15 backdrop-blur-md mb-10 text-xs sm:text-sm text-[#C4B9AA]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C9A86A]" />
            <span>Open Hours: {businessInfo.openingHours.display}</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C9A86A]" />
            <span>{businessInfo.openingHours.days}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`tel:${businessInfo.phoneClean}`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] active:bg-[#A9884A] transition-all shadow-xl shadow-black/50"
          >
            <Phone className="w-4 h-4" />
            <span>Call {businessInfo.phone}</span>
          </a>

          <button
            onClick={onScrollToContact}
            className="w-full sm:w-auto flex-1 px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
          >
            Inquire Online
          </button>
        </div>

        {/* Authoritative Booking Note */}
        <p className="text-xs text-[#8A8173] mt-6 max-w-lg mx-auto italic">
          For guaranteed immediate table confirmation or large gatherings, telephone reservation at {businessInfo.phone} is directly recommended.
        </p>
      </div>
    </section>
  );
};
