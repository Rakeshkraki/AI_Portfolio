"use client";

// ============================================================
// components/projects/ProjectsShowcase.tsx
// Premium AI Projects Showcase
// Part 1/6
// ============================================================

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    Brain,
    Database,
    Cpu,
    Network,
    Search,
    Sparkles,
    //Github,
    ArrowUpRight,
    ChevronRight,
    Layers3,
    Boxes,
} from "lucide-react";


import {
    fadeUp,
    heroItem,
    staggerContainer,
} from "@/lib/motion";

// ============================================================
// Project Type
// ============================================================

type AIProject = {
    id: string;
    category: string;
    title: string;
    tagline: string;
    description: string;
    icon: any;
    color: string;
    metrics: {
        label: string;
        value: string;
    }[];

    technologies: string[];

    features: string[];

    github?: string;
    demo?: string;
};

// ============================================================
// Featured AI Projects
// ============================================================

const projects: AIProject[] = [
    {
        id: "graphrag",
        category: "Knowledge AI",
        title: "Enterprise GraphRAG Platform",
        tagline: "Graph + Vector Retrieval for Enterprise Knowledge",
        description:
            "Production-ready GraphRAG platform combining Neo4j Knowledge Graphs with Qdrant Vector Search and LLM reasoning.",
        icon: Brain,
        color: "#22D3EE",
        metrics: [
            { label: "Latency", value: "128ms" },
            { label: "Recall", value: "98%" },
            { label: "Context", value: "32K Tokens" },
        ],
        technologies: [
            "OpenAI GPT-5",
            "Neo4j",
            "Qdrant",
            "LangGraph",
            "FastAPI",
            "Python",
        ],
        features: [
            "Hybrid Graph + Vector Retrieval",
            "Semantic Search",
            "Entity Expansion",
            "Streaming Responses",
            "Knowledge Graph Traversal",
        ],
    },

    {
        id: "agents",
        category: "Agentic AI",
        title: "Multi-Agent AI Workflow Engine",
        tagline: "Autonomous AI Agents with LangGraph",
        description:
            "Planner, Retriever, Tool and Evaluator agents collaborating through dynamic execution graphs.",
        icon: Network,
        color: "#8B5CF6",
        metrics: [
            { label: "Agents", value: "6" },
            { label: "Tools", value: "12+" },
            { label: "Latency", value: "220ms" },
        ],
        technologies: [
            "LangGraph",
            "OpenAI",
            "Redis",
            "FastAPI",
            "MCP",
            "Python",
        ],
        features: [
            "Planner Agent",
            "Retriever Agent",
            "Evaluator Agent",
            "Memory System",
            "Tool Calling",
        ],
    },

    {
        id: "search",
        category: "Vector Search",
        title: "Enterprise Semantic Search",
        tagline: "Fast AI Search Across Millions of Documents",
        description:
            "Embedding pipelines with Qdrant, metadata filtering, reranking and hybrid semantic retrieval.",
        icon: Search,
        color: "#10B981",
        metrics: [
            { label: "Vectors", value: "1M+" },
            { label: "Speed", value: "<150ms" },
            { label: "Accuracy", value: "98%" },
        ],
        technologies: [
            "Qdrant",
            "Embeddings",
            "FastAPI",
            "Python",
            "OpenAI",
        ],
        features: [
            "Hybrid Search",
            "Metadata Filters",
            "Embeddings",
            "Reranking",
            "Semantic Similarity",
        ],
    },

    {
        id: "copilot",
        category: "Enterprise AI",
        title: "Enterprise AI Copilot",
        tagline: "Knowledge Assistant for Internal Teams",
        description:
            "Enterprise assistant capable of answering policy, engineering and documentation questions using RAG.",
        icon: Sparkles,
        color: "#EC4899",
        metrics: [
            { label: "Sources", value: "1000+" },
            { label: "Streaming", value: "Yes" },
            { label: "Grounded", value: "100%" },
        ],
        technologies: [
            "GPT-5",
            "FastAPI",
            "Qdrant",
            "Neo4j",
            "LangGraph",
        ],
        features: [
            "Grounded Responses",
            "Conversation Memory",
            "Source Citations",
            "Streaming Tokens",
            "Knowledge Search",
        ],
    },

    {
        id: "inference",
        category: "AI Infrastructure",
        title: "GPU LLM Inference Platform",
        tagline: "Scalable LLM Serving Infrastructure",
        description:
            "Dockerized inference services powered by vLLM, Kubernetes autoscaling and observability.",
        icon: Cpu,
        color: "#6366F1",
        metrics: [
            { label: "Throughput", value: "500 tok/s" },
            { label: "GPU", value: "CUDA" },
            { label: "Scaling", value: "Auto" },
        ],
        technologies: [
            "vLLM",
            "Docker",
            "Kubernetes",
            "Redis",
            "OpenTelemetry",
        ],
        features: [
            "Streaming Generation",
            "Autoscaling",
            "Tracing",
            "GPU Scheduling",
            "Health Monitoring",
        ],
    },

    {
        id: "mcp",
        category: "AI Tooling",
        title: "MCP Tool Ecosystem",
        tagline: "Model Context Protocol Tool Runtime",
        description:
            "A modular MCP ecosystem enabling AI agents to securely interact with enterprise APIs and tools.",
        icon: Boxes,
        color: "#F59E0B",
        metrics: [
            { label: "Tools", value: "20+" },
            { label: "Protocols", value: "MCP" },
            { label: "Security", value: "Scoped" },
        ],
        technologies: [
            "MCP",
            "LangGraph",
            "Python",
            "OpenAI",
            "REST APIs",
        ],
        features: [
            "Tool Discovery",
            "Permission Scopes",
            "API Execution",
            "Memory Context",
            "Streaming Tool Calls",
        ],
    },
];

