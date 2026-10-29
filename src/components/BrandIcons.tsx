import React from 'react';

// Official WhatsApp Brand Logo with authentic green chat bubble and crisp white handset
export const WhatsAppBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 32 32" fill="none">
    <path
      d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.474.673 4.887 1.954 6.993L2.667 29.333l6.533-1.92A13.27 13.27 0 0016 29.333c7.364 0 13.333-5.97 13.333-13.333S23.364 2.667 16 2.667z"
      fill="#25D366"
    />
    <path
      d="M22.507 19.387c-.36-.18-2.127-1.047-2.46-1.167-.333-.12-.573-.18-.813.18-.24.36-.933 1.167-1.147 1.407-.213.24-.427.273-.787.093-.36-.18-1.52-.56-2.893-1.787-1.067-.953-1.787-2.133-2-2.493-.213-.36-.02-.553.16-.733.16-.16.36-.413.54-.62.18-.207.24-.353.36-.587.12-.233.06-.44-.03-.62-.09-.18-.813-1.96-1.113-2.687-.293-.707-.593-.613-.813-.627h-.7c-.24 0-.627.093-.953.453-.327.36-1.253 1.227-1.253 2.993s1.28 3.473 1.46 3.713c.18.24 2.52 3.847 6.107 5.393.853.367 1.52.587 2.04.753.86.273 1.64.233 2.26.14.693-.107 2.127-.867 2.427-1.707.3-.84.3-1.56.213-1.707-.087-.147-.327-.233-.687-.413z"
      fill="#FFFFFF"
    />
  </svg>
);

// Official Instagram Brand Logo with authentic multi-stop gradient
export const InstagramBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 24 24">
    <radialGradient id="rgInstaComp" cx="0.2" cy="1" r="1">
      <stop offset="0%" stopColor="#FFD521" />
      <stop offset="50%" stopColor="#F50000" />
      <stop offset="100%" stopColor="#B900B4" />
    </radialGradient>
    <rect width="24" height="24" rx="6" fill="url(#rgInstaComp)" />
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="#FFFFFF" />
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
  </svg>
);

// Official Facebook Brand Logo
export const FacebookBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      d="M15.5 12.5H13V21H9.8V12.5H8.2V9.8H9.8V7.9C9.8 6.3 10.8 4.5 13.5 4.5H15.8V7.2H14.1C13.3 7.2 13 7.6 13 8.3V9.8H15.8L15.5 12.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

// Official Professional Phone Call Logo (Deep Emerald with Champagne Gold Handset)
export const PhoneBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="#164E3B" stroke="#D4AF77" strokeWidth="1.5" />
    <path
      d="M21.5 18.8c-.5-.3-1.5-.8-1.8-.9-.3-.1-.5 0-.7.3l-.7.8c-.2.2-.4.2-.7.1-1.1-.5-2-1.4-2.5-2.5-.1-.3 0-.5.1-.7l.8-.7c.3-.2.4-.4.3-.7-.1-.3-.6-1.3-.9-1.8-.2-.4-.5-.4-.8-.4h-.7c-.4 0-.8.2-.9.5-.8 1.1-.9 2.4-.5 3.7.8 2.3 2.6 4.1 4.9 4.9 1.3.4 2.6.3 3.7-.5.3-.2.5-.6.5-.9v-.7c0-.3-.2-.7-.6-.8z"
      fill="#D4AF77"
    />
  </svg>
);

// Official Luxury AI Chatbot Logo (Deep Emerald & Champagne Gold)
export const AIChatbotBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="#0E3527" stroke="#D4AF77" strokeWidth="1.5" />
    <rect x="9" y="11" width="14" height="11" rx="3.5" fill="#164E3B" stroke="#D4AF77" strokeWidth="1.2" />
    <circle cx="13" cy="16.5" r="1.5" fill="#D4AF77" />
    <circle cx="19" cy="16.5" r="1.5" fill="#D4AF77" />
    <path d="M16 6.5v4.5M14 6.5h4" stroke="#D4AF77" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M13.5 19.5c.8.6 1.7.9 2.5.9s1.7-.3 2.5-.9" stroke="#D4AF77" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
