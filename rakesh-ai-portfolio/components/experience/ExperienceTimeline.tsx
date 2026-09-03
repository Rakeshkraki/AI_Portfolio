"use client";

// ============================================================
// components/experience/ExperienceTimeline.tsx
// CRI Pumps + AI Engineering Timeline
// Part 1/4
// ============================================================

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
    Building2,
    Brain,
    Database,
    Cpu,
    ChevronDown,
    CheckCircle2,
    Code2,
    Network,
    Sparkles,
} from "lucide-react";

import {
    fadeUp,
    staggerContainer,
    heroItem,
} from "@/lib/motion";

const experiences = [
    {
        year: "2024",
        title: "AI Engineer",
        company: "Enterprise AI Infrastructure",
        icon: Brain,
        color: "#22D3EE",
        summary:
            "Designed and built production-ready Generative AI applications using GraphRAG, Knowledge Graphs, Vector Databases and LLM orchestration.",
        achievements: [
            "Built enterprise GraphRAG retrieval pipelines.",
            "Integrated Neo4j Knowledge Graph with vector retrieval.",
            "Implemented semantic search using Qdrant.",
            "Created streaming AI assistants with OpenAI APIs.",
            "Optimized retrieval latency using hybrid search."
        ],
        tech: [
            "GraphRAG",
            "Neo4j",
            "Qdrant",
            "OpenAI GPT",
            "FastAPI",
            "Python"
        ]
    },

    {
        year: "2025",
        title: "Multi-Agent AI Engineer",
        company: "AI Systems Development",
        icon: Network,
        color: "#8B5CF6",
        summary:
            "Developed autonomous AI workflows using LangGraph and MCP with specialized agents collaborating through structured execution graphs.",
        achievements: [
            "Designed planner, retriever and evaluator agents.",
            "Implemented tool-calling workflows.",
            "Built context-aware memory architecture.",
            "Created autonomous document analysis pipelines.",
            "Integrated MCP-compatible AI tools."
        ],
        tech: [
            "LangGraph",
            "CrewAI",
            "Model Context Protocol",
            "OpenAI",
            "Python",
            "Redis"
        ]
    },

    {
        year: "2025",
        title: "LLM Infrastructure Engineer",
        company: "AI Platform Engineering",
        icon: Cpu,
        color: "#6366F1",
        summary:
            "Built scalable inference infrastructure for enterprise AI applications with GPU acceleration and observability.",
        achievements: [
            "Designed vLLM deployment architecture.",
            "Built Dockerized inference services.",
            "Implemented streaming response APIs.",
            "Added tracing and evaluation pipelines.",
            "Optimized token throughput and latency."
        ],
        tech: [
            "vLLM",
            "Docker",
            "Kubernetes",
            "FastAPI",
            "LangSmith",
            "OpenTelemetry"
        ]
    },

    {
        year: "2026",
        title: "AI Platform Engineer",
        company: "Enterprise AI Products",
        icon: Database,
        color: "#10B981",
        summary:
            "Building production AI platforms combining GraphRAG, LLM orchestration, vector search, evaluation and enterprise knowledge systems.",
        achievements: [
            "Enterprise document intelligence platform.",
            "Knowledge-driven AI copilots.",
            "Hybrid Graph + Vector retrieval architecture.",
            "Evaluation framework for RAG quality.",
            "Production monitoring and AI observability."
        ],
        tech: [
            "GraphRAG",
            "Neo4j",
            "Qdrant",
            "LangGraph",
            "vLLM",
            "OpenTelemetry"
        ]
    }
];

