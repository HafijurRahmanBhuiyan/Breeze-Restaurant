import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F0F]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
            aria-label="Breeze Restaurant Home"
          >
            <div className="w-9 h-9 rounded-full bg-[#1C1A18] border border-[#C9A86A]/40 flex items-center justify-center text-[#C9A86A] transition-transform duration-300 group-hover:scale-105">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-serif font-bold tracking-wide text-white group-hover:text-[#C9A86A] transition-colors">
                Breeze Restaurant
              </span>
              <span className="block text-xs font-bangla text-[#C9A86A] -mt-1 font-medium tracking-wider">
                {businessInfo.banglaName}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean typography, no pills) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#E8E2D9]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1 hover:text-[#C9A86A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A86A] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A86A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onReserveClick}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] active:bg-[#A9884A] rounded-none transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A86A] cursor-pointer"
            >
              Reserve a Table
            </button>

            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="sm:hidden p-2 text-[#C9A86A] hover:text-white transition-colors"
              aria-label={`Call ${businessInfo.phone}`}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E8E2D9] hover:text-[#C9A86A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#121110] border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-serif tracking-wide text-[#E8E2D9] hover:text-[#C9A86A] py-1 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] transition-colors"
            >
              Reserve a Table
            </button>
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs text-[#E8E2D9] hover:text-[#C9A86A] border border-white/15 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Direct Call: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
