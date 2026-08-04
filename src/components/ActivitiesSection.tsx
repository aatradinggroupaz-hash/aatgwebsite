import React from 'react';
import { Translation } from '../types';
import { Factory, FlaskConical, Wheat, Search, Truck, Briefcase, FileCheck, ArrowUpRight } from 'lucide-react';

interface ActivitiesSectionProps {
  t: Translation;
  onContactClick: () => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  t,
  onContactClick,
}) => {
  return (
    <section id="activities" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
            Core Business Activities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            {t.activities.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-normal">
            {t.activities.subtitle}
          </p>
        </div>

        {/* 3 Main Pillars from PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Commodity Trading */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Factory className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold font-serif text-white mb-2">
                {t.activities.tradingTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.activities.tradingDesc}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                {/* Industrial */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {t.activities.industrial}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.activities.industrialDesc}
                    </p>
                  </div>
                </div>

                {/* Chemical */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {t.activities.chemical}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.activities.chemicalDesc}
                    </p>
                  </div>
                </div>

                {/* Agricultural */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Wheat className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {t.activities.agricultural}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.activities.agriculturalDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="mt-8 pt-4 border-t border-slate-800/80 text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-between group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              <span>Inquire Trading Terms</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 2: Supply Chain Participation */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold font-serif text-white mb-2">
                {t.activities.supplyChainTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.activities.supplyChainDesc}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                {/* Sourcing */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {t.activities.sourcing}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.activities.sourcingDesc}
                    </p>
                  </div>
                </div>

                {/* Logistics */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {t.activities.logistics}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.activities.logisticsDesc}
                    </p>
                  </div>
                </div>

                {/* Project Implementation */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {t.activities.projectImpl}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.activities.projectImplDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="mt-8 pt-4 border-t border-slate-800/80 text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-between group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              <span>Explore Supply Chain Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 3: Tender Participation */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <FileCheck className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold font-serif text-white mb-2">
                {t.activities.tenderTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {t.activities.tenderDesc}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  <FileCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100">
                      {t.activities.commercialGovTenders}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {t.activities.commercialGovTendersDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-400/30">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    Notable Winner
                  </div>
                  <p className="text-xs text-slate-200 font-medium">
                    State Oil Company of the Azerbaijan Republic (SOCAR) & Commercial Projects
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="mt-8 pt-4 border-t border-slate-800/80 text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-between group-hover:translate-x-1 transition-transform cursor-pointer"
            >
              <span>Submit Tender Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
