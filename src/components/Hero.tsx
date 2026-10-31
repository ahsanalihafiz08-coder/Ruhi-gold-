import React, { useEffect, useRef } from 'react';
import { BUSINESS_INFO, localHeroShowcase } from '../data/jewelleryData';

interface HeroProps {
  onContactClick: () => void;
}

const HERO_VIDEO_URL = 'https://res.cloudinary.com/o82tprxi/video/upload/v1793154123/Gold_necklace_rotating_in_box_468f8e83.mp4';

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Pause background video when off-screen to guarantee 100% smooth 60fps scrolling and interactions on desktop
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate w-full flex items-center justify-start overflow-hidden bg-black text-[#FFF8ED] min-h-[580px] sm:min-h-[620px] md:min-h-0 md:aspect-video lg:max-h-[780px] pt-24 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-12"
    >
      {/* Crystal Clear Background Video pushed backward with z-0, hardware accelerated, zero washing out */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none transform-gpu will-change-transform">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          poster={localHeroShowcase}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover object-center opacity-100 transform-gpu pointer-events-none"
        />
        {/* Soft, elegant dark/neutral gradient overlay directly on top of video to make all text and buttons pop without blending */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/50 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-black/25 pointer-events-none" />
      </div>

      {/* Hero Content: Pure text layout shifted back to the left side properly with clean spacing */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-start text-left bg-transparent">
          
          {/* Eyebrow text & Logo line: Proportioned and clear on both Mobile & Desktop */}
          <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
            <span className="w-5 sm:w-6 md:w-8 h-[2px] bg-[#D4AF77]" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.22em] sm:tracking-[0.24em] font-bold text-[#D4AF77] drop-shadow-md">
              FINE JEWELLERY • TIMELESS ELEGANCE
            </span>
          </div>

          {/* Headline: Adjusted slightly upward with tight leading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-[#FFF8ED] mb-2.5 sm:mb-3 text-balance drop-shadow-lg">
            Elegance, Crafted <span className="italic text-[#D4AF77] font-light">to Last</span>
          </h1>

          {/* Champagne separator */}
          <div className="w-12 sm:w-16 md:w-20 h-[2px] bg-[#D4AF77] mb-3 sm:mb-3.5 shadow-xs" />

          {/* Supporting text: Refined font size and crisp contrast over the dark overlay */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FFF8ED]/95 font-medium leading-relaxed max-w-xl font-sans drop-shadow-md">
            Discover beautifully presented jewellery and timeless designs at RUHI GOLD.
          </p>

          {/* Action buttons: Sleek and compact on desktop, comfortable on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto mt-7 sm:mt-9 lg:mt-10">
            <button
              type="button"
              onClick={() => handleScrollTo('#portfolio')}
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] sm:min-w-0 px-7 sm:px-5 md:px-5 lg:px-6 py-3.5 sm:py-2.5 md:py-2.5 bg-[#164E3B] text-[#FFF8ED] text-xs md:text-[11px] lg:text-xs uppercase tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF77] shadow-lg whitespace-nowrap cursor-pointer"
            >
              Explore Collection
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] sm:min-w-0 px-7 sm:px-5 md:px-5 lg:px-6 py-3.5 sm:py-2.5 md:py-2.5 bg-[#FFF8ED] text-[#164E3B] text-xs md:text-[11px] lg:text-xs uppercase tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#FFF8ED]/90 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#164E3B] shadow-lg whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Address & 5.0 Star Boutique Rating trust indicator: Positioned slightly downward */}
          <div className="mt-7 sm:mt-9 lg:mt-10 pt-4 sm:pt-5 border-t border-[#D4AF77]/40 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#FFF8ED] font-medium w-full">
            <span className="font-semibold tracking-wide drop-shadow-md">
              580 Fifth Ave, Suite 821, NY
            </span>
            <span className="text-[#D4AF77] hidden sm:inline" aria-hidden="true">•</span>
            
            {/* 5.0 Star Boutique Rating container */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 border border-[#D4AF77]/80 rounded-full shadow-md whitespace-nowrap bg-black/40 backdrop-blur-xs">
              <span className="text-[#D4AF77] text-xs sm:text-sm font-bold">★★★★★</span>
              <span className="font-bold text-[#FFF8ED] text-[11px] sm:text-xs">5.0 Star Boutique Rating</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