// ============================================================
// Categories
// ============================================================

const categories = [
    "All",
    "Knowledge AI",
    "Agentic AI",
    "Vector Search",
    "Enterprise AI",
    "AI Infrastructure",
    "AI Tooling",
];

// ============================================================
// Project Card
// ============================================================

function ProjectCard({
                         project,
                         onOpen,
                     }: {
    project: AIProject;
    onOpen: (project: AIProject) => void;
}) {
    const Icon = project.icon;

    return (
        <motion.div
            layout
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => onOpen(project)}
            className="glass-card group cursor-pointer overflow-hidden rounded-[34px] border border-cyan-400/10"
        >
            {/* Top */}



            <div className="p-8">
                <div className="mb-6 flex items-center justify-between">
                    <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                        }}
                    >
                        <Icon size={26} />
                    </div>

                    <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                            color: project.color,
                            backgroundColor: `${project.color}15`,
                        }}
                    >
            {project.category}
          </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                </h3>

                <p
                    className="mt-2 text-sm font-medium"
                    style={{ color: project.color }}
                >
                    {project.tagline}
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                    {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-7 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs text-cyan-300"
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>

            {/* Metrics */}

            <div className="grid grid-cols-3 border-y border-white/10 bg-black/20">
                {project.metrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="p-5 border-r border-white/10 last:border-r-0"
                    >
                        <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            {metric.label}
                        </p>

                        <p
                            className="mt-2 text-sm font-semibold"
                            style={{ color: project.color }}
                        >
                            {metric.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer */}

            <div className="flex items-center justify-between p-6">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
                >
                    {/*<Github size={16} />*/}
                    {/*GitHub*/}
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                    Live Preview
                    <ArrowUpRight size={16} />
                </motion.button>
            </div>
        </motion.div>
    );
}

// ============================================================
// Architecture Flow Labels
// ============================================================

const architectureSteps = [
    "User Query",
    "Embedding Layer",
    "Vector Database",
    "Knowledge Graph",
    "Retriever",
    "LLM",
    "Streaming Response",
];

// ============================================================
// Interactive Architecture Diagram
// ============================================================

