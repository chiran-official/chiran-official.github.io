import { Experience, Education, Skill, Certification, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "CHIRAN SUBASINGHE",
  role: "Senior Implementation Engineer",
  location: "Piliyandala, Sri Lanka",
  phone: "+94 77 630 86 25",
  email: "chiranm97@outlook.com",
  summary: "As a passionate and results-driven IT professional, I thrive on transforming complex technical challenges into successful business outcomes. My background in Business Information Systems, combined with nearly four years of hands-on experience in system implementation, optimization, and client management, has honed my ability to solve problems creatively.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/chiran-subasinghe', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:chiranm97@outlook.com', icon: 'mail' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: "Senior Implementation Engineer",
    company: "hSenid Business Solutions",
    period: "July 2025 - Present",
    description: [
      "Hosted and managed binaries on Azure, reducing deployment time.",
      "Executed system upgrades seamlessly, improving performance and increasing user satisfaction.",
      "Deployed a Windows service that optimized data processing.",
      "Maintained a productive relationship with clients through effective communication and requirement gathering."
    ]
  },
  {
    id: '2',
    role: "Associate Implementation Engineer",
    company: "hSenid Business Solutions",
    period: "May 2022 - June 2024",
    description: [
      "Troubleshot and optimized database queries, enhancing application performance.",
      "Provided client support, functional consultation, and feature demonstrations.",
      "Resolved client-reported issues within SLA, improving overall client satisfaction.",
      "Diagnosed and resolved server errors within 24 hours."
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: '1',
    institution: "Cardiff Metropolitan University",
    degree: "BSc (Hons) Business Information Systems, Information Technology",
    period: "Nov 2022 - Nov 2023"
  },
  {
    id: '2',
    institution: "National Institute of Business Management (NIBM)",
    degree: "Higher National Diploma in Information Systems",
    period: "March 2019 - May 2021"
  }
];

export const SKILLS_DATA: Skill[] = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "C", "HTML"] },
  { category: "Database", items: ["MySQL", "MSSQL"] },
  { category: "DevOps & Cloud", items: ["Azure", "Docker", "Jenkins (CI/CD)", "Linux", "VMware"] },
  { category: "Tools", items: ["Github", "Microsoft Platform"] },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { id: '1', name: "Build Your Generative AI Productivity Skills", issuer: "Microsoft & LinkedIn" },
  { id: '2', name: "Google IT Support Professional Certificate", issuer: "Google" },
  { id: '3', name: "Introduction to Prompt Engineering for Generative AI", issuer: "LinkedIn" },
  { id: '4', name: "Excel with Copilot: AI-Driven Data Analysis", issuer: "Microsoft" },
  { id: '5', name: "Copilot in PowerPoint: From Prompt to Presentation", issuer: "Microsoft" },
];

// Data formatted for Recharts Radar Chart
export const SKILL_METRICS = [
  { subject: 'Backend (Java/C)', A: 85, fullMark: 100 },
  { subject: 'Database (SQL)', A: 90, fullMark: 100 },
  { subject: 'Cloud (Azure)', A: 75, fullMark: 100 },
  { subject: 'DevOps (Docker/CI)', A: 80, fullMark: 100 },
  { subject: 'Scripting (Py/JS)', A: 70, fullMark: 100 },
  { subject: 'Support/Ops', A: 95, fullMark: 100 },
];
