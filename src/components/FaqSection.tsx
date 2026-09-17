import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'University Admissions',
    question: 'How do I secure a scholarship for studying in China?',
    answer: 'We assist with Chinese Government Scholarships (CSC), Provincial Scholarships, and University Scholarships. We handle document preparation, recommendation letters, and direct university submissions in Hangzhou and across China.',
  },
  {
    category: 'Visa Processing',
    question: 'What documents are required for a China Work Permit (Z-Visa)?',
    answer: 'Typically, you need an authenticated degree certificate, a clean criminal background check, a medical examination report, and an official Work Permit Notice from the Chinese Foreign Expert Bureau. Our team guides you through every legalization step.',
  },
  {
    category: 'China Sourcing',
    question: 'How do you inspect manufacturers and products in Yiwu or Ningbo?',
    answer: 'Our on-the-ground team in Zhejiang visits factories directly, verifies business licenses, audits production quality, and inspects packed goods before shipment to prevent defects or delays.',
  },
  {
    category: 'General Support',
    question: 'What happens after I arrive in China?',
    answer: 'Our local support team provides full arrival assistance, including airport pickup, university registration or office setup, accommodation guidance, and local banking setup.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C59B4B]/40 text-xs font-bold text-[#0A2240] tracking-wider uppercase shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-agency-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2240]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Clear answers regarding our university admissions, visa processing, and product sourcing services in China.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8E2D5] shadow-xs overflow-hidden transform transition-all duration-300 hover:scale-[1.015] hover:shadow-md hover:border-[#C59B4B]/60 will-change-transform"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#C59B4B] border border-[#C59B4B]/30 shrink-0">
                      {item.category}
                    </span>
                    <span className="font-agency-serif text-base sm:text-lg font-bold text-[#0A2240]">
                      {item.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#0A2240] border border-[#E8E2D5] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0A2240] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-[#FAF8F5] animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Have a specific question not listed here?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-bold text-[#0A2240] hover:text-[#C59B4B] underline transition-colors"
            >
              Contact our team directly on WhatsApp or email
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
