"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    Database,
    Network,
    ServerCog,
    Activity,
    Cpu,
    CheckCircle2,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

const METRICS = [
    {
        title: "GraphRAG Pipelines",
        value: "06",
        change: "+2 this month",
        icon: Network,
    },
    {
        title: "LLM APIs Built",
        value: "20+",
        change: "OpenAI • Claude • Gemini",
        icon: BrainCircuit,
    },
    {
        title: "Vector Indexes",
        value: "12",
        change: "Pinecone • ChromaDB • Qdrant",
        icon: Database,
    },
    {
        title: "AI Backend Services",
        value: "15+",
        change: "FastAPI Microservices",
        icon: ServerCog,
    },
];

const PROVIDERS = [
    { name: "OpenAI GPT-5", usage: 96 },
    { name: "Claude API", usage: 88 },
    { name: "Gemini API", usage: 81 },
    { name: "OpenAI Embeddings", usage: 92 },
];

const VECTOR_DATABASES = [
    { name: "Neo4j Knowledge Graph", status: "Healthy" },
    { name: "Pinecone Vector Store", status: "Healthy" },
    { name: "ChromaDB Local Index", status: "Healthy" },
    { name: "Qdrant Semantic Search", status: "Healthy" },
];

const ACTIVITY_FEED = [
    "GraphRAG retrieval pipeline deployed successfully.",
    "GPT-5 structured output endpoint optimized.",
    "Neo4j hybrid search latency reduced below 150ms.",
    "LangGraph multi-agent workflow executed successfully.",
    "Docker AI backend container published to registry.",
];

export default function AIDashboard() {
    return (
        <section className="section-spacing relative">
            <div className="container-ai">
                {/* Header */}

                <ScrollReveal>
                    <div className="text-center">
                        <span className="badge-glow">AI Dashboard</span>

                        <h2 className="section-title mt-6">
                            AI Backend Engineering Control Center
                        </h2>

                        <p className="section-description mt-6 mx-auto max-w-3xl">
                            A visualization of the technologies, services, GraphRAG pipelines,
                            AI agents, vector databases, and LLM infrastructure I build.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Metrics */}

                <motion.div
                    variants={staggerContainer(0.12, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
                >
                    {METRICS.map((metric) => {
                        const Icon = metric.icon;

                        return (
                            <motion.div
                                key={metric.title}
                                variants={fadeUpChild}
                                whileHover={{ y: -6 }}
                                className="dashboard-card"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="icon-box">
                                        <Icon size={24} />
                                    </div>

                                    <ArrowUpRight size={18} className="text-cyan-400" />
                                </div>

                                <h3 className="mt-8 hero-gradient text-4xl font-bold">
                                    {metric.value}
                                </h3>

                                <p className="mt-2 text-white font-medium">
                                    {metric.title}
                                </p>

                                <p className="mt-3 text-sm text-slate-400">
                                    {metric.change}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Main Dashboard */}

                <div className="mt-20 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
                    {/* GraphRAG Pipeline */}

                    <ScrollReveal direction="left">
                        <div className="glass-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <Network className="text-cyan-400" size={24} />

                                <h3 className="text-2xl font-semibold text-white">
                                    Enterprise GraphRAG Pipeline
                                </h3>
                            </div>

                            <div className="space-y-5">
                                {[
                                    "Documents Ingestion",
                                    "Embedding Generation",
                                    "Vector Search",
                                    "Neo4j Knowledge Graph",
                                    "Hybrid Retrieval",
                                    "GPT-5 Response Generation",
                                ].map((step, index) => (
                                    <div key={step}>
                                        <div className="flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-cyan-500/5 p-4">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-300">
                                                {index + 1}
                                            </div>

                                            <span className="text-slate-200">{step}</span>

                                            <CheckCircle2
                                                size={18}
                                                className="ml-auto text-emerald-400"
                                            />
                                        </div>

                                        {index < 5 && (
                                            <div className="ml-4 h-6 border-l border-cyan-500/20" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* AI Agent Status */}

                    <ScrollReveal direction="right">
                        <div className="dashboard-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <Cpu className="text-cyan-400" size={24} />

                                <h3 className="text-xl font-semibold text-white">
                                    AI Agent Status
                                </h3>
                            </div>

                            {[
                                "Planner Agent",
                                "Retriever Agent",
                                "Knowledge Graph Agent",
                                "Response Agent",
                            ].map((agent) => (
                                <div
                                    key={agent}
                                    className="mb-4 flex items-center justify-between rounded-xl bg-white/5 p-4"
                                >
                                    <span className="text-slate-200">{agent}</span>

                                    <span className="flex items-center gap-2 text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                                </div>
                            ))}

                            <div className="mt-8 rounded-xl border border-cyan-400/15 bg-cyan-500/10 p-5">
                                <p className="text-sm text-cyan-300">
                                    Current Workflow
                                </p>

                                <h4 className="mt-2 text-lg font-semibold text-white">
                                    LangGraph Multi-Agent Execution
                                </h4>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* LLM Usage + Vector Health */}

                <div className="mt-20 grid gap-8 lg:grid-cols-2">
                    {/* LLM Usage */}

                    <ScrollReveal direction="left">
                        <div className="glass-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <BrainCircuit className="text-cyan-400" size={24} />

                                <h3 className="text-2xl font-semibold text-white">
                                    LLM Provider Usage
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {PROVIDERS.map((provider) => (
                                    <div key={provider.name}>
                                        <div className="mb-2 flex justify-between">
                      <span className="text-slate-300">
                        {provider.name}
                      </span>

                                            <span className="text-cyan-300">
                        {provider.usage}%
                      </span>
                                        </div>

                                        <div className="h-2 rounded-full bg-slate-800">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${provider.usage}%`,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Vector DB Health */}

                    <ScrollReveal direction="right">
                        <div className="dashboard-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <Database className="text-cyan-400" size={24} />

                                <h3 className="text-2xl font-semibold text-white">
                                    Vector Database Health
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {VECTOR_DATABASES.map((db) => (
                                    <div
                                        key={db.name}
                                        className="flex items-center justify-between rounded-xl bg-white/5 p-4"
                                    >
                                        <span className="text-slate-200">{db.name}</span>

                                        <span className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 size={16} />
                                            {db.status}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Activity Feed */}

                <ScrollReveal className="mt-20">
                    <div className="glass-card rounded-card p-8">
                        <div className="mb-8 flex items-center gap-3">
                            <Activity className="text-cyan-400" size={24} />

                            <h3 className="text-2xl font-semibold text-white">
                                Recent AI Engineering Activity
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {ACTIVITY_FEED.map((activity, index) => (
                                <motion.div
                                    key={activity}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4"
                                >
                                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

                                    <span className="text-slate-300">{activity}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Bottom Summary */}

                <ScrollReveal className="mt-20">
                    <div className="dashboard-card rounded-card p-10 text-center">
                        <Sparkles size={42} className="mx-auto text-cyan-400" />

                        <h3 className="mt-6 text-3xl font-semibold text-white">
                            Enterprise AI Backend Engineering
                        </h3>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            From GraphRAG pipelines and knowledge graphs to AI agents,
                            semantic retrieval, streaming LLM APIs, vector databases,
                            authentication, observability, and cloud deployment —
                            this is the ecosystem I build and optimize.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}