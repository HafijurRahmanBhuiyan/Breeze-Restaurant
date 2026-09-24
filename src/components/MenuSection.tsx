import React, { useState } from 'react';
import { menuItems, MenuItem, businessInfo } from '../data/restaurantData';
import { restaurantImages } from '../data/images';
import { Sparkles, Utensils, Info, Check } from 'lucide-react';

interface MenuSectionProps {
  onReserveClick: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onReserveClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAllItems, setShowAllItems] = useState(false);
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const categories = [
    'All',
    'Popular',
    'Mains',
    'Pizza',
    'Burgers & Sandwiches',
    'Appetizers & Soups',
    'Desserts',
    'Drinks',
  ];

  const filteredItems = menuItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  const getImageForItem = (item: MenuItem) => {
    if (item.imageKey && restaurantImages[item.imageKey as keyof typeof restaurantImages]) {
      return restaurantImages[item.imageKey as keyof typeof restaurantImages].src;
    }
    return null;
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F2] text-[#1E1B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#A9884A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D37]">
              DELICIOUS SELECTIONS
            </span>
            <span className="w-8 h-[1px] bg-[#A9884A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#171513] mb-4 [text-wrap:balance]">
            Our Menu
          </h2>
          <p className="text-base sm:text-lg text-[#5A534B] font-light leading-relaxed">
            Discover dishes worth coming back for.
          </p>
          <p className="text-xs text-[#877E73] mt-2 italic">
            Price range: {businessInfo.priceRange}. Prices listed where available from verified customer receipts and menu records.
          </p>
        </div>

        {/* Category Tabs (Segmented controls) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-1.5 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAllItems(false);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-[#171513] text-[#FAF7F2] border-[#171513] shadow-md'
                    : 'bg-white/80 text-[#5A534B] border-[#E5DED3] hover:border-[#8C6D37] hover:text-[#171513]'
                }`}
              >
                {cat === 'Popular' ? 'Popular Highlights' : cat}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedItems.map((item) => {
            const itemImg = getImageForItem(item);
            return (
              <div
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="group bg-white border border-[#E8E1D5] hover:border-[#8C6D37]/60 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col sm:flex-row overflow-hidden"
              >
                {/* Image Thumbnail */}
                <div className="sm:w-44 md:w-40 lg:w-48 h-48 sm:h-auto shrink-0 relative overflow-hidden bg-[#1C1A18]">
                  {itemImg ? (
                    <img
                      src={itemImg}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#2A2724] text-[#8C8377]">
                      <Utensils className="w-8 h-8 opacity-40" />
                    </div>
                  )}
                  {item.highlight && (
                    <span className="absolute top-2 left-2 text-[10px] uppercase font-semibold text-[#171513] tracking-wider bg-[#C9A86A] px-2 py-0.5 shadow-sm">
                      Featured
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#171513] group-hover:text-[#8C6D37] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      {item.priceText && (
                        <span className="font-serif font-bold text-[#8C6D37] text-base sm:text-lg tabular-nums shrink-0">
                          {item.priceText}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#5C554D] font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#F2ECE3] text-[11px] text-[#8C8377]">
                    <span className="uppercase tracking-wider font-medium">
                      {item.category}
                    </span>
                    <span className="text-[#8C6D37] font-medium group-hover:underline inline-flex items-center gap-1">
                      View Details ↗
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Full Menu Trigger */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {filteredItems.length > 8 && !showAllItems && (
            <button
              onClick={() => setShowAllItems(true)}
              className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#171513] hover:bg-[#2C2723] transition-colors cursor-pointer"
            >
              View Full Menu ({filteredItems.length} Items)
            </button>
          )}

          {showAllItems && (
            <button
              onClick={() => setShowAllItems(false)}
              className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-[#5A534B] border border-[#D5CBC0] hover:text-[#171513] transition-colors cursor-pointer"
            >
              Show Fewer Items
            </button>
          )}

          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] transition-colors cursor-pointer"
          >
            Reserve a Table for Dining
          </button>
        </div>
      </div>

      {/* Item Detail Modal */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FAF7F2] border border-[#DCD3C7] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#1E1B18]">
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-4 right-4 text-[#8C8377] hover:text-[#171513] text-xl font-bold p-1 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {getImageForItem(activeItemModal) && (
              <div className="aspect-16/9 overflow-hidden mb-5 border border-[#E0D7CB]">
                <img
                  src={getImageForItem(activeItemModal)!}
                  alt={activeItemModal.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-2xl font-serif font-bold text-[#171513]">
                {activeItemModal.name}
              </h3>
              {activeItemModal.priceText && (
                <span className="text-xl font-serif font-bold text-[#8C6D37] tabular-nums">
                  {activeItemModal.priceText}
                </span>
              )}
            </div>

            <p className="text-xs uppercase tracking-widest text-[#8C8377] font-semibold mb-3">
              Category: {activeItemModal.category}
            </p>

            <p className="text-sm text-[#4E473F] leading-relaxed mb-6 font-light">
              {activeItemModal.description}
            </p>

            <div className="p-3 bg-[#EFE8DC] text-xs text-[#524B43] mb-6">
              <span className="font-semibold text-[#171513]">Dining Note:</span> Freshly prepared for dine-in, takeaway, and delivery orders between 12:00 PM and 11:00 PM.
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveItemModal(null)}
                className="px-5 py-2 text-xs uppercase tracking-wider font-medium text-[#524B43] hover:text-[#171513] cursor-pointer"
              >
                Close
              </button>
              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] cursor-pointer"
              >
                Call to Order: {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
