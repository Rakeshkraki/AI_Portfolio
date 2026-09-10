"use client";

// ============================================================
// components/footer/Footer.tsx
// Premium AI Portfolio Footer
// Part 1/4
// ============================================================

import { motion } from "framer-motion";

import {
    ArrowUp,
    Link,
    Mail,
    Sparkles,
    Download,
    Heart,
} from "lucide-react";

import {
    fadeUp,
    heroItem,
    staggerContainer,
} from "@/lib/motion";
// ============================================================
// Footer Links
// ============================================================

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/rakesh-ai",
        icon: Link,
        color: "#22D3EE",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/rakesh-ai",
        icon: Link,
        color: "#0EA5E9",
    },
    {
        label: "Email",
        href: "mailto:rakesh@example.com",
        icon: Mail,
        color: "#10B981",
    },
];

const footerNavigation = [
    "Home",
    "Projects",
    "Experience",
    "Skills",
    "Contact",
];
// ============================================================
// Footer Branding
// ============================================================

function FooterBranding() {
    return (
        <motion.div
            variants={fadeUp}
            className="text-center"
        >
            <motion.div
                animate={{
                    rotate: [0, 8, -8, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10"
            >
                <Sparkles className="text-cyan-300" size={34} />
            </motion.div>

            <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                AI BACKEND ENGINEER PORTFOLIO
            </p>

            <h2 className="hero-gradient mt-5 text-5xl font-bold">
                Rakesh K
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                Building intelligent backend systems using GraphRAG, LangGraph,
                GPT-5, Neo4j, Qdrant, FastAPI and AI Infrastructure.
            </p>
        </motion.div>
    );
}
// ============================================================
// Social Links Grid
// ============================================================

function SocialLinksGrid() {
    return (
        <motion.div
            variants={staggerContainer(0.15)}
            className="flex flex-wrap justify-center gap-5"
        >
            {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                    <motion.a
                        key={link.label}
                        variants={heroItem}
                        whileHover={{
                            y: -5,
                            scale: 1.08,
                        }}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-card rounded-[28px] border border-cyan-400/10 px-8 py-5 flex items-center gap-4"
                    >
                        <Icon color={link.color} size={22} />

                        <span
                            className="font-medium"
                            style={{ color: link.color }}
                        >
              {link.label}
            </span>
                    </motion.a>
                );
            })}
        </motion.div>
    );
}
// ============================================================
// Footer Navigation
// ============================================================

