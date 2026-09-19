import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Star, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C59B4B]/40 text-xs font-bold text-[#0A2240] tracking-wider uppercase">
            <span>Real Experiences</span>
          </div>

          <h2 className="font-agency-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2240] tracking-tight">
            Words from Those We've Guided
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real stories from international students, entrepreneurs, and global partners.
          </p>
        </div>

        {/* 3 Ample, Grounded Cards with Sculpted Slanted Corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF8F5] rounded-tl-[32px] rounded-br-[32px] rounded-tr-xl rounded-bl-xl p-7 sm:p-8 border border-[#E8E2D5] hover:border-[#C59B4B] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Warm Gold Stars */}
                <div className="flex gap-1 text-[#C59B4B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B4B]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-agency-serif text-sm sm:text-[15px] text-slate-700 leading-[1.7] font-normal italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#FAF8F5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A2240] text-white flex items-center justify-center font-bold text-xs shrink-0 border border-[#C59B4B]/50 font-agency-display">
                  {testimonial.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0A2240] flex items-center gap-1.5 font-agency-display">
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7E34]" />
                  </div>
                  <div className="text-xs font-semibold text-[#C59B4B]">
                    {testimonial.location}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {testimonial.serviceUsed}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
