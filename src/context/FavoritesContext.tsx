import React, { createContext, useContext, useEffect, useState } from 'react';
import { PortfolioItem, JewelleryCategory } from '../data/jewelleryData';

export type FavoriteItem = {
  id: string;
  name: string;
  category: string;
  image: string;
  type: 'category' | 'portfolio';
  priceInfo?: string;
};

interface FavoritesContextType {
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  removeFavorite: (id: string) => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    try {
      const saved = localStorage.getItem('ruhigold_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ruhigold_favorites', JSON.stringify(favorites));
    } catch {
      // storage unavailable
    }
  }, [favorites]);

  const toggleFavorite = React.useCallback((item: FavoriteItem) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === item.id);
      if (exists) {
        return prev.filter(f => f.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }, []);

  const removeFavorite = React.useCallback((id: string) => {
    setFavorites(prev => prev.filter(f => f.id !== id));
  }, []);

  const isFavorite = React.useCallback((id: string) => {
    return favorites.some(f => f.id === id);
  }, [favorites]);

  const value = React.useMemo(() => ({
    favorites,
    toggleFavorite,
    isFavorite,
    removeFavorite,
    favoritesCount: favorites.length
  }), [favorites, toggleFavorite, isFavorite, removeFavorite]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
