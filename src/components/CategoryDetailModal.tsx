import React from 'react';
import { X, Heart, Phone, Calendar, Sparkles } from 'lucide-react';
import { JewelleryCategory, BUSINESS_INFO } from '../data/jewelleryData';
import { useFavorites } from '../context/FavoritesContext';

interface CategoryDetailModalProps {
  category: JewelleryCategory | null;
  onClose: () => void;
  onOpenBooking: (categoryName: string) => void;
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  category,
  onClose,
  onOpenBooking
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!category) return null;

  const fav = isFavorite(category.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#164E3B]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cat-detail-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FFF8ED] border border-[#D4AF77] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
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
          {/* Left: Image */}
          <div className="md:col-span-5 relative bg-[#FAF6EE] border-b md:border-b-0 md:border-r border-[#D4AF77]/30 min-h-[280px] md:min-h-full">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover object-center absolute inset-0"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('1599643478518')) {
                  target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#164E3B]/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-4 left-4 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77] px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide shadow-md">
              {category.priceTag}
            </div>

            <div className="absolute bottom-3 left-3 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77] px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest font-semibold">
              Category Specification
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF77] font-semibold mb-1.5">
                RUHI GOLD · Curated Discipline
              </p>

              <h2
                id="cat-detail-title"
                className="font-serif text-2xl sm:text-3xl text-[#164E3B] font-semibold tracking-wide mb-3"
              >
                {category.name}
              </h2>

              <div className="w-12 h-[1.5px] bg-[#D4AF77] mb-4" />

              <p className="text-sm text-[#164E3B] font-normal leading-relaxed mb-5 font-sans">
                {category.detailedDescription}
              </p>

              {/* Curated Sample Creations */}
              <div className="mb-5 bg-[#FAF6EE] p-3.5 rounded-xl border border-[#D4AF77]/30">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4AF77] font-semibold mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Curated Collection Highlights
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#164E3B]">
                  {category.curatedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF77]" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-5 space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4AF77] font-semibold mb-2">
                  Material Standards
                </p>
                {Object.entries(category.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-start justify-between text-xs py-1 border-b border-[#D4AF77]/15">
                    <span className="text-[#164E3B]/80 font-medium">{key}:</span>
                    <span className="text-[#164E3B] font-semibold text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
              </div>

              {/* Price Structure */}
              <div className="mb-6 pb-2 border-b border-[#D4AF77]/25 flex items-center justify-between text-xs">
                <span className="text-[#164E3B]/80 uppercase tracking-wider text-[10px] font-semibold">Boutique Pricing</span>
                <span className="text-[#164E3B] font-bold text-sm">{category.priceInfo}</span>
              </div>
            </div>

            {/* Actions with rounded buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => onOpenBooking(category.name)}
                className="flex-1 min-w-[140px] py-3 px-4 bg-[#164E3B] text-[#FFF8ED] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF77]" />
                <span>BOOKING VIEW</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneDial}`}
                className="w-11 h-11 rounded-full border border-[#D4AF77] bg-[#FFF8ED] text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] flex items-center justify-center transition-colors shrink-0 shadow-xs"
                title={`Call boutique at ${BUSINESS_INFO.phoneDisplay}`}
                aria-label="Direct phone call to boutique"
              >
                <Phone className="w-4 h-4 text-[#D4AF77]" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded-full border border-[#D4AF77]/60 text-[#164E3B] text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#D4AF77]/15 transition-colors"
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
