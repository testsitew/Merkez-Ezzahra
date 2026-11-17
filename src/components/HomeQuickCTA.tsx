import React from 'react';
import { Language } from '../types/index.ts';
import { GirihStar8 } from './IslamicMotifs.tsx';
import { ArrowRight, ArrowLeft, CalendarCheck, HelpCircle } from 'lucide-react';

interface HomeQuickCTAProps {
  language: Language;
  onGoToPricing: () => void;
  onGoToContact: () => void;
}

export const HomeQuickCTA: React.FC<HomeQuickCTAProps> = ({
  language,
  onGoToPricing,
  onGoToContact,
}) => {
  const isRtl = language === 'ar';

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5EFE6] border border-[#DFD3C3] rounded-3xl p-8 sm:p-12 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-3 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{isRtl ? 'ابدأ رحلتك العلمية' : 'Commencez votre parcours'}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>

          <h2 className={`text-2xl sm:text-4xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {isRtl
              ? 'حصص مرنة ابتداءً من 3 يورو للساعة مع إشراف مباشر'
              : 'Des cours accessibles dès 3 €/h avec suivi personnalisé'}
          </h2>

          <p className="text-[#4A3F37] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            {isRtl
              ? 'اختر صيغة المجموعة أو الثنائي أو التعليم الفردي، وحدد وتيرتك الأسبوعية وسجل في دقائق معدودة.'
              : 'Choisissez la formule Groupe, Binôme ou Individuel adaptée à votre rythme et finalisez votre pré-inscription en quelques clics.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGoToPricing}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#5C432B]" />
              <span>{isRtl ? 'عرض الأسعار والتسجيل' : 'Voir les tarifs & S’inscrire'}</span>
              {isRtl ? (
                <ArrowLeft className="w-4 h-4 text-[#4A3F37]" />
              ) : (
                <ArrowRight className="w-4 h-4 text-[#4A3F37]" />
              )}
            </button>

            <button
              onClick={onGoToContact}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#FFFDF9] hover:bg-[#FAF8F5] text-[#2C1E16] border border-[#D4C5B4] hover:border-[#8C6D46] font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-[#7A5C38]" />
              <span>{isRtl ? 'تواصل معنا والأسئلة الشائعة' : 'Contact & Questions fréquentes'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