function ExperienceCard({
                            experience,
                            expanded,
                            onToggle,
                        }: {
    experience: (typeof experiences)[number];
    expanded: boolean;
    onToggle: () => void;
}) {
    const Icon = experience.icon;

    return (
        <motion.div
            layout
            whileHover={{y: -4}}
            className="glass-card rounded-[30px] border border-cyan-400/10 overflow-hidden"
        >
            <button
                onClick={onToggle}
                className="w-full p-7 text-left"
            >
                <div className="flex items-start justify-between gap-5">
                    <div className="flex gap-5">
                        <div
                            className="flex h-14 w-14 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${experience.color}20`,
                                color: experience.color,
                            }}
                        >
                            <Icon size={26}/>
                        </div>

                        <div>
                            <p
                                className="mono text-xs tracking-[0.3em]"
                                style={{color: experience.color}}
                            >
                                {experience.year}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                {experience.title}
                            </h3>

                            <p className="mt-2 text-cyan-300">
                                {experience.company}
                            </p>

                            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                                {experience.summary}
                            </p>
                        </div>
                    </div>

                    <motion.div
                        animate={{rotate: expanded ? 180 : 0}}
                    >
                        <ChevronDown className="text-cyan-300"/>
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        layout
                        initial={{opacity: 0, height: 0}}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        className="border-t border-white/10 bg-black/20"
                    >
                        <div className="space-y-8 p-7">
                            {/* Achievements */}

                            <div>
                                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                                    KEY ACHIEVEMENTS
                                </p>

                                <div className="mt-5 space-y-4">
                                    {experience.achievements.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="mt-1 text-cyan-300"
                                            />

                                            <span className="text-slate-300">
                        {item}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}

                            <div>
                                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                                    TECHNOLOGY STACK
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    {experience.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ============================================================
// CRI Enterprise Projects
// ============================================================

const projects = [
    {
        id: "graphrag",
        title: "Enterprise GraphRAG Platform",
        icon: Brain,
        color: "#22D3EE",
        description:
            "Production GraphRAG platform combining Neo4j knowledge graphs with vector search for enterprise knowledge retrieval.",
        highlights: [
            "Hybrid Retrieval",
            "Knowledge Graph Traversal",
            "Semantic Search",
            "Context Reranking",
            "Streaming Responses"
        ],
        metrics: {
            latency: "128ms",
            context: "32K Tokens",
            recall: "98%"
        }
    },

    {
        id: "agents",
        title: "Multi-Agent AI Workflow Engine",
        icon: Network,
        color: "#8B5CF6",
        description:
            "Agent orchestration platform using LangGraph where planner, retriever, evaluator and tool agents collaborate autonomously.",
        highlights: [
            "Planner Agent",
            "Retriever Agent",
            "Evaluator Agent",
            "Tool Calling",
            "Memory Management"
        ],
        metrics: {
            agents: "6 Agents",
            workflow: "Dynamic DAG",
            tools: "12+ Tools"
        }
    },

    {
        id: "vector",
        title: "Enterprise Semantic Search Platform",
        icon: Database,
        color: "#10B981",
        description:
            "High-performance semantic search powered by Qdrant embeddings, hybrid retrieval and reranking pipelines.",
        highlights: [
            "Vector Search",
            "Embedding Pipelines",
            "Hybrid Search",
            "Metadata Filtering",
            "Reranking"
        ],
        metrics: {
            vectors: "1M+",
            queries: "<150ms",
            accuracy: "98%"
        }
    },

    {
        id: "inference",
        title: "GPU LLM Inference Platform",
        icon: Cpu,
        color: "#6366F1",
        description:
            "Scalable inference infrastructure using Docker, Kubernetes and vLLM for enterprise AI applications.",
        highlights: [
            "GPU Inference",
            "Streaming Tokens",
            "Autoscaling",
            "Observability",
            "OpenTelemetry"
        ],
        metrics: {
            throughput: "500 tok/s",
            gpu: "CUDA",
            scaling: "Auto"
        }
    }
];
// ============================================================
// Interactive Project Card
// ============================================================

function ProjectCard({
                         project,
                     }: {
    project: (typeof projects)[number];
}) {
    const Icon = project.icon;

    return (
        <motion.div
            whileHover={{y: -8, scale: 1.02}}
            className="glass-card rounded-[30px] border border-cyan-400/10 overflow-hidden"
        >
            {/* Header */}

            <div className="p-7">
                <div className="mb-5 flex items-center justify-between">
                    <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color,
                        }}
                    >
                        <Icon size={26}/>
                    </div>

                    <div
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                        }}
                    >
                        LIVE PROJECT
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                </p>

                {/* Highlights */}

                <div className="mt-6 flex flex-wrap gap-3">
                    {project.highlights.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300"
                        >
              {item}
            </span>
                    ))}
                </div>
            </div>

            {/* Metrics */}

            <div className="grid grid-cols-3 border-t border-white/10 bg-black/20">
                {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                        key={key}
                        className="border-r border-white/10 p-5 last:border-r-0"
                    >
                        <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            {key}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-cyan-300">
                            {value}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Architecture Preview (Code Window)
// ============================================================

const architecturePreview = `User Query
      │
      ▼
GraphRAG Retriever
      │
 ├── Neo4j Traversal
 ├── Vector Search (Qdrant)
 └── Hybrid Reranker
      │
      ▼
LangGraph Agent Planner
      │
      ▼
LLM Inference (GPT / vLLM)
      │
      ▼
Grounded Enterprise Response`;

function ArchitecturePreview() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card overflow-hidden rounded-[30px] border border-cyan-400/10"
        >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                    <Network size={18} className="text-cyan-300"/>

                    <span className="mono text-xs text-cyan-300">
            enterprise_ai_architecture.md
          </span>
                </div>

                <div className="status-pill">
                    <span className="status-dot"/>
                    GraphRAG
                </div>
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-cyan-300">
        <code>{architecturePreview}</code>
      </pre>
        </motion.div>
    );
}

