import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-[#BFB5A7] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1C1A18] border border-[#C9A86A]/40 flex items-center justify-center text-[#C9A86A]">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-white tracking-wide">
                  Breeze Restaurant
                </span>
                <span className="block text-xs font-bangla text-[#C9A86A] tracking-wider">
                  {businessInfo.banglaName}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#9E9385] font-light leading-relaxed max-w-sm">
              A fine dining restaurant in Dhaka delivering exceptional cuisine, welcoming hospitality,
              and a chic atmosphere tailored for families, couples, friends, and casual meetings.
            </p>

            <div className="pt-2 text-xs text-[#8C8274]">
              <span>Category: </span>
              <strong className="text-white font-medium">{businessInfo.category}</strong>
              <span className="mx-2">·</span>
              <span>Rating: </span>
              <strong className="text-[#C9A86A] font-medium">{businessInfo.googleRating} / 5 ({businessInfo.totalReviews} Reviews)</strong>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-[#E5DDD2] font-semibold block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A86A] transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#E5DDD2] font-semibold block mb-4">
              RESTAURANT CONTACT
            </span>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
                <span>
                  {businessInfo.address}
                  <span className="block text-xs text-[#8C8274] mt-0.5">
                    Located in {businessInfo.locatedIn}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <a
                  href={`tel:${businessInfo.phoneClean}`}
                  className="hover:text-[#C9A86A] transition-colors font-medium text-white"
                >
                  {businessInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <span>
                  {businessInfo.openingHours.display} (Daily)
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#8C8274] block mb-1">
                Plus Code
              </span>
              <span className="font-mono text-xs text-white bg-[#1A1816] px-2 py-1 border border-white/10">
                {businessInfo.plusCode}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8274]">
          <p>
            © 2026 Breeze Restaurant. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Dine-in · Drive-through · Delivery</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C9A86A] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
