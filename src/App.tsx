import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GoodsShowcaseSection } from './components/GoodsShowcaseSection';
import { WhyPickUsSection } from './components/WhyPickUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { SlantedDivider } from './components/SlantedDivider';
import { CertificateModal } from './components/CertificateModal';
import { InquiryModal } from './components/InquiryModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { FloatingActions } from './components/FloatingActions';
import { Certificate } from './types';
import { CERTIFICATES } from './data/companyData';

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [defaultInquiryService, setDefaultInquiryService] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (serviceTitle?: string) => {
    setDefaultInquiryService(serviceTitle);
    setIsInquiryOpen(true);
  };

  const handleSelectServiceFromHero = (serviceId: string) => {
    const targetElement = document.getElementById(`service-${serviceId}`) || document.getElementById('services');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewCert = (certId: string) => {
    const cert = CERTIFICATES.find((c) => c.id === certId) || CERTIFICATES[0];
    setSelectedCertificate(cert);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 selection:bg-[#C59B4B] selection:text-[#0A2240] antialiased">
        {/* Navigation Bar */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        {/* Main Content with Slanted, Dynamic Section Edges */}
        <main className="flex-1">
          {/* 1. Hero & Official Carousel */}
          <HeroSection
            onSelectService={handleSelectServiceFromHero}
            onOpenInquiry={handleOpenInquiry}
          />

          {/* Slanted Transition into About */}
          <SlantedDivider fromColor="#FAF8F5" toColor="#FFFFFF" direction="slanted-down" />

          {/* 2. About Us / Story */}
          <AboutSection />

          {/* Slanted Transition into Services */}
          <SlantedDivider fromColor="#FFFFFF" toColor="#FAF8F5" direction="slanted-up" />

          {/* 3. Core Services Tracks */}
          <ServicesSection
            onOpenInquiry={handleOpenInquiry}
            onViewCert={handleViewCert}
          />

          {/* Slanted Transition into Goods Showcase */}
          <SlantedDivider fromColor="#FAF8F5" toColor="#FFFFFF" direction="slanted-down" />

          {/* 4. Goods, Factory Sourcing & Logistics Showcase */}
          <GoodsShowcaseSection onOpenInquiry={handleOpenInquiry} />

          {/* Slanted Transition into Why Pick Us */}
          <SlantedDivider fromColor="#FFFFFF" toColor="#FAF8F5" direction="slanted-up" />

          {/* 5. Why Pick Us */}
          <WhyPickUsSection />

          {/* Slanted Transition into Testimonials */}
          <SlantedDivider fromColor="#FAF8F5" toColor="#FFFFFF" direction="slanted-down" />

          {/* 6. Client Testimonials */}
          <TestimonialsSection />

          {/* Slanted Transition into FAQ */}
          <SlantedDivider fromColor="#FFFFFF" toColor="#FAF8F5" direction="slanted-up" />

          {/* 7. Frequently Asked Questions */}
          <FaqSection />

          {/* Slanted Transition into Deep Navy Footer */}
          <SlantedDivider fromColor="#FAF8F5" toColor="#0A2240" direction="slanted-down" accentColor="#C59B4B" />
        </main>

        {/* 8. Footer, Accreditations & Contact Details */}
        <FooterSection
          onSelectCertificate={(cert) => setSelectedCertificate(cert)}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* Interactive Certificate Lightbox Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />

        {/* Quick Consultation & Direct WhatsApp/Email Modal */}
        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          defaultService={defaultInquiryService}
        />

        {/* Fixed Bottom Mobile Quick Bar for optimal responsive usability */}
        <MobileQuickBar onOpenInquiry={() => handleOpenInquiry()} />

        {/* Onscreen 'Let's Talk' and Automatic Back to Top Arrow */}
        <FloatingActions onOpenInquiry={handleOpenInquiry} />
      </div>
    </LanguageProvider>
  );
}
