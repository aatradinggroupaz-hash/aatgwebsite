import React from 'react';
import { Translation } from '../types';
import { TurkeyFlag, AzerbaijanFlag } from './Flags';
import { Globe, MapPin, Compass } from 'lucide-react';

interface RegionsSectionProps {
  t: Translation;
}

export const RegionsSection: React.FC<RegionsSectionProps> = ({ t }) => {
  const regionsList = [
    {
      id: 'turkiye',
      title: t.regions.turkiye,
      desc: 'Commercial & industrial hub with direct supply pipelines',
      flagComponent: <TurkeyFlag className="w-8 h-5 rounded-xs" />,
      badge: 'Strategic Hub',
    },
    {
      id: 'central-asia',
      title: t.regions.centralAsia,
      desc: t.regions.centralAsiaCountries,
      flagComponent: null,
      badge: 'Kazakhstan, Uzbekistan, Turkmenistan',
    },
    {
      id: 'east-south-asia',
      title: t.regions.eastSouthAsia,
      desc: t.regions.eastSouthAsiaCountries,
      flagComponent: null,
      badge: 'China, India, Singapore',
    },
    {
      id: 'maghreb',
      title: t.regions.maghreb,
      desc: 'North African trade corridor & industrial materials',
      flagComponent: null,
      badge: 'North Africa',
    },
    {
      id: 'cis',
      title: t.regions.cis,
      desc: 'Commonwealth of Independent States commodity logistics',
      flagComponent: null,
      badge: 'CIS Network',
    },
  ];

  return (
    <section id="regions" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
            Global Trade Corridors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            {t.regions.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-normal">
            {t.regions.subtitle}
          </p>
        </div>

        {/* Global Map Visual Representation & Region Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main HQ Spotlight Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 rounded-2xl border border-amber-400/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Headquarters
              </span>
              <AzerbaijanFlag className="w-8 h-5 shadow-sm" />
            </div>

            <h3 className="text-2xl font-bold font-serif text-white mb-2">
              Baku, Azerbaijan
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Situated at the crossroads of Europe and Asia, serving as our primary strategic command center for international commodity flows and supply chain routing.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-semibold text-white">34 Khatai Ave, Luxen Plaza</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Regional Gateway:</span>
                <span className="font-semibold text-amber-300">Silk Road & Caspian Corridor</span>
              </div>
            </div>
          </div>

          {/* Regional Network Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regionsList.map((region) => (
              <div
                key={region.id}
                className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80 hover:border-amber-400/50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {region.title}
                    </h4>
                  </div>
                  {region.flagComponent}
                </div>

                <p className="text-xs text-slate-300 leading-snug mb-3">
                  {region.desc}
                </p>

                <span className="inline-block text-[10px] font-semibold tracking-wider text-amber-400 uppercase bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                  {region.badge}
                </span>
              </div>
            ))}

            <div className="bg-slate-800/30 p-5 rounded-xl border border-dashed border-slate-700 flex items-center gap-3">
              <Globe className="w-6 h-6 text-slate-500 shrink-0" />
              <p className="text-xs text-slate-400">
                Continuous expansion into new international commodity sectors and strategic logistics alliances worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
