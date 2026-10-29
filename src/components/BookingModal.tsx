import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppBrandIcon } from './BrandIcons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledItemOrCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledItemOrCategory = ''
}) => {
  const [formData, setFormData] = useState({
    itemOrCategory: prefilledItemOrCategory,
    fullName: '',
    phone: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '11:00 AM',
    enquiryType: 'Private Viewing Suite',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');

  useEffect(() => {
    if (prefilledItemOrCategory) {
      setFormData((prev) => ({ ...prev, itemOrCategory: prefilledItemOrCategory }));
    }
  }, [prefilledItemOrCategory]);

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

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    }
    if (!formData.appointmentDate) {
      errs.appointmentDate = 'Please select a preferred date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const summary = `*RUHI GOLD Private Appointment Request*\n\n` +
      `*Item / Category:* ${formData.itemOrCategory || 'Boutique Collection'}\n` +
      `*Patron Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Preferred Date:* ${formData.appointmentDate}\n` +
      `*Preferred Time:* ${formData.appointmentTime}\n` +
      `*Enquiry Type:* ${formData.enquiryType}\n` +
      `*Notes:* ${formData.message || 'None'}`;

    const wa = BUSINESS_INFO.getWhatsAppUrl(summary);
    setPreparedWhatsAppUrl(wa);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      itemOrCategory: prefilledItemOrCategory,
      fullName: '',
      phone: '',
      email: '',
      appointmentDate: '',
      appointmentTime: '11:00 AM',
      enquiryType: 'Private Viewing Suite',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#164E3B]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#FFF8ED] border border-[#D4AF77] rounded-2xl shadow-2xl p-6 sm:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFF8ED]/95 text-[#164E3B] border border-[#D4AF77]/60 flex items-center justify-center hover:bg-[#164E3B] hover:text-[#FFF8ED] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF77] font-semibold mb-1">
            RUHI GOLD · 580 FIFTH AVENUE
          </p>
          <h2
            id="booking-modal-title"
            className="font-serif text-2xl sm:text-3xl text-[#164E3B] font-semibold"
          >
            Schedule a Private Viewing
          </h2>
          <div className="w-12 h-[1.5px] bg-[#D4AF77] mt-2 mb-2" />
          <p className="text-xs text-[#164E3B] font-normal font-sans">
            Personalised consultation in our Manhattan private suite with a dedicated jewellery advisor.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#FAF6EE] border border-[#D4AF77] rounded-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#D4AF77] bg-[#164E3B] text-[#D4AF77] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#164E3B]">
              Appointment Request Ready
            </h3>
            <p className="text-xs text-[#164E3B] max-w-md mx-auto leading-relaxed font-normal">
              Your private appointment request for <strong>{formData.itemOrCategory || 'Boutique Collection'}</strong> on <strong>{formData.appointmentDate} ({formData.appointmentTime})</strong> is assembled. Please send it directly to our Fifth Avenue concierge via WhatsApp or telephone to confirm suite availability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={preparedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#164E3B] text-[#FFF8ED] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppBrandIcon className="w-4 h-4" />
                <span>Transmit Via WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneDial}`}
                className="w-full sm:w-auto px-6 py-3 bg-[#FFF8ED] text-[#164E3B] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#D4AF77]/20 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF77]" />
                <span>Call Concierge</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#D4AF77] underline uppercase tracking-wider font-bold"
              >
                Close & Return to Boutique
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Prefilled Item or Category */}
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                Selected Jewellery Item or Category
              </label>
              <input
                type="text"
                value={formData.itemOrCategory}
                onChange={(e) => setFormData({ ...formData, itemOrCategory: e.target.value })}
                placeholder="e.g. Diamond Solitaire Ring, Gold Necklaces"
                className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D4AF77]/60 text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]"
              />
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Elizabeth Vance"
                  className={`w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border ${
                    errors.fullName ? 'border-red-500' : 'border-[#D4AF77]/60'
                  } text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]`}
                />
                {errors.fullName && (
                  <p className="text-[10px] text-[#164E3B] font-semibold mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +1 212 555 0192"
                  className={`w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border ${
                    errors.phone ? 'border-red-500' : 'border-[#D4AF77]/60'
                  } text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]`}
                />
                {errors.phone && (
                  <p className="text-[10px] text-[#164E3B] font-semibold mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email & Enquiry Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. elizabeth@example.com"
                  className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D4AF77]/60 text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                  Enquiry Type
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D4AF77]/60 text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]"
                >
                  <option value="Private Viewing Suite">Private Viewing Suite</option>
                  <option value="Bespoke Commission">Bespoke Commission</option>
                  <option value="Bridal Suite Coordination">Bridal Suite Coordination</option>
                  <option value="Ring Sizing & Fitting">Ring Sizing & Fitting</option>
                  <option value="General Collection Inquiry">General Collection Inquiry</option>
                </select>
              </div>
            </div>

            {/* Preferred Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.appointmentDate}
                  onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                  className={`w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border ${
                    errors.appointmentDate ? 'border-red-500' : 'border-[#D4AF77]/60'
                  } text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]`}
                />
                {errors.appointmentDate && (
                  <p className="text-[10px] text-[#164E3B] font-semibold mt-1">{errors.appointmentDate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                  Preferred Time
                </label>
                <select
                  value={formData.appointmentTime}
                  onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D4AF77]/60 text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:30 PM">2:30 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                Additional Notes or Sizing Requests
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention any specific diamond carat, gold metal preference, or occasion..."
                className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D4AF77]/60 text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B] resize-none"
              />
            </div>

            {/* Submit Button with seamless fit and no awkward breaks */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 px-4 sm:px-6 bg-[#164E3B] text-[#FFF8ED] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF77] shrink-0" />
                <span>Submit Appointment Enquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
