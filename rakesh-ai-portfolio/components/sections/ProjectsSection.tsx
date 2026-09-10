"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    // Github,
    Filter,
    Star,
    Sparkles,
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/data/projects";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

const CATEGORIES = [
    "All",
    "GraphRAG",
    "AI Agents",
    "LLM APIs",
    "Backend APIs",
    "Cloud AI",
    "GenAI",
];

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") {
            return PROJECTS;
        }

        return PROJECTS.filter(
            (project) => project.category === selectedCategory
        );
    }, [selectedCategory]);

    return (
        <section id="projects" className="section-spacing relative">
            <div className="container-ai">
                {/* Header */}
                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">AI Projects</span>

                        <h2 className="section-title mt-6">
                            Production-Ready AI Backend & GraphRAG Projects
                        </h2>

                        <p className="section-description mt-6">
                            AI backend systems built with FastAPI, Neo4j, LangChain,
                            LangGraph, GPT-5, Vector Databases, Docker, PostgreSQL,
                            Redis, and Cloud-native architecture.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Category Filters */}
                <ScrollReveal className="mt-14">
                    <div className="flex flex-wrap justify-center gap-3">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? "border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
                                        : "border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/20 hover:text-white"
                                }`}
                            >
                                <Filter size={14} />
                                {category}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <motion.div
                    variants={staggerContainer(0.12, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 grid gap-8 lg:grid-cols-2"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeUpChild}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="project-card group overflow-hidden rounded-card"
                        >
                            {/* Project Banner */}
                            <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-500/10">
                                <div className="absolute inset-0 hero-grid opacity-20" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles size={46} className="text-cyan-400/80" />
                                </div>

                                {project.featured && (
                                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 backdrop-blur-md">
                                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs font-medium text-yellow-300">
                      Featured
                    </span>
                                    </div>
                                )}

                                <div className="absolute bottom-4 right-4 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 backdrop-blur-md">
                                    {project.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-6">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <h3 className="text-2xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="mt-5 leading-7 text-slate-300">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-8 flex flex-wrap gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary flex items-center gap-2"
                                        >
                                            {/*<Github size={18} />*/}
                                            GitHub
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex items-center gap-2"
                                        >
                                            Live Demo
                                            <ArrowUpRight size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <ScrollReveal className="mt-24">
                    <div className="dashboard-card rounded-card p-10 text-center">
                        <Sparkles size={42} className="mx-auto text-cyan-400" />

                        <h3 className="mt-6 text-3xl font-semibold text-white">
                            Building Enterprise AI Systems
                        </h3>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            I'm continuously building GraphRAG platforms, AI Agent workflows,
                            LLM infrastructure, vector search engines, MCP integrations,
                            and production-ready AI backend services.
                        </p>

                        <a
                            href="https://github.com/rakeshK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary mt-8 inline-flex items-center gap-2"
                        >
                            {/*<Github size={18} />*/}
                            Explore More Projects
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}