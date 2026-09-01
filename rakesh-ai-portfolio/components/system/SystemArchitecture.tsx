"use client";

// ============================================================
// components/system/SystemArchitecture.tsx
// AI Infrastructure Architecture Section
// Part 1/3
// ============================================================

import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Database,
    Network,
    Cpu,
    Search,
    Workflow,
    ShieldCheck,
    Activity,
    ArrowRight,
} from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion";
import {useFrame} from "@react-three/fiber";

// ------------------------------------------------------------
// Architecture Modules
// ------------------------------------------------------------

const modules = [
    {
        id: "graphrag",
        title: "GraphRAG Engine",
        icon: Network,
        color: "#22D3EE",
        description:
            "Hybrid retrieval combining vector search with knowledge graph traversal.",
        tech: ["Neo4j", "Cypher", "LangGraph", "RAG"],
        x: 10,
        y: 22,
    },
    {
        id: "agents",
        title: "Multi-Agent System",
        icon: Workflow,
        color: "#8B5CF6",
        description:
            "Autonomous specialized AI agents collaborating through orchestration.",
        tech: ["LangGraph", "CrewAI", "AutoGen", "MCP"],
        x: 38,
        y: 10,
    },
    {
        id: "llm",
        title: "Inference Layer",
        icon: Brain,
        color: "#38BDF8",
        description:
            "OpenAI GPT, Llama, Mistral and DeepSeek inference orchestration.",
        tech: ["OpenAI", "vLLM", "Llama 3", "Mistral"],
        x: 70,
        y: 22,
    },
    {
        id: "vector",
        title: "Vector Database",
        icon: Search,
        color: "#10B981",
        description:
            "Semantic search using dense embeddings for contextual retrieval.",
        tech: ["Qdrant", "Pinecone", "FAISS"],
        x: 80,
        y: 55,
    },
    {
        id: "graphdb",
        title: "Knowledge Graph",
        icon: Database,
        color: "#F59E0B",
        description:
            "Enterprise entity relationships and graph traversal.",
        tech: ["Neo4j", "GraphDB", "Cypher"],
        x: 55,
        y: 72,
    },
    {
        id: "observability",
        title: "Observability",
        icon: Activity,
        color: "#EF4444",
        description:
            "Tracing, latency, evaluation and AI pipeline monitoring.",
        tech: ["LangSmith", "OpenTelemetry", "Prometheus"],
        x: 24,
        y: 72,
    },
    {
        id: "security",
        title: "AI Guardrails",
        icon: ShieldCheck,
        color: "#E879F9",
        description:
            "Prompt validation, RBAC, policy enforcement and safety.",
        tech: ["Guardrails AI", "RBAC", "JWT"],
        x: 8,
        y: 50,
    },
    {
        id: "compute",
        title: "GPU Compute",
        icon: Cpu,
        color: "#6366F1",
        description:
            "Scalable inference infrastructure for production deployment.",
        tech: ["Docker", "CUDA", "Kubernetes", "vLLM"],
        x: 62,
        y: 50,
    },
];

// ------------------------------------------------------------
// Connections
// ------------------------------------------------------------

const connections = [
    ["graphrag", "agents"],
    ["agents", "llm"],
    ["llm", "vector"],
    ["vector", "graphdb"],
    ["graphdb", "graphrag"],
    ["agents", "compute"],
    ["compute", "llm"],
    ["observability", "agents"],
    ["observability", "llm"],
    ["security", "agents"],
    ["security", "llm"],
];

// ============================================================
// Animated SVG Connections
// ============================================================

