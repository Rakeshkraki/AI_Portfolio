"use client";

// ============================================================
// store/systemStore.ts
// Global AI Portfolio Store (Zustand)
// ============================================================

import { create } from "zustand";

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

export type ParticleQuality = "low" | "medium" | "high";

export type HeroMode =
    | "boot"
    | "network"
    | "system"
    | "idle";

interface MousePosition {
    x: number;
    y: number;
}

interface ObservabilityMetrics {
    requests: number;
    latency: number;
    cacheHit: number;
    gpuUsage: number;
    tokens: number;
    activeAgents: number;
}

interface SystemState {
    // ---------------- Loader ----------------
    bootCompleted: boolean;
    loaderVisible: boolean;

    completeBoot: () => void;
    resetBoot: () => void;

    // ---------------- Navigation ----------------
    activeSection: string;
    setActiveSection: (section: string) => void;

    // ---------------- Hero Scene ----------------
    heroMode: HeroMode;
    setHeroMode: (mode: HeroMode) => void;

    // ---------------- Command Palette ----------------
    commandOpen: boolean;
    openCommand: () => void;
    closeCommand: () => void;
    toggleCommand: () => void;

    // ---------------- Debug Mode ----------------
    debugMode: boolean;
    toggleDebugMode: () => void;

    // ---------------- Mouse Position ----------------
    mouse: MousePosition;
    updateMouse: (x: number, y: number) => void;

    // ---------------- Particle Settings ----------------
    particleQuality: ParticleQuality;
    setParticleQuality: (quality: ParticleQuality) => void;

    // ---------------- Observability Dashboard ----------------
    metrics: ObservabilityMetrics;

    tickMetrics: () => void;
    resetMetrics: () => void;

    // ---------------- Theme ----------------
    glowEnabled: boolean;
    toggleGlow: () => void;
}

// ------------------------------------------------------------
// Initial Metrics
// ------------------------------------------------------------

const initialMetrics: ObservabilityMetrics = {
    requests: 10842,
    latency: 184,
    cacheHit: 91.2,
    gpuUsage: 73,
    tokens: 1820000,
    activeAgents: 3,
};

// ------------------------------------------------------------
// Store
// ------------------------------------------------------------

export const useSystemStore = create<SystemState>((set, get) => ({
    // Loader
    bootCompleted: false,
    loaderVisible: true,

    completeBoot: () =>
        set({
            bootCompleted: true,
            loaderVisible: false,
            heroMode: "network",
        }),

    resetBoot: () =>
        set({
            bootCompleted: false,
            loaderVisible: true,
            heroMode: "boot",
        }),

    // Navigation
    activeSection: "hero",

    setActiveSection: (section) =>
        set({
            activeSection: section,
        }),

    // Hero
    heroMode: "boot",

    setHeroMode: (mode) =>
        set({
            heroMode: mode,
        }),

    // Command Palette
    commandOpen: false,

    openCommand: () =>
        set({
            commandOpen: true,
        }),

    closeCommand: () =>
        set({
            commandOpen: false,
        }),

    toggleCommand: () =>
        set((state) => ({
            commandOpen: !state.commandOpen,
        })),

    // Debug Mode
    debugMode: false,

    toggleDebugMode: () =>
        set((state) => ({
            debugMode: !state.debugMode,
        })),

    // Mouse
    mouse: {
        x: 0,
        y: 0,
    },

    updateMouse: (x, y) =>
        set({
            mouse: { x, y },
        }),

    // Particle Quality
    particleQuality: "high",

    setParticleQuality: (quality) =>
        set({
            particleQuality: quality,
        }),

    // Dashboard Metrics
    metrics: initialMetrics,

    tickMetrics: () => {
        const metrics = get().metrics;

        set({
            metrics: {
                requests: metrics.requests + Math.floor(Math.random() * 18),

                latency: Math.max(
                    110,
                    Math.min(
                        260,
                        metrics.latency + (Math.random() * 12 - 6)
                    )
                ),

                cacheHit: Math.max(
                    88,
                    Math.min(
                        95,
                        metrics.cacheHit + (Math.random() * 0.4 - 0.2)
                    )
                ),

                gpuUsage: Math.max(
                    50,
                    Math.min(
                        95,
                        metrics.gpuUsage + (Math.random() * 6 - 3)
                    )
                ),

                tokens:
                    metrics.tokens + Math.floor(Math.random() * 5000),

                activeAgents:
                    Math.random() > 0.98
                        ? Math.floor(Math.random() * 3) + 2
                        : metrics.activeAgents,
            },
        });
    },

    resetMetrics: () =>
        set({
            metrics: initialMetrics,
        }),

    // Theme
    glowEnabled: true,

    toggleGlow: () =>
        set((state) => ({
            glowEnabled: !state.glowEnabled,
        })),
}));