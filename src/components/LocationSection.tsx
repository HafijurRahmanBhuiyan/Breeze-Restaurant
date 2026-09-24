import React from 'react';
import { MapPin, Navigation, Phone, Building2, Compass, Clock } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const encodedAddress = encodeURIComponent(
    `${businessInfo.name}, House# 1/C, 1/D, Road# 16, Dhaka 1229, Bangladesh`
  );
  const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const plusCodeUrl = `https://plus.codes/${encodeURIComponent(businessInfo.plusCode)}`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#171513] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C9A86A]">
              VISIT OUR VENUE
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Find Breeze Restaurant
          </h2>
          <p className="text-sm sm:text-base text-[#BFB5A7] font-light max-w-xl mx-auto leading-relaxed">
            Conveniently situated in Dhaka 1229. We look forward to welcoming you for an exceptional dining experience.
          </p>
        </div>

        {/* Two-Column Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#1F1C19] border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-1">
                  {businessInfo.name}
                </h3>
                <p className="text-sm font-bangla text-[#C9A86A]">
                  {businessInfo.banglaName}
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8173] block font-semibold">
                      STREET ADDRESS
                    </span>
                    <p className="text-white font-medium mt-0.5">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8173] block font-semibold">
                      LOCATED IN
                    </span>
                    <p className="text-white font-medium mt-0.5">
                      {businessInfo.locatedIn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8173] block font-semibold">
                      GOOGLE PLUS CODE
                    </span>
                    <a
                      href={plusCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9A86A] hover:underline font-mono text-xs mt-0.5 inline-block"
                    >
                      {businessInfo.plusCode}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8173] block font-semibold">
                      OPERATING HOURS
                    </span>
                    <p className="text-white font-medium mt-0.5">
                      {businessInfo.openingHours.display} (Daily)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8173] block font-semibold">
                      TELEPHONE
                    </span>
                    <a
                      href={`tel:${businessInfo.phoneClean}`}
                      className="text-white hover:text-[#C9A86A] font-semibold mt-0.5 inline-block"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] transition-colors text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white border border-white/20 hover:border-white transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Frame with Legitimate Google Map Embed */}
          <div className="lg:col-span-7 bg-[#1F1C19] border border-white/10 overflow-hidden relative min-h-[380px] lg:min-h-[440px] flex flex-col">
            <iframe
              title="Breeze Restaurant Location Map"
              src="https://maps.google.com/maps?q=RCM9%2BJ6+Dhaka&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[340px] flex-1 border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:filter-none transition-all duration-300"
              loading="lazy"
              allowFullScreen
            />
            <div className="p-3 bg-[#171513] border-t border-white/10 flex items-center justify-between text-xs text-[#8A8173]">
              <span>Plus Code: {businessInfo.plusCode} · Star Thai Aluminium</span>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A86A] hover:underline"
              >
                Open in Full Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
