import React from 'react';
import { Translation } from '../types';
import { Award } from 'lucide-react';

import aboutImage from '../assets/images/industrial_trading_about_1785842197245.jpg';

interface AboutSectionProps {
  t: Translation;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-[11px] font-bold uppercase tracking-widest mb-2">
            <BuildingIcon className="w-3.5 h-3.5" />
            AA TRADING GROUP MMC
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-normal">
            {t.about.subtitle}
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-3 text-sm leading-relaxed">
              <p className="bg-slate-800/40 border-l-4 border-amber-400 p-3 rounded-r-lg text-slate-200 font-medium">
                {t.about.p1}
              </p>

              <p>{t.about.p2}</p>

              <p>{t.about.p3}</p>

              <p>{t.about.p4}</p>
            </div>

            {/* Highlights */}
            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">
                    {t.about.socarHighlight}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {t.about.socarDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Image */}
          <div className="lg:col-span-5 h-full flex items-center">
            <div className="w-full relative rounded-xl overflow-hidden shadow-xl border border-slate-700/80 group">
              <img
                src={aboutImage}
                alt="Industrial & Chemical Trading Facility"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);
