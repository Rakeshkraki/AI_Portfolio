"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    Briefcase,
    FolderGit2,
    House,
    Mail,
    User,
} from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const NAV_ITEMS = [
    {
        id: "hero",
        label: "Home",
        icon: House,
    },
    {
        id: "about",
        label: "About",
        icon: User,
    },
    {
        id: "projects",
        label: "Projects",
        icon: FolderGit2,
    },
    {
        id: "experience",
        label: "Experience",
        icon: Briefcase,
    },
    {
        id: "skills",
        label: "Skills",
        icon: BrainCircuit,
    },
    {
        id: "contact",
        label: "Contact",
        icon: Mail,
    },
];

export default function FloatingNav() {
    const activeSection = useScrollSpy({
        sectionIds: NAV_ITEMS.map((item) => item.id),
    });


    const scrollToSection = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.8,
                duration: 0.5,
            }}
            className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex"
        >
            <div className="floating-nav flex flex-col gap-3 rounded-full border border-cyan-500/10 bg-slate-950/70 p-3 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const active = activeSection === item.id;

                    return (
                        <div
                            key={item.id}
                            className="group relative"
                        >
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.12 }}
                                whileTap={{ scale: 0.92 }}
                                onClick={() => scrollToSection(item.id)}
                                aria-label={`Navigate to ${item.label}`}
                                aria-current={active ? "page" : undefined}
                                className={`relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                                    active
                                        ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                                        : "bg-white/5 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                                }`}
                            >
                                <Icon size={20} />

                                {active && (
                                    <motion.span
                                        layoutId="floating-nav-active"
                                        className="absolute inset-0 rounded-full border border-cyan-300"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 24,
                                        }}
                                    />
                                )}
                            </motion.button>

                            <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-xl border border-cyan-400/10 bg-slate-950/95 px-3 py-2 text-xs text-white opacity-0 backdrop-blur-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                                {item.label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>

    );
}

