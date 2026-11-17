import React from 'react';
import { useSiteConfig, DEFAULT_LOGO_URL } from '../context/SiteConfigContext';
import { Language } from '../types/index.ts';
import { translations } from '../data/translations.ts';
import { BismillahHeader } from './IslamicMotifs.tsx';
import { MessageCircle, Mail, ShieldCheck, Send } from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const { config } = useSiteConfig();

  return (
    <footer className="bg-[#FAF8F5] text-[#3E3027] border-t border-[#DFD3C3] relative overflow-hidden">
      
      {/* Upper Hadith Banner with Bismillah (Light Beige Theme) */}
      <div className="border-b border-[#DFD3C3] py-10 bg-[#F5EFE6]/70">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BismillahHeader isDark={false} className="mb-4" />
          <p className="font-amiri text-xl sm:text-2xl text-[#2C1E16] font-bold mb-2 tracking-wide">
            {t.footer.quoteArabic}
          </p>
          <p className="text-xs sm:text-sm text-[#4A3F37] italic font-sans max-w-2xl mx-auto">
            {t.footer.quoteFrench}
          </p>
        </div>
      </div>

      {/* Main Footer Links on Light Beige Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info with Official Logo (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex justify-center md:justify-start rtl:md:justify-end mb-5">
              <img 
                src={config.logoUrl || DEFAULT_LOGO_URL} 
                alt={config.instituteName} 
                className="h-24 sm:h-28 w-auto object-contain" 
                onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_LOGO_URL; }}
              />
            </div>

            <p className="text-xs sm:text-sm text-[#4A3F37] leading-relaxed mb-6">
              {t.footer.aboutText}
            </p>

            <div className="flex items-center gap-2.5 text-xs text-[#3E3027] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#7A5C38]" />
              <span>{isRtl ? 'معتمد من كبار المجيزين وهيئة الإقراء' : 'Enseignement certifié avec Isnad authentique'}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1E16] mb-4">
              {isRtl ? 'روابط الوصول' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#2C1E16] hover:underline transition-colors cursor-pointer text-left rtl:text-right text-[#4A3F37]"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coran')}
                  className="hover:text-[#2C1E16] hover:underline transition-colors cursor-pointer text-left rtl:text-right text-[#4A3F37]"
                >
                  {t.nav.quran}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('arabe')}
                  className="hover:text-[#2C1E16] hover:underline transition-colors cursor-pointer text-left rtl:text-right text-[#4A3F37]"
                >
                  {t.nav.arabic}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sciences')}
                  className="hover:text-[#2C1E16] hover:underline transition-colors cursor-pointer text-left rtl:text-right text-[#4A3F37]"
                >
                  {t.nav.sciences}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tarifs')}
                  className="hover:text-[#2C1E16] hover:underline transition-colors cursor-pointer text-left rtl:text-right text-[#4A3F37]"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#2C1E16] hover:underline transition-colors cursor-pointer text-left rtl:text-right text-[#4A3F37]"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Curricula Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1E16] mb-4">
              {t.footer.curriculaCol}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4A3F37]">
              <li>{isRtl ? 'تحفيظ القرآن الكريم' : 'Tahfidz du Saint Coran'}</li>
              <li>{isRtl ? 'أحكام التجويد والمتون' : 'Tajweed & Matn Al-Jazariyyah'}</li>
              <li>{isRtl ? 'الإجازة بالسند المتصل' : 'Cursus Ijazah avec Sanad'}</li>
              <li>{isRtl ? 'النحو والصرف والآجرومية' : 'Nahw, Sarf & Al-Ajrumiyya'}</li>
              <li>{isRtl ? 'الفقه والحديث والعقيدة' : 'Fiqh, Hadith & Aqida'}</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1E16] mb-4">
              {isRtl ? 'التواصل السريع' : 'Secrétariat'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#4A3F37]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7A5C38] shrink-0" />
                <a href={`mailto:${config.email}`} className="truncate hover:text-[#2C1E16] hover:underline">
                  {config.email}
                </a>
              </li>
              <li>
                <a
                  href={config.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] text-xs font-bold transition-all shadow-2xs hover:scale-105 border border-[#CBB8A2]"
                  aria-label="Contacter l'administration sur WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#4A3F37] shrink-0" />
                  <span>{isRtl ? 'الإدارة' : 'Administration'}</span>
                </a>
              </li>
              <li>
                <a
                  href={config.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F5EFE6] hover:bg-[#EAE0D5] text-[#2C1E16] text-xs font-bold transition-all shadow-2xs hover:scale-105 border border-[#D4C5B4]"
                  aria-label="Canal Telegram Officiel"
                >
                  <Send className="w-4 h-4 text-[#4A3F37] shrink-0" />
                  <span>Telegram</span>
                </a>
              </li>
              <li className="text-[11px] text-[#6B5D52] pt-2 border-t border-[#DFD3C3]">
                {isRtl ? 'متاح طيلة أيام الأسبوع ما عدا الأحد' : 'Permanence administrative du Lundi au Samedi'}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="mt-12 pt-8 border-t border-[#DFD3C3] text-xs text-[#6B5D52] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {config.instituteName}. {t.footer.rights}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hover:text-[#2C1E16] cursor-pointer">{t.footer.privacy}</span>
            <span>·</span>
            <span className="hover:text-[#2C1E16] cursor-pointer">{t.footer.terms}</span>
            <span>·</span>
            <span className="hover:text-[#2C1E16] cursor-pointer">{t.footer.accreditation}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
