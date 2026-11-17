import React, { useState, useEffect } from 'react';
import { Language, PricingPlan, EnrollmentFormData, FormulaType, SubjectType } from '../types/index.ts';
import { translations, pricingPlansData } from '../data/translations.ts';
import { GirihStar8, ArabesqueDivider } from './IslamicMotifs.tsx';
import { useSiteConfig, DEFAULT_LOGO_URL } from '../context/SiteConfigContext';
import { CheckCircle2, Clock, Users, User, ArrowRight, ArrowLeft, MessageCircle, X, Download, Sparkles, BookOpen, Layers } from 'lucide-react';

interface PricingAndEnrollmentProps {
  language: Language;
  preselectedTrack?: string;
  initialWizardOpen?: boolean;
  wizardTrigger?: number;
}

export const PricingAndEnrollment: React.FC<PricingAndEnrollmentProps> = ({
  language,
  preselectedTrack,
  initialWizardOpen = false,
  wizardTrigger = 0,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const { config } = useSiteConfig();

  const [showWizardModal, setShowWizardModal] = useState<boolean>(initialWizardOpen);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [confirmedDossierId, setConfirmedDossierId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<EnrollmentFormData>({
    subject: (preselectedTrack as SubjectType) || 'coran',
    formula: 'groupe',
    intensity: '2h',
    level: 'intermediaire',
    schedulePreference: 'evening',
    fullName: '',
    email: '',
    phone: '',
    ageBracket: 'adult',
    priorExperience: '',
  });

  useEffect(() => {
    if (preselectedTrack) {
      const validSubject = ['coran', 'arabe', 'sciences', 'integral'].includes(preselectedTrack)
        ? (preselectedTrack as SubjectType)
        : 'coran';
      setFormData((prev) => ({ ...prev, subject: validSubject }));
    }
  }, [preselectedTrack]);

  useEffect(() => {
    if (wizardTrigger > 0 || initialWizardOpen) {
      setShowWizardModal(true);
      setCurrentStep(1);
      setConfirmedDossierId(null);
    }
  }, [wizardTrigger, initialWizardOpen]);

  // Hourly rate map
  const getHourlyRate = (formula: FormulaType): number => {
    switch (formula) {
      case 'groupe':
        return 3;
      case 'binome':
        return 4;
      case 'individuel':
        return 5;
    }
  };

  // Monthly Hours calculation: 4 weeks in a month
  const getMonthlyHours = (intensity: '1h' | '2h' | '4h'): number => {
    switch (intensity) {
      case '1h':
        return 4;
      case '2h':
        return 8;
      case '4h':
        return 16;
    }
  };

  // Live Tuition calculation logic
  const calculateTuition = () => {
    const rate = getHourlyRate(formData.formula);
    const hoursPerMonth = getMonthlyHours(formData.intensity);
    return rate * hoursPerMonth;
  };

  const handleOpenWizardWithFormula = (formulaId: FormulaType) => {
    setFormData((prev) => ({ ...prev, formula: formulaId }));
    setShowWizardModal(true);
    setCurrentStep(1);
    setConfirmedDossierId(null);
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `ZAHRAA-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedDossierId(generatedRef);

    const subjectNames: Record<string, string> = {
      coran: "Institut du Coran (Tahfidz, Tajweed, Ijazah)",
      arabe: "Langue Arabe (Lecture, Grammaire, Balagha)",
      sciences: "Sciences Islamiques (Fiqh, Aqida, Hadith)",
      integral: "Pack Pluridisciplinaire (Coran + Arabe + Sciences)",
    };

    const scheduleNames: Record<string, string> = {
      morning: "Matinées en semaine (9h - 12h)",
      afternoon: "Après-midi en semaine (12h - 18h)",
      evening: "Soirées en semaine (19h - 22h)",
      weekend: "Week-end (Samedi / Dimanche)",
    };

    const ageNames: Record<string, string> = {
      adult: "Adulte (+18 ans)",
      teen: "Adolescent (13-17 ans)",
      child: "Enfant (6-12 ans)",
    };

    const monthlyHrs = getMonthlyHours(formData.intensity);
    const hourlyRate = getHourlyRate(formData.formula);
    const totalFee = calculateTuition();

    const message = `Salam aleykoum,\n\nJe souhaite valider mon inscription au Merkez AlZahraa (Référence Dossier: ${generatedRef}).\n\n` +
      `📋 *DÉTAILS DE L'INSCRIPTION* :\n` +
      `• Nom et Prénom : ${formData.fullName}\n` +
      `• Adresse e-mail : ${formData.email}\n` +
      `• Téléphone / WhatsApp : ${formData.phone}\n` +
      `• Tranche d'âge : ${ageNames[formData.ageBracket] || formData.ageBracket}\n` +
      `• Matière choisie : ${subjectNames[formData.subject] || formData.subject}\n` +
      `• Formule sélectionnée : Formule ${formData.formula} (${hourlyRate} € / heure)\n` +
      `• Rythme hebdomadaire : ${monthlyHrs}h / mois\n` +
      `• Créneau horaire préféré : ${scheduleNames[formData.schedulePreference] || formData.schedulePreference}\n` +
      `• Frais estimés : ${totalFee} € / mois\n` +
      `• Objectifs / Acquis : ${formData.priorExperience || 'Non spécifié'}\n\n` +
      `J'attends votre confirmation pour finaliser le démarrage des cours. Barakallahou fikoum !`;

    const encodedMessage = encodeURIComponent(message);
    const baseUrl = config.whatsappUrl.split('?')[0] || 'https://wa.me/213662323566';
    const whatsappUrl = `${baseUrl}?text=${encodedMessage}`;

    // Direct redirect to WhatsApp
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section id="tarifs" className="py-24 bg-[#FAF8F5] relative border-b border-[#DFD3C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{t.pricingSection.badge}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {t.pricingSection.title}
          </h2>
          <p className="text-[#4A3F37] text-base sm:text-lg leading-relaxed">
            {t.pricingSection.description}
          </p>
          <div className="mt-3 text-xs sm:text-sm font-semibold text-[#7A5C38]">
            {t.pricingSection.rateExplanation}
          </div>
          <ArabesqueDivider className="w-56 mx-auto mt-4" />
        </div>

        {/* The 3 Exact Mandatory Pricing Cards (Groupe @ 3€, Binôme @ 4€, Individuel @ 5€) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {pricingPlansData.map((plan) => {
            const isPopular = plan.highlight;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative group shadow-sm hover:shadow-md ${
                  isPopular
                    ? 'bg-[#F5EFE6] border-2 border-[#8C6D46] ring-4 ring-[#EAE0D5]/80 md:scale-105 z-10'
                    : 'bg-[#FFFDF9] border border-[#DFD3C3] hover:border-[#A68B6B]'
                }`}
              >
                {/* Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EAE0D5] text-[#2C1E16] border border-[#8C6D46] text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-[#5C432B]" />
                    <span>{t.pricingSection.popularBadge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A5C38]">
                      {isRtl ? plan.arabicSubtitle : plan.subtitle}
                    </span>
                    <GirihStar8 size={18} fill="#EAE0D5" stroke="#8C6D46" />
                  </div>

                  <h3 className="text-2xl font-bold mb-1 text-[#2C1E16]">
                    {isRtl ? plan.arabicName : plan.name}
                  </h3>
                  
                  <p className="text-xs text-[#6B5D52] mb-6 font-medium">
                    {isRtl ? plan.arabicClassSize : plan.classSize}
                  </p>

                  {/* Hourly Rate Display */}
                  <div className={`mb-6 pb-6 p-4 rounded-2xl border ${
                    isPopular ? 'bg-[#FFFDF9] border-[#D4C5B4]' : 'bg-[#FAF8F5] border-[#DFD3C3]'
                  }`}>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold tracking-tight font-mono tabular-nums text-[#2C1E16]">
                        {plan.hourlyRate} €
                      </span>
                      <span className="text-sm font-bold text-[#4A3F37]">
                        {t.pricingSection.hourUnit}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#6B5D52] block mt-1">
                      {isRtl ? 'مثال: ساعتان أسبوعياً = ' + (plan.hourlyRate * 8) + ' € شهرياً' : 'Exemple : 2h / semaine = ' + (plan.hourlyRate * 8) + ' € / mois'}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#7A5C38]" />
                        <span className="text-[#3E3027] leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenWizardWithFormula(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    isPopular
                      ? 'bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#8C6D46] shadow-md'
                      : 'bg-[#FAF8F5] hover:bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2]'
                  }`}
                >
                  <span>{t.pricingSection.enrollNow}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4 text-[#4A3F37]" /> : <ArrowRight className="w-4 h-4 text-[#4A3F37]" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Multi-step Registration Wizard Banner */}
        <div className="bg-gradient-to-r from-[#FFFDF9] via-[#F5EFE6] to-[#FFFDF9] text-[#2C1E16] rounded-3xl p-8 sm:p-12 border border-[#D4C5B4] shadow-sm relative overflow-hidden max-w-6xl mx-auto">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A5C38] block mb-2">
              {isRtl ? 'تسجيل فوري مباشر' : 'Admissions & Inscription Ouverte'}
            </span>
            <h3 className={`text-2xl sm:text-4xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
              {t.pricingSection.calculatorTitle}
            </h3>
            <p className="text-[#4A3F37] text-sm sm:text-base leading-relaxed mb-8">
              {t.pricingSection.calculatorSubtitle}
            </p>
            <button
              onClick={() => {
                setShowWizardModal(true);
                setCurrentStep(1);
                setConfirmedDossierId(null);
              }}
              className="px-8 py-4 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-sm sm:text-base rounded-xl shadow hover:shadow-md transition-all cursor-pointer flex items-center gap-3"
            >
              <span>{isRtl ? 'فتح استمارة التسجيل التفاعلية' : 'Lancer le formulaire d\'inscription'}</span>
              {isRtl ? <ArrowLeft className="w-5 h-5 text-[#4A3F37]" /> : <ArrowRight className="w-5 h-5 text-[#4A3F37]" />}
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Registration Wizard Modal (Light Beige Theme) */}
      {showWizardModal && (
        <div className="fixed inset-0 z-50 bg-[#2C1E16]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-[#DFD3C3] p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#DFD3C3] pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#2C1E16]">
                  {isRtl ? 'استمارة التسجيل في مركز الزهراء' : 'Dossier d\'Inscription - Merkez AlZahraa'}
                </h3>
                <span className="text-xs text-[#6B5D52] font-medium">
                  {isRtl ? 'خطوة ' + currentStep + ' من ٣' : 'Étape ' + currentStep + ' sur 3'}
                </span>
              </div>
              <button
                onClick={() => setShowWizardModal(false)}
                className="p-2 text-[#6B5D52] hover:text-[#2C1E16] rounded-lg hover:bg-[#EAE0D5] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!confirmedDossierId ? (
              <form onSubmit={handleFormSubmit}>
                
                {/* Step Indicators */}
                <div className="flex items-center justify-between gap-2 mb-8">
                  {[1, 2, 3].map((stepNum) => {
                    const isPassed = currentStep > stepNum;
                    const isCurrent = currentStep === stepNum;
                    return (
                      <div key={stepNum} className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${
                              isPassed
                                ? 'bg-[#DFD2C3] text-[#2C1E16] border-[#8C6D46]'
                                : isCurrent
                                ? 'bg-[#EAE0D5] text-[#2C1E16] border-[#8C6D46] ring-2 ring-[#EAE0D5]'
                                : 'bg-[#FAF8F5] text-[#8C7B6B] border-[#DFD3C3]'
                            }`}
                          >
                            {stepNum}
                          </div>
                          <span className={`text-xs font-semibold hidden sm:inline ${
                            isCurrent ? 'text-[#2C1E16]' : 'text-[#6B5D52]'
                          }`}>
                            {stepNum === 1 ? t.wizard.step1 : stepNum === 2 ? t.wizard.step2 : t.wizard.step3}
                          </span>
                        </div>
                        <div className={`h-1.5 rounded-full ${
                          isPassed ? 'bg-[#8C6D46]' : isCurrent ? 'bg-[#CBB8A2]' : 'bg-[#EAE0D5]'
                        }`} />
                      </div>
                    );
                  })}
                </div>

                {/* Step 1: Subject Selection & Formula Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    
                    {/* Choose Subject */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3E3027] mb-2">
                        {t.wizard.chooseSubject}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { id: 'coran' as const, label: t.wizard.subjects.coran, icon: BookOpen },
                          { id: 'arabe' as const, label: t.wizard.subjects.arabe, icon: Layers },
                          { id: 'sciences' as const, label: t.wizard.subjects.sciences, icon: Sparkles },
                          { id: 'integral' as const, label: t.wizard.subjects.integral, icon: GirihStar8 },
                        ].map((sub) => {
                          const isSelected = formData.subject === sub.id;
                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, subject: sub.id })}
                              className={`p-3.5 rounded-xl border text-left rtl:text-right transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#EAE0D5] text-[#2C1E16] border-[#8C6D46] shadow-xs font-bold'
                                  : 'bg-[#FAF8F5] text-[#3E3027] border-[#DFD3C3] hover:border-[#A68B6B] hover:bg-[#F5EFE6]'
                              }`}
                            >
                              <span className="text-xs sm:text-sm block">
                                {sub.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Choose Formula */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3E3027] mb-2">
                        {t.wizard.chooseFormula}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {pricingPlansData.map((plan) => {
                          const isSelected = formData.formula === plan.id;
                          return (
                            <button
                              key={plan.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, formula: plan.id })}
                              className={`p-4 rounded-xl border text-left rtl:text-right transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#EAE0D5] border-2 border-[#8C6D46] shadow-xs'
                                  : 'bg-[#FAF8F5] border-[#DFD3C3] hover:border-[#A68B6B] hover:bg-[#F5EFE6]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-sm text-[#2C1E16]">
                                  {isRtl ? plan.arabicName : plan.name}
                                </span>
                                <span className="text-xs font-mono font-bold text-[#7A5C38]">
                                  {plan.hourlyRate} €/h
                                </span>
                              </div>
                              <span className="text-[11px] text-[#4A3F37] block">
                                {isRtl ? plan.arabicSubtitle : plan.subtitle}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                )}

                {/* Step 2: Intensity & Schedule */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3E3027] mb-2">
                        {t.wizard.intensityLabel}
                      </label>
                      <div className="space-y-2.5">
                        {(['1h', '2h', '4h'] as const).map((intensity) => {
                          const isSelected = formData.intensity === intensity;
                          const monthlyHrs = getMonthlyHours(intensity);
                          const rate = getHourlyRate(formData.formula);
                          const total = monthlyHrs * rate;

                          return (
                            <button
                              key={intensity}
                              type="button"
                              onClick={() => setFormData({ ...formData, intensity })}
                              className={`w-full p-4 rounded-xl border text-left rtl:text-right transition-all flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-[#EAE0D5] text-[#2C1E16] border-[#8C6D46] shadow-xs'
                                  : 'bg-[#FAF8F5] text-[#3E3027] border-[#DFD3C3] hover:border-[#A68B6B] hover:bg-[#F5EFE6]'
                              }`}
                            >
                              <div>
                                <span className="text-xs sm:text-sm font-semibold block text-[#2C1E16]">
                                  {intensity === '1h'
                                    ? t.wizard.intensity1h
                                    : intensity === '2h'
                                    ? t.wizard.intensity2h
                                    : t.wizard.intensity4h}
                                </span>
                                <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-[#5C432B] font-semibold' : 'text-[#6B5D52]'}`}>
                                  {monthlyHrs}h / mois × {rate}€/h = <strong className="font-mono">{total} € / mois</strong>
                                </span>
                              </div>
                              <Clock className={`w-4 h-4 ${isSelected ? 'text-[#2C1E16]' : 'text-[#8C7B6B]'}`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3E3027] mb-2">
                        {t.wizard.scheduleLabel}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { id: 'morning', label: 'Matinées en semaine (9h - 12h)' },
                          { id: 'afternoon', label: 'Après-midi en semaine (12h - 18h)' },
                          { id: 'evening', label: 'Soirées en semaine (19h - 22h)' },
                          { id: 'weekend', label: 'Week-end (Samedi / Dimanche)' },
                        ].map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, schedulePreference: s.id as any })}
                            className={`p-3.5 rounded-xl border text-center transition-all text-xs font-semibold cursor-pointer ${
                              formData.schedulePreference === s.id
                                ? 'bg-[#EAE0D5] text-[#2C1E16] font-bold border-[#8C6D46] shadow-xs'
                                : 'bg-[#FAF8F5] text-[#3E3027] border-[#DFD3C3] hover:border-[#A68B6B] hover:bg-[#F5EFE6]'
                            }`}
                          >
                            <span>{s.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Student Details & Dossier */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#3E3027] mb-1">
                          {t.wizard.formLabels.fullName} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Zaid Ibn Thabit"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#3E3027] mb-1">
                          {t.wizard.formLabels.email} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="etudiant@exemple.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#3E3027] mb-1">
                          {t.wizard.formLabels.phone} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+33 6 12 34 56 78"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#3E3027] mb-1">
                          {t.wizard.formLabels.ageBracket}
                        </label>
                        <select
                          value={formData.ageBracket}
                          onChange={(e) => setFormData({ ...formData, ageBracket: e.target.value as any })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16]"
                        >
                          <option value="adult">{t.wizard.formLabels.adult}</option>
                          <option value="teen">{t.wizard.formLabels.teen}</option>
                          <option value="child">{t.wizard.formLabels.child}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3E3027] mb-1">
                        {t.wizard.formLabels.priorKnowledge}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.priorExperience}
                        onChange={(e) => setFormData({ ...formData, priorExperience: e.target.value })}
                        placeholder={t.wizard.formLabels.priorPlaceholder}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                      />
                    </div>

                    {/* Live Summary Box with Exact Rates */}
                    <div className="bg-[#F5EFE6] border border-[#CBB8A2] text-[#2C1E16] p-4 rounded-2xl flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-[#6B5D52] font-semibold block">
                          {t.wizard.summary.tuition}
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-mono font-bold text-[#2C1E16]">
                            {calculateTuition()} €
                          </span>
                          <span className="text-xs text-[#4A3F37] font-medium">
                            / mois ({getMonthlyHours(formData.intensity)}h @ {getHourlyRate(formData.formula)}€/h)
                          </span>
                        </div>
                      </div>

                      <div className="text-right rtl:text-left text-xs text-[#4A3F37] font-medium">
                        <span className="capitalize font-bold text-[#2C1E16]">Formule {formData.formula}</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* Modal Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#DFD3C3]">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 rounded-xl border border-[#D4C5B4] bg-[#FAF8F5] text-[#2C1E16] font-semibold text-xs sm:text-sm hover:bg-[#EAE0D5] cursor-pointer flex items-center gap-1.5"
                    >
                      {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                      <span>{isRtl ? 'السابق' : 'Précédent'}</span>
                    </button>
                  ) : <div />}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-2.5 rounded-xl bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm cursor-pointer flex items-center gap-1.5 shadow-sm"
                    >
                      <span>{isRtl ? 'التالي' : 'Suivant'}</span>
                      {isRtl ? <ArrowLeft className="w-4 h-4 text-[#4A3F37]" /> : <ArrowRight className="w-4 h-4 text-[#4A3F37]" />}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm cursor-pointer shadow-sm"
                    >
                      {t.wizard.summary.submitBtn}
                    </button>
                  )}
                </div>

              </form>
            ) : (
              /* Success Confirmation Screen (Light Beige Theme) */
              <div className="text-center py-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl border-2 border-[#CBB8A2] bg-[#FAF8F5] p-1.5 shadow-sm overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={config.logoUrl || DEFAULT_LOGO_URL}
                      alt={config.instituteName}
                      className="w-full h-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_LOGO_URL; }}
                      width="64"
                      height="64"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-[#5C432B]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-[#2C1E16] mb-1">
                  {t.wizard.confirmation.title}
                </h4>
                <p className="text-xs text-[#6B5D52] mb-4 font-medium">
                  {t.wizard.confirmation.subtitle}: <span className="font-mono font-bold text-[#2C1E16]">{confirmedDossierId}</span>
                </p>

                <div className="bg-[#FAF8F5] border border-[#DFD3C3] rounded-2xl p-4 text-xs sm:text-sm text-[#3E3027] max-w-lg mx-auto mb-6 text-left rtl:text-right">
                  <div className="font-bold text-[#2C1E16] mb-2">{t.wizard.confirmation.message}</div>
                  <div className="space-y-1 text-[#4A3F37] text-xs border-t border-[#DFD3C3] pt-2">
                    <div><strong>{isRtl ? 'الاسم:' : 'Nom :'}</strong> {formData.fullName}</div>
                    <div><strong>{isRtl ? 'المادة:' : 'Matière :'}</strong> {t.wizard.subjects[formData.subject]}</div>
                    <div><strong>{isRtl ? 'الصيغة:' : 'Formule :'}</strong> Formule {formData.formula} ({getHourlyRate(formData.formula)} € / h)</div>
                    <div><strong>{isRtl ? 'الرسوم الشهرية المقدرة:' : 'Tarif mensuel estimé :'}</strong> {calculateTuition()} € / mois ({getMonthlyHours(formData.intensity)}h)</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/213662323566?text=${encodeURIComponent(
                      `Salam aleykoum, je viens de finaliser mon inscription sur Merkez AlZahraa (Dossier Ref: ${confirmedDossierId}, Matière: ${formData.subject}, Formule: ${formData.formula} @ ${getHourlyRate(formData.formula)}€/h, Rythme: ${formData.intensity}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#4A3F37]" />
                    <span>{t.wizard.confirmation.whatsappBtn}</span>
                  </a>

                  <button
                    onClick={() => window.print()}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#D4C5B4] bg-[#FAF8F5] text-[#2C1E16] font-semibold text-xs sm:text-sm hover:bg-[#EAE0D5] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#4A3F37]" />
                    <span>{t.wizard.confirmation.downloadReceipt}</span>
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
