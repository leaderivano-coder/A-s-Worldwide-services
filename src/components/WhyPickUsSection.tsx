import React from 'react';
import {
  MapPin,
  ShieldCheck,
  MessageCircle,
  PiggyBank,
  GraduationCap,
  FileCheck2,
  HeartHandshake
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export const WhyPickUsSection: React.FC = () => {
  const reasons = [
    {
      id: 'presence',
      icon: MapPin,
      title: 'Physically in Hangzhou, China',
      tag: 'On-Site Advantage',
      description:
        'We aren’t a distant broker or an online intermediary. Our office is located in Hangzhou, right in Zhejiang’s manufacturing and educational heartland, minutes from Yiwu and Ningbo.',
    },
    {
      id: 'direct-pricing',
      icon: PiggyBank,
      title: 'Direct Factory & University Rates',
      tag: 'No Middlemen',
      description:
        'We negotiate directly in fluent Chinese on your behalf. You pay the real wholesale factory prices and official university application fees without unnecessary markups.',
    },
    {
      id: 'human-care',
      icon: MessageCircle,
      title: 'Direct 1-on-1 Human Support',
      tag: 'No Bots or Tickets',
      description:
        'You speak directly with our team via WhatsApp and WeChat. We send you live photos, voice updates, and prompt answers whenever you have questions.',
    },
    {
      id: 'quality-first',
      icon: ShieldCheck,
      title: 'Hands-On Quality Inspections',
      tag: 'Zero Defects',
      description:
        'Before a single carton is loaded into a container or air freighter, we inspect the physical goods, test functionality, and verify export packaging to protect your investment.',
    },
    {
      id: 'student-care',
      icon: GraduationCap,
      title: 'Complete Student Arrival Support',
      tag: 'Peace of Mind',
      description:
        'From securing scholarship acceptance letters to welcoming you at the terminal, getting you settled in your dormitory, and setting up your bank cards, we treat students like family.',
    },
    {
      id: 'legal-peace',
      icon: FileCheck2,
      title: 'Official Legal Compliance',
      tag: 'Verified Legitimate',
      description:
        'Every visa application, work permit, and business agreement strictly adheres to Chinese immigration and corporate regulations, ensuring you are 100% legally protected.',
    },
  ];

  return (
    <section id="why-pick-us" className="py-20 sm:py-28 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Ample, serene, human */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C59B4B]/40 text-xs font-bold text-[#0A2240] tracking-wider uppercase">
            <span>The A'S Worldwide Difference</span>
          </div>

          <h2 className="font-agency-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2240] tracking-tight">
            Why People Trust Us
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Personal relationships, verified local access, and genuine care since 2020.
          </p>
        </div>

        {/* 6 Ample, Uncrowded Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#FAF8F5] rounded-3xl p-7 border border-[#E8E2D5] hover:border-[#C59B4B] hover:shadow-sm transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#C59B4B]/50 text-[#0A2240] flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6 text-[#C59B4B]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#0A2240] bg-white px-2.5 py-1 rounded-full border border-[#E8E2D5] tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2240] tracking-tight font-agency-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-[1.65] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-[#FAF8F5] border border-[#C59B4B]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1E7E34] text-white flex items-center justify-center shrink-0 shadow-sm">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-[#0A2240] text-base sm:text-lg">
                Talk with our team in Hangzhou today
              </div>
              <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                We are happy to answer your questions and provide straightforward guidance.
              </div>
            </div>
          </div>

          <a
            href={COMPANY_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E7E34] hover:bg-[#18682B] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Message on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
