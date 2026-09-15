"use client";

import { motion } from "framer-motion";
import {
    Home,
    User,
    FolderKanban,
    Briefcase,
    Brain,
    Mail,
} from "lucide-react";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/utils";

const NAV_ITEMS = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Brain },
    { id: "contact", label: "Contact", icon: Mail },
];

export default function FloatingNav() {
    const activeSection = useScrollSpy({
        sectionIds: NAV_ITEMS.map((item) => item.id),
    });

    return (
        <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="fixed right-8 top-1/2 z-[100] hidden -translate-y-1/2 lg:block"
        >
            <div className="glass-card rounded-full border border-cyan-400/10 bg-slate-950/70 p-3 shadow-[0_0_35px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                <div className="flex flex-col gap-3">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const active = activeSection === item.id;

                        return (
                            <div key={item.id} className="group relative">
                                {/* Tooltip */}
                                <span
                                    className="
                    pointer-events-none absolute right-16 top-1/2
                    -translate-y-1/2 whitespace-nowrap rounded-lg
                    border border-cyan-400/10 bg-slate-950/95
                    px-3 py-2 text-xs font-medium text-cyan-300
                    opacity-0 transition-all duration-200
                    group-hover:translate-x-0 group-hover:opacity-100
                    translate-x-2
                  "
                                >
                  {item.label}
                </span>

                                {/* Navigation Button */}
                                <motion.button
                                    whileHover={{ scale: 1.12 }}
                                    whileTap={{ scale: 0.94 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                    relative flex h-12 w-12 items-center justify-center rounded-full
                    transition-all duration-300
                    ${
                                        active
                                            ? "bg-cyan-500 text-white shadow-[0_0_22px_rgba(34,211,238,0.55)]"
                                            : "bg-white/5 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                                    }
                  `}
                                    aria-label={item.label}
                                >
                                    <Icon size={18} strokeWidth={2.2} />

                                    {active && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute inset-0 rounded-full border border-cyan-300"
                                            transition={{
                                                type: "spring",
                                                stiffness: 280,
                                                damping: 24,
                                            }}
                                        />
                                    )}
                                </motion.button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.aside>
    );
}