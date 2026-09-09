/* ==========================================================
   Testimonials
========================================================== */

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    featured: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "testimonial-1",
        name: "Engineering Manager",
        role: "AI Engineering Lead",
        company: "Enterprise AI Platform",
        image: "/testimonials/person-1.jpg",
        featured: true,
        quote:
            "Rakesh consistently delivers scalable AI backend solutions with a strong focus on reliability, clean architecture, and production readiness. His expertise in FastAPI, GraphRAG, and LLM integrations has been valuable for multiple AI initiatives.",
    },
    {
        id: "testimonial-2",
        name: "Senior AI Architect",
        role: "GenAI Solution Architect",
        company: "AI Innovation Lab",
        image: "/testimonials/person-2.jpg",
        featured: true,
        quote:
            "He has an excellent understanding of Retrieval-Augmented Generation, vector databases, and knowledge graphs. Rakesh quickly transforms AI concepts into production-grade backend APIs.",
    },
    {
        id: "testimonial-3",
        name: "Product Manager",
        role: "AI Product Manager",
        company: "Cloud AI Solutions",
        image: "/testimonials/person-3.jpg",
        featured: false,
        quote:
            "Rakesh communicates technical AI concepts clearly and collaborates effectively with product and engineering teams to deliver enterprise AI capabilities on schedule.",
    },
    {
        id: "testimonial-4",
        name: "Backend Team Lead",
        role: "Principal Backend Engineer",
        company: "Generative AI Startup",
        image: "/testimonials/person-4.jpg",
        featured: false,
        quote:
            "His backend engineering skills stand out, especially around API design, authentication, asynchronous processing, Docker deployments, and AI service orchestration.",
    },
    {
        id: "testimonial-5",
        name: "AI Consultant",
        role: "Independent AI Consultant",
        company: "AI Consulting Group",
        image: "/testimonials/person-5.jpg",
        featured: true,
        quote:
            "Rakesh approaches AI backend development with strong engineering discipline. His GraphRAG implementations and LangGraph agent workflows demonstrate practical GenAI expertise.",
    },
    {
        id: "testimonial-6",
        name: "Technical Reviewer",
        role: "Machine Learning Engineer",
        company: "Applied AI Team",
        image: "/testimonials/person-6.jpg",
        featured: false,
        quote:
            "A dependable AI backend engineer who focuses on performance, scalability, observability, and maintainable architecture while working with modern LLM ecosystems.",
    },
];

/* ==========================================================
   Featured Testimonials
========================================================== */

export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter(
    (testimonial) => testimonial.featured
);

/* ==========================================================
   Recruiter Highlights
========================================================== */

export const RECRUITER_HIGHLIGHTS = [
    "Strong AI Backend Architecture skills.",
    "Hands-on experience with GraphRAG and Neo4j.",
    "Production-ready FastAPI development.",
    "Experience integrating multiple LLM providers.",
    "Knowledge of LangChain, LangGraph, and AI Agents.",
    "Cloud-native deployment using Docker and Kubernetes.",
];