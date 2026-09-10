"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bot,
    Send,
    Sparkles,
    X,
    MessageCircle,
    User,
} from "lucide-react";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const QUICK_QUESTIONS = [
    "Tell me about GraphRAG.",
    "What AI projects have you built?",
    "Which technologies do you use?",
    "Are you available for AI Backend roles?",
];

const KNOWLEDGE: Record<string, string> = {
    graphrag:
        "GraphRAG combines Vector Search with Neo4j Knowledge Graph traversal to retrieve richer enterprise context before generating responses with GPT-5.",

    projects:
        "I've built GraphRAG platforms, AI Agent workflows using LangGraph, FastAPI LLM APIs, vector search pipelines, document intelligence systems, and enterprise AI backend infrastructure.",

    technologies:
        "My core stack includes Python, FastAPI, Neo4j, LangChain, LangGraph, GPT-5, Pinecone, PostgreSQL, Redis, Docker, Kubernetes, Next.js, and TypeScript.",

    backend:
        "I specialize in scalable AI backend engineering including FastAPI microservices, authentication, async APIs, Redis caching, vector databases, and cloud deployment.",

    contact:
        "I'm available for AI Backend Engineer, GraphRAG Engineer, GenAI Platform Engineer, and LLM Infrastructure opportunities. You can reach me through the contact section of this portfolio.",

    availability:
        "Yes. I'm currently open to full-time AI Backend Engineer opportunities (Remote, Hybrid, or On-site).",
};

function generateResponse(question: string): string {
    const text = question.toLowerCase();

    if (text.includes("graphrag")) return KNOWLEDGE.graphrag;

    if (text.includes("project")) return KNOWLEDGE.projects;

    if (
        text.includes("technology") ||
        text.includes("stack") ||
        text.includes("skill")
    )
        return KNOWLEDGE.technologies;

    if (
        text.includes("backend") ||
        text.includes("fastapi")
    )
        return KNOWLEDGE.backend;

    if (
        text.includes("contact") ||
        text.includes("email")
    )
        return KNOWLEDGE.contact;

    if (
        text.includes("available") ||
        text.includes("job") ||
        text.includes("hire")
    )
        return KNOWLEDGE.availability;

    return "I'm Rakesh K's portfolio assistant. Ask me about GraphRAG, AI Backend Engineering, LangGraph, GPT-5 integrations, FastAPI, Neo4j, vector databases, or AI projects.";
}

export default function AIChatWidget() {
    const [open, setOpen] = useState(false);

    const [input, setInput] = useState("");

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hi 👋 I'm Rakesh's AI Portfolio Assistant. Ask me anything about his AI Backend Engineering experience.",
        },
    ]);

    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const sendMessage = (message: string) => {
        const question = message.trim();

        if (!question) return;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: question,
            },
        ]);

        setInput("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: generateResponse(question),
                },
            ]);
        }, 600);
    };

    const placeholder = useMemo(() => {
        return "Ask about GraphRAG, GPT-5, FastAPI...";
    }, []);

    return (
        <>
            {/* Floating Button */}

            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-2xl shadow-cyan-500/30"
            >
                <MessageCircle size={28} />
            </motion.button>

            {/* Chat Window */}

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="fixed bottom-24 right-6 z-50 flex h-[600px] w-[360px] flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/95 backdrop-blur-2xl"
                        >
                            {/* Header */}

                            <div className="flex items-center justify-between border-b border-white/10 p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                                        <Bot size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            AI Portfolio Assistant
                                        </h3>

                                        <p className="text-xs text-cyan-400">
                                            Online
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Messages */}

                            <div className="flex-1 space-y-4 overflow-y-auto p-5">
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        className={`flex ${
                                            msg.role === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                                                msg.role === "assistant"
                                                    ? "bg-white/5 text-slate-200"
                                                    : "bg-cyan-500 text-white"
                                            }`}
                                        >
                                            <div className="mb-2 flex items-center gap-2 text-xs opacity-80">
                                                {msg.role === "assistant" ? (
                                                    <>
                                                        <Bot size={14} />
                                                        Assistant
                                                    </>
                                                ) : (
                                                    <>
                                                        <User size={14} />
                                                        You
                                                    </>
                                                )}
                                            </div>

                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))}

                                <div ref={bottomRef} />
                            </div>

                            {/* Quick Questions */}

                            <div className="border-t border-white/10 px-4 py-3">
                                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
                                    <Sparkles size={12} />
                                    Quick Questions
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {QUICK_QUESTIONS.map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => sendMessage(q)}
                                            className="rounded-full border border-cyan-400/15 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-300 transition hover:bg-cyan-500/10"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input */}

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendMessage(input);
                                }}
                                className="border-t border-white/10 p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                        placeholder={placeholder}
                                        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/30"
                                    />

                                    <button
                                        type="submit"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white transition hover:bg-cyan-400"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}