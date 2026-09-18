"use client";

import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Phone,
    Download,
    Send,
    BrainCircuit,
    CheckCircle2,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";


const CONTACT_INFO = [
    {
        title: "Email",
        value: "rakeshkraki3272@gmail.com",
        icon: Mail,
        link: "rakeshkraki3272@gmail.com",
    },
    {
        title: "GitHub",
        value: "github.com/Rakeshkraki",
        icon: FaGithub,
        link: "https://github.com/Rakeshkraki",
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/rakeshkraki",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/rakesh3272",
    },
    {
        title: "Location",
        value: "Bengaluru, Karnataka, India",
        icon: MapPin,
        link: "#",
    },
];

const SPECIALIZATION = [
    "GraphRAG Architecture",
    "AI Backend APIs",
    "LLM Engineering",
    "LangChain & LangGraph",
    "FastAPI Microservices",
    "Vector Databases",
    "AI Agents",
    "Cloud Native AI",
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="section-spacing relative overflow-hidden bg-gradient-to-b from-transparent via-slate-950/30 to-transparent"
        >
            <div className="container-ai relative z-10">
                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-glow">Let's Build AI Together</span>

                    <h2 className="section-title mt-6">
                        Open to GenAI • LLM • AI Backend Engineer Roles
                    </h2>

                    <p className="section-description mt-6">
                        Looking for opportunities to build production AI systems, GraphRAG
                        platforms, AI Agents, semantic search infrastructure, and scalable
                        LLM backend services.
                    </p>
                </div>

                {/* Availability Banner */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="dashboard-card mt-14 rounded-card border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-slate-950 to-cyan-500/10 p-6"
                >
                    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                                <CheckCircle2 size={28} />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    Available for Full-Time AI Engineer Roles
                                </h3>

                                <p className="text-slate-300">
                                    GenAI • LLM Engineer • AI Backend Engineer • Python AI Engineer
                                </p>
                            </div>
                        </div>

                        <span className="status-pill">
              <span className="status-dot" />
              Immediate Joiner
            </span>
                    </div>
                </motion.div>

                {/* Main Grid */}

                <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
                    {/* Left Card */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-card border border-cyan-400/10 bg-gradient-to-br from-cyan-500/5 via-slate-950 to-violet-500/5 p-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="icon-box">
                                <BrainCircuit size={28} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-white">
                                    AI Engineering Expertise
                                </h3>

                                <p className="text-slate-400">
                                    Backend infrastructure for modern LLM applications.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {SPECIALIZATION.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-cyan-400/10 bg-cyan-500/5 px-4 py-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-cyan-400" size={18} />

                                        <span className="text-sm text-slate-300">{item}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                                Current Focus
                            </p>

                            <p className="mt-4 leading-8 text-slate-300">
                                Building enterprise GraphRAG systems, AI Agents, semantic search,
                                FastAPI AI microservices, vector databases, LangGraph workflows,
                                and production-ready GPT applications.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Card */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="dashboard-card rounded-card border border-white/5 bg-gradient-to-br from-slate-900/90 to-slate-950 p-8"
                    >
                        <h3 className="text-2xl font-semibold text-white">
                            Connect With Me
                        </h3>

                        <p className="mt-3 text-slate-400">
                            Interested in collaborating or hiring for AI engineering roles?
                            Let's connect.
                        </p>

                        <div className="mt-8 space-y-4">
                            {CONTACT_INFO.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.title}
                                        href={item.link}
                                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-cyan-400/20 hover:bg-cyan-500/5"
                                    >
                                        <div className="icon-box h-12 w-12 rounded-xl">
                                            <Icon size={22} />
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                                {item.title}
                                            </p>

                                            <p className="mt-1 text-white">{item.value}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}

                        <div className="mt-10 space-y-3">
                            <a
                                href="mailto:rakeshk.dev.ai@gmail.com"
                                className="btn-primary w-full justify-center"
                            >
                                <Send size={18} />
                                Let's Talk AI
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="btn-secondary w-full justify-center"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="dashboard-card mt-24 rounded-card border border-cyan-400/10 bg-gradient-to-r from-cyan-500/5 via-slate-950 to-violet-500/5 p-12 text-center"
                >
                    <BrainCircuit className="mx-auto text-cyan-400" size={48} />

                    <h3 className="mt-6 text-3xl font-bold text-white">
                        Building the Next Generation of AI Applications
                    </h3>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Passionate about building scalable GenAI systems using GraphRAG,
                        AI Agents, FastAPI, LangChain, LangGraph, Neo4j, vector databases,
                        semantic search, and production-grade LLM infrastructure.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {[
                            "OpenAI GPT-5",
                            "Claude",
                            "Gemini",
                            "LangChain",
                            "LangGraph",
                            "FastAPI",
                            "Neo4j",
                            "Qdrant",
                            "Redis",
                            "Docker",
                        ].map((tech) => (
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