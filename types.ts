export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ChartType {
  RADAR = 'RADAR',
  BAR = 'BAR'
}