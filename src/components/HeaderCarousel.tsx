import React, { useState, useEffect, useRef } from 'react';
import { ProvidedInfographic } from './ProvidedInfographic';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  GraduationCap,
  PackageCheck,
  Globe2,
  CheckCircle2,
  Boxes,
  Ship,
  ShieldCheck
} from 'lucide-react';

interface HeaderCarouselProps {
  onOpenInquiry?: (serviceName?: string) => void;
  className?: string;
}

export const HeaderCarousel: React.FC<HeaderCarouselProps> = ({ onOpenInquiry, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'ecosystem-infographic',
      type: 'custom-infographic',
      title: "A'S WorldWide SERVICES Ecosystem",
      subtitle: "Connecting People • Bridging Businesses • Delivering Opportunities",
      tag: "Official Comprehensive Ecosystem",
      tagIcon: Sparkles,
      tagColor: "bg-[#0A2240] text-[#E8D4A8] border-[#C59B4B]",
      actionText: "Consult Our Team",
      serviceName: "Comprehensive China Services",
      description: "Our complete on-the-ground service network: Admissions, Work Permits, Factory Sourcing, China Tours, Translations, and Global Connections.",
    },
    {
      id: 'yiwu-market-goods',
      type: 'photo',
      src: '/assets/goods/yiwu_market_goods_1789661600146.jpg',
      alt: 'Yiwu International Trade City wholesale consumer goods and commodities in China',
      title: "Consumer Goods & Yiwu Wholesale Markets",
      subtitle: "Direct tier-1 factory pricing on electronics, kitchenware, home decor & retail goods",
      tag: "China Wholesale Sourcing",
      tagIcon: Boxes,
      tagColor: "bg-amber-900 text-amber-100 border-amber-500/50",
      actionText: "Source Wholesale Goods",
      serviceName: "Yiwu Wholesale Goods Sourcing",
      description: "Access over 75,000 factory booths across Yiwu International Trade City with zero middleman markups and verified supplier negotiation.",
    },
    {
      id: 'university-campus',
      type: 'photo',
      src: '/assets/hangzhou_campus.jpg',
      alt: 'Prestige university campus in Hangzhou China for international students',
      title: "Admissions to Study in China & Scholarships",
      subtitle: "Full tuition, partial, and government scholarships across China's leading universities",
      tag: "Education & Scholarships",
      tagIcon: GraduationCap,
      tagColor: "bg-emerald-900 text-emerald-100 border-emerald-500/50",
      actionText: "Apply for Scholarships",
      serviceName: "Admissions to Study in China & Scholarships",
      description: "Direct university placement, JW202 visa processing, and personalized campus onboarding in Hangzhou.",
    },
    {
      id: 'port-container-shipping',
      type: 'photo',
      src: '/assets/goods/port_shipping_containers_1789661614372.jpg',
      alt: 'Ningbo-Zhoushan ocean cargo port and international container freight shipping in China',
      title: "Worldwide Shipping & Container Freight",
      subtitle: "Direct export logistics via Ningbo-Zhoushan & Shanghai international maritime ports",
      tag: "Maritime Cargo & Freight",
      tagIcon: Ship,
      tagColor: "bg-cyan-900 text-cyan-100 border-cyan-500/50",
      actionText: "Get Shipping Rates",
      serviceName: "Worldwide Container Shipping Logistics",
      description: "Reliable full-container (FCL) and consolidated (LCL) freight forwarding with Chinese customs declaration and worldwide bills of lading.",
    },
    {
      id: 'factory-inspection',
      type: 'photo',
      src: '/assets/goods/factory_goods_inspection_1789661634402.jpg',
      alt: 'On-site factory quality inspection and testing in Zhejiang China',
      title: "On-Site Factory Quality Inspection",
      subtitle: "Physical pre-shipment inspections, packaging verification & production testing in China",
      tag: "Quality Assurance",
      tagIcon: ShieldCheck,
      tagColor: "bg-indigo-900 text-indigo-100 border-indigo-500/50",
      actionText: "Request Inspection",
      serviceName: "Factory Quality Inspection & Audits",
      description: "On-the-ground engineers physically visit production lines, verify raw materials, perform carton drop tests, and provide digital PDF reports.",
    },
    {
      id: 'sourcing-logistics',
      type: 'photo',
      src: '/assets/goods/warehouse_export_goods_1789661647434.jpg',
      alt: 'Modern export warehouse storage and multi-vendor pallet consolidation in Zhejiang China',
      title: "Warehouse Storage & Pallet Consolidation",
      subtitle: "Order collection from multiple Chinese suppliers with safe palletizing and worldwide export",
      tag: "Warehouse Logistics",
      tagIcon: PackageCheck,
      tagColor: "bg-blue-900 text-blue-100 border-blue-500/50",
      actionText: "Consolidate Orders",
      serviceName: "Warehouse Staging & Order Consolidation",
      description: "Combine shipments from multiple vendors into one container, with heavy-duty shrink-wrap palletizing and damage-free transit.",
    },
  ];

  // Auto-advance slide every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused || isZoomModalOpen) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isZoomModalOpen, slides.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border-2 border-[#C59B4B]/50 bg-white shadow-xl shadow-[#0A2240]/10 select-none group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header Carousel Bar with Slide Title & Indicator */}
      <div className="bg-[#0A2240] text-white px-4 sm:px-6 py-2.5 flex items-center justify-between border-b border-[#C59B4B]/30 z-20 relative">
        <div className="flex items-center gap-2 sm:gap-3 truncate">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-xs text-[#E8D4A8] border border-[#C59B4B]/30 font-semibold shrink-0">
            {React.createElement(currentSlide.tagIcon, { className: "w-3.5 h-3.5 text-[#C59B4B]" })}
            <span className="hidden sm:inline">{currentSlide.tag}</span>
            <span className="sm:hidden">Slide {currentIndex + 1}</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-white truncate font-agency-serif tracking-wide">
            {currentSlide.title}
          </span>
        </div>

        {/* Action icons & Fullscreen toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsZoomModalOpen(true)}
            aria-label="Enlarge view"
            title="Enlarge slide"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#E8D4A8]" />
          </button>
        </div>
      </div>

      {/* Main Slide Display Stage */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/11] max-h-[560px] bg-slate-100 flex items-center justify-center overflow-hidden">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {slide.type === 'custom-infographic' ? (
                /* Slide 1: The User's Provided Image / Infographic (Exact, pristine, unedited, full view) */
                <div 
                  className="w-full h-full bg-white flex items-center justify-center p-2 sm:p-4 cursor-pointer"
                  onClick={() => setIsZoomModalOpen(true)}
                  title="Click to view full unedited image"
                >
                  <ProvidedInfographic className="max-w-full max-h-full" />
                </div>
              ) : (
                /* Slides 2 & 3: High resolution photos */
                <div className="relative w-full h-full">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Gentle gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/90 via-[#0A2240]/30 to-transparent" />
                  
                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white z-20 space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C59B4B] text-[#0A2240] shadow-sm">
                      {React.createElement(slide.tagIcon, { className: "w-3.5 h-3.5" })}
                      <span>{slide.tag}</span>
                    </span>
                    <h4 className="font-agency-serif text-xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                      {slide.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal leading-relaxed line-clamp-2">
                      {slide.description}
                    </p>
                    {onOpenInquiry && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => onOpenInquiry(slide.serviceName)}
                          className="inline-flex items-center gap-2 bg-[#1E7E34] hover:bg-[#18682B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-md transition-all cursor-pointer"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{slide.actionText}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0A2240]/80 hover:bg-[#0A2240] text-white border border-[#C59B4B]/60 shadow-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronLeft className="w-6 h-6 text-[#E8D4A8]" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0A2240]/80 hover:bg-[#0A2240] text-white border border-[#C59B4B]/60 shadow-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronRight className="w-6 h-6 text-[#E8D4A8]" />
        </button>
      </div>

      {/* Bottom Carousel Controller & Slide Indicators */}
      <div className="bg-[#FAF8F5] border-t border-[#E8E2D5] px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Slide navigation indicators */}
        <div className="flex items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 h-2.5 bg-[#0A2240]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
          <span className="text-[11px] font-bold text-slate-500 ml-2">
            {currentIndex + 1} / {slides.length}
          </span>
        </div>

        {/* Short slide caption and quick action */}
        <div className="flex items-center gap-3 text-center sm:text-right">
          <span className="text-xs text-slate-600 hidden md:inline font-medium">
            {currentSlide.subtitle}
          </span>
          {onOpenInquiry && (
            <button
              type="button"
              onClick={() => onOpenInquiry(currentSlide.serviceName)}
              className="text-xs font-bold text-[#0A2240] hover:text-[#C59B4B] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{currentSlide.actionText}</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>

      {/* Full-Screen Zoom Modal for Complete Unedited Infographic Inspection */}
      {isZoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-auto shadow-2xl border-2 border-[#C59B4B] p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5] mb-4">
              <div>
                <h3 className="font-agency-serif text-lg sm:text-xl font-bold text-[#0A2240]">
                  {currentSlide.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Original Official High-Resolution View • Unedited
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A2240] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Content In Modal */}
            <div className="w-full flex items-center justify-center min-h-[400px]">
              {currentSlide.type === 'custom-infographic' ? (
                <div className="w-full max-w-2xl mx-auto">
                  <ProvidedInfographic className="w-full h-auto" />
                </div>
              ) : (
                <img
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="pt-3 border-t border-[#E8E2D5] mt-4 flex items-center justify-between text-xs text-slate-600">
              <span>A'S WorldWide SERVICES • Hangzhou, China</span>
              {onOpenInquiry && (
                <button
                  type="button"
                  onClick={() => {
                    setIsZoomModalOpen(false);
                    onOpenInquiry(currentSlide.serviceName);
                  }}
                  className="bg-[#0A2240] text-white font-bold px-3 py-1.5 rounded-lg hover:bg-[#06162B] transition-colors cursor-pointer"
                >
                  Inquire About This Service
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
