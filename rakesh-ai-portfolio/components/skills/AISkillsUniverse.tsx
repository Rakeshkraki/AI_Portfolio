"use client";

// ============================================================
// components/skills/AISkillsUniverse.tsx
// Interactive AI Skills Universe
// Part 1/4
// ============================================================

import { motion } from "framer-motion";
import {
    Brain,
    Database,
    Cpu,
    Cloud,
    Boxes,
    Network,
    Code2,
    Sparkles,
} from "lucide-react";

import {
    fadeUp,
    heroItem,
    staggerContainer,
} from "@/lib/motion";

const skillCategories = [
    {
        title: "LLM Engineering",
        icon: Brain,
        color: "#22D3EE",
        skills: [
            "OpenAI GPT-5",
            "Llama 3",
            "Mistral",
            "vLLM",
            "Prompt Engineering",
            "Function Calling",
            "Streaming APIs",
            "Tool Calling",
        ],
    },
    {
        title: "GraphRAG",
        icon: Network,
        color: "#8B5CF6",
        skills: [
            "Neo4j",
            "Knowledge Graphs",
            "Cypher",
            "LangGraph",
            "Hybrid Retrieval",
            "Entity Linking",
            "Context Expansion",
        ],
    },
    {
        title: "Vector Search",
        icon: Database,
        color: "#10B981",
        skills: [
            "Qdrant",
            "Pinecone",
            "FAISS",
            "Embeddings",
            "Semantic Search",
            "Hybrid Search",
            "Reranking",
        ],
    },
    {
        title: "AI Infrastructure",
        icon: Cpu,
        color: "#6366F1",
        skills: [
            "Docker",
            "Kubernetes",
            "Redis",
            "FastAPI",
            "LangSmith",
            "OpenTelemetry",
            "GPU Inference",
        ],
    },
    {
        title: "Backend AI APIs",
        icon: Code2,
        color: "#F59E0B",
        skills: [
            "Python",
            "FastAPI",
            "REST APIs",
            "AsyncIO",
            "PostgreSQL",
            "Celery",
            "JWT",
        ],
    },
    {
        title: "Deployment & Cloud",
        icon: Cloud,
        color: "#EC4899",
        skills: [
            "Docker Compose",
            "GitHub Actions",
            "AWS",
            "Azure AI",
            "Nginx",
            "Linux",
            "CI/CD",
        ],
    },
];



// ============================================================
// AI Universe Orbit
// ============================================================

// ============================================================
// Orbit Technologies Around AI Core
// ============================================================

const orbitSkills = [
    { name: "GPT-5", angle: 0, radius: 170, color: "#22D3EE" },
    { name: "LangGraph", angle: 40, radius: 170, color: "#8B5CF6" },
    { name: "Neo4j", angle: 80, radius: 170, color: "#10B981" },
    { name: "Qdrant", angle: 120, radius: 170, color: "#F59E0B" },
    { name: "Docker", angle: 160, radius: 170, color: "#2563EB" },
    { name: "Python", angle: 200, radius: 170, color: "#FBBF24" },
    { name: "FastAPI", angle: 240, radius: 170, color: "#10B981" },
    { name: "Kubernetes", angle: 280, radius: 170, color: "#6366F1" },
    { name: "Redis", angle: 320, radius: 170, color: "#EF4444" },
];

// ============================================================
// AI Universe Orbit
// ============================================================

