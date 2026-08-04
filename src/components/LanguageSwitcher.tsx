import React, { useState, useRef, useEffect } from 'react';

import { Language } from '../types';
import { LanguageFlagIcon, AzerbaijanFlag, UKFlag, RussiaFlag, TurkeyFlag } from './Flags';
import { ChevronDown, Globe, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

interface LanguageOption {
  code: Language;
  label: string;
  nativeName: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'AZE', label: 'AZE', nativeName: 'Azərbaycan' },
  { code: 'ENG', label: 'ENG', nativeName: 'English' },
  { code: 'RUS', label: 'RUS', nativeName: 'Русский' },
  { code: 'TR', label: 'TR', nativeName: 'Türkçe' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeOption = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  const renderFlagBackground = (code: Language) => {
    switch (code) {
      case 'AZE':
        return <AzerbaijanFlag className="absolute inset-0 w-full h-full opacity-30 object-cover pointer-events-none scale-125 rounded-none border-none shadow-none" />;
      case 'ENG':
        return <UKFlag className="absolute inset-0 w-full h-full opacity-30 object-cover pointer-events-none scale-125 rounded-none border-none shadow-none" />;
      case 'RUS':
        return <RussiaFlag className="absolute inset-0 w-full h-full opacity-30 object-cover pointer-events-none scale-125 rounded-none border-none shadow-none" />;
      case 'TR':
        return <TurkeyFlag className="absolute inset-0 w-full h-full opacity-30 object-cover pointer-events-none scale-125 rounded-none border-none shadow-none" />;
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button with Flag background preview & badge */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative overflow-hidden group flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-slate-900 text-white font-medium text-sm shadow-md border border-slate-700/80 hover:border-amber-400/60 transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Subtle flag background on main button */}
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-40">
          {renderFlagBackground(currentLang)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/80 to-slate-900/90 pointer-events-none"></div>

        <div className="relative z-10 flex items-center gap-2">
          <LanguageFlagIcon lang={currentLang} className="w-5 h-3.5 shadow-sm rounded-xs" />
          <span className="font-bold tracking-wide text-xs sm:text-sm text-amber-300">
            {activeOption.code}
          </span>
          <span className="hidden sm:inline text-xs text-slate-300 font-normal">
            ({activeOption.nativeName})
          </span>
          <ChevronDown
            className={`w-4 h-4 text-slate-300 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-amber-400' : ''
            }`}
          />
        </div>
      </button>

      {/* Language Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700/90 shadow-2xl z-50 overflow-hidden backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-1.5 space-y-1">
            <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-800 flex items-center justify-between">
              <span>Dil Seçin / Select Language</span>
              <Globe className="w-3 h-3 text-amber-400" />
            </div>

            {LANGUAGES.map((langOption) => {
              const isSelected = currentLang === langOption.code;
              return (
                <button
                  key={langOption.code}
                  onClick={() => {
                    onLanguageChange(langOption.code);
                    setIsOpen(false);
                  }}
                  className={`relative w-full overflow-hidden text-left px-3.5 py-2.5 rounded-lg flex items-center justify-between transition-all duration-200 border group ${
                    isSelected
                      ? 'border-amber-400/80 bg-slate-800/90 text-white font-semibold'
                      : 'border-slate-800 hover:border-slate-600 bg-slate-900/90 text-slate-200 hover:text-white'
                  }`}
                >
                  {/* Flag Background overlay on each language button */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${isSelected ? 'opacity-35' : 'opacity-20 group-hover:opacity-35'}`}>
                    {renderFlagBackground(langOption.code)}
                  </div>
                  <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-900/60 transition-colors pointer-events-none"></div>

                  {/* Foreground Content */}
                  <div className="relative z-10 flex items-center gap-3">
                    <LanguageFlagIcon
                      lang={langOption.code}
                      className="w-6 h-4 rounded-xs shadow-md border border-white/20 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold tracking-wide flex items-center gap-1.5">
                        <span className="text-amber-300">{langOption.code}</span>
                        <span className="text-slate-300 font-normal text-xs">
                          - {langOption.nativeName}
                        </span>
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="relative z-10 w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-amber-300 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
