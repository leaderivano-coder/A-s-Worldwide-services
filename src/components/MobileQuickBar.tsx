import React from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { MessageCircle, Mail, HelpCircle } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenInquiry: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenInquiry }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D5] px-3 py-2 shadow-lg">
      <div className="flex items-center justify-between gap-2">
        {/* Direct WhatsApp Chat */}
        <a
          href={COMPANY_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#1E7E34] active:bg-[#18682B] text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-xs"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${COMPANY_CONTACT.email}`}
          className="flex items-center justify-center bg-[#FAF8F5] active:bg-[#E8E2D5] text-[#0A2240] p-2.5 rounded-xl border border-[#E8E2D5]"
          title="Send Email"
        >
          <Mail className="w-4 h-4 text-[#0A2240]" />
        </a>

        {/* Consultation Form Modal */}
        <button
          onClick={onOpenInquiry}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A2240] active:bg-[#06162B] text-white font-bold text-xs py-2.5 px-3 rounded-xl border border-[#C59B4B]/40 shadow-xs cursor-pointer"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[#C59B4B]" />
          <span>Inquire Online</span>
        </button>
      </div>
    </div>
  );
};