function FooterNavigation() {
    return (
        <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
        >
            {footerNavigation.map((item) => (
                <motion.a
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 hover:border-cyan-400/20 hover:text-cyan-300"
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
}
// ============================================================
// Resume Download Footer Card
// ============================================================

function FooterResumeCard() {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-8 text-center"
        >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                <Download size={30} />
            </div>

            <h3 className="text-2xl font-semibold text-white">
                AI Backend Engineer Resume
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-slate-400 leading-7">
                Resume highlighting GraphRAG, Multi-Agent AI, FastAPI,
                Vector Databases, AI Infrastructure and Production AI Systems.
            </p>

            <motion.a
                whileHover={{ scale: 1.05 }}
                href="/resume.pdf"
                download
                className="btn-primary mt-8 inline-flex items-center gap-3"
            >
                Download Resume
                <Download size={18} />
            </motion.a>
        </motion.div>
    );
}
// ============================================================
// Back To Top Button
// ============================================================

function BackToTopButton() {
    return (
        <motion.a
            whileHover={{
                scale: 1.08,
                y: -5,
            }}
            href="#home"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.2)]"
        >
            <ArrowUp size={24} />
        </motion.a>
    );
}
// ============================================================
// AI Technology Ribbon
// ============================================================

const technologyRibbon = [
    "GPT-5",
    "GraphRAG",
    "LangGraph",
    "FastAPI",
    "Neo4j",
    "Qdrant",
    "Docker",
    "Redis",
    "Python",
    "Next.js",
    "Tailwind CSS",
    "OpenTelemetry",
];

function TechnologyRibbon() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card overflow-hidden rounded-[34px] border border-cyan-400/10 py-6"
        >
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 22,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap"
            >
                {[...technologyRibbon, ...technologyRibbon].map((tech, index) => (
                    <div
                        key={`${tech}-${index}`}
                        className="mx-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm text-cyan-300"
                    >
                        {tech}
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
// ============================================================
// Built With Stack
// ============================================================

const builtWithStack = [
    {
        category: "Frontend",
        tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
        color: "#22D3EE",
    },
    {
        category: "Animation",
        tools: ["Framer Motion", "SVG", "Glassmorphism"],
        color: "#8B5CF6",
    },
    {
        category: "AI Backend",
        tools: ["FastAPI", "Python", "AsyncIO"],
        color: "#10B981",
    },
    {
        category: "AI Retrieval",
        tools: ["Neo4j", "Qdrant", "GraphRAG"],
        color: "#F59E0B",
    },
];

function BuiltWithSection() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8 text-center">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    BUILT WITH
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Modern AI Engineering Stack
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {builtWithStack.map((stack) => (
                    <motion.div
                        key={stack.category}
                        whileHover={{ y: -5 }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 h-3 w-16 rounded-full"
                            style={{ backgroundColor: stack.color }}
                        />

                        <h4
                            className="text-xl font-semibold"
                            style={{ color: stack.color }}
                        >
                            {stack.category}
                        </h4>

                        <div className="mt-5 flex flex-wrap gap-3">
                            {stack.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                                >
                  {tool}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Engineering Principles
// ============================================================

const engineeringPrinciples = [
    {
        title: "Production First",
        description: "Design AI systems for reliability, scalability and observability.",
        color: "#22D3EE",
    },
    {
        title: "Backend Driven AI",
        description: "Strong APIs, async processing and streaming inference pipelines.",
        color: "#8B5CF6",
    },
    {
        title: "Retrieval Intelligence",
        description: "Combine knowledge graphs and vector databases for contextual AI.",
        color: "#10B981",
    },
    {
        title: "Continuous Learning",
        description: "Explore new LLM architectures, agent frameworks and AI tooling.",
        color: "#F59E0B",
    },
];

function EngineeringPrinciples() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
        >
            {engineeringPrinciples.map((principle) => (
                <motion.div
                    key={principle.title}
                    whileHover={{ y: -5 }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6"
                >
                    <div
                        className="mb-4 h-3 w-16 rounded-full"
                        style={{ backgroundColor: principle.color }}
                    />

                    <h4
                        className="text-xl font-semibold"
                        style={{ color: principle.color }}
                    >
                        {principle.title}
                    </h4>

                    <p className="mt-4 text-slate-400 leading-7">
                        {principle.description}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// Portfolio Stats Dashboard
// ============================================================

const portfolioStats = [
    { label: "AI Projects", value: "12+", color: "#22D3EE" },
    { label: "Backend APIs", value: "20+", color: "#8B5CF6" },
    { label: "GraphRAG Systems", value: "6+", color: "#10B981" },
    { label: "AI Agents Built", value: "10+", color: "#F59E0B" },
];

function PortfolioStats() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8 text-center">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    PORTFOLIO SNAPSHOT
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    AI Engineering Highlights
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {portfolioStats.map((stat) => (
                    <motion.div
                        key={stat.label}
                        whileHover={{
                            y: -5,
                            scale: 1.03,
                        }}
                        className="rounded-[24px] border border-white/10 bg-black/20 p-6 text-center"
                    >
                        <motion.h3
                            animate={{
                                textShadow: [
                                    `0 0 10px ${stat.color}`,
                                    `0 0 20px ${stat.color}`,
                                    `0 0 10px ${stat.color}`,
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                            }}
                            className="text-4xl font-bold"
                            style={{ color: stat.color }}
                        >
                            {stat.value}
                        </motion.h3>

                        <p className="mt-4 text-sm text-slate-400">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Glow Divider
// ============================================================

function GlowDivider() {
    return (
        <motion.div
            variants={fadeUp}
            className="flex items-center justify-center py-10"
        >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
                className="mx-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10"
            >
                <Sparkles className="text-cyan-300" size={18} />
            </motion.div>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
        </motion.div>
    );
}
// ============================================================
// AI Signature Banner
// ============================================================

function AISignatureBanner() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[44px] border border-cyan-400/15 bg-gradient-to-br from-[#05111D] via-[#0A1020] to-[#18122B] p-12 text-center"
        >
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 120,
                    ease: "linear",
                }}
                className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                    }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10"
                >
                    <Sparkles className="text-cyan-300" size={34} />
                </motion.div>

                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AI ENGINEERING SIGNATURE
                </p>

                <h2 className="hero-gradient mt-5 text-5xl font-bold">
                    Thanks for Visiting.
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                    Passionate about building production AI systems powered by GraphRAG,
                    Agentic AI, Retrieval-Augmented Generation, FastAPI and scalable AI infrastructure.
                </p>
            </div>
        </motion.div>
    );
}
// ============================================================
// Final Recruiter CTA
// ============================================================

function FinalCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="rounded-[38px] border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-indigo-500/10 p-10"
        >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                        READY TO COLLABORATE
                    </p>

                    <h3 className="mt-4 text-4xl font-bold text-white">
                        Let's Build the Future of AI Together
                    </h3>

                    <p className="mt-4 max-w-2xl text-slate-400 leading-7">
                        Open to AI Backend Engineer, GenAI Engineer, AI Platform Engineer,
                        GraphRAG Engineer and Agentic AI opportunities.
                    </p>
                </div>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:rakesh@example.com"
                    className="btn-primary inline-flex items-center gap-3"
                >
                    Contact Me
                    {/*<ArrowUpRight size={18} />*/}
                </motion.a>
            </div>
        </motion.div>
    );
}
// ============================================================
// Copyright Section
// ============================================================

function CopyrightSection() {
    return (
        <motion.div
            variants={fadeUp}
            className="border-t border-white/10 pt-10"
        >
            <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                <div>
                    <h4 className="text-xl font-semibold text-white">
                        Rakesh K
                    </h4>

                    <p className="mt-2 text-sm text-slate-500">
                        AI Backend Engineer • GraphRAG • GenAI • FastAPI • LangGraph
                    </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                    <span>Built with</span>

                    <Heart
                        size={16}
                        className="text-cyan-300 fill-cyan-300"
                    />

                    <span>Next.js + TypeScript + Tailwind CSS + Framer Motion</span>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-slate-600">
                © {new Date().getFullYear()} Rakesh K. All rights reserved.
            </div>
        </motion.div>
    );
}
// ============================================================
// Footer End Divider
// ============================================================

function FooterEndDivider() {
    return (
        <motion.div
            variants={fadeUp}
            className="flex items-center justify-center py-10"
        >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

            <div className="mx-5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
        <span className="mono text-xs tracking-[0.35em] text-cyan-300">
          END OF PORTFOLIO
        </span>
            </div>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        </motion.div>
    );
}

export default function Footer() {
    return (
        <footer className="relative overflow-hidden py-28">
            {/* Background Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.06),transparent_70%)]" />

            <motion.div
                variants={staggerContainer(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container-ai relative z-10 space-y-20"
            >
                <FooterBranding />

                <SocialLinksGrid />

                <FooterNavigation />

                <FooterResumeCard />

                <BackToTopButton />
                {/* =====================================================
      Technology Ribbon
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-20"
                >
                    <TechnologyRibbon />
                </motion.div>

                {/* =====================================================
      Built With Stack
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-20"
                >
                    <BuiltWithSection />
                </motion.div>

                {/* =====================================================
      Engineering Principles
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-20"
                >
                    <EngineeringPrinciples />
                </motion.div>

                {/* =====================================================
      Portfolio Statistics
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-20"
                >
                    <PortfolioStats />
                </motion.div>

                <GlowDivider />

                {/* Back To Top */}

                <BackToTopButton />
                {/* =====================================================
      AI Signature Banner
===================================================== */}

                <motion.div variants={staggerContainer(0.15)}>
                    <AISignatureBanner />
                </motion.div>

                {/* =====================================================
      Final CTA
===================================================== */}

                <motion.div variants={staggerContainer(0.15)}>
                    <FinalCTA />
                </motion.div>

                {/* =====================================================
      Copyright
===================================================== */}

                <motion.div variants={staggerContainer(0.15)}>
                    <CopyrightSection />
                </motion.div>

                <FooterEndDivider />
            </motion.div>
        </footer>
    );
}