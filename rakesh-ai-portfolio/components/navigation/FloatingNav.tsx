"use client";

import { motion } from "framer-motion";

import { NAV_LINKS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/utils";

export default function FloatingNav() {
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

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="floating-nav fixed right-6 top-1/2 z-[90] hidden -translate-y-1/2 lg:flex flex-col gap-4"
        >
            {NAV_LINKS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                    <div key={item.href} className="group relative">
                        {/* Tooltip */}

                        <span className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-slate-900/95 px-3 py-1 text-xs text-white opacity-0 backdrop-blur-lg transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 whitespace-nowrap">
              {item.label}
            </span>

                        {/* Dot */}

                        <motion.button
                            whileHover={{ scale: 1.25 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollToSection(sectionId)}
                            className={`relative h-4 w-4 rounded-full transition-all duration-300 ${
                                isActive
                                    ? "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                                    : "bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={item.label}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="active-nav-dot"
                                    className="absolute inset-0 rounded-full border border-cyan-300"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 24,
                                    }}
                                />
                            )}
                        </motion.button>
                    </div>
                );
            })}
        </motion.div>
    );
}