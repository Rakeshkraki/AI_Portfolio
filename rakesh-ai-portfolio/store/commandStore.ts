"use client";

// ============================================================
// store/commandStore.ts
// AI Command Palette Store
// ============================================================

import { create } from "zustand";
import { COMMANDS } from "@/lib/constants";
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
    ...COMMANDS.map((cmd, index) => ({
        id: String(index),
        label: cmd.label,
        action: cmd.action,
        category: "Navigation",
        keywords: cmd.label.toLowerCase().split(" "),
    })),

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

        return commands.filter((command) => {
            return (
                command.label.toLowerCase().includes(search) ||
                command.category.toLowerCase().includes(search) ||
                command.keywords.some((keyword) =>
                    keyword.includes(search)
                )
            );
        });
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
        const selectedCommand = commands[get().selected];

        if (selectedCommand) {
            get().executeCommand(selectedCommand);
        }
    },

    executeCommand: (command) => {
        const system = useSystemStore.getState();

        switch (command.action) {
            // ---------------- Navigation ----------------

            case "hero":
            case "system":
            case "about":
            case "experience":
            case "projects":
            case "skills":
            case "dashboard":
            case "contact":
                scrollToSection(command.action);
                system.setActiveSection(command.action);
                break;

            // ---------------- Resume ----------------

            case "resume":
                window.open("/resume.pdf", "_blank");
                break;

            // ---------------- External ----------------

            case "github":
                window.open(system ? "" : "", "_blank");
                break;

            case "linkedin":
                window.open(system ? "" : "", "_blank");
                break;

            // ---------------- Debug ----------------

            case "debug":
                system.toggleDebugMode();
                alert("⚡ Debug Mode Enabled");
                break;

            // ---------------- Diagnostics ----------------

            case "diagnostics":
                console.table({
                    Section: system.activeSection,
                    HeroMode: system.heroMode,
                    ParticleQuality: system.particleQuality,
                    Debug: system.debugMode,
                });

                alert("System diagnostics printed in browser console.");
                break;

            // ---------------- Easter Egg ----------------

            case "sudo":
                system.toggleDebugMode();

                alert(`
ACCESS GRANTED

Welcome Rakesh.

AI Infrastructure Debug Console Enabled.
        `);

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