"use client";

// ============================================================
// components/experience/ExperienceTimeline.tsx
// CRI Pumps + AI Engineering Timeline
// Part 1/4
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2,
    Brain,
    Database,
    Cpu,
    ChevronDown,
    CheckCircle2,
    Code2,
    Network,
    Sparkles,
} from "lucide-react";

import {
    fadeUp,
    staggerContainer,
    heroItem,
} from "@/lib/motion";

const experiences = [
    {
        year: "2021",
        title: "Software Engineer",
        company: "CRI Pumps Pvt. Ltd.",
        icon: Building2,
        color: "#22D3EE",
        summary:
            "Started working on Dassault Systèmes 3DEXPERIENCE and ENOVIA customization.",
        achievements: [
            "Customized ENOVIA JPOs and MQL programs.",
            "Developed Java integrations with 3DEXPERIENCE.",
            "Created XML utilities for engineering data.",
            "Worked on PLM object relationships and BOM structures.",
        ],
        tech: [
            "Java",
            "ENOVIA",
            "MQL",
            "3DEXPERIENCE",
            "JPO",
            "TCL",
        ],
    },

    {
        year: "2023",
        title: "CAD Migration Engineer",
        company: "CRI Digital Engineering",
        icon: Database,
        color: "#10B981",
        summary:
            "Worked on enterprise CAD migration and EDAT automation for millions of engineering objects.",
        achievements: [
            "Built EDAT extraction utilities.",
            "Automated XML cleanup and validation.",
            "Migrated CATIA, SOLIDWORKS and Inventor metadata.",
            "Created Java utilities for CAD relationships.",
        ],
        tech: [
            "Java",
            "EDAT",
            "XML",
            "PowerShell",
            "CAD",
            "CATIA",
            "SolidWorks",
        ],
    },

    {
        year: "2024",
        title: "Migration Automation Specialist",
        company: "Enterprise Migration Platform",
        icon: Code2,
        color: "#F59E0B",
        summary:
            "Developed automation pipelines for large-scale engineering migrations.",
        achievements: [
            "Bulk document attribute updates.",
            "Ownership migration utilities.",
            "Relationship extraction APIs.",
            "Excel-driven migration tools.",
        ],
        tech: [
            "Apache POI",
            "Jackson",
            "Java",
            "REST APIs",
            "JSON",
            "XML",
        ],
    },

    {
        year: "2025",
        title: "AI Engineer",
        company: "Enterprise AI Systems",
        icon: Brain,
        color: "#8B5CF6",
        summary:
            "Transitioned into GraphRAG, LLM orchestration and AI infrastructure engineering.",
        achievements: [
            "Built GraphRAG prototypes.",
            "Implemented Neo4j knowledge graphs.",
            "Integrated vector search with Qdrant.",
            "Designed multi-agent AI workflows.",
        ],
        tech: [
            "LangGraph",
            "Neo4j",
            "Qdrant",
            "OpenAI",
            "Python",
            "FastAPI",
        ],
    },

    {
        year: "2026",
        title: "Production AI Infrastructure Engineer",
        company: "Current Focus",
        icon: Cpu,
        color: "#6366F1",
        summary:
            "Building scalable AI infrastructure for enterprise assistants and autonomous workflows.",
        achievements: [
            "GPU inference pipelines.",
            "vLLM deployment architecture.",
            "AI observability.",
            "Knowledge-driven enterprise copilots.",
        ],
        tech: [
            "Docker",
            "Kubernetes",
            "vLLM",
            "LangSmith",
            "OpenTelemetry",
            "Redis",
        ],
    },
];

