import React from 'react';
import { CORE_BADGES, COMPANY_CONTACT } from '../data/companyData';
import { HeaderCarousel } from './HeaderCarousel';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Globe,
  Handshake,
  PackageCheck,
  Plane,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenInquiry?: (serviceName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectService, onOpenInquiry }) => {
  const { t } = useLanguage();

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#C59B4B]" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-[#0A2240]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-[#C59B4B]" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-[#0A2240]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#C59B4B]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C59B4B]" />;
    }
  };

  return (
    <section id="home" className="relative bg-[#FAF8F5] pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-[#E8E2D5] overflow-hidden">
      {/* Gentle background warmth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#EFE8DC]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Grid with Left Messaging and Right Interactive Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Human Messaging */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Location & Trust pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C59B4B]/40 shadow-2xs">
              <MapPin className="w-4 h-4 text-[#C59B4B]" />
              <span className="text-xs font-bold text-[#0A2240] tracking-wide">
                {t('nav.location')}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-medium text-slate-600">
                {t('nav.established')}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-agency-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2240] tracking-tight leading-[1.18]">
                {t('hero.titleLine1')}{' '}
                <span className="italic text-[#C59B4B] underline decoration-[#C59B4B]/40 decoration-4 underline-offset-4">
                  {t('hero.titleLine2')}
                </span>
              </h1>
              
              <div className="text-xs sm:text-sm uppercase tracking-[0.18em] font-bold text-[#0A2240]/85">
                Connecting People <span className="text-[#C59B4B] font-serif">•</span> Bridging Businesses <span className="text-[#C59B4B] font-serif">•</span> Delivering Opportunities
              </div>
            </div>

            {/* Human Introduction - Warm, clear, easy to read international agency prose */}
            <p className="text-sm sm:text-base text-slate-700 leading-[1.7] max-w-xl mx-auto lg:mx-0 font-normal">
              {t('hero.subtitle')}
            </p>

            {/* Trust highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2240]">
                <CheckCircle2 className="w-4 h-4 text-[#1E7E34] shrink-0" />
                <span>{t('hero.statsFactories')}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2240]">
                <CheckCircle2 className="w-4 h-4 text-[#1E7E34] shrink-0" />
                <span>{t('hero.statsSuccess')}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0A2240]">
                <CheckCircle2 className="w-4 h-4 text-[#1E7E34] shrink-0" />
                <span>{t('hero.statsLocal')}</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E7E34] hover:bg-[#18682B] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>{t('hero.ctaWhatsApp')}</span>
              </a>

              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0A2240] font-bold text-sm px-5 py-3 rounded-xl border border-[#C59B4B]/60 shadow-2xs hover:border-[#0A2240] transition-all cursor-pointer"
              >
                <span>{t('hero.ctaConsult')}</span>
                <ArrowRight className="w-4 h-4 text-[#C59B4B]" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3-Image Carousel with the User's Image first */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            <HeaderCarousel onOpenInquiry={onOpenInquiry} />
          </div>

        </div>

        {/* 5 CORE PILLARS FROM THE LOGO - Clean, uncrowded, ample */}
        <div className="mt-14 pt-8 border-t border-[#E8E2D5]">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C59B4B]">
              FOUNDED ON INTEGRITY &amp; TRUST
            </span>
            <h3 className="font-agency-serif text-xl sm:text-2xl font-bold text-[#0A2240] mt-1.5">
              Five Pillars at the Heart of Everything We Do
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {CORE_BADGES.map((badge) => (
              <div
                key={badge.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] hover:border-[#C59B4B] transition-all shadow-2xs text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-center group-hover:bg-white group-hover:border-[#C59B4B] transition-colors">
                  {getBadgeIcon(badge.icon)}
                </div>
                <div className="font-extrabold text-xs text-[#0A2240] tracking-wide uppercase">
                  {badge.label}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {badge.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
