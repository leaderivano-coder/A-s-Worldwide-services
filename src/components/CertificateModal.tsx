import React from 'react';
import { Certificate } from '../types';
import { X, ShieldCheck, Award, FileCheck, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0A2240] text-white px-6 py-4 flex items-center justify-between border-b border-[#C59B4B]/40">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C59B4B]" />
            <span className="font-bold text-sm tracking-wide">Official Credential Verification</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Card Content */}
        <div className="p-6 space-y-5">
          {/* Certificate Frame Simulation */}
          <div className="border-4 border-double border-[#C59B4B]/60 p-6 rounded-2xl bg-[#FAF8F5] shadow-inner relative">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#0A2240] border border-[#C59B4B] text-[#C59B4B] flex items-center justify-center mx-auto shadow-md">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-agency-serif text-xl font-bold text-[#0A2240] tracking-tight">
                {certificate.title}
              </h3>
              {certificate.chineseTitle && (
                <div className="text-xs font-serif font-bold text-[#8B261E] tracking-wider">
                  {certificate.chineseTitle}
                </div>
              )}
            </div>

            <div className="my-4 border-t border-b border-[#E8E2D5] py-3 text-center text-xs text-slate-700 space-y-1">
              <div className="font-semibold text-slate-500 uppercase text-[10px] tracking-widest">
                Accredited Issuing Body
              </div>
              <div className="font-bold text-[#0A2240] text-sm">
                {certificate.issuer}
              </div>
            </div>

            <p className="text-xs text-slate-600 text-center leading-relaxed">
              {certificate.description}
            </p>

            {/* Official seal mark */}
            <div className="mt-4 pt-3 border-t border-dashed border-[#E8E2D5] flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-1 text-[#1E7E34] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34]" />
                <span>Verified Authentic</span>
              </div>
              {certificate.credentialId && (
                <div className="font-mono text-[10px] text-slate-600">
                  Ref: {certificate.credentialId}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#0A2240] text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-[#06162B] transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
