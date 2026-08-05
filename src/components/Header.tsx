import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Language, Translation } from '../types';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Top Left: Logo */}
          <Logo onClick={() => handleNavClick('home')} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('about')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('activities')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              {t.nav.activities}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Top Right: Language Switcher & Contact CTA */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />

            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/25 transition-all duration-200 active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t.nav.getInTouch}</span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-700/80 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl">
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-amber-400 flex items-center justify-between"
          >
            <span>{t.nav.about}</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>
          <button
            onClick={() => handleNavClick('activities')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-amber-400 flex items-center justify-between"
          >
            <span>{t.nav.activities}</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-amber-400 flex items-center justify-between"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.nav.getInTouch}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
