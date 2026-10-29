import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/jewelleryData';

interface TestimonialsSectionProps {
  onEnquireClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onEnquireClick }) => {
  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-24 bg-[#164E3B] text-[#FFF8ED] border-t border-[#D4AF77]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF77]" />
            <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#D4AF77]">
              CLIENT REFLECTIONS
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF77]" />
          </div>

          {/* EXACT HEADING: “A Thoughtful Jewellery Experience” */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FFF8ED] tracking-tight mb-4">
            A Thoughtful Jewellery Experience
          </h2>

          <div className="w-16 h-[2px] bg-[#D4AF77] mx-auto mb-4" />

          <p className="text-sm sm:text-base text-[#FFF8ED]/85 font-light leading-relaxed font-sans mb-5">
            Every creation at RUHI GOLD is forged with devotion to beauty, discretion, and lifelong craftsmanship.
          </p>

          {/* Owner-Supplied Rating Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 bg-[#0E3527] border border-[#D4AF77]/50 px-4 py-2 rounded-full shadow-sm">
            <div className="flex items-center gap-1 text-[#D4AF77] shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF77]" />
              ))}
            </div>
            <span className="text-xs uppercase tracking-[0.14em] font-bold text-[#FFF8ED] whitespace-nowrap">
              5.0 Star Boutique Rating
            </span>
            <span className="text-[10px] text-[#D4AF77] italic font-serif whitespace-nowrap">
              (Supplied by owner)
            </span>
          </div>
        </div>

        {/* 3 smaller, equal-sized grid cards per row with rounded corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#0E3527]/80 border border-[#D4AF77]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:border-[#D4AF77] transition-all relative overflow-hidden"
            >
              {/* Gold decorative quote accent */}
              <div className="absolute top-4 right-5 font-serif text-5xl text-[#D4AF77]/20 select-none pointer-events-none">
                “
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D4AF77] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF77]" />
                  ))}
                </div>

                {/* Highlight */}
                <h3 className="font-serif text-lg text-[#D4AF77] font-semibold mb-2.5">
                  {item.highlight}
                </h3>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#FFF8ED]/90 font-light leading-relaxed font-sans mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#D4AF77]/25">
                <p className="font-serif text-base text-[#FFF8ED] font-medium">
                  {item.clientName}
                </p>
                <p className="text-[11px] text-[#D4AF77] font-sans">
                  {item.location} · {item.occasion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Invitation Callout with rounded button */}
        <div className="p-6 bg-[#0E3527] rounded-2xl border border-[#D4AF77]/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-left">
            <h4 className="font-serif text-lg text-[#FFF8ED] font-semibold">
              Experience RUHI GOLD in Person
            </h4>
            <p className="text-xs text-[#FFF8ED]/80 font-sans">
              We invite prospective patrons to schedule a private viewing at 580 Fifth Avenue, Suite 821, New York.
            </p>
          </div>

          <button
            type="button"
            onClick={onEnquireClick}
            className="px-6 py-3 bg-[#FFF8ED] text-[#164E3B] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#D4AF77] transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            SCHEDULE SALON VIEWING
          </button>
        </div>

      </div>
    </section>
  );
};
