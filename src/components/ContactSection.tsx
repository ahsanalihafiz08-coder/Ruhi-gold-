import React, { useState } from 'react';
import { Phone, MapPin, Star, Send, ExternalLink, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

import {
  WhatsAppBrandIcon,
  InstagramBrandIcon,
  FacebookBrandIcon,
  PhoneBrandIcon
} from './BrandIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'General Collection Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details of your enquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = `*RUHI GOLD Boutique Enquiry*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:* ${formData.message}`;

    const waUrl = BUSINESS_INFO.getWhatsAppUrl(msg);
    setPreparedWhatsAppUrl(waUrl);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: 'General Collection Enquiry',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-16 sm:pt-24 pb-12 bg-[#FFF8ED] text-[#164E3B] border-t border-[#D4AF77]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF77]" />
            <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#D4AF77]">
              VISIT OUR BOUTIQUE
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF77]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#164E3B] tracking-tight mb-4">
            Contact & Salon Location
          </h2>

          <div className="w-16 h-[2px] bg-[#D4AF77] mx-auto mb-4" />

          <p className="text-sm sm:text-base text-[#164E3B]/85 font-normal leading-relaxed font-sans max-w-2xl mx-auto">
            Connect directly with our master jewellers at 580 Fifth Avenue or submit your bespoke enquiry below.
          </p>
        </div>

        {/* 2-Column Layout: Business Details + Map & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          
          {/* Left Column: Business Credentials & Compact Google Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Business Information Card with rounded corners */}
            <div className="bg-[#FAF6EE] border border-[#D4AF77] rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-2xl font-bold tracking-[0.16em] text-[#164E3B] uppercase">
                  {BUSINESS_INFO.name}
                </span>
              </div>
              <p className="text-xs text-[#D4AF77] font-semibold uppercase tracking-[0.2em] mb-4">
                {BUSINESS_INFO.category}
              </p>

              <div className="w-10 h-[1.5px] bg-[#D4AF77] mb-5" />

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full border border-[#D4AF77] bg-[#FFF8ED] text-[#164E3B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D4AF77]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF77] font-semibold block">
                      Fifth Avenue Boutique Address
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#164E3B] leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Clickable Phone Number */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full border border-[#D4AF77] bg-[#FFF8ED] text-[#164E3B] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#D4AF77]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF77] font-semibold block">
                      Direct Concierge Line
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneDial}`}
                      className="text-base font-semibold text-[#164E3B] hover:text-[#D4AF77] transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full border border-[#D4AF77] bg-[#FFF8ED] text-[#164E3B] flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-[#D4AF77] fill-[#D4AF77]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF77] font-semibold block">
                      Verified Client Standing
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#164E3B]">
                      5.0 Stars <span className="text-xs text-[#D4AF77] font-serif font-normal italic">(Supplied by owner)</span>
                    </p>
                  </div>
                </div>

                {/* Visible Social Brand Logos for WhatsApp, Instagram, and Facebook */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF77] font-semibold block mb-2">
                    Official Boutique Channels
                  </span>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    {/* WhatsApp */}
                    <a
                      href={BUSINESS_INFO.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF8ED] border border-[#D4AF77]/50 rounded-full hover:border-[#25D366] transition-all shadow-xs shrink-0"
                      title="Connect on WhatsApp"
                    >
                      <WhatsAppBrandIcon />
                      <span className="text-xs font-semibold text-[#164E3B] whitespace-nowrap">WhatsApp</span>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF8ED] border border-[#D4AF77]/50 rounded-full hover:border-[#dc2743] transition-all shadow-xs shrink-0"
                      title="Follow on Instagram"
                    >
                      <InstagramBrandIcon />
                      <span className="text-xs font-semibold text-[#164E3B] whitespace-nowrap">Instagram</span>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF8ED] border border-[#D4AF77]/50 rounded-full hover:border-[#1877F2] transition-all shadow-xs shrink-0"
                      title="Find on Facebook"
                    >
                      <FacebookBrandIcon />
                      <span className="text-xs font-semibold text-[#164E3B] whitespace-nowrap">Facebook</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp Inquiry Button: strictly 'WhatsApp Inquiry', centered and fitted */}
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 sm:px-5 bg-[#164E3B] text-[#FFF8ED] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors shadow-xs whitespace-nowrap"
                  >
                    <WhatsAppBrandIcon className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Section with 'Open in Google Map' action button */}
            <div className="bg-[#FAF6EE] border border-[#D4AF77] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col gap-3">
              {/* Header & 'Open in Google Map' Action Button directly above the map */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF77] shrink-0" />
                  <span className="text-xs font-serif uppercase tracking-wider text-[#164E3B] font-bold">
                    Boutique Map & Location
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#164E3B] text-[#FFF8ED] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-all shadow-xs"
                >
                  <span>Open in Google Map</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D4AF77]" />
                </a>
              </div>

              {/* Google Map Embed */}
              <div className="relative h-44 sm:h-52 w-full bg-[#FAF6EE] rounded-xl overflow-hidden border border-[#D4AF77]/30">
                <iframe
                  title="RUHI GOLD 580 Fifth Avenue Location Map"
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address bar & directions shortcut */}
              <div className="p-2.5 bg-[#FFF8ED] rounded-xl border border-[#D4AF77]/30 flex items-center justify-between">
                <span className="text-xs text-[#164E3B] font-semibold">
                  580 Fifth Ave, Suite 821, NY 10017
                </span>
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#164E3B] font-bold hover:text-[#D4AF77] transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-[#D4AF77]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF6EE] border border-[#D4AF77] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF77] font-semibold mb-1">
                  PERSONALISED CORRESPONDENCE
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#164E3B] font-semibold">
                  Send a Boutique Enquiry
                </h3>
                <div className="w-10 h-[1.5px] bg-[#D4AF77] mt-2.5" />
              </div>

              {submitted ? (
                <div className="p-6 bg-[#FFF8ED] border border-[#D4AF77] rounded-2xl text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF77] bg-[#164E3B] text-[#D4AF77] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#164E3B]">
                    Enquiry Prepared
                  </h4>
                  <p className="text-xs text-[#164E3B] max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, {formData.fullName}. Your jewellery enquiry has been compiled. You can transmit it directly to our Fifth Avenue concierge via WhatsApp or telephone call.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                    <a
                      href={preparedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-[#164E3B] text-[#FFF8ED] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <WhatsAppBrandIcon className="w-4 h-4" />
                      <span>Send Via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 bg-[#FFF8ED] text-[#164E3B] text-xs uppercase tracking-[0.16em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#D4AF77]/15 transition-colors"
                    >
                      New Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Katherine Sterling"
                      className={`w-full px-4 py-2.5 bg-[#FFF8ED] rounded-xl border ${
                        errors.fullName ? 'border-red-500' : 'border-[#D4AF77]/60'
                      } text-[#164E3B] text-sm focus:outline-none focus:border-[#164E3B]`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-[#164E3B] font-semibold mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 212 555 0192"
                        className={`w-full px-4 py-2.5 bg-[#FFF8ED] rounded-xl border ${
                          errors.phone ? 'border-red-500' : 'border-[#D4AF77]/60'
                        } text-[#164E3B] text-sm focus:outline-none focus:border-[#164E3B]`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-[#164E3B] font-semibold mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. client@example.com"
                        className="w-full px-4 py-2.5 bg-[#FFF8ED] rounded-xl border border-[#D4AF77]/60 text-[#164E3B] text-sm focus:outline-none focus:border-[#164E3B]"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                      Enquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFF8ED] rounded-xl border border-[#D4AF77]/60 text-[#164E3B] text-sm focus:outline-none focus:border-[#164E3B]"
                    >
                      <option value="General Collection Enquiry">General Collection Enquiry</option>
                      <option value="Bespoke Goldsmithing Commission">Bespoke Goldsmithing Commission</option>
                      <option value="Diamond Solitaire Viewing">Diamond Solitaire Viewing</option>
                      <option value="Wedding & Bridal Suite Consultation">Wedding & Bridal Suite Consultation</option>
                      <option value="Private Salon Appointment at 580 Fifth Ave">Private Salon Appointment at 580 Fifth Ave</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#164E3B] font-semibold mb-1">
                      Message / Item Details *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe the jewellery piece or preferred consultation date..."
                      className={`w-full px-4 py-2.5 bg-[#FFF8ED] rounded-xl border ${
                        errors.message ? 'border-red-500' : 'border-[#D4AF77]/60'
                      } text-[#164E3B] text-sm focus:outline-none focus:border-[#164E3B] resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-[#164E3B] font-semibold mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button with rounded corners */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#164E3B] text-[#FFF8ED] text-xs uppercase tracking-[0.18em] font-bold rounded-full border border-[#D4AF77] hover:bg-[#0E3527] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D4AF77]" />
                    <span>SUBMIT BOUTIQUE ENQUIRY</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Premium Footer with Original Full-Color Brand Icons/Logos */}
        <footer className="pt-10 border-t border-[#D4AF77]/40 text-[#164E3B]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
            
            {/* Wordmark & Description */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full border border-[#D4AF77] flex items-center justify-center text-[#D4AF77] font-serif font-bold text-sm">
                  RG
                </div>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#164E3B] uppercase">
                  {BUSINESS_INFO.name}
                </span>
              </div>
              <p className="text-xs text-[#164E3B]/80 font-normal leading-relaxed max-w-sm mb-4">
                {BUSINESS_INFO.description}
              </p>
              <p className="text-[11px] text-[#D4AF77] uppercase tracking-[0.16em] font-bold">
                New York · 580 Fifth Avenue, Suite 821
              </p>
            </div>

            {/* Links to All 6 Main Sections */}
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF77] font-bold mb-3">
                Boutique Directory
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-[#164E3B] hover:text-[#D4AF77] transition-colors py-1 flex items-center gap-1.5 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF77]" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Official Full-Color Brand Icons: WhatsApp, Instagram, Facebook, and Phone */}
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF77] font-bold mb-3">
                Direct Brand Channels
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
                {/* WhatsApp Full-Color Logo */}
                <a
                  href={BUSINESS_INFO.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/50 flex items-center justify-center shadow-xs hover:scale-105 hover:border-[#25D366] transition-all shrink-0"
                  title="WhatsApp: +994 998 00 04 56"
                  aria-label="WhatsApp"
                >
                  <WhatsAppBrandIcon />
                </a>

                {/* Instagram Full-Color Logo */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/50 flex items-center justify-center shadow-xs hover:scale-105 hover:border-[#dc2743] transition-all shrink-0"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <InstagramBrandIcon />
                </a>

                {/* Facebook Full-Color Logo */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/50 flex items-center justify-center shadow-xs hover:scale-105 hover:border-[#1877F2] transition-all shrink-0"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <FacebookBrandIcon />
                </a>

                {/* Phone Full-Color Logo */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneDial}`}
                  className="w-10 h-10 rounded-full bg-[#FFF8ED] border border-[#D4AF77]/50 flex items-center justify-center shadow-xs hover:scale-105 hover:border-[#D4AF77] transition-all shrink-0"
                  title={`Call ${BUSINESS_INFO.phoneDisplay}`}
                  aria-label="Phone Concierge"
                >
                  <PhoneBrandIcon />
                </a>
              </div>

              <p className="text-xs text-[#164E3B] font-semibold">
                Direct: <a href={`tel:${BUSINESS_INFO.phoneDial}`} className="text-[#D4AF77] hover:underline">{BUSINESS_INFO.phoneDisplay}</a>
              </p>
            </div>

          </div>

          {/* Champagne separator */}
          <div className="h-[1px] bg-[#D4AF77]/40 w-full mb-6" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#164E3B]/80 gap-3">
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="font-serif italic text-xs text-[#D4AF77]">
              Haute Joaillerie Atelier · 580 Fifth Avenue, Suite 821, New York, NY 10017
            </p>
          </div>
        </footer>

      </div>
    </section>
  );
};
