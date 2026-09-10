"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";

import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface NavbarProps {
    onOpenMobileMenu: () => void;
}

export default function Navbar({
                                   onOpenMobileMenu,
                               }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`navbar fixed inset-x-0 top-0 transition-all duration-300 ${
                isScrolled
                    ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl"
                    : "bg-transparent"
            }`}
        >
            <ThemeToggle />
            <nav className="container-ai flex h-20 items-center justify-between">
                {/* Logo */}

                <button
                    onClick={() => scrollToSection("home")}
                    className="group flex items-center gap-3"
                >
                    <div className="icon-box h-11 w-11 rounded-full text-lg font-bold">
                        RK
                    </div>

                    <div className="hidden md:block text-left">
                        <p className="font-semibold text-white">
                            {PERSONAL_INFO.name}
                        </p>

                        <p className="text-xs text-slate-400">
                            AI Backend Engineer
                        </p>
                    </div>
                </button>

                {/* Desktop Navigation */}

                <div className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((item) => {
                        const sectionId = item.href.replace("#", "");

                        const isActive = activeSection === sectionId;

                        return (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(sectionId)}
                                className={`nav-link text-sm font-medium transition-all ${
                                    isActive
                                        ? "nav-link-active text-cyan-400"
                                        : "text-slate-300 hover:text-white"
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                {/* Desktop CTA */}

                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/resume/Rakesh-K-AI-Backend-Engineer.pdf"
                        target="_blank"
                        className="btn-primary btn-glow"
                    >
                        <Download size={18} />

                        Resume
                    </Link>
                </div>

                {/* Mobile Menu Button */}

                <button
                    onClick={onOpenMobileMenu}
                    className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                    <Menu size={22} />
                </button>
            </nav>
        </motion.header>
    );
}