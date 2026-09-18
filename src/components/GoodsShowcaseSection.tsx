import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PackageCheck,
  Ship,
  Boxes,
  ShieldCheck,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  X,
  MapPin,
  Sparkles,
  Search
} from 'lucide-react';

interface GoodsItem {
  id: string;
  title: string;
  category: 'all' | 'wholesale' | 'inspection' | 'warehouse' | 'shipping';
  categoryLabel: string;
  location: string;
  image: string;
  tag: string;
  description: string;
  bulletPoints: string[];
  serviceInquiryName: string;
}

const GOODS_ITEMS: GoodsItem[] = [
  {
    id: 'yiwu-wholesale-market',
    title: 'Consumer Goods & Yiwu Wholesale Procurement',
    category: 'wholesale',
    categoryLabel: 'Wholesale Commodities',
    location: 'Yiwu International Trade City, Zhejiang',
    image: '/assets/goods/yiwu_market_goods_1789661600146.jpg',
    tag: 'Direct Factory Sourcing',
    description:
      'Direct purchasing and negotiation from China’s largest wholesale hub. Sourcing home accessories, smart kitchenware, consumer electronics, toys, and lifestyle products with genuine factory pricing.',
    bulletPoints: [
      'Over 75,000 active factory booths across 5 trading districts',
      'Zero middleman commission markup with transparent vendor invoices',
      'Sample collection, consolidation, and courier dispatch to your door'
    ],
    serviceInquiryName: 'Yiwu Wholesale Goods Sourcing'
  },
  {
    id: 'factory-quality-inspection',
    title: 'On-Site Factory Quality Inspection & Audits',
    category: 'inspection',
    categoryLabel: 'Quality Control',
    location: 'Hangzhou, Ningbo & Wenzhou Factories',
    image: '/assets/goods/factory_goods_inspection_1789661634402.jpg',
    tag: 'Pre-Shipment Inspection',
    description:
      'We never ship blind. Our bilingual engineers physically visit the factory floor to check raw materials, production line quality, electrical safety, barcode labeling, and export carton strength.',
    bulletPoints: [
      'Comprehensive digital PDF photo & video audit reports',
      'Carton drop testing, dimension checks, and barcode verification',
      'Approval sign-off only when goods match your exact sample specs'
    ],
    serviceInquiryName: 'Factory Quality Inspection & Audits'
  },
  {
    id: 'warehouse-pallet-staging',
    title: 'Secure Warehousing & Multi-Vendor Consolidation',
    category: 'warehouse',
    categoryLabel: 'Warehouse & Staging',
    location: 'Zhejiang Central Export Hub',
    image: '/assets/goods/warehouse_export_goods_1789661647434.jpg',
    tag: 'Storage & Staging',
    description:
      'Order from multiple manufacturers across China and send them all to our secure warehouse. We inspect, repack, shrink-wrap pallets, and combine everything into one cost-effective shipment.',
    bulletPoints: [
      'Consolidate orders from 5–20 different suppliers into one container',
      'Heavy-duty shrink-wrap palletizing with international shipping labels',
      'Safe, insured warehouse staging with real-time inventory updates'
    ],
    serviceInquiryName: 'Warehouse Staging & Order Consolidation'
  },
  {
    id: 'container-port-logistics',
    title: 'Worldwide Container Freight & Maritime Shipping',
    category: 'shipping',
    categoryLabel: 'Global Shipping',
    location: 'Ningbo-Zhoushan & Shanghai International Ports',
    image: '/assets/goods/port_shipping_containers_1789661614372.jpg',
    tag: 'FCL / LCL Freight',
    description:
      'Smooth ocean cargo transit from the world’s busiest container ports. We manage export declarations, customs clearances, bills of lading, and direct vessel booking to ports worldwide.',
    bulletPoints: [
      'Full Container Load (FCL 20GP/40HQ) & Less than Container Load (LCL)',
      'Chinese export customs clearance, export licenses & fumigation certificates',
      'Door-to-door (DDP) and port-to-port (FOB / CIF) worldwide forwarding'
    ],
    serviceInquiryName: 'Worldwide Container Shipping Logistics'
  },
  {
    id: 'industrial-hardware-materials',
    title: 'Industrial Hardware, Machinery & Raw Materials',
    category: 'wholesale',
    categoryLabel: 'Industrial Procurement',
    location: 'Shaoxing & Yuyao Manufacturing Hubs',
    image: '/assets/china_sourcing.jpg',
    tag: 'Hardware & Machinery',
    description:
      'Procurement of industrial spare parts, plastic molds, textiles, and manufacturing machinery. Our local presence ensures accurate technical interpretation and verified supplier background checks.',
    bulletPoints: [
      'Direct factory vetting to verify legitimate business licenses',
      'Bilingual technical contract drafting to protect your specifications',
      'Heavy-machinery wooden crate packaging for safe transit'
    ],
    serviceInquiryName: 'Industrial Goods & Machinery Sourcing'
  }
];