function ArchitectureDiagram({
                                 color,
                             }: {
    color: string;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[30px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                SYSTEM ARCHITECTURE
            </p>

            <div className="mt-8 space-y-4">
                {architectureSteps.map((step, index) => (
                    <div key={step}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                            }}
                            className="flex items-center gap-4"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    delay: index * 0.2,
                                }}
                                className="h-4 w-4 rounded-full"
                                style={{
                                    backgroundColor: color,
                                    boxShadow: `0 0 12px ${color}`,
                                }}
                            />

                            <div
                                className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white"
                            >
                                {step}
                            </div>
                        </motion.div>

                        {index !== architectureSteps.length - 1 && (
                            <div
                                className="ml-[7px] h-8 w-px"
                                style={{
                                    background: `linear-gradient(${color}, transparent)`,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Terminal Preview
// ============================================================

const terminalCode = `> Initializing GraphRAG Runtime...

✓ Embedding user query
✓ Searching Vector Database
✓ Traversing Knowledge Graph
✓ Ranking retrieved context
✓ Planner Agent activated
✓ Calling GPT-5 with grounded context

Streaming response...`;

function TerminalPreview({
                             color,
                         }: {
    color: string;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[30px] border border-cyan-400/10 bg-[#020617]"
        >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="mono text-xs text-slate-500">
          terminal
        </span>
            </div>

            <pre className="overflow-x-auto p-6 text-sm leading-7">
        <code style={{ color }}>{terminalCode}</code>
      </pre>
        </motion.div>
    );
}

// ============================================================
// Project Feature Checklist
// ============================================================

function FeatureChecklist({
                              project,
                          }: {
    project: AIProject;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[30px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                KEY FEATURES
            </p>

            <div className="mt-6 space-y-4">
                {project.features.map((feature, index) => (
                    <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.08,
                        }}
                        className="flex items-center gap-3"
                    >
                        <div
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                                backgroundColor: project.color,
                            }}
                        />

                        <span className="text-slate-300">
              {feature}
            </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Expanded Project Showcase
// ============================================================

function ExpandedProject({
                             project,
                         }: {
    project: AIProject;
}) {
    const Icon = project.icon;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={project.id}
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 20,
                }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
            >
                {/* Header */}

                <div className="flex flex-wrap items-center justify-between gap-5">
                    <div className="flex items-center gap-5">
                        <div
                            className="flex h-16 w-16 items-center justify-center rounded-3xl"
                            style={{
                                backgroundColor: `${project.color}15`,
                                color: project.color,
                            }}
                        >
                            <Icon size={30} />
                        </div>

                        <div>
                            <p
                                className="mono text-xs tracking-[0.3em]"
                                style={{ color: project.color }}
                            >
                                {project.category}
                            </p>

                            <h3 className="mt-2 text-3xl font-semibold text-white">
                                {project.title}
                            </h3>

                            <p className="mt-2 text-slate-400">
                                {project.tagline}
                            </p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-cyan-300"
                    >
                        View Repository
                    </motion.button>
                </div>

                <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
                    {project.description}
                </p>

                {/* Metrics */}

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {project.metrics.map((metric) => (
                        <motion.div
                            key={metric.label}
                            whileHover={{ y: -5 }}
                            className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                        >
                            <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                {metric.label}
                            </p>

                            <h4
                                className="mt-3 text-3xl font-bold"
                                style={{ color: project.color }}
                            >
                                {metric.value}
                            </h4>
                        </motion.div>
                    ))}
                </div>

                {/* Architecture */}

                <div className="mt-12 grid gap-8 xl:grid-cols-[1fr_1fr]">
                    <ArchitectureDiagram color={project.color} />

                    <TerminalPreview color={project.color} />
                </div>
                {/* =====================================================
      Interactive AI Visualizations
===================================================== */}

                <div className="mt-12 grid gap-8 xl:grid-cols-2">
                    <GraphRAGVisualization />
                    <AgentWorkflowGraph />
                </div>

                <div className="mt-10 grid gap-8 xl:grid-cols-2">
                    <VectorSimilarityViewer />
                    <GPUInferenceDashboard />
                </div>

                <div className="mt-10">
                    <CopilotConversationPreview />
                </div>

                {/* =====================================================
      Project Gallery
===================================================== */}

                <div className="mt-14">
                    <ProjectPreviewGallery />
                </div>

                {/* =====================================================
      Performance Dashboard
===================================================== */}

                <div className="mt-14 grid gap-8 xl:grid-cols-[1fr_1fr]">
                    <PerformanceDashboard />
                    <DeploymentArchitecture />
                </div>

                {/* =====================================================
      Case Study + Impact
===================================================== */}

                <div className="mt-14 grid gap-8 xl:grid-cols-[1fr_1fr]">
                    <ProjectCaseStudy />
                    <ProjectImpactDashboard />
                </div>

                {/* =====================================================
      Interactive AI Demos
===================================================== */}

                <div className="mt-16 grid gap-8 xl:grid-cols-2">
                    <StreamingChatDemo />
                    <DocumentExplorer />
                </div>

                <div className="mt-10 grid gap-8 xl:grid-cols-2">
                    <VectorSearchPlayground />
                    <LangGraphExecutionMonitor />
                </div>

                <div className="mt-10">
                    <CodeEditorPreview />
                </div>


                {/* Features */}

                <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_1fr]">
                    <FeatureChecklist project={project} />

                    <motion.div
                        variants={fadeUp}
                        className="glass-card rounded-[30px] border border-cyan-400/10 p-6"
                    >
                        <p className="mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                            TECHNOLOGY STACK
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>


            </motion.div>
        </AnimatePresence>
    );
}
// ============================================================
// GraphRAG Interactive Visualization
// ============================================================

const graphNodes = [
    { label: "User", x: 50, y: 10, color: "#22D3EE" },
    { label: "Retriever", x: 25, y: 35, color: "#10B981" },
    { label: "Neo4j", x: 75, y: 35, color: "#8B5CF6" },
    { label: "Qdrant", x: 20, y: 65, color: "#F59E0B" },
    { label: "Planner", x: 50, y: 60, color: "#EC4899" },
    { label: "GPT-5", x: 80, y: 70, color: "#6366F1" },
    { label: "Answer", x: 50, y: 92, color: "#22D3EE" },
];

const graphEdges = [
    [0,1],[0,2],[1,3],[2,4],[3,4],[4,5],[5,6]
];

function GraphRAGVisualization() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 overflow-hidden"
        >
            <div className="p-6 border-b border-white/10">
                <p className="mono text-xs tracking-[0.3em] text-cyan-300/70">
                    GRAPH RAG EXECUTION FLOW
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                    Knowledge Graph + Vector Retrieval
                </h3>
            </div>

            <div className="relative aspect-[16/10] bg-[#05080F]">
                <svg className="absolute inset-0 w-full h-full">
                    {graphEdges.map(([a,b], index)=>{
                        const start = graphNodes[a];
                        const end = graphNodes[b];

                        return (
                            <motion.line
                                key={index}
                                initial={{ pathLength:0 }}
                                whileInView={{ pathLength:1 }}
                                viewport={{ once:true }}
                                transition={{
                                    delay:index*0.08,
                                    duration:0.8
                                }}
                                x1={`${start.x}%`}
                                y1={`${start.y}%`}
                                x2={`${end.x}%`}
                                y2={`${end.y}%`}
                                stroke="#22D3EE"
                                strokeOpacity="0.35"
                                strokeWidth="1.2"
                            />
                        );
                    })}
                </svg>

                {graphNodes.map((node,index)=>(
                    <motion.div
                        key={node.label}
                        animate={{
                            scale:[1,1.08,1]
                        }}
                        transition={{
                            repeat:Infinity,
                            duration:2.5,
                            delay:index*0.2
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left:`${node.x}%`,
                            top:`${node.y}%`
                        }}
                    >
                        <div
                            className="rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-xl border border-white/10"
                            style={{
                                color:node.color,
                                backgroundColor:"#05080FCC",
                                boxShadow:`0 0 16px ${node.color}44`
                            }}
                        >
                            {node.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// LangGraph Agent Workflow
// ============================================================

const workflowAgents = [
    {
        name:"Planner Agent",
        color:"#8B5CF6",
        desc:"Creates execution graph."
    },
    {
        name:"Retriever Agent",
        color:"#22D3EE",
        desc:"Fetches graph & vector context."
    },
    {
        name:"Tool Agent",
        color:"#10B981",
        desc:"Calls APIs and enterprise tools."
    },
    {
        name:"Evaluator Agent",
        color:"#F59E0B",
        desc:"Checks grounding quality."
    },
];

function AgentWorkflowGraph(){
    return(
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs tracking-[0.3em] text-cyan-300/70">
                LANGGRAPH MULTI-AGENT WORKFLOW
            </p>

            <div className="mt-8 space-y-6">
                {workflowAgents.map((agent,index)=>(
                    <div key={agent.name}>
                        <motion.div
                            initial={{opacity:0,x:-20}}
                            whileInView={{opacity:1,x:0}}
                            viewport={{once:true}}
                            transition={{delay:index*0.1}}
                            className="flex items-center gap-5"
                        >
                            <motion.div
                                animate={{
                                    rotate:[0,180,360]
                                }}
                                transition={{
                                    repeat:Infinity,
                                    duration:6+index
                                }}
                                className="h-12 w-12 rounded-2xl flex items-center justify-center"
                                style={{
                                    backgroundColor:`${agent.color}20`,
                                    color:agent.color
                                }}
                            >
                                <Network size={20}/>
                            </motion.div>

                            <div className="flex-1 rounded-xl border border-white/10 bg-black/20 p-4">
                                <h4
                                    className="font-semibold"
                                    style={{color:agent.color}}
                                >
                                    {agent.name}
                                </h4>

                                <p className="mt-1 text-sm text-slate-400">
                                    {agent.desc}
                                </p>
                            </div>
                        </motion.div>

                        {index!==workflowAgents.length-1 && (
                            <div className="ml-6 h-6 w-px bg-gradient-to-b from-cyan-400 to-violet-500"/>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
// ============================================================
// Vector Similarity Viewer
// ============================================================

const similarityChunks = [
    {label:"Enterprise Policy", score:0.98},
    {label:"Engineering Design Guide", score:0.95},
    {label:"API Documentation", score:0.91},
    {label:"Knowledge Base Article", score:0.88},
    {label:"Architecture Notes", score:0.83},
];

function VectorSimilarityViewer(){
    return(
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs tracking-[0.3em] text-cyan-300/70">
                VECTOR SEARCH RESULTS
            </p>

            <div className="mt-8 space-y-5">
                {similarityChunks.map((chunk,index)=>(
                    <motion.div
                        key={chunk.label}
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{once:true}}
                        transition={{delay:index*0.08}}
                    >
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-slate-300">{chunk.label}</span>

                            <span className="text-cyan-300">
                {(chunk.score*100).toFixed(0)}%
              </span>
                        </div>

                        <div className="h-2 rounded-full bg-white/10">
                            <motion.div
                                initial={{width:0}}
                                whileInView={{
                                    width:`${chunk.score*100}%`
                                }}
                                viewport={{once:true}}
                                transition={{duration:0.8}}
                                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
// ============================================================
// GPU Inference Pipeline
// ============================================================

const inferenceStages = [
    {
        title:"Request Queue",
        value:"Redis"
    },
    {
        title:"Load Balancer",
        value:"Nginx"
    },
    {
        title:"Inference Server",
        value:"vLLM"
    },
    {
        title:"GPU Runtime",
        value:"CUDA"
    },
    {
        title:"Streaming Tokens",
        value:"500 tok/s"
    },
];

function GPUInferenceDashboard(){
    return(
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs tracking-[0.3em] text-cyan-300/70">
                GPU LLM INFERENCE PIPELINE
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-5">
                {inferenceStages.map((stage,index)=>(
                    <motion.div
                        key={stage.title}
                        whileHover={{y:-6}}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center relative"
                    >
                        <motion.div
                            animate={{
                                scale:[1,1.08,1]
                            }}
                            transition={{
                                repeat:Infinity,
                                duration:2,
                                delay:index*0.2
                            }}
                            className="mx-auto mb-3 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22D3EE]"
                        />

                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            {stage.title}
                        </p>

                        <p className="mt-3 text-sm font-semibold text-cyan-300">
                            {stage.value}
                        </p>

                        {index!==inferenceStages.length-1 && (
                            <ChevronRight className="hidden md:block absolute -right-4 top-1/2 text-cyan-400"/>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

// ============================================================
// Enterprise Copilot Preview
// ============================================================

const conversation = [
    {
        role:"user",
        text:"Summarize the enterprise architecture for GraphRAG."
    },
    {
        role:"assistant",
        text:"Retrieved 8 relevant documents and 23 connected graph entities. Here's the grounded architecture summary..."
    },
    {
        role:"user",
        text:"Show only infrastructure components."
    },
    {
        role:"assistant",
        text:"Filtered retrieval results. Infrastructure includes FastAPI, Qdrant, Neo4j, Redis, vLLM and OpenTelemetry."
    }
];

function CopilotConversationPreview(){
    return(
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs tracking-[0.3em] text-cyan-300/70">
                ENTERPRISE AI COPILOT
            </p>

            <div className="mt-8 space-y-4">
                {conversation.map((msg,index)=>(
                    <motion.div
                        key={index}
                        initial={{opacity:0,y:10}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{delay:index*0.12}}
                        className={`max-w-[90%] rounded-2xl p-4 ${
                            msg.role==="user"
                                ? "ml-auto bg-cyan-500/10 border border-cyan-400/20"
                                : "bg-black/30 border border-white/10"
                        }`}
                    >
                        <p
                            className={`text-xs uppercase tracking-wide ${
                                msg.role==="user"
                                    ? "text-cyan-300"
                                    : "text-violet-300"
                            }`}
                        >
                            {msg.role}
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-300">
                            {msg.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
// ============================================================
// Project Preview Gallery
// ============================================================

const previewPanels = [
    {
        title: "GraphRAG Dashboard",
        subtitle: "Hybrid Retrieval Analytics",
        color: "#22D3EE",
    },
    {
        title: "Agent Workflow",
        subtitle: "LangGraph Execution Graph",
        color: "#8B5CF6",
    },
    {
        title: "Vector Search Explorer",
        subtitle: "Embedding Similarity Results",
        color: "#10B981",
    },
    {
        title: "Inference Monitoring",
        subtitle: "GPU Throughput Dashboard",
        color: "#F59E0B",
    },
];

function ProjectPreviewGallery() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    LIVE PROJECT PREVIEWS
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Interactive AI Product Interfaces
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {previewPanels.map((panel, index) => (
                    <motion.div
                        key={panel.title}
                        whileHover={{
                            rotateX: 6,
                            rotateY: -6,
                            scale: 1.03,
                        }}
                        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-6"
                    >
                        {/* Glow */}
                        <div
                            className="absolute inset-0 opacity-20 blur-3xl"
                            style={{
                                background: `radial-gradient(circle at top left, ${panel.color}, transparent 70%)`,
                            }}
                        />

                        <div className="relative z-10">
                            <div
                                className="mb-5 h-2 w-16 rounded-full"
                                style={{ backgroundColor: panel.color }}
                            />

                            <h4 className="text-xl font-semibold text-white">
                                {panel.title}
                            </h4>

                            <p className="mt-2 text-slate-400 text-sm">
                                {panel.subtitle}
                            </p>

                            <div className="mt-6 space-y-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ width: "30%" }}
                                        animate={{
                                            width: [`${30 + i * 5}%`, `${70 + i * 4}%`, `${30 + i * 5}%`],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3 + i,
                                        }}
                                        className="h-2 rounded-full bg-white/10"
                                    >
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                backgroundColor: panel.color,
                                                width: "100%",
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Performance Dashboard
// ============================================================

const performanceMetrics = [
    { label: "Retrieval Recall", value: 98, color: "#22D3EE" },
    { label: "Response Accuracy", value: 96, color: "#10B981" },
    { label: "Streaming Speed", value: 94, color: "#8B5CF6" },
    { label: "Context Precision", value: 92, color: "#F59E0B" },
];

function PerformanceDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    AI PERFORMANCE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Production AI Quality Metrics
                </h3>
            </div>

            <div className="space-y-6">
                {performanceMetrics.map((metric, index) => (
                    <div key={metric.label}>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-slate-300">{metric.label}</span>
                            <span style={{ color: metric.color }}>
                {metric.value}%
              </span>
                        </div>

                        <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${metric.value}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.12,
                                }}
                                className="h-full rounded-full"
                                style={{
                                    background: `linear-gradient(to right, ${metric.color}, #ffffff22)`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Deployment Architecture
// ============================================================

const deploymentFlow = [
    "Frontend (Next.js)",
    "FastAPI Gateway",
    "LangGraph Runtime",
    "Qdrant + Neo4j",
    "OpenAI / vLLM",
    "Monitoring",
];

function DeploymentArchitecture() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-10">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    DEPLOYMENT ARCHITECTURE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Production AI Infrastructure
                </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-6">
                {deploymentFlow.map((step, index) => (
                    <motion.div
                        key={step}
                        whileHover={{ y: -6 }}
                        className="relative rounded-[24px] border border-white/10 bg-black/20 p-4 text-center"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                delay: index * 0.15,
                            }}
                            className="mx-auto mb-3 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22D3EE]"
                        />

                        <p className="text-xs text-slate-300">{step}</p>

                        {index !== deploymentFlow.length - 1 && (
                            <ChevronRight className="hidden md:block absolute -right-3 top-1/2 text-cyan-400" />
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Project Case Study Timeline
// ============================================================

const caseStudy = [
    {
        phase: "Problem",
        color: "#EF4444",
        text: "Enterprise knowledge was fragmented across documents and databases.",
    },
    {
        phase: "Design",
        color: "#22D3EE",
        text: "Built a hybrid GraphRAG architecture using vector retrieval and graph traversal.",
    },
    {
        phase: "Implementation",
        color: "#8B5CF6",
        text: "Integrated LangGraph agents, FastAPI backend and streaming LLM responses.",
    },
    {
        phase: "Deployment",
        color: "#10B981",
        text: "Containerized services with Docker and observability using LangSmith & OpenTelemetry.",
    },
];

function ProjectCaseStudy() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-10">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    CASE STUDY
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    How the AI Project Was Built
                </h3>
            </div>

            <div className="space-y-8">
                {caseStudy.map((item, index) => (
                    <motion.div
                        key={item.phase}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                        className="flex gap-5"
                    >
                        <div className="flex flex-col items-center">
                            <div
                                className="h-5 w-5 rounded-full"
                                style={{
                                    backgroundColor: item.color,
                                    boxShadow: `0 0 12px ${item.color}`,
                                }}
                            />

                            {index !== caseStudy.length - 1 && (
                                <div className="mt-2 h-14 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                            )}
                        </div>

                        <div>
                            <p
                                className="text-xs uppercase tracking-[0.25em]"
                                style={{ color: item.color }}
                            >
                                {item.phase}
                            </p>

                            <p className="mt-3 text-slate-300 leading-7">
                                {item.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Project Impact
// ============================================================

const impactStats = [
    ["Enterprise Documents", "100K+"],
    ["Vector Embeddings", "1 Million+"],
    ["Knowledge Graph Nodes", "250K+"],
    ["Agent Executions", "500K+"],
    ["Streaming API Requests", "10 Million+"],
    ["Latency Improvement", "45%"],
];

function ProjectImpactDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    PROJECT IMPACT
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Platform Scale
                </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {impactStats.map(([label, value], index) => (
                    <motion.div
                        key={label}
                        whileHover={{ y: -5 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                            {label}
                        </p>

                        <h4 className="mt-3 text-3xl font-bold hero-gradient">
                            {value}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Streaming AI Chat Demo
// ============================================================

const chatMessages = [
    {
        role: "user",
        text: "Explain the Enterprise GraphRAG architecture.",
    },
    {
        role: "assistant",
        text:
            "Searching Knowledge Graph...\nRetrieving vector context...\nPlanner agent selected retrieval strategy...\nGenerating grounded response...",
    },
];

function StreamingChatDemo() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 overflow-hidden"
        >
            <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Brain className="text-cyan-300" size={22} />
                    <span className="text-white font-medium">
            Enterprise AI Copilot
          </span>
                </div>

                <span className="status-pill text-[10px]">
          LIVE STREAMING
        </span>
            </div>

            <div className="space-y-5 p-6">
                {chatMessages.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`rounded-2xl p-4 ${
                            msg.role === "user"
                                ? "ml-auto max-w-[80%] bg-cyan-500/10 border border-cyan-400/20"
                                : "max-w-[90%] bg-black/30 border border-white/10"
                        }`}
                    >
                        <p
                            className={`mb-2 text-xs uppercase tracking-widest ${
                                msg.role === "user"
                                    ? "text-cyan-300"
                                    : "text-violet-300"
                            }`}
                        >
                            {msg.role}
                        </p>

                        <p className="whitespace-pre-line text-sm text-slate-300 leading-7">
                            {msg.text}
                        </p>

                        {msg.role === "assistant" && (
                            <motion.div
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.2,
                                }}
                                className="mt-4 flex items-center gap-2 text-cyan-300 text-xs"
                            >
                                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                Streaming tokens...
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// GraphRAG Document Explorer
// ============================================================

const documents = [
    ["Engineering Standards.pdf", "98% Match"],
    ["API Design Guide.md", "95% Match"],
    ["Architecture Notes.docx", "92% Match"],
    ["Knowledge Graph Schema.json", "89% Match"],
    ["Deployment Handbook.pdf", "87% Match"],
];

function DocumentExplorer() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                GRAPH RAG DOCUMENT EXPLORER
            </p>

            <div className="mt-6 space-y-4">
                {documents.map(([doc, score], index) => (
                    <motion.div
                        key={doc}
                        whileHover={{ x: 6 }}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <Database className="text-cyan-300" size={18} />

                            <div>
                                <p className="text-white text-sm">{doc}</p>
                                <p className="text-xs text-slate-500">
                                    Retrieved from vector database
                                </p>
                            </div>
                        </div>

                        <span className="text-cyan-300 text-xs font-semibold">
              {score}
            </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Vector Search Playground
// ============================================================

const embeddings = [
    ["Enterprise Architecture", 0.99],
    ["Knowledge Retrieval", 0.94],
    ["API Gateway", 0.91],
    ["Vector Similarity", 0.88],
    ["Monitoring Pipelines", 0.83],
];

function VectorSearchPlayground() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 p-6"
        >
            <div className="flex items-center justify-between">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    VECTOR SEARCH PLAYGROUND
                </p>

                <Search className="text-cyan-300" size={18} />
            </div>

            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-black/20 p-4 text-sm text-slate-400">
                Query: <span className="text-cyan-300">"GraphRAG enterprise search"</span>
            </div>

            <div className="mt-8 space-y-5">
                {embeddings.map(([label, score], index) => (
                    <div key={label}>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-slate-300">{label}</span>
                            <span className="text-cyan-300">
                {Math.round(Number(score) * 100)}%
              </span>
                        </div>

                        <div className="h-2 rounded-full bg-white/10">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${Number(score) * 100}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.8,
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// LangGraph Execution Monitor
// ============================================================

const executionSteps = [
    "Receive User Query",
    "Planner Agent",
    "Retriever Agent",
    "Tool Agent",
    "Knowledge Graph Expansion",
    "LLM Response Generation",
    "Evaluator Agent",
    "Streaming Response",
];

function LangGraphExecutionMonitor() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[32px] border border-cyan-400/10 p-6"
        >
            <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                LANGGRAPH EXECUTION MONITOR
            </p>

            <div className="mt-8 space-y-4">
                {executionSteps.map((step, index) => (
                    <motion.div
                        key={step}
                        animate={{
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: index * 0.15,
                        }}
                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]" />

                        <span className="text-slate-300 text-sm">{step}</span>

                        <span className="ml-auto text-xs text-cyan-300">
              EXECUTED
            </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Code Editor Preview
// ============================================================

const sampleCode = `from langgraph.graph import StateGraph

graph = StateGraph()

graph.add_node("planner", planner_agent)
graph.add_node("retriever", retriever_agent)
graph.add_node("generator", llm_generator)

graph.set_entry_point("planner")

graph.add_edge("planner","retriever")
graph.add_edge("retriever","generator")

response = graph.invoke(query)
`;

function CodeEditorPreview() {
    return (
        <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[32px] border border-cyan-400/10 bg-[#020617]"
        >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"/>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"/>
                    <div className="h-3 w-3 rounded-full bg-green-500"/>
                </div>

                <span className="mono text-xs text-slate-500">
          graph_rag.py
        </span>
            </div>

            <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
        <code>{sampleCode}</code>
      </pre>
        </motion.div>
    );
}

// ============================================================
// Featured Project Spotlight
// ============================================================

function FeaturedProjectSpotlight() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[42px] border border-cyan-400/15 bg-gradient-to-br from-[#07131E] via-[#0B1020] to-[#1A1032] p-10"
        >
            {/* Animated Glow */}

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 50,
                    ease: "linear",
                }}
                className="absolute -top-28 -right-24 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear",
                }}
                className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-violet-500/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    FEATURED AI PLATFORM
                </div>

                <h3 className="hero-gradient text-5xl font-bold leading-tight">
                    Enterprise GraphRAG Platform
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    A production AI platform combining GraphRAG, Vector Search,
                    Knowledge Graphs, Multi-Agent orchestration and streaming LLM inference
                    for enterprise knowledge assistants.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    {[
                        "Neo4j",
                        "Qdrant",
                        "LangGraph",
                        "GPT-5",
                        "FastAPI",
                        "Docker",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="btn-primary"
                    >
                        Explore Architecture
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-white/10 px-6 py-3 text-white"
                    >
                        View Repository
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

// ============================================================
// Project Statistics Dashboard
// ============================================================

const projectStatistics = [
    {
        value: "12+",
        label: "AI Projects Built",
        color: "#22D3EE",
    },
    {
        value: "6",
        label: "Production AI Platforms",
        color: "#8B5CF6",
    },
    {
        value: "20+",
        label: "AI APIs Integrated",
        color: "#10B981",
    },
    {
        value: "1M+",
        label: "Vectors Indexed",
        color: "#F59E0B",
    },
];

function ProjectStatistics() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
            {projectStatistics.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    whileHover={{
                        y: -6,
                        scale: 1.03,
                    }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6 text-center"
                >
                    <motion.h3
                        animate={{
                            textShadow: [
                                `0 0 8px ${stat.color}`,
                                `0 0 24px ${stat.color}`,
                                `0 0 8px ${stat.color}`,
                            ],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                        }}
                        className="text-4xl font-bold"
                        style={{ color: stat.color }}
                    >
                        {stat.value}
                    </motion.h3>

                    <p className="mt-3 text-sm text-slate-400">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}

// ============================================================
// AI Project Timeline
// ============================================================

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function ContributionTimeline() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    AI BUILD TIMELINE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Engineering Activity
                </h3>
            </div>

            <div className="overflow-auto">
                <div className="grid min-w-[720px] grid-cols-12 gap-2">
                    {months.map((month) => (
                        <div
                            key={month}
                            className="text-center text-xs text-slate-500"
                        >
                            {month}
                        </div>
                    ))}

                    {Array.from({ length: 48 }).map((_, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            className="aspect-square rounded-md"
                            style={{
                                background:
                                    index % 5 === 0
                                        ? "#22D3EE"
                                        : index % 4 === 0
                                            ? "#10B981"
                                            : index % 3 === 0
                                                ? "#8B5CF6"
                                                : "#0F172A",
                            }}
                        />
                    ))}
                </div>
            </div>

            <p className="mt-6 text-sm text-slate-400">
                Continuous work across GraphRAG, Agents, Semantic Search, AI Infrastructure and Enterprise Copilots.
            </p>
        </motion.div>
    );
}
// ============================================================
// AI Engineering Impact
// ============================================================

const impactAreas = [
    {
        title: "Knowledge Retrieval",
        value: "98% Recall",
    },
    {
        title: "Agent Workflows",
        value: "6 Autonomous Agents",
    },
    {
        title: "Semantic Search",
        value: "Sub-150ms Retrieval",
    },
    {
        title: "Inference Infrastructure",
        value: "500 Tokens / Second",
    },
];

function AIEngineeringImpact() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs tracking-[0.35em] text-cyan-300/70 uppercase">
                    ENGINEERING IMPACT
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    What These AI Systems Deliver
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {impactAreas.map((area, index) => (
                    <motion.div
                        key={area.title}
                        whileHover={{ y: -5 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            {area.title}
                        </p>

                        <h4 className="mt-3 hero-gradient text-3xl font-bold">
                            {area.value}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// CTA Banner
// ============================================================

function ProjectsCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[42px] border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-indigo-500/10 p-10"
        >
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear",
                }}
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    NEXT SECTION
                </div>

                <h3 className="hero-gradient text-4xl font-bold">
                    AI Engineering Experience
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    See how these AI projects translate into production engineering experience,
                    architecture design, backend AI development, GraphRAG systems and AI infrastructure.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#experience"
                    className="btn-primary mt-8 inline-flex items-center gap-3"
                >
                    Explore Experience
                    <ArrowUpRight size={18} />
                </motion.a>
            </div>
        </motion.div>
    );
}


export default function ProjectsShowcase() {
    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const [activeProject, setActiveProject] =
        useState<AIProject | null>(projects[0]);

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === selectedCategory
            );

    return (
        <section
            id="projects"
            className="relative overflow-hidden py-32"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.08),transparent_55%)]" />

            <motion.div
                variants={staggerContainer(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container-ai relative z-10"
            >
                {/* Heading */}

                <motion.div variants={fadeUp} className="text-center">
                    <div className="status-pill mx-auto w-fit">
                        <span className="status-dot" />
                        FEATURED AI PROJECTS
                    </div>

                    <h2 className="section-title mt-6 hero-gradient">
                        BUILDING AI PRODUCTS
                        <br />
                        FOR REAL-WORLD APPLICATIONS
                    </h2>

                    <p className="section-subtitle mx-auto mt-6 max-w-3xl">
                        A collection of AI engineering projects focused on
                        GraphRAG, Multi-Agent Systems, Enterprise Copilots,
                        Semantic Search and AI Infrastructure.
                    </p>
                </motion.div>

                {/* Filters */}

                <motion.div
                    variants={heroItem}
                    className="mt-16 flex flex-wrap justify-center gap-4"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                            className={`rounded-full px-5 py-3 text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? "bg-cyan-400 text-black"
                                    : "border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}

                <motion.div
                    layout
                    className="mt-20 grid gap-8 lg:grid-cols-2"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpen={setActiveProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
                {/* =====================================================
      Expanded Project View
===================================================== */}

                {activeProject && (
                    <motion.div
                        variants={staggerContainer(0.15)}
                        className="mt-28"
                    >
                        <ExpandedProject project={activeProject} />
                    </motion.div>
                )}

                {/* =====================================================
      Featured Project Spotlight
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-32"
                >
                    <FeaturedProjectSpotlight />
                </motion.div>

                {/* =====================================================
      AI Project Statistics
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-20"
                >
                    <ProjectStatistics />
                </motion.div>

                {/* =====================================================
      GitHub Timeline
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-20"
                >
                    <ContributionTimeline />
                </motion.div>

                {/* =====================================================
      AI Engineering Impact
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-20"
                >
                    <AIEngineeringImpact />
                </motion.div>

                {/* =====================================================
      CTA
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <ProjectsCTA />
                </motion.div>

            </motion.div>
        </section>
    );
}