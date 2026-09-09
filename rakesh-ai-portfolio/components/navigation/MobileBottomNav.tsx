"use client";

import { motion } from "framer-motion";
import {
    House,
    User,
    FolderKanban,
    BriefcaseBusiness,
    BrainCircuit,
    Mail,
} from "lucide-react";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/utils";

const MOBILE_NAV_ITEMS = [
    { id: "home", label: "Home", icon: House },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "experience", label: "Work", icon: BriefcaseBusiness },
    { id: "skills", label: "Skills", icon: BrainCircuit },
    { id: "contact", label: "Contact", icon: Mail },
];

export default function MobileBottomNav() {
    const activeSection = useScrollSpy({
        sectionIds: MOBILE_NAV_ITEMS.map((item) => item.id),
    });

    return (
        <motion.nav
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{
                delay: 0.8,
                duration: 0.5,
            }}
            className="mobile-bottom-nav safe-bottom fixed inset-x-3 bottom-4 z-[120] lg:hidden"
        >
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-2 py-2 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                {MOBILE_NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <motion.button
                            key={item.id}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative flex flex-1 flex-col items-center justify-center gap-1 rounded-full py-2 transition-all ${
                                isActive
                                    ? "text-cyan-400"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="mobile-active-pill"
                                    className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-400/20"
                                    transition={{
                                        type: "spring",
                                        stiffness: 280,
                                        damping: 28,
                                    }}
                                />
                            )}

                            <Icon size={20} className="relative z-10" />

                            <span className="relative z-10 text-[10px] font-medium">
                {item.label}
              </span>
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
}