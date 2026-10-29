import React from 'react';
import { X, Calendar, Phone, Check, Sparkles } from 'lucide-react';
import { ServiceItem, BUSINESS_INFO } from '../data/jewelleryData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookNow
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#164E3B]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFF8ED] border border-[#D4AF77] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#FFF8ED]/95 text-[#164E3B] border border-[#D4AF77]/60 flex items-center justify-center hover:bg-[#164E3B] hover:text-[#FFF8ED] transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#FAF6EE] border-b border-[#D4AF77]/40">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#164E3B]/70 via-[#164E3B]/20 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF77] font-semibold block mb-1">
              Boutique Consultation Service
            </span>
            <h2
              id="service-modal-title"
              className="font-serif text-2xl sm:text-3xl text-[#FFF8ED] font-normal"
            >
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <p className="text-sm sm:text-base text-[#164E3B] font-normal leading-relaxed mb-6 font-sans">
            {service.detailedDescription}
          </p>

          <div className="mb-6 bg-[#FAF6EE] p-4 rounded-xl border border-[#D4AF77]/30">
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#D4AF77] font-semibold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Service Consultation Inclusions
            </h4>
            <ul className="space-y-2">
              {service.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#164E3B]">
                  <Check className="w-4 h-4 text-[#D4AF77] shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row with rounded buttons and seamless responsive sizing */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onBookNow(service.title)}
              className="flex-1 min-w-[120px] sm:min-w-[140px] py-2.5 sm:py-3 px-3 sm:px-5 bg-[#164E3B] text-[#FFF8ED] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF77] shrink-0" />
              <span>ENQUIRE NOW</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneDial}`}
              className="py-2.5 sm:py-3 px-3.5 sm:px-5 bg-[#FFF8ED] text-[#164E3B] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#D4AF77]/15 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF77] shrink-0" />
              <span>Direct Call</span>
            </a>

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
  );
};