function AIUniverseOrbit() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card relative flex aspect-square items-center justify-center overflow-hidden rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-[#061018] to-[#040506]"
        >
            {/* Orbit Rings */}

            {[180, 260, 340].map((size, index) => (
                <motion.div
                    key={size}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 24 + index * 10,
                        ease: "linear",
                    }}
                    className="absolute rounded-full border border-cyan-400/10"
                    style={{
                        width: size,
                        height: size,
                    }}
                />
            ))}

            {/* AI Core */}

            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                        "0 0 20px #22D3EE55",
                        "0 0 60px #22D3EE",
                        "0 0 20px #22D3EE55",
                    ],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
                className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/10 backdrop-blur-xl"
            >
                <Brain size={44} className="text-cyan-300" />

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border border-dashed border-cyan-300/20"
                />
            </motion.div>

            {/* Orbit Skills */}

            {orbitSkills.map((skill, index) => {
                const rad = (skill.angle * Math.PI) / 180;

                const x = Math.cos(rad) * skill.radius;
                const y = Math.sin(rad) * skill.radius;

                return (
                    <motion.div
                        key={skill.name}
                        animate={{ rotate: -360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                        className="absolute z-30"
                        style={{
                            transform: `translate(${x}px,${y}px)`,
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.15,
                                y: -4,
                            }}
                            className="rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl"
                            style={{
                                color: skill.color,
                                boxShadow: `0 0 20px ${skill.color}33`,
                            }}
                        >
              <span className="text-xs font-semibold tracking-wide">
                {skill.name}
              </span>
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Floating Stars */}

            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        y: [-10, 10, -10],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2.5 + i * 0.15,
                    }}
                    className="absolute h-1 w-1 rounded-full bg-cyan-300"
                    style={{
                        left: `${(i * 13) % 100}%`,
                        top: `${(i * 7) % 100}%`,
                    }}
                />
            ))}
        </motion.div>
    );
}
// ============================================================
// Skills Category Cards
// ============================================================

function SkillCategoryCard({
                               category,
                           }: {
    category: (typeof skillCategories)[number];
}) {
    const Icon = category.icon;

    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            className="glass-card rounded-[28px] border border-cyan-400/10 p-7"
        >
            <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                    backgroundColor: `${category.color}15`,
                    color: category.color,
                }}
            >
                <Icon size={24} />
            </div>

            <h3 className="text-xl font-semibold text-white">
                {category.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                    <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// AI Technology Constellation
// ============================================================

const constellationNodes = [
    { name: "GPT-5", x: 50, y: 18, color: "#22D3EE", size: 16 },
    { name: "LangGraph", x: 28, y: 34, color: "#8B5CF6", size: 14 },
    { name: "Neo4j", x: 72, y: 34, color: "#10B981", size: 14 },
    { name: "Qdrant", x: 18, y: 55, color: "#F59E0B", size: 14 },
    { name: "Embeddings", x: 82, y: 56, color: "#38BDF8", size: 13 },
    { name: "FastAPI", x: 34, y: 76, color: "#14B8A6", size: 13 },
    { name: "Docker", x: 66, y: 76, color: "#2563EB", size: 13 },
    { name: "Kubernetes", x: 50, y: 92, color: "#6366F1", size: 15 },
];

const constellationConnections = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [5, 7],
    [6, 7],
    [1, 2],
    [3, 4],
];

// ============================================================
// Interactive AI Constellation
// ============================================================

