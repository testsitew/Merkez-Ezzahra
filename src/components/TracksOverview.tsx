import React from 'react';
import { Language } from '../types/index.ts';
import { translations } from '../data/translations.ts';
import { GirihStar8, ArabesqueDivider, MihrabArch } from './IslamicMotifs.tsx';
import { BookOpen, Sparkles, ScrollText, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface TracksOverviewProps {
  language: Language;
  onSelectTrack: (trackId: 'coran' | 'arabe' | 'sciences') => void;
}

export const TracksOverview: React.FC<TracksOverviewProps> = ({ language, onSelectTrack }) => {
  const t = translations[language];
  const isRtl = language === 'ar';

  const tracks = [
    {
      id: 'coran' as const,
      title: t.tracksOverview.quran.title,
      arabicTitle: t.tracksOverview.quran.arabicTitle,
      desc: t.tracksOverview.quran.desc,
      bullets: t.tracksOverview.quran.bullets,
      cta: t.tracksOverview.quran.cta,
      icon: BookOpen,
      accentColor: '#8C6D46',
    },
    {
      id: 'arabe' as const,
      title: t.tracksOverview.arabic.title,
      arabicTitle: t.tracksOverview.arabic.arabicTitle,
      desc: t.tracksOverview.arabic.desc,
      bullets: t.tracksOverview.arabic.bullets,
      cta: t.tracksOverview.arabic.cta,
      icon: ScrollText,
      accentColor: '#8C6D46',
    },
    {
      id: 'sciences' as const,
      title: t.tracksOverview.sciences.title,
      arabicTitle: t.tracksOverview.sciences.arabicTitle,
      desc: t.tracksOverview.sciences.desc,
      bullets: t.tracksOverview.sciences.bullets,
      cta: t.tracksOverview.sciences.cta,
      icon: Sparkles,
      accentColor: '#8C6D46',
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6] border-b border-[#DFD3C3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{isRtl ? 'المناهج المعتمدة' : 'Cursus Académiques'}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {t.tracksOverview.sectionTitle}
          </h2>
          <p className="text-[#4A3F37] text-base sm:text-lg leading-relaxed">
            {t.tracksOverview.sectionSubtitle}
          </p>
          <ArabesqueDivider className="w-48 mx-auto mt-4" />
        </div>

        {/* 3 Main Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-[#A68B6B] transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Subtle top arch motif */}
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 opacity-15 group-hover:opacity-30 transition-opacity">
                  <MihrabArch className="w-10 h-14" stroke="#8C6D46" />
                </div>

                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-xl bg-[#EAE0D5] text-[#3B2B20] border border-[#CBB8A2] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Arabic Kicker */}
                  <span className="block font-amiri text-lg text-[#7A5C38] font-bold mb-1">
                    {track.arabicTitle}
                  </span>

                  {/* French/Main Title */}
                  <h3 className={`text-xl font-bold text-[#2C1E16] mb-3 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4A3F37] text-sm leading-relaxed mb-6">
                    {track.desc}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 mb-8 border-t border-[#EAE0D5] pt-5">
                    {track.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E3027]">
                        <CheckCircle2 className="w-4 h-4 text-[#7A5C38] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={() => onSelectTrack(track.id)}
                  className="w-full py-3 px-4 rounded-xl border border-[#CBB8A2] bg-[#FAF8F5] text-[#2C1E16] hover:bg-[#EAE0D5] hover:border-[#A68B6B] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{track.cta}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4 text-[#4A3F37] transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-[#4A3F37] transition-transform group-hover:translate-x-1" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
