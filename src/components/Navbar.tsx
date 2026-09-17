import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, Mail, Menu, X, MapPin, Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2D5] shadow-xs">
      {/* Top calm bar with official colors */}
      <div className="bg-[#0A2240] text-white text-xs py-2 px-4 border-b border-[#C59B4B]/30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-200">
            <MapPin className="w-3.5 h-3.5 text-[#C59B4B] shrink-0" />
            <span className="font-medium tracking-wide">Hangzhou (Fuyang District), Zhejiang Province, China</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-[#E8D4A8] font-normal">Established in 2020</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 text-xs">
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp:</span>
              <span className="font-bold text-white">{COMPANY_CONTACT.whatsapp}</span>
            </a>

            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-[#C59B4B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>

            <div className="hidden sm:flex items-center gap-2.5 border-l border-white/20 pl-3.5">
              <a
                href={COMPANY_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-pink-400 transition-colors p-1"
                title="Follow on Instagram (@asworldwideservice.cn)"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors p-1"
                title="Follow on Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group cursor-pointer"
        >
          <BrandLogo variant="horizontal" />
        </a>

        {/* Desktop Navigation Links - Ample, calm, human */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            What We Do
          </button>
          <button
            onClick={() => scrollToSection('goods-showcase')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold flex items-center gap-1.5 text-[#0A2240]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4B]"></span>
            <span>Goods &amp; Logistics</span>
          </button>
          <button
            onClick={() => scrollToSection('why-pick-us')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            Student &amp; Client Stories
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#0A2240] transition-colors py-1 cursor-pointer font-semibold"
          >
            Contact &amp; Credentials
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 bg-[#0A2240] hover:bg-[#06162B] text-white text-xs sm:text-sm font-bold px-4.5 py-2.5 rounded-xl border border-[#C59B4B]/50 shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenInquiry()}
            className="sm:hidden bg-[#0A2240] text-white text-xs font-bold px-3 py-1.5 rounded-md border border-[#C59B4B]/50"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0A2240]" />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E2D5] px-4 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            What We Do
          </button>
          <button
            onClick={() => scrollToSection('goods-showcase')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240] flex items-center justify-between"
          >
            <span>Goods &amp; Logistics</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0A2240] text-[#E8D4A8]">New</span>
          </button>
          <button
            onClick={() => scrollToSection('why-pick-us')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            Student &amp; Client Stories
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-slate-800 hover:bg-[#FAF8F5] hover:text-[#0A2240]"
          >
            Contact &amp; Credentials
          </button>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1E7E34] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp (+86 157 1574 5747)</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={COMPANY_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#FAF8F5] border border-[#E8E2D5] text-[#0A2240] py-2 px-3 rounded-xl font-semibold text-xs hover:border-pink-500"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a
                href={COMPANY_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#FAF8F5] border border-[#E8E2D5] text-[#0A2240] py-2 px-3 rounded-xl font-semibold text-xs hover:border-blue-500"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
