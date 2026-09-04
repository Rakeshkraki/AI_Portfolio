"use client";

// ============================================================
// components/skills/AISkillsUniverse.tsx
// Interactive AI Skills Universe
// Part 1/4
// ============================================================

import {motion} from "framer-motion";
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
    {name: "GPT-5", angle: 0, radius: 170, color: "#22D3EE"},
    {name: "LangGraph", angle: 40, radius: 170, color: "#8B5CF6"},
    {name: "Neo4j", angle: 80, radius: 170, color: "#10B981"},
    {name: "Qdrant", angle: 120, radius: 170, color: "#F59E0B"},
    {name: "Docker", angle: 160, radius: 170, color: "#2563EB"},
    {name: "Python", angle: 200, radius: 170, color: "#FBBF24"},
    {name: "FastAPI", angle: 240, radius: 170, color: "#10B981"},
    {name: "Kubernetes", angle: 280, radius: 170, color: "#6366F1"},
    {name: "Redis", angle: 320, radius: 170, color: "#EF4444"},
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
                    animate={{rotate: 360}}
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
                <Brain size={44} className="text-cyan-300"/>

                <motion.div
                    animate={{rotate: 360}}
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
                        animate={{rotate: -360}}
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

            {Array.from({length: 30}).map((_, i) => (
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
                <Icon size={24}/>
            </div>

            <h3 className="text-xl font-semibold text-white">
                {category.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                    <motion.span
                        key={skill}
                        whileHover={{scale: 1.05}}
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
    {name: "GPT-5", x: 50, y: 18, color: "#22D3EE", size: 16},
    {name: "LangGraph", x: 28, y: 34, color: "#8B5CF6", size: 14},
    {name: "Neo4j", x: 72, y: 34, color: "#10B981", size: 14},
    {name: "Qdrant", x: 18, y: 55, color: "#F59E0B", size: 14},
    {name: "Embeddings", x: 82, y: 56, color: "#38BDF8", size: 13},
    {name: "FastAPI", x: 34, y: 76, color: "#14B8A6", size: 13},
    {name: "Docker", x: 66, y: 76, color: "#2563EB", size: 13},
    {name: "Kubernetes", x: 50, y: 92, color: "#6366F1", size: 15},
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
                                initial={{pathLength: 0, opacity: 0}}
                                whileInView={{
                                    pathLength: 1,
                                    opacity: 0.5,
                                }}
                                viewport={{once: true}}
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
                        initial={{opacity: 0, scale: 0}}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{once: true}}
                        transition={{delay: index * 0.08}}
                        whileHover={{scale: 1.15}}
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
                                    style={{color: node.color}}
                                >
                  {node.name}
                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}

                {/* Floating Particles */}

                {Array.from({length: 40}).map((_, i) => (
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
                        viewport={{once: true}}
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
                            style={{color: metric.color}}
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
            {Array.from({length: 50}).map((_, i) => (
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

// ============================================================
// AI Proficiency Radar
// ============================================================

const radarSkills = [
    { label: "LLMs", value: 96 },
    { label: "GraphRAG", value: 94 },
    { label: "LangGraph", value: 92 },
    { label: "Vector DB", value: 95 },
    { label: "AI Infra", value: 90 },
    { label: "Backend APIs", value: 93 },
];

function AIProficiencyRadar() {
    const center = 160;
    const radius = 120;

    const points = radarSkills.map((skill, index) => {
        const angle =
            (Math.PI * 2 * index) / radarSkills.length - Math.PI / 2;

        const r = (skill.value / 100) * radius;

        return {
            ...skill,
            x: center + Math.cos(angle) * r,
            y: center + Math.sin(angle) * r,
            outerX: center + Math.cos(angle) * radius,
            outerY: center + Math.sin(angle) * radius,
        };
    });

    const polygon = points
        .map((p) => `${p.x},${p.y}`)
        .join(" ");

    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI PROFICIENCY MAP
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Engineering Strength Across AI Domains
                </h3>
            </div>

            <div className="flex justify-center">
                <svg viewBox="0 0 320 320" className="w-full max-w-md">
                    {[40, 70, 100, 120].map((r) => (
                        <circle
                            key={r}
                            cx="160"
                            cy="160"
                            r={r}
                            fill="none"
                            stroke="#22D3EE22"
                        />
                    ))}

                    {points.map((p, i) => (
                        <g key={p.label}>
                            <line
                                x1="160"
                                y1="160"
                                x2={p.outerX}
                                y2={p.outerY}
                                stroke="#22D3EE33"
                            />

                            <text
                                x={p.outerX}
                                y={p.outerY - 8}
                                fill="#94A3B8"
                                fontSize="10"
                                textAnchor="middle"
                            >
                                {p.label}
                            </text>
                        </g>
                    ))}

                    <motion.polygon
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        points={polygon}
                        fill="#22D3EE33"
                        stroke="#22D3EE"
                        strokeWidth="2"
                    />

                    {points.map((p) => (
                        <circle
                            key={p.label}
                            cx={p.x}
                            cy={p.y}
                            r="5"
                            fill="#22D3EE"
                        />
                    ))}
                </svg>
            </div>
        </motion.div>
    );
}

// ============================================================
// GraphRAG Ecosystem
// ============================================================

const graphEcosystem = [
    {
        title: "Document Chunking",
        color: "#22D3EE",
        text: "Split enterprise knowledge into semantic chunks.",
    },
    {
        title: "Embedding Generation",
        color: "#10B981",
        text: "Generate dense vectors using embedding models.",
    },
    {
        title: "Vector Retrieval",
        color: "#F59E0B",
        text: "Retrieve relevant context using similarity search.",
    },
    {
        title: "Knowledge Graph Traversal",
        color: "#8B5CF6",
        text: "Expand entities using graph relationships.",
    },
    {
        title: "LangGraph Planner",
        color: "#EC4899",
        text: "Select retrieval strategy and reasoning workflow.",
    },
    {
        title: "Grounded LLM Response",
        color: "#6366F1",
        text: "Generate explainable enterprise answers.",
    },
];

function GraphRAGEcosystem() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-10">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    GRAPH RAG ECOSYSTEM
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    End-to-End AI Retrieval Architecture
                </h3>
            </div>

            <div className="space-y-6">
                {graphEcosystem.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                        className="flex gap-5"
                    >
                        <div
                            className="mt-2 h-3 w-3 rounded-full"
                            style={{
                                backgroundColor: step.color,
                                boxShadow: `0 0 10px ${step.color}`,
                            }}
                        />

                        <div className="flex-1">
                            <h4
                                className="text-lg font-semibold"
                                style={{ color: step.color }}
                            >
                                {step.title}
                            </h4>

                            <p className="mt-2 text-slate-400">
                                {step.text}
                            </p>

                            {index !== graphEcosystem.length - 1 && (
                                <div className="ml-[5px] mt-4 h-10 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Infrastructure Cards
// ============================================================

const infraCards = [
    {
        title: "LLM Inference",
        icon: Brain,
        color: "#22D3EE",
        desc: "GPT-5, Llama 3, Mistral, vLLM deployment pipelines.",
    },
    {
        title: "Retrieval Layer",
        icon: Database,
        color: "#10B981",
        desc: "Qdrant, Pinecone, FAISS, hybrid semantic retrieval.",
    },
    {
        title: "Agent Runtime",
        icon: Network,
        color: "#8B5CF6",
        desc: "LangGraph, CrewAI, MCP orchestration.",
    },
    {
        title: "Observability",
        icon: Cpu,
        color: "#F59E0B",
        desc: "LangSmith, OpenTelemetry, tracing & evaluation.",
    },
];

function InfrastructureGrid() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
        >
            {infraCards.map((card, index) => {
                const Icon = card.icon;

                return (
                    <motion.div
                        key={card.title}
                        whileHover={{ y: -6, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="glass-card rounded-[28px] border border-cyan-400/10 p-7"
                    >
                        <div
                            className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${card.color}18`,
                                color: card.color,
                            }}
                        >
                            <Icon size={24} />
                        </div>

                        <h4 className="text-xl font-semibold text-white">
                            {card.title}
                        </h4>

                        <p className="mt-4 text-slate-400 leading-7">
                            {card.desc}
                        </p>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

// ============================================================
// AI Learning Roadmap
// ============================================================

const roadmap = [
    {
        stage: "Foundation",
        year: "2024",
        title: "LLMs & Prompt Engineering",
        color: "#22D3EE",
    },
    {
        stage: "Retrieval",
        year: "2024",
        title: "Vector Databases & Embeddings",
        color: "#10B981",
    },
    {
        stage: "Reasoning",
        year: "2025",
        title: "GraphRAG & Knowledge Graphs",
        color: "#8B5CF6",
    },
    {
        stage: "Agents",
        year: "2025",
        title: "LangGraph Multi-Agent Systems",
        color: "#EC4899",
    },
    {
        stage: "Infrastructure",
        year: "2026",
        title: "Production AI Platforms",
        color: "#6366F1",
    },
];

function LearningRoadmap() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-10">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI LEARNING ROADMAP
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Continuous Evolution Into AI Infrastructure
                </h3>
            </div>

            <div className="space-y-8">
                {roadmap.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
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

                            {index !== roadmap.length - 1 && (
                                <div className="mt-2 h-14 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                            )}
                        </div>

                        <div>
              <span className="mono text-xs text-cyan-300 tracking-[0.25em]">
                {item.year}
              </span>

                            <p
                                className="mt-1 text-xs uppercase tracking-[0.25em]"
                                style={{ color: item.color }}
                            >
                                {item.stage}
                            </p>

                            <h4 className="mt-2 text-xl font-semibold text-white">
                                {item.title}
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Certifications & Research Badges
// ============================================================

const aiBadges = [
    {
        title: "GraphRAG Architecture",
        type: "Advanced AI",
        color: "#22D3EE",
    },
    {
        title: "LangGraph Agent Systems",
        type: "Agentic AI",
        color: "#8B5CF6",
    },
    {
        title: "Vector Database Engineering",
        type: "Retrieval AI",
        color: "#10B981",
    },
    {
        title: "LLM Evaluation Pipelines",
        type: "AI Evaluation",
        color: "#F59E0B",
    },
    {
        title: "AI Infrastructure Engineering",
        type: "Production AI",
        color: "#6366F1",
    },
    {
        title: "Prompt Engineering",
        type: "Foundation Models",
        color: "#EC4899",
    },
];

function ResearchBadges() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI SPECIALIZATION
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Focus Areas in AI Engineering
                </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {aiBadges.map((badge, index) => (
                    <motion.div
                        key={badge.title}
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
                        transition={{ delay: index * 0.08 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                                color: badge.color,
                                backgroundColor: `${badge.color}15`,
                            }}
                        >
                            {badge.type}
                        </div>

                        <h4 className="text-lg font-semibold text-white">
                            {badge.title}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Currently Exploring
// ============================================================

const exploring = [
    "Model Context Protocol (MCP)",
    "OpenAI Agents SDK",
    "vLLM Distributed Inference",
    "DSPy Framework",
    "Agent Memory Systems",
    "Knowledge Graph Reasoning",
    "OpenTelemetry for AI",
    "Multimodal RAG",
    "LlamaIndex Workflows",
    "Hybrid Graph + Vector Retrieval",
    "AI Guardrails",
    "Inference Optimization",
];

function CurrentlyExploring() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    CURRENTLY EXPLORING
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Emerging AI Technologies
                </h3>
            </div>

            <div className="flex flex-wrap gap-4">
                {exploring.map((tech, index) => (
                    <motion.div
                        key={tech}
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3 + index * 0.1,
                        }}
                        whileHover={{ scale: 1.08 }}
                        className="rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-5 py-3 text-sm text-cyan-300 backdrop-blur-xl"
                    >
                        {tech}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Ecosystem Statistics
// ============================================================

const ecosystemStats = [
    {
        title: "Embedding Dimensions",
        value: "3072",
        color: "#22D3EE",
    },
    {
        title: "Knowledge Graph Nodes",
        value: "250K+",
        color: "#8B5CF6",
    },
    {
        title: "Vector Chunks Indexed",
        value: "1 Million+",
        color: "#10B981",
    },
    {
        title: "Multi-Agent Workflows",
        value: "12",
        color: "#F59E0B",
    },
    {
        title: "Streaming APIs",
        value: "20+",
        color: "#EC4899",
    },
    {
        title: "Inference Throughput",
        value: "500 tok/sec",
        color: "#6366F1",
    },
];

function EcosystemStats() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI ECOSYSTEM METRICS
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Scale of Modern AI Systems
                </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {ecosystemStats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
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
                            style={{ backgroundColor: stat.color }}
                        />

                        <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            {stat.title}
                        </p>

                        <h4
                            className="mt-3 text-2xl font-bold"
                            style={{ color: stat.color }}
                        >
                            {stat.value}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// CTA to Projects
// ============================================================

function SkillsCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[40px] border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-indigo-500/10 p-10"
        >
            {/* Background Glow */}

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 45,
                    ease: "linear",
                }}
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-cyan-400/10"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 50,
                    ease: "linear",
                }}
                className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full border border-violet-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    AI ENGINEERING PORTFOLIO
                </div>

                <h3 className="text-4xl font-semibold text-white">
                    Turning AI Concepts Into Production Systems.
                </h3>

                <p className="mt-6 leading-8 text-slate-300">
                    Explore real-world AI projects including GraphRAG platforms,
                    Multi-Agent AI workflows, semantic search systems,
                    enterprise copilots and scalable AI infrastructure.
                </p>

                <motion.a
                    whileHover={{ scale: 1.04 }}
                    href="#projects"
                    className="btn-primary mt-8 inline-flex items-center gap-3"
                >
                    View AI Projects
                    <Sparkles size={18} />
                </motion.a>
            </div>
        </motion.div>
    );
}

export default function AISkillsUniverse() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-32"
        >
            <NeuralBackground/>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_60%)]"/>

            <motion.div
                variants={staggerContainer(0.18)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="container-ai relative z-10"
            >
                {/* Heading */}

                <motion.div variants={fadeUp} className="text-center">
                    <div className="status-pill mx-auto w-fit">
                        <span className="status-dot"/>
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
                        <AIUniverseOrbit/>
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
                                        <Sparkles size={18} className="text-cyan-300"/>
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
                            <SkillCategoryCard category={category}/>
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
                    <AIConstellation/>
                </motion.div>

                {/* =====================================================
      Capability Dashboard
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <CapabilityDashboard/>
                </motion.div>

                {/* =====================================================
      Radar + GraphRAG Ecosystem
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28 grid gap-8 lg:grid-cols-[1fr_1fr]"
                >
                    <motion.div variants={fadeUp}>
                        <AIProficiencyRadar />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <GraphRAGEcosystem />
                    </motion.div>
                </motion.div>

                {/* =====================================================
      Infrastructure Grid
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <InfrastructureGrid />
                </motion.div>

                {/* =====================================================
      AI Learning Roadmap
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <LearningRoadmap />
                </motion.div>

                {/* =====================================================
      AI Specialization Badges
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <ResearchBadges />
                </motion.div>

                {/* =====================================================
      Currently Exploring
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <CurrentlyExploring />
                </motion.div>

                {/* =====================================================
      AI Ecosystem Statistics
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <EcosystemStats />
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