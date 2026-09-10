"use client";

// ============================================================
// components/contact/ContactSection.tsx
// Premium Contact Section
// Part 1/5
// ============================================================

import { motion } from "framer-motion";

import {
    Mail,
    Link,
    MapPin,
    Download,
    ArrowUpRight,
    Sparkles,
    Calendar,
} from "lucide-react";

import {
    fadeUp,
    heroItem,
    staggerContainer,
} from "@/lib/motion";

// ============================================================
// Contact Information
// ============================================================

const contactInfo = [
    {
        title: "Email",
        value: "rakesh@example.com",
        href: "mailto:rakesh@example.com",
        icon: Mail,
        color: "#22D3EE",
    },
    {
        title: "GitHub",
        value: "github.com/rakesh-ai",
        href: "https://github.com/rakesh-ai",
        icon: Link,
        color: "#8B5CF6",
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/rakesh-ai",
        href: "https://linkedin.com/in/rakesh-ai",
        icon: Link,
        color: "#0EA5E9",
    },
    {
        title: "Location",
        value: "Bengaluru, India",
        href: "#",
        icon: MapPin,
        color: "#10B981",
    },
];

// ============================================================
// Contact Hero Banner
// ============================================================

function ContactHero() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[46px] border border-cyan-400/10 bg-gradient-to-br from-[#05111D] via-[#09101D] to-[#180F2B] p-10"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 80,
                    ease: "linear",
                }}
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    AVAILABLE FOR AI OPPORTUNITIES
                </div>

                <h2 className="hero-gradient text-5xl font-bold leading-tight">
                    LET'S BUILD AI PRODUCTS TOGETHER
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    Open to AI Backend Engineer, GenAI Engineer, AI Platform Engineer,
                    GraphRAG Engineer and AI Infrastructure opportunities.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="mailto:rakesh@example.com"
                        className="btn-primary inline-flex items-center gap-3"
                    >
                        Say Hello
                        <ArrowUpRight size={18} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="/resume.pdf"
                        download
                        className="rounded-full border border-white/10 px-6 py-3 text-white"
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
// ============================================================
// Contact Cards
// ============================================================

function ContactCard({
                         item,
                     }: {
    item: (typeof contactInfo)[number];
}) {
    const Icon = item.icon;

    return (
        <motion.a
            variants={heroItem}
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            href={item.href}
            target={item.title !== "Location" ? "_blank" : undefined}
            rel="noreferrer"
            className="glass-card rounded-[28px] border border-cyan-400/10 p-6 block"
        >
            <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                }}
            >
                <Icon size={24} />
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                {item.title}
            </p>

            <h4 className="mt-3 text-white font-semibold break-all">
                {item.value}
            </h4>
        </motion.a>
    );
}

function ContactGrid() {
    return (
        <motion.div
            variants={staggerContainer(0.15)}
            className="grid gap-6 md:grid-cols-2"
        >
            {contactInfo.map((item) => (
                <ContactCard key={item.title} item={item} />
            ))}
        </motion.div>
    );
}

// ============================================================
// Availability Card
// ============================================================

function AvailabilityCard() {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            className="glass-card rounded-[36px] border border-green-400/20 p-8"
        >
            <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                    <div className="status-pill mb-4 w-fit bg-green-500/10 text-green-300 border-green-400/20">
                        <span className="status-dot bg-green-400" />
                        CURRENT STATUS
                    </div>

                    <h3 className="text-3xl font-semibold text-white">
                        Available for Full-Time AI Engineering Roles
                    </h3>

                    <p className="mt-4 text-slate-400 leading-7">
                        Interested in building production AI systems, GraphRAG platforms,
                        enterprise copilots and AI infrastructure.
                    </p>
                </div>

                <div className="rounded-3xl border border-green-400/20 bg-green-400/10 px-8 py-6 text-center">
                    <p className="text-sm uppercase tracking-widest text-green-300">
                        RESPONSE TIME
                    </p>

                    <h4 className="mt-3 text-3xl font-bold text-green-300">
                        24 Hours
                    </h4>
                </div>
            </div>
        </motion.div>
    );
}
// ============================================================
// Resume Download Card
// ============================================================

