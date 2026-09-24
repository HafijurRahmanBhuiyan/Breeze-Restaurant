import React from 'react';
import { Utensils, Car, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

export const ServicesSection: React.FC = () => {
  const serviceIcons = {
    'dine-in': Utensils,
    'drive-through': Car,
    'delivery': ShieldCheck,
  };

  return (
    <section className="py-16 sm:py-20 bg-[#121110] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C9A86A] block mb-2">
            CONVENIENT SERVICE OPTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            How You Can Enjoy Breeze
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessInfo.services.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Utensils;
            return (
              <div
                key={service.id}
                className="bg-[#1A1816] border border-white/10 p-7 flex items-start gap-4 hover:border-[#C9A86A]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-sm bg-[#24211D] border border-[#C9A86A]/30 flex items-center justify-center shrink-0 text-[#C9A86A]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BDB2A3] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
