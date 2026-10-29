/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FavoritesProvider, useFavorites, FavoriteItem } from './context/FavoritesContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { BookingModal } from './components/BookingModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { ChatbotModal } from './components/ChatbotModal';
import { CategoryDetailModal } from './components/CategoryDetailModal';
import { PortfolioDetailModal } from './components/PortfolioDetailModal';
import { JewelleryCategory, PortfolioItem, ABOUT_CATEGORIES, PORTFOLIO_ITEMS } from './data/jewelleryData';

const MainContent: React.FC = () => {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState('');
  const [selectedCategoryDetails, setSelectedCategoryDetails] = useState<JewelleryCategory | null>(null);
  const [selectedPortfolioDetails, setSelectedPortfolioDetails] = useState<PortfolioItem | null>(null);

  const handleOpenBooking = (itemOrCategory?: string) => {
    setBookingPrefill(itemOrCategory || 'Boutique Salon Viewing');
    setIsBookingOpen(true);
  };

  const handleSelectFavoriteItem = (fav: FavoriteItem) => {
    if (fav.type === 'category') {
      const match = ABOUT_CATEGORIES.find((c) => c.id === fav.id);
      if (match) setSelectedCategoryDetails(match);
    } else {
      const match = PORTFOLIO_ITEMS.find((p) => p.id === fav.id);
      if (match) setSelectedPortfolioDetails(match);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#164E3B] flex flex-col font-sans selection:bg-[#D4AF77] selection:text-[#164E3B]">
      {/* Top Navigation Bar: Strict logo on left, Phone, Heart, Hamburger on right */}
      <Navigation onOpenFavorites={() => setIsFavoritesOpen(true)} />

      {/* Main Sections in EXACT order:
          1. Hero
          2. About (9 cards)
          3. Portfolio (18 cards)
          4. Services (6 cards)
          5. Testimonials (5.0 rating)
          6. Contact & Google Map
      */}
      <main className="flex-1 w-full">
        {/* SECTION 1: HERO */}
        <Hero onContactClick={() => handleOpenBooking('Private Boutique Consultation')} />

        {/* SECTION 2: ABOUT */}
        <AboutSection
          onSelectCategoryDetails={(cat) => setSelectedCategoryDetails(cat)}
          onOpenBooking={handleOpenBooking}
        />

        {/* SECTION 3: PORTFOLIO */}
        <PortfolioSection onOpenBooking={handleOpenBooking} />

        {/* SECTION 4: SERVICES */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* SECTION 5: TESTIMONIALS */}
        <TestimonialsSection onEnquireClick={() => handleOpenBooking('Private Viewing Suite Reservation')} />

        {/* SECTION 6: CONTACT & GOOGLE MAP */}
        <ContactSection />
      </main>

      {/* Floating Contact Widget (Fixed right, 3 options: AI Chatbot, Phone, WhatsApp) */}
      <FloatingContactWidget onOpenChatbot={() => setIsChatbotOpen(true)} />

      {/* Booking View / Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledItemOrCategory={bookingPrefill}
      />

      {/* Saved Favourites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        onSelectFavorite={handleSelectFavoriteItem}
        onBookingView={handleOpenBooking}
      />

      {/* AI Chatbot Concierge Modal */}
      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Complete Category Detail Modal */}
      <CategoryDetailModal
        category={selectedCategoryDetails}
        onClose={() => setSelectedCategoryDetails(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Portfolio Item Detail Modal (when launched via Favorites) */}
      <PortfolioDetailModal
        item={selectedPortfolioDetails}
        onClose={() => setSelectedPortfolioDetails(null)}
        onBookingView={(name) => {
          setSelectedPortfolioDetails(null);
          handleOpenBooking(name);
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <FavoritesProvider>
      <MainContent />
    </FavoritesProvider>
  );
}
