"use client";

// ============================================================
// components/skills/SkillsSection.tsx
// Premium AI Skills Section
// Part 1/5
// ============================================================

import { motion } from "framer-motion";

import {
    Brain,
    Database,
    Network,
    Cloud,
    Cpu,
    Code2,
    GitBranch,
    Sparkles,
    Layers3,
    Server,
} from "lucide-react";

import {
    fadeUp,
    heroItem,
    staggerContainer,
} from "@/lib/motion";

// ============================================================
// Skill Types
// ============================================================

type SkillCategory = {
    title: string;
    description: string;
    icon: any;
    color: string;
    skills: {
        name: string;
        level: number;
    }[];
};

// ============================================================
// AI Skill Categories
// ============================================================

const skillCategories: SkillCategory[] = [
    {
        title: "Generative AI & LLMs",
        description:
            "Building applications powered by modern Large Language Models and prompt orchestration.",
        icon: Brain,
        color: "#22D3EE",

        skills: [
            { name: "GPT-5 API", level: 95 },
            { name: "Prompt Engineering", level: 94 },
            { name: "Embeddings", level: 92 },
            { name: "Function Calling", level: 90 },
            { name: "Structured Outputs", level: 88 },
        ],
    },

    {
        title: "GraphRAG & Retrieval AI",
        description:
            "Enterprise knowledge retrieval using hybrid vector search and knowledge graphs.",
        icon: Database,
        color: "#10B981",

        skills: [
            { name: "GraphRAG", level: 95 },
            { name: "Neo4j", level: 92 },
            { name: "Qdrant", level: 92 },
            { name: "Vector Search", level: 93 },
            { name: "Semantic Retrieval", level: 94 },
        ],
    },

    {
        title: "Agentic AI Systems",
        description:
            "Building autonomous AI workflows with planners, retrievers and tool agents.",
        icon: Network,
        color: "#8B5CF6",

        skills: [
            { name: "LangGraph", level: 94 },
            { name: "Tool Calling", level: 92 },
            { name: "Memory Systems", level: 88 },
            { name: "Model Context Protocol", level: 90 },
            { name: "AI Evaluation", level: 86 },
        ],
    },

    {
        title: "Backend AI Engineering",
        description:
            "Scalable Python backend APIs for AI platforms and streaming inference.",
        icon: Cpu,
        color: "#F59E0B",

        skills: [
            { name: "Python", level: 96 },
            { name: "FastAPI", level: 95 },
            { name: "AsyncIO", level: 90 },
            { name: "REST APIs", level: 95 },
            { name: "Streaming APIs", level: 90 },
        ],
    },

    {
        title: "AI Infrastructure",
        description:
            "Deploying production AI systems using containers, orchestration and monitoring.",
        icon: Cloud,
        color: "#EC4899",

        skills: [
            { name: "Docker", level: 92 },
            { name: "Kubernetes", level: 86 },
            { name: "Redis", level: 88 },
            { name: "OpenTelemetry", level: 82 },
            { name: "LangSmith", level: 84 },
        ],
    },

    {
        title: "Developer Ecosystem",
        description:
            "Modern tooling for AI engineering, collaboration and deployment.",
        icon: Code2,
        color: "#6366F1",

        skills: [
            { name: "Git & GitHub", level: 94 },
            { name: "VS Code", level: 95 },
            { name: "Postman", level: 92 },
            { name: "Linux", level: 88 },
            { name: "JSON / YAML", level: 96 },
        ],
    },
];

// ============================================================
// Skills Hero Banner
// ============================================================

function SkillsHero() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[44px] border border-cyan-400/10 bg-gradient-to-br from-[#06131F] via-[#0A1020] to-[#1A1030] p-10"
        >
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 70,
                    ease: "linear",
                }}
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    AI SKILLS & TECHNOLOGY STACK
                </div>

                <h2 className="hero-gradient text-5xl font-bold leading-tight">
                    Building Intelligent AI Systems From Backend to Production
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    My core expertise spans GraphRAG, Multi-Agent AI, FastAPI backend engineering,
                    Vector Search, AI Infrastructure, Knowledge Graphs and production LLM deployment.
                </p>
            </div>
        </motion.div>
    );
}

