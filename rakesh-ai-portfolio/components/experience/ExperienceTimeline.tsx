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
import {Cloud} from "@react-three/drei";

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

// function ExperienceCTA() {
//     return (
//         <motion.div
//             variants={fadeUp}
//             className="relative overflow-hidden rounded-[38px] border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-blue-500/10 p-10"
//         >
//             <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 50,
//                     ease: "linear",
//                 }}
//                 className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-cyan-400/10"
//             />
//
//             <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{
//                     repeat: Infinity,
//                     duration: 55,
//                     ease: "linear",
//                 }}
//                 className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full border border-violet-400/10"
//             />
//
//             <div className="relative z-10 max-w-3xl">
//                 <div className="status-pill mb-5 w-fit">
//                     <span className="status-dot" />
//                     NEXT GENERATION AI ENGINEERING
//                 </div>
//
//                 <h3 className="text-4xl font-semibold text-white">
//                     Building Intelligent Systems That Retrieve, Reason and Act.
//                 </h3>
//
//                 <p className="mt-6 leading-8 text-slate-300">
//                     My focus is designing production AI platforms powered by
//                     GraphRAG, Multi-Agent AI, Vector Search, Knowledge Graphs,
//                     LLM orchestration and scalable inference infrastructure.
//                 </p>
//
//                 <motion.a
//                     whileHover={{ scale: 1.04 }}
//                     href="#skills"
//                     className="btn-primary mt-8 inline-flex items-center gap-3"
//                 >
//                     Explore AI Skills
//                     <Sparkles size={18} />
//                 </motion.a>
//             </div>
//
//
//         </motion.div>
//     );
// }

// ============================================================
// AI Engineering Responsibilities
// ============================================================

const responsibilities = [
    {
        title: "GraphRAG System Design",
        icon: Brain,
        color: "#22D3EE",
        items: [
            "Knowledge Graph architecture",
            "Hybrid vector + graph retrieval",
            "Context expansion strategies",
            "Grounded LLM responses",
        ],
    },
    {
        title: "LLM Backend APIs",
        icon: Cpu,
        color: "#8B5CF6",
        items: [
            "FastAPI AI services",
            "Streaming responses",
            "Authentication & rate limiting",
            "Async inference APIs",
        ],
    },
    {
        title: "Multi-Agent AI",
        icon: Network,
        color: "#10B981",
        items: [
            "Planner Agent",
            "Retriever Agent",
            "Tool Calling",
            "Evaluator Agent",
        ],
    },
    {
        title: "AI Infrastructure",
        icon: Cloud,
        color: "#F59E0B",
        items: [
            "Docker deployment",
            "Kubernetes orchestration",
            "Redis caching",
            "Observability pipelines",
        ],
    },
];