function ExperienceCard({
                            experience,
                            expanded,
                            onToggle,
                        }: {
    experience: (typeof experiences)[number];
    expanded: boolean;
    onToggle: () => void;
}) {
    const Icon = experience.icon;

    return (
        <motion.div
            layout
            whileHover={{ y: -4 }}
            className="glass-card rounded-[30px] border border-cyan-400/10 overflow-hidden"
        >
            <button
                onClick={onToggle}
                className="w-full p-7 text-left"
            >
                <div className="flex items-start justify-between gap-5">
                    <div className="flex gap-5">
                        <div
                            className="flex h-14 w-14 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${experience.color}20`,
                                color: experience.color,
                            }}
                        >
                            <Icon size={26} />
                        </div>

                        <div>
                            <p
                                className="mono text-xs tracking-[0.3em]"
                                style={{ color: experience.color }}
                            >
                                {experience.year}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                {experience.title}
                            </h3>

                            <p className="mt-2 text-cyan-300">
                                {experience.company}
                            </p>

                            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                                {experience.summary}
                            </p>
                        </div>
                    </div>

                    <motion.div
                        animate={{ rotate: expanded ? 180 : 0 }}
                    >
                        <ChevronDown className="text-cyan-300" />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        className="border-t border-white/10 bg-black/20"
                    >
                        <div className="space-y-8 p-7">
                            {/* Achievements */}

                            <div>
                                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                                    KEY ACHIEVEMENTS
                                </p>

                                <div className="mt-5 space-y-4">
                                    {experience.achievements.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="mt-1 text-cyan-300"
                                            />

                                            <span className="text-slate-300">
                        {item}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}

                            <div>
                                <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                                    TECHNOLOGY STACK
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    {experience.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
// ============================================================
// CRI Enterprise Projects
// ============================================================

const projects = [
    {
        id: "3dx",
        title: "3DEXPERIENCE / ENOVIA Platform",
        icon: Building2,
        color: "#22D3EE",
        description:
            "Enterprise PLM customization using ENOVIA JPOs, MQL, Java APIs and 3DEXPERIENCE object model.",
        highlights: [
            "JPO Development",
            "MQL Programs",
            "Object Relationship APIs",
            "BOM & EBOM Extraction",
            "VPMReference / VPMInstance Handling",
        ],
        metrics: {
            objects: "500K+",
            utilities: "40+",
            automation: "95%",
        },
    },
    {
        id: "edat",
        title: "Enterprise CAD Migration (EDAT)",
        icon: Database,
        color: "#10B981",
        description:
            "Automated CAD migration pipeline supporting CATIA, SOLIDWORKS, Inventor and engineering metadata extraction.",
        highlights: [
            "CAD Extraction",
            "XML Cleanup",
            "Relationship Validation",
            "Import Automation",
            "Migration Reporting",
        ],
        metrics: {
            objects: "1M+",
            utilities: "25+",
            automation: "98%",
        },
    },
    {
        id: "java",
        title: "Java Migration Utilities",
        icon: Code2,
        color: "#F59E0B",
        description:
            "Developed reusable Java tools for XML processing, Excel reporting, ownership updates and metadata validation.",
        highlights: [
            "Apache POI Reporting",
            "Jackson JSON Utilities",
            "XML Parsing",
            "Bulk Attribute Updates",
            "PowerShell Automation",
        ],
        metrics: {
            objects: "100+ Utilities",
            utilities: "Reusable Library",
            automation: "100%",
        },
    },
    {
        id: "ai",
        title: "Enterprise GraphRAG Assistant",
        icon: Brain,
        color: "#8B5CF6",
        description:
            "Knowledge Graph powered enterprise assistant combining Neo4j, Qdrant and LLM reasoning.",
        highlights: [
            "GraphRAG Retrieval",
            "Neo4j Knowledge Graph",
            "Qdrant Vector Search",
            "LangGraph Agents",
            "Streaming Responses",
        ],
        metrics: {
            objects: "32K Context",
            utilities: "6 AI Agents",
            automation: "Low Latency",
        },
    },
];

// ============================================================
// Interactive Project Card
// ============================================================

function ProjectCard({
                         project,
                     }: {
    project: (typeof projects)[number];
}) {
    const Icon = project.icon;

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-[30px] border border-cyan-400/10 overflow-hidden"
        >
            {/* Header */}

            <div className="p-7">
                <div className="mb-5 flex items-center justify-between">
                    <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color,
                        }}
                    >
                        <Icon size={26} />
                    </div>

                    <div
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                        }}
                    >
                        LIVE PROJECT
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                </p>

                {/* Highlights */}

                <div className="mt-6 flex flex-wrap gap-3">
                    {project.highlights.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300"
                        >
              {item}
            </span>
                    ))}
                </div>
            </div>

            {/* Metrics */}

            <div className="grid grid-cols-3 border-t border-white/10 bg-black/20">
                {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                        key={key}
                        className="border-r border-white/10 p-5 last:border-r-0"
                    >
                        <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            {key}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-cyan-300">
                            {value}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================
// Architecture Preview (Code Window)
// ============================================================

const architecturePreview = `User Query
      │
      ▼
GraphRAG Retriever
      │
 ├── Neo4j Traversal
 ├── Vector Search (Qdrant)
 └── Hybrid Reranker
      │
      ▼
LangGraph Agent Planner
      │
      ▼
LLM Inference (GPT / vLLM)
      │
      ▼
Grounded Enterprise Response`;

function ArchitecturePreview() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card overflow-hidden rounded-[30px] border border-cyan-400/10"
        >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                    <Network size={18} className="text-cyan-300" />

                    <span className="mono text-xs text-cyan-300">
            enterprise_ai_architecture.md
          </span>
                </div>

                <div className="status-pill">
                    <span className="status-dot" />
                    GraphRAG
                </div>
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-cyan-300">
        <code>{architecturePreview}</code>
      </pre>
        </motion.div>
    );
}

