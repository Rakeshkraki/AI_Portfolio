"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, BookOpen } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import {
    SKILL_CATEGORIES,
    SKILLS,
    FEATURED_SKILLS,
    TECHNOLOGY_CLOUD,
    CURRENTLY_LEARNING,
} from "@/data/skills";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

export default function SkillsSection() {
    const [selectedCategory, setSelectedCategory] = useState(
        SKILL_CATEGORIES[0].title
    );

    const filteredSkills = useMemo(() => {
        const category = SKILL_CATEGORIES.find(
            (item) => item.title === selectedCategory
        );

        if (!category) return [];

        return SKILLS.filter((skill) =>
            category.skills.includes(skill.name)
        );
    }, [selectedCategory]);

    return (
        <section id="skills" className="section-spacing relative">
            <div className="container-ai">
                {/* Header */}
                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">Skills & Expertise</span>

                        <h2 className="section-title mt-6">
                            AI Backend Engineering Technology Stack
                        </h2>

                        <p className="section-description mt-6">
                            My core expertise spans LLM infrastructure, GraphRAG, AI agents,
                            backend APIs, cloud-native deployment, vector databases, and
                            modern AI engineering tools.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Featured Skills */}
                <ScrollReveal className="mt-14">
                    <div className="glass-card rounded-card p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <Sparkles className="text-cyan-400" size={24} />

                            <h3 className="text-2xl font-semibold text-white">
                                Core AI Expertise
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {FEATURED_SKILLS.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Category Tabs */}
                <ScrollReveal className="mt-16">
                    <div className="flex flex-wrap justify-center gap-3">
                        {SKILL_CATEGORIES.map((category) => (
                            <button
                                key={category.title}
                                onClick={() => setSelectedCategory(category.title)}
                                className={`rounded-full border px-5 py-2 text-sm transition-all ${
                                    selectedCategory === category.title
                                        ? "border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
                                        : "border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/20 hover:text-white"
                                }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Skill Progress Bars */}
                <motion.div
                    variants={staggerContainer(0.08, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 grid gap-6 lg:grid-cols-2"
                >
                    {filteredSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={fadeUpChild}
                            className="glass-card rounded-card p-6"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <h4 className="font-medium text-white">{skill.name}</h4>

                                <span className="text-sm text-cyan-300">
                  {skill.level}%
                </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9 }}
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                                />
                            </div>

                            <p className="mt-3 text-xs uppercase tracking-widest text-slate-500">
                                {skill.category}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technology Cloud */}
                <ScrollReveal className="mt-24">
                    <div className="dashboard-card rounded-card p-10">
                        <div className="mb-8 flex items-center gap-3">
                            <BrainCircuit className="text-cyan-400" size={24} />

                            <h3 className="text-2xl font-semibold text-white">
                                Technology Cloud
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {TECHNOLOGY_CLOUD.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.02 }}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -2,
                                    }}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Currently Learning */}
                <ScrollReveal className="mt-24">
                    <div className="glass-card rounded-card p-10">
                        <div className="mb-8 flex items-center gap-3">
                            <BookOpen className="text-cyan-400" size={24} />

                            <h3 className="text-2xl font-semibold text-white">
                                Currently Learning
                            </h3>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {CURRENTLY_LEARNING.map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ x: 6 }}
                                    className="rounded-xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-cyan-400" />

                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* AI Focus Areas */}
                <ScrollReveal className="mt-24">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "GraphRAG",
                                desc: "Knowledge Graph + Vector Retrieval Systems",
                            },
                            {
                                title: "AI Agents",
                                desc: "LangGraph Workflow Orchestration",
                            },
                            {
                                title: "LLM APIs",
                                desc: "GPT-5, Claude, Gemini Backend Integration",
                            },
                            {
                                title: "Cloud AI",
                                desc: "Docker, Kubernetes & AI Infrastructure",
                            },
                        ].map((area) => (
                            <motion.div
                                key={area.title}
                                whileHover={{ y: -6 }}
                                className="project-card rounded-card p-6 text-center"
                            >
                                <h4 className="text-xl font-semibold text-cyan-300">
                                    {area.title}
                                </h4>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    {area.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}