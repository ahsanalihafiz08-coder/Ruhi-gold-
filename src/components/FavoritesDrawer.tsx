import React, { useEffect } from 'react';
import { X, Trash2, Calendar, ArrowRight, Heart } from 'lucide-react';
import { useFavorites, FavoriteItem } from '../context/FavoritesContext';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFavorite: (fav: FavoriteItem) => void;
  onBookingView: (name: string) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  onSelectFavorite,
  onBookingView
}) => {
  const { favorites, removeFavorite } = useFavorites();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-[#164E3B]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="favorites-title"
    >
      <div
        className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#FFF8ED] border-l border-[#D4AF77] shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#D4AF77]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-[#D4AF77] bg-[#164E3B] text-[#D4AF77] flex items-center justify-center shadow-xs">
              <Heart className="w-4 h-4 fill-[#D4AF77]" />
            </div>
            <div>
              <h2 id="favorites-title" className="font-serif text-xl text-[#164E3B] font-bold tracking-wide">
                Saved Favourites
              </h2>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF77] font-semibold">
                {favorites.length} {favorites.length === 1 ? 'Curated Piece' : 'Curated Pieces'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-[#D4AF77]/50 flex items-center justify-center text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] transition-colors"
            aria-label="Close saved favourites"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {favorites.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-14 h-14 rounded-full border border-[#D4AF77]/50 bg-[#FAF6EE] text-[#D4AF77] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-xl text-[#164E3B] mb-2 font-semibold">
                Your Private Collection is Empty
              </h3>
              <p className="text-xs text-[#164E3B]/80 leading-relaxed font-sans max-w-xs mx-auto">
                Explore our Curated Categories and Haute Joaillerie portfolio to bookmark pieces for your consultation.
              </p>
            </div>
          ) : (
            favorites.map((fav) => (
              <div
                key={fav.id}
                className="bg-[#FAF6EE] border border-[#D4AF77]/40 rounded-xl p-3.5 flex gap-3.5 items-start justify-between group hover:border-[#D4AF77] transition-all shadow-xs"
              >
                {/* Image */}
                <div
                  className="w-20 h-20 aspect-square shrink-0 rounded-lg overflow-hidden border border-[#D4AF77]/50 cursor-pointer bg-[#FFF8ED]"
                  onClick={() => {
                    onClose();
                    onSelectFavorite(fav);
                  }}
                >
                  <img
                    src={fav.image}
                    alt={fav.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('1599643478518')) {
                        target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-wider text-[#D4AF77] font-semibold block">
                    {fav.category}
                  </span>
                  <h4
                    className="font-serif text-base text-[#164E3B] font-semibold truncate cursor-pointer hover:text-[#D4AF77] transition-colors"
                    onClick={() => {
                      onClose();
                      onSelectFavorite(fav);
                    }}
                  >
                    {fav.name}
                  </h4>
                  <p className="text-xs font-bold text-[#164E3B] mb-2">
                    {fav.priceInfo || 'Available on request'}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onBookingView(fav.name);
                      }}
                      className="text-[10px] uppercase tracking-wider font-bold text-[#164E3B] hover:text-[#D4AF77] flex items-center gap-1"
                    >
                      <Calendar className="w-3 h-3 text-[#D4AF77]" />
                      <span>Book Viewing</span>
                    </button>
                    <span className="text-[#D4AF77] text-xs">·</span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectFavorite(fav);
                      }}
                      className="text-[10px] uppercase tracking-wider font-bold text-[#164E3B] hover:text-[#D4AF77] flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 text-[#D4AF77]" />
                    </button>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeFavorite(fav.id)}
                  className="text-[#164E3B]/60 hover:text-red-700 p-1 transition-colors"
                  title="Remove from favourites"
                  aria-label={`Remove ${fav.name} from favourites`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="p-6 bg-[#FFF8ED] border-t border-[#D4AF77]/30">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookingView('Multiple Saved Favourites');
              }}
              className="w-full py-3.5 px-4 bg-[#164E3B] text-[#FFF8ED] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF77]" />
              <span>ENQUIRE FOR ALL SAVED ITEMS</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
