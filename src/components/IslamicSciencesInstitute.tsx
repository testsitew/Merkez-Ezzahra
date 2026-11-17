import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { translations } from '../data/translations.ts';
import { GirihStar8, ArabesqueDivider } from './IslamicMotifs.tsx';
import { Scroll, Shield, BookCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface IslamicSciencesInstituteProps {
  language: Language;
  onOpenEnrollment: (track?: string) => void;
}

export const IslamicSciencesInstitute: React.FC<IslamicSciencesInstituteProps> = ({
  language,
  onOpenEnrollment
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';

  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('fiqh');

  const activeDiscipline = t.sciencesInstitute.disciplines.find((d) => d.id === selectedDisciplineId) || t.sciencesInstitute.disciplines[0];

  const getDisciplineIcon = (id: string) => {
    switch (id) {
      case 'fiqh':
        return Scroll;
      case 'aqida':
        return Shield;
      default:
        return BookCheck;
    }
  };

  return (
    <section id="sciences" className="py-24 bg-[#F5EFE6] border-b border-[#DFD3C3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{t.sciencesInstitute.badge}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {t.sciencesInstitute.title}
          </h2>
          <p className="text-[#4A3F37] text-base sm:text-lg leading-relaxed">
            {t.sciencesInstitute.description}
          </p>
          <ArabesqueDivider className="w-56 mx-auto mt-4" />
        </div>

        {/* 3 Discipline Cards with Interactive Selector (Light Beige Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {t.sciencesInstitute.disciplines.map((disc) => {
            const Icon = getDisciplineIcon(disc.id);
            const isSelected = disc.id === selectedDisciplineId;

            return (
              <div
                key={disc.id}
                onClick={() => setSelectedDisciplineId(disc.id)}
                className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFFDF9] text-[#2C1E16] border-2 border-[#8C6D46] shadow-md ring-4 ring-[#EAE0D5]/70 scale-[1.01]'
                    : 'bg-[#FAF8F5] text-[#2C1E16] border-[#DFD3C3] hover:border-[#A68B6B] hover:bg-[#FFFDF9]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                      isSelected ? 'bg-[#EAE0D5] border-[#CBB8A2] text-[#2C1E16] shadow-xs' : 'bg-[#FFFDF9] border-[#DFD3C3] text-[#4A3F37]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2]">
                        {isRtl ? 'المسار المحدد' : 'Sélectionné'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-[#2C1E16]">
                    {disc.title}
                  </h3>
                  <h4 className="text-xs font-semibold mb-3 text-[#7A5C38]">
                    {disc.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[#4A3F37]">
                    {disc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE0D5]">
                  <span className="text-[11px] block font-mono text-[#6B5D52]">
                    {isRtl ? 'المتون المعتمدة:' : 'Matn de référence :'}
                  </span>
                  <span className="text-xs font-bold text-[#2C1E16]">
                    {disc.matn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Study Syllabus for Selected Discipline (Light Beige Theme) */}
        <div className="bg-[#FAF8F5] border border-[#DFD3C3] rounded-3xl p-6 sm:p-10 mb-20 shadow-sm relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DFD3C3] pb-6 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5C38] block mb-1">
                  {isRtl ? 'تفاصيل المنهج الدراسي للمادة المختارة' : 'Syllabus Académique Détaillé'}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-bold text-[#2C1E16] ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                  {activeDiscipline.title} — {activeDiscipline.subtitle}
                </h3>
              </div>

              <button
                onClick={() => onOpenEnrollment('sciences')}
                className="px-6 py-2.5 rounded-xl bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2 whitespace-nowrap"
              >
                <span>{isRtl ? 'التسجيل في هذه المادة' : 'S\'inscrire à cette matière'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4 text-[#4A3F37]" /> : <ArrowRight className="w-4 h-4 text-[#4A3F37]" />}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-bold text-[#2C1E16] uppercase tracking-wider mb-4">
                  {isRtl ? 'المحاور والمباحث التعليمية الرئيسية:' : 'Principaux axes d\'étude :'}
                </h4>
                <div className="space-y-3">
                  {activeDiscipline.topics.map((tpc, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#FFFDF9] p-3.5 rounded-xl border border-[#DFD3C3] shadow-2xs">
                      <CheckCircle2 className="w-5 h-5 text-[#7A5C38] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#3E3027] font-medium">{tpc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#DFD3C3] shadow-2xs flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#2C1E16] uppercase tracking-wider mb-3">
                    {isRtl ? 'منهجية التقييم والاعتماد:' : 'Méthode d\'évaluation & validation :'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3F37] leading-relaxed mb-4">
                    {isRtl
                      ? 'يخضع الطالب لتقييم شهري يشمل التسميع والتحرير الفقهي، مع بحث تخرّج مصغّر في نهاية الفصل يمنح على إثره شهادة إتمام المادة بإشراف اللجنة العلمية.'
                      : 'Chaque module comprend des devoirs mensuels d\'analyse juridique, des interrogations orales sur les textes mémorisés, et un mémoire de fin de cycle validé par le conseil théologique.'}
                  </p>
                </div>
                <div className="p-3.5 bg-[#F5EFE6] rounded-xl text-xs text-[#3E3027] border border-[#D4C5B4] font-medium">
                  {isRtl
                    ? 'تتاح للطلاب إمكانية توجيه الأسئلة الفقهية اليومية للأستاذ المشرف عبر المنتدى الأكاديمي الداخلي.'
                    : 'Un forum de questions-réponses académique interne permet aux étudiants d\'échanger quotidiennement avec le professeur.'}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Academic Commitments of AlZahraa (Light Beige Cards) */}
        <div className="border-t border-[#DFD3C3] pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className={`text-2xl sm:text-3xl font-bold text-[#2C1E16] mb-2 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
              {t.sciencesInstitute.academicValuesTitle}
            </h3>
            <p className="text-[#4A3F37] text-sm">
              {isRtl
                ? 'مبادئ راسخة مستمدة من أدب طلب العلم النبوي الشريف'
                : 'Des engagements déontologiques et pédagogiques au service de la sincérité et de la rigueur.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.sciencesInstitute.academicValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-6 text-center hover:border-[#A68B6B] hover:bg-[#FAF8F5] transition-all shadow-2xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-[#2C1E16] mb-2">
                  {val.title}
                </h4>
                <p className="text-[#4A3F37] text-xs sm:text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
