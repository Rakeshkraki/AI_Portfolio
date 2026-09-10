import type { Project } from "@/types";

export const PROJECTS: Project[] = [
    {
        id: "enterprise-graphrag-platform",
        title: "Enterprise GraphRAG Platform",
        category: "GraphRAG",
        description:
            "Built a production-ready GraphRAG backend using Neo4j knowledge graphs, OpenAI embeddings, FastAPI, and hybrid retrieval for enterprise document intelligence.",
        technologies: [
            "Python",
            "FastAPI",
            "Neo4j",
            "OpenAI GPT-5",
            "LangChain",
            "Pinecone",
            "Docker",
        ],
        github: "https://github.com/rakeshK/graphrag-platform",
        live: "https://graphrag-demo.vercel.app",
        featured: true,
        image: "/projects/graphrag-platform.png",
    },

    {
        id: "ai-agent-workflow-engine",
        title: "AI Agent Workflow Engine",
        category: "AI Agents",
        description:
            "Created multi-agent orchestration using LangGraph with planning, retrieval, execution, and memory management for autonomous workflows.",
        technologies: [
            "LangGraph",
            "LangChain",
            "OpenAI GPT-5",
            "Redis",
            "FastAPI",
        ],
        github: "https://github.com/rakeshK/langgraph-agents",
        live: "https://agents-demo.vercel.app",
        featured: true,
        image: "/projects/ai-agent-engine.png",
    },

    {
        id: "llm-api-gateway",
        title: "Unified LLM API Gateway",
        category: "LLM APIs",
        description:
            "Developed a backend gateway that routes requests across OpenAI, Claude, Gemini, and local LLMs with authentication, retries, caching, and observability.",
        technologies: [
            "FastAPI",
            "OpenAI API",
            "Claude API",
            "Gemini API",
            "Redis",
            "JWT",
        ],
        github: "https://github.com/rakeshK/llm-gateway",
        live: "https://llm-gateway.vercel.app",
        featured: true,
        image: "/projects/llm-gateway.png",
    },

    {
        id: "semantic-search-service",
        title: "Semantic Search Service",
        category: "Backend APIs",
        description:
            "Implemented vector similarity search with embedding generation, metadata filtering, reranking, and streaming API responses.",
        technologies: [
            "FastAPI",
            "Qdrant",
            "OpenAI Embeddings",
            "Docker",
            "Python",
        ],
        github: "https://github.com/rakeshK/semantic-search",
        live: "https://semantic-search-demo.vercel.app",
        featured: false,
        image: "/projects/semantic-search.png",
    },

    {
        id: "rag-document-chat",
        title: "RAG Document Intelligence Chat",
        category: "GenAI",
        description:
            "Created a Retrieval-Augmented Generation application supporting PDF ingestion, chunking, embeddings, citation retrieval, and conversational search.",
        technologies: [
            "LangChain",
            "OpenAI GPT-5",
            "ChromaDB",
            "FastAPI",
            "Next.js",
        ],
        github: "https://github.com/rakeshK/rag-document-chat",
        live: "https://rag-chat-demo.vercel.app",
        featured: true,
        image: "/projects/rag-document-chat.png",
    },

    {
        id: "neo4j-knowledge-assistant",
        title: "Knowledge Graph AI Assistant",
        category: "GraphRAG",
        description:
            "Built an AI assistant powered by Neo4j graph traversal combined with vector retrieval and LLM reasoning over enterprise knowledge graphs.",
        technologies: [
            "Neo4j",
            "GraphRAG",
            "LangChain",
            "OpenAI GPT-5",
            "FastAPI",
        ],
        github: "https://github.com/rakeshK/knowledge-assistant",
        live: "https://knowledge-assistant.vercel.app",
        featured: true,
        image: "/projects/knowledge-assistant.png",
    },

    {
        id: "ai-email-classifier",
        title: "AI Email Classification API",
        category: "LLM APIs",
        description:
            "Designed an API that classifies incoming emails, extracts structured entities, summarizes conversations, and routes tickets using LLM function calling.",
        technologies: [
            "OpenAI GPT-5",
            "FastAPI",
            "Python",
            "PostgreSQL",
            "Docker",
        ],
        github: "https://github.com/rakeshK/email-ai-api",
        live: "https://email-ai-demo.vercel.app",
        featured: false,
        image: "/projects/email-classifier.png",
    },

    {
        id: "vector-index-manager",
        title: "Vector Index Management Service",
        category: "Backend APIs",
        description:
            "Backend service for creating, updating, deleting, and monitoring vector indexes across Pinecone, ChromaDB, and FAISS.",
        technologies: [
            "FastAPI",
            "Pinecone",
            "ChromaDB",
            "FAISS",
            "Redis",
        ],
        github: "https://github.com/rakeshK/vector-manager",
        live: "https://vector-manager.vercel.app",
        featured: false,
        image: "/projects/vector-manager.png",
    },

    {
        id: "prompt-management-platform",
        title: "Prompt Management Platform",
        category: "GenAI",
        description:
            "Centralized prompt versioning platform supporting templates, variables, evaluations, and A/B testing for LLM applications.",
        technologies: [
            "Next.js",
            "FastAPI",
            "PostgreSQL",
            "OpenAI GPT-5",
            "Prisma",
        ],
        github: "https://github.com/rakeshK/prompt-platform",
        live: "https://prompt-platform.vercel.app",
        featured: true,
        image: "/projects/prompt-platform.png",
    },

    {
        id: "dockerized-ai-backend",
        title: "Dockerized AI Backend Template",
        category: "Cloud AI",
        description:
            "Production-ready FastAPI backend template with Docker Compose, Redis, PostgreSQL, authentication, logging, health checks, and CI/CD pipeline.",
        technologies: [
            "Docker",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "GitHub Actions",
        ],
        github: "https://github.com/rakeshK/ai-backend-template",
        live: "https://ai-backend-template.vercel.app",
        featured: false,
        image: "/projects/docker-ai-backend.png",
    },

    {
        id: "llm-observability-dashboard",
        title: "LLM Observability Dashboard",
        category: "Cloud AI",
        description:
            "Monitoring dashboard for LLM latency, token usage, cost analytics, prompt traces, retries, and API health.",
        technologies: [
            "Next.js",
            "FastAPI",
            "OpenTelemetry",
            "Grafana",
            "Prometheus",
        ],
        github: "https://github.com/rakeshK/llm-observability",
        live: "https://llm-dashboard.vercel.app",
        featured: false,
        image: "/projects/llm-dashboard.png",
    },

    {
        id: "multimodal-ai-service",
        title: "Multimodal AI Processing Service",
        category: "GenAI",
        description:
            "Backend service that processes text, images, PDFs, and audio using multiple AI models with streaming responses and async task execution.",
        technologies: [
            "FastAPI",
            "OpenAI GPT-5",
            "Whisper",
            "Redis Queue",
            "Docker",
        ],
        github: "https://github.com/rakeshK/multimodal-ai-service",
        live: "https://multimodal-ai.vercel.app",
        featured: true,
        image: "/projects/multimodal-ai.png",
    },
];

/* ==========================================================
   Featured Projects
========================================================== */

export const FEATURED_PROJECTS = PROJECTS.filter(
    (project) => project.featured
);

/* ==========================================================
   Project Categories
========================================================== */

export const PROJECT_CATEGORY_LIST = [
    "All",
    ...new Set(PROJECTS.map((project) => project.category)),
];