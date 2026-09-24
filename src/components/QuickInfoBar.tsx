import React from 'react';
import { MapPin, Clock, Banknote, Phone } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

export const QuickInfoBar: React.FC = () => {
  const items = [
    {
      icon: MapPin,
      label: 'Location',
      primary: 'House# 1/C, 1/D, Road# 16',
      secondary: 'Dhaka 1229',
      sub: businessInfo.locatedIn,
      action: '#location',
      isLink: true,
    },
    {
      icon: Clock,
      label: 'Opening Hours',
      primary: '12:00 PM — 11:00 PM',
      secondary: 'Open Daily for Guests',
      sub: 'Dine-in & Takeaway',
      isLink: false,
    },
    {
      icon: Banknote,
      label: 'Price Range',
      primary: '৳200 — ৳1,200',
      secondary: 'Per Person',
      sub: 'Fine Dining Value',
      isLink: false,
    },
    {
      icon: Phone,
      label: 'Direct Contact',
      primary: businessInfo.phone,
      secondary: 'Reservations & Enquiries',
      sub: 'Click to Call Directly',
      action: `tel:${businessInfo.phoneClean}`,
      isLink: true,
      external: true,
    },
  ];

  return (
    <div id="info" className="relative z-20 bg-[#161412] border-y border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-start gap-4 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors group">
                <div className="w-10 h-10 rounded-sm bg-[#221F1C] border border-[#C9A86A]/30 flex items-center justify-center shrink-0 text-[#C9A86A] group-hover:border-[#C9A86A] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] uppercase tracking-widest text-[#9C9284] block font-medium">
                    {item.label}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white tracking-wide truncate group-hover:text-[#C9A86A] transition-colors">
                    {item.primary}
                  </p>
                  <p className="text-xs text-[#BFB5A7] mt-0.5">
                    {item.secondary}
                  </p>
                </div>
              </div>
            );

            if (item.isLink && item.action) {
              return (
                <a
                  key={index}
                  href={item.action}
                  target={item.external ? undefined : undefined}
                  className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A86A]"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
