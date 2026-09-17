export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  features?: string[];
  badgeText: string;
  tagline?: string;
  category: 'education' | 'sourcing' | 'inspection' | 'visa' | 'translation' | 'tour';
  iconName: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  badge?: string;
  imageCategory: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  serviceUsed: string;
  avatarInitials: string;
  verified: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  chineseTitle?: string;
  issuer: string;
  description: string;
  credentialId?: string;
  date?: string;
  type: 'iso' | 'education' | 'experience' | 'credential';
}
