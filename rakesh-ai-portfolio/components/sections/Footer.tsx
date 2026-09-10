"use client";

import { motion } from "framer-motion";
import {
    ArrowUp,
    // Github,
    // Linkedin,
    Mail,
    Heart,
} from "lucide-react";

import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

const TECH_STACK = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "FastAPI",
    "GraphRAG",
    "Neo4j",
    "GPT-5",
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const renderIcon = (icon: string) => {
        switch (icon) {
            case "github":
               // return <Github size={20} />;
            case "linkedin":
               // return <Linkedin size={20} />;
            case "mail":
                return <Mail size={20} />;
            default:
                return null;
        }
    };

    return (
        <footer className="relative border-t border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="container-ai py-20">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
                    {/* Brand */}
                    <div>
                        <button
                            onClick={() => scrollToSection("home")}
                            className="flex items-center gap-4"
                        >
                            <div className="icon-box h-12 w-12 rounded-full text-lg font-bold">
                                RK
                            </div>

                            <div className="text-left">
                                <h3 className="text-xl font-semibold text-white">
                                    {PERSONAL_INFO.name}
                                </h3>

                                <p className="text-sm text-cyan-400">
                                    AI Backend Engineer
                                </p>
                            </div>
                        </button>

                        <p className="mt-6 max-w-sm leading-7 text-slate-400">
                            Building enterprise AI backend platforms with GraphRAG,
                            LLM APIs, AI Agents, FastAPI, Neo4j, Docker,
                            and cloud-native infrastructure.
                        </p>

                        <div className="mt-8 flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-box-sm border-soft transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                                    aria-label={social.name}
                                >
                                    {renderIcon(social.icon)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            Quick Navigation
                        </h4>

                        <div className="mt-6 flex flex-col gap-3">
                            {NAV_LINKS.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() =>
                                        scrollToSection(item.href.replace("#", ""))
                                    }
                                    className="text-left text-slate-400 transition hover:text-cyan-400"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            Tech Stack
                        </h4>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {TECH_STACK.map((tech) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-full border border-cyan-400/15 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom Row */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="flex items-center gap-2 text-sm text-slate-500">
                        © {currentYear} {PERSONAL_INFO.name}. Built with
                        <Heart size={16} className="fill-red-500 text-red-500" />
                        using Next.js & AI.
                    </p>

                    <button
                        onClick={() => scrollToSection("home")}
                        className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/20"
                    >
                        <ArrowUp size={16} />
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
}