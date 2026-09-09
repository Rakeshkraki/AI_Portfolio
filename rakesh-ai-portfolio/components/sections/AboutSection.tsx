"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    Database,
    ServerCog,
    Network,
    Cloud,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";

import { PERSONAL_INFO } from "@/lib/constants";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

const TECHNOLOGY_CARDS = [
    {
        title: "GraphRAG Systems",
        description:
            "Building enterprise Retrieval-Augmented Generation systems using Neo4j knowledge graphs, embeddings, and hybrid retrieval.",
        icon: Network,
    },
    {
        title: "LLM Backend APIs",
        description:
            "Developing scalable FastAPI services integrating GPT-5, Claude, Gemini, structured outputs, and AI agent orchestration.",
        icon: BrainCircuit,
    },
    {
        title: "Vector Databases",
        description:
            "Designing semantic search infrastructure using Pinecone, ChromaDB, Qdrant, FAISS, and Redis Vector Search.",
        icon: Database,
    },
    {
        title: "Cloud Native AI",
        description:
            "Containerized AI backend architecture with Docker, Kubernetes-ready deployment, PostgreSQL, Redis, and CI/CD pipelines.",
        icon: Cloud,
    },
];

const AI_HIGHLIGHTS = [
    "GraphRAG & Knowledge Graph Engineering",
    "LangChain & LangGraph Development",
    "FastAPI Microservices Architecture",
    "LLM API Integration & Function Calling",
    "Vector Search & Embedding Pipelines",
    "AI Agent Workflow Orchestration",
    "Docker, Kubernetes & Cloud Deployment",
    "Prompt Engineering & Structured Outputs",
];

const AI_JOURNEY = [
    {
        year: "2022",
        title: "Backend Development Foundation",
        description:
            "Started building scalable backend APIs using Python, FastAPI, PostgreSQL, and Docker.",
    },
    {
        year: "2023",
        title: "LLM API Engineering",
        description:
            "Integrated OpenAI APIs, authentication, caching, asynchronous processing, and semantic search services.",
    },
    {
        year: "2024",
        title: "RAG & Vector Database Engineering",
        description:
            "Developed Retrieval-Augmented Generation pipelines using LangChain, Pinecone, ChromaDB, and FAISS.",
    },
    {
        year: "2025+",
        title: "GraphRAG & AI Agent Systems",
        description:
            "Building enterprise GraphRAG platforms, LangGraph multi-agent workflows, Neo4j knowledge graphs, and production AI infrastructure.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="section-spacing relative">
            <div className="container-ai">
                {/* Section Header */}

                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">About Me</span>

                        <h2 className="section-title mt-6">
                            AI Backend Engineer building{" "}
                            <span className="hero-gradient">intelligent backend systems</span>
                        </h2>

                        <p className="section-description mt-6">
                            I'm <strong>{PERSONAL_INFO.name}</strong>, an AI Backend Engineer
                            passionate about building scalable Generative AI infrastructure,
                            GraphRAG applications, AI agents, LLM APIs, and cloud-native
                            backend services for enterprise AI products.
                        </p>
                    </div>
                </ScrollReveal>

                {/* About Grid */}

                <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Left */}

                    <ScrollReveal direction="left">
                        <div className="glass-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="icon-box">
                                    <ServerCog size={28} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-white">
                                        What I Build
                                    </h3>

                                    <p className="text-slate-400">
                                        Production-ready AI backend architecture.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 text-slate-300 leading-8">
                                <p>
                                    I specialize in designing backend platforms that power
                                    enterprise AI experiences. My work combines Retrieval-Augmented
                                    Generation, knowledge graphs, vector search, AI agents, and
                                    cloud-native backend engineering.
                                </p>

                                <p>
                                    My focus is on creating AI systems that are scalable,
                                    observable, secure, and production-ready using FastAPI,
                                    Neo4j, LangChain, LangGraph, Docker, PostgreSQL, and Redis.
                                </p>

                                <p>
                                    I enjoy solving backend challenges involving semantic search,
                                    document intelligence, LLM orchestration, streaming APIs,
                                    authentication, caching, and AI workflow automation.
                                </p>
                            </div>

                            {/* Focus Highlights */}

                            <div className="mt-10 grid gap-3 sm:grid-cols-2">
                                {AI_HIGHLIGHTS.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="text-cyan-400 flex-shrink-0"
                                        />

                                        <span className="text-sm text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right */}

                    <ScrollReveal direction="right">
                        <div className="dashboard-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <Sparkles className="text-cyan-400" size={24} />

                                <h3 className="text-xl font-semibold text-white">
                                    Current AI Focus
                                </h3>
                            </div>

                            <div className="space-y-5">
                                {[
                                    "Enterprise GraphRAG Platforms",
                                    "LangGraph Multi-Agent Systems",
                                    "GPT-5 + Claude + Gemini Integrations",
                                    "Vector Search Optimization",
                                    "Knowledge Graph Engineering",
                                    "FastAPI AI Infrastructure",
                                    "Cloud-native AI Deployments",
                                ].map((focus) => (
                                    <div
                                        key={focus}
                                        className="rounded-xl bg-cyan-500/5 border border-cyan-400/10 px-4 py-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-cyan-400" />

                                            <p className="text-sm text-slate-200">{focus}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* AI Stack */}

                            <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
                                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                                    Primary Stack
                                </p>

                                <p className="mt-3 text-white leading-7">
                                    Python • FastAPI • Neo4j • LangChain • LangGraph • OpenAI GPT-5
                                    • Pinecone • PostgreSQL • Redis • Docker • Kubernetes
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Technology Cards */}

                <ScrollReveal className="mt-24">
                    <div className="grid gap-6 md:grid-cols-2">
                        {TECHNOLOGY_CARDS.map((card) => {
                            const Icon = card.icon;

                            return (
                                <motion.div
                                    key={card.title}
                                    whileHover={{ y: -6 }}
                                    className="project-card rounded-card p-6"
                                >
                                    <div className="icon-box mb-6">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-300">
                                        {card.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* AI Journey Timeline */}

                <ScrollReveal className="mt-28">
                    <div className="mb-12 text-center">
                        <span className="badge-glow">Journey</span>

                        <h2 className="section-title mt-5">
                            My AI Engineering Journey
                        </h2>
                    </div>

                    <motion.div
                        variants={staggerContainer(0.15, 0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="timeline"
                    >
                        {AI_JOURNEY.map((step) => (
                            <motion.div
                                key={step.year}
                                variants={fadeUpChild}
                                className="timeline-item pb-12 last:pb-0"
                            >
                                <div className="timeline-dot" />

                                <div className="glass-card rounded-card p-6">
                  <span className="text-sm font-semibold text-cyan-400">
                    {step.year}
                  </span>

                                    <h3 className="mt-2 text-xl font-semibold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-300">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </ScrollReveal>

                {/* AI Philosophy */}

                <ScrollReveal className="mt-24">
                    <div className="dashboard-card rounded-card p-10 text-center">
                        <BrainCircuit
                            size={42}
                            className="mx-auto text-cyan-400"
                        />

                        <h3 className="mt-6 text-3xl font-semibold text-white">
                            AI Engineering Philosophy
                        </h3>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Build AI systems that are not only intelligent but also reliable,
                            scalable, secure, and observable. Every AI application should have
                            a strong backend foundation capable of supporting enterprise-scale
                            workloads, retrieval pipelines, agent workflows, and production LLM
                            infrastructure.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}