function ResumeCard() {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                        <Download size={28} />
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                        AI Backend Engineer Resume
                    </h3>

                    <p className="mt-4 text-slate-400 leading-7">
                        Resume focused on GraphRAG, AI Backend Engineering, Multi-Agent Systems,
                        FastAPI, Neo4j, Qdrant and Production AI Infrastructure.
                    </p>
                </div>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="/resume.pdf"
                    download
                    className="btn-primary inline-flex items-center gap-3"
                >
                    Download
                    <ArrowUpRight size={18} />
                </motion.a>
            </div>
        </motion.div>
    );
}
// ============================================================
// AI Collaboration Cards
// ============================================================

const collaborationAreas = [
    {
        title: "Enterprise AI Platforms",
        description:
            "GraphRAG systems, AI copilots, semantic search and knowledge assistants.",
        color: "#22D3EE",
    },
    {
        title: "Backend AI Engineering",
        description:
            "FastAPI services, streaming APIs, async inference and scalable AI architecture.",
        color: "#8B5CF6",
    },
    {
        title: "Agentic AI Systems",
        description:
            "LangGraph orchestration, planner agents, retrievers and evaluators.",
        color: "#10B981",
    },
    {
        title: "AI Infrastructure",
        description:
            "Docker, Kubernetes, Redis, observability and production deployment.",
        color: "#F59E0B",
    },
];

