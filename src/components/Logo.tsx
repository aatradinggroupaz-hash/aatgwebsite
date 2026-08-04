import React from 'react';

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg transition-transform active:scale-98 ${className}`}
      aria-label="AA Trading Group Home"
    >
      {/* Brand Box matching the official navy & gold logo style in PDF */}
      <div className="relative bg-[#0F1E36] border border-[#1A2E4C] p-2 px-3.5 rounded-sm shadow-md flex flex-col items-center justify-center transition-all duration-300 group-hover:border-amber-400/60 group-hover:shadow-amber-900/20">
        {/* Top Gold Accent Line */}
        <div className="flex items-center gap-1.5 w-full justify-center my-0.5">
          <div className="h-[1px] bg-amber-400/70 w-3"></div>
          <span className="text-amber-200 text-sm font-serif tracking-widest font-semibold leading-none">AA</span>
          <div className="h-[1px] bg-amber-400/70 w-3"></div>
        </div>
        {/* Subtitle TRADING GROUP */}
        <span className="text-[9px] uppercase tracking-[0.22em] text-slate-200 font-sans font-medium whitespace-nowrap mt-0.5">
          TRADING GROUP
        </span>
      </div>

      {/* Brand Name Text beside block */}
      <div className="hidden sm:flex flex-col">
        <span className="text-base font-bold tracking-tight text-slate-900 font-serif leading-none group-hover:text-amber-700 transition-colors">
          AA TRADING GROUP
        </span>
        <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 mt-0.5">
          MMC / LLC
        </span>
      </div>
    </button>
  );
};
