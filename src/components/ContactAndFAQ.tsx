import React, { useState } from 'react';
import { useSiteConfig } from '../context/SiteConfigContext';
import { Language, FAQItem } from '../types/index.ts';
import { translations, faqData } from '../data/translations.ts';
import { GirihStar8, ArabesqueDivider } from './IslamicMotifs.tsx';
import { Mail, Phone, MessageCircle, Clock, Video, ChevronDown, ChevronUp, Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ContactAndFAQProps {
  language: Language;
}

export const ContactAndFAQ: React.FC<ContactAndFAQProps> = ({ language }) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const { config } = useSiteConfig();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'faq-3']);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'all'
    ? faqData
    : faqData.filter((item) => item.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const testimonials = [
    {
      quote: isRtl 
        ? "« بفضل الله ثم بفضل شيخي المجاز في مركز الزهراء، تمكنت من إتقان أحكام التجويد بدقة وحصلت على إجازة متصلة السند. البيئة التعليمية راقية ومنظمة للغاية. »" 
        : "« Grâce à Allah puis à mon Sheikh au Merkez AlZahraa, j'ai perfectionné mon Tajweed et obtenu une Ijazah avec Sanad. L'accompagnement est d'une bienveillance et d'une rigueur exceptionnelles. »",
      author: isRtl ? "أمين د. (طبيب - فرنسا)" : "Dr. Amine D. (France)",
      role: isRtl ? "طالب في معهد القرآن والإجازة" : "Cursus Ijazah & Coran",
      rating: 5
    },
    {
      quote: isRtl 
        ? "« دراسة اللغة العربية والنحو عبر المنصة الافتراضية التفاعلية كانت تجربة مذهلة. الأستاذ يتمكن من إيصال القاعدة النحوية بكل سهولة ويسر. »" 
        : "« L'étude de la langue arabe et de la grammaire via la plateforme interactive est remarquable. Les professeurs maîtrisent l'art de transmettre avec clarté. »",
      author: isRtl ? "سارة ب. (طالبة جامعية - بلجيكا)" : "Sara B. (Étudiante - Belgique)",
      role: isRtl ? "طالبة في معهد اللغة العربية" : "Cursus Langue Arabe",
      rating: 5
    },
    {
      quote: isRtl 
        ? "« المرونة الكبيرة في اختيار المواعيد بين المساء ونهاية الأسبوع ساعدتني كثيراً كامرأة عاملة على مواصلة تحصيل العلوم الشرعية بانتظام. »" 
        : "« La flexibilité des horaires le soir et le week-end m'a permis de concilier vie active et apprentissage régulier des sciences islamiques. »",
      author: isRtl ? "مريم ك. (مهندسة - كندا)" : "Mariam K. (Ingénieure - Canada)",
      role: isRtl ? "طالبة في معهد العلوم الشرعية" : "Cursus Sciences Islamiques",
      rating: 5
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="contact" className="py-24 bg-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#7A5C38] text-xs uppercase tracking-widest font-semibold">
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
            <span>{t.contactFaq.badge}</span>
            <GirihStar8 size={14} fill="#EAE0D5" stroke="#8C6D46" />
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold text-[#2C1E16] mb-4 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
            {t.contactFaq.title}
          </h2>
          <p className="text-[#4A3F37] text-base sm:text-lg leading-relaxed">
            {t.contactFaq.description}
          </p>
          <ArabesqueDivider className="w-56 mx-auto mt-4" />
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
          
          <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#DFD3C3] hover:border-[#A68B6B] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#2C1E16] mb-1">
              {t.contactFaq.contactCards.directEmail}
            </h4>
            <a
              href={`mailto:${config.email}`}
              className="text-xs text-[#7A5C38] hover:text-[#2C1E16] hover:underline font-semibold block truncate"
            >
              {config.email}
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#CBB8A2] hover:border-[#8C6D46] transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#2C1E16] mb-1">
                {t.contactFaq.contactCards.whatsapp}
              </h4>
              <div className="text-xs font-mono font-bold text-[#4A3F37] block mb-3">
                {config.phone}
              </div>
            </div>
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#4A3F37]" />
              <span>{isRtl ? 'تواصل عبر الواتساب' : 'Contacter sur WhatsApp'}</span>
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#CBB8A2] hover:border-[#8C6D46] transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center mb-4">
                <Send className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#2C1E16] mb-1">
                {t.contactFaq.contactCards.telegram}
              </h4>
              <div className="text-xs font-mono font-bold text-[#4A3F37] block mb-3">
                {t.contactFaq.contactCards.telegramVal}
              </div>
            </div>
            <a
              href={config.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#4A3F37]" />
              <span>{t.contactFaq.contactCards.telegramBtn}</span>
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#DFD3C3] hover:border-[#A68B6B] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#2C1E16] mb-1">
              {t.contactFaq.contactCards.hours}
            </h4>
            <span className="text-xs text-[#4A3F37] block">
              {t.contactFaq.contactCards.hoursVal}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#DFD3C3] hover:border-[#A68B6B] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] flex items-center justify-center mb-4">
              <Video className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#2C1E16] mb-1">
              {t.contactFaq.contactCards.platform}
            </h4>
            <span className="text-xs text-[#4A3F37] block">
              {t.contactFaq.contactCards.platformVal}
            </span>
          </div>

        </div>

        {/* 2-Column Layout: Interactive FAQ & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h3 className={`text-2xl font-bold text-[#2C1E16] mb-2 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                {isRtl ? 'الأسئلة الشائعة والمكررة' : 'Foire Aux Questions'}
              </h3>
              <p className="text-[#4A3F37] text-sm">
                {isRtl ? 'إجابات فورية عن الأسئلة الأكاديمية والتنظيمية الأكثر طرحاً' : 'Sélectionnez une catégorie pour filtrer les interrogations fréquentes.'}
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {[
                { id: 'all', label: t.contactFaq.categories.all },
                { id: 'general', label: t.contactFaq.categories.general },
                { id: 'pedagogy', label: t.contactFaq.categories.pedagogy },
                { id: 'pricing', label: t.contactFaq.categories.pricing },
                { id: 'technical', label: t.contactFaq.categories.technical },
              ].map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#EAE0D5] text-[#2C1E16] border-[#8C6D46] shadow-2xs font-bold'
                        : 'bg-[#FFFDF9] text-[#4A3F37] border-[#DFD3C3] hover:bg-[#FAF8F5] hover:text-[#2C1E16]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Accordion FAQ Items */}
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="border border-[#DFD3C3] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#A68B6B] bg-[#FFFDF9]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 text-left rtl:text-right font-bold text-sm text-[#2C1E16] flex items-center justify-between gap-4 bg-[#FAF8F5] hover:bg-[#EAE0D5]/60 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#7A5C38] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#6B5D52] shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-[#FFFDF9] text-xs sm:text-sm text-[#4A3F37] leading-relaxed border-t border-[#EAE0D5] animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Message Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] border border-[#DFD3C3] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className={`text-xl font-bold text-[#2C1E16] mb-1 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
                {t.contactFaq.form.title}
              </h3>
              <p className="text-[#4A3F37] text-xs sm:text-sm mb-6">
                {t.contactFaq.form.subtitle}
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3E3027] mb-1">
                      {t.contactFaq.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3E3027] mb-1">
                      {t.contactFaq.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3E3027] mb-1">
                      {t.contactFaq.form.subject}
                    </label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                      placeholder="Question sur le cursus Ijazah..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3E3027] mb-1">
                      {t.contactFaq.form.message} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:ring-1 focus:ring-[#8C6D46] text-xs sm:text-sm outline-none bg-[#FAF8F5] text-[#2C1E16] placeholder:text-[#8C7B6B]"
                      placeholder="Écrivez votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#4A3F37]" />
                    <span>{t.contactFaq.form.sendBtn}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[#EAE0D5] text-[#5C432B] border border-[#CBB8A2] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C1E16] mb-2">
                    {isRtl ? 'تم إرسال رسالتكم بنجاح' : 'Message Envoyé avec Succès !'}
                  </h4>
                  <p className="text-xs text-[#4A3F37] leading-relaxed mb-6">
                    {t.contactFaq.form.successMsg}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 border border-[#D4C5B4] bg-[#FAF8F5] text-[#2C1E16] text-xs font-semibold rounded-lg hover:bg-[#EAE0D5] cursor-pointer"
                  >
                    {isRtl ? 'إرسال رسالة أخرى' : 'Envoyer un autre message'}
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Dynamic Testimonials Carousel (Avis Étudiants Sliders) */}
        <div className="mt-24 pt-16 border-t border-[#DFD3C3]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A5C38] block mb-2">
              {isRtl ? 'آراء الطلاب والخصائص' : 'Témoignages & Retours d\'Étudiants'}
            </span>
            <h3 className={`text-2xl sm:text-3xl font-bold text-[#2C1E16] mb-2 ${isRtl ? 'font-cairo' : 'font-playfair'}`}>
              {isRtl ? 'ما يقوله طلابنا حول العالم' : 'Ce que disent nos étudiants à travers le monde'}
            </h3>
            <p className="text-[#4A3F37] text-xs sm:text-sm">
              {isRtl ? 'شهادات حية من طلاب يدرسون القرآن والعلوم الشرعية عن بعد' : 'Retours authentiques sur l\'accompagnement et la rigueur pédagogique du Merkez AlZahraa.'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FFFDF9] border border-[#DFD3C3] rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-6 text-[#CBB8A2]/35 font-serif text-8xl select-none pointer-events-none">
              “
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#8C6D46] fill-[#8C6D46]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-base sm:text-lg text-[#2C1E16] font-medium leading-relaxed mb-6 italic">
                {currentTestimonial.quote}
              </p>

              <div className="flex items-center justify-between border-t border-[#EAE0D5] pt-4">
                <div>
                  <h4 className="font-bold text-sm text-[#2C1E16]">{currentTestimonial.author}</h4>
                  <span className="text-xs text-[#7A5C38] font-semibold">{currentTestimonial.role}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="p-2 rounded-xl bg-[#FAF8F5] border border-[#D4C5B4] hover:bg-[#EAE0D5] hover:border-[#8C6D46] text-[#2C1E16] cursor-pointer shadow-2xs transition-all"
                    aria-label="Témoignage précédent"
                  >
                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    className="p-2 rounded-xl bg-[#FAF8F5] border border-[#D4C5B4] hover:bg-[#EAE0D5] hover:border-[#8C6D46] text-[#2C1E16] cursor-pointer shadow-2xs transition-all"
                    aria-label="Témoignage suivant"
                  >
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