function ResponsibilitiesGrid() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
        >
            {responsibilities.map((section) => {
                const Icon = section.icon;

                return (
                    <motion.div
                        key={section.title}
                        whileHover={{ y: -6 }}
                        className="glass-card rounded-[30px] border border-cyan-400/10 p-6"
                    >
                        <div
                            className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${section.color}20`,
                                color: section.color,
                            }}
                        >
                            <Icon size={24} />
                        </div>

                        <h3 className="text-xl font-semibold text-white">
                            {section.title}
                        </h3>

                        <div className="mt-5 space-y-3">
                            {section.items.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2
                                        size={16}
                                        color={section.color}
                                    />

                                    <span className="text-slate-300 text-sm">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

// ============================================================
// AI Tech Stack Matrix
// ============================================================

const techMatrix = [
    {
        domain: "Foundation Models",
        color: "#22D3EE",
        tech: ["GPT-5", "Llama 3", "Mistral", "Embeddings"],
    },
    {
        domain: "Retrieval AI",
        color: "#10B981",
        tech: ["Qdrant", "Neo4j", "Pinecone", "FAISS"],
    },
    {
        domain: "Agent Systems",
        color: "#8B5CF6",
        tech: ["LangGraph", "MCP", "Tool Calling", "Memory"],
    },
    {
        domain: "Backend AI",
        color: "#F59E0B",
        tech: ["FastAPI", "Python", "REST APIs", "AsyncIO"],
    },
    {
        domain: "Infrastructure",
        color: "#6366F1",
        tech: ["Docker", "Kubernetes", "Redis", "OpenTelemetry"],
    },
];

function TechStackMatrix() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI TECH STACK
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Technologies Used Across AI Domains
                </h3>
            </div>

            <div className="space-y-6">
                {techMatrix.map((row) => (
                    <div key={row.domain}>
                        <div className="mb-3 flex items-center justify-between">
                            <h4
                                className="font-semibold"
                                style={{ color: row.color }}
                            >
                                {row.domain}
                            </h4>

                            <span className="text-xs text-slate-500">
                {row.tech.length} Technologies
              </span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {row.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Engineering Metrics
// ============================================================

const aiMetrics = [
    {
        label: "GraphRAG Systems",
        value: "6+",
        color: "#22D3EE",
    },
    {
        label: "LLM APIs Designed",
        value: "20+",
        color: "#8B5CF6",
    },
    {
        label: "Vector Pipelines",
        value: "15+",
        color: "#10B981",
    },
    {
        label: "Multi-Agent Workflows",
        value: "10+",
        color: "#F59E0B",
    },
    {
        label: "Enterprise AI Services",
        value: "12+",
        color: "#EC4899",
    },
    {
        label: "Infrastructure Deployments",
        value: "8+",
        color: "#6366F1",
    },
];

function EngineeringMetrics() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
            {aiMetrics.map((metric) => (
                <motion.div
                    key={metric.label}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6"
                >
                    <div
                        className="mb-4 h-2 rounded-full"
                        style={{ backgroundColor: metric.color }}
                    />

                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                        {metric.label}
                    </p>

                    <h3
                        className="mt-4 text-4xl font-bold"
                        style={{ color: metric.color }}
                    >
                        {metric.value}
                    </h3>
                </motion.div>
            ))}
        </motion.div>
    );
}

// ============================================================
// What I Build
// ============================================================

const buildCards = [
    {
        title: "Enterprise AI Copilots",
        desc: "Grounded assistants powered by GraphRAG and enterprise knowledge.",
        color: "#22D3EE",
    },
    {
        title: "GraphRAG Platforms",
        desc: "Knowledge Graph + Vector Retrieval architectures for reasoning.",
        color: "#8B5CF6",
    },
    {
        title: "Semantic Search Engines",
        desc: "Embedding-based search with hybrid retrieval and reranking.",
        color: "#10B981",
    },
    {
        title: "Multi-Agent AI Systems",
        desc: "LangGraph planners, retrievers, tools and evaluators.",
        color: "#F59E0B",
    },
];

function WhatIBuild() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    WHAT I BUILD
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Platforms I Engineer
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {buildCards.map((card) => (
                    <motion.div
                        key={card.title}
                        whileHover={{ y: -6 }}
                        className="rounded-[26px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 h-3 w-16 rounded-full"
                            style={{ backgroundColor: card.color }}
                        />

                        <h4 className="text-xl font-semibold text-white">
                            {card.title}
                        </h4>

                        <p className="mt-3 text-slate-400 leading-7">
                            {card.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Architecture Ownership
// ============================================================

const ownershipAreas = [
    {
        title: "GraphRAG Architecture",
        description:
            "Designed enterprise retrieval systems combining Knowledge Graphs and Vector Databases.",
        color: "#22D3EE",
    },
    {
        title: "AI Backend APIs",
        description:
            "Designed scalable FastAPI services for streaming LLM responses and AI orchestration.",
        color: "#8B5CF6",
    },
    {
        title: "Agentic AI Systems",
        description:
            "Implemented LangGraph-based planner, retriever, evaluator and tool agents.",
        color: "#10B981",
    },
    {
        title: "AI Infrastructure",
        description:
            "Built Docker, Kubernetes and Redis powered AI deployment environments.",
        color: "#F59E0B",
    },
];

function ArchitectureOwnership() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    ARCHITECTURE OWNERSHIP
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Systems I Design End-to-End
                </h3>
            </div>

            <div className="space-y-6">
                {ownershipAreas.map((area, index) => (
                    <motion.div
                        key={area.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-[26px] border border-white/10 bg-black/20 p-6"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className="h-4 w-4 rounded-full"
                                style={{
                                    backgroundColor: area.color,
                                    boxShadow: `0 0 12px ${area.color}`,
                                }}
                            />

                            <h4
                                className="text-xl font-semibold"
                                style={{ color: area.color }}
                            >
                                {area.title}
                            </h4>
                        </div>

                        <p className="mt-4 leading-7 text-slate-400">
                            {area.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Workflow Visualization
// ============================================================

const workflowStages = [
    "User Query",
    "Planner Agent",
    "Retriever",
    "Knowledge Graph",
    "Vector Search",
    "LLM Inference",
    "Streaming Response",
];

function AIWorkflowVisualization() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    DAILY AI WORKFLOW
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Production AI Request Lifecycle
                </h3>
            </div>

            <div className="space-y-5">
                {workflowStages.map((stage, index) => (
                    <div key={stage}>
                        <motion.div
                            whileHover={{ x: 6 }}
                            className="flex items-center gap-5 rounded-[22px] border border-white/10 bg-black/20 p-5"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    delay: index * 0.15,
                                }}
                                className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22D3EE]"
                            />

                            <span className="text-white font-medium">{stage}</span>

                            {/* <ArrowUpRight className="ml-auto text-cyan-300" size={18} />*/}
                        </motion.div>

                        {index !== workflowStages.length - 1 && (
                            <div className="ml-7 h-6 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Achievement Counters
// ============================================================

const achievementscount = [
    {
        value: "30+",
        label: "LLM APIs Built",
        color: "#22D3EE",
    },
    {
        value: "12+",
        label: "AI Platforms Engineered",
        color: "#8B5CF6",
    },
    {
        value: "10M+",
        label: "Tokens Processed",
        color: "#10B981",
    },
    {
        value: "250K+",
        label: "Knowledge Graph Nodes",
        color: "#F59E0B",
    },
    {
        value: "1M+",
        label: "Vector Embeddings",
        color: "#EC4899",
    },
    {
        value: "98%",
        label: "Retrieval Recall",
        color: "#6366F1",
    },
];

function AchievementCounters() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
            {achievementscount.map((item) => (
                <motion.div
                    key={item.label}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6 text-center"
                >
                    <motion.h3
                        animate={{
                            textShadow: [
                                `0 0 10px ${item.color}`,
                                `0 0 20px ${item.color}`,
                                `0 0 10px ${item.color}`,
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
        </motion.div>
    );
}

// ============================================================
// Production AI Pipeline
// ============================================================

const pipeline = [
    {
        title: "Embeddings",
        tech: "OpenAI",
        color: "#22D3EE",
    },
    {
        title: "Vector DB",
        tech: "Qdrant",
        color: "#10B981",
    },
    {
        title: "Knowledge Graph",
        tech: "Neo4j",
        color: "#8B5CF6",
    },
    {
        title: "Agent Runtime",
        tech: "LangGraph",
        color: "#EC4899",
    },
    {
        title: "Inference API",
        tech: "FastAPI",
        color: "#F59E0B",
    },
    {
        title: "Monitoring",
        tech: "LangSmith",
        color: "#6366F1",
    },
];

function ProductionPipeline() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    PRODUCTION AI PIPELINE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Platform Components
                </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {pipeline.map((step, index) => (
                    <motion.div
                        key={step.title}
                        whileHover={{ y: -6 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                    >
                        <div
                            className="mb-4 h-3 w-16 rounded-full"
                            style={{ backgroundColor: step.color }}
                        />

                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            {step.title}
                        </p>

                        <h4
                            className="mt-3 text-xl font-semibold"
                            style={{ color: step.color }}
                        >
                            {step.tech}
                        </h4>

                        <p className="mt-2 text-sm text-slate-500">
                            Production AI Layer #{index + 1}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Engineering Philosophy
// ============================================================

const principles = [
    "Build AI systems that are grounded, observable and scalable.",
    "Use GraphRAG for factual enterprise knowledge retrieval.",
    "Design AI APIs with streaming-first architecture.",
    "Create modular multi-agent systems instead of monolithic prompts.",
    "Deploy AI services with production-grade infrastructure.",
];

function EngineeringPhilosophy() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/10 p-10"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    ENGINEERING PHILOSOPHY
                </p>

                <h3 className="mt-3 text-4xl font-semibold hero-gradient">
                    Building AI That Works in Production
                </h3>
            </div>

            <div className="space-y-5">
                {principles.map((principle, index) => (
                    <motion.div
                        key={principle}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-start gap-4"
                    >
                        <Sparkles className="mt-1 text-cyan-300" size={18} />

                        <p className="text-slate-300 leading-7">
                            {principle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Architecture Ownership Diagram
// ============================================================

const architectureLayers = [
    {
        title: "Frontend Experience",
        tools: ["Next.js", "React", "Tailwind CSS"],
        color: "#22D3EE",
    },
    {
        title: "AI Backend APIs",
        tools: ["FastAPI", "Python", "Streaming APIs"],
        color: "#8B5CF6",
    },
    {
        title: "Retrieval Layer",
        tools: ["Neo4j", "Qdrant", "Embeddings"],
        color: "#10B981",
    },
    {
        title: "Agent Runtime",
        tools: ["LangGraph", "Planner", "Retriever", "Evaluator"],
        color: "#F59E0B",
    },
    {
        title: "LLM Inference",
        tools: ["GPT-5", "vLLM", "OpenAI API"],
        color: "#EC4899",
    },
];

function ArchitectureOwnershipDiagram() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-10">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    SYSTEM OWNERSHIP
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Platform Architecture Layers
                </h3>
            </div>

            <div className="space-y-5">
                {architectureLayers.map((layer, index) => (
                    <div key={layer.title}>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="h-4 w-4 rounded-full"
                                    style={{
                                        backgroundColor: layer.color,
                                        boxShadow: `0 0 12px ${layer.color}`,
                                    }}
                                />

                                <h4
                                    className="font-semibold"
                                    style={{ color: layer.color }}
                                >
                                    {layer.title}
                                </h4>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {layer.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                                    >
                    {tool}
                  </span>
                                ))}
                            </div>
                        </motion.div>

                        {index !== architectureLayers.length - 1 && (
                            <div className="mx-auto my-3 h-6 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Collaboration Model
// ============================================================

const collaborators = [
    {
        title: "Product Teams",
        desc: "Convert business problems into AI product capabilities.",
        color: "#22D3EE",
    },
    {
        title: "Data Engineers",
        desc: "Design ingestion pipelines and structured enterprise knowledge.",
        color: "#10B981",
    },
    {
        title: "ML Engineers",
        desc: "Integrate embeddings, reranking and evaluation pipelines.",
        color: "#8B5CF6",
    },
    {
        title: "Platform Engineers",
        desc: "Deploy scalable AI infrastructure and monitoring.",
        color: "#F59E0B",
    },
];

function CollaborationModel() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    CROSS-FUNCTIONAL COLLABORATION
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Working Across AI Teams
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {collaborators.map((team) => (
                    <motion.div
                        key={team.title}
                        whileHover={{ y: -5 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 h-3 w-16 rounded-full"
                            style={{ backgroundColor: team.color }}
                        />

                        <h4
                            className="text-xl font-semibold"
                            style={{ color: team.color }}
                        >
                            {team.title}
                        </h4>

                        <p className="mt-3 text-slate-400 leading-7">
                            {team.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Delivery Lifecycle
// ============================================================

const lifecycle = [
    {
        stage: "Discovery",
        desc: "Understand enterprise AI use case and knowledge sources.",
        color: "#22D3EE",
    },
    {
        stage: "Architecture",
        desc: "Design GraphRAG, retrieval strategy and agent workflows.",
        color: "#8B5CF6",
    },
    {
        stage: "Development",
        desc: "Build FastAPI services, LangGraph agents and vector pipelines.",
        color: "#10B981",
    },
    {
        stage: "Deployment",
        desc: "Containerize AI services and deploy with Kubernetes.",
        color: "#F59E0B",
    },
    {
        stage: "Observability",
        desc: "Trace prompts, retrieval quality and inference latency.",
        color: "#EC4899",
    },
];

function DeliveryLifecycle() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    DELIVERY LIFECYCLE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    From Idea to Production AI
                </h3>
            </div>

            <div className="space-y-6">
                {lifecycle.map((item, index) => (
                    <div key={item.stage}>
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex gap-5 rounded-[22px] border border-white/10 bg-black/20 p-5"
                        >
                            <div
                                className="mt-1 h-4 w-4 rounded-full"
                                style={{
                                    backgroundColor: item.color,
                                    boxShadow: `0 0 10px ${item.color}`,
                                }}
                            />

                            <div>
                                <h4
                                    className="font-semibold"
                                    style={{ color: item.color }}
                                >
                                    {item.stage}
                                </h4>

                                <p className="mt-2 text-slate-400 leading-7">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>

                        {index !== lifecycle.length - 1 && (
                            <div className="ml-[10px] h-5 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Learning Roadmap
// ============================================================

const roadmap = [
    "Advanced GraphRAG Architectures",
    "LLM Fine-tuning & LoRA",
    "Model Context Protocol (MCP)",
    "AI Evaluation & Guardrails",
    "Agentic Memory Systems",
    "Distributed AI Infrastructure",
    "OpenTelemetry for AI",
    "Multi-modal AI Applications",
];

function LearningRoadmap() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    CONTINUOUS LEARNING
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Engineering Roadmap
                </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {roadmap.map((topic, index) => (
                    <motion.div
                        key={topic}
                        whileHover={{ x: 6 }}
                        className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-black/20 p-4"
                    >
                        <Sparkles className="text-cyan-300" size={18} />

                        <span className="text-slate-300">{topic}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Experience CTA Banner
// ============================================================

function ExperienceCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[42px] border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-indigo-500/10 p-10"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear",
                }}
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    NEXT SECTION
                </div>

                <h3 className="hero-gradient text-4xl font-bold">
                    Education & AI Learning Journey
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    Academic foundation, AI certifications, hands-on learning roadmap,
                    hackathons and continuous AI engineering growth.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#education"
                    className="btn-primary mt-8 inline-flex items-center gap-3"
                >
                    Explore Education
                    {/*<ArrowUpRight size={18} />*/}
                </motion.a>
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Impact Stories
// ============================================================

const impactStories = [
    {
        title: "Enterprise GraphRAG Platform",
        impact: "Built hybrid retrieval architecture combining vector search and knowledge graphs.",
        result: "98% retrieval recall • scalable enterprise search",
        color: "#22D3EE",
    },
    {
        title: "AI Copilot Backend",
        impact: "Designed streaming FastAPI services for enterprise AI assistants.",
        result: "Low-latency token streaming with async APIs",
        color: "#8B5CF6",
    },
    {
        title: "Agentic AI Workflows",
        impact: "Implemented planner, retriever and evaluator agents with LangGraph.",
        result: "Autonomous multi-agent orchestration",
        color: "#10B981",
    },
];

function AIImpactStories() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI IMPACT STORIES
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Real AI Engineering Outcomes
                </h3>
            </div>

            <div className="space-y-6">
                {impactStories.map((story) => (
                    <motion.div
                        key={story.title}
                        whileHover={{ y: -4 }}
                        className="rounded-[28px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 h-2 w-20 rounded-full"
                            style={{ backgroundColor: story.color }}
                        />

                        <h4
                            className="text-xl font-semibold"
                            style={{ color: story.color }}
                        >
                            {story.title}
                        </h4>

                        <p className="mt-3 text-slate-300 leading-7">
                            {story.impact}
                        </p>

                        <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3">
                            <p className="text-sm text-cyan-300 font-medium">
                                {story.result}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Production AI Metrics Dashboard
// ============================================================

const productionMetrics = [
    { label: "API Availability", value: "99.9%", color: "#22D3EE" },
    { label: "Average Latency", value: "120ms", color: "#10B981" },
    { label: "Streaming Throughput", value: "500 tok/s", color: "#8B5CF6" },
    { label: "Knowledge Retrieval", value: "250K Nodes", color: "#F59E0B" },
    { label: "Embedding Store", value: "1M+ Vectors", color: "#EC4899" },
    { label: "Agent Executions", value: "500K+", color: "#6366F1" },
];

function ProductionMetricsDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    PRODUCTION AI METRICS
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Platform Performance
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {productionMetrics.map((metric) => (
                    <motion.div
                        key={metric.label}
                        whileHover={{ y: -5 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 h-2 rounded-full"
                            style={{ backgroundColor: metric.color }}
                        />

                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                            {metric.label}
                        </p>

                        <h4
                            className="mt-4 text-3xl font-bold"
                            style={{ color: metric.color }}
                        >
                            {metric.value}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Certifications Ribbon
// ============================================================

const certifications = [
    "OpenAI API Development",
    "LangGraph Agent Engineering",
    "GraphRAG Architecture",
    "FastAPI Backend Development",
    "Docker & Kubernetes for AI",
    "Vector Database Engineering",
    "Prompt Engineering",
    "OpenTelemetry AI Observability",
];

function CertificationRibbon() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8 overflow-hidden"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI CERTIFICATIONS & LEARNING
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Continuous AI Skill Development
                </h3>
            </div>

            <div className="flex flex-wrap gap-4">
                {certifications.map((cert) => (
                    <motion.div
                        key={cert}
                        whileHover={{
                            scale: 1.05,
                            rotate: -1,
                        }}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm text-cyan-300"
                    >
                        <Sparkles size={14} className="mr-2 inline" />
                        {cert}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Resume CTA
// ============================================================

function ResumeCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[44px] border border-cyan-400/15 bg-gradient-to-r from-[#07131E] via-[#0B1020] to-[#18122B] p-10"
        >
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 80,
                    ease: "linear",
                }}
                className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    AI BACKEND ENGINEER
                </div>

                <h3 className="hero-gradient text-4xl font-bold">
                    Building AI Infrastructure for Enterprise Applications
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    GraphRAG • Multi-Agent Systems • FastAPI • LangGraph • Neo4j • Qdrant • AI Infrastructure
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="/resume.pdf"
                        download
                        className="btn-primary inline-flex items-center gap-3"
                    >
                        Download Resume
                        {/*<ArrowUpRight size={18} />*/}
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#education"
                        className="rounded-full border border-white/10 px-6 py-3 text-white"
                    >
                        Continue to Education
                    </motion.a>
                </div>
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

            {/* =====================================================
      AI Responsibilities
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-28"
            >
                <ResponsibilitiesGrid />
            </motion.div>

            {/* =====================================================
      AI Tech Stack Matrix
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <TechStackMatrix />
            </motion.div>

            {/* =====================================================
      Engineering Metrics
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <EngineeringMetrics />
            </motion.div>

            {/* =====================================================
      What I Build
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <WhatIBuild />
            </motion.div>

            {/* =====================================================
      Architecture Ownership
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-28"
            >
                <ArchitectureOwnership />
            </motion.div>

            {/* =====================================================
      Production AI Workflow
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <AIWorkflowVisualization />
            </motion.div>

            {/* =====================================================
      Achievement Counters
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <AchievementCounters />
            </motion.div>

            {/* =====================================================
      Production Pipeline
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <ProductionPipeline />
            </motion.div>

            {/* =====================================================
      Engineering Philosophy
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <EngineeringPhilosophy />
            </motion.div>
            {/* =====================================================
      Architecture Ownership Diagram
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-28"
            >
                <ArchitectureOwnershipDiagram />
            </motion.div>

            {/* =====================================================
      Collaboration Model
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <CollaborationModel />
            </motion.div>

            {/* =====================================================
      AI Delivery Lifecycle
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <DeliveryLifecycle />
            </motion.div>

            {/* =====================================================
      Learning Roadmap
===================================================== */}

            <motion.div
                variants={staggerContainer(0.15)}
                className="mt-24"
            >
                <LearningRoadmap />
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


        </section>
    );
}