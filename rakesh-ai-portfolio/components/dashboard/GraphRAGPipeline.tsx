"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    BrainCircuit,
    Bot,
    CheckCircle2,
    Database,
    FileText,
    Network,
    Search,
    Workflow,
} from "lucide-react";

const PIPELINE = [
    {
        title: "Enterprise Documents",
        icon: FileText,
        color: "from-sky-500 to-cyan-500",
        desc: "PDF • DOCX • HTML • Jira • Confluence • SQL",
    },
    {
        title: "Embedding Pipeline",
        icon: Search,
        color: "from-cyan-500 to-blue-500",
        desc: "Chunking • OpenAI Embeddings • Metadata Extraction",
    },
    {
        title: "Vector Database",
        icon: Database,
        color: "from-emerald-500 to-teal-500",
        desc: "Qdrant • Pinecone • Redis Vector Search",
    },
    {
        title: "Knowledge Graph",
        icon: Network,
        color: "from-violet-500 to-fuchsia-500",
        desc: "Neo4j • Entity Linking • Graph Traversal",
    },
    {
        title: "LLM Reasoning",
        icon: BrainCircuit,
        color: "from-pink-500 to-violet-500",
        desc: "GPT-5 • Claude • Gemini • LangGraph",
    },
    {
        title: "AI Agent Response",
        icon: Bot,
        color: "from-orange-500 to-red-500",
        desc: "Grounded Response • Citations • Tool Calling",
    },
] as const;

const FEATURES = [
    "Semantic Search",
    "Hybrid Retrieval",
    "Graph Traversal",
    "Reranking",
    "Context Compression",
    "Agent Memory",
    "Streaming Responses",
    "Evaluation Metrics",
] as const;

export default function GraphRAGPipeline() {
    return (
        <section className="section-spacing relative overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

            <div className="container-ai relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-glow">ENTERPRISE GENAI ARCHITECTURE</span>

                    <h2 className="section-title mt-6">
                        GraphRAG AI Architecture Pipeline
                    </h2>

                    <p className="section-description mt-6">
                        A production-ready Retrieval-Augmented Generation pipeline
                        combining vector search, knowledge graphs, AI agents, and LLM
                        reasoning.
                    </p>
                </div>

                <div className="mt-20 space-y-12">
                    {PIPELINE.map((step, index) => {
                        const Icon = step.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.title}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                                        !isEven
                                            ? "lg:[&>*:first-child]:order-2"
                                            : ""
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center gap-5">
                                            <div
                                                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}
                                            >
                                                <Icon size={28} className="text-white" />
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                                                    Step {index + 1}
                                                </p>

                                                <h3 className="text-2xl font-semibold text-white">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-lg leading-8 text-slate-300">
                                            {step.desc}
                                        </p>
                                    </div>

                                    <div className="glass-card rounded-card p-8">
                                        <div className="flex items-center justify-between">
                      <span className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                        Processing Stage
                      </span>

                                            <CheckCircle2
                                                className="text-emerald-400"
                                                size={20}
                                            />
                                        </div>

                                        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2 }}
                                                className={`h-full rounded-full bg-gradient-to-r ${step.color}`}
                                            />
                                        </div>

                                        <div className="mt-8 space-y-3 text-sm text-slate-300">
                                            <div className="flex items-center justify-between">
                                                <span>Status</span>
                                                <span className="text-emerald-400">Active</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span>Latency</span>
                                                <span>~120 ms</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span>Pipeline</span>
                                                <span className="text-cyan-300">
                          Streaming Enabled
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {index < PIPELINE.length - 1 && (
                                    <div className="my-10 flex justify-center">
                                        <motion.div
                                            animate={{ y: [0, 8, 0] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                            }}
                                            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
                                        >
                                            <ArrowRight
                                                className="rotate-90 lg:rotate-0"
                                                size={20}
                                            />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_.9fr]">
                    <div className="glass-card rounded-card p-8">
                        <div className="flex items-center gap-4">
                            <Workflow className="text-cyan-400" size={28} />

                            <h3 className="text-2xl font-semibold text-white">
                                AI Retrieval Workflow
                            </h3>
                        </div>

                        <div className="mt-8 space-y-5">
                            {FEATURES.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                                >
                                    <CheckCircle2
                                        className="text-cyan-400"
                                        size={18}
                                    />

                                    <span className="text-slate-200">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card rounded-card p-8">
                        <span className="badge-glow">AI AGENT EXECUTION</span>

                        <div className="ai-terminal mt-8 space-y-3 text-sm">
                            <p>&gt; Loading LangGraph workflow...</p>
                            <p>&gt; Connecting OpenAI GPT-5...</p>
                            <p>&gt; Searching Vector Database...</p>
                            <p>&gt; Traversing Neo4j Knowledge Graph...</p>
                            <p>&gt; Reranking retrieved documents...</p>
                            <p>&gt; Generating grounded response...</p>

                            <p className="text-emerald-400">
                                ✔ Response Generated with Citations
                            </p>
                        </div>

                        <div className="mt-8 rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                                Architecture Highlights
                            </p>

                            <ul className="mt-4 space-y-3 text-sm text-slate-300">
                                <li>• Hybrid Retrieval (Vector + Graph)</li>
                                <li>• Agent Memory &amp; Conversation Context</li>
                                <li>• Streaming Token Responses</li>
                                <li>• Tool Calling &amp; Function Execution</li>
                                <li>• Enterprise Knowledge Graph</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
