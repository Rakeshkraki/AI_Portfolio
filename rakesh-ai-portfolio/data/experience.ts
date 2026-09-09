import type { ExperienceItem } from "@/types";

/* ==========================================================
   AI Backend Engineer Experience Timeline
========================================================== */

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: "ai-backend-engineer",

        company: "Enterprise AI Platform",

        role: "AI Backend Engineer",

        duration: "2025 — Present",

        location: "Bengaluru, India",

        description:
            "Designing scalable AI backend services, GraphRAG pipelines, multi-agent workflows, and production-ready LLM infrastructure for enterprise AI applications.",

        achievements: [
            "Built GraphRAG APIs using Neo4j knowledge graphs and OpenAI embeddings.",
            "Designed hybrid retrieval pipelines combining vector search and graph traversal.",
            "Developed FastAPI microservices for LLM orchestration and AI agents.",
            "Integrated OpenAI GPT-5, Gemini, and Claude APIs with structured outputs.",
            "Implemented authentication, rate limiting, caching, and observability for AI APIs.",
            "Containerized AI services using Docker and Kubernetes-ready deployment patterns.",
        ],

        technologies: [
            "Python",
            "FastAPI",
            "Neo4j",
            "LangChain",
            "LangGraph",
            "OpenAI GPT-5",
            "Redis",
            "Docker",
            "PostgreSQL",
        ],
    },

    {
        id: "genai-platform-developer",

        company: "Generative AI Solutions",

        role: "GenAI Platform Developer",

        duration: "2024 — 2025",

        location: "Remote / India",

        description:
            "Developed reusable backend infrastructure for Retrieval-Augmented Generation applications and AI-powered enterprise workflows.",

        achievements: [
            "Created reusable RAG pipelines with LangChain and vector databases.",
            "Implemented document ingestion, embedding generation, and retrieval APIs.",
            "Built prompt management APIs with template versioning and evaluation support.",
            "Designed streaming LLM APIs using FastAPI and async processing.",
            "Improved retrieval quality using hybrid search and reranking techniques.",
        ],

        technologies: [
            "FastAPI",
            "LangChain",
            "Pinecone",
            "ChromaDB",
            "FAISS",
            "OpenAI API",
            "Docker",
            "GitHub Actions",
        ],
    },

    {
        id: "ai-api-engineer",

        company: "AI Integration Platform",

        role: "AI API Engineer",

        duration: "2023 — 2024",

        location: "Bengaluru, India",

        description:
            "Built enterprise-ready AI APIs integrating multiple LLM providers with secure authentication, observability, and scalable backend architecture.",

        achievements: [
            "Unified OpenAI, Claude, and Gemini APIs behind a single backend gateway.",
            "Implemented JWT authentication and API key management.",
            "Added request retries, caching, and token usage monitoring.",
            "Developed observability dashboards for latency, cost, and prompt tracing.",
            "Created asynchronous task queues for long-running AI jobs.",
        ],

        technologies: [
            "FastAPI",
            "Python",
            "Redis",
            "PostgreSQL",
            "OpenAI GPT-5",
            "Claude API",
            "Gemini API",
            "Prometheus",
            "Grafana",
        ],
    },

    {
        id: "backend-ai-developer",

        company: "Cloud AI Applications",

        role: "Backend AI Developer",

        duration: "2022 — 2023",

        location: "Bengaluru, India",

        description:
            "Developed backend APIs and cloud-native services supporting AI-powered document processing and semantic search applications.",

        achievements: [
            "Built semantic search APIs using embedding models and vector indexes.",
            "Created REST APIs for AI-powered document classification and summarization.",
            "Implemented asynchronous processing for PDF ingestion pipelines.",
            "Designed PostgreSQL and Redis-backed backend architecture.",
            "Containerized backend services using Docker Compose.",
        ],

        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker",
            "OpenAI Embeddings",
            "REST APIs",
        ],
    },
];

/* ==========================================================
   Experience Metrics
========================================================== */

export const EXPERIENCE_METRICS = [
    {
        label: "Years Experience",
        value: "4+",
    },
    {
        label: "AI Backend APIs",
        value: "20+",
    },
    {
        label: "GraphRAG Projects",
        value: "6+",
    },
    {
        label: "LLM Integrations",
        value: "10+",
    },
];

/* ==========================================================
   Core Responsibilities
========================================================== */

export const CORE_RESPONSIBILITIES = [
    "AI Backend Architecture",
    "GraphRAG Development",
    "RAG Pipeline Engineering",
    "LLM API Integration",
    "AI Agent Orchestration",
    "Vector Database Management",
    "Knowledge Graph Modeling",
    "FastAPI Microservices",
    "Docker & Kubernetes Deployment",
    "Authentication & API Security",
    "Observability & Monitoring",
    "Performance Optimization",
];

/* ==========================================================
   Technology Timeline
========================================================== */

export const TECHNOLOGY_TIMELINE = [
    {
        year: "2022",
        technologies: [
            "Python",
            "FastAPI",
            "Docker",
            "PostgreSQL",
            "Redis",
        ],
    },
    {
        year: "2023",
        technologies: [
            "OpenAI API",
            "Vector Search",
            "Semantic Search",
            "JWT Authentication",
        ],
    },
    {
        year: "2024",
        technologies: [
            "LangChain",
            "Pinecone",
            "ChromaDB",
            "Streaming APIs",
            "Hybrid Search",
        ],
    },
    {
        year: "2025",
        technologies: [
            "GraphRAG",
            "Neo4j",
            "LangGraph",
            "GPT-5",
            "Claude API",
            "Gemini API",
            "AI Agents",
        ],
    },
];