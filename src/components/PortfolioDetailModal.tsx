import React from 'react';
import { X, Heart, Phone, Calendar, Sparkles } from 'lucide-react';
import { PortfolioItem, BUSINESS_INFO, handleImageError, localPortfolioFallback } from '../data/jewelleryData';
import { useFavorites } from '../context/FavoritesContext';

interface PortfolioDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookingView: (itemName: string) => void;
}

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  item,
  onClose,
  onBookingView
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!item) return null;

  const fav = isFavorite(item.id);

  const handleBookingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookingView(item.name);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#164E3B]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FFF8ED] border border-[#D4AF77] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Action Controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          {/* Heart / Favorites control */}
          <button
            type="button"
            onClick={() =>
              toggleFavorite({
                id: item.id,
                name: item.name,
                category: item.category,
                image: item.image,
                type: 'portfolio',
                priceInfo: item.priceInfo
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
            aria-label="Close portfolio details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left: Large Item Image */}
          <div className="md:col-span-5 relative bg-[#FAF6EE] border-b md:border-b-0 md:border-r border-[#D4AF77]/30 min-h-[280px] md:min-h-full">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center absolute inset-0"
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, localPortfolioFallback)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#164E3B]/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Price badge */}
            <div className="absolute top-4 left-4 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77] px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide shadow-md">
              {item.priceTag}
            </div>

            {/* Category tag */}
            <div className="absolute bottom-3 left-3 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77] px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest font-semibold">
              {item.category}
            </div>
          </div>

          {/* Right: Item Detail & Specifications */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF77] font-semibold mb-1.5">
                RUHI GOLD · Fifth Avenue Masterpiece
              </p>

              {/* Exact Item Name */}
              <h2
                id="portfolio-modal-title"
                className="font-serif text-2xl sm:text-3xl text-[#164E3B] font-semibold tracking-wide mb-3"
              >
                {item.name}
              </h2>

              <div className="w-12 h-[1.5px] bg-[#D4AF77] mb-4" />

              {/* Detailed Description */}
              <p className="text-sm text-[#164E3B] font-normal leading-relaxed mb-5 font-sans">
                {item.detailedDescription}
              </p>

              {/* Material & Gemstone Highlight */}
              <div className="mb-5 bg-[#FAF6EE] p-3.5 rounded-xl border border-[#D4AF77]/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF77] font-semibold block mb-0.5">
                      Primary Metal
                    </span>
                    <span className="font-semibold text-[#164E3B]">{item.materials}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF77] font-semibold block mb-0.5">
                      Gemstone Setting
                    </span>
                    <span className="font-semibold text-[#164E3B]">{item.gemstone}</span>
                  </div>
                </div>
              </div>

              {/* Verified Technical Specifications */}
              <div className="mb-5 space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4AF77] font-semibold mb-2">
                  Technical Specifications
                </p>
                <div className="flex items-start justify-between text-xs py-1 border-b border-[#D4AF77]/15">
                  <span className="text-[#164E3B]/80 font-medium">Metal Alloy:</span>
                  <span className="text-[#164E3B] font-semibold">{item.specifications.metal}</span>
                </div>
                <div className="flex items-start justify-between text-xs py-1 border-b border-[#D4AF77]/15">
                  <span className="text-[#164E3B]/80 font-medium">Hallmark Purity:</span>
                  <span className="text-[#164E3B] font-semibold">{item.specifications.purity}</span>
                </div>
                <div className="flex items-start justify-between text-xs py-1 border-b border-[#D4AF77]/15">
                  <span className="text-[#164E3B]/80 font-medium">Artisanship:</span>
                  <span className="text-[#164E3B] font-semibold text-right max-w-[60%]">{item.specifications.craftsmanship}</span>
                </div>
                {item.specifications.dimensions && (
                  <div className="flex items-start justify-between text-xs py-1 border-b border-[#D4AF77]/15">
                    <span className="text-[#164E3B]/80 font-medium">Dimensions / Fit:</span>
                    <span className="text-[#164E3B] font-semibold">{item.specifications.dimensions}</span>
                  </div>
                )}
              </div>

              {/* Pricing & Availability */}
              <div className="mb-6 pb-2 border-b border-[#D4AF77]/25 flex items-center justify-between text-xs">
                <span className="text-[#164E3B]/80 uppercase tracking-wider text-[10px] font-semibold">Boutique Pricing</span>
                <span className="text-[#164E3B] font-bold text-sm">{item.priceTag}</span>
              </div>
            </div>

            {/* Action Buttons: Phone, BOOKING VIEW, Close with responsive fit */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {/* BOOKING VIEW button */}
              <button
                type="button"
                onClick={handleBookingClick}
                className="flex-1 min-w-[120px] sm:min-w-[140px] py-2.5 sm:py-3 px-3 sm:px-4 bg-[#164E3B] text-[#FFF8ED] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF77] shrink-0" />
                <span>BOOKING VIEW</span>
              </button>

              {/* Phone contact action */}
              <a
                href={`tel:${BUSINESS_INFO.phoneDial}`}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D4AF77] bg-[#FFF8ED] text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] flex items-center justify-center transition-colors shrink-0 shadow-xs"
                title={`Call boutique at ${BUSINESS_INFO.phoneDisplay}`}
                aria-label="Direct phone call to boutique"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF77]" />
              </a>

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 sm:py-3 px-4 sm:px-5 rounded-full border border-[#D4AF77]/60 text-[#164E3B] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-bold hover:bg-[#D4AF77]/15 transition-colors whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
