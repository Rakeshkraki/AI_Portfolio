"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const TECH_STACK = [
    // AI / GenAI
    { name: "GPT-5", category: "AI" },
    { name: "LangChain", category: "AI" },
    { name: "LangGraph", category: "AI" },
    { name: "GraphRAG", category: "AI" },
    { name: "OpenAI API", category: "AI" },
    { name: "Claude API", category: "AI" },
    { name: "Gemini API", category: "AI" },

    // Backend
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "JWT Auth", category: "Backend" },
    { name: "Async IO", category: "Backend" },

    // Databases
    { name: "Neo4j", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "Pinecone", category: "Database" },
    { name: "ChromaDB", category: "Database" },
    { name: "Qdrant", category: "Database" },
    { name: "FAISS", category: "Database" },

    // Cloud / DevOps
    { name: "Docker", category: "Cloud" },
    { name: "Kubernetes", category: "Cloud" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "GitHub Actions", category: "Cloud" },
    { name: "Linux", category: "Cloud" },

    // Frontend
    { name: "Next.js 15", category: "Frontend" },
    { name: "React 19", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS v4", category: "Frontend" },
];

const categoryStyles: Record<string, string> = {
    AI: "border-cyan-400/25 bg-cyan-500/10 text-cyan-300",
    Backend: "border-violet-400/25 bg-violet-500/10 text-violet-300",
    Database: "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
    Cloud: "border-orange-400/25 bg-orange-500/10 text-orange-300",
    Frontend: "border-pink-400/25 bg-pink-500/10 text-pink-300",
};

export default function TechStackCloud() {
    return (
        <section className="glass-card rounded-card p-8">
            {/* Header */}

            <div className="mb-10 text-center">
                <span className="badge-glow">Technology Cloud</span>

                <h2 className="mt-6 text-3xl font-bold text-white">
                    AI Backend Engineering Stack
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-slate-400">
                    Technologies I use to build enterprise AI applications, GraphRAG
                    systems, AI agents, vector search infrastructure, and cloud-native
                    backend services.
                </p>
            </div>

            {/* Floating Cloud */}

            <div className="flex flex-wrap justify-center gap-4">
                {TECH_STACK.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.03,
                            duration: 0.35,
                        }}
                        animate={{
                            y: [0, -4, 0],
                        }}
                        whileHover={{
                            scale: 1.08,
                            y: -6,
                        }}
                        className={`cursor-default rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${categoryStyles[tech.category]}`}
                    >
                        {tech.name}
                    </motion.div>
                ))}
            </div>

            {/* Category Legend */}

            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {Object.keys(categoryStyles).map((category) => (
                    <div
                        key={category}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                        <p className="text-sm text-slate-400">{category}</p>

                        <p className="mt-2 text-xl font-semibold text-white">
                            {TECH_STACK.filter((item) => item.category === category).length}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom Summary */}

            <div className="mt-16 rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6">
                <div className="flex items-center gap-3">
                    <Sparkles className="text-cyan-400" size={22} />

                    <h3 className="text-lg font-semibold text-white">
                        Full-Stack AI Backend Engineering
                    </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                    My primary stack focuses on Python, FastAPI, Neo4j, GraphRAG,
                    LangChain, LangGraph, GPT-5, vector databases, Docker, PostgreSQL,
                    Redis, Kubernetes, and modern AI infrastructure for production systems.
                </p>
            </div>
        </section>
    );
}