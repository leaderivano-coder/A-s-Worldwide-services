import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SupportedLanguage } from '../i18n/translations';

interface LanguageToggleProps {
  variant?: 'navbar' | 'topbar' | 'mobile';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { language, setLanguage, currentLanguageOption, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'topbar') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Select language"
          className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] sm:text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
        >
          <span className="text-xs">{currentLanguageOption.flag}</span>
          <span>{currentLanguageOption.nativeLabel}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-1 w-44 rounded-xl bg-[#0A2240] text-white border border-[#C59B4B]/40 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                  language === lang.code ? 'text-[#E8D4A8] font-bold bg-white/5' : 'text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <div>
                    <div className="leading-tight">{lang.nativeLabel}</div>
                    <div className="text-[10px] text-slate-400">{lang.label}</div>
                  </div>
                </div>
                {language === lang.code && <Check className="w-3.5 h-3.5 text-[#C59B4B]" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`w-full space-y-2 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Globe className="w-3.5 h-3.5 text-[#C59B4B]" />
          <span>Select Language / 语言</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelect(lang.code)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                language === lang.code
                  ? 'bg-[#0A2240] text-white border-[#C59B4B] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.nativeLabel}</span>
              </span>
              {language === lang.code && <Check className="w-3.5 h-3.5 text-[#C59B4B]" />}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default navbar variant
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Change language"
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-[#0A2240] bg-[#FAF8F5] hover:bg-[#EAE4D7] border border-[#E8E2D5] transition-all cursor-pointer shadow-xs"
      >
        <Globe className="w-3.5 h-3.5 text-[#C59B4B]" />
        <span className="text-sm">{currentLanguageOption.flag}</span>
        <span className="tracking-tight">{currentLanguageOption.nativeLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#0A2240]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border-2 border-[#C59B4B]/30 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#C59B4B]" />
            <span>Select Language</span>
          </div>

          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                  language === lang.code
                    ? 'bg-[#0A2240]/5 text-[#0A2240] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{lang.flag}</span>
                  <div>
                    <div className="leading-tight text-xs font-semibold text-slate-900">
                      {lang.nativeLabel}
                    </div>
                    <div className="text-[10px] text-slate-500">{lang.label}</div>
                  </div>
                </div>
                {language === lang.code && (
                  <div className="w-4 h-4 rounded-full bg-[#1E7E34] text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
