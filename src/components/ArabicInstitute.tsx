import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { translations, placementQuizQuestions } from '../data/translations.ts';
import { GirihStar8, ArabesqueDivider, BismillahHeader } from './IslamicMotifs.tsx';
import { BookOpen, FileText, CheckCircle2, Award, Download, Eye, HelpCircle, X, ArrowRight, ArrowLeft } from 'lucide-react';

interface ArabicInstituteProps {
  language: Language;
  onOpenEnrollment: (track?: string) => void;
}

export const ArabicInstitute: React.FC<ArabicInstituteProps> = ({ language, onOpenEnrollment }) => {
  const t = translations[language];
  const isRtl = language === 'ar';

  const [activeLevelTab, setActiveLevelTab] = useState<string>('lvl1');
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);
  const [showQuizModal, setShowQuizModal] = useState<boolean>(false);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const activeLevel = t.arabicInstitute.levels.find((l) => l.id === activeLevelTab) || t.arabicInstitute.levels[0];

  const handleSelectAnswer = (questionId: number, score: number) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const calculateRecommendedLevel = () => {
    const scores = Object.values(quizAnswers);
    if (scores.length === 0) return 'Niveau 1 (Débutant)';
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg < 1.6) {
      return isRtl ? 'المستوى الأول (التأسيس الأبجدي والقراءة)' : 'Niveau 1 : Alphabétisation & Débutant';
    } else if (avg < 2.5) {
      return isRtl ? 'المستوى الثاني (النحو والصرف - الآجرومية)' : 'Niveau 2 : Nahw & Sarf (Grammaire & Morphologie)';
    } else {
      return isRtl ? 'المستوى الثالث (البلاغة وتحليل النصوص المتقدمة)' : 'Niveau 3 : Balagha & Éloquence Littéraire';
    }
  };

  return (
    <section id="arabe" className="py-24 bg-[#FAF8F5] relative border-b border-[#DFD3C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{t.arabicInstitute.badge}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {t.arabicInstitute.title}
          </h2>
          <p className="text-[#4A3F37] text-base sm:text-lg leading-relaxed">
            {t.arabicInstitute.description}
          </p>
          <ArabesqueDivider className="w-56 mx-auto mt-4" />
        </div>

        {/* Quick Tools Bar (Placement Test Only) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => {
              setQuizSubmitted(false);
              setQuizAnswers({});
              setShowQuizModal(true);
            }}
            className="px-6 py-3 rounded-xl bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-[#4A3F37]" />
            <span>{t.arabicInstitute.placementTestBtn}</span>
          </button>
        </div>

        {/* Level Tabs Control */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#F5EFE6] border border-[#DFD3C3] rounded-2xl gap-1 shadow-xs flex-wrap justify-center">
            {t.arabicInstitute.levels.map((lvl) => {
              const isActive = lvl.id === activeLevelTab;
              return (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevelTab(lvl.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#EAE0D5] text-[#2C1E16] border border-[#8C6D46] shadow-xs'
                      : 'text-[#4A3F37] hover:text-[#2C1E16] hover:bg-[#FFFDF9]/70 border border-transparent'
                  }`}
                >
                  <span>{lvl.levelTag}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Level Detail Showcase on Light Beige Canvas */}
        <div className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden mb-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-xs text-[#7A5C38] font-bold uppercase tracking-wider mb-2">
                <span>{activeLevel.levelTag}</span>
                <span>·</span>
                <span>{activeLevel.duration}</span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                {activeLevel.title}
              </h3>

              <p className="text-[#4A3F37] text-sm sm:text-base leading-relaxed mb-6">
                {activeLevel.desc}
              </p>

              {/* Reference Material Callout */}
              <div className="flex items-center gap-2 p-3.5 bg-[#FAF8F5] border border-[#DFD3C3] rounded-xl mb-6 text-xs text-[#3E3027]">
                <BookOpen className="w-4 h-4 text-[#7A5C38] shrink-0" />
                <span className="font-bold text-[#2C1E16]">{isRtl ? 'المقرر المعتمد:' : 'Manuel de référence :'}</span>
                <span className="text-[#4A3F37] font-medium">{activeLevel.book}</span>
              </div>

              {/* Objectives List */}
              <h4 className="text-sm font-bold text-[#2C1E16] uppercase tracking-wider mb-3">
                {isRtl ? 'الأهداف التعليمية المحققة:' : 'Objectifs pédagogiques acquis :'}
              </h4>

              <div className="space-y-3 mb-8">
                {activeLevel.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#3E3027]">
                    <CheckCircle2 className="w-4 h-4 text-[#7A5C38] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenEnrollment('arabe')}
                  className="px-6 py-3 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>{isRtl ? 'سجّل في هذا المستوى' : 'S\'inscrire à ce niveau'}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4 text-[#4A3F37]" /> : <ArrowRight className="w-4 h-4 text-[#4A3F37]" />}
                </button>
              </div>

            </div>

            {/* Classical Arabic Architectural Callout Box on Light Beige Canvas */}
            <div className="lg:col-span-4 bg-[#F5EFE6] text-[#2C1E16] rounded-2xl p-6 relative overflow-hidden border border-[#D4C5B4] shadow-sm">
              <div className="text-center mb-4 pb-3 border-b border-[#DFD3C3]">
                <span className="font-amiri text-xl text-[#2C1E16] font-bold block mb-1">
                  « إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا »
                </span>
                <span className="text-[11px] text-[#6B5D52] font-medium">
                  {isRtl ? 'سورة يوسف - الآية ٢' : 'Sourate Yusuf - Verset 2'}
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-[#3E3027]">
                <div className="flex justify-between items-center py-1 border-b border-[#DFD3C3]">
                  <span className="text-[#6B5D52] font-medium">{isRtl ? 'طريقة التدريس' : 'Pédagogie'}</span>
                  <span className="font-bold text-[#2C1E16]">{isRtl ? 'تفاعلي مباشر' : '100% Direct'}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#DFD3C3]">
                  <span className="text-[#6B5D52] font-medium">{isRtl ? 'عدد الطلاب' : 'Effectif'}</span>
                  <span className="font-semibold text-[#2C1E16]">{isRtl ? '٤ إلى ٦ طلاب' : '4 à 6 max'}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#DFD3C3]">
                  <span className="text-[#6B5D52] font-medium">{isRtl ? 'الشهادة الممنوحة' : 'Certification'}</span>
                  <span className="font-bold text-[#7A5C38]">{isRtl ? 'شهادة إتقان' : 'Attestation officielle'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#6B5D52] font-medium">{isRtl ? 'الدعم والمتابعة' : 'Tutorat'}</span>
                  <span className="font-semibold text-[#2C1E16]">{isRtl ? 'يومي عبر المنصة' : 'Suivi continu'}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DFD3C3] text-center">
                <p className="text-[11px] text-[#3E3027] italic font-serif">
                  {isRtl
                    ? '« تعلّموا العربية فإنها تثبت العقل وتزيد في المروءة »'
                    : '« Apprenez la langue arabe, car elle affermit la raison et accroît la noblesse. »'}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Interactive PDF Sample Syllabus Modal (Light Beige Theme) */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-[#2C1E16]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DFD3C3] p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between border-b border-[#DFD3C3] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EAE0D5] border border-[#CBB8A2] text-[#2C1E16] flex items-center justify-center shadow-xs">
                  <BookOpen className="w-5 h-5 text-[#5C432B]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C1E16]">
                    {isRtl ? 'نموذج من كتاب النحو المقرر - مركز الزهراء' : 'Manuel d\'Étude Officiel - Extrait du Cours de Nahw'}
                  </h3>
                  <span className="text-xs text-[#6B5D52]">
                    {isRtl ? 'الوحدة الثالثة: أقسام الكلم وعلامات الإعراب' : 'Unité 3 : Les catégories de mots & Les déclinaisons de l\'I\'rab'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowPdfModal(false)}
                className="p-2 text-[#6B5D52] hover:text-[#2C1E16] rounded-lg hover:bg-[#EAE0D5] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Content Viewport */}
            <div className="bg-[#FAF8F5] border border-[#DFD3C3] rounded-2xl p-6 sm:p-8 text-[#2C1E16] shadow-inner mb-6 relative">
              <BismillahHeader className="mb-4" isDark={false} />

              <div className="text-center border-b border-[#DFD3C3] pb-3 mb-6">
                <h4 className="font-amiri text-2xl font-bold text-[#2C1E16]">
                  بَابُ مَعْرِفَةِ عَلَامَاتِ الإِعْرَابِ
                </h4>
                <p className="text-xs text-[#6B5D52] font-sans mt-1">
                  Extrait didactique commenté selon la pédagogie de Merkez AlZahraa
                </p>
              </div>

              {/* Matn Quote */}
              <div className="bg-[#FFFDF9] border border-[#DFD3C3] p-4 rounded-xl mb-6 shadow-2xs">
                <p className="font-amiri text-lg text-[#2C1E16] font-bold leading-loose text-right">
                  قَالَ صَاحِبُ الآجُرُّومِيَّةِ رَحِمَهُ اللَّهُ : « لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالأَلِفُ، وَالنُّونُ. فَأَمَّا الضَّمَّةُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي أَرْبَعَةِ مَوَاضِعَ... »
                </p>
                <p className="text-xs text-[#4A3F37] font-sans mt-2">
                  Traduction & glose : Le cas nominatif (Raf') possède quatre marques principales : la Dammah, le Wāw, l'Alif et le Nūn...
                </p>
              </div>

              {/* Sample Table */}
              <div className="overflow-x-auto mb-6 bg-[#FFFDF9] rounded-xl border border-[#DFD3C3]">
                <table className="w-full text-xs text-left rtl:text-right border-collapse">
                  <thead>
                    <tr className="bg-[#EAE0D5] text-[#2C1E16] border-b border-[#D4C5B4]">
                      <th className="p-3 font-bold">Catégorie</th>
                      <th className="p-3 font-bold">Exemple en Arabe</th>
                      <th className="p-3 font-bold">Signe de l'I'rab</th>
                      <th className="p-3 font-bold">Rôle syntaxique</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE0D5]">
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-medium text-[#2C1E16]">Nom singulier (Ism Mufrad)</td>
                      <td className="p-3 font-amiri text-base font-bold text-[#2C1E16]">جَاءَ زَيْدٌ</td>
                      <td className="p-3 text-[#7A5C38] font-semibold">Dammah apparente</td>
                      <td className="p-3 text-[#4A3F37]">Sujet (Fā'il marfū')</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-medium text-[#2C1E16]">Pluriel sain masculin (Jam' Mudhakkar)</td>
                      <td className="p-3 font-amiri text-base font-bold text-[#2C1E16]">قَامَ الْمُسْلِمُونَ</td>
                      <td className="p-3 text-[#7A5C38] font-semibold">Lettre Wāw (و)</td>
                      <td className="p-3 text-[#4A3F37]">Sujet (Fā'il marfū')</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-medium text-[#2C1E16]">Duel (Muthannā)</td>
                      <td className="p-3 font-amiri text-base font-bold text-[#2C1E16]">حَضَرَ الطَّالِبَانِ</td>
                      <td className="p-3 text-[#7A5C38] font-semibold">Lettre Alif (ا)</td>
                      <td className="p-3 text-[#4A3F37]">Sujet (Fā'il marfū')</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 bg-[#FFFDF9] rounded-xl border border-[#DFD3C3] text-xs text-[#4A3F37]">
                <span className="font-bold text-[#2C1E16]">Note pédagogique : </span>
                Chaque leçon s'accompagne d'exercices d'application oraux en direct et d'un test autocorrectif hebdomadaire accessible sur la plateforme de l'Institut.
              </div>

            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#6B5D52]">
                Document sous droits d'auteur © Merkez AlZahraa Éditions Pédagogiques.
              </span>
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] text-xs font-bold rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#4A3F37]" />
                <span>{isRtl ? 'طباعة / حفظ النموذج' : 'Imprimer / Sauvegarder cet extrait'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Interactive Arabic Placement Quiz Modal (Light Beige Theme) */}
      {showQuizModal && (
        <div className="fixed inset-0 z-50 bg-[#2C1E16]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DFD3C3] p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between border-b border-[#DFD3C3] pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#2C1E16]">
                  {t.arabicInstitute.placementTitle}
                </h3>
                <p className="text-xs text-[#6B5D52]">
                  {t.arabicInstitute.placementSubtitle}
                </p>
              </div>
              <button
                onClick={() => setShowQuizModal(false)}
                className="p-2 text-[#6B5D52] hover:text-[#2C1E16] rounded-lg hover:bg-[#EAE0D5] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!quizSubmitted ? (
              <div className="space-y-6">
                {placementQuizQuestions.map((q) => (
                  <div key={q.id} className="p-4 bg-[#FAF8F5] rounded-xl border border-[#DFD3C3]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#7A5C38] uppercase tracking-wider mb-1">
                      <span>Question 0{q.id} / 04</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#2C1E16] mb-1">
                      {q.question}
                    </h4>
                    {q.arabicText && (
                      <p className="font-amiri text-sm text-[#4A3F37] mb-3">
                        {q.arabicText}
                      </p>
                    )}

                    <div className="space-y-2 mt-3">
                      {q.options.map((opt, i) => {
                        const isSelected = quizAnswers[q.id] === opt.levelScore;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleSelectAnswer(q.id, opt.levelScore)}
                            className={`w-full text-left rtl:text-right p-3 rounded-lg text-xs sm:text-sm transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-[#EAE0D5] text-[#2C1E16] border-[#8C6D46] font-bold shadow-xs'
                                : 'bg-[#FFFDF9] text-[#3E3027] border-[#DFD3C3] hover:border-[#A68B6B] hover:bg-[#F5EFE6]/60'
                            }`}
                          >
                            <span>{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < placementQuizQuestions.length}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm border ${
                    Object.keys(quizAnswers).length === placementQuizQuestions.length
                      ? 'bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border-[#CBB8A2] cursor-pointer'
                      : 'bg-[#F5EFE6] text-[#9C8B7A] border-[#DFD3C3] cursor-not-allowed'
                  }`}
                >
                  {isRtl ? 'عرض النتيجة والمستوى المقترح' : 'Calculer mon niveau recommandé'}
                </button>
              </div>
            ) : (
              /* Quiz Result Display */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#EAE0D5] text-[#5C432B] border border-[#CBB8A2] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#2C1E16] mb-2">
                  {isRtl ? 'المستوى التعليمي المقترح لك:' : 'Votre niveau recommandé :'}
                </h4>
                <div className="text-xl sm:text-2xl font-extrabold text-[#2C1E16] bg-[#FAF8F5] border-2 border-[#A68B6B] py-3 px-6 rounded-2xl max-w-md mx-auto mb-4 shadow-sm">
                  {calculateRecommendedLevel()}
                </div>
                <p className="text-[#4A3F37] text-xs sm:text-sm max-w-md mx-auto mb-6">
                  {isRtl
                    ? 'بناءً على إجاباتك، هذا هو الصف الأنسب لبدء دراستك دون مواجهة صعوبات أو تكرار ما تتقنه.'
                    : 'Cette estimation est indicative. Un bref échange audio de 10 minutes avec un enseignant validera définitivement votre inscription.'}
                </p>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setShowQuizModal(false);
                      onOpenEnrollment('arabe');
                    }}
                    className="px-6 py-3 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-sm rounded-xl shadow-sm cursor-pointer"
                  >
                    {isRtl ? 'متابعة التسجيل في هذا المستوى' : 'S\'inscrire dans ce niveau'}
                  </button>
                  <button
                    onClick={() => setQuizSubmitted(false)}
                    className="px-4 py-3 bg-[#FFFDF9] border border-[#D4C5B4] text-[#3E3027] rounded-xl text-xs font-semibold hover:bg-[#F5EFE6] cursor-pointer"
                  >
                    {isRtl ? 'إعادة الاختبار' : 'Recommencer'}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
