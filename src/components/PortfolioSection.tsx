import React, { useState } from 'react';
import { Heart, ArrowRight, Calendar } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/jewelleryData';
import { useFavorites } from '../context/FavoritesContext';
import { PortfolioDetailModal } from './PortfolioDetailModal';

interface PortfolioSectionProps {
  onOpenBooking: (itemName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBooking }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <section
      id="portfolio"
      className="relative py-12 sm:py-20 lg:py-24 bg-[#164E3B] text-[#FFF8ED] border-t border-[#D4AF77]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF77]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold text-[#D4AF77]">
              EXQUISITE CREATIONS
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF77]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#FFF8ED] tracking-tight mb-3 sm:mb-4">
            The Haute Joaillerie Portfolio
          </h2>

          <div className="w-12 sm:w-16 h-[2px] bg-[#D4AF77] mx-auto mb-3 sm:mb-4" />

          <p className="text-xs sm:text-base text-[#FFF8ED]/85 font-light leading-relaxed font-sans max-w-2xl mx-auto px-2">
            Eighteen signature pieces exemplifying our Fifth Avenue goldsmithing heritage.
            Each creation is an editable display entry celebrating natural gemstones and solid 18k alloys.
          </p>
        </div>

        {/* Strictly 3 cards per line on desktop view instead of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => {
            const fav = isFavorite(item.id);

            return (
              <div
                key={item.id}
                className="group relative bg-[#FFF8ED] text-[#164E3B] border border-[#D4AF77]/60 hover:border-[#D4AF77] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container with Consistent Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('1605100804763')) {
                        target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                  />

                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#164E3B]/30 via-transparent to-transparent pointer-events-none" />

                  {/* Prominent Exterior Price Tag */}
                  <div className="absolute top-3 left-3 z-10 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold font-sans tracking-wide shadow-md">
                    {item.priceTag}
                  </div>

                  {/* Heart / Favorites Icon in top-right corner */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite({
                        id: item.id,
                        name: item.name,
                        category: item.category,
                        image: item.image,
                        type: 'portfolio',
                        priceInfo: item.priceInfo
                      });
                    }}
                    className={`absolute top-3 right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${
                      fav
                        ? 'bg-[#164E3B] text-[#D4AF77] border border-[#D4AF77] shadow-sm'
                        : 'bg-[#FFF8ED]/95 text-[#164E3B] border border-[#D4AF77]/60 hover:bg-[#164E3B] hover:text-[#FFF8ED]'
                    }`}
                    aria-label={fav ? `Remove ${item.name} from favourites` : `Save ${item.name} to favourites`}
                  >
                    <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${fav ? 'fill-[#D4AF77]' : ''}`} />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute bottom-2.5 left-3 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-bold text-[#FFF8ED] bg-[#164E3B]/90 px-2 sm:px-2.5 py-0.5 rounded-md border border-[#D4AF77]/40">
                    {item.category}
                  </div>
                </div>

                {/* Card Content: Text contained without overflow */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Item Name */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#164E3B] font-semibold tracking-wide mb-1 group-hover:text-[#D4AF77] transition-colors truncate">
                      {item.name}
                    </h3>

                    {/* Subtle divider */}
                    <div className="w-8 sm:w-10 h-[1px] bg-[#D4AF77] mb-2 sm:mb-3 group-hover:w-14 transition-all duration-300" />

                    {/* Short supporting description matching image */}
                    <p className="text-xs sm:text-sm text-[#164E3B] font-normal leading-relaxed font-sans line-clamp-2 mb-3">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Dual Action Buttons: Perfectly sized without awkward breaks */}
                  <div className="pt-2.5 sm:pt-3 border-t border-[#D4AF77]/25 grid grid-cols-2 gap-2">
                    {/* VIEW DETAILS button */}
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="py-2 sm:py-2.5 px-1.5 sm:px-3 bg-[#FFF8ED] text-[#164E3B] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#D4AF77]/20 transition-colors flex items-center justify-center gap-1 whitespace-nowrap shadow-xs min-w-0"
                    >
                      <span className="truncate">VIEW DETAILS</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF77] shrink-0" />
                    </button>

                    {/* BOOKING VIEW button */}
                    <button
                      type="button"
                      onClick={() => onOpenBooking(item.name)}
                      className="py-2 sm:py-2.5 px-1.5 sm:px-3 bg-[#164E3B] text-[#FFF8ED] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-1 whitespace-nowrap shadow-xs min-w-0"
                    >
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF77] shrink-0" />
                      <span className="truncate">BOOKING VIEW</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Portfolio Item Detail Modal */}
      <PortfolioDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onBookingView={(itemName) => {
          setSelectedItem(null);
          onOpenBooking(itemName);
        }}
      />
    </section>
  );
};
