import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

interface FloatingActionsProps {
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenInquiry }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Automatically show when scrolled past 350px
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position in case page was reloaded midway
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Automatic Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className={`pointer-events-auto w-9 h-9 rounded-full bg-white text-[#0A2240] border border-[#C59B4B]/70 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-[#FAF8F5] active:scale-95 cursor-pointer group ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4 text-[#0A2240] group-hover:text-[#C59B4B] transition-colors" />
      </button>

      {/* Onscreen "Let's Talk" Floating Trigger */}
      <button
        type="button"
        onClick={() => onOpenInquiry()}
        aria-label="Let's talk with A'S Worldwide team"
        className="pointer-events-auto group inline-flex items-center gap-2 bg-[#0A2240] hover:bg-[#06162B] text-white pl-2.5 pr-3.5 py-2 rounded-full border border-[#C59B4B] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98 cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#1E7E34] text-white flex items-center justify-center shadow-xs">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          {/* Live pulsing online indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border border-[#0A2240]"></span>
          </span>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs font-bold tracking-wide text-white flex items-center gap-1 leading-tight">
            <span>Let's Talk</span>
            <span className="text-[#C59B4B] text-[10px] hidden sm:inline font-mono">→</span>
          </span>
          <span className="text-[9px] text-[#E8D4A8] font-medium leading-none mt-0.5 hidden sm:block">
            Hangzhou Office
          </span>
        </div>
      </button>
    </div>
  );
};
