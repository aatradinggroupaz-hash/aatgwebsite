import React from 'react';
import { Translation } from '../types';
import { Factory, FlaskConical, Wheat, Search, Truck, Briefcase, FileCheck } from 'lucide-react';

interface ActivitiesSectionProps {
  t: Translation;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  t,
}) => {
  return (
    <section id="activities" className="py-12 sm:py-16 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-400 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-2">
            Core Business Activities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            {t.activities.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 font-normal">
            {t.activities.subtitle}
          </p>
        </div>

        {/* 3 Main Pillars from PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Commodity Trading */}
          <div className="bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <Factory className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold font-serif text-white mb-1.5">
                {t.activities.tradingTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {t.activities.tradingDesc}
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-800">
                {/* Industrial */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Factory className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">
                      {t.activities.industrial}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.activities.industrialDesc}
                    </p>
                  </div>
                </div>

                {/* Chemical */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <FlaskConical className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">
                      {t.activities.chemical}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.activities.chemicalDesc}
                    </p>
                  </div>
                </div>

                {/* Agricultural */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Wheat className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">
                      {t.activities.agricultural}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.activities.agriculturalDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Supply Chain Participation */}
          <div className="bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold font-serif text-white mb-1.5">
                {t.activities.supplyChainTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {t.activities.supplyChainDesc}
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-800">
                {/* Sourcing */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">
                      {t.activities.sourcing}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.activities.sourcingDesc}
                    </p>
                  </div>
                </div>

                {/* Logistics */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">
                      {t.activities.logistics}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.activities.logisticsDesc}
                    </p>
                  </div>
                </div>

                {/* Project Implementation */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">
                      {t.activities.projectImpl}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.activities.projectImplDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Tender Participation */}
          <div className="bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <FileCheck className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold font-serif text-white mb-1.5">
                {t.activities.tenderTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {t.activities.tenderDesc}
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  <FileCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-slate-100">
                      {t.activities.commercialGovTenders}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {t.activities.commercialGovTendersDesc}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-400/30">
                  <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-0.5">
                    Notable Winner
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">
                    State Oil Company of the Azerbaijan Republic (SOCAR) & Commercial Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
