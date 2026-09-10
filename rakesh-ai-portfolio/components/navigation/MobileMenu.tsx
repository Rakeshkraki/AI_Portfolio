"use client";

import { motion, AnimatePresence } from "framer-motion";
//import { X, Github, Linkedin, Mail, Download } from "lucide-react";
import { X, Mail, Download } from "lucide-react";

import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/utils";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({
                                       isOpen,
                                       onClose,
                                   }: MobileMenuProps) {
    const activeSection = useScrollSpy({
        sectionIds: [
            "home",
            "about",
            "projects",
            "experience",
            "skills",
            "contact",
        ],
    });

    const handleNavigate = (sectionId: string) => {
        scrollToSection(sectionId);
        onClose();
    };

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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Overlay */}

                    <motion.div
                        className="fixed inset-0 z-[199] bg-black/70 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Menu */}

                    <motion.aside
                        className="fixed inset-y-0 right-0 z-[200] flex w-full max-w-sm flex-col bg-slate-950/95 p-6 backdrop-blur-2xl border-l border-white/10"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                        }}
                    >
                        {/* Header */}

                        <div className="mb-10 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    {PERSONAL_INFO.name}
                                </h2>

                                <p className="text-sm text-cyan-400">
                                    AI Backend Engineer
                                </p>
                            </div>

                            <button
                                onClick={onClose}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Navigation */}

                        <nav className="flex flex-col gap-2">
                            {NAV_LINKS.map((item, index) => {
                                const sectionId = item.href.replace("#", "");

                                const isActive = activeSection === sectionId;

                                return (
                                    <motion.button
                                        key={item.href}
                                        initial={{ opacity: 0, x: 25 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.08,
                                        }}
                                        onClick={() => handleNavigate(sectionId)}
                                        className={`rounded-xl px-4 py-4 text-left transition-all ${
                                            isActive
                                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                                        }`}
                                    >
                    <span className="text-lg font-medium">
                      {item.label}
                    </span>
                                    </motion.button>
                                );
                            })}
                        </nav>

                        {/* Divider */}

                        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Social Links */}

                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                                Connect
                            </p>

                            <div className="flex gap-3">
                                {SOCIAL_LINKS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                                    >
                                        {renderIcon(social.icon)}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Resume Button */}

                        <div className="mt-auto pt-10">
                            <a
                                href="/resume/Rakesh-K-AI-Backend-Engineer.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary flex w-full items-center justify-center gap-2"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>

                            <p className="mt-6 text-center text-xs text-slate-500">
                                Built with Next.js 15 • GPT-5 • GraphRAG
                            </p>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}