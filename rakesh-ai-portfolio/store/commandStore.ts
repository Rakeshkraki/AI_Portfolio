"use client";

import { create } from "zustand";
import { scrollToSection } from "@/lib/utils";
import { useSystemStore } from "./systemStore";

export interface CommandItem {
    id: string;
    label: string;
    action: string;
    category: string;
    keywords: string[];
}

interface CommandState {
    open: boolean;
    query: string;
    selected: number;
    commands: CommandItem[];

    openPalette: () => void;
    closePalette: () => void;
    togglePalette: () => void;

    setQuery: (query: string) => void;

    filteredCommands: () => CommandItem[];

    nextCommand: () => void;
    previousCommand: () => void;

    executeSelected: () => void;
    executeCommand: (command: CommandItem) => void;
}

// ------------------------------------------------------------
// Default Commands
// ------------------------------------------------------------

const defaultCommands: CommandItem[] = [
    {
        id: "hero",
        label: "Go to Hero Section",
        action: "hero",
        category: "Navigation",
        keywords: ["hero", "home", "landing"],
    },
    {
        id: "about",
        label: "Go to About Section",
        action: "about",
        category: "Navigation",
        keywords: ["about", "profile"],
    },
    {
        id: "experience",
        label: "Go to Experience Section",
        action: "experience",
        category: "Navigation",
        keywords: ["experience", "career"],
    },
    {
        id: "projects",
        label: "Go to Projects Section",
        action: "projects",
        category: "Navigation",
        keywords: ["projects", "portfolio"],
    },
    {
        id: "skills",
        label: "Go to Skills Section",
        action: "skills",
        category: "Navigation",
        keywords: ["skills", "technology"],
    },
    {
        id: "dashboard",
        label: "Go to AI Dashboard",
        action: "dashboard",
        category: "Navigation",
        keywords: ["dashboard", "graph", "analytics"],
    },
    {
        id: "contact",
        label: "Go to Contact Section",
        action: "contact",
        category: "Navigation",
        keywords: ["contact", "email"],
    },
    {
        id: "resume",
        label: "Download Resume",
        action: "resume",
        category: "Portfolio",
        keywords: ["resume", "cv"],
    },
    {
        id: "github",
        label: "Open GitHub",
        action: "github",
        category: "Portfolio",
        keywords: ["github", "code"],
    },
    {
        id: "linkedin",
        label: "Open LinkedIn",
        action: "linkedin",
        category: "Portfolio",
        keywords: ["linkedin", "profile"],
    },
    {
        id: "debug",
        label: "Enable Debug Mode",
        action: "debug",
        category: "System",
        keywords: ["debug", "developer", "system"],
    },
    {
        id: "diagnostics",
        label: "Run System Diagnostics",
        action: "diagnostics",
        category: "System",
        keywords: ["system", "diagnostics", "status"],
    },
    {
        id: "sudo",
        label: "sudo rakesh",
        action: "sudo",
        category: "Easter Egg",
        keywords: ["sudo", "rakesh", "admin"],
    },
];

// ------------------------------------------------------------
// Store
// ------------------------------------------------------------

export const useCommandStore = create<CommandState>((set, get) => ({
    open: false,
    query: "",
    selected: 0,
    commands: defaultCommands,

    openPalette: () =>
        set({
            open: true,
            query: "",
            selected: 0,
        }),

    closePalette: () =>
        set({
            open: false,
            query: "",
            selected: 0,
        }),

    togglePalette: () =>
        set((state) => ({
            open: !state.open,
            query: "",
            selected: 0,
        })),

    setQuery: (query) =>
        set({
            query,
            selected: 0,
        }),

    filteredCommands: () => {
        const { query, commands } = get();

        if (!query.trim()) return commands;

        const search = query.toLowerCase();

        return commands.filter(
            (command) =>
                command.label.toLowerCase().includes(search) ||
                command.category.toLowerCase().includes(search) ||
                command.keywords.some((keyword) =>
                    keyword.includes(search)
                )
        );
    },

    nextCommand: () => {
        const commands = get().filteredCommands();

        set((state) => ({
            selected:
                state.selected >= commands.length - 1
                    ? 0
                    : state.selected + 1,
        }));
    },

    previousCommand: () => {
        const commands = get().filteredCommands();

        set((state) => ({
            selected:
                state.selected <= 0
                    ? commands.length - 1
                    : state.selected - 1,
        }));
    },

    executeSelected: () => {
        const commands = get().filteredCommands();
        const command = commands[get().selected];

        if (command) {
            get().executeCommand(command);
        }
    },

    executeCommand: (command) => {
        const system = useSystemStore.getState();

        switch (command.action) {
            case "hero":
                scrollToSection("home");
                system.setActiveSection("home");
                break;

            case "about":
            case "experience":
            case "projects":
            case "skills":
            case "dashboard":
            case "contact":
                scrollToSection(command.action);
                system.setActiveSection(command.action);
                break;

            case "resume":
                window.open(
                    "/resume/Rakesh-Kumar-AI-Backend-Engineer.pdf",
                    "_blank"
                );
                break;

            case "github":
                window.open("https://github.com/yourusername", "_blank");
                break;

            case "linkedin":
                window.open(
                    "https://linkedin.com/in/yourlinkedin",
                    "_blank"
                );
                break;

            case "debug":
                system.toggleDebugMode();
                break;

            case "diagnostics":
                console.table({
                    Section: system.activeSection,
                    HeroMode: system.heroMode,
                    ParticleQuality: system.particleQuality,
                    Debug: system.debugMode,
                });
                break;

            case "sudo":
                system.toggleDebugMode();
                console.log("AI Infrastructure Debug Console Enabled");
                break;

            default:
                break;
        }

        set({
            open: false,
            query: "",
            selected: 0,
        });
    },
}));