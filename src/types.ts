export interface LawSection {
  section: string;
  title: string;
  explanation: string;
  punishment: string;
  fineAmount: string;
  legalProtections: string[];
}

export interface LegalAnalysisResult {
  relevantSections: LawSection[];
  legalSteps: string[];
  recommendedActions: string[];
  safetyTips: string[];
  caseSummary: string;
  isFallback?: boolean;
}

export interface PredefinedSection {
  id: string;
  title: string;
  code: string;
  description: string;
  punishment: string;
  action: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
  scope: string;
}
