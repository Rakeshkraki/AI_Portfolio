// ============================================================
// RAKESH K - AI PORTFOLIO CONSTANTS
// Single Source of Truth
// ============================================================

import {
    Brain,
    Network,
    Database,
    Cpu,
    Boxes,
    Cloud,
    GitBranch,
    Terminal,
    ShieldCheck,
    Activity,
    Rocket,
    Workflow,
    Code2,
    Search,
    BookOpen,
    Globe,
} from "lucide-react";

// ============================================================
// PROFILE
// ============================================================

export const PROFILE = {
    name: "Rakesh K",

    title: "Production AI Engineer",

    subtitle: "Building Intelligent Systems That Operate At Scale",

    location: "Bengaluru, Karnataka, India",

    email: "your-email@example.com", // Update Later

    github: "https://github.com/", // Update Later

    linkedin: "https://linkedin.com/in/", // Update Later

    resume: "/resume.pdf",

    status: "ONLINE",
};

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_ITEMS = [
    {
        id: "hero",
        label: "HOME",
    },
    {
        id: "system",
        label: "SYSTEM",
    },
    {
        id: "about",
        label: "ABOUT",
    },
    {
        id: "experience",
        label: "EXPERIENCE",
    },
    {
        id: "projects",
        label: "LAB",
    },
    {
        id: "skills",
        label: "STACK",
    },
    {
        id: "dashboard",
        label: "OBSERVABILITY",
    },
    {
        id: "contact",
        label: "CONTACT",
    },
];

// ============================================================
// SYSTEM STATUS (Hero HUD)
// ============================================================

export const SYSTEM_STATUS = [
    {
        label: "SYSTEM STATUS",
        value: "ONLINE",
    },
    {
        label: "LOCATION",
        value: "BENGALURU, INDIA",
    },
    {
        label: "SPECIALIZATION",
        value: "LLM SYSTEMS / RAG / AGENTS / INFERENCE",
    },
];

// ============================================================
// EXPERIENCE TIMELINE
// ============================================================

export const EXPERIENCE = [
    {
        year: "2023",
        company: "Fundamentals",
        role: "DevOps Engineer",
        location: "India",

        description:
            "Started engineering career working on DevOps, automation, deployment pipelines and cloud infrastructure.",

        technologies: [
            "Docker",
            "Linux",
            "Git",
            "Jenkins",
            "CI/CD",
            "AWS",
        ],
    },

    {
        year: "2024",
        company: "Spektra Systems",
        role: "Software Engineer (GenAI)",
        location: "India",

        description:
            "Worked on Generative AI applications, APIs, prompt engineering, retrieval pipelines and AI integrations.",

        technologies: [
            "Python",
            "FastAPI",
            "LangChain",
            "OpenAI",
            "Vector Search",
            "Azure AI",
        ],
    },

    {
        year: "2024 — Present",
        company: "Solize India Private Limited",
        role: "Production AI Engineer",
        location: "Bengaluru, India",

        description:
            "Designing production-grade LLM systems, GraphRAG pipelines, Multi-Agent AI architectures and scalable AI infrastructure.",

        technologies: [
            "GraphRAG",
            "LangGraph",
            "Neo4j",
            "Qdrant",
            "FastAPI",
            "vLLM",
            "QLoRA",
            "Docker",
            "Kubernetes",
            "Prometheus",
        ],

        highlights: [
            "Production Multi-Tenant RAG Platform",
            "GraphRAG with Neo4j + Qdrant",
            "Multi-Agent Automation",
            "LLM Fine-Tuning",
            "LLMOps Pipelines",
            "Inference Optimization",
        ],
    },
];

// ============================================================
// HERO METRICS
// Use only metrics from your portfolio specification.
// ============================================================

export const HERO_METRICS = [
    {
        value: "60%",
        label: "Inference Cost Reduction",
    },
    {
        value: "40%",
        label: "Query Accuracy Improvement",
    },
    {
        value: "70%",
        label: "Manual Analysis Time Reduction",
    },
    {
        value: "100K+",
        label: "Daily Queries Supported",
    },
];

// ============================================================
// AI SYSTEM MAP
// ============================================================

export const SYSTEM_NODES = [
    {
        id: "rag",
        title: "GRAPH RAG",
        icon: Search,
        description:
            "Hybrid retrieval combining vector search, BM25 and knowledge graph reasoning.",
        stack: ["Qdrant", "Neo4j", "BGE-M3", "BM25", "Cohere Rerank"],
    },

    {
        id: "agents",
        title: "MULTI AGENTS",
        icon: Workflow,
        description:
            "Collaborative AI agents orchestrated using LangGraph workflows.",
        stack: ["LangGraph", "LangChain", "OpenAI", "Tool Calling"],
    },

    {
        id: "llm",
        title: "LLM SYSTEMS",
        icon: Brain,
        description:
            "Production-grade Large Language Model applications and orchestration.",
        stack: ["Llama 3", "GPT", "Mistral", "OpenAI API", "Transformers"],
    },

    {
        id: "vector",
        title: "VECTOR DATABASE",
        icon: Database,
        description: "Embedding storage and semantic retrieval layer.",
        stack: ["Qdrant", "Embeddings", "Hybrid Search"],
    },

    {
        id: "graph",
        title: "KNOWLEDGE GRAPH",
        icon: Network,
        description:
            "Entity relationship reasoning using Neo4j GraphRAG architecture.",
        stack: ["Neo4j", "Cypher", "GraphRAG"],
    },

    {
        id: "inference",
        title: "INFERENCE ENGINE",
        icon: Cpu,
        description:
            "Optimized inference pipelines using quantization and batching.",
        stack: ["vLLM", "GPTQ", "PagedAttention", "TensorRT-LLM"],
    },

    {
        id: "evaluation",
        title: "EVALUATION",
        icon: ShieldCheck,
        description: "RAG quality evaluation and benchmark pipelines.",
        stack: ["NDCG", "Recall", "RAGAS", "Custom Metrics"],
    },

    {
        id: "observability",
        title: "OBSERVABILITY",
        icon: Activity,
        description: "Monitoring AI infrastructure health and latency.",
        stack: ["Prometheus", "Grafana", "Tracing", "Logs"],
    },
];