// ============================================================
// Engineering Dashboard
// ============================================================

const engineeringStats = [
    ["Java Utilities", "60+"],
    ["Migration Programs", "25+"],
    ["CAD Objects Processed", "1M+"],
    ["Enterprise APIs", "50+"],
    ["GraphRAG Pipelines", "8+"],
    ["LLM Integrations", "12+"],
];

function EngineeringDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[30px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8 flex items-center gap-3">
                <Sparkles className="text-cyan-300" />

                <div>
                    <p className="mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                        ENGINEERING DASHBOARD
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold text-white">
                        Project Impact
                    </h3>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {engineeringStats.map(([label, value]) => (
                    <motion.div
                        key={label}
                        whileHover={{ y: -5 }}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                        <p className="mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                            {label}
                        </p>

                        <h4 className="mt-3 text-3xl font-semibold hero-gradient">
                            {value}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default function ExperienceTimeline() {
    const [expanded, setExpanded] = useState("2026");

    return (
        <section
            id="experience"
            className="relative overflow-hidden py-32"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_55%)]" />

            <motion.div
                variants={staggerContainer(0.18)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container-ai relative z-10"
            >
                {/* Heading */}

                <motion.div variants={fadeUp} className="text-center">
                    <div className="status-pill mx-auto w-fit">
                        <span className="status-dot" />
                        PROFESSIONAL JOURNEY
                    </div>

                    <h2 className="section-title mt-6 hero-gradient">
                        BUILDING ENTERPRISE SYSTEMS
                        <br />
                        SINCE 2021
                    </h2>

                    <p className="section-subtitle mx-auto mt-6 max-w-3xl">
                        From PLM engineering and CAD migration to production AI
                        infrastructure, my journey has evolved into building intelligent
                        enterprise systems powered by GraphRAG and LLMs.
                    </p>
                </motion.div>
                {/* Timeline */}

                <div className="relative mt-24">
                    {/* Center Line */}

                    <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-blue-500" />

                    <div className="space-y-10">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.year}
                                variants={heroItem}
                                className="relative pl-20"
                            >
                                {/* Timeline Dot */}

                                <motion.div
                                    animate={{
                                        scale: [1, 1.15, 1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        delay: index * 0.3,
                                    }}
                                    className="absolute left-[18px] top-10 h-6 w-6 rounded-full border-4 border-[#040506] bg-cyan-400 shadow-[0_0_18px_#22D3EE]"
                                />

                                <ExperienceCard
                                    experience={experience}
                                    expanded={expanded === experience.year}
                                    onToggle={() =>
                                        setExpanded(
                                            expanded === experience.year
                                                ? ""
                                                : experience.year
                                        )
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* =====================================================
      Enterprise Projects
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28"
                >
                    <motion.div variants={fadeUp}>
                        <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                            MAJOR ENTERPRISE PROJECTS
                        </p>

                        <h3 className="mt-4 text-4xl font-semibold text-white">
                            Projects I've Built at CRI & AI Infrastructure
                        </h3>
                    </motion.div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </motion.div>

                {/* =====================================================
      Architecture + Dashboard
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.18)}
                    className="mt-24 grid gap-8 lg:grid-cols-[1fr_1fr]"
                >
                    <motion.div variants={fadeUp}>
                        <ArchitecturePreview />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <EngineeringDashboard />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}