"use client";

// ============================================================
// components/layout/Navbar.tsx
// AI Floating Navigation Bar
// ============================================================

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Command,
    ArrowUpRight,
    Download,
    // Github,
    // Linkedin,
} from "lucide-react";

import { NAV_ITEMS, PROFILE } from "@/lib/constants";
import { cn, scrollToSection } from "@/lib/utils";
import { navHover, buttonHover, buttonTap } from "@/lib/motion";
import { useSystemStore } from "@/store/systemStore";
import { useCommandStore } from "@/store/commandStore";

export default function Navbar() {
    const activeSection = useSystemStore((s) => s.activeSection);
    const setActiveSection = useSystemStore((s) => s.setActiveSection);

    const openPalette = useCommandStore((s) => s.openPalette);

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // ------------------------------------------------------------
    // Scroll Blur Effect
    // ------------------------------------------------------------

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ------------------------------------------------------------
    // Ctrl / Cmd + K
    // ------------------------------------------------------------

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {
                event.preventDefault();
                openPalette();
            }
        };

        window.addEventListener("keydown", handler);

        return () => window.removeEventListener("keydown", handler);
    }, [openPalette]);

    const navigate = (id: string) => {
        scrollToSection(id);
        setActiveSection(id);
        setMobileMenu(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7 }}
                className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
            >
                <nav
                    className={cn(
                        "container-ai rounded-full border px-5 py-3 transition-all duration-500",
                        isScrolled
                            ? "nav-blur border-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,.15)]"
                            : "border-white/5 bg-black/20 backdrop-blur-xl"
                    )}
                >
                    <div className="flex items-center justify-between gap-6">
                        {/* ===================================================== */}
                        {/* LOGO */}
                        {/* ===================================================== */}

                        <motion.button
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            onClick={() => navigate("hero")}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,.25)]">
                <span className="font-mono text-sm font-bold text-cyan-300">
                  RK
                </span>
                            </div>

                            <div className="hidden md:block text-left">
                                <h3 className="display-text text-sm font-semibold">
                                    {PROFILE.name}
                                </h3>

                                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                                    AI ENGINEER
                                </p>
                            </div>
                        </motion.button>

                        {/* ===================================================== */}
                        {/* DESKTOP NAVIGATION */}
                        {/* ===================================================== */}

                        <div className="hidden lg:flex items-center gap-8">
                            {NAV_ITEMS.map((item) => (
                                <motion.button
                                    key={item.id}
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    variants={navHover}
                                    onClick={() => navigate(item.id)}
                                    className={cn(
                                        "relative text-xs uppercase tracking-[0.25em]",
                                        activeSection === item.id
                                            ? "text-cyan-300"
                                            : "text-slate-400"
                                    )}
                                >
                                    {item.label}

                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* ===================================================== */}
                        {/* RIGHT ACTIONS */}
                        {/* ===================================================== */}

                        <div className="hidden md:flex items-center gap-3">
                            {/* Online Badge */}

                            <div className="status-pill">
                                <span className="status-dot" />
                                ONLINE
                            </div>

                            {/* Command Palette */}

                            <motion.button
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                onClick={openPalette}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-slate-300 hover:border-cyan-400/30 hover:text-cyan-300"
                            >
                                <Command size={14} />
                                CTRL + K
                            </motion.button>

                            {/* Resume */}

                            <motion.a
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                href={PROFILE.resume}
                                target="_blank"
                                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(34,211,238,.25)]"
                            >
                                <Download size={14} />
                                Resume
                            </motion.a>
                        </div>

                        {/* ===================================================== */}
                        {/* MOBILE BUTTON */}
                        {/* ===================================================== */}

                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
                        >
                            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* ========================================================= */}
            {/* MOBILE MENU */}
            {/* ========================================================= */}

            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-cyan-400/20 bg-[#06080d]/95 p-6 backdrop-blur-2xl lg:hidden"
                    >
                        <div className="mb-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                                SYSTEM STATUS
                            </p>

                            <div className="mt-2 flex items-center gap-2 text-cyan-300">
                                <span className="status-dot" />
                                ONLINE
                            </div>
                        </div>

                        <div className="space-y-2">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => navigate(item.id)}
                                    className={cn(
                                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left uppercase tracking-[0.2em] transition",
                                        activeSection === item.id
                                            ? "bg-cyan-500/10 text-cyan-300"
                                            : "text-slate-300 hover:bg-white/5"
                                    )}
                                >
                                    {item.label}

                                    <ArrowUpRight size={16} />
                                </button>
                            ))}
                        </div>

                        <div className="my-6 border-t border-white/10" />

                        {/* Quick Actions */}

                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    openPalette();
                                    setMobileMenu(false);
                                }}
                                className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 text-sm"
                            >
                                <Command size={18} />
                                Command Center
                            </button>

                            <a
                                href={PROFILE.resume}
                                target="_blank"
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-sm font-semibold"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>
                        </div>

                        {/*<div className="mt-6 flex items-center justify-center gap-6 text-slate-400">*/}
                        {/*    <a href={PROFILE.github} target="_blank">*/}
                        {/*        <Github />*/}
                        {/*    </a>*/}

                        {/*    <a href={PROFILE.linkedin} target="_blank">*/}
                        {/*        <Linkedin />*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}