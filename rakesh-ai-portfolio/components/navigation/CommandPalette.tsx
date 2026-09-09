"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Search,
    ArrowRight,
    FolderKanban,
    User,
    BriefcaseBusiness,
    BrainCircuit,
    House,
    Mail,
} from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { PROJECTS } from "@/data/projects";
import { scrollToSection } from "@/lib/utils";

interface CommandItem {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    action: () => void;
}

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const openHandler = () => setOpen(true);
        const closeHandler = () => setOpen(false);

        window.addEventListener("open-command-palette", openHandler);
        window.addEventListener("close-command-palette", closeHandler);

        return () => {
            window.removeEventListener("open-command-palette", openHandler);
            window.removeEventListener("close-command-palette", closeHandler);
        };
    }, []);

    useEffect(() => {
        if (!open) return;

        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
                return;
            }

            if (event.key === "ArrowDown") {
                event.preventDefault();
                setSelected((prev) => prev + 1);
            }

            if (event.key === "ArrowUp") {
                event.preventDefault();
                setSelected((prev) => Math.max(prev - 1, 0));
            }

            if (event.key === "Enter") {
                event.preventDefault();
                filteredItems[selected]?.action();
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);
    });

    const navigationCommands: CommandItem[] = [
        {
            id: "home",
            title: "Go to Home",
            subtitle: "Navigate to Hero section",
            icon: House,
            action: () => scrollToSection("home"),
        },
        {
            id: "about",
            title: "Go to About",
            subtitle: "Navigate to About section",
            icon: User,
            action: () => scrollToSection("about"),
        },
        {
            id: "projects",
            title: "Go to Projects",
            subtitle: "Navigate to AI projects",
            icon: FolderKanban,
            action: () => scrollToSection("projects"),
        },
        {
            id: "experience",
            title: "Go to Experience",
            subtitle: "Navigate to AI experience timeline",
            icon: BriefcaseBusiness,
            action: () => scrollToSection("experience"),
        },
        {
            id: "skills",
            title: "Go to Skills",
            subtitle: "Navigate to skills dashboard",
            icon: BrainCircuit,
            action: () => scrollToSection("skills"),
        },
        {
            id: "contact",
            title: "Go to Contact",
            subtitle: "Navigate to contact section",
            icon: Mail,
            action: () => scrollToSection("contact"),
        },
    ];

    const projectCommands: CommandItem[] = PROJECTS.map((project) => ({
        id: project.id,
        title: project.title,
        subtitle: project.category,
        icon: FolderKanban,
        action: () => scrollToSection("projects"),
    }));

    const filteredItems = useMemo(() => {
        const items = [...navigationCommands, ...projectCommands];

        if (!query.trim()) return items;

        return items.filter((item) =>
            `${item.title} ${item.subtitle}`
                .toLowerCase()
                .includes(query.toLowerCase())
        );
    }, [query]);

    useEffect(() => {
        setSelected(0);
    }, [query]);

    useEffect(() => {
        if (selected >= filteredItems.length) {
            setSelected(Math.max(filteredItems.length - 1, 0));
        }
    }, [filteredItems, selected]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}

                    <motion.div
                        className="fixed inset-0 z-[400] bg-black/70 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />

                    {/* Palette */}

                    <motion.div
                        className="fixed left-1/2 top-24 z-[401] w-[92%] max-w-2xl -translate-x-1/2"
                        initial={{ opacity: 0, y: -30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="glass-card overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 backdrop-blur-3xl">
                            {/* Search */}

                            <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">
                                <Search className="text-cyan-400" size={20} />

                                <input
                                    autoFocus
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search sections, projects, AI technologies..."
                                    className="flex-1 bg-transparent text-white outline-none placeholder:text-slate-500"
                                />
                            </div>

                            {/* Results */}

                            <div className="max-h-[420px] overflow-y-auto p-3">
                                {filteredItems.length === 0 && (
                                    <div className="py-10 text-center text-slate-400">
                                        No results found.
                                    </div>
                                )}

                                {filteredItems.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                item.action();
                                                setOpen(false);
                                            }}
                                            className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 transition-all ${
                                                selected === index
                                                    ? "bg-cyan-500/10 border border-cyan-400/20"
                                                    : "hover:bg-white/5"
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="icon-box-sm bg-cyan-500/10 text-cyan-400">
                                                    {/*<Icon size={18} />*/}
                                                </div>

                                                <div className="text-left">
                                                    <p className="font-medium text-white">
                                                        {item.title}
                                                    </p>

                                                    <p className="text-sm text-slate-400">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            <ArrowRight
                                                size={18}
                                                className="text-slate-500"
                                            />
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Footer */}

                            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-xs text-slate-500">
                                <div className="flex gap-4">
                                    <span>↑ ↓ Navigate</span>
                                    <span>Enter Select</span>
                                </div>

                                <span>ESC Close</span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}