function CollaborationCards() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
        >
            {collaborationAreas.map((area) => (
                <motion.div
                    key={area.title}
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6"
                >
                    <div
                        className="mb-4 h-3 w-16 rounded-full"
                        style={{ backgroundColor: area.color }}
                    />

                    <h4
                        className="text-xl font-semibold"
                        style={{ color: area.color }}
                    >
                        {area.title}
                    </h4>

                    <p className="mt-4 text-slate-400 leading-7">
                        {area.description}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// Preferred Roles
// ============================================================

const preferredRoles = [
    "AI Backend Engineer",
    "GenAI Engineer",
    "GraphRAG Engineer",
    "AI Platform Engineer",
    "LLM Application Engineer",
    "Agentic AI Engineer",
    "AI Infrastructure Engineer",
    "Machine Learning Platform Engineer",
];

function PreferredRoles() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    PREFERRED OPPORTUNITIES
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Roles I'm Currently Looking For
                </h3>
            </div>

            <div className="flex flex-wrap gap-4">
                {preferredRoles.map((role) => (
                    <motion.div
                        key={role}
                        whileHover={{
                            scale: 1.05,
                            rotate: -1,
                        }}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm text-cyan-300"
                    >
                        {role}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Availability Timeline
// ============================================================

const availabilityTimeline = [
    {
        stage: "Initial Conversation",
        color: "#22D3EE",
    },
    {
        stage: "Technical Discussion",
        color: "#8B5CF6",
    },
    {
        stage: "AI System Design Round",
        color: "#10B981",
    },
    {
        stage: "Coding / Backend Round",
        color: "#F59E0B",
    },
    {
        stage: "Offer / Collaboration",
        color: "#EC4899",
    },
];

function AvailabilityTimeline() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    HIRING PROCESS
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Ready for AI Engineering Interviews
                </h3>
            </div>

            <div className="space-y-5">
                {availabilityTimeline.map((step, index) => (
                    <div key={step.stage}>
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-5 rounded-[22px] border border-white/10 bg-black/20 p-5"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    delay: index * 0.2,
                                }}
                                className="h-4 w-4 rounded-full"
                                style={{
                                    backgroundColor: step.color,
                                    boxShadow: `0 0 12px ${step.color}`,
                                }}
                            />

                            <span className="text-white font-medium">
                {step.stage}
              </span>
                        </motion.div>

                        {index !== availabilityTimeline.length - 1 && (
                            <div className="ml-7 h-5 w-px bg-gradient-to-b from-cyan-400 to-violet-500" />
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Social Presence Dashboard
// ============================================================

const socialPresence = [
    {
        platform: "GitHub",
        value: "AI Projects • GraphRAG • FastAPI",
        color: "#22D3EE",
    },
    {
        platform: "LinkedIn",
        value: "AI Backend Engineer Profile",
        color: "#0EA5E9",
    },
    {
        platform: "Email",
        value: "Professional Communication",
        color: "#10B981",
    },
];

function SocialDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-3"
        >
            {socialPresence.map((social) => (
                <motion.div
                    key={social.platform}
                    whileHover={{
                        y: -6,
                        scale: 1.03,
                    }}
                    className="glass-card rounded-[26px] border border-cyan-400/10 p-6 text-center"
                >
                    <div
                        className="mx-auto mb-4 h-3 w-16 rounded-full"
                        style={{ backgroundColor: social.color }}
                    />

                    <h4
                        className="text-lg font-semibold"
                        style={{ color: social.color }}
                    >
                        {social.platform}
                    </h4>

                    <p className="mt-3 text-sm text-slate-400 leading-6">
                        {social.value}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// Collaboration Banner
// ============================================================

function BuildAITogether() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[42px] border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-indigo-500/10 p-10"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear",
                }}
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    LET'S COLLABORATE
                </div>

                <h3 className="hero-gradient text-4xl font-bold">
                    Building the Next Generation of AI Applications
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    I'm excited to work on enterprise AI assistants, GraphRAG systems,
                    AI agents, semantic search platforms and production AI infrastructure.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:rakesh@example.com"
                    className="btn-primary mt-8 inline-flex items-center gap-3"
                >
                    Start a Conversation
                    <ArrowUpRight size={18} />
                </motion.a>
            </div>
        </motion.div>
    );
}
// ============================================================
// Interactive Contact Form
// ============================================================

function ContactFormCard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    SEND A MESSAGE
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Let's Discuss AI Opportunities
                </h3>
            </div>

            <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Company / Organization"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />

                <textarea
                    rows={6}
                    placeholder="Tell me about your AI project or opportunity..."
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    type="submit"
                    className="btn-primary inline-flex items-center gap-3"
                >
                    Send Message
                    <ArrowUpRight size={18} />
                </motion.button>
            </form>
        </motion.div>
    );
}
// ============================================================
// Global Availability
// ============================================================

const timezones = [
    "India (IST)",
    "Europe (CET)",
    "United Kingdom (BST/GMT)",
    "US East (EST)",
    "US West (PST)",
];

function TimezoneAvailability() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[38px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    GLOBAL AVAILABILITY
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Available Across Multiple Time Zones
                </h3>
            </div>

            <div className="space-y-5">
                {timezones.map((zone, index) => (
                    <motion.div
                        key={zone}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between rounded-[22px] border border-white/10 bg-black/20 p-5"
                    >
                        <div className="flex items-center gap-4">
                            <Calendar className="text-cyan-300" size={20} />

                            <span className="text-white">{zone}</span>
                        </div>

                        <div className="rounded-full bg-green-500/10 px-4 py-2 text-xs text-green-300">
                            Available
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-green-400/20 bg-green-400/5 p-5">
                <p className="text-green-300 font-medium">
                    Typical response time: Within 24 hours
                </p>
            </div>
        </motion.div>
    );
}
// ============================================================
// AI Services Cards
// ============================================================

const aiServices = [
    {
        title: "GraphRAG Development",
        desc: "Enterprise retrieval systems powered by vector search and knowledge graphs.",
        color: "#22D3EE",
    },
    {
        title: "AI Backend APIs",
        desc: "FastAPI-based scalable AI inference and streaming APIs.",
        color: "#8B5CF6",
    },
    {
        title: "Agentic AI Workflows",
        desc: "LangGraph planners, retrievers, memory systems and tool calling.",
        color: "#10B981",
    },
    {
        title: "Semantic Search Platforms",
        desc: "Production-ready hybrid retrieval and embedding pipelines.",
        color: "#F59E0B",
    },
];

function AIServicesCards() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
        >
            {aiServices.map((service) => (
                <motion.div
                    key={service.title}
                    whileHover={{
                        y: -6,
                        scale: 1.02,
                    }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6"
                >
                    <div
                        className="mb-5 h-3 w-16 rounded-full"
                        style={{ backgroundColor: service.color }}
                    />

                    <h4
                        className="text-xl font-semibold"
                        style={{ color: service.color }}
                    >
                        {service.title}
                    </h4>

                    <p className="mt-4 text-slate-400 leading-7">
                        {service.desc}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// Floating Quick Contact Buttons
// ============================================================

const quickActions = [
    {
        label: "Email",
        icon: Mail,
        color: "#22D3EE",
        href: "mailto:rakesh@example.com",
    },
    {
        label: "GitHub",
        icon: Link,
        color: "#8B5CF6",
        href: "https://github.com/rakesh-ai",
    },
    {
        label: "LinkedIn",
        icon: Link,
        color: "#0EA5E9",
        href: "https://linkedin.com/in/rakesh-ai",
    },
];

function QuickActions() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8 text-center">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    QUICK CONTACT
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Reach Me Instantly
                </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                {quickActions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <motion.a
                            key={action.label}
                            whileHover={{
                                scale: 1.08,
                                y: -5,
                            }}
                            href={action.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center gap-3 rounded-[28px] border border-white/10 bg-black/20 px-8 py-6"
                        >
                            <div
                                className="flex h-14 w-14 items-center justify-center rounded-full"
                                style={{
                                    backgroundColor: `${action.color}20`,
                                    color: action.color,
                                }}
                            >
                                <Icon size={24} />
                            </div>

                            <span className="text-sm text-white">
                {action.label}
              </span>
                        </motion.a>
                    );
                })}
            </div>
        </motion.div>
    );
}
// ============================================================
// Collaboration Calendar Card
// ============================================================

const meetingSlots = [
    "Monday — 10 AM to 7 PM IST",
    "Tuesday — 10 AM to 7 PM IST",
    "Wednesday — 10 AM to 7 PM IST",
    "Thursday — 10 AM to 7 PM IST",
    "Friday — 10 AM to 7 PM IST",
];

function CollaborationCalendar() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    MEETING AVAILABILITY
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Preferred Discussion Window
                </h3>
            </div>

            <div className="space-y-4">
                {meetingSlots.map((slot) => (
                    <motion.div
                        key={slot}
                        whileHover={{ x: 5 }}
                        className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-slate-300"
                    >
                        {slot}
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-cyan-400/20 bg-cyan-400/5 p-5">
                <p className="text-cyan-300 font-medium">
                    Flexible for international interviews outside IST when scheduled in advance.
                </p>
            </div>
        </motion.div>
    );
}
// ============================================================
// Why Hire Me Dashboard
// ============================================================

const whyHireMe = [
    {
        title: "Production AI Mindset",
        description:
            "Experience building scalable AI backend architectures instead of demo-only AI applications.",
        color: "#22D3EE",
    },
    {
        title: "GraphRAG Expertise",
        description:
            "Knowledge graph retrieval combined with vector databases for enterprise search systems.",
        color: "#10B981",
    },
    {
        title: "Backend First Engineering",
        description:
            "Strong focus on FastAPI, async APIs, streaming responses and production deployment.",
        color: "#8B5CF6",
    },
    {
        title: "Agentic AI Development",
        description:
            "Building planner, retriever, evaluator and tool-based AI workflows using LangGraph.",
        color: "#F59E0B",
    },
];

function WhyHireMeDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[40px] border border-cyan-400/10 p-8"
        >
            <div className="mb-10">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    WHY HIRE ME
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    What I Bring as an AI Backend Engineer
                </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {whyHireMe.map((item) => (
                    <motion.div
                        key={item.title}
                        whileHover={{ y: -6 }}
                        className="rounded-[28px] border border-white/10 bg-black/20 p-6"
                    >
                        <div
                            className="mb-4 h-3 w-16 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />

                        <h4
                            className="text-xl font-semibold"
                            style={{ color: item.color }}
                        >
                            {item.title}
                        </h4>

                        <p className="mt-4 text-slate-400 leading-7">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Recruiter FAQ
// ============================================================

const recruiterFAQ = [
    {
        q: "What roles are you targeting?",
        a: "AI Backend Engineer, GenAI Engineer, AI Platform Engineer, GraphRAG Engineer and Agentic AI Engineer.",
    },
    {
        q: "Which AI stack do you specialize in?",
        a: "GPT-5, LangGraph, GraphRAG, Neo4j, Qdrant, FastAPI, Docker, Redis and OpenTelemetry.",
    },
    {
        q: "Can you build production AI APIs?",
        a: "Yes. I build scalable FastAPI services with streaming responses, async processing and retrieval pipelines.",
    },
    {
        q: "Do you work with knowledge graphs?",
        a: "Yes. I design hybrid GraphRAG systems combining Neo4j and vector databases.",
    },
];

function RecruiterFAQ() {
    return (
        <motion.div variants={fadeUp} className="space-y-6">
            <div className="text-center">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    RECRUITER FAQ
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Frequently Asked Questions
                </h3>
            </div>

            {recruiterFAQ.map((faq) => (
                <motion.div
                    key={faq.q}
                    whileHover={{ x: 5 }}
                    className="glass-card rounded-[26px] border border-cyan-400/10 p-6"
                >
                    <h4 className="text-lg font-semibold text-cyan-300">
                        {faq.q}
                    </h4>

                    <p className="mt-4 text-slate-400 leading-7">
                        {faq.a}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// Trust Metrics
// ============================================================

const trustMetrics = [
    {
        value: "20+",
        label: "AI Backend APIs",
        color: "#22D3EE",
    },
    {
        value: "12+",
        label: "AI Projects",
        color: "#8B5CF6",
    },
    {
        value: "10+",
        label: "LangGraph Agents",
        color: "#10B981",
    },
    {
        value: "24h",
        label: "Response Time",
        color: "#F59E0B",
    },
];

function TrustMetrics() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
            {trustMetrics.map((metric) => (
                <motion.div
                    key={metric.label}
                    whileHover={{
                        y: -6,
                        scale: 1.03,
                    }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6 text-center"
                >
                    <motion.h3
                        animate={{
                            textShadow: [
                                `0 0 10px ${metric.color}`,
                                `0 0 20px ${metric.color}`,
                                `0 0 10px ${metric.color}`,
                            ],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                        }}
                        className="text-4xl font-bold"
                        style={{ color: metric.color }}
                    >
                        {metric.value}
                    </motion.h3>

                    <p className="mt-4 text-sm text-slate-400">
                        {metric.label}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// AI Value Proposition
// ============================================================

const valueProps = [
    {
        title: "Enterprise AI Ready",
        desc: "Experience designing AI systems that scale beyond prototypes.",
        color: "#22D3EE",
    },
    {
        title: "Modern AI Stack",
        desc: "LLMs, GraphRAG, Vector Search, FastAPI, LangGraph and AI Infrastructure.",
        color: "#8B5CF6",
    },
    {
        title: "Backend Engineering Focus",
        desc: "Reliable APIs, async processing, streaming responses and deployment architecture.",
        color: "#10B981",
    },
];

function ValueProposition() {
    return (
        <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-3"
        >
            {valueProps.map((item) => (
                <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-[28px] border border-cyan-400/10 p-6"
                >
                    <div
                        className="mb-4 h-3 w-16 rounded-full"
                        style={{ backgroundColor: item.color }}
                    />

                    <h4
                        className="text-xl font-semibold"
                        style={{ color: item.color }}
                    >
                        {item.title}
                    </h4>

                    <p className="mt-4 text-slate-400 leading-7">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
// ============================================================
// Career Vision Banner
// ============================================================

function CareerVision() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[44px] border border-cyan-400/15 bg-gradient-to-r from-[#07131E] via-[#0A1020] to-[#1A1030] p-10"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 90,
                    ease: "linear",
                }}
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    AI CAREER VISION
                </div>

                <h3 className="hero-gradient text-4xl font-bold">
                    Building AI Infrastructure That Powers Millions of Users
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    My long-term goal is to engineer reliable AI platforms, GraphRAG systems,
                    agentic workflows and enterprise AI assistants that solve real-world problems.
                </p>
            </div>
        </motion.div>
    );
}
// ============================================================
// Recruiter CTA Banner
// ============================================================

function RecruiterCTA() {
    return (
        <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[46px] border border-cyan-400/15 bg-gradient-to-r from-[#06131F] via-[#0B1020] to-[#1A1030] p-10"
        >
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 100,
                    ease: "linear",
                }}
                className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-cyan-400/10"
            />

            <div className="relative z-10 max-w-3xl">
                <div className="status-pill mb-5 w-fit">
                    <span className="status-dot" />
                    OPEN FOR AI OPPORTUNITIES
                </div>

                <h3 className="hero-gradient text-5xl font-bold leading-tight">
                    Let's Build Enterprise AI Platforms Together
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                    Passionate about GraphRAG, AI Infrastructure, Multi-Agent Systems,
                    Retrieval AI, FastAPI and scalable backend engineering.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="mailto:rakesh@example.com"
                        className="btn-primary inline-flex items-center gap-3"
                    >
                        Contact Me
                        <ArrowUpRight size={18} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="/resume.pdf"
                        download
                        className="rounded-full border border-white/10 px-6 py-3 text-white"
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
// ============================================================
// Availability Badge Dashboard
// ============================================================

const availabilityBadges = [
    {
        label: "Full-Time Roles",
        color: "#22D3EE",
    },
    {
        label: "Remote Friendly",
        color: "#10B981",
    },
    {
        label: "Hybrid Friendly",
        color: "#8B5CF6",
    },
    {
        label: "Open to Relocation",
        color: "#F59E0B",
    },
];

function AvailabilityBadges() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    AVAILABILITY STATUS
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    Current Opportunity Preferences
                </h3>
            </div>

            <div className="flex flex-wrap gap-4">
                {availabilityBadges.map((badge) => (
                    <motion.div
                        key={badge.label}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full px-5 py-3 text-sm font-medium"
                        style={{
                            backgroundColor: `${badge.color}20`,
                            color: badge.color,
                            border: `1px solid ${badge.color}40`,
                        }}
                    >
                        ● {badge.label}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Social Footer Strip
// ============================================================

const footerLinks = [
    {
        label: "GitHub",
        href: "https://github.com/rakesh-ai",
        color: "#22D3EE",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/rakesh-ai",
        color: "#0EA5E9",
    },
    {
        label: "Email",
        href: "mailto:rakesh@example.com",
        color: "#10B981",
    },
];

function SocialFooterStrip() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[34px] border border-cyan-400/10 p-6"
        >
            <div className="flex flex-wrap items-center justify-center gap-6">
                {footerLinks.map((link) => (
                    <motion.a
                        key={link.label}
                        whileHover={{
                            scale: 1.08,
                        }}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm"
                        style={{ color: link.color }}
                    >
                        {link.label}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}
// ============================================================
// Final Divider
// ============================================================

function ContactDivider() {
    return (
        <motion.div
            variants={fadeUp}
            className="my-28 flex items-center justify-center"
        >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            <div className="mx-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
        <span className="mono text-xs tracking-[0.3em] text-cyan-300">
          END • THANK YOU
        </span>
            </div>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
        </motion.div>
    );
}
// ============================================================
// Thank You Banner
// ============================================================

function ThankYouBanner() {
    return (
        <motion.div
            variants={fadeUp}
            className="rounded-[44px] border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-indigo-500/10 p-12 text-center"
        >
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

            <h3 className="hero-gradient text-4xl font-bold">
                Thank You for Visiting My Portfolio
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                If you're building AI products, enterprise AI platforms or intelligent
                backend systems, I'd love to connect and collaborate.
            </p>

            <div className="mt-8 flex justify-center">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:rakesh@example.com"
                    className="btn-primary inline-flex items-center gap-3"
                >
                    Let's Connect
                    <ArrowUpRight size={18} />
                </motion.a>
            </div>
        </motion.div>
    );
}


export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden py-32"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.06),transparent_60%)]" />

            <motion.div
                variants={staggerContainer(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container-ai relative z-10 space-y-24"
            >
                {/* Hero */}

                <ContactHero />

                {/* Contact Cards */}

                <div>
                    <motion.div variants={fadeUp} className="mb-12 text-center">
                        <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                            GET IN TOUCH
                        </p>

                        <h2 className="section-title mt-4 hero-gradient">
                            CONTACT CHANNELS
                        </h2>
                    </motion.div>

                    <ContactGrid />
                </div>

                {/* Availability */}

                <AvailabilityCard />

                {/* Resume */}

                <ResumeCard />
                {/* =====================================================
      AI Collaboration
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <CollaborationCards />
                </motion.div>

                {/* =====================================================
      Preferred Roles
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <PreferredRoles />
                </motion.div>

                {/* =====================================================
      Availability Timeline
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <AvailabilityTimeline />
                </motion.div>

                {/* =====================================================
      Social Dashboard
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <SocialDashboard />
                </motion.div>

                {/* =====================================================
      Collaboration Banner
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <BuildAITogether />
                </motion.div>
                {/* =====================================================
      Contact Form
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <ContactFormCard />
                </motion.div>

                {/* =====================================================
      AI Services
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <AIServicesCards />
                </motion.div>

                {/* =====================================================
      Timezone Availability
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <TimezoneAvailability />
                </motion.div>

                {/* =====================================================
      Collaboration Calendar
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <CollaborationCalendar />
                </motion.div>

                {/* =====================================================
      Quick Contact Actions
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <QuickActions />
                </motion.div>
                {/* =====================================================
      Why Hire Me
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <WhyHireMeDashboard />
                </motion.div>

                {/* =====================================================
      Recruiter FAQ
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <RecruiterFAQ />
                </motion.div>

                {/* =====================================================
      Trust Metrics
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <TrustMetrics />
                </motion.div>

                {/* =====================================================
      Value Proposition
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <ValueProposition />
                </motion.div>

                {/* =====================================================
      Career Vision
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <CareerVision />
                </motion.div>
                {/* =====================================================
      Recruiter CTA
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <RecruiterCTA />
                </motion.div>

                {/* =====================================================
      Availability Badges
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <AvailabilityBadges />
                </motion.div>

                {/* =====================================================
      Social Footer Strip
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <SocialFooterStrip />
                </motion.div>

                {/* =====================================================
      Thank You Banner
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <ThankYouBanner />
                </motion.div>

                {/* =====================================================
      Divider
===================================================== */}

                <ContactDivider />
            </motion.div>
        </section>
    );
}
