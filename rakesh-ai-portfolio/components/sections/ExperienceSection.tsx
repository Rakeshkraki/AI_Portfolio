"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import {
    EXPERIENCE,
    EXPERIENCE_METRICS,
} from "@/data/experience";
import {
    staggerContainer,
    fadeUpChild,
} from "@/lib/motion";

export default function ExperienceSection() {
    return (
        <section id="experience" className="section-spacing relative">
            <div className="container-ai">
                {/* Header */}

                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">Experience</span>

                        <h2 className="section-title mt-6">
                            AI Backend Engineering Journey
                        </h2>

                        <p className="section-description mt-6">
                            Building scalable AI infrastructure, GraphRAG systems,
                            Retrieval-Augmented Generation pipelines, AI agents,
                            vector search, and enterprise LLM backend APIs.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Metrics */}

                <ScrollReveal className="mt-14">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {EXPERIENCE_METRICS.map((metric) => (
                            <motion.div
                                key={metric.label}
                                whileHover={{ y: -6 }}
                                className="dashboard-card text-center"
                            >
                                <h3 className="hero-gradient text-4xl font-bold">
                                    {metric.value}
                                </h3>

                                <p className="mt-3 text-sm text-slate-400">
                                    {metric.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Timeline */}

                <motion.div
                    variants={staggerContainer(0.16, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="timeline mt-24"
                >
                    {EXPERIENCE.map((experience) => (
                        <motion.div
                            key={experience.id}
                            variants={fadeUpChild}
                            className="timeline-item pb-16 last:pb-0"
                        >
                            <div className="timeline-dot" />

                            <div className="glass-card rounded-card p-7">
                                {/* Header */}

                                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">
                                            {experience.role}
                                        </h3>

                                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-2">
                        <BriefcaseBusiness size={16} />
                          {experience.company}
                      </span>

                                            <span className="flex items-center gap-2">
                        <CalendarDays size={16} />
                                                {experience.duration}
                      </span>

                                            <span className="flex items-center gap-2">
                        <MapPin size={16} />
                                                {experience.location}
                      </span>
                                        </div>
                                    </div>

                                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    AI Backend Engineering
                  </span>
                                </div>

                                {/* Description */}

                                <p className="mt-8 leading-8 text-slate-300">
                                    {experience.description}
                                </p>

                                {/* Achievements */}

                                <div className="mt-10">
                                    <h4 className="mb-5 text-lg font-semibold text-white">
                                        Key Achievements
                                    </h4>

                                    <div className="grid gap-4">
                                        {experience.achievements.map((achievement) => (
                                            <div
                                                key={achievement}
                                                className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    className="mt-0.5 flex-shrink-0 text-cyan-400"
                                                />

                                                <p className="text-sm leading-7 text-slate-300">
                                                    {achievement}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}

                                <div className="mt-10">
                                    <h4 className="mb-5 text-lg font-semibold text-white">
                                        Technologies Used
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-cyan-400/15 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300 transition hover:border-cyan-400/30"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Summary Card */}

                <ScrollReveal className="mt-24">
                    <div className="dashboard-card rounded-card p-10 text-center">
                        <BriefcaseBusiness
                            size={40}
                            className="mx-auto text-cyan-400"
                        />

                        <h3 className="mt-6 text-3xl font-semibold text-white">
                            What I Bring as an AI Backend Engineer
                        </h3>

                        <div className="mx-auto mt-8 grid max-w-4xl gap-4 text-left md:grid-cols-2">
                            {[
                                "Production-ready FastAPI backend architecture.",
                                "GraphRAG with Neo4j knowledge graphs.",
                                "LLM orchestration using GPT-5, Claude & Gemini APIs.",
                                "LangChain & LangGraph AI workflows.",
                                "Vector databases including Pinecone, ChromaDB & Qdrant.",
                                "Dockerized microservices with PostgreSQL & Redis.",
                                "Authentication, caching, observability & async processing.",
                                "Cloud-native AI infrastructure with CI/CD readiness.",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="flex-shrink-0 text-cyan-400"
                                    />

                                    <span className="text-sm text-slate-300">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}