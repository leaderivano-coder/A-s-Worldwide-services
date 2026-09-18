import React, { useState } from 'react';

interface ProvidedInfographicProps {
  className?: string;
  onClick?: () => void;
}

const LOCAL_INFOGRAPHIC_URL = '/assets/user_ecosystem_infographic.png';
const DRIVE_DIRECT_URL = 'https://lh3.googleusercontent.com/d/1R3WcugFvqVkcHXIEqcuTxdu-yRAcHbzU';

/**
 * Exact, high-fidelity representation of the official A'S Worldwide Services
 * comprehensive ecosystem poster provided by the user.
 * Displays the authentic image with vector SVG fallback.
 */
export const ProvidedInfographic: React.FC<ProvidedInfographicProps> = ({ className = '', onClick }) => {
  const [imgSrc, setImgSrc] = useState<string>(LOCAL_INFOGRAPHIC_URL);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (imgSrc === LOCAL_INFOGRAPHIC_URL) {
      setImgSrc(DRIVE_DIRECT_URL);
    } else {
      setImgError(true);
    }
  };

  if (!imgError) {
    return (
      <div 
        className={`relative w-full h-full bg-white flex items-center justify-center select-none ${className}`}
        onClick={onClick}
      >
        <img
          src={imgSrc}
          alt="A'S Worldwide Services Comprehensive Ecosystem"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full max-h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full h-full bg-white flex items-center justify-center select-none ${className}`}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 920 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-full object-contain"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Radial gradient for central globe background */}
          <radialGradient id="globeBgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Central AW emblem gradient */}
          <linearGradient id="awEmblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="40%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          {/* Outer glow filter */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0284C7" floodOpacity="0.25" />
          </filter>

          {/* Subtle node drop shadow */}
          <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00529B" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Pure White Clean Background */}
        <rect width="920" height="960" fill="#FFFFFF" />

        {/* =========================================================================
            1. CENTRAL GLOBE & NETWORK CONNECTIVITY (x: 460, y: 390)
           ========================================================================= */}
        {/* Soft cyan globe atmosphere */}
        <circle cx="460" cy="390" r="190" fill="url(#globeBgGrad)" />

        {/* Globe meridians & parallels */}
        <g stroke="#0284C7" strokeWidth="1.2" strokeOpacity="0.35" fill="none">
          <circle cx="460" cy="390" r="170" />
          <ellipse cx="460" cy="390" rx="170" ry="85" />
          <ellipse cx="460" cy="390" rx="170" ry="140" />
          <ellipse cx="460" cy="390" rx="85" ry="170" />
          <line x1="290" y1="390" x2="630" y2="390" />
          <line x1="460" y1="220" x2="460" y2="560" />
          
          {/* Constellation network mesh lines */}
          <path d="M330 320 Q 400 280 460 300 T 580 330" strokeDasharray="3 3" />
          <path d="M340 440 Q 430 460 500 420 T 600 450" strokeDasharray="3 3" />
          <path d="M380 270 L 460 390 L 550 310" strokeOpacity="0.25" />
          <path d="M370 480 L 460 390 L 560 470" strokeOpacity="0.25" />
        </g>

        {/* Glowing connector track arcs to the 6 service nodes */}
        <g stroke="#0077CC" strokeWidth="2.5" fill="none" strokeLinecap="round">
          {/* To Top (Admissions) */}
          <path d="M460 295 L 460 185" />
          <circle cx="460" cy="240" r="4.5" fill="#0077CC" />

          {/* To Upper-Right (Work Permit) */}
          <path d="M535 340 L 635 255" />
          <circle cx="585" cy="298" r="4.5" fill="#0077CC" />

          {/* To Right (Product Sourcing) */}
          <path d="M555 410 L 685 410" />
          <circle cx="620" cy="410" r="4.5" fill="#0077CC" />

          {/* To Lower-Right (China Tours) */}
          <path d="M530 450 L 670 540" />
          <circle cx="600" cy="495" r="4.5" fill="#0077CC" />

          {/* To Lower-Left (Global Business) */}
          <path d="M390 450 L 255 435" />
          <circle cx="320" cy="442" r="4.5" fill="#0077CC" />

          {/* To Upper-Left (Translation) */}
          <path d="M385 340 L 305 250" />
          <circle cx="345" cy="295" r="4.5" fill="#0077CC" />
        </g>

        {/* Outer connection halo rings between adjacent nodes */}
        <path
          d="M 305 205 C 360 145, 410 135, 460 135 C 510 135, 580 150, 635 210 C 690 270, 720 340, 725 410 C 725 460, 715 500, 695 550"
          stroke="#0284C7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
          fill="none"
          strokeOpacity="0.55"
        />
        <path
          d="M 305 205 C 240 270, 205 340, 205 410 C 205 470, 230 520, 260 550"
          stroke="#0284C7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
          fill="none"
          strokeOpacity="0.55"
        />

        {/* =========================================================================
            2. CENTRAL EMBLEM: AW GRADIENT CIRCLE & MONOGRAM (x: 460, y: 390)
           ========================================================================= */}
        <g filter="url(#softGlow)">
          {/* Outer glossy cyan ring */}
          <circle cx="460" cy="390" r="94" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="4" />
          {/* Main blue gradient core */}
          <circle cx="460" cy="390" r="88" fill="url(#awEmblemGrad)" />
          {/* Inner ring highlight */}
          <circle cx="460" cy="390" r="84" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.4" fill="none" />

          {/* The Distinctive Stylized Interlocking 'AW' Logo Mark */}
          <g fill="#FFFFFF">
            {/* Left curve of the 'A' */}
            <path
              d="M 420 448 C 418 448 412 435 412 410 C 412 375 422 342 442 334 C 448 332 452 334 456 340 C 460 346 458 356 450 364 C 438 376 432 395 432 414 C 432 428 435 436 438 438 C 440 440 440 448 420 448 Z"
            />
            {/* Main Arch of 'A' and central interlock */}
            <path
              d="M 442 335 C 448 332 456 335 460 342 L 485 415 C 488 424 492 426 498 426 C 504 426 507 418 510 405 L 526 346 C 528 340 532 336 538 336 C 545 336 548 342 546 350 L 524 430 C 520 442 512 448 502 448 C 492 448 485 442 480 432 L 460 374 L 448 420 C 444 436 438 446 424 446 Z"
            />
            {/* The 'W' outer right stem and loop */}
            <path
              d="M 545 348 C 550 348 554 354 554 362 L 546 414 C 544 426 548 434 556 434 C 564 434 570 422 574 402 L 582 360 C 584 352 588 348 596 348 C 604 348 606 354 604 364 L 594 416 C 586 440 572 450 554 450 C 536 450 526 438 528 418 L 535 372 Z"
            />
          </g>
        </g>

        {/* =========================================================================
            3. SIX CIRCULAR SERVICE NODES & LABELS
           ========================================================================= */}

        {/* NODE 1: TOP - ADMISSIONS TO STUDY IN CHINA (x: 460, y: 135) */}
        <g>
          {/* Service Title */}
          <text x="460" y="32" textAnchor="middle" fill="#0A2540" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">
            ADMISSIONS
          </text>
          <text x="460" y="54" textAnchor="middle" fill="#0A2540" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">
            TO STUDY IN CHINA
          </text>

          {/* Circular Badge */}
          <g filter="url(#nodeShadow)">
            <circle cx="460" cy="135" r="50" fill="#FFFFFF" stroke="#0077CC" strokeWidth="3.5" />
          </g>
          {/* Icon: Pagoda with Graduation Cap */}
          <g transform="translate(432, 107)" stroke="#00529B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Traditional Pagoda Eaves */}
            <path d="M 6 36 Q 28 30 50 36" fill="#00529B" fillOpacity="0.15" />
            <path d="M 12 30 L 12 48 M 44 48 L 44 30 M 20 48 L 20 30 M 36 48 L 36 30" />
            <path d="M 14 30 Q 28 24 42 30" />
            <path d="M 28 20 L 28 25" />
            {/* Graduation Cap atop */}
            <polygon points="28,8 50,18 28,26 6,18" fill="#00529B" />
            <path d="M 14 22 L 14 32 C 14 37 42 37 42 32 L 42 22" fill="#00529B" fillOpacity="0.8" />
            <path d="M 46 20 L 49 32" strokeWidth="1.8" />
            <circle cx="49" cy="33" r="1.5" fill="#00529B" />
          </g>
        </g>

        {/* NODE 2: UPPER-RIGHT - WORK PERMIT APPLICATION (x: 685, y: 215) */}
        <g>
          {/* Service Title */}
          <text x="685" y="105" textAnchor="middle" fill="#0A2540" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">
            WORK PERMIT
          </text>
          <text x="685" y="126" textAnchor="middle" fill="#0A2540" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">
            APPLICATION
          </text>

          {/* Circular Badge */}
          <g filter="url(#nodeShadow)">
            <circle cx="685" cy="215" r="48" fill="#FFFFFF" stroke="#0077CC" strokeWidth="3.5" />
          </g>
          {/* Icon: Document with verified check badge */}
          <g transform="translate(660, 190)" stroke="#00529B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Document sheet */}
            <path d="M 8 4 L 34 4 L 42 12 L 42 46 C 42 48 40 50 38 50 L 8 50 C 6 50 4 48 4 46 L 4 8 C 4 6 6 4 8 4 Z" fill="#F0F9FF" />
            <path d="M 34 4 L 34 12 L 42 12" />
            {/* Portrait inside document */}
            <circle cx="16" cy="18" r="4.5" fill="#00529B" />
            <path d="M 10 28 C 10 24 22 24 22 28" strokeWidth="2" />
            {/* Document text lines */}
            <line x1="26" y1="18" x2="36" y2="18" strokeWidth="2" />
            <line x1="26" y1="24" x2="36" y2="24" strokeWidth="2" />
            <line x1="10" y1="34" x2="28" y2="34" strokeWidth="2" />
            <line x1="10" y1="40" x2="24" y2="40" strokeWidth="2" />
            {/* Blue verified check stamp */}
            <circle cx="36" cy="38" r="9" fill="#0077CC" stroke="#FFFFFF" strokeWidth="1.8" />
            <path d="M 32 38 L 35 41 L 40 35" stroke="#FFFFFF" strokeWidth="2" />
          </g>
        </g>

        {/* NODE 3: MID-RIGHT - PRODUCT SOURCING & QUALITY CHECK (x: 740, y: 410) */}
        <g>
          {/* Service Title */}
          <text x="815" y="278" textAnchor="middle" fill="#0A2540" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            PRODUCT SOURCING
          </text>
          <text x="815" y="298" textAnchor="middle" fill="#0A2540" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            &amp; QUALITY CHECK
          </text>
          <text x="815" y="318" textAnchor="middle" fill="#0A2540" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            AT AFFORDABLE PRICE
          </text>

          {/* Circular Badge */}
          <g filter="url(#nodeShadow)">
            <circle cx="740" cy="410" r="50" fill="#FFFFFF" stroke="#0077CC" strokeWidth="3.5" />
          </g>
          {/* Icon: Isometric carton box + magnifying glass */}
          <g transform="translate(714, 384)" stroke="#00529B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Isometric Carton Box */}
            <polygon points="26,8 44,18 26,28 8,18" fill="#0284C7" fillOpacity="0.25" />
            <polygon points="8,18 26,28 26,48 8,38" fill="#00529B" fillOpacity="0.75" />
            <polygon points="44,18 26,28 26,48 44,38" fill="#0077CC" fillOpacity="0.85" />
            <line x1="26" y1="28" x2="26" y2="48" stroke="#FFFFFF" strokeWidth="1.5" />
            {/* Inspection Magnifying Glass */}
            <circle cx="38" cy="38" r="10" fill="#FFFFFF" stroke="#00529B" strokeWidth="2.5" />
            <circle cx="38" cy="38" r="7" fill="#E0F2FE" />
            <line x1="45" y1="45" x2="52" y2="52" stroke="#00529B" strokeWidth="3.5" />
          </g>
        </g>

        {/* NODE 4: LOWER-RIGHT - CHINA TOURS (x: 710, y: 560) */}
        <g>
          {/* Service Title */}
          <text x="775" y="515" textAnchor="start" fill="#0A2540" fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">
            CHINA TOURS
          </text>

          {/* Circular Badge */}
          <g filter="url(#nodeShadow)">
            <circle cx="710" cy="560" r="48" fill="#FFFFFF" stroke="#0077CC" strokeWidth="3.5" />
          </g>
          {/* Icon: Skyline with Oriental Pearl Tower + Ascending Airplane */}
          <g transform="translate(684, 534)" stroke="#00529B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Temple Pagoda silhouette */}
            <path d="M 6 44 L 20 44 M 9 44 L 9 36 L 17 36 L 17 44 M 6 36 Q 13 32 20 36 M 13 28 L 13 32" />
            {/* Oriental Pearl Tower Shanghai silhouette */}
            <line x1="28" y1="44" x2="28" y2="12" strokeWidth="2" />
            <circle cx="28" cy="34" r="4.5" fill="#00529B" />
            <circle cx="28" cy="22" r="3" fill="#00529B" />
            <line x1="28" y1="12" x2="28" y2="6" strokeWidth="1.5" />
            {/* Commercial Airplane soaring upwards */}
            <g transform="translate(24, 8) rotate(-25)">
              <path
                d="M 12 2 L 15 10 L 26 13 L 26 16 L 15 15 L 14 24 L 18 26 L 18 28 L 11 27 L 4 28 L 4 26 L 8 24 L 7 15 L -4 16 L -4 13 L 7 10 Z"
                fill="#0077CC"
                stroke="#00529B"
                strokeWidth="1.2"
              />
            </g>
          </g>
        </g>

        {/* NODE 5: LOWER-LEFT - GLOBAL BUSINESS CONNECTIONS (x: 210, y: 410) */}
        <g>
          {/* Service Title */}
          <text x="135" y="305" textAnchor="middle" fill="#0A2540" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            GLOBAL
          </text>
          <text x="135" y="325" textAnchor="middle" fill="#0A2540" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            BUSINESS
          </text>
          <text x="135" y="345" textAnchor="middle" fill="#0A2540" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            CONNECTIONS
          </text>

          {/* Circular Badge */}
          <g filter="url(#nodeShadow)">
            <circle cx="210" cy="410" r="50" fill="#FFFFFF" stroke="#0077CC" strokeWidth="3.5" />
          </g>
          {/* Icon: Handshake over world connection grid */}
          <g transform="translate(182, 384)" stroke="#00529B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Globe latitude line */}
            <ellipse cx="28" cy="28" rx="22" ry="12" stroke="#BAE6FD" strokeWidth="1.2" />
            {/* Two hands shaking */}
            <path d="M 4 28 L 14 20 L 22 24 L 28 20 L 36 26 L 44 22 L 52 30" strokeWidth="2.4" />
            <path d="M 14 20 L 18 14 L 28 14 L 34 20" strokeWidth="2.2" />
            <path d="M 16 36 L 24 28 L 32 36 L 40 28" strokeWidth="2.2" />
            <path d="M 22 24 L 30 32" strokeWidth="2" stroke="#0077CC" />
            <path d="M 26 20 L 34 28" strokeWidth="2" stroke="#0077CC" />
          </g>
        </g>

        {/* NODE 6: UPPER-LEFT - TRANSLATION (x: 275, y: 215) */}
        <g>
          {/* Service Title */}
          <text x="275" y="85" textAnchor="middle" fill="#0A2540" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            TRANSLATION
          </text>
          <text x="275" y="106" textAnchor="middle" fill="#0A2540" fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            CHINESE ↔ ENGLISH
          </text>
          <text x="275" y="126" textAnchor="middle" fill="#0A2540" fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
            ENGLISH ↔ CHINESE
          </text>

          {/* Circular Badge */}
          <g filter="url(#nodeShadow)">
            <circle cx="275" cy="215" r="48" fill="#FFFFFF" stroke="#0077CC" strokeWidth="3.5" />
          </g>
          {/* Icon: Chinese "中" bubble and English "A" bubble */}
          <g transform="translate(250, 190)">
            {/* Left Speech Bubble (Blue) with Chinese character "中" */}
            <path
              d="M 6 12 C 6 6 12 2 20 2 C 28 2 34 6 34 12 C 34 18 28 22 20 22 L 12 26 L 13 22 C 8 22 6 18 6 12 Z"
              fill="#0077CC"
            />
            <text x="20" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="serif">
              中
            </text>

            {/* Right Speech Bubble (Outlined) with English character "A" */}
            <path
              d="M 26 24 C 26 18 32 14 40 14 C 48 14 54 18 54 24 C 54 30 48 34 40 34 L 32 38 L 33 34 C 28 34 26 30 26 24 Z"
              fill="#FFFFFF"
              stroke="#00529B"
              strokeWidth="2"
            />
            <text x="40" y="27" textAnchor="middle" fill="#00529B" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              A
            </text>

            {/* Bidirectional curved exchange arrows */}
            <path d="M 20 30 Q 25 33 30 30" stroke="#00529B" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d="M 30 8 Q 25 5 20 8" stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* =========================================================================
            4. COMPANY LOGO SECTION (A'S WorldWide SERVICES)
           ========================================================================= */}
        <g id="companyLogo">
          {/* Main Title: A'S WorldWide in Vibrant Blue */}
          <text
            x="460"
            y="695"
            textAnchor="middle"
            fill="#005FA8"
            fontSize="62"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="-0.02em"
          >
            A'S WorldWide
          </text>

          {/* Underline Bar Beneath WorldWide */}
          <rect x="230" y="708" width="460" height="4.5" fill="#005FA8" rx="2" />

          {/* Subtitle: S E R V I C E S with Wide Spacing */}
          <text
            x="460"
            y="742"
            textAnchor="middle"
            fill="#0F172A"
            fontSize="26"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="0.48em"
          >
            S E R V I C E S
          </text>

          {/* Official Core Slogan */}
          <text
            x="460"
            y="788"
            textAnchor="middle"
            fill="#0077C8"
            fontSize="15"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="0.08em"
          >
            CONNECTING PEOPLE • BRIDGING BUSINESSES • DELIVERING OPPORTUNITIES
          </text>
        </g>

        {/* =========================================================================
            5. FIVE FOUNDATIONAL PILLARS WITH ICONS (y: 830 - 920)
           ========================================================================= */}
        <g id="fivePillars">
          {/* Pillar 1: GLOBAL REACH */}
          <g transform="translate(140, 830)">
            <g stroke="#0077CC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <circle cx="28" cy="22" r="18" />
              <ellipse cx="28" cy="22" rx="18" ry="8" />
              <line x1="28" y1="4" x2="28" y2="40" />
            </g>
            <text x="28" y="58" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              GLOBAL
            </text>
            <text x="28" y="74" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              REACH
            </text>
          </g>

          {/* Pillar 2: TRUSTED PARTNER */}
          <g transform="translate(295, 830)">
            <g fill="#0077CC">
              <circle cx="21" cy="16" r="6" />
              <circle cx="35" cy="16" r="6" />
              <path d="M 12 36 C 12 28 17 25 24 25 C 28 25 32 27 34 29 C 36 27 40 25 44 25 C 51 25 56 28 56 36 Z" />
            </g>
            <text x="34" y="58" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              TRUSTED
            </text>
            <text x="34" y="74" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              PARTNER
            </text>
          </g>

          {/* Pillar 3: QUALITY ASSURED */}
          <g transform="translate(450, 830)">
            <g stroke="#0077CC" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M 28 6 L 46 12 C 46 28 38 38 28 42 C 18 38 10 28 10 12 Z" fill="#E0F2FE" />
              <path d="M 20 23 L 26 29 L 36 17" stroke="#00529B" strokeWidth="3" />
            </g>
            <text x="28" y="58" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              QUALITY
            </text>
            <text x="28" y="74" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              ASSURED
            </text>
          </g>

          {/* Pillar 4: AFFORDABLE SOLUTIONS */}
          <g transform="translate(605, 830)">
            <g stroke="#0077CC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Price Tag with Dollar / Currency symbol */}
              <polygon points="12,18 28,6 46,24 30,36" fill="#0077CC" fillOpacity="0.15" />
              <circle cx="24" cy="14" r="2.5" fill="#0077CC" />
              <text x="34" y="26" fill="#00529B" fontSize="12" fontWeight="bold" fontFamily="sans-serif" stroke="none">
                $
              </text>
            </g>
            <text x="28" y="58" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              AFFORDABLE
            </text>
            <text x="28" y="74" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              SOLUTIONS
            </text>
          </g>

          {/* Pillar 5: GROWING TOGETHER */}
          <g transform="translate(760, 830)">
            <g stroke="#0077CC" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <rect x="12" y="28" width="7" height="14" fill="#0077CC" />
              <rect x="23" y="20" width="7" height="22" fill="#0077CC" />
              <rect x="34" y="10" width="7" height="32" fill="#0077CC" />
              <path d="M 12 24 L 23 16 L 37 8" stroke="#00529B" strokeWidth="2" />
              <polyline points="32,8 37,8 37,13" stroke="#00529B" strokeWidth="2" />
            </g>
            <text x="28" y="58" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              GROWING
            </text>
            <text x="28" y="74" textAnchor="middle" fill="#0A2540" fontSize="13" fontWeight="800" fontFamily="sans-serif">
              TOGETHER
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
