import React from 'react';
import { X, Heart, Phone, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { JewelleryCategory, BUSINESS_INFO, handleImageError, localAboutFallback } from '../data/jewelleryData';
import { useFavorites } from '../context/FavoritesContext';

interface AboutCardPopupProps {
  category: JewelleryCategory | null;
  onClose: () => void;
  onViewDetails: (category: JewelleryCategory) => void;
  onBookingView: (categoryName: string) => void;
}

export const AboutCardPopup: React.FC<AboutCardPopupProps> = ({
  category,
  onClose,
  onViewDetails,
  onBookingView
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!category) return null;

  const fav = isFavorite(category.id);

  const handleBookingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookingView(category.name);
  };

  const handleViewDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(category);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#164E3B]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-popup-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FFF8ED] border border-[#D4AF77] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar with Close and Favorite */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          {/* Heart / Favorites Button */}
          <button
            type="button"
            onClick={() =>
              toggleFavorite({
                id: category.id,
                name: category.name,
                category: category.name,
                image: category.image,
                type: 'category',
                priceInfo: category.priceInfo
              })
            }
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              fav
                ? 'bg-[#164E3B] text-[#D4AF77] border-[#D4AF77]'
                : 'bg-[#FFF8ED]/95 text-[#164E3B] border-[#D4AF77]/60 hover:bg-[#164E3B] hover:text-[#FFF8ED]'
            }`}
            aria-label={fav ? 'Remove from favourites' : 'Save to favourites'}
          >
            <Heart className={`w-4 h-4 ${fav ? 'fill-[#D4AF77]' : ''}`} />
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#FFF8ED]/95 text-[#164E3B] border border-[#D4AF77]/60 flex items-center justify-center hover:bg-[#164E3B] hover:text-[#FFF8ED] transition-colors"
            aria-label="Close category details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Large Image */}
          <div className="md:col-span-5 relative bg-[#FFF8ED] border-b md:border-b-0 md:border-r border-[#D4AF77]/30 min-h-[260px] md:min-h-full">
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center absolute inset-0"
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, localAboutFallback)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#164E3B]/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Price badge overlay */}
            <div className="absolute top-4 left-4 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77] px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide shadow-md">
              {category.priceTag}
            </div>

            <div className="absolute bottom-3 left-3 bg-[#FFF8ED]/95 border border-[#D4AF77] px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest text-[#164E3B] font-semibold">
              Category Showcase
            </div>
          </div>

          {/* Right Column: Detailed Information */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category Eyebrow */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF77] font-semibold">
                  RUHI GOLD · Boutique Collection
                </span>
              </div>

              {/* Category Name */}
              <h2
                id="about-popup-title"
                className="font-serif text-2xl sm:text-3xl text-[#164E3B] font-semibold tracking-wide mb-3"
              >
                {category.name}
              </h2>

              <div className="w-12 h-[1.5px] bg-[#D4AF77] mb-4" />

              {/* Detailed Category Description */}
              <p className="text-sm text-[#164E3B] font-normal leading-relaxed mb-5 font-sans">
                {category.detailedDescription}
              </p>

              {/* Materials & Gemstones */}
              <div className="mb-5 bg-[#FAF6EE] p-3.5 rounded-xl border border-[#D4AF77]/30">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4AF77] font-semibold mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Verified Precious Materials
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.materials.map((mat) => (
                    <span
                      key={mat}
                      className="text-xs text-[#164E3B] font-semibold bg-[#FFF8ED] px-2.5 py-1 rounded-md border border-[#D4AF77]/40"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-5 space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4AF77] font-semibold mb-2">
                  Specifications & Hallmarking
                </p>
                {Object.entries(category.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-start justify-between text-xs py-1 border-b border-[#D4AF77]/15">
                    <span className="text-[#164E3B]/80 font-medium">{key}:</span>
                    <span className="text-[#164E3B] font-semibold text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Notice */}
              <div className="mb-6 pb-2 border-b border-[#D4AF77]/25 flex items-center justify-between text-xs">
                <span className="text-[#164E3B]/80 uppercase tracking-wider text-[10px] font-semibold">Pricing Structure</span>
                <span className="text-[#164E3B] font-bold text-sm">{category.priceInfo}</span>
              </div>
            </div>

            {/* Action Buttons: perfectly fitted without clipping/overflowing, smooth rounded corners */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {/* VIEW DETAILS button */}
              <button
                type="button"
                onClick={handleViewDetailsClick}
                className="flex-1 min-w-[105px] sm:min-w-[125px] py-2.5 sm:py-3 px-2.5 sm:px-4 bg-[#FFF8ED] text-[#164E3B] text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#D4AF77]/15 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs"
              >
                <span>VIEW DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF77] shrink-0" />
              </button>

              {/* BOOKING VIEW button */}
              <button
                type="button"
                onClick={handleBookingClick}
                className="flex-1 min-w-[110px] sm:min-w-[130px] py-2.5 sm:py-3 px-2.5 sm:px-4 bg-[#164E3B] text-[#FFF8ED] text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF77] shrink-0" />
                <span>BOOKING VIEW</span>
              </button>

              {/* Phone icon button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneDial}`}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D4AF77] bg-[#FFF8ED] text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] flex items-center justify-center transition-colors shrink-0 shadow-xs"
                title={`Call boutique at ${BUSINESS_INFO.phoneDisplay}`}
                aria-label="Direct phone call to boutique"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF77]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
