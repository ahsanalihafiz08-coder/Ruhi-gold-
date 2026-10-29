import React, { useState, useEffect } from 'react';
import { Phone, Heart, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { useFavorites } from '../context/FavoritesContext';

interface NavigationProps {
  onOpenFavorites: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenFavorites }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { favoritesCount } = useFavorites();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll-Triggered Navigation Bar: Permanently fixed to prevent layout thrashing and freezing */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-200 transform-gpu ${
          scrolled
            ? 'bg-[#FFF8ED]/95 backdrop-blur-md shadow-md border-b border-[#D4AF77]/30 py-2 sm:py-3'
            : 'bg-transparent border-b border-transparent shadow-none py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Left side: RUHI GOLD wordmark logo with sharp contrast against both dark video and light scroll states */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group flex items-center gap-2 sm:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF77] shrink-0"
              aria-label="RUHI GOLD - Luxury Jewellery Boutique Homepage"
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#D4AF77] flex items-center justify-center font-serif text-xs sm:text-sm font-bold tracking-widest transition-all shadow-sm ${
                  scrolled
                    ? 'bg-[#164E3B] text-[#FFF8ED]'
                    : 'bg-[#164E3B]/90 text-[#D4AF77] backdrop-blur-xs'
                }`}
              >
                RG
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-colors drop-shadow-sm ${
                    scrolled ? 'text-[#164E3B]' : 'text-[#FFF8ED]'
                  }`}
                >
                  RUHI GOLD
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-[#D4AF77] font-semibold hidden sm:block -mt-0.5 drop-shadow-xs">
                  Fifth Avenue · New York
                </span>
              </div>
            </a>

            {/* Desktop Quick Nav Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] uppercase tracking-[0.16em] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`hover:text-[#D4AF77] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF77] hover:after:w-full after:transition-all ${
                    scrolled ? 'text-[#164E3B]/85' : 'text-[#FFF8ED]/95 drop-shadow-xs'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side, compact icons aligned right to avoid overlap: 1. Phone, 2. Heart, 3. Menu */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* 1. Phone icon */}
              <a
                href={`tel:${BUSINESS_INFO.phoneDial}`}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D4AF77] transition-all duration-200 flex items-center justify-center shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF77] ${
                  scrolled
                    ? 'bg-[#FFF8ED] text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED]'
                    : 'bg-[#164E3B]/80 text-[#FFF8ED] hover:bg-[#164E3B] backdrop-blur-xs'
                }`}
                title={`Call ${BUSINESS_INFO.phoneDisplay}`}
                aria-label={`Call boutique at ${BUSINESS_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
              </a>

              {/* 2. Heart/favorites icon */}
              <button
                type="button"
                onClick={onOpenFavorites}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D4AF77] transition-all duration-200 relative flex items-center justify-center shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF77] ${
                  scrolled
                    ? 'bg-[#FFF8ED] text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED]'
                    : 'bg-[#164E3B]/80 text-[#FFF8ED] hover:bg-[#164E3B] backdrop-blur-xs'
                }`}
                title="View saved favourites"
                aria-label={`Favourites, ${favoritesCount} items saved`}
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#D4AF77] text-[#164E3B] text-[9px] sm:text-[10px] font-bold flex items-center justify-center border border-[#164E3B] shadow-xs">
                    {favoritesCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D4AF77] transition-all duration-200 flex items-center justify-center shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF77] ${
                  scrolled
                    ? 'bg-[#FFF8ED] text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED]'
                    : 'bg-[#164E3B]/80 text-[#FFF8ED] hover:bg-[#164E3B] backdrop-blur-xs'
                }`}
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer containing links to all 6 sections */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#164E3B]/70 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#FFF8ED] border-l border-[#D4AF77]/40 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#D4AF77]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full border border-[#D4AF77] flex items-center justify-center text-[#D4AF77] font-serif text-xs font-semibold">
                RG
              </div>
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-[#164E3B] uppercase">
                RUHI GOLD
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full border border-[#D4AF77]/50 flex items-center justify-center text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] transition-colors focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links list to all six sections */}
          <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF77] font-semibold mb-6">
              Boutique Directory
            </p>
            <ul className="space-y-4">
              {navLinks.map((link, idx) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="group flex items-center justify-between py-2 text-xl font-serif tracking-wide text-[#164E3B] hover:text-[#D4AF77] transition-colors border-b border-[#D4AF77]/15"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-xs font-sans tracking-widest text-[#D4AF77] font-medium">
                        0{idx + 1}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF77] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#D4AF77]/30">
              <p className="text-xs uppercase tracking-[0.18em] text-[#D4AF77] font-semibold mb-1.5">
                Private Salon Address
              </p>
              <p className="text-xs text-[#164E3B]/80 leading-relaxed font-sans">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-xs text-[#164E3B] font-semibold mt-2">
                Tel: <a href={`tel:${BUSINESS_INFO.phoneDial}`} className="text-[#D4AF77] hover:underline">{BUSINESS_INFO.phoneDisplay}</a>
              </p>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="p-5 sm:p-6 bg-[#FFF8ED] border-t border-[#D4AF77]/30">
            <a
              href={`tel:${BUSINESS_INFO.phoneDial}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#164E3B] text-[#FFF8ED] text-xs uppercase tracking-[0.18em] font-semibold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF77]" />
              <span>Direct Boutique Call</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
