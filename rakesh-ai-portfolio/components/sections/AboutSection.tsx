"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    Database,
    ServerCog,
    Network,
    Cloud,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { PERSONAL_INFO } from "@/lib/constants";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

const STACK = [
    "GraphRAG","AI Agents","FastAPI","LangChain","LangGraph",
    "Neo4j","Qdrant","Docker","Redis","PostgreSQL"
];

const HIGHLIGHTS = [
    "Retrieval-Augmented Generation (RAG)",
    "GraphRAG & Knowledge Graphs",
    "LLM APIs & Function Calling",
    "Semantic Search & Embeddings",
    "FastAPI AI Microservices",
    "Vector Database Engineering",
    "Streaming AI APIs",
    "Cloud-Native AI Deployment"
];

const CARDS = [
    {
        title:"GraphRAG Systems",
        description:"Enterprise knowledge graph retrieval using Neo4j, vector search, embeddings and hybrid retrieval.",
        icon:Network,
    },
    {
        title:"LLM Backend APIs",
        description:"Scalable FastAPI services integrating GPT-5, Claude, Gemini, structured outputs and AI orchestration.",
        icon:BrainCircuit,
    },
    {
        title:"Vector Databases",
        description:"Semantic search infrastructure using Qdrant, Pinecone, ChromaDB, FAISS and Redis.",
        icon:Database,
    },
    {
        title:"Cloud Native AI",
        description:"Dockerized AI backend services, observability, PostgreSQL, Redis and Kubernetes-ready deployment.",
        icon:Cloud,
    },
];

const JOURNEY = [
    { year:"2022", title:"Backend Engineering", desc:"Started building scalable backend services with Python, FastAPI and PostgreSQL."},
    { year:"2023", title:"LLM Integration", desc:"Integrated OpenAI APIs, embeddings, authentication, caching and async inference pipelines."},
    { year:"2024", title:"RAG Engineering", desc:"Built Retrieval-Augmented Generation pipelines using LangChain and vector databases."},
    { year:"2025+", title:"GraphRAG & AI Agents", desc:"Building enterprise GraphRAG platforms, LangGraph workflows and AI infrastructure."},
];

