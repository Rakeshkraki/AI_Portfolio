"use client";

// ============================================================
// components/about/AboutSection.tsx
// About / AI Engineer Introduction
// Part 1/3
// ============================================================

import {useMemo} from "react";
import {Code2, Server, Cloud, Boxes} from "lucide-react";
import {motion} from "framer-motion";
import {
    Brain,
    Cpu,
    Database,
    GitBranch,
    Sparkles,
    Network,
    ArrowUpRight,
} from "lucide-react";

import {PROFILE} from "@/lib/constants";
import {fadeUp, staggerContainer, heroItem} from "@/lib/motion";

// ------------------------------------------------------------
// Expertise Metrics
// ------------------------------------------------------------

const metrics = [
    {value: "5+", label: "Years Engineering Experience"},
    {value: "12+", label: "Enterprise AI Projects"},
    {value: "30+", label: "Production Integrations"},
    {value: "100K+", label: "Documents Indexed with AI"},
];

// ------------------------------------------------------------
// Expertise Cards
// ------------------------------------------------------------

const expertise = [
    {
        icon: Brain,
        title: "LLM Systems",
        description:
            "Production-ready GPT, Llama, Mistral and vLLM orchestration pipelines.",
    },
    {
        icon: Network,
        title: "GraphRAG",
        description:
            "Knowledge graph retrieval combined with vector similarity search.",
    },
    {
        icon: Database,
        title: "Vector Databases",
        description:
            "Qdrant, Pinecone, FAISS, embeddings, reranking and semantic retrieval.",
    },
    {
        icon: Cpu,
        title: "AI Infrastructure",
        description:
            "Docker, Kubernetes, GPU inference, observability and deployment.",
    },
    {
        icon: GitBranch,
        title: "Multi-Agent AI",
        description:
            "LangGraph, CrewAI, MCP, orchestration workflows and autonomous agents.",
    },
    {
        icon: Sparkles,
        title: "AI Applications",
        description:
            "Enterprise copilots, RAG assistants, AI search and workflow automation.",
    },
];

const orbitTech = [
    {name: "Next.js", color: "#38BDF8", angle: 0},
    {name: "Python", color: "#FBBF24", angle: 45},
    {name: "Neo4j", color: "#22D3EE", angle: 90},
    {name: "Qdrant", color: "#10B981", angle: 135},
    {name: "LangGraph", color: "#A855F7", angle: 180},
    {name: "Docker", color: "#2563EB", angle: 225},
    {name: "Kubernetes", color: "#6366F1", angle: 270},
    {name: "vLLM", color: "#F472B6", angle: 315},
];

{
    "// ============================================================"
}
// AI Technology Orbit
// ============================================================

function TechOrbit() {
    return (
        <div
            className="glass-card relative flex aspect-square items-center justify-center overflow-hidden rounded-[36px] border border-cyan-400/10 bg-gradient-to-br from-[#061018] to-[#040506]">
            {/* Orbit Rings */}

            {[140, 220, 300].map((size, index) => (
                <motion.div
                    key={size}
                    animate={{rotate: 360}}
                    transition={{
                        repeat: Infinity,
                        duration: 28 + index * 8,
                        ease: "linear",
                    }}
                    className="absolute rounded-full border border-cyan-400/10"
                    style={{
                        width: size,
                        height: size,
                    }}
                />
            ))}

            {/* AI Core */}

            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                        "0 0 15px #22D3EE55",
                        "0 0 45px #22D3EE",
                        "0 0 15px #22D3EE55",
                    ],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2.5,
                }}
                className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/10 backdrop-blur-xl"
            >
                <Brain size={40} className="text-cyan-300"/>
            </motion.div>

            {/* Orbiting Technologies */}

            {orbitTech.map((tech, index) => {
                const radius = 140;
                const radian = (tech.angle * Math.PI) / 180;

                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                    <motion.div
                        key={tech.name}
                        animate={{rotate: -360}}
                        transition={{
                            repeat: Infinity,
                            duration: 18,
                            ease: "linear",
                        }}
                        className="absolute z-30"
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.2,
                                y: -4,
                            }}
                            className="rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl"
                            style={{
                                color: tech.color,
                                boxShadow: `0 0 20px ${tech.color}33`,
                            }}
                        >
              <span className="text-xs font-semibold tracking-wide">
                {tech.name}
              </span>
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Floating Particles */}

            {Array.from({length: 20}).map((_, index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3 + index * 0.2,
                        delay: index * 0.1,
                    }}
                    className="absolute h-1 w-1 rounded-full bg-cyan-400"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
}

