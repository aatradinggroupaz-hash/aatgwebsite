import React from 'react';
import { Translation } from '../types';
import { MapPin, Calendar, ArrowRight, ShieldCheck, Globe, Award } from 'lucide-react';

import heroBgImage from '../assets/images/trading_hero_bg_1785842182538.jpg';

interface HeroProps {
  t: Translation;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onNavigate }) => {
  return (
    <section id="home" className="relative flex items-center justify-center pt-20 pb-12 bg-slate-950 overflow-hidden">
      {/* Background Hero Image with dark navy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="AA Trading Group Global Logistics & Trade"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-10">
        <div className="max-w-2xl">
          {/* Location & Founded Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-400/50 text-amber-300 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md shadow-md">
              <MapPin className="w-3 h-3 text-amber-400" />
              {t.hero.locationBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 text-[11px] font-medium tracking-wider backdrop-blur-md">
              <Calendar className="w-3 h-3 text-slate-400" />
              {t.hero.establishedBadge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif tracking-tight leading-[1.2] mb-4">
            <span className="block text-slate-100 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 mb-1.5">
              AA TRADING GROUP MMC
            </span>
            {t.hero.tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-200 active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <span>{t.hero.ctaContact}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-400/60 font-semibold text-xs uppercase tracking-wider transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              {t.hero.ctaAbout}
            </button>
          </div>

          {/* Feature Highlight Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-[11px] font-medium text-slate-200">
                SOCAR & Gov Tenders Awarded
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-[11px] font-medium text-slate-200">
                Global Strategic Reach
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-[11px] font-medium text-slate-200">
                Industrial & Chemical Commodity
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
