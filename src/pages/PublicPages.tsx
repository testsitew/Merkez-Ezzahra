import React from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection.tsx';
import { TracksOverview } from '../components/TracksOverview.tsx';
import { HomeQuickCTA } from '../components/HomeQuickCTA.tsx';
import { QuranInstitute } from '../components/QuranInstitute.tsx';
import { ArabicInstitute } from '../components/ArabicInstitute.tsx';
import { IslamicSciencesInstitute } from '../components/IslamicSciencesInstitute.tsx';
import { PricingAndEnrollment } from '../components/PricingAndEnrollment.tsx';
import { ContactAndFAQ } from '../components/ContactAndFAQ.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

export interface PublicOutletContext {
  onNavigate: (sectionId: string) => void;
  onOpenEnrollment: (track?: string) => void;
}

export const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const { onNavigate, onOpenEnrollment } = useOutletContext<PublicOutletContext>();

  return (
    <>
      <HeroSection
        language={language}
        onExploreTracks={() => onNavigate('coran')}
        onOpenEnrollment={() => onOpenEnrollment()}
      />
      <TracksOverview
        language={language}
        onSelectTrack={(trackId) => onNavigate(trackId)}
      />
      <HomeQuickCTA
        language={language}
        onGoToPricing={() => onNavigate('tarifs')}
        onGoToContact={() => onNavigate('contact')}
      />
    </>
  );
};

export const QuranPage: React.FC = () => {
  const { language } = useLanguage();
  const { onOpenEnrollment } = useOutletContext<PublicOutletContext>();

  return (
    <QuranInstitute
      language={language}
      onOpenEnrollment={(track) => onOpenEnrollment(track || 'coran')}
    />
  );
};

export const ArabicPage: React.FC = () => {
  const { language } = useLanguage();
  const { onOpenEnrollment } = useOutletContext<PublicOutletContext>();

  return (
    <ArabicInstitute
      language={language}
      onOpenEnrollment={(track) => onOpenEnrollment(track || 'arabe')}
    />
  );
};

export const SciencesPage: React.FC = () => {
  const { language } = useLanguage();
  const { onOpenEnrollment } = useOutletContext<PublicOutletContext>();

  return (
    <IslamicSciencesInstitute
      language={language}
      onOpenEnrollment={(track) => onOpenEnrollment(track || 'sciences')}
    />
  );
};

interface PricingRouteState {
  preselectedTrack?: string;
  wizardRequestId?: number;
}

export const PricingPage: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const state = (location.state as PricingRouteState | null) || {};

  return (
    <PricingAndEnrollment
      language={language}
      preselectedTrack={state.preselectedTrack}
      wizardTrigger={state.wizardRequestId || 0}
    />
  );
};

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();

  return <ContactAndFAQ language={language} />;
};
