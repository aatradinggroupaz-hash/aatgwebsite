import React from 'react';
import { Translation } from '../types';
import { Building2, Calendar, Shield, Target } from 'lucide-react';

interface QuickStatsProps {
  t: Translation;
}

export const QuickStats: React.FC<QuickStatsProps> = ({ t }) => {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="text-center mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400">
            {t.quickStats.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t.quickStats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Year Founded */}
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.foundedLabel}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              {t.quickStats.foundedVal}
            </div>
          </div>

          {/* Card 2: Headquarters */}
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.hqLabel}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">
              {t.quickStats.hqVal}
            </div>
          </div>

          {/* Card 3: Legal Name */}
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.legalNameLabel}
              </span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-amber-300 font-serif">
              {t.quickStats.legalNameVal}
            </div>
          </div>

          {/* Card 4: Core Focus */}
          <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {t.quickStats.focusLabel}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
              {t.quickStats.focusVal}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
