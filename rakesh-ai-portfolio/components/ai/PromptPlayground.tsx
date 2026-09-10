"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Sparkles,
    Play,
    Copy,
    CheckCircle2,
    BrainCircuit,
    RotateCcw,
} from "lucide-react";

const PRESET_PROMPTS = [
    {
        title: "GraphRAG Explanation",
        prompt:
            "Explain how GraphRAG combines vector search with Neo4j knowledge graphs for enterprise AI applications.",
    },
    {
        title: "FastAPI AI Backend",
        prompt:
            "Generate a FastAPI endpoint for a GPT-5 powered chat API with async streaming responses.",
    },
    {
        title: "LangGraph Workflow",
        prompt:
            "Design a LangGraph multi-agent workflow for document retrieval and answer generation.",
    },
    {
        title: "Vector Database",
        prompt:
            "Compare Pinecone, ChromaDB, Qdrant, and FAISS for production AI systems.",
    },
];

const RESPONSES: Record<string, string> = {
    graph:
        `GraphRAG enhances Retrieval-Augmented Generation by combining semantic vector search with graph traversal. Documents are embedded into a vector database while relationships are stored inside Neo4j. Hybrid retrieval returns both similar chunks and connected entities before GPT-5 generates a response.`,

    fastapi:
        `A production FastAPI AI backend includes async endpoints, JWT authentication, Redis caching, streaming responses, structured outputs, logging, retry middleware, and OpenAI API integration.`,

    langgraph:
        `LangGraph enables multi-agent orchestration where Planner → Retriever → Graph Agent → Response Agent collaborate through a state machine. This architecture is ideal for enterprise AI assistants.`,

    vector:
        `Pinecone is managed and scalable. ChromaDB is lightweight for local development. Qdrant offers high-performance vector search with filtering. FAISS is excellent for local similarity search but requires additional infrastructure.`,
};

export default function PromptPlayground() {
    const [prompt, setPrompt] = useState(PRESET_PROMPTS[0].prompt);
    const [response, setResponse] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const runPrompt = () => {
        setLoading(true);
        setResponse("");

        setTimeout(() => {
            const lower = prompt.toLowerCase();

            if (lower.includes("graphrag")) {
                setResponse(RESPONSES.graph);
            } else if (lower.includes("fastapi")) {
                setResponse(RESPONSES.fastapi);
            } else if (lower.includes("langgraph")) {
                setResponse(RESPONSES.langgraph);
            } else if (
                lower.includes("vector") ||
                lower.includes("pinecone")
            ) {
                setResponse(RESPONSES.vector);
            } else {
                setResponse(
                    "This is a frontend demo. Later this component can call a FastAPI backend connected to GPT-5 for real streaming AI responses."
                );
            }

            setLoading(false);
        }, 900);
    };

    const copyResponse = async () => {
        if (!response) return;

        await navigator.clipboard.writeText(response);
        setCopied(true);

        setTimeout(() => setCopied(false), 1500);
    };

    const reset = () => {
        setPrompt("");
        setResponse("");
    };

    return (
        <section className="glass-card rounded-card p-8">
            {/* Header */}

            <div className="text-center">
                <span className="badge-glow">AI Prompt Playground</span>

                <h2 className="mt-6 text-3xl font-bold text-white">
                    Experiment with AI Backend Prompts
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-slate-400">
                    Try prompts related to GraphRAG, FastAPI, LangGraph, vector databases,
                    GPT-5 APIs, and enterprise AI engineering.
                </p>
            </div>

            {/* Prompt Templates */}

            <div className="mt-10">
                <h3 className="mb-4 text-lg font-semibold text-white">
                    Prompt Templates
                </h3>

                <div className="grid gap-3 md:grid-cols-2">
                    {PRESET_PROMPTS.map((preset) => (
                        <motion.button
                            key={preset.title}
                            whileHover={{ y: -2 }}
                            onClick={() => setPrompt(preset.prompt)}
                            className="rounded-xl border border-cyan-400/15 bg-cyan-500/5 p-4 text-left transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                        >
                            <h4 className="text-cyan-300 font-medium">
                                {preset.title}
                            </h4>

                            <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                                {preset.prompt}
                            </p>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Prompt Input */}

            <div className="mt-10">
                <label className="mb-3 block text-sm text-slate-400">
                    Prompt
                </label>

                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={6}
                    placeholder="Write your AI prompt here..."
                    className="input-field resize-none"
                />
            </div>

            {/* Action Buttons */}

            <div className="mt-6 flex flex-wrap gap-4">
                <button
                    onClick={runPrompt}
                    disabled={loading}
                    className="btn-primary"
                >
                    <Play size={18} />

                    {loading ? "Generating..." : "Run Prompt"}
                </button>

                <button
                    onClick={reset}
                    className="btn-secondary"
                >
                    <RotateCcw size={18} />
                    Reset
                </button>
            </div>

            {/* AI Response */}

            <motion.div
                layout
                className="mt-12 rounded-card border border-cyan-400/10 bg-slate-900/50 p-6"
            >
                <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <BrainCircuit className="text-cyan-400" />

                        <h3 className="text-xl font-semibold text-white">
                            AI Response
                        </h3>
                    </div>

                    {response && (
                        <button
                            onClick={copyResponse}
                            className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-cyan-400/20 hover:text-cyan-300"
                        >
                            {copied ? (
                                <CheckCircle2 size={18} />
                            ) : (
                                <Copy size={18} />
                            )}
                        </button>
                    )}
                </div>

                {loading ? (
                    <div className="space-y-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="h-4 animate-pulse rounded bg-slate-800"
                            />
                        ))}
                    </div>
                ) : response ? (
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-slate-300">
            {response}
          </pre>
                ) : (
                    <div className="rounded-xl border border-dashed border-white/10 py-12 text-center">
                        <Sparkles
                            size={34}
                            className="mx-auto text-cyan-400"
                        />

                        <p className="mt-4 text-slate-500">
                            Run a prompt to generate an AI response.
                        </p>
                    </div>
                )}
            </motion.div>

            {/* Feature Cards */}

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {[
                    {
                        title: "GraphRAG",
                        desc: "Knowledge Graph + Vector Retrieval",
                    },
                    {
                        title: "FastAPI APIs",
                        desc: "Async AI backend endpoints",
                    },
                    {
                        title: "LangGraph",
                        desc: "Multi-agent orchestration",
                    },
                    {
                        title: "GPT-5",
                        desc: "Streaming structured responses",
                    },
                ].map((item) => (
                    <motion.div
                        key={item.title}
                        whileHover={{ y: -5 }}
                        className="project-card rounded-card p-5 text-center"
                    >
                        <Sparkles
                            size={22}
                            className="mx-auto text-cyan-400"
                        />

                        <h4 className="mt-4 text-lg font-semibold text-white">
                            {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Footer */}

            <div className="mt-14 rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6">
                <h3 className="text-lg font-semibold text-white">
                    Ready for GPT-5 Backend Integration
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                    Replace the simulated responses with a FastAPI endpoint that streams
                    GPT-5 responses using the OpenAI API, Server-Sent Events, and LangGraph
                    orchestration.
                </p>
            </div>
        </section>
    );
}