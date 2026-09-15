"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Brain,
    Cpu,
    Database,
    Network,
    Activity,
    Sparkles,
} from "lucide-react";

import HeroScene from "./HeroScene";
import { PROFILE, SYSTEM_STATUS, HERO_METRICS } from "@/lib/constants";
import {
    heroContainer,
    heroItem,
    fadeUp,
    staggerContainer,
    metricReveal,
    floatingAnimation,
    buttonHover,
    buttonTap,
} from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";
import { useSystemStore } from "@/store/systemStore";

const FLOATING_ICONS = [Brain, Database, Network, Cpu, Activity];

export default function Hero() {
    const bootCompleted = useSystemStore((s) => s.bootCompleted);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted || !bootCompleted) return null;

    return (
        <section
            id="hero"
            className="relative isolate min-h-screen overflow-hidden pt-24 lg:pt-0"
        >
            <HeroScene />

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#040506]" />

            <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="visible"
                className="container-ai relative z-10 flex min-h-screen items-center"
            >
                <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
                    <div>
                        <motion.div variants={heroItem} className="mb-6 flex flex-wrap items-center gap-4">
                            <div className="status-pill">
                                <span className="status-dot" />
                                {PROFILE.status}
                            </div>

                            <span className="hidden h-px w-16 bg-cyan-400/40 md:block" />

                            <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                                Production AI Infrastructure
                            </p>
                        </motion.div>

                        <motion.div variants={heroItem}>
                            <h1 className="hero-title hero-gradient">RAKESH</h1>
                            <h1 className="hero-title text-white">K</h1>
                        </motion.div>

                        <motion.div variants={heroItem} className="mt-6 space-y-6">
                            <h2 className="max-w-3xl text-2xl font-semibold text-slate-100 md:text-4xl">
                                {PROFILE.title}
                            </h2>

                            <p className="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                                Building production-grade LLM systems, GraphRAG pipelines,
                                multi-agent architectures, vector databases, knowledge graphs,
                                semantic search, and scalable AI backend infrastructure.
                            </p>
                        </motion.div>

                        <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
                            <motion.button
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                onClick={() => scrollToSection("projects")}
                                className="btn-primary"
                            >
                                <Sparkles size={18} />
                                Explore Projects
                            </motion.button>

                            <motion.button
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                onClick={() => scrollToSection("experience")}
                                className="btn-secondary"
                            >
                                View Experience
                                <ArrowUpRight size={18} />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer(0.12, 0.2)}
                            initial="hidden"
                            animate="visible"
                            className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
                        >
                            {HERO_METRICS.map((metric) => (
                                <motion.div
                                    key={metric.label}
                                    variants={metricReveal}
                                    className="glass-card p-5"
                                >
                                    <h3 className="metric-value text-cyan-300">{metric.value}</h3>
                                    <p className="metric-label mt-2 text-sm text-slate-400">
                                        {metric.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="hidden lg:flex justify-end"
                    >
                        <div className="glass-card w-full max-w-sm space-y-4 p-6">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-cyan-300">AI Runtime Status</span>
                                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                            </div>

                            {SYSTEM_STATUS.map((item) => (
                                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </span>
                                    <span className="text-sm font-medium text-cyan-300">
                    {item.status}
                  </span>
                                </div>
                            ))}

                            <div className="mt-4 grid grid-cols-3 gap-3 pt-4">
                                {FLOATING_ICONS.map((Icon, index) => (
                                    <div
                                        key={index}
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300"
                                    >
                                        <Icon size={18} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.button
                    animate={floatingAnimation}
                    onClick={() => scrollToSection("about")}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-300/70 hover:text-cyan-300"
                >
                    <div className="flex flex-col items-center gap-2">
            <span className="mono text-[10px] uppercase tracking-[0.35em]">
              Scroll
            </span>
                        <ArrowDown size={18} />
                    </div>
                </motion.button>
            </motion.div>
        </section>
    );
}