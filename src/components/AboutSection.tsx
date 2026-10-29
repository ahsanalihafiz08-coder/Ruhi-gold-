import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { ABOUT_CATEGORIES, JewelleryCategory } from '../data/jewelleryData';
import { useFavorites } from '../context/FavoritesContext';
import { AboutCardPopup } from './AboutCardPopup';

interface AboutSectionProps {
  onSelectCategoryDetails: (category: JewelleryCategory) => void;
  onOpenBooking: (categoryName: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onSelectCategoryDetails,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<JewelleryCategory | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <section
      id="about"
      className="relative py-12 sm:py-20 lg:py-24 bg-[#FFF8ED] text-[#164E3B] border-t border-[#D4AF77]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF77]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold text-[#D4AF77]">
              OUR MAISON ARCHIVE
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF77]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#164E3B] tracking-tight mb-3 sm:mb-4">
            Curated Jewellery Categories
          </h2>

          <div className="w-12 sm:w-16 h-[2px] bg-[#D4AF77] mx-auto mb-3 sm:mb-4" />

          <p className="text-xs sm:text-base text-[#164E3B]/85 font-normal leading-relaxed font-sans max-w-2xl mx-auto px-2">
            Explore nine distinct disciplines of classical goldsmithing and gemstone setting,
            conceived with archival balance at 580 Fifth Avenue.
          </p>
        </div>

        {/* Strictly 3 cards per line on desktop view instead of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-8">
          {ABOUT_CATEGORIES.map((cat, index) => {
            const fav = isFavorite(cat.id);

            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className="group relative cursor-pointer bg-[#FFF8ED] border border-[#D4AF77]/60 hover:border-[#D4AF77] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container with Consistent 4:3 Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('1599643478518')) {
                        target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#164E3B]/30 via-transparent to-transparent pointer-events-none" />

                  {/* Prominent Price Tag on Exterior of Card */}
                  <div className="absolute top-3 left-3 z-10 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold font-sans tracking-wide shadow-md">
                    {cat.priceTag}
                  </div>

                  {/* Heart / Favorites Icon in top-right corner */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite({
                        id: cat.id,
                        name: cat.name,
                        category: cat.name,
                        image: cat.image,
                        type: 'category',
                        priceInfo: cat.priceInfo
                      });
                    }}
                    className={`absolute top-3 right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${
                      fav
                        ? 'bg-[#164E3B] text-[#D4AF77] border border-[#D4AF77] shadow-sm'
                        : 'bg-[#FFF8ED]/95 text-[#164E3B] border border-[#D4AF77]/60 hover:bg-[#164E3B] hover:text-[#FFF8ED]'
                    }`}
                    aria-label={fav ? `Remove ${cat.name} from favourites` : `Save ${cat.name} to favourites`}
                  >
                    <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${fav ? 'fill-[#D4AF77]' : ''}`} />
                  </button>

                  {/* Category Index */}
                  <div className="absolute bottom-2.5 left-3 text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-bold text-[#FFF8ED] bg-[#164E3B]/90 px-2 sm:px-2.5 py-0.5 rounded-md border border-[#D4AF77]/50">
                    Category 0{index + 1}
                  </div>
                </div>

                {/* Editorial Content Area with high contrast & font readability */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Name */}
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#164E3B] font-semibold tracking-wide mb-1.5 group-hover:text-[#D4AF77] transition-colors truncate">
                      {cat.name}
                    </h3>

                    <div className="w-8 sm:w-10 h-[1.5px] bg-[#D4AF77] mb-2 sm:mb-2.5 group-hover:w-16 transition-all duration-300" />

                    {/* High contrast and clarity for item details */}
                    <p className="text-xs sm:text-sm text-[#164E3B] font-normal leading-relaxed font-sans line-clamp-2 mb-3">
                      {cat.shortDescription}
                    </p>
                  </div>

                  {/* Single Line Clean Footer: Price tag & perfectly padded Explore Now button */}
                  <div className="mt-3 pt-3 border-t border-[#D4AF77]/30 flex items-center justify-between gap-2">
                    <div className="flex flex-col min-w-0 pr-1">
                      <span className="text-xs sm:text-sm font-bold text-[#164E3B] tracking-tight truncate">
                        {cat.priceTag}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#D4AF77] leading-tight">
                        In Boutique
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(cat);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#164E3B] text-[#FFF8ED] text-[10px] sm:text-[11px] uppercase tracking-[0.1em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-all shrink-0 whitespace-nowrap shadow-xs"
                    >
                      <span>Explore Now</span>
                      <ArrowRight className="w-3 h-3 text-[#D4AF77] shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* About Card Responsive Popup */}
      <AboutCardPopup
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onViewDetails={(cat) => {
          setSelectedCategory(null);
          onSelectCategoryDetails(cat);
        }}
        onBookingView={(categoryName) => {
          setSelectedCategory(null);
          onOpenBooking(categoryName);
        }}
      />
    </section>
  );
};
