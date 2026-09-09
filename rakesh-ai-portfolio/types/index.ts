// ============================================================
// Global Portfolio Types
// AI Backend Engineer Portfolio
// ============================================================

/* ---------------------------------- */
/* Navigation */
/* ---------------------------------- */

export interface NavigationItem {
    label: string;
    href: string;
}

/* ---------------------------------- */
/* Social Links */
/* ---------------------------------- */

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

/* ---------------------------------- */
/* Hero Statistics */
/* ---------------------------------- */

export interface HeroStat {
    value: string;
    label: string;
}

/* ---------------------------------- */
/* Skills */
/* ---------------------------------- */

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface SkillItem {
    name: string;
    level: number; // 0–100
    category: string;
}

/* ---------------------------------- */
/* Experience */
/* ---------------------------------- */

export interface ExperienceItem {
    id: string;

    company: string;
    role: string;
    duration: string;
    location: string;

    description: string;

    achievements: string[];

    technologies: string[];
}

/* ---------------------------------- */
/* Projects */
/* ---------------------------------- */

export interface Project {
    id: string;

    title: string;

    category: string;

    description: string;

    technologies: string[];

    github?: string;

    live?: string;

    featured: boolean;

    image: string;
}

/* ---------------------------------- */
/* Certifications */
/* ---------------------------------- */

export interface Certification {
    title: string;
    provider: string;
    year?: string;
}

/* ---------------------------------- */
/* Contact */
/* ---------------------------------- */

export interface ContactInfo {
    title: string;
    value: string;
    icon: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
}

/* ---------------------------------- */
/* FAQ */
/* ---------------------------------- */

export interface FAQItem {
    question: string;
    answer: string;
}

/* ---------------------------------- */
/* Timeline */
/* ---------------------------------- */

export interface TimelineItem {
    year: string;
    title: string;
    subtitle: string;
    description: string;
}

/* ---------------------------------- */
/* Metrics Dashboard */
/* ---------------------------------- */

export interface MetricCard {
    label: string;
    value: string;
    icon?: string;
}

/* ---------------------------------- */
/* AI Services */
/* ---------------------------------- */

export interface ServiceCard {
    title: string;
    description: string;
    icon: string;
}

/* ---------------------------------- */
/* Command Palette */
/* ---------------------------------- */

export interface CommandItem {
    id: string;
    title: string;
    description: string;
    shortcut?: string;
    action: () => void;
}

/* ---------------------------------- */
/* Loading Screen */
/* ---------------------------------- */

export interface LoadingMessage {
    text: string;
}

/* ---------------------------------- */
/* Theme */
/* ---------------------------------- */

export type ThemeMode = "light" | "dark" | "system";

/* ---------------------------------- */
/* Animation */
/* ---------------------------------- */

export type AnimationDirection =
    | "up"
    | "down"
    | "left"
    | "right"
    | "scale";

/* ---------------------------------- */
/* API Response */
/* ---------------------------------- */

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
}

/* ---------------------------------- */
/* Email API */
/* ---------------------------------- */

export interface EmailResponse {
    success: boolean;
    message: string;
}