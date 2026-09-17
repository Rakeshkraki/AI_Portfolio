"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Bot,
    BrainCircuit,
    CheckCircle2,
    Cpu,
    Database,
    Download,
    Network,
    Sparkles,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";


const TECH_STACK = [
    "GPT-5",
    "LangChain",
    "LangGraph",
    "GraphRAG",
    "FastAPI",
    "Neo4j",
    "Qdrant",
    "Redis",
    "Docker",
    "PostgreSQL",
];

const STATS = [
    {
        value: "15+",
        label: "AI Projects",
    },
    {
        value: "20+",
        label: "LLM APIs",
    },
    {
        value: "100K+",
        label: "Embeddings",
    },
    {
        value: "2+",
        label: "Years Experience",
    },
];

const FEATURES = [
    {
        title: "GraphRAG",
        icon: Network,
    },
    {
        title: "AI Agents",
        icon: Bot,
    },
    {
        title: "FastAPI",
        icon: Cpu,
    },
    {
        title: "Vector Search",
        icon: Database,
    },
];

export default function Hero() {
    return (
        <section id="hero" className="hero-grid relative min-h-screen overflow-hidden pb-16 pt-28" >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_35%)]" />

            <div className="container-ai relative z-10 grid items-center gap-16 lg:grid-cols-[1.2fr_.8fr]">
                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Availability Badge */}
                    <div className="badge-glow mb-8">
                        <Sparkles size={16} />
                        Open to GenAI / LLM Engineer Roles
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
                        Building
                        <span className="hero-gradient block">
          AI Backend Systems
        </span>
                        with LLMs &amp; GraphRAG
                    </h1>

                    {/* Introduction */}
                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                        Hi, I&apos;m{" "}
                        <span className="font-semibold text-cyan-300">
          Rakesh K
        </span>{" "}
                        — a GenAI Backend Engineer passionate about GraphRAG, AI
                        Agents, semantic search, FastAPI microservices, vector
                        databases, and production-ready LLM infrastructure.
                    </p>

                    {/* Technology Stack */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {TECH_STACK.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                            >
            {tech}
          </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex items-center gap-4">
                        <a
                            href="https://github.com/Rakeshkraki"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="icon-box transition hover:scale-110"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://linkedin.com/in/rakeshkraki"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="icon-box transition hover:scale-110"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </motion.div>

                {/* AI Infrastructure Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className="relative"
                >
                    <div className="glass-card rounded-card p-8">
                        {/* Card Header */}
                        <div className="flex items-center gap-4">
                            <div className="icon-box">
                                <BrainCircuit size={28} />
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                                    AI Infrastructure
                                </p>

                                <h3 className="text-2xl font-semibold text-white">
                                    Production Ready Stack
                                </h3>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mt-8 space-y-4">
                            {FEATURES.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        whileHover={{ x: 6 }}
                                        className="flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                                    >
                                        <div className="icon-box h-11 w-11 rounded-xl">
                                            <Icon size={20} />
                                        </div>

                                        <div className="flex-1">
                                            <p className="font-medium text-white">
                                                {feature.title}
                                            </p>

                                            <p className="text-sm text-slate-400">
                                                Production AI Engineering
                                            </p>
                                        </div>

                                        <CheckCircle2
                                            className="text-cyan-400"
                                            size={20}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Terminal */}
                        <div className="mt-8 rounded-xl border border-cyan-400/10 bg-slate-900/70 p-5 font-mono text-sm text-cyan-300">
                            <p>&gt; AI Agent initialized</p>
                            <p>&gt; Loading GraphRAG pipeline...</p>
                            <p>&gt; Connecting GPT-5 API...</p>

                            <p className="text-emerald-400">
                                ✔ System Ready
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats */}
            <div className="container-ai mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {STATS.map((stat) => (
                    <motion.div
                        key={stat.label}
                        whileHover={{ y: -6 }}
                        className="dashboard-card p-6 text-center"
                    >
                        <h3 className="metric-value hero-gradient">
                            {stat.value}
                        </h3>

                        <p className="metric-label mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>

    );
}