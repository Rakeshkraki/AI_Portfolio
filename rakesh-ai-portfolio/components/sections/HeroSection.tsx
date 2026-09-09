"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    // Github,
    // Linkedin,
    Mail,
} from "lucide-react";

import {
    PERSONAL_INFO,
    HERO_STATS,
    SOCIAL_LINKS,
} from "@/lib/constants";

import { useTypewriter } from "@/hooks/useTypewriter";
import {
    heroTitleVariant,
    heroSubtitleVariant,
    heroCTAAnimation,
    staggerContainer,
    fadeUpChild,
} from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";

const ROLES = [
    "AI Backend Engineer",
    "GraphRAG Developer",
    "LLM Platform Engineer",
    "GenAI Engineer",
    "FastAPI Specialist",
];

export default function HeroSection() {
    const { text } = useTypewriter({
        words: ROLES,
        typingSpeed: 80,
        deletingSpeed: 40,
        pauseDuration: 1800,
    });

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-20 hero-grid opacity-50" />

            <div className="absolute left-0 top-20 -z-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
            <div className="absolute right-0 bottom-10 -z-20 h-[28rem] w-[28rem] rounded-full bg-violet-600/10 blur-[180px]" />

            <div className="container-ai relative z-10">
                <motion.div
                    variants={staggerContainer(0.12, 0)}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-16 lg:grid-cols-2 lg:items-center"
                >
                    {/* LEFT CONTENT */}

                    <div>
                        <motion.span
                            variants={fadeUpChild}
                            className="badge-glow mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                        >
                            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                            Available for AI Backend Engineer Roles
                        </motion.span>

                        <motion.h1
                            variants={heroTitleVariant}
                            className="hero-title text-white"
                        >
                            Hi, I'm
                            <span className="hero-gradient block">
                {PERSONAL_INFO.name}
              </span>
                        </motion.h1>

                        <motion.h2
                            variants={heroSubtitleVariant}
                            className="typing-cursor mt-6 text-2xl font-semibold text-cyan-400 md:text-3xl"
                        >
                            {text}
                        </motion.h2>

                        <motion.p
                            variants={heroSubtitleVariant}
                            className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
                        >
                            {PERSONAL_INFO.subtitle}
                        </motion.p>

                        {/* CTA Buttons */}

                        <motion.div
                            variants={heroCTAAnimation}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="btn-primary btn-glow"
                            >
                                View AI Projects
                                <ArrowRight size={18} />
                            </button>

                            <Link
                                href="/resume/Rakesh-Kumar-AI-Backend-Engineer.pdf"
                                target="_blank"
                                className="btn-secondary"
                            >
                                <Download size={18} />
                                Download Resume
                            </Link>
                        </motion.div>

                        {/* Social Links */}

                        <motion.div
                            variants={heroCTAAnimation}
                            className="mt-10 flex gap-4"
                        >
                            {SOCIAL_LINKS.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    className="icon-box-sm border-soft transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                                >
                                    {/*{social.icon === "github" && <Github size={20} />}*/}
                                    {/*{social.icon === "linkedin" && <Linkedin size={20} />}*/}
                                    {social.icon === "mail" && <Mail size={20} />}
                                </Link>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE */}

                    <motion.div
                        variants={fadeUpChild}
                        className="relative flex justify-center"
                    >
                        {/* Outer Glow */}

                        <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

                        {/* Main Glass Card */}

                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="dashboard-card relative w-full max-w-md rounded-[32px] p-8"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-400">Current Focus</p>

                                    <h3 className="mt-2 text-xl font-semibold text-white">
                                        GraphRAG + AI Agents
                                    </h3>
                                </div>

                                <div className="icon-box rounded-full">AI</div>
                            </div>

                            {/* Focus Areas */}

                            <div className="space-y-4">
                                {[
                                    "Enterprise GraphRAG Systems",
                                    "LLM API Infrastructure",
                                    "LangGraph Multi-Agent Workflows",
                                    "FastAPI + Neo4j + Vector Search",
                                    "Cloud-Native AI Backend",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-cyan-400" />

                                        <span className="text-sm text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Availability */}

                            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                                <p className="text-sm text-cyan-300">Status</p>

                                <p className="mt-1 font-semibold text-white">
                                    Open to AI Backend Engineer opportunities.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* HERO STATS */}

                <motion.div
                    variants={staggerContainer(0.15, 0.5)}
                    initial="hidden"
                    animate="visible"
                    className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {HERO_STATS.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUpChild}
                            className="dashboard-card text-center"
                        >
                            <h3 className="hero-gradient text-4xl font-bold">
                                {stat.value}
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-16 flex justify-center"
                >
                    <button
                        onClick={() => scrollToSection("about")}
                        className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                    >
            <span className="text-xs uppercase tracking-[0.3em]">
              Scroll
            </span>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                            className="flex h-10 w-6 justify-center rounded-full border border-cyan-400/30 pt-2"
                        >
                            <div className="h-2 w-2 rounded-full bg-cyan-400" />
                        </motion.div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}