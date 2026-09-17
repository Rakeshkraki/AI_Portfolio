"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Bot,
    BrainCircuit,
    Database,
    ExternalLink,
    FileSearch
} from "lucide-react";

import {
    FaGithub
} from "react-icons/fa";

const PROJECTS = [
    {
        title: "DocuBrain AI",
        subtitle: "Enterprise GraphRAG Knowledge Platform",
        icon: BrainCircuit,
        gradient: "from-cyan-500 to-blue-600",
        description:
            "Built a production-ready GraphRAG platform that transforms enterprise documents into an intelligent knowledge graph with semantic retrieval and GPT-powered answers.",
        stack: [
            "FastAPI",
            "LangChain",
            "LangGraph",
            "Neo4j",
            "Qdrant",
            "OpenAI GPT-5",
            "Docker",
            "Redis",
        ],
        features: [
            "Hybrid Graph + Vector Retrieval",
            "Streaming AI Responses",
            "Knowledge Graph Visualization",
            "Enterprise Authentication",
        ],
        githubUrl: "#",
        demoUrl: "#",
    },
    {
        title: "AI Resume Analyzer",
        subtitle: "LLM Powered ATS Optimization Engine",
        icon: FileSearch,
        gradient: "from-violet-500 to-fuchsia-600",
        description:
            "Analyzes resumes against job descriptions using embeddings and LLM reasoning to improve ATS compatibility and recruiter matching.",
        stack: [
            "FastAPI",
            "OpenAI",
            "Embeddings",
            "PDF Parsing",
            "PostgreSQL",
            "Docker",
        ],
        features: [
            "ATS Score",
            "Keyword Gap Analysis",
            "Skill Suggestions",
            "Recruiter Summary Generation",
        ],
        githubUrl: "#",
        demoUrl: "#",
    },
    {
        title: "AI Multi-Agent Workflow",
        subtitle: "LangGraph Autonomous Agent System",
        icon: Bot,
        gradient: "from-emerald-500 to-cyan-500",
        description:
            "Designed autonomous AI agents capable of planning, retrieving knowledge, executing tools, and collaborating using LangGraph.",
        stack: [
            "LangGraph",
            "LangChain",
            "OpenAI",
            "Redis",
            "FastAPI",
            "Docker",
        ],
        features: [
            "Planner Agent",
            "Retriever Agent",
            "Tool Calling",
            "Conversation Memory",
        ],
        githubUrl: "#",
        demoUrl: "#",
    },
    {
        title: "Semantic Search API",
        subtitle: "Enterprise Vector Search Microservice",
        icon: Database,
        gradient: "from-blue-500 to-indigo-600",
        description:
            "Developed a scalable semantic search API supporting embeddings, hybrid search, reranking, metadata filters, and document chunk retrieval.",
        stack: [
            "FastAPI",
            "Qdrant",
            "FAISS",
            "PostgreSQL",
            "Docker",
            "Redis",
        ],
        features: [
            "Semantic Search",
            "Hybrid Retrieval",
            "Metadata Filters",
            "Streaming Results",
        ],
        githubUrl: "#",
        demoUrl: "#",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="section-spacing relative overflow-hidden" >
            <div className="container-ai relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-glow">Featured AI Projects</span>

                    <h2 className="section-title mt-6">
                        Production-Ready GenAI &amp; LLM Projects
                    </h2>

                    <p className="section-description mt-6">
                        Projects focused on GraphRAG, AI Agents, Retrieval-Augmented
                        Generation, Vector Databases, LLM APIs, and scalable AI backend
                        engineering.
                    </p>
                </div>

                <div className="mt-20 space-y-10">
                    {PROJECTS.map((project, index) => {
                        const Icon = project.icon;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="glass-card rounded-card border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8"
                            >
                                <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient}`}
                                            >
                                                <Icon className="text-white" size={26} />
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-white">
                                                    {project.title}
                                                </h3>

                                                <p className="text-cyan-300">{project.subtitle}</p>
                                            </div>
                                        </div>

                                        <p className="mt-6 leading-8 text-slate-300">
                                            {project.description}
                                        </p>

                                        <div className="mt-8 flex flex-wrap gap-3">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                                                >
                      {tech}
                    </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-5">
                                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                                                Highlights
                                            </p>

                                            <div className="space-y-4">
                                                {project.features.map((feature) => (
                                                    <div
                                                        key={feature}
                                                        className="flex items-center gap-3 text-slate-300"
                                                    >
                                                        <ArrowUpRight
                                                            className="text-cyan-400"
                                                            size={18}
                                                        />

                                                        <span className="text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary inline-flex items-center gap-2"
                                    >
                                        <FaGithub size={18} />
                                        Source Code
                                    </a>

                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>


    );
}