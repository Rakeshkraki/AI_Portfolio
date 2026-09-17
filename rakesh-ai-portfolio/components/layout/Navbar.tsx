"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


import {BrainCircuit, Download, Menu, X,} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const NAV_ITEMS = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        setMobileOpen(false);
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "border-b border-cyan-500/10 bg-slate-950/70 shadow-lg backdrop-blur-xl"
                    : "bg-transparent"
            }`}
        >
            <nav className="container-ai flex h-20 items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection("hero")}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <BrainCircuit size={24} />
                    </div>

                    <div className="text-left">
                        <p className="text-lg font-bold text-white">Rakesh K</p>
                        <p className="text-xs tracking-wide text-cyan-300">
                            GenAI • LLM Engineer
                        </p>
                    </div>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="relative text-sm text-slate-300 transition hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 lg:flex">
                    <a
                        href="https://github.com/Rakeshkraki"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="rounded-xl border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://linkedin.com/in/rakeshkraki"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-xl border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:scale-105"
                    >
                        <Download size={16} />
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
                >
                    <div className="container-ai flex flex-col gap-4 py-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="rounded-xl px-4 py-3 text-left text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-300"
                            >
                                {item.label}
                            </button>
                        ))}

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 font-semibold text-slate-950"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
