// ============================================================
// Portfolio Constants
// AI Backend Engineer Portfolio
// ============================================================

/* ---------------------------------- */
/* Navigation */
/* ---------------------------------- */

export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

/* ---------------------------------- */
/* Personal Information */
/* ---------------------------------- */

export const PERSONAL_INFO = {
    name: "Rakesh Kumar",
    title: "AI Backend Engineer",

    subtitle:
        "Building scalable AI backend systems, GraphRAG applications, LLM APIs, AI Agents, and cloud-native intelligent platforms.",

    location: "Bengaluru, Karnataka, India",

    email: "rakeshkumar.dev@example.com",

    github: "https://github.com/rakeshkumar",

    linkedin: "https://linkedin.com/in/rakeshkumar",

    website: "https://rakesh-ai.vercel.app",
};

/* ---------------------------------- */
/* Hero Statistics */
/* ---------------------------------- */

export const HERO_STATS = [
    {
        value: "4+",
        label: "Years Experience",
    },
    {
        value: "15+",
        label: "AI Projects",
    },
    {
        value: "10+",
        label: "LLM Integrations",
    },
    {
        value: "24/7",
        label: "Learning AI",
    },
];

/* ---------------------------------- */
/* Social Links */
/* ---------------------------------- */

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        url: PERSONAL_INFO.github,
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: PERSONAL_INFO.linkedin,
        icon: "linkedin",
    },
    {
        name: "Email",
        url: `mailto:${PERSONAL_INFO.email}`,
        icon: "mail",
    },
];

/* ---------------------------------- */
/* AI Skills */
/* ---------------------------------- */

export const AI_SKILLS = {
    llm: [
        "OpenAI GPT-5",
        "GPT-4o",
        "LangChain",
        "LangGraph",
        "LlamaIndex",
        "Claude API",
        "Gemini API",
        "Prompt Engineering",
        "Function Calling",
        "Structured Outputs",
    ],

    rag: [
        "RAG",
        "GraphRAG",
        "Hybrid Search",
        "Vector Search",
        "Knowledge Graphs",
        "Embedding Models",
        "Chunking Strategies",
        "Retrieval Optimization",
    ],

    backend: [
        "Python",
        "FastAPI",
        "Java",
        "Spring Boot",
        "REST APIs",
        "WebSockets",
        "Authentication",
        "JWT",
        "OAuth",
        "Microservices",
    ],

    databases: [
        "Neo4j",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Pinecone",
        "ChromaDB",
        "Qdrant",
        "FAISS",
    ],

    cloud: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Vercel",
        "GitHub Actions",
        "CI/CD",
    ],

    frontend: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
    ],
};

/* ---------------------------------- */
/* Experience Highlights */
/* ---------------------------------- */

export const EXPERIENCE_HIGHLIGHTS = [
    "Developed AI backend APIs for enterprise applications.",
    "Built GraphRAG systems using Neo4j knowledge graphs.",
    "Integrated OpenAI, Gemini, and Claude APIs.",
    "Designed scalable Retrieval-Augmented Generation pipelines.",
    "Created AI agents with LangGraph and LangChain.",
    "Implemented vector search using Pinecone, ChromaDB, and FAISS.",
    "Optimized backend performance using FastAPI and async processing.",
];

/* ---------------------------------- */
/* AI Certifications */
/* ---------------------------------- */

export const CERTIFICATIONS = [
    {
        title: "Generative AI with Large Language Models",
        provider: "DeepLearning.AI",
    },
    {
        title: "LangChain for LLM Application Development",
        provider: "LangChain Academy",
    },
    {
        title: "OpenAI API Fundamentals",
        provider: "OpenAI",
    },
    {
        title: "Neo4j Graph Data Science Fundamentals",
        provider: "Neo4j",
    },
];

/* ---------------------------------- */
/* Project Categories */
/* ---------------------------------- */

export const PROJECT_CATEGORIES = [
    "All",
    "GraphRAG",
    "LLM APIs",
    "AI Agents",
    "Backend APIs",
    "Cloud AI",
    "GenAI",
];

/* ---------------------------------- */
/* Contact Information */
/* ---------------------------------- */

export const CONTACT_INFO = [
    {
        title: "Email",
        value: PERSONAL_INFO.email,
        icon: "mail",
    },
    {
        title: "Location",
        value: PERSONAL_INFO.location,
        icon: "map-pin",
    },
    {
        title: "LinkedIn",
        value: PERSONAL_INFO.linkedin,
        icon: "linkedin",
    },
    {
        title: "GitHub",
        value: PERSONAL_INFO.github,
        icon: "github",
    },
];

/* ---------------------------------- */
/* FAQ Section */
/* ---------------------------------- */

export const FAQ_ITEMS = [
    {
        question: "What AI technologies do you specialize in?",
        answer:
            "I specialize in GraphRAG, LLM APIs, AI Agents, LangChain, LangGraph, FastAPI, Neo4j, Vector Databases, and scalable AI backend architectures.",
    },
    {
        question: "Do you build production-ready AI backend systems?",
        answer:
            "Yes. I focus on scalable backend APIs, retrieval systems, authentication, observability, cloud deployment, and enterprise AI integrations.",
    },
    {
        question: "Which vector databases have you worked with?",
        answer:
            "Pinecone, ChromaDB, FAISS, Qdrant, Redis Vector Search, and Neo4j vector indexes.",
    },
    {
        question: "Are you open to AI Backend Engineer roles?",
        answer:
            "Yes. I'm actively looking for AI Backend Engineer, GenAI Engineer, and LLM Platform Engineer opportunities.",
    },
];

/* ---------------------------------- */
/* Footer */
/* ---------------------------------- */

export const FOOTER_TEXT = {
    copyright: `© ${new Date().getFullYear()} Rakesh Kumar.`,
    tagline: "Designed & Built with Next.js, TypeScript, Tailwind CSS, Framer Motion & AI.",
};

/* ---------------------------------- */
/* SEO Keywords */
/* ---------------------------------- */

export const SEO_KEYWORDS = [
    "AI Backend Engineer",
    "Generative AI Engineer",
    "GraphRAG Developer",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Neo4j",
    "OpenAI GPT-5",
    "Vector Database",
    "RAG Pipeline",
    "AI Agents",
    "Python AI Backend",
    "LLM Engineer",
    "Next.js Portfolio",
];