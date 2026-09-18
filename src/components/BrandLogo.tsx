import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'full' | 'mark' | 'horizontal';
  showTagline?: boolean;
}

const USER_LOGO_URL = 'https://drive.google.com/file/d/1ZXJR8oeR9vryUVZRRS4SQR1xPqSbtszJ/view?usp=drive_link';
https://drive.google.com/file/d/1ZXJR8oeR9vryUVZRRS4SQR1xPqSbtszJ/view?usp=drive_link
/**
 * High-fidelity representation of the official A'S WorldWide SERVICES emblem.
 * Uses the user-provided logo image link with graceful fallback to the vector emblem.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 200,
  variant = 'full',
  showTagline = true,
}) => {
  const [imgError, setImgError] = useState(false);

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {!imgError ? (
          <img
            src={USER_LOGO_URL}
            alt="A'S Worldwide Services Logo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-10 h-10 object-contain shrink-0 rounded-full bg-white shadow-xs p-0.5 border border-[#C59B4B]/40"
          />
        ) : (
          /* Crest Mark Fallback */
          <svg
            viewBox="0 0 100 100"
            className="w-10 h-10 shrink-0 drop-shadow-xs"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#0A2240" strokeWidth="3" />
            <circle cx="50" cy="50" r="44" stroke="#C59B4B" strokeWidth="1.5" />
            <path
              d="M 22 50 C 22 34, 34 22, 50 22 C 60 22, 69 27, 74 35"
              stroke="#C59B4B"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 78 50 C 78 66, 66 78, 50 78 C 40 78, 31 73, 26 65"
              stroke="#0A2240"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        )}

        {/* Brand Text */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-black tracking-tight text-[#0A2240] leading-none font-sans">
              A'S
            </span>
            <span className="text-lg font-black tracking-tight text-[#0A2240] leading-none font-sans">
              WorldWide
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="h-[1px] w-3 bg-[#C59B4B]" />
            <span className="text-[10px] tracking-[0.28em] font-bold text-[#0A2240] uppercase leading-none">
              SERVICES
            </span>
            <span className="h-[1px] w-3 bg-[#C59B4B]" />
          </div>
        </div>
      </div>
    );
  }

  // Full Emblem with image support and vector fallback
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      {!imgError ? (
        <img
          src={USER_LOGO_URL}
          alt="A'S Worldwide Services Official Logo"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain rounded-full shadow-md bg-white p-1 border-2 border-[#C59B4B]/60"
        />
      ) : (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft drop shadow for outer edge */}
            <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0A2240" floodOpacity="0.12" />
            </filter>
            {/* Inner glow / gradient */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CCA552" />
              <stop offset="50%" stopColor="#C59B4B" />
              <stop offset="100%" stopColor="#B38739" />
            </linearGradient>
          </defs>

          {/* Main outer navy ring */}
          <circle cx="200" cy="200" r="192" fill="#FFFFFF" stroke="#0A2240" strokeWidth="12" filter="url(#logoShadow)" />

          {/* Thin inner white divider */}
          <circle cx="200" cy="200" r="184" fill="none" stroke="#FFFFFF" strokeWidth="2" />

          {/* Elegant gold ring */}
          <circle cx="200" cy="200" r="182" fill="#FFFFFF" stroke="url(#goldGradient)" strokeWidth="3" />

          {/* TOP EMBLEM: Orbital crescents around the AW Monogram */}
          <g id="orbital-crescents">
            {/* Gold crescent arc (upper-left) */}
            <path
              d="M 148 108 A 66 66 0 1 1 248 80"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Navy crescent arc (upper-right) */}
            <path
              d="M 252 82 A 66 66 0 0 1 170 162"
              fill="none"
              stroke="#0A2240"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          {/* Stylized AW Monogram */}
          <g id="aw-monogram" transform="translate(142, 50)">
            {/* Interlocking 'A' and 'W' */}
            {/* The 'A' */}
            <path
              d="M 32 94 L 32 46 C 32 30, 45 22, 58 22 C 71 22, 84 30, 84 46 L 84 94"
              fill="none"
              stroke="#0A2240"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 'A' Crossbar */}
            <line x1="32" y1="64" x2="84" y2="64" stroke="#0A2240" strokeWidth="10" strokeLinecap="round" />

            {/* The 'W' - overlapping with A's right leg */}
            <path
              d="M 66 52 L 66 85 C 66 94, 74 98, 83 98 C 92 98, 98 92, 100 84 L 108 55 C 110 92, 117 98, 126 98 C 135 98, 142 91, 142 82 L 142 34"
              fill="none"
              stroke="#0A2240"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Clean white separator line giving depth */}
            <path
              d="M 60 52 L 60 85"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />
          </g>

          {/* CENTER BRAND NAME */}
          <text
            x="200"
            y="190"
            textAnchor="middle"
            fill="#0A2240"
            fontFamily="'Source Sans 3', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="34"
            letterSpacing="-0.5"
          >
            A'S WorldWide
          </text>

          {/* Sub-bar: — S E R V I C E S — */}
          <g id="services-bar">
            {/* Left gold rule */}
            <line x1="46" y1="206" x2="114" y2="206" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />

            {/* S E R V I C E S text */}
            <text
              x="200"
              y="211"
              textAnchor="middle"
              fill="#0A2240"
              fontFamily="'Source Sans 3', system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="14.5"
              letterSpacing="7.5"
            >
              SERVICES
            </text>

            {/* Right gold rule */}
            <line x1="286" y1="206" x2="354" y2="206" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* 5 CORE FEATURE BADGES ROW (Clean, spacious, aligned) */}
          <g id="five-badges" transform="translate(0, 222)">
            {/* 1. Global Reach (Gold wireframe globe) */}
            <g transform="translate(56, 0)">
              <circle cx="16" cy="16" r="14" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
              <ellipse cx="16" cy="16" rx="6.5" ry="14" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
              <line x1="2" y1="16" x2="30" y2="16" stroke="url(#goldGradient)" strokeWidth="1.5" />
              <path d="M 5 9.5 Q 16 12 27 9.5" fill="none" stroke="url(#goldGradient)" strokeWidth="1.2" />
              <path d="M 5 22.5 Q 16 20 27 22.5" fill="none" stroke="url(#goldGradient)" strokeWidth="1.2" />
              <text x="16" y="42" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">GLOBAL</text>
              <text x="16" y="51" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">REACH</text>
            </g>

            {/* 2. Trusted Partner (Navy handshake) */}
            <g transform="translate(120, 0)">
              <path
                d="M 7 14 L 14 8 L 19 12 L 25 7 L 27 12 L 23 17 L 17 23 L 11 18 Z"
                fill="#0A2240"
              />
              <path
                d="M 6 13 L 2 17 L 6 22 L 12 18"
                fill="none"
                stroke="#0A2240"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M 26 13 L 30 17 L 26 22 L 20 18"
                fill="none"
                stroke="#0A2240"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <text x="16" y="42" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">TRUSTED</text>
              <text x="16" y="51" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">PARTNER</text>
            </g>

            {/* 3. Quality Assured (Gold parcel with checkmark badge) */}
            <g transform="translate(184, 0)">
              {/* Isometric box in gold */}
              <path d="M 16 4 L 27 10 L 16 16 L 5 10 Z" fill="#E6D3A3" stroke="url(#goldGradient)" strokeWidth="1.5" />
              <path d="M 5 10 L 16 16 L 16 26 L 5 20 Z" fill="#C59B4B" stroke="url(#goldGradient)" strokeWidth="1.5" />
              <path d="M 27 10 L 16 16 L 16 26 L 27 20 Z" fill="#B38739" stroke="url(#goldGradient)" strokeWidth="1.5" />
              {/* Checkmark circle badge */}
              <circle cx="23" cy="21" r="5.5" fill="#FFFFFF" stroke="url(#goldGradient)" strokeWidth="1.5" />
              <path d="M 20.5 21 L 22.2 22.8 L 25.5 19.5" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="16" y="42" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">QUALITY</text>
              <text x="16" y="51" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">ASSURED</text>
            </g>

            {/* 4. Worldwide Shipping (Navy Airplane) */}
            <g transform="translate(248, 0)">
              <path
                d="M 7 23 L 13 19 L 14 11 C 14 8, 17 6, 19 8 L 22 13 L 28 12 L 23 18 L 25 21 L 18 20 L 13 24 L 11 23 L 13 19 Z"
                fill="#0A2240"
              />
              <text x="16" y="42" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.3">WORLDWIDE</text>
              <text x="16" y="51" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.3">SHIPPING</text>
            </g>

            {/* 5. Study in China (Gold Mortarboard) */}
            <g transform="translate(312, 0)">
              {/* Cap diamond */}
              <polygon points="16,6 30,12 16,18 2,12" fill="url(#goldGradient)" />
              {/* Skull cap beneath */}
              <path d="M 7 14 L 7 20 C 7 24, 25 24, 25 20 L 25 14" fill="url(#goldGradient)" opacity="0.85" />
              {/* Tassel */}
              <path d="M 28 13 L 29 23" stroke="#B38739" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="29" cy="23.5" r="1.5" fill="#B38739" />
              <text x="16" y="42" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">STUDY IN</text>
              <text x="16" y="51" textAnchor="middle" fill="#0A2240" fontSize="7" fontWeight="800" letterSpacing="0.4">CHINA</text>
            </g>
          </g>

          {/* BOTTOM NAVY CRESCENT BANNER */}
          <g id="bottom-banner">
            {/* Navy curved fill at bottom of circle */}
            <path
              d="M 37 288 C 84 316, 140 332, 200 332 C 260 332, 316 316, 363 288 C 378 318, 376 348, 335 375 C 298 395, 250 404, 200 404 C 150 404, 102 395, 65 375 C 24 348, 22 318, 37 288 Z"
              fill="#0A2240"
            />

            {/* Gold top arc border on banner */}
            <path
              d="M 36 288 C 84 316, 140 332, 200 332 C 260 332, 316 316, 364 288"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Lower gold decorative accent curve */}
            <path
              d="M 125 388 Q 200 398 275 388"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Banner Taglines */}
            {showTagline && (
              <>
                <text
                  x="200"
                  y="322"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="'Source Sans 3', system-ui, -apple-system, sans-serif"
                  fontWeight="800"
                  fontSize="10.2"
                  letterSpacing="0.8"
                >
                  CONNECTING PEOPLE{' '}
                  <tspan fill="#C59B4B" fontSize="11" fontWeight="900">•</tspan>
                  {' '}BRIDGING BUSINESSES{' '}
                  <tspan fill="#C59B4B" fontSize="11" fontWeight="900">•</tspan>
                </text>

                <text
                  x="200"
                  y="346"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="'Source Sans 3', system-ui, -apple-system, sans-serif"
                  fontWeight="800"
                  fontSize="11.2"
                  letterSpacing="1.8"
                >
                  DELIVERING OPPORTUNITIES
                </text>
              </>
            )}
          </g>
        </svg>
      )}
    </div>
  );
};