interface GoodsShowcaseSectionProps {
  onOpenInquiry: (serviceTitle: string) => void;
}

export const GoodsShowcaseSection: React.FC<GoodsShowcaseSectionProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GoodsItem | null>(null);

  const { t } = useLanguage();

  const filteredItems =
    activeCategory === 'all'
      ? GOODS_ITEMS
      : GOODS_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: t('goods.all') },
    { id: 'wholesale', label: t('goods.wholesale') },
    { id: 'inspection', label: t('goods.inspection') },
    { id: 'warehouse', label: t('goods.warehouse') },
    { id: 'shipping', label: t('goods.shipping') },
  ];

  return (
    <section id="goods-showcase" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C59B4B]/40 text-xs font-bold text-[#0A2240] tracking-wider uppercase shadow-2xs">
            <PackageCheck className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>{t('goods.badge')}</span>
          </div>

          <h2 className="font-agency-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2240] tracking-tight leading-tight">
            {t('goods.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t('goods.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0A2240] text-[#E8D4A8] shadow-md border-2 border-[#C59B4B]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8E2D5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Goods Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#E8E2D5] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C59B4B]/60 transform transition-all duration-300 hover:scale-[1.015] will-change-transform flex flex-col group"
            >
              {/* Card Image Container with Hover Overlay */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/80 via-transparent to-black/20" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2240]/90 text-white text-[11px] font-bold border border-[#C59B4B]/40 backdrop-blur-xs">
                    <Sparkles className="w-3 h-3 text-[#C59B4B]" />
                    <span>{item.categoryLabel}</span>
                  </span>
                </div>

                {/* Bottom Overlay: Location & Enlarge Icon */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#C59B4B] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0A2240] flex items-center justify-center backdrop-blur-xs transition-colors shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#C59B4B] tracking-wide uppercase">
                    {item.tag}
                  </span>
                  <h3 className="font-agency-serif text-lg sm:text-xl font-bold text-[#0A2240] leading-snug group-hover:text-[#C59B4B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Key Features / Bullet points */}
                <div className="pt-3 border-t border-[#FAF8F5] space-y-2">
                  {item.bulletPoints.map((bp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-tight">{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-bold text-[#0A2240] hover:text-[#C59B4B] underline transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenInquiry(item.serviceInquiryName)}
                    className="inline-flex items-center gap-1.5 bg-[#0A2240] hover:bg-[#153A68] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B4B]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0A2240] text-[#C59B4B] flex items-center justify-center shrink-0 shadow-md">
              <Boxes className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-agency-serif text-lg sm:text-xl font-bold text-[#0A2240]">
                Have a custom product or specific factory in mind?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Send us your product photos, technical drawing, or AliExpress/1688 link. We will track down the direct Tier-1 factory in Zhejiang, obtain wholesale pricing, and verify production quality on-site.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry('Custom Product Sourcing & Factory Match')}
            className="w-full md:w-auto shrink-0 bg-[#1E7E34] hover:bg-[#18682B] text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Request Sourcing Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Zoom Modal for Selected Item */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C59B4B]" />
                <span>{selectedItem.location}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0A2240] text-[#E8D4A8] text-xs font-bold">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {selectedItem.tag}
                </span>
              </div>

              <h3 className="font-agency-serif text-2xl sm:text-3xl font-bold text-[#0A2240]">
                {selectedItem.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="bg-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-[#E8E2D5] space-y-2.5">
                <h4 className="text-xs font-bold text-[#0A2240] uppercase tracking-wider">
                  Operational Standards & Guarantee:
                </h4>
                {selectedItem.bulletPoints.map((bp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const svc = selectedItem.serviceInquiryName;
                    setSelectedItem(null);
                    onOpenInquiry(svc);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#1E7E34] hover:bg-[#18682B] text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
