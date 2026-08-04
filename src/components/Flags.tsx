import React from 'react';

export interface FlagProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const AzerbaijanFlag: React.FC<FlagProps> = ({ className = "w-6 h-4", ...props }) => (
  <svg
    viewBox="0 0 1200 600"
    className={`rounded-xs object-cover shadow-xs border border-white/20 ${className}`}
    {...props}
  >
    {/* Blue stripe */}
    <rect width="1200" height="200" fill="#00B5E2" />
    {/* Red stripe */}
    <rect y="200" width="1200" height="200" fill="#EF3340" />
    {/* Green stripe */}
    <rect y="400" width="1200" height="200" fill="#509E2F" />
    {/* Crescent Moon */}
    <circle cx="570" cy="300" r="90" fill="#FFFFFF" />
    <circle cx="590" cy="300" r="72" fill="#EF3340" />
    {/* 8-Pointed Star */}
    <g transform="translate(675, 300) scale(0.65)" fill="#FFFFFF">
      <polygon points="0,-75 16,-22 71,-22 28,10 44,63 0,31 -44,63 -28,10 -71,-22 -16,-22" />
      <polygon points="0,-75 16,-22 71,-22 28,10 44,63 0,31 -44,63 -28,10 -71,-22 -16,-22" transform="rotate(45)" />
    </g>
  </svg>
);

export const UKFlag: React.FC<FlagProps> = ({ className = "w-6 h-4", ...props }) => (
  <svg
    viewBox="0 0 60 30"
    className={`rounded-xs object-cover shadow-xs border border-white/20 ${className}`}
    {...props}
  >
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 m-60,0 l60,30 l60,-30 l-60,-30 z h120 v30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 fill#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

export const RussiaFlag: React.FC<FlagProps> = ({ className = "w-6 h-4", ...props }) => (
  <svg
    viewBox="0 0 900 600"
    className={`rounded-xs object-cover shadow-xs border border-white/20 ${className}`}
    {...props}
  >
    <rect width="900" height="200" fill="#FFFFFF" />
    <rect y="200" width="900" height="200" fill="#0039A6" />
    <rect y="400" width="900" height="200" fill="#D52B1E" />
  </svg>
);

export const TurkeyFlag: React.FC<FlagProps> = ({ className = "w-6 h-4", ...props }) => (
  <svg
    viewBox="0 0 1200 800"
    className={`rounded-xs object-cover shadow-xs border border-white/20 ${className}`}
    {...props}
  >
    {/* Red Background */}
    <rect width="1200" height="800" fill="#E30A17" />
    {/* White Crescent Outer */}
    <circle cx="450" cy="400" r="200" fill="#FFFFFF" />
    {/* Red Crescent Inner cutout */}
    <circle cx="500" cy="400" r="160" fill="#E30A17" />
    {/* 5-Pointed Star */}
    <g transform="translate(670, 400) rotate(-18) scale(0.85)" fill="#FFFFFF">
      <polygon points="0,-80 23.5,-24.7 76.1,-24.7 33.5,6.2 49.8,57.6 0,21.4 -49.8,57.6 -33.5,6.2 -76.1,-24.7 -23.5,-24.7" />
    </g>
  </svg>
);

export const LanguageFlagIcon = ({ lang, className }: { lang: 'AZE' | 'ENG' | 'RUS' | 'TR'; className?: string }) => {
  switch (lang) {
    case 'AZE':
      return <AzerbaijanFlag className={className} />;
    case 'ENG':
      return <UKFlag className={className} />;
    case 'RUS':
      return <RussiaFlag className={className} />;
    case 'TR':
      return <TurkeyFlag className={className} />;
  }
};
