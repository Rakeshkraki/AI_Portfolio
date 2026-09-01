"use client";

// ============================================================
// components/hero/Hero.tsx
// Cinematic AI Hero Section
// Part 1/3
// ============================================================

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

export default function Hero() {
    const bootCompleted = useSystemStore((s) => s.bootCompleted);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !bootCompleted) return null;

    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden"
        >
            {/* =====================================================
           3D Hero Scene (Next File)
      ====================================================== */}

            <HeroScene />

            {/* Overlay Gradient */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#040506]" />

            {/* =====================================================
            Hero Content
      ====================================================== */}

            <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="visible"
                className="container-ai relative z-10 flex min-h-screen flex-col justify-center"
            >
                {/* ---------- System Badge ---------- */}

                <motion.div
                    variants={heroItem}
                    className="mb-10 flex items-center gap-4"
                >
                    <div className="status-pill">
                        <span className="status-dot" />
                        {PROFILE.status}
                    </div>

                    <div className="hidden md:block h-px w-20 bg-gradient-to-r from-cyan-400 to-transparent" />

                    <p className="mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                        Production AI Infrastructure
                    </p>
                </motion.div>

                {/* ---------- Huge Name ---------- */}

                <motion.div variants={heroItem}>
                    <h1 className="hero-title hero-gradient">
                        RAKESH
                    </h1>

                    <h1 className="hero-title text-white">
                        K
                    </h1>
                </motion.div>

                {/* ---------- Role ---------- */}

                <motion.div variants={heroItem} className="mt-6">
                    <h2 className="display-text max-w-3xl text-2xl font-semibold text-slate-200 md:text-4xl">
                        {PROFILE.title}
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        Building production-grade LLM systems, GraphRAG,
                        multi-agent architectures, inference pipelines,
                        vector databases, knowledge graphs and AI
                        infrastructure that operates at scale.
                    </p>
                </motion.div>

                {/* ---------- CTA ---------- */}

                <motion.div
                    variants={heroItem}
                    className="mt-10 flex flex-wrap gap-5"
                >
                    <motion.button
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                        onClick={() => scrollToSection("system")}
                        className="btn-primary flex items-center gap-3"
                    >
                        <Sparkles size={18} />

                        Explore System
                    </motion.button>

                    <motion.button
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                        onClick={() => scrollToSection("experience")}
                        className="btn-secondary flex items-center gap-3"
                    >
                        View Experience

                        <ArrowUpRight size={18} />
                    </motion.button>
                </motion.div>
                {/* =====================================================
              Hero Metrics
        ====================================================== */}

                <motion.div
                    variants={staggerContainer(0.15, 0.3)}
                    initial="hidden"
                    animate="visible"
                    className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                    {HERO_METRICS.map((metric) => (
                        <motion.div
                            key={metric.label}
                            variants={metricReveal}
                            className="glass-card p-5"
                        >
                            <h3 className="metric-value text-cyan-300">
                                {metric.value}
                            </h3>

                            <p className="metric-label mt-3 leading-5">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* =====================================================
              Scroll Indicator
        ====================================================== */}

                <motion.div
                    animate={floatingAnimation}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => scrollToSection("system")}
                        className="flex flex-col items-center gap-2 text-cyan-300/70 hover:text-cyan-300"
                    >
            <span className="mono text-[10px] uppercase tracking-[0.35em]">
              Scroll
            </span>

                        <ArrowDown size={18} />
                    </button>
                </motion.div>
            </motion.div>
            {/* =====================================================
            Left HUD
      ====================================================== */}

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="absolute left-5 top-1/2 hidden -translate-y-1/2 xl:block"
            >
                <div className="glass-card space-y-5 p-5">
                    {SYSTEM_STATUS.map((item) => (
                        <div key={item.label}>
                            <p className="mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                                {item.label}
                            </p>

                            <p className="mt-1 text-sm font-medium text-cyan-300">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* =====================================================
            Right Floating Stack
      ====================================================== */}

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="absolute right-5 top-1/2 hidden -translate-y-1/2 xl:flex xl:flex-col xl:gap-5"
            >
                {[
                    Brain,
                    Database,
                    Network,
                    Cpu,
                    Activity,
                ].map((Icon, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.15,
                            rotate: 8,
                        }}
                        className="glass-card flex h-14 w-14 items-center justify-center border border-cyan-400/10 bg-black/30 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.12)]"
                    >
                        <Icon size={20} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}