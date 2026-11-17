import React, { createContext, useContext, useEffect, useState } from 'react';

export interface SiteConfig {
  instituteName: string;
  logoUrl: string;
  phone: string;
  email: string;
  address: string;
  whatsappUrl: string;
  telegramUrl: string;
  heroTitle: string;
  heroSubtitle: string;
}

export const DEFAULT_LOGO_URL = '/assets/aistudio/Logo_-_Modifi__9245298a.png';

const defaultConfig: SiteConfig = {
  instituteName: 'Merkez AlZahraa',
  logoUrl: DEFAULT_LOGO_URL,
  phone: '+213 662 323 566',
  email: 'contact@merkezalzahraa.com',
  address: "Adresse de l'institut, Alger, Algérie",
  whatsappUrl: 'https://wa.me/213662323566',
  telegramUrl: 'https://t.me/merkezalzahraa',
  heroTitle: 'Transmettre la Science avec Rigueur & Authenticité',
  heroSubtitle: "Un enseignement d'excellence fondé sur la tradition authentique et la pédagogie moderne.",
};

const SiteConfigContext = createContext<{
  config: SiteConfig;
  updateConfig: (newConfig: SiteConfig) => void;
  resetConfig: () => void;
}>({
  config: defaultConfig,
  updateConfig: () => {},
  resetConfig: () => {},
});

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('siteConfig');
      if (saved) {
        const parsed = JSON.parse(saved);
        const migratedLogo =
          !parsed.logoUrl || parsed.logoUrl === 'logo.png' || parsed.logoUrl === '/logo.png'
            ? DEFAULT_LOGO_URL
            : parsed.logoUrl;
        return { ...defaultConfig, ...parsed, logoUrl: migratedLogo };
      }
    } catch {
      // ignore
    }
    return defaultConfig;
  });

  const updateConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('siteConfig', JSON.stringify(newConfig));
    } catch (e) {
      console.error('Error saving siteConfig to localStorage', e);
    }
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
    try {
      localStorage.removeItem('siteConfig');
    } catch (e) {
      console.error('Error resetting siteConfig', e);
    }
  };

  return (
    <SiteConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => useContext(SiteConfigContext);