const timeline = [
    {
        year: "2021",
        title: "Software Engineer",
        company: "CRI Pumps",
        description:
            "Started working on ENOVIA / 3DEXPERIENCE customization, CAD migration and enterprise PLM systems.",
    },
    {
        year: "2023",
        title: "Migration Automation",
        company: "CRI Digital Engineering",
        description:
            "Developed Java utilities, XML processors, EDAT migration tools and automation pipelines.",
    },
    {
        year: "2025",
        title: "AI Engineer",
        company: "Enterprise AI Infrastructure",
        description:
            "Transitioned into GraphRAG, Vector Search, LangGraph, Neo4j and LLM infrastructure engineering.",
    },
    {
        year: "2026",
        title: "Production AI Systems",
        company: "Current Focus",
        description:
            "Building scalable enterprise AI assistants, agentic workflows, GPU inference and observability systems.",
    },
];

{
    "// ============================================================"
}
// Career Timeline
// ============================================================

function CareerTimeline() {
    return (
        <div className="glass-card rounded-[32px] border border-cyan-400/10 p-8">
            <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                    CAREER JOURNEY
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                    From PLM Engineering to AI Infrastructure
                </h3>
            </div>

            <div className="relative ml-3 border-l border-cyan-400/20 pl-8">
                {timeline.map((item, index) => (
                    <motion.div
                        key={item.year}
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{once: true}}
                        transition={{
                            delay: index * 0.2,
                        }}
                        className="relative mb-12"
                    >
                        {/* Timeline Dot */}

                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                delay: index * 0.3,
                            }}
                            className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border border-cyan-300 bg-cyan-400 shadow-[0_0_15px_#22D3EE]"
                        />

                        <span className="mono text-xs uppercase tracking-[0.3em] text-cyan-300">
              {item.year}
            </span>

                        <h4 className="mt-2 text-xl font-semibold text-white">
                            {item.title}
                        </h4>

                        <p className="text-cyan-300">{item.company}</p>

                        <p className="mt-3 leading-7 text-slate-400">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

{
    "// ============================================================"
}
// GraphRAG Workflow Terminal
// ============================================================

const graphCommands = [
    "$ user_prompt → Explain CRI CAD migration architecture",
    "",
    "Embedding query...",
    "Vector similarity search (Qdrant)...",
    "Knowledge Graph traversal (Neo4j)...",
    "Retrieve connected entities...",
    "Agent Planner selecting retrieval strategy...",
    "LLM Context Window Built (32K Tokens)",
    "Grounded Response Generated.",
];

function GraphTerminal() {
    return (
        <div className="glass-card overflow-hidden rounded-[32px] border border-cyan-400/10">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500"/>
                    <span className="h-3 w-3 rounded-full bg-yellow-500"/>
                    <span className="h-3 w-3 rounded-full bg-green-500"/>
                </div>

                <div className="flex items-center gap-2 text-cyan-300">
                    <Code2 size={16}/>
                    <span className="mono text-xs">
            graphrag_pipeline.py
          </span>
                </div>
            </div>

            <div className="space-y-4 p-6 font-mono text-sm">
                {graphCommands.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            x: -15,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{once: true}}
                        transition={{
                            delay: index * 0.08,
                        }}
                        className={
                            line.startsWith("$")
                                ? "text-cyan-300"
                                : "text-slate-300"
                        }
                    >
                        {line === "" ? <br/> : line}
                    </motion.div>
                ))}

                <motion.div
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.8,
                    }}
                    className="inline-block h-4 w-2 bg-cyan-400"
                />
            </div>
        </div>
    );
}

// ============================================================
// Current Focus Dashboard
// ============================================================

const currentFocus = [
    {
        icon: Brain,
        title: "Enterprise GraphRAG Platform",
        status: "ACTIVE",
        color: "#22D3EE",
        progress: "92%",
    },
    {
        icon: Network,
        title: "Multi-Agent AI Workflows",
        status: "IN DEVELOPMENT",
        color: "#8B5CF6",
        progress: "78%",
    },
    {
        icon: Database,
        title: "Knowledge Graph Retrieval",
        status: "OPTIMIZED",
        color: "#10B981",
        progress: "96%",
    },
    {
        icon: Cpu,
        title: "GPU Inference Infrastructure",
        status: "SCALING",
        color: "#6366F1",
        progress: "81%",
    },
];

