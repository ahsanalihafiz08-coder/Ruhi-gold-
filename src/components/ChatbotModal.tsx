import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Phone, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppBrandIcon } from './BrandIcons';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    actionType: 'call' | 'whatsapp' | 'book';
  }>;
}

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (itemOrCategory?: string) => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Welcome to RUHI GOLD. I am your Fifth Avenue salon concierge. How may I assist your jewellery discovery today?`,
      timestamp: 'Just now',
      actions: [
        { label: '580 Fifth Ave Location', actionType: 'whatsapp' },
        { label: 'Schedule Private Viewing', actionType: 'book' },
        { label: 'Direct Boutique Call', actionType: 'call' }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickQuestions = [
    'Where is the boutique located?',
    'How do I book a private appointment?',
    'What jewellery categories do you offer?',
    'What is your contact phone number?'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = '';
      let actions: ChatMessage['actions'] = [];

      if (lower.includes('location') || lower.includes('where') || lower.includes('address')) {
        responseText = `RUHI GOLD is located in Manhattan's historic Diamond District at 580 Fifth Avenue, Suite 821, New York, New York, 10017. We welcome patrons for private salon appointments.`;
        actions = [
          { label: 'Book Viewing', actionType: 'book' },
          { label: 'Call Concierge', actionType: 'call' }
        ];
      } else if (lower.includes('book') || lower.includes('appointment') || lower.includes('visit') || lower.includes('viewing')) {
        responseText = `You can schedule an exclusive consultation at our 580 Fifth Avenue private suite. Our master jewellers prepare a curated tray tailored to your personal requirements.`;
        actions = [
          { label: 'Open Booking Form', actionType: 'book' },
          { label: 'WhatsApp Inquiry', actionType: 'whatsapp' }
        ];
      } else if (lower.includes('category') || lower.includes('collection') || lower.includes('offer') || lower.includes('what do you have')) {
        responseText = `RUHI GOLD presents nine master categories including Gold Chains, Charm Bracelets, Bridal Suites, Bangles, and Gemstone Rings. Each piece is crafted in solid 18k gold with certified stones.`;
        actions = [
          { label: 'Inquire on Collections', actionType: 'whatsapp' },
          { label: 'Book Viewing', actionType: 'book' }
        ];
      } else if (lower.includes('phone') || lower.includes('call') || lower.includes('contact') || lower.includes('number')) {
        responseText = `Our direct concierge telephone line is ${BUSINESS_INFO.phoneDisplay}. You can also connect via WhatsApp at the same number (+994998000456).`;
        actions = [
          { label: 'Call +994 998 00 04 56', actionType: 'call' },
          { label: 'WhatsApp +994998000456', actionType: 'whatsapp' }
        ];
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('in stock') || lower.includes('stock')) {
        responseText = `Item price tags range from $1,100 to $5,600 and are clearly displayed on each piece. Customized commissions and private salon viewings can be scheduled directly with our master goldsmiths.`;
        actions = [
          { label: 'Inquire on Pricing', actionType: 'whatsapp' },
          { label: 'Speak to Jeweller', actionType: 'call' }
        ];
      } else {
        responseText = `Thank you for your question. For detailed specifications, custom commissions, or private suite reservations at 580 Fifth Avenue, our salon concierge is glad to assist you directly.`;
        actions = [
          { label: 'Call Boutique', actionType: 'call' },
          { label: 'WhatsApp Concierge', actionType: 'whatsapp' }
        ];
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseText,
        timestamp: 'Just now',
        actions
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleActionClick = (actionType: 'call' | 'whatsapp' | 'book') => {
    if (actionType === 'call') {
      window.location.href = `tel:${BUSINESS_INFO.phoneDial}`;
    } else if (actionType === 'whatsapp') {
      window.open(BUSINESS_INFO.getWhatsAppUrl('Hello RUHI GOLD, I am enquiring via your AI Boutique Concierge.'), '_blank');
    } else if (actionType === 'book') {
      onClose();
      onOpenBooking('Boutique Salon Consultation');
    }
  };

  return (
    <>
      {/* Mobile Backdrop for effortless dismissal */}
      <div
        className="sm:hidden fixed inset-0 z-40 bg-[#164E3B]/40 backdrop-blur-xs animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Proper Container Position: Docked at bottom-right right above the floating trigger */}
      <div
        className="fixed bottom-20 right-3 sm:bottom-22 sm:right-7 z-50 w-[calc(100vw-1.5rem)] sm:w-[420px] max-h-[82vh] h-[560px] bg-[#FFF8ED] border border-[#D4AF77] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbot-title"
      >
        {/* Header */}
        <div className="p-3.5 sm:p-4 border-b border-[#D4AF77]/30 bg-[#FFF8ED] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-[#D4AF77] bg-[#164E3B] text-[#D4AF77] flex items-center justify-center shadow-xs shrink-0">
              <Sparkles className="w-4 h-4 text-[#D4AF77]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="chatbot-title" className="font-serif text-base text-[#164E3B] font-bold">
                  RUHI GOLD Concierge
                </h2>
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider font-semibold text-[#164E3B] bg-[#FFF8ED] px-2 py-0.5 rounded-full border border-[#D4AF77]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-[#D4AF77] font-semibold">
                580 Fifth Avenue · AI Boutique Assistant
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full border border-[#D4AF77]/50 flex items-center justify-center text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] transition-colors shrink-0"
            aria-label="Close concierge assistant"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Conversation Area */}
        <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 bg-[#FAF6EE]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[88%] p-3 text-xs leading-relaxed rounded-2xl border ${
                  msg.sender === 'user'
                    ? 'bg-[#164E3B] text-[#FFF8ED] border-[#164E3B]'
                    : 'bg-[#FFF8ED] text-[#164E3B] border-[#D4AF77]/50 shadow-xs'
                }`}
              >
                <p>{msg.text}</p>

                {/* Action Buttons with rounded corners */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-[#D4AF77]/30 flex flex-wrap gap-1.5">
                    {msg.actions.map((act, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleActionClick(act.actionType)}
                        className="py-1 px-2.5 bg-[#FFF8ED] text-[#164E3B] hover:bg-[#164E3B] hover:text-[#FFF8ED] border border-[#D4AF77] text-[10px] font-bold uppercase tracking-wider rounded-full transition-colors inline-flex items-center gap-1 shadow-xs"
                      >
                        {act.actionType === 'call' && <Phone className="w-2.5 h-2.5 text-[#D4AF77]" />}
                        {act.actionType === 'whatsapp' && <WhatsAppBrandIcon className="w-2.5 h-2.5" />}
                        {act.actionType === 'book' && <Calendar className="w-2.5 h-2.5 text-[#D4AF77]" />}
                        <span>{act.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-[9px] text-[#164E3B]/60 mt-0.5 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-xs text-[#D4AF77] font-serif italic p-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF77] animate-pulse" />
              <span>Concierge is drafting a response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions Strip */}
        <div className="p-2 bg-[#FFF8ED] border-t border-[#D4AF77]/25 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] uppercase font-bold text-[#D4AF77] tracking-wider shrink-0 pl-1">
              Ask:
            </span>
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(q)}
                className="text-[10px] text-[#164E3B] font-medium bg-[#FAF6EE] hover:bg-[#164E3B] hover:text-[#FFF8ED] border border-[#D4AF77]/40 px-2.5 py-1 rounded-full transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-2.5 sm:p-3 bg-[#FFF8ED] border-t border-[#D4AF77]/30 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Ask about boutique collections, salon location..."
            className="flex-1 px-3.5 py-2 bg-[#FAF6EE] rounded-full border border-[#D4AF77]/60 text-[#164E3B] text-xs focus:outline-none focus:border-[#164E3B]"
          />
          <button
            type="button"
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="w-8 h-8 bg-[#164E3B] text-[#FFF8ED] disabled:opacity-40 border border-[#D4AF77] rounded-full flex items-center justify-center hover:bg-[#0E3527] transition-colors shrink-0 shadow-xs"
            aria-label="Send query"
          >
            <Send className="w-3 h-3 text-[#D4AF77]" />
          </button>
        </div>
      </div>
    </>
  );
};