// ============================================================
// Skill Category Card
// ============================================================

function SkillCategoryCard({
                               category,
                           }: {
    category: SkillCategory;
}) {
    const Icon = category.icon;

    return (
        <motion.div
            variants={heroItem}
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-7"
        >
            <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl"
                style={{
                    backgroundColor: `${category.color}20`,
                    color: category.color,
                }}
            >
                <Icon size={28} />
            </div>

            <h3
                className="text-2xl font-semibold"
                style={{ color: category.color }}
            >
                {category.title}
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
                {category.description}
            </p>

            <div className="mt-8 space-y-5">
                {category.skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-300">
                {skill.name}
              </span>

                            <span
                                style={{ color: category.color }}
                            >
                {skill.level}%
              </span>
                        </div>

                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${skill.level}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="h-full rounded-full"
                                style={{
                                    background: `linear-gradient(to right, ${category.color}, #ffffff33)`,
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
// Skills Grid
// ============================================================

function SkillsGrid() {
    return (
        <motion.div
            variants={staggerContainer(0.15)}
            className="grid gap-8 lg:grid-cols-2"
        >
            {skillCategories.map((category) => (
                <SkillCategoryCard
                    key={category.title}
                    category={category}
                />
            ))}
        </motion.div>
    );
}

// ============================================================
// AI Technology Radar
// ============================================================

const radarSkills = [
    { name: "GPT-5", color: "#22D3EE", size: "large" },
    { name: "LangGraph", color: "#8B5CF6", size: "medium" },
    { name: "GraphRAG", color: "#10B981", size: "large" },
    { name: "FastAPI", color: "#F59E0B", size: "medium" },
    { name: "Neo4j", color: "#EC4899", size: "small" },
    { name: "Qdrant", color: "#6366F1", size: "small" },
    { name: "Docker", color: "#06B6D4", size: "medium" },
    { name: "Redis", color: "#F43F5E", size: "small" },
    { name: "Python", color: "#84CC16", size: "large" },
];

function TechnologyRadar() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8 overflow-hidden"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI TECHNOLOGY RADAR
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Technologies I Use Most
                </h3>
            </div>

            <div className="relative h-[520px] flex items-center justify-center">
                {/* Radar Rings */}

                {[120, 180, 240].map((ring) => (
                    <motion.div
                        key={ring}
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }}
                        className="absolute rounded-full border border-cyan-400/10"
                        style={{
                            width: ring,
                            height: ring,
                        }}
                    />
                ))}

                {/* Center */}

                <div className="absolute h-16 w-16 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center">
                    <Brain className="text-cyan-300" size={26} />
                </div>

                {/* Skills */}

                {radarSkills.map((skill, index) => {
                    const angle = (360 / radarSkills.length) * index;
                    const radius = 95 + (index % 3) * 45;

                    return (
                        <motion.div
                            key={skill.name}
                            animate={{
                                rotate: [angle, angle + 360],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 40 + index * 3,
                                ease: "linear",
                            }}
                            className="absolute origin-center"
                        >
                            <div
                                style={{
                                    transform: `translate(${radius}px,0px)`,
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    className={`rounded-full px-4 py-2 text-xs font-semibold border ${
                                        skill.size === "large"
                                            ? "text-sm px-5 py-3"
                                            : skill.size === "medium"
                                                ? "text-xs px-4 py-2"
                                                : "text-[11px] px-3 py-2"
                                    }`}
                                    style={{
                                        borderColor: `${skill.color}55`,
                                        color: skill.color,
                                        backgroundColor: `${skill.color}15`,
                                        boxShadow: `0 0 12px ${skill.color}33`,
                                    }}
                                >
                                    {skill.name}
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
// ============================================================
// GraphRAG Technology Stack
// ============================================================

const graphRagLayers = [
    {
        layer: "Frontend",
        tech: ["Next.js", "React", "Tailwind"],
        color: "#22D3EE",
    },
    {
        layer: "API Layer",
        tech: ["FastAPI", "Python", "REST APIs"],
        color: "#8B5CF6",
    },
    {
        layer: "Retrieval",
        tech: ["Qdrant", "Neo4j", "Embeddings"],
        color: "#10B981",
    },
    {
        layer: "Agent Runtime",
        tech: ["LangGraph", "Planner", "Retriever"],
        color: "#EC4899",
    },
    {
        layer: "LLM",
        tech: ["GPT-5", "Streaming", "Tool Calling"],
        color: "#F59E0B",
    },
];

function GraphRAGStack() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    GRAPH RAG STACK
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Enterprise AI Architecture Stack
                </h3>
            </div>

            <div className="space-y-5">
                {graphRagLayers.map((layer, index) => (
                    <div key={layer.layer}>
                        <motion.div
                            whileHover={{ x: 5 }}
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
                                    {layer.layer}
                                </h4>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {layer.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </motion.div>

                        {index !== graphRagLayers.length - 1 && (
                            <div className="mx-auto my-2 h-5 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// AI Infrastructure Stack
// ============================================================

const infrastructureStack = [
    {
        title: "Containerization",
        tools: ["Docker", "Docker Compose"],
        color: "#22D3EE",
    },
    {
        title: "Orchestration",
        tools: ["Kubernetes", "Helm"],
        color: "#8B5CF6",
    },
    {
        title: "Caching",
        tools: ["Redis", "Async Cache"],
        color: "#10B981",
    },
    {
        title: "Observability",
        tools: ["OpenTelemetry", "LangSmith"],
        color: "#F59E0B",
    },
];

function InfrastructureStack() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI INFRASTRUCTURE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Production Deployment Stack
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {infrastructureStack.map((stack) => (
                    <motion.div
                        key={stack.title}
                        whileHover={{ y: -5 }}
                        className="rounded-[26px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-5 h-3 w-20 rounded-full"
                            style={{ backgroundColor: stack.color }}
                        />

                        <h4
                            className="text-xl font-semibold"
                            style={{ color: stack.color }}
                        >
                            {stack.title}
                        </h4>

                        <div className="mt-5 flex flex-wrap gap-3">
                            {stack.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                                >
                  {tool}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// AI Tools Cloud
// ============================================================

const aiTools = [
    "OpenAI",
    "LangGraph",
    "LangSmith",
    "Neo4j",
    "Qdrant",
    "Pinecone",
    "Docker",
    "GitHub",
    "Postman",
    "VS Code",
    "Redis",
    "Linux",
    "Hugging Face",
    "FastAPI",
    "Python",
    "OpenTelemetry",
    "JSON",
    "YAML",
    "REST API",
    "AsyncIO",
];

function ToolsCloud() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI TOOL ECOSYSTEM
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Developer Tools & AI Platforms
                </h3>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                {aiTools.map((tool, index) => (
                    <motion.div
                        key={tool}
                        whileHover={{
                            scale: 1.08,
                            rotate: index % 2 ? -2 : 2,
                        }}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm text-cyan-300"
                    >
                        {tool}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// LLM Ecosystem Visualization
// ============================================================

const ecosystem = [
    {
        title: "Foundation Models",
        items: ["GPT-5", "Llama 3", "Mistral"],
        color: "#22D3EE",
    },
    {
        title: "Retrieval",
        items: ["Embeddings", "Qdrant", "Neo4j"],
        color: "#10B981",
    },
    {
        title: "Agents",
        items: ["LangGraph", "Planner", "Tool Calling"],
        color: "#8B5CF6",
    },
    {
        title: "Infrastructure",
        items: ["Docker", "Redis", "FastAPI"],
        color: "#F59E0B",
    },
];

function LLMEcosystem() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    LLM ECOSYSTEM
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Application Building Blocks
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {ecosystem.map((section) => (
                    <motion.div
                        key={section.title}
                        whileHover={{ y: -5 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <h4
                            className="text-lg font-semibold"
                            style={{ color: section.color }}
                        >
                            {section.title}
                        </h4>

                        <div className="mt-5 space-y-3">
                            {section.items.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div
                                        className="h-2.5 w-2.5 rounded-full"
                                        style={{ backgroundColor: section.color }}
                                    />

                                    <span className="text-slate-300 text-sm">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Circular AI Skill Meters
// ============================================================

const coreSkills = [
    { name: "Python", value: 96, color: "#22D3EE" },
    { name: "GPT-5", value: 95, color: "#8B5CF6" },
    { name: "GraphRAG", value: 95, color: "#10B981" },
    { name: "FastAPI", value: 95, color: "#F59E0B" },
    { name: "LangGraph", value: 94, color: "#EC4899" },
    { name: "Qdrant", value: 92, color: "#6366F1" },
];

function SkillMeter({
                        name,
                        value,
                        color,
                    }: {
    name: string;
    value: number;
    color: string;
}) {
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (value / 100) * circumference;

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-card rounded-[30px] border border-cyan-400/10 p-6 text-center"
        >
            <svg width="140" height="140" className="mx-auto">
                <circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke="#1E293B"
                    strokeWidth="10"
                    fill="transparent"
                />

                <motion.circle
                    cx="70"
                    cy="70"
                    r="54"
                    stroke={color}
                    strokeWidth="10"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    transform="rotate(-90 70 70)"
                />

                <text
                    x="70"
                    y="76"
                    fill={color}
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="bold"
                >
                    {value}%
                </text>
            </svg>

            <h4 className="mt-4 text-white font-semibold">{name}</h4>
        </motion.div>
    );
}

function CoreSkillMeters() {
    return (
        <motion.div variants={fadeUp}>
            <div className="mb-10 text-center">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    CORE PROFICIENCY
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Engineering Strengths
                </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {coreSkills.map((skill) => (
                    <SkillMeter key={skill.name} {...skill} />
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// AI Capability Matrix
// ============================================================

const capabilityMatrix = [
    {
        title: "Prompt Engineering",
        level: "Expert",
        color: "#22D3EE",
    },
    {
        title: "RAG Pipelines",
        level: "Expert",
        color: "#10B981",
    },
    {
        title: "GraphRAG Systems",
        level: "Expert",
        color: "#8B5CF6",
    },
    {
        title: "Vector Search",
        level: "Advanced",
        color: "#F59E0B",
    },
    {
        title: "LLM APIs",
        level: "Expert",
        color: "#EC4899",
    },
    {
        title: "Multi-Agent AI",
        level: "Advanced",
        color: "#6366F1",
    },
    {
        title: "AI Observability",
        level: "Intermediate",
        color: "#06B6D4",
    },
    {
        title: "Kubernetes",
        level: "Intermediate",
        color: "#84CC16",
    },
];

function CapabilityMatrix() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI CAPABILITY MATRIX
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Engineering Expertise Matrix
                </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {capabilityMatrix.map((skill) => (
                    <motion.div
                        key={skill.title}
                        whileHover={{ x: 5 }}
                        className="rounded-[22px] border border-white/10 bg-black/20 p-5 flex items-center justify-between"
                    >
            <span className="text-white font-medium">
              {skill.title}
            </span>

                        <span
                            className="rounded-full px-4 py-2 text-xs font-semibold"
                            style={{
                                color: skill.color,
                                backgroundColor: `${skill.color}20`,
                            }}
                        >
              {skill.level}
            </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// GraphRAG Pipeline Visualization
// ============================================================

const graphPipeline = [
    "User Query",
    "Embedding Generation",
    "Vector Search",
    "Knowledge Graph Lookup",
    "Context Expansion",
    "LLM Response",
];

function GraphPipelineVisualization() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    GRAPH RAG FLOW
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Hybrid Retrieval Pipeline
                </h3>
            </div>

            <div className="space-y-5">
                {graphPipeline.map((stage, index) => (
                    <div key={stage}>
                        <motion.div
                            whileHover={{ x: 8 }}
                            className="flex items-center gap-5 rounded-[22px] border border-white/10 bg-black/20 p-5"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    delay: index * 0.15,
                                }}
                                className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22D3EE]"
                            />

                            <span className="text-white font-medium">{stage}</span>
                        </motion.div>

                        {index !== graphPipeline.length - 1 && (
                            <div className="ml-7 h-5 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Backend AI Workflow
// ============================================================

const backendWorkflow = [
    {
        title: "API Gateway",
        tech: "FastAPI",
        color: "#22D3EE",
    },
    {
        title: "Agent Orchestrator",
        tech: "LangGraph",
        color: "#8B5CF6",
    },
    {
        title: "Retriever",
        tech: "Qdrant + Neo4j",
        color: "#10B981",
    },
    {
        title: "LLM Runtime",
        tech: "GPT-5",
        color: "#F59E0B",
    },
    {
        title: "Streaming Response",
        tech: "AsyncIO",
        color: "#EC4899",
    },
];

function BackendWorkflow() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    BACKEND AI WORKFLOW
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    End-to-End AI Backend Flow
                </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-5">
                {backendWorkflow.map((step) => (
                    <motion.div
                        key={step.title}
                        whileHover={{ y: -5 }}
                        className="rounded-[22px] border border-white/10 bg-black/20 p-5 text-center"
                    >
                        <div
                            className="mx-auto mb-4 h-3 w-12 rounded-full"
                            style={{ backgroundColor: step.color }}
                        />

                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            {step.title}
                        </p>

                        <h4
                            className="mt-3 text-sm font-semibold"
                            style={{ color: step.color }}
                        >
                            {step.tech}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Production Deployment Skills
// ============================================================

const deploymentSkills = [
    {
        title: "Containerized AI APIs",
        desc: "Dockerized FastAPI microservices.",
        color: "#22D3EE",
    },
    {
        title: "Scalable Retrieval Services",
        desc: "Vector databases with async APIs.",
        color: "#10B981",
    },
    {
        title: "Streaming AI Responses",
        desc: "Real-time token streaming.",
        color: "#8B5CF6",
    },
    {
        title: "Observability",
        desc: "Tracing prompts, latency and retrieval.",
        color: "#F59E0B",
    },
];

function DeploymentSkills() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
        >
            {deploymentSkills.map((item) => (
                <motion.div
                    key={item.title}
                    whileHover={{ y: -5 }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6"
                >
                    <div
                        className="mb-4 h-3 w-16 rounded-full"
                        style={{ backgroundColor: item.color }}
                    />

                    <h4
                        className="text-xl font-semibold"
                        style={{ color: item.color }}
                    >
                        {item.title}
                    </h4>

                    <p className="mt-3 text-slate-400 leading-7">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}

// ============================================================
// AI Project Capability Heatmap
// ============================================================

const capabilityHeatmap = [
    {
        project: "Enterprise GraphRAG",
        capabilities: [95, 94, 98, 92],
    },
    {
        project: "AI Copilot Platform",
        capabilities: [94, 92, 90, 95],
    },
    {
        project: "Semantic Search API",
        capabilities: [90, 95, 88, 89],
    },
    {
        project: "Multi-Agent Workflow",
        capabilities: [92, 89, 96, 91],
    },
];

const heatmapHeaders = [
    "LLM",
    "Retrieval",
    "Architecture",
    "Backend",
];

function CapabilityHeatmap() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8 overflow-x-auto"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    PROJECT CAPABILITY MATRIX
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Skills Across Projects
                </h3>
            </div>

            <table className="w-full min-w-[650px] border-collapse">
                <thead>
                <tr className="text-left text-slate-400">
                    <th className="pb-4">Project</th>

                    {heatmapHeaders.map((header) => (
                        <th key={header} className="pb-4 text-center">
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {capabilityHeatmap.map((row) => (
                    <tr key={row.project} className="border-t border-white/5">
                        <td className="py-5 text-white font-medium">
                            {row.project}
                        </td>

                        {row.capabilities.map((score, i) => (
                            <td key={i} className="text-center py-5">
                                <div
                                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-xs font-bold"
                                    style={{
                                        background: `rgba(34,211,238,${score / 120})`,
                                        color: "#E0F2FE",
                                    }}
                                >
                                    {score}
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </motion.div>
    );
}
// ============================================================
// AI Ecosystem Cards
// ============================================================

const ecosystemCards = [
    {
        title: "LLM Layer",
        color: "#22D3EE",
        icon: Brain,
        description:
            "GPT-5, Embeddings, Structured Outputs, Tool Calling and Prompt Engineering.",
    },
    {
        title: "Retrieval Layer",
        color: "#10B981",
        icon: Database,
        description:
            "GraphRAG, Neo4j, Qdrant, Semantic Retrieval and Hybrid Search.",
    },
    {
        title: "Agent Layer",
        color: "#8B5CF6",
        icon: Network,
        description:
            "LangGraph, Planner, Retriever, Evaluator and Memory Systems.",
    },
    {
        title: "Infrastructure Layer",
        color: "#F59E0B",
        icon: Cloud,
        description:
            "FastAPI, Docker, Redis, Kubernetes and OpenTelemetry.",
    },
];

function EcosystemCards() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
        >
            {ecosystemCards.map((card) => {
                const Icon = card.icon;

                return (
                    <motion.div
                        key={card.title}
                        whileHover={{ y: -6 }}
                        className="glass-card rounded-[28px] border border-cyan-400/10 p-6"
                    >
                        <div
                            className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${card.color}20`,
                                color: card.color,
                            }}
                        >
                            <Icon size={24} />
                        </div>

                        <h4
                            className="text-xl font-semibold"
                            style={{ color: card.color }}
                        >
                            {card.title}
                        </h4>

                        <p className="mt-4 text-slate-400 leading-7">
                            {card.description}
                        </p>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
// ============================================================
// AI Infrastructure Maturity
// ============================================================

const maturityTimeline = [
    {
        stage: "Development",
        color: "#22D3EE",
        skills: ["FastAPI", "Python APIs", "OpenAI SDK"],
    },
    {
        stage: "Retrieval AI",
        color: "#10B981",
        skills: ["Embeddings", "Qdrant", "Neo4j"],
    },
    {
        stage: "Agentic AI",
        color: "#8B5CF6",
        skills: ["LangGraph", "Tool Calling", "Memory"],
    },
    {
        stage: "Production AI",
        color: "#F59E0B",
        skills: ["Docker", "Redis", "Streaming APIs"],
    },
    {
        stage: "AI Platform",
        color: "#EC4899",
        skills: ["Observability", "CI/CD", "Kubernetes"],
    },
];

function InfrastructureMaturity() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI INFRASTRUCTURE MATURITY
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Journey Towards Production AI Engineering
                </h3>
            </div>

            <div className="space-y-6">
                {maturityTimeline.map((stage, index) => (
                    <div key={stage.stage}>
                        <motion.div
                            whileHover={{ x: 6 }}
                            className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="h-4 w-4 rounded-full"
                                    style={{
                                        backgroundColor: stage.color,
                                        boxShadow: `0 0 10px ${stage.color}`,
                                    }}
                                />

                                <h4
                                    className="font-semibold text-lg"
                                    style={{ color: stage.color }}
                                >
                                    {stage.stage}
                                </h4>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {stage.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>

                        {index !== maturityTimeline.length - 1 && (
                            <div className="mx-auto my-3 h-5 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// AI Backend Capability Dashboard
// ============================================================

const backendCapabilities = [
    {
        label: "Streaming APIs",
        value: "Expert",
        color: "#22D3EE",
    },
    {
        label: "Async Backend",
        value: "Advanced",
        color: "#8B5CF6",
    },
    {
        label: "Vector Retrieval",
        value: "Expert",
        color: "#10B981",
    },
    {
        label: "Knowledge Graphs",
        value: "Advanced",
        color: "#F59E0B",
    },
    {
        label: "LLM Integration",
        value: "Expert",
        color: "#EC4899",
    },
    {
        label: "Caching Strategy",
        value: "Advanced",
        color: "#6366F1",
    },
];

function BackendCapabilityDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
            {backendCapabilities.map((capability) => (
                <motion.div
                    key={capability.label}
                    whileHover={{
                        y: -5,
                        scale: 1.03,
                    }}
                    className="glass-card rounded-[26px] border border-cyan-400/10 p-6"
                >
                    <div
                        className="mb-4 h-2 rounded-full"
                        style={{ backgroundColor: capability.color }}
                    />

                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                        {capability.label}
                    </p>

                    <h3
                        className="mt-4 text-2xl font-semibold"
                        style={{ color: capability.color }}
                    >
                        {capability.value}
                    </h3>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// Skills CTA Banner
// ============================================================

function SkillsCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[44px] border border-cyan-400/15 bg-gradient-to-r from-[#06131F] via-[#0A1020] to-[#1A1030] p-10"
        >
            <motion.div
                animate={{ rotate: 360 }}
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
                    NEXT SECTION
                </div>

                <h3 className="hero-gradient text-4xl font-bold">
                    AI Certifications, Blogs & Open Source
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    Explore AI learning, technical articles, open-source contributions,
                    architecture notes and engineering documentation.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#certifications"
                    className="btn-primary mt-8 inline-flex items-center gap-3"
                >
                    Continue
                    {/*<ArrowUpRight size={18} />*/}
                </motion.a>
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-32"
        >
            {/* Background */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.06),transparent_60%)]" />

            <motion.div
                variants={staggerContainer(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container-ai relative z-10 space-y-24"
            >
                {/* Hero */}

                <SkillsHero />

                {/* Categories */}

                <div>
                    <motion.div variants={fadeUp} className="mb-12 text-center">
                        <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                            CORE AI EXPERTISE
                        </p>

                        <h2 className="section-title mt-4 hero-gradient">
                            AI ENGINEERING TOOLKIT
                        </h2>
                    </motion.div>

                    <SkillsGrid />
                </div>

                {/* =====================================================
      AI Technology Radar
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <TechnologyRadar />
                </motion.div>

                {/* =====================================================
      GraphRAG Stack
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <GraphRAGStack />
                </motion.div>

                {/* =====================================================
      Infrastructure Stack
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <InfrastructureStack />
                </motion.div>

                {/* =====================================================
      LLM Ecosystem
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <LLMEcosystem />
                </motion.div>

                {/* =====================================================
      AI Tools Cloud
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <ToolsCloud />
                </motion.div>
                {/* =====================================================
      Core Skill Meters
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <CoreSkillMeters />
                </motion.div>

                {/* =====================================================
      Capability Matrix
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <CapabilityMatrix />
                </motion.div>

                {/* =====================================================
      GraphRAG Pipeline
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <GraphPipelineVisualization />
                </motion.div>

                {/* =====================================================
      Backend Workflow
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <BackendWorkflow />
                </motion.div>

                {/* =====================================================
      Deployment Skills
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <DeploymentSkills />
                </motion.div>
                {/* =====================================================
      AI Project Capability Heatmap
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <CapabilityHeatmap />
                </motion.div>

                {/* =====================================================
      AI Ecosystem Cards
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <EcosystemCards />
                </motion.div>

                {/* =====================================================
      Infrastructure Maturity
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <InfrastructureMaturity />
                </motion.div>

                {/* =====================================================
      Backend Capability Dashboard
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <BackendCapabilityDashboard />
                </motion.div>

                {/* =====================================================
      CTA Banner
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <SkillsCTA />
                </motion.div>
            </motion.div>
        </section>
    );
}