function CurrentFocusDashboard() {
    return (
        <motion.div
            variants={fadeUp}
            className="glass-card rounded-[36px] border border-cyan-400/10 p-8"
        >
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                        CURRENT FOCUS
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold text-white">
                        Building AI Infrastructure
                    </h3>
                </div>

                <div className="status-pill">
                    <span className="status-dot"/>
                    LIVE DEVELOPMENT
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {currentFocus.map((item) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            whileHover={{y: -5}}
                            className="rounded-3xl border border-white/10 bg-black/20 p-6"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                                    style={{
                                        backgroundColor: `${item.color}15`,
                                        color: item.color,
                                    }}
                                >
                                    <Icon size={24}/>
                                </div>

                                <span
                                    className="rounded-full px-3 py-1 text-xs font-semibold"
                                    style={{
                                        color: item.color,
                                        backgroundColor: `${item.color}15`,
                                    }}
                                >
                  {item.status}
                </span>
                            </div>

                            <h4 className="text-lg font-semibold text-white">
                                {item.title}
                            </h4>

                            <div className="mt-5">
                                <div className="mb-2 flex justify-between text-xs text-slate-400">
                                    <span>Pipeline Progress</span>
                                    <span>{item.progress}</span>
                                </div>

                                <div className="h-2 rounded-full bg-white/10">
                                    <motion.div
                                        initial={{width: 0}}
                                        whileInView={{width: item.progress}}
                                        viewport={{once: true}}
                                        transition={{duration: 1}}
                                        className="h-full rounded-full"
                                        style={{backgroundColor: item.color}}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}

// ============================================================
// AI Engineering Philosophy
// ============================================================

const philosophy = [
    "AI should retrieve knowledge before generating answers.",
    "Observability is as important as model accuracy.",
    "Agents should collaborate through structured workflows.",
    "Knowledge Graphs provide explainability beyond embeddings.",
];

function AIPhilosophy() {
    return (
        <motion.div
            variants={fadeUp}
        >
        </motion.div>
    );
}

// ============================================================
// Open Source & Research
// ============================================================

const researchCards = [
    {
        title: "GraphRAG Research",
        description:
            "Experimenting with graph traversal, hybrid retrieval and enterprise knowledge grounding.",
    },
    {
        title: "Agentic AI",
        description:
            "Building planning, routing and tool-using autonomous AI agents using LangGraph and MCP.",
    },
    {
        title: "AI Infrastructure",
        description:
            "Inference optimization, vector indexing, evaluation pipelines and deployment workflows.",
    },
];

function ResearchSection() {
    return (
        <motion.div variants={fadeUp} className="mt-24">
        </motion.div>
    );
}

// ============================================================
// Availability Banner
// ============================================================

function AvailabilityBanner() {
    return (
        <motion.div
            variants={fadeUp}
        >
            <motion.div
            />

            <motion.div
            />
        </motion.div>
    );
}

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden py-3"
        >
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.08),transparent_55%)]"/>

            <motion.div
                variants={staggerContainer(0.18)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="container-ai relative z-10"
            >
                {/* Section Heading */}

                <motion.div>

                </motion.div>

                <div className="mt-0 grid gap-1 lg:grid-cols-[1fr_1.2fr]">

                    <motion.div variants={heroItem}>
                    </motion.div>
                </div>
                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-0"
                >
                    <motion.div variants={fadeUp}>
                        <p className="mono  text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                            CORE EXPERTISE
                        </p>

                        <h3 className="mt-4 text-4xl font-semibold text-white">
                            WHAT I BUILD
                        </h3>
                    </motion.div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {expertise.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    variants={heroItem}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    className="glass-card rounded-[28px] border border-cyan-400/10 p-7 transition-all duration-300"
                                >
                                    <div
                                        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                        <Icon size={24}/>
                                    </div>

                                    <h4 className="text-xl font-semibold text-white">
                                        {item.title}
                                    </h4>

                                    <p className="mt-4 leading-7 text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* =====================================================
      Technology Orbit
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-28 grid gap-10 lg:grid-cols-[1fr_1fr]"
                >
                    <motion.div variants={fadeUp}>
                        <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                            AI TECHNOLOGY ECOSYSTEM
                        </p>

                        <h3 className="mt-4 text-4xl font-semibold text-white">
                            The Stack I Build With
                        </h3>

                        <p className="mt-6 leading-8 text-slate-400">
                            Modern AI systems require orchestration across retrieval, reasoning,
                            inference, observability and deployment.
                        </p>

                        <div className="mt-10 space-y-5">
                            {[
                                "GraphRAG Retrieval Systems",
                                "Knowledge Graph Engineering",
                                "LLM Orchestration Pipelines",
                                "GPU Inference Infrastructure",
                                "AI Observability & Evaluation",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 text-slate-300"
                                >
                                    <Sparkles size={18} className="text-cyan-300"/>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <TechOrbit/>
                    </motion.div>
                </motion.div>

                {/* =====================================================
      Timeline + GraphRAG Terminal
===================================================== */}

                <motion.div
                    variants={staggerContainer(0.2)}
                    className="mt-28 grid gap-10 lg:grid-cols-[1fr_1fr]"
                >
                    <motion.div variants={fadeUp}>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                    </motion.div>
                </motion.div>

                {/* =====================================================
      Current Focus Dashboard
===================================================== */}

                <CurrentFocusDashboard/>

                {/* AI Philosophy */}

                <AIPhilosophy/>

                {/* Research Section */}

                <ResearchSection/>

                {/* Availability Banner */}

            </motion.div>
        </section>
    );
}