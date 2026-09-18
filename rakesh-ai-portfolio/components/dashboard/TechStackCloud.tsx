"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    Database,
    Network,
    Bot,
    Cpu,
    Search,
    Cloud,
    Workflow,
} from "lucide-react";

const STACK = [
    {
        title: "GraphRAG Retrieval Systems",
        icon: Search,
        color: "from-cyan-400 to-sky-500",
    },
    {
        title: "Knowledge Graph Engineering",
        icon: Network,
        color: "from-violet-400 to-fuchsia-500",
    },
    {
        title: "LLM Orchestration Pipelines",
        icon: Workflow,
        color: "from-emerald-400 to-cyan-400",
    },
    {
        title: "GPU Inference Infrastructure",
        icon: Cpu,
        color: "from-orange-400 to-red-500",
    },
    {
        title: "AI Observability & Evaluation",
        icon: BrainCircuit,
        color: "from-pink-400 to-violet-500",
    },
];

const ORBIT_ITEMS = [
    { label: "LangChain", x: 15, y: 12 },
    { label: "Neo4j", x: 76, y: 18 },
    { label: "FastAPI", x: 84, y: 56 },
    { label: "Redis", x: 70, y: 86 },
    { label: "Qdrant", x: 18, y: 80 },
    { label: "Docker", x: 8, y: 46 },
    { label: "OpenAI", x: 56, y: 6 },
    { label: "Gemini", x: 46, y: 92 },
    { label: "Claude", x: 92, y: 36 },
    { label: "Postgres", x: 34, y: 24 },
];

export default function TechStackCloud() {
    return (
        <section className="section-spacing relative overflow-hidden">
            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="container-ai relative z-10 grid gap-14 lg:grid-cols-[1fr_1fr]">
                {/* LEFT CONTENT */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="badge-glow">AI TECHNOLOGY ECOSYSTEM</span>

                    <h2 className="section-title mt-6">
                        The Stack I Build With
                    </h2>

                    <p className="section-description mt-6">
                        Modern AI systems require orchestration across retrieval, reasoning,
                        inference, observability, vector databases, and cloud deployment.
                    </p>

                    <div className="mt-12 space-y-5">
                        {STACK.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    whileHover={{ x: 8 }}
                                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-cyan-400/20 hover:bg-cyan-500/5"
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}
                                    >
                                        <Icon size={22} className="text-white" />
                                    </div>

                                    <span className="text-lg font-medium text-slate-200">
                    {item.title}
                  </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* RIGHT VISUALIZATION */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center"
                >
                    <div className="relative aspect-square w-full max-w-[560px] rounded-[34px] border border-cyan-500/10 bg-slate-950/70 backdrop-blur-xl overflow-hidden">
                        {/* Tiny stars */}

                        {Array.from({ length: 28 }).map((_, i) => (
                            <motion.span
                                key={i}
                                animate={{
                                    opacity: [0.2, 1, 0.2],
                                    scale: [0.8, 1.3, 0.8],
                                }}
                                transition={{
                                    duration: 4 + Math.random() * 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                }}
                                className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}

                        {/* Orbit Rings */}

                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 45,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute h-[300px] w-[300px] rounded-full border border-cyan-500/10"
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 60,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute h-[220px] w-[220px] rounded-full border border-cyan-500/10"
                            />

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 80,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute h-[380px] w-[380px] rounded-full border border-cyan-500/5"
                            />

                            {/* Center Glow */}

                            <motion.div
                                animate={{
                                    scale: [1, 1.08, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="relative flex h-40 w-40 items-center justify-center rounded-full bg-cyan-500/15 shadow-[0_0_90px_rgba(34,211,238,0.4)]"
                            >
                                <div className="absolute inset-4 rounded-full bg-cyan-500/10 blur-xl" />

                                <div className="relative rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-black px-8 py-5 shadow-2xl ring-1 ring-cyan-400/20">
                                    <p className="text-center text-lg font-bold tracking-[0.25em] text-cyan-300">
                                        LLM
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Technologies */}

                        {ORBIT_ITEMS.map((item, index) => (
                            <motion.div
                                key={item.label}
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4 + index * 0.3,
                                    repeat: Infinity,
                                }}
                                className="absolute"
                                style={{
                                    left: `${item.x}%`,
                                    top: `${item.y}%`,
                                }}
                            >
                                <div className="rounded-full border border-cyan-400/20 bg-slate-900/80 px-3 py-1 text-xs text-cyan-300 backdrop-blur-xl shadow-lg">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}

                        {/* Bottom Info Cards */}

                        <div className="absolute bottom-6 left-6 space-y-3">
                            <div className="rounded-xl border border-cyan-400/15 bg-slate-900/70 px-4 py-3 backdrop-blur-xl">
                                <div className="flex items-center gap-3">
                                    <Database size={18} className="text-cyan-400" />
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                                            Vector Database
                                        </p>
                                        <p className="text-sm text-slate-200">Qdrant • Pinecone</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-violet-400/15 bg-slate-900/70 px-4 py-3 backdrop-blur-xl">
                                <div className="flex items-center gap-3">
                                    <Cloud size={18} className="text-violet-400" />
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
                                            Deployment
                                        </p>
                                        <p className="text-sm text-slate-200">
                                            Docker • AWS • FastAPI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Agent Card */}

                        <motion.div
                            animate={{ y: [-6, 6, -6] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute right-6 top-8 rounded-xl border border-cyan-400/15 bg-slate-900/70 px-4 py-3 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3">
                                <Bot size={18} className="text-cyan-400" />
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                                        AI Agent
                                    </p>
                                    <p className="text-sm text-slate-200">Reasoning Active</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}