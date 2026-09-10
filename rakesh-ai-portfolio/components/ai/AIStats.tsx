"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Database,
    Network,
    Rocket,
    Activity,
    //Github,
    Cloud,
    Cpu,
    ArrowUpRight,
} from "lucide-react";

interface Stat {
    title: string;
    value: number;
    suffix: string;
    icon: React.ElementType;
    description: string;
}

const STATS: Stat[] = [
    {
        title: "AI Projects",
        value: 20,
        suffix: "+",
        icon: BrainCircuit,
        description: "GraphRAG, AI Agents, LLM APIs, RAG systems",
    },
    {
        title: "GraphRAG Pipelines",
        value: 6,
        suffix: "",
        icon: Network,
        description: "Neo4j + Vector Search production workflows",
    },
    {
        title: "Vector Databases",
        value: 12,
        suffix: "",
        icon: Database,
        description: "Pinecone, ChromaDB, FAISS, Qdrant",
    },
    {
        title: "FastAPI Services",
        value: 15,
        suffix: "+",
        icon: Rocket,
        description: "Production-ready AI backend APIs",
    },
    {
        title: "API Requests Processed",
        value: 10,
        suffix: "M+",
        icon: Activity,
        description: "Enterprise AI request handling",
    },
    {
        title: "GitHub Repositories",
        value: 35,
        suffix: "+",
        icon: Activity,
        description: "AI, Backend & Full Stack projects",
    },
    {
        title: "Cloud Deployments",
        value: 18,
        suffix: "",
        icon: Cloud,
        description: "Dockerized AI infrastructure deployments",
    },
    {
        title: "AI Models Integrated",
        value: 5,
        suffix: "",
        icon: Cpu,
        description: "GPT-5, Claude, Gemini, Embeddings",
    },
];

const KPI = [
    { label: "Average API Latency", value: "167ms" },
    { label: "Uptime", value: "99.98%" },
    { label: "Daily AI Workflows", value: "1,200+" },
    { label: "Streaming APIs", value: "Enabled" },
];

function AnimatedCounter({
                             target,
                             suffix,
                         }: {
    target: number;
    suffix: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;

                started.current = true;

                let current = 0;
                const duration = 1200;
                const increment = target / (duration / 16);

                const timer = setInterval(() => {
                    current += increment;

                    if (current >= target) {
                        setCount(target);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, 16);
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="hero-gradient text-4xl font-bold">
            {count}
            {suffix}
        </div>
    );
}

export default function AIStats() {
    return (
        <section className="glass-card rounded-card p-8">
            {/* Header */}

            <div className="text-center">
                <span className="badge-glow">AI Engineering Statistics</span>

                <h2 className="mt-6 text-3xl font-bold text-white">
                    AI Backend Engineering Metrics
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-slate-400">
                    Metrics representing AI infrastructure, GraphRAG development,
                    backend APIs, deployments, cloud engineering, and production AI
                    systems.
                </p>
            </div>

            {/* Statistics Grid */}

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {STATS.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <motion.div
                            key={stat.title}
                            whileHover={{
                                y: -6,
                                scale: 1.02,
                            }}
                            className="dashboard-card"
                        >
                            <div className="flex items-center justify-between">
                                <div className="icon-box">
                                    {/*<Icon size={22} />*/}
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="text-cyan-400"
                                />
                            </div>

                            <div className="mt-8">
                                <AnimatedCounter
                                    target={stat.value}
                                    suffix={stat.suffix}
                                />

                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    {stat.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* KPI Dashboard */}

            <div className="mt-20 grid gap-6 lg:grid-cols-2">
                <div className="rounded-card border border-cyan-400/15 bg-cyan-500/5 p-8">
                    <h3 className="mb-6 text-2xl font-semibold text-white">
                        AI Infrastructure KPIs
                    </h3>

                    <div className="space-y-5">
                        {KPI.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-4"
                            >
                                <span className="text-slate-300">{item.label}</span>

                                <span className="font-semibold text-cyan-300">
                  {item.value}
                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-card border border-violet-400/15 bg-violet-500/5 p-8">
                    <h3 className="mb-6 text-2xl font-semibold text-white">
                        Core AI Engineering Areas
                    </h3>

                    <div className="space-y-4">
                        {[
                            "GraphRAG Architecture",
                            "Knowledge Graph Engineering",
                            "LangGraph AI Agents",
                            "LLM Backend APIs",
                            "Semantic Vector Search",
                            "FastAPI Microservices",
                            "Docker & Kubernetes",
                            "Cloud-native AI Deployment",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                            >
                                <div className="h-2 w-2 rounded-full bg-violet-400" />

                                <span className="text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Deployment Timeline */}

            <div className="mt-20 rounded-card border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8">
                <h3 className="mb-8 text-2xl font-semibold text-white">
                    AI Engineering Growth Timeline
                </h3>

                <div className="space-y-6">
                    {[
                        {
                            year: "2022",
                            text: "Backend API development with Python & FastAPI.",
                        },
                        {
                            year: "2023",
                            text: "Integrated GPT APIs, Redis caching, PostgreSQL, Docker.",
                        },
                        {
                            year: "2024",
                            text: "Built RAG pipelines using LangChain + Vector Databases.",
                        },
                        {
                            year: "2025",
                            text: "Enterprise GraphRAG, Neo4j Knowledge Graphs & AI Agents.",
                        },
                    ].map((step) => (
                        <div key={step.year} className="flex gap-5">
                            <div className="min-w-[70px] font-semibold text-cyan-300">
                                {step.year}
                            </div>

                            <div className="h-auto w-px bg-cyan-400/20" />

                            <p className="text-slate-300">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}

            <div className="mt-20 text-center">
                <h3 className="text-2xl font-semibold text-white">
                    Building Enterprise AI Platforms
                </h3>

                <p className="mx-auto mt-4 max-w-3xl text-slate-400 leading-7">
                    My engineering focus is on scalable AI backend systems combining
                    GraphRAG, vector search, AI agents, streaming LLM APIs,
                    authentication, observability, cloud deployment, and production-ready
                    infrastructure.
                </p>
            </div>
        </section>
    );
}