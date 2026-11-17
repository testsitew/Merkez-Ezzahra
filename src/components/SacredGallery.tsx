import React from 'react';
import { Language } from '../types/index.ts';
import { GirihStar8, ArabesqueDivider } from './IslamicMotifs.tsx';

interface SacredGalleryProps {
  language: Language;
}

export const SacredGallery: React.FC<SacredGalleryProps> = ({ language }) => {
  const isRtl = language === 'ar';

  const featuredItem = {
    titleFr: "Le Saint Coran sur Rehal en Bois",
    titleAr: "المصحف الشريف على حامل الخشب (الرحل)",
    descFr: "Lecture et méditation quotidienne du texte sacré dans le respect des règles de vénération.",
    descAr: "تلاوة وتدبر يومي لكتاب الله في أجواء من الخشوع والسكينة.",
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
    alt: "Le Saint Coran sur Rehal en Bois"
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#DFD3C3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{isRtl ? 'التراث والجماليات الإسلامية' : 'Patrimoine & Esthétique Sacrée'}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {isRtl ? 'أجواء العلم والسكينة في مركز الزهراء' : 'L\'Atmosphère d\'Étude & d\'Art Sacré'}
          </h2>
          <p className="text-[#4A3F37] text-base leading-relaxed">
            {isRtl 
              ? 'مظاهر العناية بالمصحف الشريف، في أجواء تعليمية هادئة ومصانة.' 
              : 'Immersion visuelle dans la beauté de l\'écriture du Coran et du matériel pédagogique sans représentation humaine.'}
          </p>
          <ArabesqueDivider className="w-48 mx-auto mt-4" />
        </div>

        {/* Centered Single Card Layout (no empty grid gaps on desktop or mobile) */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F5EFE6] border border-[#DFD3C3] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#A68B6B] transition-all duration-300 group flex flex-col">
            <div className="relative h-64 sm:h-80 overflow-hidden bg-[#EAE0D5]">
              <img
                src={featuredItem.imageUrl}
                alt={featuredItem.alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/Logo_-_Modifi__9245298a.png';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/85 via-[#2C1E16]/20 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-[#FAF8F5]">
                <span className="text-xs font-mono font-bold text-[#EAE0D5] uppercase tracking-wider block mb-1">
                  {isRtl ? 'الفن الإسلامي' : 'Art Sacré'}
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold text-white ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                  {isRtl ? featuredItem.titleAr : featuredItem.titleFr}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-[#FFFDF9]">
              <p className="text-[#4A3F37] text-sm sm:text-base leading-relaxed">
                {isRtl ? featuredItem.descAr : featuredItem.descFr}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