export default function AboutSection() {
    return (
        <section id="about" className="section-spacing relative overflow-hidden bg-gradient-to-b from-transparent via-slate-950/20 to-transparent">
            <div className="container-ai relative z-10">

                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">About Me</span>

                        <h2 className="section-title mt-6">
                            Building Production-Ready{" "}
                            <span className="hero-gradient">AI Backend Systems</span>
                        </h2>

                        <p className="section-description mt-6">
                            I'm <strong>{PERSONAL_INFO.name}</strong>, a GenAI Backend Engineer focused on GraphRAG,
                            AI Agents, Retrieval-Augmented Generation, FastAPI microservices,
                            semantic search, and cloud-native LLM infrastructure.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-[1.15fr_.85fr]">

                    <ScrollReveal>
                        <div className="glass-card rounded-card h-full border border-cyan-400/10 bg-gradient-to-br from-cyan-500/5 via-slate-950/80 to-violet-500/5 p-8">

                            <div className="flex items-center gap-4">
                                <div className="icon-box">
                                    <ServerCog size={28}/>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-white">
                                        What I Build
                                    </h3>
                                    <p className="text-slate-400">
                                        Enterprise-grade AI infrastructure and backend platforms.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {STACK.map((item)=>(
                                    <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                    {item}
                  </span>
                                ))}
                            </div>

                            <div className="mt-8 space-y-5 leading-8 text-slate-300">
                                <p>
                                    I design AI backend systems that combine LLMs, vector search,
                                    knowledge graphs, semantic retrieval, and AI agent orchestration.
                                </p>

                                <p>
                                    My work focuses on production architecture using FastAPI, Neo4j,
                                    LangChain, LangGraph, Redis, PostgreSQL, Docker, and scalable APIs.
                                </p>

                                <p>
                                    I enjoy solving engineering challenges around document intelligence,
                                    embeddings, streaming APIs, caching, authentication, and GraphRAG.
                                </p>
                            </div>

                            <div className="mt-10 grid gap-3 sm:grid-cols-2">
                                {HIGHLIGHTS.map((item)=>(
                                    <div key={item} className="group flex items-center gap-3 rounded-xl border border-white/5 bg-slate-900/60 px-4 py-3 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/5">
                                        <CheckCircle2 size={18} className="text-cyan-400"/>
                                        <span className="text-sm text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="dashboard-card rounded-card h-full border border-violet-400/10 bg-gradient-to-br from-violet-500/5 via-slate-950/80 to-cyan-500/5 p-8">

                            <div className="flex items-center gap-3">
                                <Sparkles className="text-cyan-400"/>
                                <h3 className="text-2xl font-semibold text-white">
                                    Current AI Focus
                                </h3>
                            </div>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Enterprise GraphRAG Platforms",
                                    "LangGraph Multi-Agent Systems",
                                    "GPT-5 • Claude • Gemini Integration",
                                    "Semantic Search Optimization",
                                    "Knowledge Graph Engineering",
                                    "FastAPI AI Infrastructure",
                                    "Cloud Native AI Deployment",
                                ].map((focus)=>(
                                    <div key={focus} className="rounded-xl border border-violet-400/10 bg-violet-500/5 px-4 py-3 transition hover:border-violet-400/30">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2.5 w-2.5 rounded-full bg-violet-400 animate-pulse"/>
                                            <p className="text-sm text-slate-200">{focus}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
                                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                                    Primary Stack
                                </p>

                                <p className="mt-4 leading-8 text-white">
                                    Python • FastAPI • LangChain • LangGraph • Neo4j • GPT-5 • Qdrant • Redis • PostgreSQL • Docker
                                </p>
                            </div>

                        </div>
                    </ScrollReveal>

                </div>

                <ScrollReveal className="mt-24">
                    <div className="grid gap-6 md:grid-cols-2">
                        {CARDS.map((card)=>{
                            const Icon = card.icon;

                            return(
                                <motion.div
                                    key={card.title}
                                    whileHover={{y:-6}}
                                    className="project-card rounded-card border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 transition-all duration-300 hover:border-cyan-400/20"
                                >
                                    <div className="icon-box mb-5 bg-cyan-500/10 text-cyan-300">
                                        <Icon size={28}/>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-300">
                                        {card.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </ScrollReveal>

                <ScrollReveal className="mt-28">
                    <div className="mb-12 text-center">
                        <span className="badge-glow">AI Journey</span>

                        <h2 className="section-title mt-5">
                            My Engineering Journey
                        </h2>
                    </div>

                    <motion.div
                        variants={staggerContainer(0.12,0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true}}
                        className="relative mx-auto max-w-4xl"
                    >
                        <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent"/>

                        {JOURNEY.map((step)=>(
                            <motion.div
                                key={step.year}
                                variants={fadeUpChild}
                                className="relative mb-12 last:mb-0"
                            >
                                <div className="absolute left-4 top-7 h-5 w-5 rounded-full border border-cyan-400 bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]"/>

                                <div className="glass-card rounded-card ml-16 border border-cyan-400/10 bg-slate-900/70 p-6">
                                    <p className="text-sm font-semibold text-cyan-400">{step.year}</p>

                                    <h3 className="mt-2 text-xl font-semibold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-300">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </ScrollReveal>

                <ScrollReveal className="mt-24">
                    <div className="dashboard-card rounded-card border border-cyan-400/10 bg-gradient-to-r from-cyan-500/5 via-slate-950 to-violet-500/5 p-12 text-center">
                        <BrainCircuit size={52} className="mx-auto text-cyan-300"/>

                        <h3 className="mt-6 text-3xl font-semibold text-white">
                            AI Engineering Philosophy
                        </h3>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Build AI systems that are intelligent, reliable, observable, and scalable.
                            Every AI application should have a strong backend foundation with GraphRAG,
                            agent workflows, semantic retrieval, streaming APIs, and cloud-native deployment.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
