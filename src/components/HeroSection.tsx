import React from 'react';
import { Language } from '../types/index.ts';
import { translations } from '../data/translations.ts';
import { useSiteConfig, DEFAULT_LOGO_URL } from '../context/SiteConfigContext';
import { BismillahHeader, GirihStar8, GeometricLatticeOverlay, ArabesqueDivider, FloatingArabicLetters } from './IslamicMotifs.tsx';
import { BookOpen, Users, Clock, Award, ShieldCheck, Video, ArrowRight, ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
  language: Language;
  onExploreTracks: () => void;
  onOpenEnrollment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreTracks,
  onOpenEnrollment
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const { config } = useSiteConfig();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F5DC]/45 to-[#FAF8F5] text-[#2C1E16] pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#DFD3C3]">
      {/* Background Subtle Islamic Geometric Tessellation */}
      <GeometricLatticeOverlay opacity={0.05} />
      
      {/* Warm Sand Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#EAE0D5]/50 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Hero Centerpiece with Moving Ambient Brand & Calligraphy Layer */}
        <div className="relative flex flex-col items-center justify-center py-14 sm:py-18 px-4 mb-10 overflow-hidden min-h-[340px]">
          <FloatingArabicLetters />
          
          <img 
            src={config.logoUrl || DEFAULT_LOGO_URL} 
            alt={config.instituteName} 
            className="h-32 sm:h-40 md:h-48 w-auto mx-auto mb-6 drop-shadow-[0_6px_22px_rgba(140,109,70,0.22)] object-contain relative z-10 hover:scale-105 transition-transform duration-300" 
            onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_LOGO_URL; }} 
          />
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2C1E16] text-center max-w-4xl animate-fade-in-up font-playfair relative z-10 leading-tight text-balance">
            {config.heroTitle}
            <div className="h-1 w-48 sm:w-72 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#A68B6B] to-transparent animate-shimmer rounded-full"></div>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#5C4E44] font-medium text-center tracking-wide max-w-2xl mx-auto mt-4 leading-relaxed relative z-10">
            {config.heroSubtitle}
          </p>
        </div>

        {/* Hero Copy & Typography */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Subtitle kicker (clean unboxed text) */}
          <div className="flex items-center justify-center gap-2 mb-4 text-[#7A5C38] text-xs sm:text-sm font-bold tracking-widest uppercase">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{t.hero.subtitle}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>

          {/* Body Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#4A3F37] mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            {t.hero.description}
          </p>

          {/* Primary & Secondary Action CTAs (Light Beige with Dark Brown Contrast) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenEnrollment}
              className="w-full sm:w-auto px-8 py-4 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-base rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>{t.hero.ctaPrimary}</span>
              {isRtl ? <ArrowLeft className="w-5 h-5 text-[#4A3F37]" /> : <ArrowRight className="w-5 h-5 text-[#4A3F37]" />}
            </button>

            <button
              onClick={onExploreTracks}
              className="w-full sm:w-auto px-7 py-4 border border-[#D4C5B4] hover:border-[#8C6D46] bg-[#FFFDF9] hover:bg-[#F5EFE6] text-[#2C1E16] font-semibold text-base rounded-xl transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
            >
              <BookOpen className="w-4 h-4 text-[#7A5C38]" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Institutional Trust Markers on Light Beige Canvas */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#4A3F37] pt-4 border-t border-[#DFD3C3] max-w-3xl mx-auto font-medium">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#7A5C38]" />
              <span>{t.hero.badges.online}</span>
            </div>
            <span aria-hidden="true" className="text-[#8C6D46] font-bold">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7A5C38]" />
              <span>{t.hero.badges.flexible}</span>
            </div>
            <span aria-hidden="true" className="text-[#8C6D46] font-bold">·</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7A5C38]" />
              <span>{t.hero.badges.cert}</span>
            </div>
          </div>

        </div>

        {/* Quantified Statistics Grid (Soft Light Beige Cards with Dark Brown Typography) */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-6 text-center shadow-sm relative group hover:border-[#A68B6B] hover:bg-[#F5EFE6]/60 hover:shadow-md transition-all">
            <div className="w-9 h-9 mx-auto mb-2 text-[#5C432B] bg-[#EAE0D5] rounded-xl flex items-center justify-center border border-[#D4C5B4]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2C1E16] font-mono tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs sm:text-sm text-[#4A3F37] mt-1 font-medium">
              {t.hero.stats.teachers}
            </div>
          </div>

          <div className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-6 text-center shadow-sm relative group hover:border-[#A68B6B] hover:bg-[#F5EFE6]/60 hover:shadow-md transition-all">
            <div className="w-9 h-9 mx-auto mb-2 text-[#5C432B] bg-[#EAE0D5] rounded-xl flex items-center justify-center border border-[#D4C5B4]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2C1E16] font-mono tabular-nums tracking-tight">
              1,200+
            </div>
            <div className="text-xs sm:text-sm text-[#4A3F37] mt-1 font-medium">
              {t.hero.stats.hours}
            </div>
          </div>

          <div className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-6 text-center shadow-sm relative group hover:border-[#A68B6B] hover:bg-[#F5EFE6]/60 hover:shadow-md transition-all">
            <div className="w-9 h-9 mx-auto mb-2 text-[#5C432B] bg-[#EAE0D5] rounded-xl flex items-center justify-center border border-[#D4C5B4]">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2C1E16] font-mono tabular-nums tracking-tight">
              850+
            </div>
            <div className="text-xs sm:text-sm text-[#4A3F37] mt-1 font-medium">
              {t.hero.stats.students}
            </div>
          </div>

          <div className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-6 text-center shadow-sm relative group hover:border-[#A68B6B] hover:bg-[#F5EFE6]/60 hover:shadow-md transition-all">
            <div className="w-9 h-9 mx-auto mb-2 text-[#5C432B] bg-[#EAE0D5] rounded-xl flex items-center justify-center border border-[#D4C5B4]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2C1E16] font-mono tabular-nums tracking-tight">
              98.7%
            </div>
            <div className="text-xs sm:text-sm text-[#4A3F37] mt-1 font-medium">
              {t.hero.stats.satisfaction}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
