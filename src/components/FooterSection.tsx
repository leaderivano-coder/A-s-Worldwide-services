import React, { useState } from 'react';
import { COMPANY_CONTACT, CERTIFICATES } from '../data/companyData';
import { Certificate } from '../types';
import { BrandLogo } from './BrandLogo';
import {
  ShieldCheck,
  MapPin,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Copy,
  Check,
  ExternalLink,
  Award
} from 'lucide-react';

interface FooterSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
  onOpenInquiry: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onSelectCertificate,
  onOpenInquiry
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <footer id="contact" className="bg-[#0A2240] text-white pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b border-[#C59B4B]/20 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="p-2 bg-white rounded-2xl">
              <BrandLogo size="72px" />
            </div>
            <div>
              <h3 className="font-agency-serif text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
                <span>A'S WorldWide SERVICES</span>
                <span className="text-[10px] bg-[#C59B4B]/20 text-[#E8D4A8] border border-[#C59B4B]/50 px-2 py-0.5 rounded font-bold font-sans">
                  REGISTERED
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#E8D4A8] mt-0.5 font-normal">
                Connecting People • Bridging Businesses • Delivering Opportunities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="bg-[#C59B4B] hover:bg-[#b0873a] text-[#0A2240] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              Consult with Our Team
            </button>
          </div>
        </div>

        {/* Credentials & Accreditations Showcase */}
        <div className="py-12 border-b border-[#C59B4B]/20">
          <div className="text-center sm:text-left mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C59B4B]">
              VERIFIED COMPLIANCE
            </span>
            <h4 className="font-agency-serif text-xl sm:text-2xl font-bold text-white mt-1">
              Official Certifications &amp; Accreditations
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Select any credential below to review full accreditation numbers and issuer details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                onClick={() => onSelectCertificate(cert)}
                className="bg-[#06162B] hover:bg-[#0E2C52] border border-[#C59B4B]/30 hover:border-[#C59B4B] rounded-2xl p-5 transition-all cursor-pointer group shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#0A2240] border border-[#C59B4B]/50 flex items-center justify-center text-[#C59B4B] group-hover:scale-105 transition-transform">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] bg-[#C59B4B]/15 text-[#E8D4A8] px-2 py-0.5 rounded font-mono font-bold">
                      VERIFIED
                    </span>
                  </div>

                  <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#C59B4B] transition-colors leading-snug">
                    {cert.title}
                  </h5>

                  {cert.chineseTitle && (
                    <div className="text-[11px] text-red-300/80 font-serif leading-tight">
                      {cert.chineseTitle}
                    </div>
                  )}

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-[#C59B4B] font-semibold">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Direct Contact Section */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Location Details: Hangzhou 富阳 */}
          <div className="lg:col-span-5 space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-13 h-13 rounded-2xl bg-[#C59B4B] text-[#0A2240] flex items-center justify-center shadow-md">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-baseline gap-2 justify-center sm:justify-start">
                  <span>HANGZHOU</span>
                  <span className="text-[#C59B4B] font-serif text-3xl font-bold">
                    富阳
                  </span>
                </div>
                <p className="text-xs text-[#E8D4A8]">
                  Zhejiang Province, People's Republic of China
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto sm:mx-0">
              Based in Hangzhou (Fuyang District), the capital of Zhejiang Province. Within close reach of Yiwu International Trade City, Ningbo Deepwater Port, and premier Chinese universities.
            </p>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-7 bg-[#06162B] border border-[#C59B4B]/30 rounded-3xl p-6 sm:p-7 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C59B4B] border-b border-[#C59B4B]/20 pb-2 flex items-center justify-between">
              <span>Direct Channels</span>
              <span className="text-[10px] text-slate-400 font-normal">Tap to open or copy</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* WhatsApp */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0A2240] border border-emerald-900/60 hover:border-emerald-500/60 transition-colors">
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 overflow-hidden hover:opacity-90"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1E7E34] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-emerald-400 block font-bold">WhatsApp (Direct)</span>
                    <span className="text-xs font-bold text-white tracking-wide truncate block">
                      {COMPANY_CONTACT.whatsapp}
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard(COMPANY_CONTACT.whatsapp, 'whatsapp')}
                  className="text-slate-400 hover:text-white p-2 rounded transition-colors"
                  title="Copy WhatsApp"
                >
                  {copiedField === 'whatsapp' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0A2240] border border-[#C59B4B]/30 hover:border-[#C59B4B] transition-colors">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-3 overflow-hidden hover:opacity-90"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#C59B4B] text-[#0A2240] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-[#E8D4A8] block font-bold">Email</span>
                    <span className="text-xs font-bold text-white truncate block">
                      {COMPANY_CONTACT.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard(COMPANY_CONTACT.email, 'email')}
                  className="text-slate-400 hover:text-white p-2 rounded transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0A2240] border border-slate-800 hover:border-pink-500/60 transition-colors group">
                <a
                  href={COMPANY_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 overflow-hidden hover:opacity-90 flex-1"
                  title="Visit Instagram Profile"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-pink-400 block font-bold">Instagram (Official)</span>
                    <span className="text-xs font-bold text-white truncate block">
                      {COMPANY_CONTACT.instagram}
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => copyToClipboard(COMPANY_CONTACT.instagramUrl, 'instagram')}
                    className="text-slate-400 hover:text-white p-2 rounded transition-colors"
                    title="Copy Instagram link"
                  >
                    {copiedField === 'instagram' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={COMPANY_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-pink-400 p-2 rounded transition-colors"
                    title="Open Instagram Profile"
                    aria-label="Open Instagram Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0A2240] border border-slate-800 hover:border-blue-500/60 transition-colors group">
                <a
                  href={COMPANY_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 overflow-hidden hover:opacity-90 flex-1"
                  title="Visit Facebook Page"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-blue-400 block font-bold">Facebook (Page)</span>
                    <span className="text-xs font-bold text-white truncate block">
                      {COMPANY_CONTACT.facebook}
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => copyToClipboard(COMPANY_CONTACT.facebookUrl, 'facebook')}
                    className="text-slate-400 hover:text-white p-2 rounded transition-colors"
                    title="Copy Facebook link"
                  >
                    {copiedField === 'facebook' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={COMPANY_CONTACT.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 p-2 rounded transition-colors"
                    title="Open Facebook Page"
                    aria-label="Open Facebook Page"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {copiedField && (
              <div className="text-[11px] text-center text-emerald-300 bg-emerald-950/60 py-1.5 rounded-lg border border-emerald-800/80 animate-in fade-in">
                Copied {copiedField} to clipboard!
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright & Social row */}
        <div className="mt-14 pt-6 border-t border-[#C59B4B]/20 text-center text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} A'S WorldWide SERVICES. All rights reserved.
          </div>
          
          {/* Direct Social Links row */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400 hidden md:inline">Follow us:</span>
            <a
              href={COMPANY_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
              title="Instagram: @asworldwideservice.cn"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={COMPANY_CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              title="Facebook: A'S WorldWide SERVICES"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              title="WhatsApp: +86 157 1574 5747"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="text-[#E8D4A8] text-[11px]">
            Hangzhou, Zhejiang Province, China • Direct Guidance
          </div>
        </div>
      </div>
    </footer>
  );
};
