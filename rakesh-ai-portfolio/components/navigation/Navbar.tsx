"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FolderKanban, Brain, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSystemStore } from "@/store/systemStore";

const NAV_ITEMS = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "skills", label: "Skills", icon: Brain },
    { id: "contact", label: "Contact", icon: Mail },
];

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

export default function Navbar() {
    const pathname = usePathname();
    const activeSection = useSystemStore((state) => state.activeSection);

    return (
        <div className="fixed left-4 top-1/2 z-50 -translate-y-1/2 hidden lg:block">
            <nav className="glass-card nav-pill flex flex-col gap-2 p-3 w-16 items-center">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;

                    return (
                        <motion.button
                            key={item.id}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection(item.id)}
                            className={cn(
                                "nav-item group relative",
                                activeSection === item.id && "active"
                            )}
                            aria-label={item.label}
                        >
                            <Icon size={20} />

                            <span className="absolute left-14 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 pointer-events-none">
                {item.label}
              </span>
                        </motion.button>
                    );
                })}

                <div className="mt-2 h-px w-8 bg-slate-700" />

                <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="nav-item"
                    aria-label="Resume"
                >
                    <span className="text-xs font-semibold">CV</span>
                </Link>
            </nav>
        </div>
    );
}