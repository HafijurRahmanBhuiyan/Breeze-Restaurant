import React from 'react';
import { restaurantImages } from '../data/images';
import { businessInfo } from '../data/restaurantData';

export const FeaturedFood: React.FC = () => {
  const editorialItems = [
    {
      id: 'platter',
      title: 'Breeze Fantasy Platter',
      subtitle: 'DELICIOUS ASSORTMENT OF TREATS',
      description:
        'Crafted for generous sharing, this signature platter combines tender grilled chicken steaks, aromatic seasoned fried rice, crispy golden chicken tenders, spiced wings, potato wedges, and fresh sauteed garden vegetables accompanied by artisanal dipping sauces.',
      tag: 'Signature Sharing Feast',
      image: restaurantImages.platter.src,
      alt: restaurantImages.platter.alt,
      imageLeft: true,
    },
    {
      id: 'pizza',
      title: 'Artisanal Oven-Baked Pizza',
      subtitle: 'GOLDEN CRUST & MELTED MOZZARELLA',
      description:
        'Freshly prepared dough stone-baked to crisp perfection, loaded with savory toppings, rich sauce, and molten cheese. A perennial favorite among pizza lovers dining in or taking home.',
      tag: 'Handcrafted Recipe',
      image: restaurantImages.pizza.src,
      alt: restaurantImages.pizza.alt,
      imageLeft: false,
    },
    {
      id: 'brownie',
      title: 'Sizzling Chocolate Brownie',
      subtitle: 'SERVED WITH ARTISANAL ICE CREAM',
      description:
        'A warm, deeply decadent chocolate fudge brownie presented on a sizzling skillet, topped with a velvety scoop of cool vanilla ice cream and drizzled with warm chocolate fudge syrup.',
      tag: 'Favorite Dessert Selection',
      image: restaurantImages.brownie.src,
      alt: restaurantImages.brownie.alt,
      imageLeft: true,
    },
  ];

  return (
    <section id="featured-food" className="py-20 lg:py-28 bg-[#141210] text-white relative overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C9A86A]">
              CULINARY HIGHLIGHTS
            </span>
            <span className="w-8 h-[1px] bg-[#C9A86A]/70" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Worth Coming Back For
          </h2>
          <p className="text-sm sm:text-base text-[#BDB2A3] font-light max-w-xl mx-auto leading-relaxed">
            A curated showcase of beloved crowd favorites, each prepared to offer comfort, rich flavor, and memorable dining satisfaction.
          </p>
        </div>

        {/* Editorial Alternating Showcase */}
        <div className="space-y-20 lg:space-y-28">
          {editorialItems.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                item.imageLeft ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Image Container */}
              <div
                className={`lg:col-span-7 ${
                  item.imageLeft ? '' : 'lg:col-start-6'
                }`}
              >
                <div className="relative group overflow-hidden border border-white/10 shadow-2xl bg-[#1C1A18] aspect-4/3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-[#C9A86A] font-medium">
                    {item.tag}
                  </div>
                </div>
              </div>

              {/* Text Container */}
              <div
                className={`lg:col-span-5 ${
                  item.imageLeft ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}
              >
                <div className="max-w-lg">
                  <span className="text-[11px] font-mono tracking-widest text-[#9C9284] uppercase block mb-2">
                    0{index + 1} — {item.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#C4B9AA] leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#9C9284] border-t border-white/10 pt-4">
                    <span>Available for Dine-in & Takeaway</span>
                    <span>·</span>
                    <a
                      href="#menu"
                      className="text-[#C9A86A] hover:text-white transition-colors underline underline-offset-4"
                    >
                      View on Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
