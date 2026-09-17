import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { X, MessageCircle, Mail, CheckCircle2, Instagram, Facebook } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService || 'Admissions to Study in China & Scholarships');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (channel: 'whatsapp' | 'email') => {
    const text = `Hello A'S Worldwide Services!%0A%0AMy Name: ${encodeURIComponent(name || 'Friend')}%0ACountry: ${encodeURIComponent(country || 'Not specified')}%0AService of Interest: ${encodeURIComponent(selectedService)}%0ADetails: ${encodeURIComponent(message || 'I would love to learn more and discuss how you can assist me.')}`;

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/8615715745747?text=${text}`, '_blank');
    } else {
      window.location.href = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(`Inquiry: ${selectedService} - ${name || 'Client'}`)}&body=${text.replace(/%0A/g, '%0D%0A')}`;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-[430px] rounded-2xl shadow-xl overflow-hidden border border-[#E8E2D5] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A2240] text-white px-4.5 py-3 flex items-center justify-between border-b border-[#C59B4B]/40">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#C59B4B]" />
            <h3 className="font-agency-serif font-bold text-sm sm:text-base tracking-wide">Direct Consultation &amp; Inquiry</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-2.5 bg-[#FAF8F5]">
            <div className="w-11 h-11 bg-emerald-100 text-[#1E7E34] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-agency-serif text-lg font-bold text-[#0A2240]">Connecting You Now</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Opening your direct message to our Hangzhou office. We look forward to speaking with you!
            </p>
          </div>
        ) : (
          <div className="p-4 sm:p-5 space-y-3">
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Speak directly with our team in Hangzhou, China via WhatsApp or Email:
            </p>

            <div className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-[#0A2240] mb-0.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full text-xs px-3 py-1.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C59B4B] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0A2240] mb-0.5">
                    Your Country
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. South Africa, UK..."
                    className="w-full text-xs px-3 py-1.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C59B4B] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#0A2240] mb-0.5">
                  Service of Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-xs px-3 py-1.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C59B4B] focus:bg-white"
                >
                  <option value="Admissions to Study in China & Scholarships">Admissions to Study in China &amp; Scholarships</option>
                  <option value="Product Sourcing & Factory Procurement">Product Sourcing &amp; Factory Procurement</option>
                  <option value="Quality Product Checking & Factory Inspections">Quality Product Checking &amp; Factory Inspections</option>
                  <option value="China Work Permits & Global Visas">China Work Permits &amp; Global Visas</option>
                  <option value="Certified Translation & Interpreting">Certified Translation &amp; Interpreting</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#0A2240] mb-0.5">
                  Message or Questions (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  placeholder="Degree interest, sourcing requirements, or general questions..."
                  className="w-full text-xs px-3 py-1.5 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C59B4B] focus:bg-white"
                />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => handleSubmit('whatsapp')}
                className="flex-1 bg-[#1E7E34] hover:bg-[#18682B] text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat via WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => handleSubmit('email')}
                className="flex-1 bg-[#0A2240] hover:bg-[#06162B] text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#C59B4B]" />
                <span>Send via Email</span>
              </button>
            </div>

            {/* Official Social Links in Modal */}
            <div className="pt-2 border-t border-[#E8E2D5] flex items-center justify-between text-[11px] text-slate-500">
              <span className="text-[10px]">Follow us:</span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0A2240] hover:text-pink-600 font-semibold transition-colors"
                  title="Instagram: @asworldwideservice.cn"
                >
                  <Instagram className="w-3 h-3 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href={COMPANY_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0A2240] hover:text-blue-600 font-semibold transition-colors"
                  title="Facebook Page"
                >
                  <Facebook className="w-3 h-3 text-blue-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
