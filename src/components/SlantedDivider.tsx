import React from 'react';

interface SlantedDividerProps {
  fromColor?: string; // background color of the section above
  toColor?: string;   // background color of the section below
  direction?: 'slanted-down' | 'slanted-up';
  accentColor?: string;
  className?: string;
  heightClass?: string;
}

/**
 * SlantedDivider creates an elegant architectural angled/slanted transition
 * between sections, replacing sharp flat horizontal borders with dynamic diagonal edges.
 */
export const SlantedDivider: React.FC<SlantedDividerProps> = ({
  fromColor = '#FAF8F5',
  toColor = '#FFFFFF',
  direction = 'slanted-down',
  accentColor = '#C59B4B',
  className = '',
  heightClass = 'h-8 sm:h-12 lg:h-16',
}) => {
  const isDown = direction === 'slanted-down';

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none -my-px z-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`w-full ${heightClass} block`}
      >
        {isDown ? (
          <>
            {/* Top portion matching section above */}
            <polygon points="0,0 1440,0 1440,64 0,0" fill={fromColor} />
            {/* Bottom portion matching section below */}
            <polygon points="0,0 1440,64 1440,80 0,80" fill={toColor} />
            {/* Gold metallic accent line along the diagonal seam */}
            <line
              x1="0"
              y1="0"
              x2="1440"
              y2="64"
              stroke={accentColor}
              strokeWidth="2.5"
              strokeOpacity="0.5"
            />
          </>
        ) : (
          <>
            {/* Top portion matching section above */}
            <polygon points="0,0 1440,0 0,64" fill={fromColor} />
            {/* Bottom portion matching section below */}
            <polygon points="0,64 1440,0 1440,80 0,80" fill={toColor} />
            {/* Gold metallic accent line along the diagonal seam */}
            <line
              x1="0"
              y1="64"
              x2="1440"
              y2="0"
              stroke={accentColor}
              strokeWidth="2.5"
              strokeOpacity="0.5"
            />
          </>
        )}
      </svg>
    </div>
  );
};

