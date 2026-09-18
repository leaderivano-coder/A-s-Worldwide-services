import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  GraduationCap,
  Building2,
  ShieldCheck,
  Briefcase,
  Languages,
  Check,
  MessageCircle,
  ArrowRight,
  Plane,
  PackageCheck,
  FileCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: (serviceTitle: string) => void;
  onViewCert?: (certId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const { t } = useLanguage();
  const services = [
    {
      id: 'study-abroad',
      title: 'University Admissions & China Scholarships',
      category: 'Education & Student Support',
      icon: GraduationCap,
      image: '/assets/hangzhou_campus.jpg',
      imageCaption: 'Campus Life & Admissions at Top Chinese Universities in Hangzhou & Shanghai',
      description:
        'We help international students gain acceptance into prestigious Chinese universities across Hangzhou, Shanghai, Beijing, and nationwide. From selecting the right degree to applying for Chinese Government Scholarships (CSC) and provincial grants, we handle every detail so you can study with confidence.',
      humanTouch:
        'When you arrive in China, our team can meet you at the airport, help you purchase a local SIM card, register your dorm, and open your Chinese bank account.',
      features: [
        'Bachelor’s, Master’s, PhD & Chinese Language placements',
        'Chinese Government (CSC) & University Scholarship guidance',
        'JW202 / DQ Visa documentation support and fast tracking',
        'Airport reception, dormitory check-in & student orientation',
      ],
    },
    {
      id: 'sourcing-china',
      title: 'Product Sourcing & Factory Procurement',
      category: 'Trade & Supply Chain',
      icon: Building2,
      image: '/assets/goods/yiwu_market_goods_1789661600146.jpg',
      imageCaption: 'On-Site Procurement across Yiwu Wholesale Markets & Zhejiang Manufacturing Hubs',
      description:
        'We act as your dedicated purchasing office on the ground in China. Based in Zhejiang, we are minutes away from Yiwu International Trade Market, Ningbo Port, and thousands of top manufacturers across electronics, textiles, home goods, and commercial machinery.',
      humanTouch:
        'We physically visit factories to verify production capability, negotiate real wholesale rates in fluent Mandarin, and ensure you never wire money to unverified suppliers.',
      features: [
        'Direct factory identification & background verification',
        'Mandarin price negotiation with zero middleman markup',
        'Sample collection, evaluation & consolidated shipping',
        'Custom manufacturing contracts & safe payment management',
      ],
    },
    {
      id: 'quality-checking',
      title: 'On-Site Quality Inspection & Shipping',
      category: 'Quality Assurance',
      icon: ShieldCheck,
      image: '/assets/goods/factory_goods_inspection_1789661634402.jpg',
      imageCaption: 'Pre-Shipment Factory Floor Inspection, Packaging Drop Tests & Digital Audit Reports',
      description:
        'Never ship blind. Our inspectors personally travel to the factory floor before your goods leave China. We verify dimensions, material specifications, quantities, and packaging integrity, providing you with high-resolution photographic and video proof.',
      humanTouch:
        'We inspect goods with the same care as if we were buying them for our own business. We don’t approve dispatch until you are 100% satisfied with the inspection report.',
      features: [
        'Pre-shipment physical inspection (PSI) at the factory',
        'Comprehensive digital photo & video inspection reports',
        'Carton drop testing, barcode scanning & export labeling',
        'Cost-effective air and sea freight cargo coordination',
      ],
    },
    {
      id: 'work-visas',
      title: 'China Work Permits & Global Visas',
      category: 'Legal & Immigration',
      icon: Briefcase,
      description:
        'Navigating China’s foreign talent employment laws requires strict adherence to regulations. We assist international professionals, teachers, and business executives in securing legitimate Notification Letters for Foreigner’s Work Permits and Z-Visas.',
      humanTouch:
        'We guide you through degree authentication, apostille legalizations, background checks, and Foreign Expert Bureau filings without confusing paperwork delays.',
      features: [
        'Notification Letters for Foreigner’s Work Permit in PR China',
        'Degree authentication, apostille & police clearance notarization',
        'Work Z-Visa application guidance & embassy assistance',
        'Work residence permit conversion & family dependent visas',
      ],
    },
    {
      id: 'translation-services',
      title: 'Certified Translation & Bilingual Interpreting',
      category: 'Language & Business Liaison',
      icon: Languages,
      description:
        'Accurate communication is the foundation of successful business and legal paperwork in China. We provide certified Chinese ↔ English translations recognized by Chinese government bureaus, embassies, and universities.',
      humanTouch:
        'Coming to China for a business trip, trade fair, or factory tour? We provide professional on-site bilingual accompaniment to translate and protect your commercial interests.',
      features: [
        'Certified academic diplomas, transcripts & syllabus translations',
        'Commercial contracts, purchase agreements & trade terms',
        'Medical reports & criminal background check translations',
        'On-site bilingual interpretation for factory visits & tours',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Ample, calm, dignified */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C59B4B]/40 text-xs font-bold text-[#0A2240] tracking-wider uppercase">
            <span>{t('services.badge')}</span>
          </div>

          <h2 className="font-agency-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2240] tracking-tight leading-tight">
            {t('services.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Ample, Uncrowded Service Cards */}
        <div className="space-y-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E8E2D5] shadow-xs hover:shadow-xl hover:border-[#C59B4B]/60 transform transition-all duration-300 hover:scale-[1.015] will-change-transform space-y-7"
              >
                {/* Card Top: Category, Icon & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FAF8F5] pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#0A2240] text-white flex items-center justify-center shrink-0 shadow-sm border border-[#C59B4B]/40">
                      <IconComponent className="w-7 h-7 text-[#C59B4B]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#C59B4B] uppercase tracking-wider block">
                        {service.category}
                      </span>
                      <h3 className="font-agency-serif text-xl sm:text-2xl font-bold text-[#0A2240] tracking-tight mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Direct Action Button */}
                  <button
                    onClick={() => onOpenInquiry(service.title)}
                    className="self-start sm:self-center inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#0A2240] text-[#0A2240] hover:text-white font-bold text-xs sm:text-sm px-4.5 py-2.5 rounded-xl border border-[#E8E2D5] hover:border-[#0A2240] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{t('services.inquire')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Explanation & Human Touch note */}
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-slate-700 leading-[1.7] font-normal">
                    {service.description}
                  </p>

                  <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border-l-4 border-[#C59B4B] text-xs sm:text-sm text-slate-700 leading-[1.65]">
                    <strong className="text-[#0A2240] font-bold block mb-1">Our Personal Commitment:</strong>
                    {service.humanTouch}
                  </div>
                </div>

                {/* Operations & Goods Image Showcase */}
                {service.image && (
                  <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D5] bg-slate-100 aspect-[16/7] sm:aspect-[21/9] shadow-xs group/img">
                    <img
                      src={service.image}
                      alt={service.imageCaption || service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-100 drop-shadow-sm">
                        {service.imageCaption}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C59B4B] bg-[#0A2240]/90 px-2.5 py-1 rounded-full border border-[#C59B4B]/40 backdrop-blur-xs self-start sm:self-auto shrink-0">
                        Verified On-Site in China
                      </span>
                    </div>
                  </div>
                )}

                {/* Clear Bullet Features (Uncluttered, comfortable spacing) */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0A2240]/80 mb-3">
                    What is included:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#1E7E34]/10 text-[#1E7E34] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Ample bottom consultation invite */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#0A2240] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#C59B4B]/30 shadow-md">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-agency-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Have a custom request or specific question?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              We understand every student and every business has unique requirements. Reach out directly and we'll reply personally from Hangzhou.
            </p>
          </div>

          <a
            href="https://wa.me/8615715745747"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E7E34] hover:bg-[#18682B] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+86 157 1574 5747)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