function AIConstellation() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 overflow-hidden"
        >
            <div className="p-6 border-b border-white/10">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI KNOWLEDGE CONSTELLATION
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Connected AI Technologies
                </h3>
            </div>

            <div className="relative aspect-[16/11] bg-gradient-to-br from-[#040506] via-[#07111B] to-[#040506]">
                {/* SVG Connections */}

                <svg className="absolute inset-0 w-full h-full">
                    {constellationConnections.map(([a, b], index) => {
                        const start = constellationNodes[a];
                        const end = constellationNodes[b];

                        return (
                            <motion.line
                                key={index}
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{
                                    pathLength: 1,
                                    opacity: 0.5,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 1,
                                }}
                                x1={`${start.x}%`}
                                y1={`${start.y}%`}
                                x2={`${end.x}%`}
                                y2={`${end.y}%`}
                                stroke="#22D3EE"
                                strokeWidth="1.2"
                                strokeOpacity="0.35"
                            />
                        );
                    })}
                </svg>

                {/* Nodes */}

                {constellationNodes.map((node, index) => (
                    <motion.div
                        key={node.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ scale: 1.15 }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                        }}
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    `0 0 10px ${node.color}`,
                                    `0 0 24px ${node.color}`,
                                    `0 0 10px ${node.color}`,
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.5,
                                delay: index * 0.15,
                            }}
                            className="rounded-full border border-white/20 bg-black/70 px-4 py-2 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="rounded-full"
                                    style={{
                                        width: node.size / 2,
                                        height: node.size / 2,
                                        backgroundColor: node.color,
                                    }}
                                />

                                <span
                                    className="text-xs font-semibold tracking-wide"
                                    style={{ color: node.color }}
                                >
                  {node.name}
                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}

                {/* Floating Particles */}

                {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.15, 0.8, 0.15],
                            y: [-8, 8, -8],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2 + i * 0.08,
                        }}
                        className="absolute h-1 w-1 rounded-full bg-cyan-300"
                        style={{
                            left: `${(i * 17) % 100}%`,
                            top: `${(i * 11) % 100}%`,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Capability Dashboard
// ============================================================

const capabilityMetrics = [
    {
        title: "RAG Recall",
        value: "98.3%",
        color: "#22D3EE",
    },
    {
        title: "Context Window",
        value: "32K Tokens",
        color: "#8B5CF6",
    },
    {
        title: "Inference Latency",
        value: "128ms",
        color: "#10B981",
    },
    {
        title: "Agent Workflows",
        value: "6 Active Agents",
        color: "#F59E0B",
    },
    {
        title: "Embedding Dimensions",
        value: "3072",
        color: "#6366F1",
    },
    {
        title: "Vector Search Speed",
        value: "<150ms",
        color: "#EC4899",
    },
];

function CapabilityDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI CAPABILITIES
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Production AI Metrics
                </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {capabilityMetrics.map((metric, index) => (
                    <motion.div
                        key={metric.title}
                        whileHover={{
                            y: -6,
                            scale: 1.02,
                        }}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.08,
                        }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 h-2 rounded-full"
                            style={{
                                backgroundColor: metric.color,
                            }}
                        />

                        <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            {metric.title}
                        </p>

                        <h4
                            className="mt-3 text-2xl font-bold"
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
// Neural Background Decoration
// ============================================================

function NeuralBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-30, 30, -30],
                        opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4 + (i % 5),
                        delay: i * 0.1,
                    }}
                    className="absolute h-1 w-1 rounded-full bg-cyan-400"
                    style={{
                        left: `${(i * 9) % 100}%`,
                        top: `${(i * 13) % 100}%`,
                    }}
                />
            ))}
        </div>
    );
}

export default function AISkillsUniverse() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-32"
        >
            <NeuralBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_60%)]" />

            <motion.div
                variants={staggerContainer(0.18)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container-ai relative z-10"
            >
                {/* Heading */}

                <motion.div variants={fadeUp} className="text-center">
                    <div className="status-pill mx-auto w-fit">
                        <span className="status-dot" />
                        AI SKILLS UNIVERSE
                    </div>

                    <h2 className="section-title mt-6 hero-gradient">
                        MY AI TECHNOLOGY STACK
                    </h2>

                    <p className="section-subtitle mx-auto mt-6 max-w-3xl">
                        Production AI engineering across LLMs, GraphRAG, Vector Search,
                        Multi-Agent Systems, AI Infrastructure and Cloud Deployment.
                    </p>
                </motion.div>

                {/* Orbit + Intro */}

                <div className="mt-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div variants={heroItem}>
                        <AIUniverseOrbit />
                    </motion.div>

                    <motion.div variants={heroItem}>
                        <div className="glass-card rounded-[34px] border border-cyan-400/10 p-8 h-full">
                            <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                                AI EXPERTISE
                            </p>

                            <h3 className="mt-4 text-4xl font-semibold text-white">
                                Technologies I Use Every Day
                            </h3>

                            <p className="mt-6 leading-8 text-slate-400">
                                My expertise spans the complete AI engineering lifecycle —
                                retrieval, reasoning, orchestration, inference,
                                observability and deployment.
                            </p>

                            <div className="mt-10 space-y-4">
                                {[
                                    "GraphRAG & Knowledge Graphs",
                                    "Multi-Agent AI with LangGraph",
                                    "Vector Search & Embeddings",
                                    "LLM APIs & Inference",
                                    "FastAPI AI Backends",
                                    "Docker & Kubernetes Deployment",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-slate-300">
                                        <Sparkles size={18} className="text-cyan-300" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skill Categories */}

                <motion.div
                    variants={staggerContainer(0.12)}
                    className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                >
                    {skillCategories.map((category) => (
                        <motion.div key={category.title} variants={heroItem}>
                            <SkillCategoryCard category={category} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* =====================================================
      AI Technology Constellation
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <AIConstellation />
                </motion.div>

                {/* =====================================================
      Capability Dashboard
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <CapabilityDashboard />
                </motion.div>
            </motion.div>
        </section>
    );
}