// ============================================================
// Engineering Dashboard
// ============================================================

const engineeringStats = [
    ["Java Utilities", "60+"],
    ["Migration Programs", "25+"],
    ["CAD Objects Processed", "1M+"],
    ["Enterprise APIs", "50+"],
    ["GraphRAG Pipelines", "8+"],
    ["LLM Integrations", "12+"],
];

function EngineeringDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[30px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8 flex items-center gap-3">
                <Sparkles className="text-cyan-300"/>

                <div>
                    <p className="mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                        ENGINEERING DASHBOARD
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold text-white">
                        Project Impact
                    </h3>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {engineeringStats.map(([label, value]) => (
                    <motion.div
                        key={label}
                        whileHover={{y: -5}}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                        <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            {label}
                        </p>

                        <h4 className="mt-3 text-3xl font-semibold hero-gradient">
                            {value}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}


// ============================================================
// GraphRAG Pipeline Visualization
// ============================================================

const ragPipeline = [
    {
        title: "User Query",
        icon: Sparkles,
        color: "#38BDF8",
        description: "Natural language question enters the AI system.",
    },
    {
        title: "Embedding Model",
        icon: Brain,
        color: "#22D3EE",
        description: "Convert query into dense vector embeddings.",
    },
    {
        title: "Vector Search",
        icon: Database,
        color: "#10B981",
        description: "Retrieve semantically similar chunks from Qdrant.",
    },
    {
        title: "Knowledge Graph",
        icon: Network,
        color: "#F59E0B",
        description: "Traverse entity relationships inside Neo4j.",
    },
    {
        title: "LangGraph Agent",
        icon: Cpu,
        color: "#8B5CF6",
        description: "Planner agent combines retrieved context.",
    },
    {
        title: "LLM Response",
        icon: Brain,
        color: "#6366F1",
        description: "Grounded answer streamed to the user.",
    },
];

function GraphRAGPipeline() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    GRAPH RAG PIPELINE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Enterprise Retrieval-Augmented Generation
                </h3>
            </div>

            <div className="space-y-6">
                {ragPipeline.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <motion.div
                            key={step.title}
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.12}}
                            className="flex items-start gap-5"
                        >
                            <div
                                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                                style={{
                                    backgroundColor: `${step.color}20`,
                                    color: step.color,
                                }}
                            >
                                <Icon size={24}/>
                            </div>

                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white">
                                    {step.title}
                                </h4>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    {step.description}
                                </p>

                                {index !== ragPipeline.length - 1 && (
                                    <motion.div
                                        initial={{scaleY: 0}}
                                        whileInView={{scaleY: 1}}
                                        viewport={{once: true}}
                                        transition={{delay: index * 0.15}}
                                        className="ml-6 mt-4 h-10 w-px origin-top bg-gradient-to-b from-cyan-400 to-violet-500"
                                    />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}

// ============================================================
// Embedding Pipeline Viewer
// ============================================================

const embeddingFlow = `Raw Enterprise Documents
        │
        ▼
Chunk Documents (512 tokens)
        │
        ▼
Embedding Model
(text-embedding-3-large)
        │
        ▼
Dense Vector Generation
        │
        ▼
Qdrant Vector Database
        │
        ▼
Hybrid Retrieval + Metadata Filter`;

function EmbeddingPipelineViewer() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card overflow-hidden rounded-[32px] border border-cyan-400/10"
        >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                    <Database className="text-cyan-300" size={18}/>

                    <span className="mono text-xs text-cyan-300">
            embedding_pipeline.py
          </span>
                </div>

                <div className="status-pill">
                    <span className="status-dot"/>
                    VECTOR SEARCH
                </div>
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-cyan-300">
        <code>{embeddingFlow}</code>
      </pre>
        </motion.div>
    );
}

// ============================================================
// Multi-Agent Workflow
// ============================================================

const agents = [
    {
        title: "Planner Agent",
        color: "#8B5CF6",
        task: "Breaks complex user requests into execution steps.",
    },
    {
        title: "Retriever Agent",
        color: "#22D3EE",
        task: "Fetches relevant knowledge from Graph + Vector DB.",
    },
    {
        title: "Tool Agent",
        color: "#10B981",
        task: "Calls APIs, databases and enterprise tools.",
    },
    {
        title: "Evaluator Agent",
        color: "#F59E0B",
        task: "Validates grounded responses before returning output.",
    },
];

function MultiAgentWorkflow() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    MULTI-AGENT ORCHESTRATION
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    LangGraph Agent Collaboration
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {agents.map((agent, index) => (
                    <motion.div
                        key={agent.title}
                        whileHover={{y: -6}}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.15}}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-5 h-3 w-12 rounded-full"
                            style={{backgroundColor: agent.color}}
                        />

                        <h4 className="text-lg font-semibold text-white">
                            {agent.title}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            {agent.task}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Engineering Skills Matrix
// ============================================================

const aiSkills = [
    ["GraphRAG", 96],
    ["LangGraph", 92],
    ["OpenAI API", 95],
    ["Vector Databases", 94],
    ["Knowledge Graphs", 90],
    ["LLM Evaluation", 88],
    ["FastAPI", 93],
    ["Docker", 90],
    ["Kubernetes", 84],
    ["Python", 97],
];

function AISkillsMatrix() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI SKILLS MATRIX
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Production AI Engineering
                </h3>
            </div>

            <div className="space-y-5">
                {aiSkills.map(([skill, value], index) => (
                    <motion.div
                        key={skill}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.08}}
                    >
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-slate-300">{skill}</span>
                            <span className="text-cyan-300">{value}%</span>
                        </div>

                        <div className="h-2 rounded-full bg-white/10">
                            <motion.div
                                initial={{width: 0}}
                                whileInView={{width: `${value}%`}}
                                viewport={{once: true}}
                                transition={{duration: 0.8}}
                                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Achievement Dashboard
// ============================================================

const achievements = [
    {
        label: "AI Applications Built",
        value: "15+",
        color: "#22D3EE",
    },
    {
        label: "RAG Pipelines",
        value: "12+",
        color: "#8B5CF6",
    },
    {
        label: "LLM Integrations",
        value: "20+",
        color: "#10B981",
    },
    {
        label: "Production APIs",
        value: "30+",
        color: "#F59E0B",
    },
];

function AchievementDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI ENGINEERING IMPACT
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Building Production AI Systems
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {achievements.map((item) => (
                    <motion.div
                        key={item.label}
                        whileHover={{ y: -6, scale: 1.03 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6 text-center"
                    >
                        <motion.h3
                            animate={{
                                textShadow: [
                                    `0 0 5px ${item.color}`,
                                    `0 0 20px ${item.color}`,
                                    `0 0 5px ${item.color}`,
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                            }}
                            className="text-4xl font-bold"
                            style={{ color: item.color }}
                        >
                            {item.value}
                        </motion.h3>

                        <p className="mt-3 text-sm text-slate-400">
                            {item.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Technology Cloud
// ============================================================

const techCloud = [
    "OpenAI GPT-5",
    "LangGraph",
    "Neo4j",
    "Qdrant",
    "Pinecone",
    "FastAPI",
    "Python",
    "Docker",
    "Kubernetes",
    "Redis",
    "vLLM",
    "LangSmith",
    "OpenTelemetry",
    "HuggingFace",
    "Llama 3",
    "Mistral",
    "Ollama",
    "PostgreSQL",
];

function TechnologyCloud() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI TECHNOLOGY CLOUD
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Technologies Used in Production AI
                </h3>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                {techCloud.map((tech, index) => (
                    <motion.div
                        key={tech}
                        whileHover={{
                            scale: 1.1,
                            y: -4,
                        }}
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3 + index * 0.15,
                        }}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur-xl"
                    >
                        {tech}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Evolution Timeline
// ============================================================

const evolution = [
    {
        year: "2024",
        title: "Retrieval-Augmented Generation",
        description:
            "Built semantic retrieval systems using embeddings and vector databases.",
    },
    {
        year: "2025",
        title: "GraphRAG Systems",
        description:
            "Combined Knowledge Graph traversal with Vector Search for grounded AI.",
    },
    {
        year: "2025",
        title: "Agentic AI",
        description:
            "Designed autonomous AI agents using LangGraph and MCP workflows.",
    },
    {
        year: "2026",
        title: "Production AI Infrastructure",
        description:
            "Focused on scalable LLM inference, observability, evaluation and deployment.",
    },
];

function EvolutionTimeline() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-10">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI EVOLUTION
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    My AI Engineering Journey
                </h3>
            </div>

            <div className="space-y-8">
                {evolution.map((step, index) => (
                    <motion.div
                        key={step.year + step.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex gap-6"
                    >
                        <div className="flex flex-col items-center">
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    delay: index * 0.25,
                                }}
                                className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22D3EE]"
                            />

                            {index !== evolution.length - 1 && (
                                <div className="mt-2 h-16 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                            )}
                        </div>

                        <div>
              <span className="mono text-xs tracking-[0.25em] text-cyan-300">
                {step.year}
              </span>

                            <h4 className="mt-2 text-xl font-semibold text-white">
                                {step.title}
                            </h4>

                            <p className="mt-3 leading-7 text-slate-400">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Career Banner
// ============================================================

function ExperienceCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[38px] border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-blue-500/10 p-10"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 50,
                    ease: "linear",
                }}
                className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 55,
                    ease: "linear",
                }}
                className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full border border-violet-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    NEXT GENERATION AI ENGINEERING
                </div>

                <h3 className="text-4xl font-semibold text-white">
                    Building Intelligent Systems That Retrieve, Reason and Act.
                </h3>

                <p className="mt-6 leading-8 text-slate-300">
                    My focus is designing production AI platforms powered by
                    GraphRAG, Multi-Agent AI, Vector Search, Knowledge Graphs,
                    LLM orchestration and scalable inference infrastructure.
                </p>

                <motion.a
                    whileHover={{ scale: 1.04 }}
                    href="#skills"
                    className="btn-primary mt-8 inline-flex items-center gap-3"
                >
                    Explore AI Skills
                    <Sparkles size={18} />
                </motion.a>
            </div>


        </motion.div>
    );
}

export default function ExperienceTimeline() {
    const [expanded, setExpanded] = useState("2026");

    return (
        <section
            id="experience"
            className="relative overflow-hidden py-32"
        >
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_55%)]"/>

            {/* =====================================================
      AI Architecture Section
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-28 grid gap-8 lg:grid-cols-[1fr_1fr]"
            >
                <motion.div variants={fadeUp}>
                    <GraphRAGPipeline/>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <EmbeddingPipelineViewer/>
                </motion.div>
            </motion.div>

            {/* =====================================================
      Multi-Agent Workflow
===================================================== */}

            <motion.div
                variants={staggerContainer(0.18)}
                className="mt-24"
            >
                <MultiAgentWorkflow/>
            </motion.div>

            {/* =====================================================
      AI Skills Matrix
===================================================== */}

            {/* =====================================================
      Achievement Dashboard
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-28"
            >
                <AchievementDashboard />
            </motion.div>

            {/* =====================================================
      Technology Cloud
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <TechnologyCloud />
            </motion.div>

            {/* =====================================================
      AI Evolution Timeline
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <EvolutionTimeline />
            </motion.div>

            {/* =====================================================
      CTA Banner
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-28"
            >
                <ExperienceCTA />
            </motion.div>

            <motion.div
                variants={staggerContainer(0.18)}
                className="mt-24"
            >
                <AISkillsMatrix/>
            </motion.div>
        </section>
    );
}