// ============================================================
// PROJECTS (LAB)
// ============================================================

export const PROJECTS = [
    {
        id: "rag-platform",

        index: "01",

        title: "Production Multi-Tenant RAG Platform",

        icon: Database,

        short:
            "Enterprise-grade GraphRAG platform supporting multiple organizations.",

        technologies: [
            "GraphRAG",
            "Qdrant",
            "Neo4j",
            "FastAPI",
            "LangGraph",
            "Docker",
        ],

        pipeline: [
            "User Query",
            "Hybrid Retrieval",
            "Vector Search",
            "Knowledge Graph",
            "Reranking",
            "LLM Response",
        ],

        metrics: [
            "1000+ Concurrent Users",
            "50+ Organizations",
            "90% Cache Hit Rate",
            "100K+ Queries / Month",
        ],
    },

    {
        id: "multi-agent",

        index: "02",

        title: "Autonomous Multi-Agent Code Review System",

        icon: Workflow,

        short:
            "Multiple AI agents collaborate for code review, testing and optimization.",

        technologies: [
            "LangGraph",
            "LangChain",
            "OpenAI",
            "GitHub API",
            "Python",
        ],

        pipeline: [
            "Pull Request",
            "Reviewer Agent",
            "Tester Agent",
            "Optimizer Agent",
            "Human Approval",
        ],

        metrics: [
            "80% Issues Detected",
            "95% Test Validity",
            "60% Review Time Reduction",
        ],
    },

    {
        id: "domain-llm",

        index: "03",

        title: "Domain Expert LLM with DPO Alignment",

        icon: Brain,

        short:
            "Fine-tuned domain-specific language model optimized using QLoRA and DPO.",

        technologies: [
            "QLoRA",
            "DPO",
            "Transformers",
            "PyTorch",
            "vLLM",
        ],

        pipeline: [
            "Dataset",
            "Synthetic Data",
            "QLoRA",
            "DPO",
            "Evaluation",
            "Production",
        ],

        metrics: [
            "10K+ Training Examples",
            "35% Benchmark Improvement",
            "2x Inference Speedup",
        ],
    },

    {
        id: "inference-platform",

        index: "04",

        title: "High Performance LLM Inference Platform",

        icon: Rocket,

        short:
            "Scalable inference infrastructure with batching, quantization and GPU optimization.",

        technologies: [
            "vLLM",
            "Llama 3",
            "TensorRT",
            "Docker",
            "Kubernetes",
        ],

        pipeline: [
            "Request Queue",
            "Continuous Batching",
            "PagedAttention",
            "GPU Execution",
            "Streaming Tokens",
        ],

        metrics: [
            "10–20x Throughput",
            "60% Cost Reduction",
            "99.9% Uptime",
            "<2s P95 Latency",
        ],
    },
];

// ============================================================
// TECH STACK CONSTELLATION
// ============================================================

export const SKILLS = {
    languages: [
        "Python",
        "Java",
        "TypeScript",
        "JavaScript",
        "SQL",
    ],

    llm: [
        "LangChain",
        "LangGraph",
        "LlamaIndex",
        "OpenAI",
        "Transformers",
        "vLLM",
        "HuggingFace",
    ],

    finetuning: [
        "QLoRA",
        "LoRA",
        "DPO",
        "PEFT",
        "PyTorch",
    ],

    retrieval: [
        "GraphRAG",
        "RAG",
        "Hybrid Search",
        "BM25",
        "BGE-M3",
        "Cohere Rerank",
    ],

    vectorGraph: [
        "Neo4j",
        "Qdrant",
        "FAISS",
        "Embeddings",
        "Cypher",
    ],

    mlops: [
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "MLflow",
    ],

    backend: [
        "FastAPI",
        "REST APIs",
        "WebSockets",
        "PostgreSQL",
        "Redis",
    ],

    devops: [
        "Linux",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "AWS",
    ],
};

// ============================================================
// COMMAND PALETTE
// ============================================================

export const COMMANDS = [
    {
        label: "Go to Hero",
        action: "hero",
    },
    {
        label: "Open AI System",
        action: "system",
    },
    {
        label: "View Experience",
        action: "experience",
    },
    {
        label: "Open Laboratory",
        action: "projects",
    },
    {
        label: "View AI Stack",
        action: "skills",
    },
    {
        label: "Observability Dashboard",
        action: "dashboard",
    },
    {
        label: "Download Resume",
        action: "resume",
    },
    {
        label: "Open GitHub",
        action: "github",
    },
    {
        label: "Open LinkedIn",
        action: "linkedin",
    },
];

// ============================================================
// CONTACT LINKS
// ============================================================

export const CONTACT_LINKS = [
    {
        label: "GitHub",
        icon: GitBranch,
        href: PROFILE.github,
    },

    {
        label: "LinkedIn",
        icon: Globe,
        href: PROFILE.linkedin,
    },

    {
        label: "Resume",
        icon: BookOpen,
        href: PROFILE.resume,
    },

    {
        label: "Email",
        icon: Terminal,
        href: `mailto:${PROFILE.email}`,
    },
];