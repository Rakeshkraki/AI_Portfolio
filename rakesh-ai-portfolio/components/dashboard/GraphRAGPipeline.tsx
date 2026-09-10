"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Database,
    Network,
    BrainCircuit,
    Search,
    Sparkles,
} from "lucide-react";

const PIPELINE = [
    {
        title: "Documents",
        description: "PDFs • Docs • Knowledge Base",
        icon: FileText,
    },
    {
        title: "Embeddings",
        description: "OpenAI Embeddings",
        icon: Sparkles,
    },
    {
        title: "Vector Database",
        description: "Pinecone / Qdrant / ChromaDB",
        icon: Database,
    },
    {
        title: "Knowledge Graph",
        description: "Neo4j Graph Database",
        icon: Network,
    },
    {
        title: "Hybrid Retrieval",
        description: "Vector + Graph Traversal",
        icon: Search,
    },
    {
        title: "GPT-5 Response",
        description: "LLM + Context Generation",
        icon: BrainCircuit,
    },
];

export default function GraphRAGPipeline() {
    return (
        <section className="glass-card rounded-card p-8">
            {/* Header */}

            <div className="mb-10">
                <span className="badge-glow">GraphRAG Architecture</span>

                <h2 className="mt-5 text-3xl font-bold text-white">
                    Enterprise GraphRAG Retrieval Pipeline
                </h2>

                <p className="mt-4 max-w-2xl text-slate-400">
                    A production-ready Retrieval-Augmented Generation pipeline combining
                    embeddings, vector search, Neo4j knowledge graphs, hybrid retrieval,
                    and GPT-5 response generation.
                </p>
            </div>

            {/* Desktop Pipeline */}

            <div className="hidden lg:block overflow-x-auto">
                <div className="flex min-w-[1100px] items-center justify-between gap-4 py-6">
                    {PIPELINE.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={step.title} className="flex items-center">
                                <motion.div
                                    whileHover={{ scale: 1.04, y: -4 }}
                                    className="w-44 rounded-2xl border border-cyan-400/15 bg-slate-900/60 p-5 backdrop-blur-xl"
                                >
                                    <div className="icon-box mb-4">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-sm font-semibold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-6 text-slate-400">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {index !== PIPELINE.length - 1 && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.15,
                                            duration: 0.6,
                                        }}
                                        className="mx-3 h-[2px] w-14 origin-left bg-gradient-to-r from-cyan-400 to-violet-500"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Pipeline */}

            <div className="space-y-6 lg:hidden">
                {PIPELINE.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <div key={step.title}>
                            <motion.div
                                whileHover={{ x: 4 }}
                                className="rounded-2xl border border-cyan-400/10 bg-slate-900/50 p-5"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="icon-box-sm">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {index !== PIPELINE.length - 1 && (
                                <div className="ml-5 h-6 border-l border-cyan-400/20" />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* SVG Architecture */}

            <div className="mt-16 rounded-3xl border border-cyan-400/10 bg-slate-950/70 p-6">
                <svg viewBox="0 0 760 240" className="w-full">
                    <defs>
                        <linearGradient
                            id="pipelineGradient"
                            x1="0%"
                            x2="100%"
                            y1="0%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>

                    {PIPELINE.map((step, index) => {
                        const x = 30 + index * 120;

                        return (
                            <g key={step.title}>
                                <rect
                                    x={x}
                                    y="70"
                                    width="95"
                                    height="80"
                                    rx="14"
                                    fill="rgba(34,211,238,0.06)"
                                    stroke="rgba(34,211,238,0.25)"
                                />

                                <text
                                    x={x + 47}
                                    y="102"
                                    fill="#E5E7EB"
                                    fontSize="11"
                                    textAnchor="middle"
                                    fontFamily="Inter"
                                >
                                    {step.title}
                                </text>

                                {index !== PIPELINE.length - 1 && (
                                    <line
                                        x1={x + 95}
                                        y1="110"
                                        x2={x + 120}
                                        y2="110"
                                        stroke="url(#pipelineGradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* Tech Stack */}

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                    "Neo4j Knowledge Graph",
                    "OpenAI Embeddings",
                    "Hybrid Search",
                    "Vector Similarity Retrieval",
                    "Graph Traversal",
                    "GPT-5 Context Generation",
                ].map((item) => (
                    <div
                        key={item}
                        className="rounded-xl border border-cyan-400/10 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-300"
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Footer Summary */}

            <div className="mt-12 rounded-2xl border border-cyan-400/15 bg-cyan-500/10 p-6">
                <h3 className="text-lg font-semibold text-white">
                    Production GraphRAG Workflow
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                    This architecture combines semantic embeddings with graph traversal to
                    improve retrieval accuracy, contextual reasoning, and enterprise
                    knowledge discovery before generating responses with GPT-5.
                </p>
            </div>
        </section>
    );
}