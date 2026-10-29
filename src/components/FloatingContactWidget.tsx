import React, { useState } from 'react';
import { X, MessageSquare, ExternalLink, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppBrandIcon, PhoneBrandIcon, AIChatbotBrandIcon } from './BrandIcons';

interface FloatingContactWidgetProps {
  onOpenChatbot: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ onOpenChatbot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChatbot = () => {
    setIsOpen(false);
    onOpenChatbot();
  };

  return (
    <>
      {/* Background backdrop on mobile for effortless dismissal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#164E3B]/30 backdrop-blur-xs transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
        {/* Contact Concierge Popup: Strictly 3 clean options with distinct brand & action icons */}
        {isOpen && (
          <div
            className="mb-3 w-[calc(100vw-2rem)] sm:w-[340px] bg-[#FFF8ED] border border-[#D4AF77] rounded-3xl shadow-2xl p-4 sm:p-5 animate-in slide-in-from-bottom-3 fade-in duration-200 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Salon Concierge Options"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D4AF77]/30">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF77] font-bold">
                  RUHI GOLD · 580 FIFTH AVE
                </p>
                <h3 className="font-serif text-base text-[#164E3B] font-bold">
                  Boutique Concierge
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full border border-[#D4AF77]/50 flex items-center justify-center text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] transition-colors cursor-pointer"
                aria-label="Close concierge options"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Strictly 3 Clean Options: 1. WhatsApp, 2. Phone, 3. AI Chatbot */}
            <div className="space-y-2.5">
              {/* Option 1: WhatsApp Concierge with brand icon and action icon */}
              <a
                href={BUSINESS_INFO.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between gap-3 p-3 bg-[#FAF6EE] hover:bg-[#FFF8ED] border border-[#D4AF77]/40 hover:border-[#25D366] rounded-2xl transition-all shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/50 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <WhatsAppBrandIcon className="w-6 h-6" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-xs font-bold text-[#164E3B] tracking-wide block truncate">
                      WhatsApp Concierge
                    </span>
                    <p className="text-[11px] text-[#164E3B]/80 font-medium truncate">
                      +994 998 00 04 56
                    </p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/40 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors shadow-2xs">
                  <ExternalLink className="w-3.5 h-3.5 text-[#164E3B] group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* Option 2: Direct Boutique Call with brand icon and action icon */}
              <a
                href={`tel:${BUSINESS_INFO.phoneDial}`}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between gap-3 p-3 bg-[#FAF6EE] hover:bg-[#FFF8ED] border border-[#D4AF77]/40 hover:border-[#164E3B] rounded-2xl transition-all shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/50 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <PhoneBrandIcon className="w-6 h-6" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-xs font-bold text-[#164E3B] tracking-wide block truncate">
                      Direct Boutique Call
                    </span>
                    <p className="text-[11px] text-[#164E3B]/80 font-medium truncate">
                      {BUSINESS_INFO.phoneDisplay}
                    </p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/40 flex items-center justify-center shrink-0 group-hover:bg-[#164E3B] group-hover:border-[#164E3B] transition-colors shadow-2xs">
                  <PhoneCall className="w-3.5 h-3.5 text-[#164E3B] group-hover:text-[#FFF8ED] transition-colors" />
                </div>
              </a>

              {/* Option 3: AI Interactive Chatbot with brand icon and action icon */}
              <button
                type="button"
                onClick={handleOpenChatbot}
                className="w-full group flex items-center justify-between gap-3 p-3 bg-[#164E3B] hover:bg-[#0E3527] border border-[#D4AF77] rounded-2xl transition-all shadow-sm text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#0E3527] border border-[#D4AF77]/60 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <AIChatbotBrandIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#FFF8ED] tracking-wide block truncate">
                      AI Interactive Chatbot
                    </span>
                    <p className="text-[11px] text-[#FFF8ED]/80 font-light truncate">
                      24/7 Digital Salon Assistant
                    </p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#0E3527] border border-[#D4AF77]/50 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF77] transition-colors shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF77] group-hover:text-[#164E3B] transition-colors" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Floating Action Button: Strictly 'Contact', smaller size and neatly aligned to the right */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-3.5 py-2 sm:px-4 sm:py-2 bg-[#164E3B] text-[#FFF8ED] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] shadow-xl hover:bg-[#0E3527] transition-all flex items-center gap-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF77] shrink-0 cursor-pointer"
          aria-label="Contact RUHI GOLD boutique"
          aria-expanded={isOpen}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF77] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF77]" />
          </span>
          <MessageSquare className="w-3.5 h-3.5 text-[#D4AF77] group-hover:rotate-6 transition-transform" />
          <span>Contact</span>
        </button>
      </div>
    </>
  );
};
