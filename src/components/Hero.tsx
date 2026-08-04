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
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-slate-950 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Location & Founded Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/50 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {t.hero.locationBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 text-xs font-medium tracking-wider backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {t.hero.establishedBadge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-[1.15] mb-6">
            <span className="block text-slate-100 font-sans text-xl sm:text-2xl font-semibold tracking-wider uppercase text-amber-400 mb-2">
              AA TRADING GROUP MMC
            </span>
            {t.hero.tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-200 active:scale-98 flex items-center gap-2.5 cursor-pointer"
            >
              <span>{t.hero.ctaContact}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-400/60 font-semibold text-base transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              {t.hero.ctaAbout}
            </button>
          </div>

          {/* Feature Highlight Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xs font-semibold text-slate-200">
                SOCAR & Gov Tenders Awarded
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xs font-semibold text-slate-200">
                Global Strategic Reach
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xs font-semibold text-slate-200">
                Industrial & Chemical Commodity
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
