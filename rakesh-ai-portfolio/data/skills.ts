import type { SkillCategory, SkillItem } from "@/types";

/* ==========================================================
   Skill Categories
========================================================== */

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "LLMs & Generative AI",
        skills: [
            "OpenAI GPT-5",
            "GPT-4o",
            "Claude API",
            "Gemini API",
            "Prompt Engineering",
            "Function Calling",
            "Structured Outputs",
            "OpenAI Embeddings",
        ],
    },
    {
        title: "RAG & GraphRAG",
        skills: [
            "LangChain",
            "LangGraph",
            "LlamaIndex",
            "GraphRAG",
            "Hybrid Retrieval",
            "Knowledge Graphs",
            "Semantic Search",
            "Vector Search",
        ],
    },
    {
        title: "Backend Development",
        skills: [
            "Python",
            "FastAPI",
            "Java",
            "Spring Boot",
            "REST APIs",
            "JWT Authentication",
            "OAuth2",
            "Async Programming",
        ],
    },
    {
        title: "Databases & Storage",
        skills: [
            "Neo4j",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Pinecone",
            "ChromaDB",
            "Qdrant",
            "FAISS",
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            "Docker",
            "Kubernetes",
            "AWS",
            "Azure",
            "GitHub Actions",
            "CI/CD",
            "Linux",
        ],
    },
    {
        title: "Frontend & APIs",
        skills: [
            "Next.js",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "REST API Integration",
        ],
    },
];

/* ==========================================================
   Skill Proficiency (0–100)
========================================================== */

export const SKILLS: SkillItem[] = [
    // AI / LLM

    { name: "Python", level: 96, category: "Backend" },
    { name: "FastAPI", level: 95, category: "Backend" },
    { name: "OpenAI GPT-5", level: 94, category: "LLM" },
    { name: "LangChain", level: 92, category: "RAG" },
    { name: "GraphRAG", level: 91, category: "RAG" },
    { name: "Neo4j", level: 90, category: "Database" },
    { name: "LangGraph", level: 89, category: "AI Agents" },
    { name: "Prompt Engineering", level: 90, category: "LLM" },

    // Retrieval

    { name: "Vector Search", level: 89, category: "RAG" },
    { name: "Hybrid Search", level: 88, category: "RAG" },
    { name: "Knowledge Graphs", level: 87, category: "GraphRAG" },
    { name: "Embeddings", level: 90, category: "LLM" },

    // Backend

    { name: "Java", level: 87, category: "Backend" },
    { name: "Spring Boot", level: 82, category: "Backend" },
    { name: "REST APIs", level: 95, category: "Backend" },
    { name: "Authentication (JWT)", level: 88, category: "Backend" },

    // Databases

    { name: "PostgreSQL", level: 90, category: "Database" },
    { name: "MongoDB", level: 84, category: "Database" },
    { name: "Redis", level: 89, category: "Database" },
    { name: "Pinecone", level: 86, category: "Vector DB" },
    { name: "ChromaDB", level: 85, category: "Vector DB" },
    { name: "Qdrant", level: 82, category: "Vector DB" },
    { name: "FAISS", level: 84, category: "Vector DB" },

    // DevOps

    { name: "Docker", level: 90, category: "Cloud" },
    { name: "Kubernetes", level: 80, category: "Cloud" },
    { name: "GitHub Actions", level: 84, category: "DevOps" },
    { name: "AWS", level: 79, category: "Cloud" },
    { name: "Azure", level: 76, category: "Cloud" },

    // Frontend

    { name: "Next.js", level: 84, category: "Frontend" },
    { name: "React 19", level: 83, category: "Frontend" },
    { name: "TypeScript", level: 86, category: "Frontend" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
    { name: "Framer Motion", level: 80, category: "Frontend" },
];

/* ==========================================================
   Featured Skills
========================================================== */

export const FEATURED_SKILLS = [
    "OpenAI GPT-5",
    "GraphRAG",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Neo4j",
    "Python",
    "Docker",
];

/* ==========================================================
   Technology Cloud
========================================================== */

export const TECHNOLOGY_CLOUD = [
    "Python",
    "FastAPI",
    "OpenAI",
    "GPT-5",
    "LangChain",
    "LangGraph",
    "GraphRAG",
    "Neo4j",
    "Pinecone",
    "ChromaDB",
    "Qdrant",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "PostgreSQL",
    "MongoDB",
    "Next.js",
    "TypeScript",
];

/* ==========================================================
   AI Focus Areas
========================================================== */

export const AI_FOCUS_AREAS = [
    {
        title: "GraphRAG Systems",
        description:
            "Knowledge Graph powered Retrieval-Augmented Generation using Neo4j and vector search.",
    },
    {
        title: "LLM API Infrastructure",
        description:
            "Production-ready backend APIs integrating OpenAI, Gemini, Claude, and custom LLMs.",
    },
    {
        title: "AI Agent Orchestration",
        description:
            "Multi-agent workflows with LangGraph, tool calling, memory, and planning.",
    },
    {
        title: "Vector Database Engineering",
        description:
            "Semantic search pipelines using Pinecone, ChromaDB, Qdrant, and FAISS.",
    },
    {
        title: "Cloud-Native AI Backend",
        description:
            "Dockerized FastAPI microservices deployed with CI/CD and Kubernetes-ready architecture.",
    },
];

/* ==========================================================
   Learning Roadmap
========================================================== */

export const CURRENTLY_LEARNING = [
    "MCP (Model Context Protocol)",
    "OpenAI Agents SDK",
    "CrewAI",
    "Temporal AI Workflows",
    "RAG Evaluation Frameworks",
    "OpenTelemetry for AI Systems",
    "Kubernetes for AI Inference",
];