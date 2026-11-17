import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { translations, tajweedRulesData } from '../data/translations.ts';
import { GirihStar8, ArabesqueDivider, MihrabArch } from './IslamicMotifs.tsx';
import { Volume2, CheckCircle2, Award, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuranInstituteProps {
  language: Language;
  onOpenEnrollment: (track?: string) => void;
}

export const QuranInstitute: React.FC<QuranInstituteProps> = ({ language, onOpenEnrollment }) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  
  const [selectedRuleId, setSelectedRuleId] = useState<string>(tajweedRulesData[0].id);

  const activeRule = tajweedRulesData.find((r) => r.id === selectedRuleId) || tajweedRulesData[0];


  return (
    <section id="coran" className="py-24 bg-[#F5EFE6] border-b border-[#DFD3C3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{t.quranInstitute.badge}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {t.quranInstitute.title}
          </h2>
          <p className="text-[#4A3F37] text-base sm:text-lg leading-relaxed">
            {t.quranInstitute.description}
          </p>
          <ArabesqueDivider className="w-56 mx-auto mt-4" />
        </div>

        {/* 3 Core Quran Modules on Light Beige Background */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {t.quranInstitute.modules.map((mod, index) => (
            <div
              key={mod.id}
              className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-7 hover:border-[#A68B6B] hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#7A5C38] tracking-wider uppercase">
                    Module 0{index + 1}
                  </span>
                  <Award className="w-5 h-5 text-[#8C6D46]" />
                </div>

                <h3 className={`text-xl font-bold text-[#2C1E16] mb-1 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                  {mod.title}
                </h3>
                <h4 className="text-xs text-[#7A5C38] font-semibold mb-4">
                  {mod.subtitle}
                </h4>

                <p className="text-[#4A3F37] text-sm leading-relaxed mb-6">
                  {mod.desc}
                </p>

                <div className="space-y-2.5 border-t border-[#EAE0D5] pt-4 mb-6">
                  {mod.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#3E3027]">
                      <CheckCircle2 className="w-4 h-4 text-[#7A5C38] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenEnrollment('coran')}
                className="w-full py-2.5 rounded-lg border border-[#CBB8A2] bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] text-xs font-bold transition-colors cursor-pointer"
              >
                {isRtl ? 'الانضمام لهذا المسار' : 'Rejoindre ce module'}
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Tajweed Studio - Soft Light Beige Theme */}
        <div className="bg-gradient-to-br from-[#FAF8F5] via-[#FFFDF9] to-[#EAE0D5]/60 text-[#2C1E16] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden border border-[#D4C5B4] mb-20">
          
          {/* Subtle architectural background */}
          <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none">
            <MihrabArch className="w-64 h-80" stroke="#8C6D46" />
          </div>

          <div className="relative z-10">
            
            {/* Studio Header */}
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 text-[#7A5C38] text-xs font-bold uppercase tracking-widest mb-1">
                <Volume2 className="w-4 h-4 text-[#7A5C38]" />
                <span>Atelier Pratique Interactif</span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold text-[#2C1E16] mb-2 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                {t.quranInstitute.interactiveStudio.title}
              </h3>
              <p className="text-[#4A3F37] text-sm">
                {t.quranInstitute.interactiveStudio.subtitle}
              </p>
            </div>

            {/* Rule Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tajweedRulesData.map((rule) => {
                const isActive = rule.id === selectedRuleId;
                return (
                  <button
                    key={rule.id}
                    onClick={() => {
                      setSelectedRuleId(rule.id);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#EAE0D5] text-[#2C1E16] shadow-sm border-2 border-[#8C6D46]'
                        : 'bg-[#FFFDF9] text-[#4A3F37] hover:text-[#2C1E16] hover:bg-[#F5EFE6] border border-[#DFD3C3]'
                    }`}
                  >
                    <span>{isRtl ? rule.arabicName : rule.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Rule Details Showcase Card (Light Beige Surface) */}
            <div className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Rule Explanation */}
                <div className="lg:col-span-7">
                  <div className="text-xs text-[#7A5C38] font-bold tracking-wide uppercase mb-1">
                    {activeRule.category}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#2C1E16] mb-3">
                    {activeRule.name}
                  </h4>
                  <p className="text-[#4A3F37] text-sm leading-relaxed mb-5">
                    {activeRule.explanation}
                  </p>

                  <div className="p-3.5 bg-[#FAF8F5] border border-[#DFD3C3] rounded-xl mb-4">
                    <span className="text-xs font-bold text-[#2C1E16] block mb-1">
                      {t.quranInstitute.interactiveStudio.phoneticBreakdown}:
                    </span>
                    <span className="text-xs text-[#4A3F37]">
                      {activeRule.phoneticRule}
                    </span>
                  </div>

                </div>

                {/* Quranic Verse Calligraphic Callout on Soft Beige Background */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#F5EFE6] to-[#EAE0D5]/70 border border-[#CBB8A2] rounded-2xl p-6 text-center shadow-inner relative">
                  <div className="absolute top-2 left-2 text-[#8C6D46]/40">
                    <GirihStar8 size={18} stroke="#8C6D46" />
                  </div>
                  <div className="absolute bottom-2 right-2 text-[#8C6D46]/40">
                    <GirihStar8 size={18} stroke="#8C6D46" />
                  </div>

                  <span className="text-xs text-[#7A5C38] uppercase tracking-widest font-bold block mb-2">
                    {t.quranInstitute.interactiveStudio.verseExample}
                  </span>

                  {/* Sacred Text Display in Deep Espresso Brown */}
                  <div className="py-4">
                    <p className="font-amiri text-2xl sm:text-3xl text-[#2C1E16] font-bold leading-loose tracking-wide">
                      {activeRule.verseExample}
                    </p>
                  </div>

                  <div className="text-xs text-[#4A3F37] font-medium border-t border-[#D4C5B4] pt-3">
                    {activeRule.surahRef}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 4-Step Quranic Methodology (Light Beige Cards) */}
        <div className="border-t border-[#DFD3C3] pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className={`text-2xl sm:text-3xl font-bold text-[#2C1E16] mb-2 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
              {t.quranInstitute.methodologyTitle}
            </h3>
            <p className="text-[#4A3F37] text-sm">
              {isRtl
                ? 'خطوات عملية تضمن رسوخ الحفظ وسلامة النطق من اللحن الجلي والخفي'
                : 'Un cheminement rigoureux garantissant l\'excellence de la récitation et la pérennité de la mémorisation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.quranInstitute.methodology.map((step) => (
              <div
                key={step.step}
                className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-6 shadow-2xs relative group hover:border-[#A68B6B] hover:bg-[#FAF8F5] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center font-mono font-bold text-lg mb-4 shadow-xs">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-[#2C1E16] mb-2">
                  {step.title}
                </h4>
                <p className="text-[#4A3F37] text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
