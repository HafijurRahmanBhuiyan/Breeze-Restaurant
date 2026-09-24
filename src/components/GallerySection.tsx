import React, { useState, useEffect, useCallback } from 'react';
import { galleryItems, GalleryItem } from '../data/images';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    'All',
    'Food & Drink',
    'Interior',
    'Pizza',
    'Desserts',
    'Coffee',
    'Vibe',
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0F0F0F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C9A86A]">
              VISUAL ATMOSPHERE
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            A Taste of the Breeze
          </h2>
          <p className="text-sm sm:text-base text-[#BFB5A7] font-light max-w-xl mx-auto leading-relaxed">
            Immerse yourself in the culinary presentations, ambiance, and warmth that characterize the Breeze dining environment.
          </p>
        </div>

        {/* Filter Controls (Segmented clean buttons) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-1.5 no-scrollbar">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-[#C9A86A] text-black border-[#C9A86A] shadow-md'
                    : 'bg-[#181614] text-[#A69C8E] border-white/10 hover:border-[#C9A86A]/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative overflow-hidden bg-[#181614] border border-white/10 aspect-4/3 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark overlay & view indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C9A86A] bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center">
                    <Eye className="w-4 h-4 text-[#C9A86A]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C4B9AA] mt-1 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative transparency note */}
        <div className="mt-8 text-center text-xs text-[#7A7266] italic">
          Visual presentations curated to illustrate dishes and atmospheric dining experiences at Breeze Restaurant.
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Controls Bar */}
          <div
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs text-[#8E8476] font-mono tabular-nums mr-2">
              {lightboxIndex + 1} / {filteredItems.length}
            </span>
            <button
              onClick={handleCloseLightbox}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/90 text-white border border-white/15 transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden border border-white/15 shadow-2xl max-h-[70vh]">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-[11px] uppercase tracking-widest text-[#C9A86A] font-semibold block mb-1">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#BFB5A7] mt-1 font-light">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