function ArchitectureConnections() {
    const packetOffset = useRef(0);

    useFrame(() => {
        packetOffset.current += 0.005;
        if (packetOffset.current > 1) packetOffset.current = 0;
    });

    const getModule = (id: string) =>
        modules.find((m) => m.id === id)!;

    return (
        <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient
                    id="connectionGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                </linearGradient>

                <filter id="glow">
                    <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />

                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {connections.map(([fromId, toId], index) => {
                const from = getModule(fromId);
                const to = getModule(toId);

                const path = `M ${from.x} ${from.y}
                      C ${(from.x + to.x) / 2} ${from.y - 5},
                        ${(from.x + to.x) / 2} ${to.y + 5},
                        ${to.x} ${to.y}`;

                return (
                    <g key={index}>
                        {/* Base Line */}

                        <path
                            d={path}
                            stroke="url(#connectionGradient)"
                            strokeWidth="0.4"
                            fill="none"
                            opacity="0.25"
                        />

                        {/* Glow */}

                        <path
                            d={path}
                            stroke="#22D3EE"
                            strokeWidth="0.15"
                            fill="none"
                            opacity="0.8"
                            filter="url(#glow)"
                        />

                        {/* Animated Packet */}

                        <DataPacket path={path} delay={index * 0.2} />
                    </g>
                );
            })}
        </svg>
    );
}

// ============================================================
// Moving Data Packets
// ============================================================

function DataPacket({
                        path,
                        delay,
                    }: {
    path: string;
    delay: number;
}) {
    const [offset, setOffset] = useState(delay);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prev) => (prev > 1 ? 0 : prev + 0.01));
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.circle
            r="0.7"
            fill="#22D3EE"
            filter="url(#glow)"
        >
            <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path={path}
                begin={`${delay}s`}
            />
        </motion.circle>
    );
}

// ============================================================
// Rotating Energy Rings
// ============================================================

