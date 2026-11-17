import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { useSiteConfig } from './context/SiteConfigContext';
import { useLanguage } from './context/LanguageContext.tsx';
import { MessageCircle } from 'lucide-react';

export const SECTION_ROUTES: Record<string, string> = {
  home: '/',
  coran: '/institut-du-coran',
  arabe: '/langue-arabe',
  sciences: '/sciences-islamiques',
  tarifs: '/tarifs-inscription',
  contact: '/contact',
};

const getActiveSectionFromPath = (pathname: string): string => {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = Object.entries(SECTION_ROUTES).find(([, route]) => route === normalized);
  return match ? match[0] : 'home';
};

export default function App() {
  const { language, setLanguage } = useLanguage();
  const { config } = useSiteConfig();
  const location = useLocation();
  const navigate = useNavigate();

  const activeSection = getActiveSectionFromPath(location.pathname);

  // Smoothly scroll to top whenever the active route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigate = (sectionId: string) => {
    const targetRoute = SECTION_ROUTES[sectionId] || '/';
    if (location.pathname === targetRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(targetRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnrollmentWithTrack = (track?: string) => {
    navigate('/tarifs-inscription', {
      state: {
        preselectedTrack: track,
        wizardRequestId: Date.now(),
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C1E16] font-sans ${language === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      
      {/* Persistent Header Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEnrollment={() => handleOpenEnrollmentWithTrack()}
      />

      {/* Active Page Content */}
      <main className="flex-1">
        <Outlet
          context={{
            onNavigate: handleNavigate,
            onOpenEnrollment: handleOpenEnrollmentWithTrack,
          }}
        />
      </main>

      {/* Persistent Institutional Footer */}
      <Footer language={language} onNavigate={handleNavigate} />

      {/* Floating Light Beige WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 group flex items-center">
        <div className="absolute right-full rtl:right-auto rtl:left-full mr-3 rtl:mr-0 rtl:ml-3 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-[#FFFDF9] text-[#2C1E16] text-xs font-bold rounded-2xl shadow-lg border border-[#DFD3C3] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          {language === 'ar' ? 'تحتاج إلى مساعدة؟ تواصل معنا' : "Besoin d'aide ? Contactez-nous"}
        </div>
        <a
          href={`${config.whatsappUrl.split('?')[0]}?text=${encodeURIComponent("Salam aleykoum, je souhaite me renseigner sur les cours de Merkez AlZahraa")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter l'administration sur WhatsApp"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border border-[#CBB8A2] cursor-pointer group/btn"
        >
          <MessageCircle className="w-5 h-5 text-[#4A3F37] group-hover/btn:rotate-12 transition-transform duration-200" />
          <span className="tracking-tight font-bold">{language === 'ar' ? 'الإدارة' : 'Administration'}</span>
        </a>
      </div>

    </div>
  );
}
