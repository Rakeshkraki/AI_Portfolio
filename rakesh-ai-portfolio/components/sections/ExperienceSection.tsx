"use client";

import { motion } from "framer-motion";
import {
    Bot,
    BrainCircuit,
    CheckCircle2,
    Network,
    ServerCog,
} from "lucide-react";

const EXPERIENCE = [
    {
        company: "Current Company",
        role: "AI Backend Engineer (Transitioning from Enterprise Backend)",
        period: "2025 — Present",
        icon: BrainCircuit,
        color: "from-cyan-500 to-blue-500",
        summary:
            "Designing scalable AI backend services, Retrieval-Augmented Generation pipelines, GraphRAG architecture, vector search APIs, and LLM integrations.",
        achievements: [
            "Built enterprise-ready GraphRAG architecture.",
            "Designed semantic search microservices with FastAPI.",
            "Integrated GPT APIs with streaming responses.",
            "Implemented vector search with Neo4j & Qdrant.",
            "Dockerized backend AI services.",
        ],
        stack: [
            "FastAPI",
            "LangChain",
            "Neo4j",
            "Qdrant",
            "Redis",
            "Docker",
            "OpenAI",
        ],
    },
    {
        company: "Self Learning + AI Projects",
        role: "GenAI / LLM Engineer",
        period: "2024 — Present",
        icon: Bot,
        color: "from-violet-500 to-fuchsia-500",
        summary:
            "Built multiple production-oriented AI applications focused on GraphRAG, AI Agents, document intelligence, embeddings, and autonomous workflows.",
        achievements: [
            "Developed DocuBrain GraphRAG Platform.",
            "Built AI Resume Analyzer with ATS optimization.",
            "Implemented LangGraph multi-agent workflow.",
            "Created semantic document search API.",
        ],
        stack: [
            "LangGraph",
            "OpenAI GPT-5",
            "Embeddings",
            "Docker",
            "PostgreSQL",
            "Redis",
        ],
    },
    {
        company: "Backend Engineering Foundation",
        role: "Backend Developer",
        period: "2023 — 2024",
        icon: ServerCog,
        color: "from-emerald-500 to-cyan-500",
        summary:
            "Built REST APIs, authentication systems, SQL databases, cloud deployment pipelines, and scalable backend services.",
        achievements: [
            "FastAPI & REST API development.",
            "JWT Authentication.",
            "PostgreSQL database design.",
            "Docker deployment pipeline.",
        ],
        stack: [
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "Redis",
            "JWT",
            "GitHub Actions",
        ],
    },
];

const STATS = [
    {
        value: "15+",
        label: "AI Backend APIs",
    },
    {
        value: "6",
        label: "GraphRAG Projects",
    },
    {
        value: "20+",
        label: "LLM Integrations",
    },
    {
        value: "100K+",
        label: "Vector Embeddings Indexed",
    },
];

const CORE_TECHNOLOGIES = [
    "GraphRAG",
    "AI Agents",
    "LLM APIs",
    "FastAPI",
    "Neo4j",
    "Qdrant",
    "Docker",
    "Redis",
    "LangGraph",
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="section-spacing relative overflow-hidden" >
            <div className="container-ai relative z-10">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-glow">Experience Timeline</span>

                    <h2 className="section-title mt-6">
                        AI Engineering Experience
                    </h2>

                    <p className="section-description mt-6">
                        Building scalable AI backend infrastructure, GraphRAG systems,
                        semantic retrieval pipelines, and production-ready LLM
                        applications.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {STATS.map((stat) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -6 }}
                            className="dashboard-card p-6 text-center"
                        >
                            <h3 className="metric-value hero-gradient">{stat.value}</h3>

                            <p className="metric-label mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Experience Timeline */}
                <div className="timeline mt-24 space-y-12">
                    {EXPERIENCE.map((job, index) => {
                        const Icon = job.icon;

                        return (
                            <motion.div
                                key={job.company}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="timeline-item"
                            >
                                <div className="timeline-dot" />

                                <div className="glass-card rounded-card border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8">
                                    {/* Job Header */}
                                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                        <div>
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${job.color}`}
                                                >
                                                    <Icon
                                                        className="text-white"
                                                        size={26}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">
                                                        {job.company}
                                                    </h3>

                                                    <p className="text-cyan-300">
                                                        {job.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="status-pill">{job.period}</div>
                                    </div>

                                    {/* Summary */}
                                    <p className="mt-6 leading-8 text-slate-300">
                                        {job.summary}
                                    </p>

                                    {/* Achievements */}
                                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                                        {job.achievements.map((achievement) => (
                                            <div
                                                key={achievement}
                                                className="flex items-start gap-3 rounded-xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                                            >
                                                <CheckCircle2
                                                    className="mt-1 shrink-0 text-cyan-400"
                                                    size={18}
                                                />

                                                <span className="text-sm text-slate-300">
                      {achievement}
                    </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Technology Stack */}
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {job.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                                            >
                    {tech}
                  </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Core Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="dashboard-card mt-24 rounded-card border border-cyan-400/10 bg-gradient-to-r from-cyan-500/5 via-slate-950 to-violet-500/5 p-10 text-center"
                >
                    <Network
                        className="mx-auto text-cyan-400"
                        size={42}
                    />

                    <h3 className="mt-5 text-3xl font-bold text-white">
                        Engineering Production AI Systems
                    </h3>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Passionate about GraphRAG, AI Agents, semantic retrieval,
                        scalable FastAPI services, vector databases, cloud-native
                        deployment, and enterprise-grade LLM infrastructure.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {CORE_TECHNOLOGIES.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                            >
            {tech}
          </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>

    );
}