function BackgroundRings() {
    return (
        <>
            {[42, 58, 74].map((size, index) => (
                <motion.div
                    key={size}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 24 + index * 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 rounded-full border border-cyan-400/10"
                    style={{
                        width: size + "%",
                        height: size + "%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </>
    );
}

// ============================================================
// AI Pulse Waves
// ============================================================

function PulseWaves() {
    return (
        <>
            {[0, 1, 2].map((wave) => (
                <motion.div
                    key={wave}
                    initial={{
                        scale: 0.6,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1.5,
                        opacity: [0.5, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: wave,
                        ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-20 w-20 rounded-full border border-cyan-400/20"
                    style={{
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </>
    );
}

export default function SystemArchitecture() {
    const [activeModule, setActiveModule] = useState("graphrag");

    const selected = modules.find(
        (m) => m.id === activeModule
    );

    return (
        <section
            id="system"
            className="relative overflow-hidden py-32"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

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
                        AI SYSTEM ARCHITECTURE
                    </div>

                    <h2 className="section-title mt-6 hero-gradient">
                        ENTER THE AI SYSTEM
                    </h2>

                    <p className="section-subtitle mx-auto mt-6 max-w-3xl">
                        A production-grade AI infrastructure combining
                        GraphRAG, Knowledge Graphs, Multi-Agent Systems,
                        Vector Retrieval, GPU Inference and Observability.
                    </p>
                </motion.div>
                {/* Architecture Grid */}

                <div className="mt-20 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
                    {/* LEFT SIDE — Architecture Diagram */}

                    <motion.div
                        variants={fadeUp}
                        className="glass-card relative aspect-square overflow-hidden rounded-[32px] border border-cyan-400/10 bg-gradient-to-br from-[#071018] to-[#040506]"
                    >
                        {/* Grid */}

                        <div className="absolute inset-0 opacity-20">
                            <svg
                                viewBox="0 0 100 100"
                                className="h-full w-full"
                            >
                                {Array.from({ length: 11 }).map((_, i) => (
                                    <g key={i}>
                                        <line
                                            x1={i * 10}
                                            y1="0"
                                            x2={i * 10}
                                            y2="100"
                                            stroke="#123"
                                            strokeWidth="0.15"
                                        />

                                        <line
                                            x1="0"
                                            y1={i * 10}
                                            x2="100"
                                            y2={i * 10}
                                            stroke="#123"
                                            strokeWidth="0.15"
                                        />
                                    </g>
                                ))}
                            </svg>
                        </div>

                        {/* Connections */}

                        <BackgroundRings />
                        <PulseWaves />

                        <ArchitectureConnections />

                        {/* Modules */}

                        {modules.map((module) => {
                            const Icon = module.icon;
                            const active =
                                module.id === activeModule;

                            return (
                                <motion.button
                                    key={module.id}
                                    whileHover={{
                                        scale: 1.08,
                                    }}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                    onClick={() =>
                                        setActiveModule(module.id)
                                    }
                                    className="absolute -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        left: `${module.x}%`,
                                        top: `${module.y}%`,
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            boxShadow: active
                                                ? `0 0 40px ${module.color},0 0 70px ${module.color}66`
                                                : `0 0 15px ${module.color}33`,
                                            scale: active ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.35 }}
                                        className={`relative flex h-16 w-16 items-center justify-center rounded-full border ${
                                            active
                                                ? "border-white/40 bg-white/10"
                                                : "border-white/10 bg-black/40"
                                        }`}
                                        style={{ color: module.color }}
                                    >
                                        <Icon size={26} />

                                        {active && (
                                            <motion.div
                                                layoutId="activePulse"
                                                className="absolute inset-0 rounded-full border border-cyan-300/40"
                                                animate={{
                                                    scale: [1, 1.25, 1],
                                                    opacity: [0.8, 0.2, 0.8],
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                </motion.button>
                            );
                        })}

                        {/* Floating AI Labels */}

                        {[
                            { text: "RETRIEVAL", x: 18, y: 8 },
                            { text: "REASONING", x: 72, y: 8 },
                            { text: "VECTOR SEARCH", x: 80, y: 88 },
                            { text: "OBSERVABILITY", x: 15, y: 88 },
                        ].map((label) => (
                            <motion.div
                                key={label.text}
                                animate={{
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    delay: label.x / 20,
                                }}
                                className="absolute text-[10px] font-mono tracking-[0.3em] text-cyan-300/50"
                                style={{
                                    left: `${label.x}%`,
                                    top: `${label.y}%`,
                                }}
                            >
                                {label.text}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* RIGHT SIDE — Module Details */}

                    <motion.div variants={fadeUp}>
                        {selected && (
                            <motion.div
                                key={selected.id}
                                initial={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                className="glass-card h-full rounded-[32px] border border-cyan-400/15 p-8"
                            >
                                <div
                                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{
                                        backgroundColor: `${selected.color}20`,
                                        color: selected.color,
                                    }}
                                >
                                    <selected.icon size={30} />
                                </div>

                                <h3 className="text-2xl font-semibold text-white">
                                    {selected.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {selected.description}
                                </p>
                                {/* Technology Pills */}

                                <div className="mt-8">
                                    <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                                        TECHNOLOGY STACK
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-3">
                                        {selected.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Live Status */}

                                <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-5">
                                    <div className="mb-4 flex items-center justify-between">
                                        <p className="mono text-xs uppercase tracking-[0.3em] text-slate-500">
                                            SYSTEM STATUS
                                        </p>

                                        <div className="status-pill">
                                            <span className="status-dot" />
                                            ONLINE
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            "Latency Optimized",
                                            "Context Retrieved",
                                            "Agent Routing Active",
                                            "Observability Enabled",
                                        ].map((status) => (
                                            <div
                                                key={status}
                                                className="flex items-center justify-between text-sm text-slate-300"
                                            >
                                                {status}

                                                <ArrowRight
                                                    size={15}
                                                    className="text-cyan-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Live Metrics */}

                                <div className="mt-10 grid grid-cols-2 gap-4">
                                    {[
                                        ["Latency", "128ms"],
                                        ["Context Size", "32K"],
                                        ["Agents", "6"],
                                        ["Recall", "98.3%"],
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            className="rounded-xl border border-white/10 bg-black/20 p-4"
                                        >
                                            <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                                {label}
                                            </p>

                                            <p className="mt-2 text-xl font-semibold text-cyan-300">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}