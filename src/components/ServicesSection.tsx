import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BOUTIQUE_SERVICES, ServiceItem } from '../data/jewelleryData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="relative py-12 sm:py-20 lg:py-24 bg-[#FFF8ED] text-[#164E3B] border-t border-[#D4AF77]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF77]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold text-[#D4AF77]">
              BESPOKE ADVISORY
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF77]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#164E3B] tracking-tight mb-3 sm:mb-4">
            Personalised Boutique Services
          </h2>

          <div className="w-12 sm:w-16 h-[2px] bg-[#D4AF77] mx-auto mb-3 sm:mb-4" />

          <p className="text-xs sm:text-base text-[#164E3B]/85 font-normal leading-relaxed font-sans max-w-2xl mx-auto px-2">
            Configurable enquiry categories providing tailored guidance for diamond sourcing,
            custom goldsmithing, and private viewing appointments at our Fifth Avenue salon.
          </p>
        </div>

        {/* Strictly 3 cards per line on desktop view instead of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-8">
          {BOUTIQUE_SERVICES.map((serv, index) => (
            <div
              key={serv.id}
              className="group bg-[#FFF8ED] border border-[#D4AF77]/60 hover:border-[#D4AF77] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF6EE]">
                <img
                  src={serv.image}
                  alt={serv.title}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#164E3B]/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-[#164E3B] text-[#FFF8ED] border border-[#D4AF77]/50 px-2.5 py-0.5 rounded-md text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">
                  Service 0{index + 1}
                </div>
              </div>

              {/* Text content & strictly contained action buttons */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#164E3B] font-semibold tracking-wide mb-1.5 group-hover:text-[#D4AF77] transition-colors truncate">
                    {serv.title}
                  </h3>

                  <div className="w-8 sm:w-10 h-[1px] bg-[#D4AF77] mb-2 sm:mb-3 group-hover:w-14 transition-all duration-300" />

                  <p className="text-xs sm:text-sm text-[#164E3B] font-normal leading-relaxed font-sans line-clamp-2 mb-4">
                    {serv.shortDescription}
                  </p>
                </div>

                {/* Actions: Strictly inside container, with smooth rounded corners, no awkward line breaks */}
                <div className="pt-3 border-t border-[#D4AF77]/25 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(serv)}
                    className="py-2 sm:py-2.5 px-1.5 sm:px-3 bg-[#FFF8ED] text-[#164E3B] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#D4AF77]/20 transition-colors flex items-center justify-center gap-1 whitespace-nowrap shadow-xs min-w-0"
                  >
                    <span className="truncate">VIEW DETAILS</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF77] shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(serv.title)}
                    className="py-2 sm:py-2.5 px-1.5 sm:px-3 bg-[#164E3B] text-[#FFF8ED] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-1 whitespace-nowrap shadow-xs min-w-0"
                  >
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF77] shrink-0" />
                    <span className="truncate">ENQUIRE NOW</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookNow={(title) => {
          setSelectedService(null);
          onOpenBooking(title);
        }}
      />
    </section>
  );
};
