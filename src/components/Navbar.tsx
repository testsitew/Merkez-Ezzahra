import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GirihStar8 } from './IslamicMotifs.tsx';
import { useSiteConfig, DEFAULT_LOGO_URL } from '../context/SiteConfigContext';
import { Language } from '../types/index.ts';
import { translations } from '../data/translations.ts';
import { Globe, Menu, X, ArrowUpRight, MessageCircle, Send } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenEnrollment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  activeSection,
  onNavigate,
  onOpenEnrollment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];
  const { config } = useSiteConfig();

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'coran', label: t.nav.quran },
    { id: 'arabe', label: t.nav.arabic },
    { id: 'sciences', label: t.nav.sciences },
    { id: 'tarifs', label: t.nav.pricing },
    { id: 'contact', label: t.nav.contact },
  ];

  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#DFD3C3] shadow-[0_2px_12px_rgba(44,30,22,0.05)] transition-all duration-200">
      {/* Live Classroom Indicator */}
      <div className="bg-[#EAE0D5] text-[#2C1E16] py-1.5 px-4 text-center text-[11px] font-semibold flex items-center justify-center gap-2 border-b border-[#DFD3C3]">
        <span className="h-2 w-2 rounded-full bg-[#7A5C38]" aria-hidden="true" />
        <span className="text-[#3E3027] font-bold tracking-wide">
          {language === 'ar' ? 'فصول البث الحي للقرآن واللغة العربية منعقدة الآن' : 'Cours en direct actuellement — Salles virtuelles actives'}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Clean Logo & Institute Name (Click to access Admin) */}
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            navigate('/admin-secret-access');
          }}
          className="flex items-center gap-2 sm:gap-2.5 focus:outline-none cursor-pointer group py-1 shrink-0 min-w-0"
          aria-label={`${config.instituteName} - Administration`}
          title="Cliquez pour accéder à l'administration"
        >
          <img 
            src={config.logoUrl || DEFAULT_LOGO_URL} 
            alt={config.instituteName} 
            className="h-12 sm:h-14 md:h-16 w-auto max-w-[64px] sm:max-w-[72px] object-contain shrink-0 group-hover:scale-105 transition-transform duration-200" 
            onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_LOGO_URL; }}
          />
          <span className="font-serif font-bold text-base sm:text-lg text-[#2C1E16] tracking-tight group-hover:text-[#7A5C38] transition-colors hidden sm:inline-block truncate">
            {config.instituteName}
          </span>
        </button>

        {/* Zone 2: 6 navigation links on Light Beige Background */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#2C1E16] bg-[#EAE0D5] font-bold border-b-2 border-[#7A5C38]'
                    : 'text-[#4A3F37] hover:text-[#2C1E16] hover:bg-[#F5EFE6]'
                } ${language === 'ar' ? 'font-cairo text-sm' : 'font-sans'}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions Stacked Right */}
        <div className="flex flex-col items-end gap-1.5">
          {/* Row 1: Language & Enroll + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(language === 'fr' ? 'ar' : 'fr')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D4C5B4] hover:border-[#8C6D46] bg-[#FFFDF9] hover:bg-[#EAE0D5] text-xs font-semibold text-[#2C1E16] transition-all cursor-pointer shadow-2xs"
              title={language === 'fr' ? 'Passer en Arabe (العربية)' : 'Changer en Français'}
              aria-label="Changer de langue"
            >
              <Globe className="w-3.5 h-3.5 text-[#7A5C38]" />
              <span className="uppercase tracking-wider font-bold">{language === 'fr' ? 'العربية' : 'Français'}</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenEnrollment}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>{t.nav.enrollBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-[#4A3F37] rtl:rotate-90" />
            </button>

            {/* Mobile hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#3E3027] hover:text-[#2C1E16] hover:bg-[#EAE0D5] focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Row 2: WhatsApp & Telegram */}
          <div className="flex items-center gap-2">
            {/* WhatsApp Button */}
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F5DC] hover:bg-[#EAE0D5] text-[#2C1E16] font-bold text-xs shadow-2xs transition-all duration-200 border border-[#D4C5B4] group cursor-pointer"
              title="Secrétariat WhatsApp"
              aria-label="Contacter l'administration sur WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#5C432B]" />
              <span className="tracking-tight text-[11px]">{language === 'ar' ? 'الإدارة' : 'Secrétariat'}</span>
            </a>

            {/* Telegram Channel Header Button */}
            <a
              href={config.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFE6] hover:bg-[#EAE0D5] text-[#2C1E16] font-bold text-xs shadow-2xs transition-all duration-200 border border-[#D4C5B4] cursor-pointer"
              title="Canal Telegram Officiel"
              aria-label="Rejoindre le canal Telegram"
            >
              <Send className="w-3.5 h-3.5 text-[#5C432B]" />
              <span className="tracking-tight text-[11px]">Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Light Beige Theme) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DFD3C3] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left rtl:text-right px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-[#2C1E16] bg-[#EAE0D5] font-bold border border-[#CBB8A2]'
                  : 'text-[#4A3F37] hover:text-[#2C1E16] hover:bg-[#F5EFE6]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#DFD3C3]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-sm rounded-lg shadow-sm cursor-pointer"
            >
              <span>{t.nav.enrollBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-[#4A3F37] rtl:rotate-90" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
