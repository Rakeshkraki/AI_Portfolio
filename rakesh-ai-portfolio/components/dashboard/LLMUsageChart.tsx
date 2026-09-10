"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    Activity,
    Cpu,
    Zap,
    BarChart3,
} from "lucide-react";

const MODELS = [
    {
        name: "OpenAI GPT-5",
        usage: 96,
        requests: "2.4M",
        latency: "180ms",
        color: "from-cyan-400 to-cyan-600",
    },
    {
        name: "OpenAI Embeddings",
        usage: 92,
        requests: "4.8M",
        latency: "85ms",
        color: "from-emerald-400 to-emerald-600",
    },
    {
        name: "Claude API",
        usage: 88,
        requests: "1.6M",
        latency: "210ms",
        color: "from-violet-400 to-violet-600",
    },
    {
        name: "Gemini API",
        usage: 82,
        requests: "1.1M",
        latency: "240ms",
        color: "from-orange-400 to-pink-500",
    },
    {
        name: "LangGraph Agent Runtime",
        usage: 79,
        requests: "620K",
        latency: "120ms",
        color: "from-blue-400 to-indigo-500",
    },
];

const OVERVIEW = [
    {
        label: "Total API Requests",
        value: "10.5M+",
        icon: Activity,
    },
    {
        label: "Average Latency",
        value: "167ms",
        icon: Zap,
    },
    {
        label: "Models Integrated",
        value: "05",
        icon: BrainCircuit,
    },
    {
        label: "Daily AI Workflows",
        value: "1,200+",
        icon: Cpu,
    },
];

export default function LLMUsageChart() {
    return (
        <section className="glass-card rounded-card p-8">
            {/* Header */}

            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <span className="badge-glow">LLM Analytics</span>

                    <h2 className="mt-5 text-3xl font-bold text-white">
                        LLM Usage & Performance Dashboard
                    </h2>

                    <p className="mt-3 text-slate-400">
                        Usage statistics for enterprise AI APIs integrated into backend
                        applications.
                    </p>
                </div>

                <div className="icon-box h-14 w-14 rounded-full">
                    <BarChart3 size={28} />
                </div>
            </div>

            {/* Overview Cards */}

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {OVERVIEW.map((item) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.label}
                            whileHover={{ y: -5 }}
                            className="dashboard-card"
                        >
                            <div className="icon-box mb-6">
                                <Icon size={22} />
                            </div>

                            <h3 className="hero-gradient text-3xl font-bold">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                {item.label}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Usage Bars */}

            <div className="mt-16 space-y-8">
                {MODELS.map((model, index) => (
                    <motion.div
                        key={model.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
                    >
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {model.name}
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    Requests: {model.requests}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-slate-400">Latency</p>

                                <p className="text-cyan-300 font-medium">
                                    {model.latency}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="text-slate-400">Usage</span>

                                <span className="text-cyan-300 font-medium">
                  {model.usage}%
                </span>
                            </div>

                            <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                        width: `${model.usage}%`,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.08,
                                    }}
                                    className={`h-full rounded-full bg-gradient-to-r ${model.color}`}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* API Statistics */}

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-6">
                    <h3 className="mb-5 text-xl font-semibold text-white">
                        API Health Summary
                    </h3>

                    {[
                        "99.98% API Availability",
                        "Streaming Responses Enabled",
                        "Structured Output Support",
                        "Automatic Retry Logic",
                        "Rate Limiting Enabled",
                        "JWT Authentication",
                    ].map((item) => (
                        <div
                            key={item}
                            className="mb-3 flex items-center gap-3"
                        >
                            <div className="h-2 w-2 rounded-full bg-cyan-400" />

                            <span className="text-slate-300">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="rounded-2xl border border-violet-500/10 bg-violet-500/5 p-6">
                    <h3 className="mb-5 text-xl font-semibold text-white">
                        AI Backend Features
                    </h3>

                    {[
                        "FastAPI Async Endpoints",
                        "Redis Response Caching",
                        "Token Usage Monitoring",
                        "Observability & Metrics",
                        "Prompt Version Management",
                        "Multi-Provider Routing",
                    ].map((item) => (
                        <div
                            key={item}
                            className="mb-3 flex items-center gap-3"
                        >
                            <div className="h-2 w-2 rounded-full bg-violet-400" />

                            <span className="text-slate-300">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}

            <div className="mt-16 rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6">
                <h3 className="text-xl font-semibold text-white">
                    Enterprise LLM Infrastructure
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                    This dashboard represents a unified AI backend architecture supporting
                    multiple LLM providers, embeddings, AI agents, streaming APIs,
                    observability, authentication, caching, and production-ready deployment.
                </p>
            </div>
        </section>
    );
}