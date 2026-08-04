import { useState } from 'react';
import { Language } from './types';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { AboutSection } from './components/AboutSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { RegionsSection } from './components/RegionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('AZE');

  const t = translations[currentLang];

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        t={t}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Hero Section */}
        <Hero t={t} onNavigate={handleNavigate} />

        {/* Quick Stats Bar */}
        <QuickStats t={t} />

        {/* About Section */}
        <AboutSection t={t} />

        {/* Business Activities Section */}
        <ActivitiesSection t={t} />

        {/* Regional Reach Section */}
        <RegionsSection t={t} />

        {/* Contact Section */}
        <ContactSection t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} onNavigate={handleNavigate} />
    </div>
  );
}
