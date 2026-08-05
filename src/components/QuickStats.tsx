import React from 'react';
import { Translation } from '../types';
import { Building2, Calendar, Shield, Target } from 'lucide-react';

interface QuickStatsProps {
  t: Translation;
}

export const QuickStats: React.FC<QuickStatsProps> = ({ t }) => {
  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="text-center mb-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            {t.quickStats.title}
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {t.quickStats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Year Founded */}
          <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-md bg-amber-400/10 text-amber-400">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.foundedLabel}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-serif">
              {t.quickStats.foundedVal}
            </div>
          </div>

          {/* Card 2: Headquarters */}
          <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-md bg-amber-400/10 text-amber-400">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.hqLabel}
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white">
              {t.quickStats.hqVal}
            </div>
          </div>

          {/* Card 3: Legal Name */}
          <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-md bg-amber-400/10 text-amber-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.legalNameLabel}
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-amber-300 font-serif">
              {t.quickStats.legalNameVal}
            </div>
          </div>

          {/* Card 4: Core Focus */}
          <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-md bg-amber-400/10 text-amber-400">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.focusLabel}
              </span>
            </div>
            <div className="text-xs font-medium text-slate-200 leading-snug">
              {t.quickStats.focusVal}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
