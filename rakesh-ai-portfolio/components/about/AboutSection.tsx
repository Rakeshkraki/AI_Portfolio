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
    Terminal,
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

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden py-32"
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

                <motion.div variants={fadeUp} className="text-center">
                    <div className="status-pill mx-auto w-fit">
                        <span className="status-dot"/>
                        ABOUT THE ENGINEER
                    </div>

                    <h2 className="section-title mt-6 hero-gradient">
                        BUILDING INTELLIGENT SYSTEMS,
                        <br/>
                        NOT JUST MODELS.
                    </h2>

                    <p className="section-subtitle mx-auto mt-6 max-w-3xl">
                        I'm an AI Engineer focused on production AI infrastructure,
                        GraphRAG, LLM applications, enterprise knowledge systems and
                        scalable inference pipelines.
                    </p>
                </motion.div>

                {/* =====================================================
              Profile + Terminal
        ====================================================== */}

                <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                    {/* Left Profile Card */}

                    <motion.div variants={heroItem}>
                        <div className="glass-card rounded-[32px] border border-cyan-400/10 p-8">
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="relative mb-6 h-36 w-36 rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-[2px]">
                                    <div
                                        className="flex h-full w-full items-center justify-center rounded-full bg-[#05070A] text-5xl font-bold text-cyan-300">
                                        RK
                                    </div>

                                    <motion.div
                                        animate={{
                                            rotate: 360,
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 20,
                                            ease: "linear",
                                        }}
                                        className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20"
                                    />
                                </div>

                                <h3 className="text-3xl font-semibold text-white">
                                    {PROFILE.name}
                                </h3>

                                <p className="mt-3 text-cyan-300">
                                    {PROFILE.title}
                                </p>

                                <p className="mt-6 leading-7 text-slate-400">
                                    Passionate about designing AI systems that retrieve,
                                    reason, plan, evaluate and continuously learn from
                                    enterprise knowledge.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-3">
                                    {[
                                        "GraphRAG",
                                        "LangGraph",
                                        "Neo4j",
                                        "Qdrant",
                                        "Next.js",
                                        "Kubernetes",
                                        "vLLM",
                                        "Python",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-xs tracking-wider text-cyan-300"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>

                                <motion.a
                                    whileHover={{
                                        y: -4,
                                    }}
                                    href="#experience"
                                    className="mt-8 inline-flex items-center gap-2 text-cyan-300"
                                >
                                    Explore My Journey
                                    <ArrowUpRight size={18}/>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Terminal */}

                    <motion.div variants={heroItem}>
                        <div className="glass-card overflow-hidden rounded-[32px] border border-cyan-400/10">
                            {/* Terminal Header */}

                            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-500"/>
                                    <span className="h-3 w-3 rounded-full bg-yellow-500"/>
                                    <span className="h-3 w-3 rounded-full bg-green-500"/>
                                </div>

                                <div className="flex items-center gap-2 text-slate-500">
                                    <Terminal size={16}/>

                                    <span className="mono text-xs">
                    ai-engineer.sh
                  </span>
                                </div>
                            </div>

                            {/* Terminal Body */}

                            <div className="space-y-5 p-6 font-mono text-sm">
                                {[
                                    "$ whoami",
                                    PROFILE.name,
                                    "",
                                    "$ role",
                                    PROFILE.title,
                                    "",
                                    "$ specialization",
                                    "GraphRAG • Multi-Agent AI • Knowledge Graphs",
                                    "",
                                    "$ current_focus",
                                    "Building enterprise AI infrastructure with LLMs.",
                                    "",
                                    "$ stack",
                                    "Next.js | Python | Neo4j | Qdrant | LangGraph | Kubernetes",
                                ].map((line, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{once: true}}
                                        transition={{
                                            delay: index * 0.05,
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
                    </motion.div>
                </div>
                {/* =====================================================
              Metrics
        ====================================================== */}

                <motion.div
                    variants={staggerContainer(0.12)}
                    className="mt-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
                >
                    {metrics.map((metric) => (
                        <motion.div
                            key={metric.label}
                            variants={heroItem}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            className="glass-card rounded-3xl border border-cyan-400/10 p-6 text-center"
                        >
                            <h3 className="metric-value hero-gradient text-4xl">
                                {metric.value}
                            </h3>

                            <p className="metric-label mt-3">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* =====================================================
              Expertise Grid
        ====================================================== */}

                <motion.div
                    variants={staggerContainer(0.15)}
                    className="mt-24"
                >
                    <motion.div variants={fadeUp}>
                        <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
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
                                    <Sparkles size={18} className="text-cyan-300" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <TechOrbit />
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
                        <CareerTimeline />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <GraphTerminal />
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}