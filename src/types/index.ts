export type Language = 'fr' | 'ar';

export type TrackId = 'coran' | 'arabe' | 'sciences';

export type FormulaType = 'groupe' | 'binome' | 'individuel';
export type SubjectType = 'coran' | 'arabe' | 'sciences' | 'integral';

export interface LevelInfo {
  id: string;
  title: string;
  duration: string;
  prerequisites: string;
  objectives: string[];
  referenceBook?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  levels: LevelInfo[];
  features: string[];
}

export interface TajweedRule {
  id: string;
  name: string;
  arabicName: string;
  category: string;
  explanation: string;
  verseExample: string;
  surahRef: string;
  phoneticRule: string;
  audioToneFrequency: number;
}

export interface PricingPlan {
  id: FormulaType;
  name: string;
  arabicName: string;
  hourlyRate: number; // 3€ (Groupe), 4€ (Binôme), 5€ (Individuel)
  subtitle: string;
  arabicSubtitle: string;
  highlight?: boolean;
  tagline: string;
  classSize: string;
  arabicClassSize: string;
  features: string[];
}

export interface EnrollmentFormData {
  subject: SubjectType;
  formula: FormulaType;
  intensity: '1h' | '2h' | '4h'; // hours per week
  level: string;
  schedulePreference: 'weekend' | 'evening' | 'morning' | 'afternoon';
  fullName: string;
  email: string;
  phone: string;
  ageBracket: 'child' | 'teen' | 'adult';
  priorExperience: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'pedagogy' | 'pricing' | 'technical';
  question: string;
  answer: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  arabicText?: string;
  options: {
    text: string;
    levelScore: number; // 1 = Beginner, 2 = Intermediate, 3 = Advanced
  }[];
}
