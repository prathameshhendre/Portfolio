import type { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
  grade?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}