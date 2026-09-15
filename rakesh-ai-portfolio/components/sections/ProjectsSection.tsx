"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
    Filter,
    Sparkles,
    Star,
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/data/projects";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

const CATEGORIES = ["All","GraphRAG","AI Agents","LLM APIs","Backend APIs","Cloud AI","GenAI"];

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") return PROJECTS;
        return PROJECTS.filter((p) => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <section id="projects" className="section-spacing relative overflow-hidden">
            <div className="container-ai relative z-10">
                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">Featured AI Projects</span>

                        <h2 className="section-title mt-6">
                            Production-Ready GenAI, GraphRAG & AI Agent Systems
                        </h2>

                        <p className="section-description mt-6">
                            Enterprise-grade AI backend applications built using FastAPI, LangGraph,
                            GPT-5, Neo4j, Qdrant, Redis, Docker, and cloud-native infrastructure.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                                selectedCategory === category
                                    ? "border-cyan-400 bg-cyan-500/15 text-cyan-300"
                                    : "border-slate-700 text-slate-400 hover:border-cyan-400 hover:text-white"
                            }`}
                        >
              <span className="flex items-center gap-2">
                <Filter size={14} />
                  {category}
              </span>
                        </button>
                    ))}
                </div>

                <motion.div
                    variants={staggerContainer(0.1,0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}
                    className="mt-16 grid gap-8 lg:grid-cols-2"
                >
                    {filteredProjects.map((project) => (
                        <motion.article
                            key={project.id}
                            variants={fadeUpChild}
                            whileHover={{ y:-6 }}
                            className="project-card rounded-card group flex flex-col overflow-hidden"
                        >
                            <div className="relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/15 via-slate-950 to-violet-600/10">
                                <div className="absolute inset-0 opacity-20 hero-grid" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles size={54} className="text-cyan-400 opacity-80" />
                                </div>

                                {project.featured && (
                                    <div className="absolute left-4 top-4 rounded-full bg-yellow-400/15 border border-yellow-300/30 px-3 py-1 text-xs flex items-center gap-2 text-yellow-300">
                                        <Star size={14} fill="currentColor"/>
                                        Featured
                                    </div>
                                )}

                                <div className="absolute bottom-4 right-4 rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-300 border border-cyan-400/20">
                                    {project.category}
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col pt-6">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition">
                                    {project.title}
                                </h3>

                                <p className="mt-4 flex-1 leading-7 text-slate-300">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className="mt-8 flex gap-3">
                                    {project.github && (
                                        <a
                                            href="https://github.com/Rakeshkraki"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary mt-8 inline-flex items-center gap-2"
                                        >
                                            <ExternalLink size={18} />
                                            Explore GitHub Projects
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            Live Demo
                                            <ArrowUpRight size={18}/>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <ScrollReveal className="mt-24">
                    <div className="dashboard-card rounded-card text-center p-10">
                        <Sparkles size={42} className="mx-auto text-cyan-400"/>

                        <h3 className="mt-6 text-3xl font-semibold text-white">
                            Building AI Infrastructure That Scales
                        </h3>

                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                            GraphRAG platforms, AI agents, MCP integrations, semantic search,
                            vector databases, streaming APIs, and production-ready GenAI backend systems.
                        </p>

                        <a
                            href="https://github.com/Rakeshkraki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary mt-8 inline-flex items-center gap-2"
                        >
                            <ExternalLink size={18} />
                            Explore GitHub Projects
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
