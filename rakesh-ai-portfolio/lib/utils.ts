// ============================================================
// lib/utils.ts
// Shared utility functions for AI Portfolio
// ============================================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* ============================================================
   Tailwind Class Merge
============================================================ */

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/* ============================================================
   Smooth Scroll Helper
============================================================ */

export function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

/* ============================================================
   Number Formatter
============================================================ */

export function formatNumber(value: number): string {
    if (value >= 1_000_000_000)
        return `${(value / 1_000_000_000).toFixed(1)}B`;

    if (value >= 1_000_000)
        return `${(value / 1_000_000).toFixed(1)}M`;

    if (value >= 1_000)
        return `${(value / 1_000).toFixed(1)}K`;

    return value.toString();
}

/* ============================================================
   Random Between Range
============================================================ */

export function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

/* ============================================================
   Clamp Value
============================================================ */

export function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}

/* ============================================================
   Linear Mapping
============================================================ */

export function mapRange(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
) {
    return (
        ((value - inMin) * (outMax - outMin)) /
        (inMax - inMin) +
        outMin
    );
}

/* ============================================================
   Delay Utility
============================================================ */

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ============================================================
   Animation Delay Generator
============================================================ */

export function stagger(index: number, delay = 0.08) {
    return index * delay;
}

/* ============================================================
   Random Glow Color
============================================================ */

const glowColors = [
    "#22D3EE",
    "#38BDF8",
    "#8B5CF6",
    "#A855F7",
];

export function randomGlowColor() {
    return glowColors[Math.floor(Math.random() * glowColors.length)];
}

/* ============================================================
   Neural Node Generator
============================================================ */

export interface NeuralNode {
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
}

export function generateNeuralNodes(count = 120): NeuralNode[] {
    return Array.from({ length: count }).map((_, index) => ({
        id: index,
        x: random(-8, 8),
        y: random(-6, 6),
        z: random(-8, 8),
        size: random(0.02, 0.08),
        color: randomGlowColor(),
    }));
}

/* ============================================================
   Neural Connections
============================================================ */

export interface NeuralEdge {
    from: number;
    to: number;
}

export function generateConnections(
    nodes: NeuralNode[],
    maxDistance = 3
): NeuralEdge[] {
    const edges: NeuralEdge[] = [];

    nodes.forEach((a) => {
        nodes.forEach((b) => {
            if (a.id === b.id) return;

            const distance = Math.sqrt(
                Math.pow(a.x - b.x, 2) +
                Math.pow(a.y - b.y, 2) +
                Math.pow(a.z - b.z, 2)
            );

            if (distance < maxDistance) {
                edges.push({
                    from: a.id,
                    to: b.id,
                });
            }
        });
    });

    return edges;
}

/* ============================================================
   Mouse Position Normalizer
============================================================ */

export function normalizeMouse(
    x: number,
    y: number
) {
    return {
        x: x * 2 - 1,
        y: -(y * 2 - 1),
    };
}

/* ============================================================
   Device Capability Detection
============================================================ */

export function isTouchDevice() {
    if (typeof window === "undefined") return false;

    return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    );
}

export function isMobileDevice() {
    if (typeof window === "undefined") return false;

    return window.innerWidth < 768;
}

export function prefersReducedMotion() {
    if (typeof window === "undefined") return false;

    return window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
}

/* ============================================================
   Performance Tier
============================================================ */

export function getPerformanceTier() {
    if (typeof window === "undefined") return "medium";

    const cores = navigator.hardwareConcurrency ?? 4;
    const width = window.innerWidth;

    if (cores >= 8 && width >= 1440) return "high";
    if (cores >= 4) return "medium";

    return "low";
}

/* ============================================================
   Viewport Visibility
============================================================ */

export function isElementVisible(
    element: HTMLElement,
    offset = 150
) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top < window.innerHeight - offset &&
        rect.bottom > offset
    );
}

/* ============================================================
   AI Pipeline Labels
============================================================ */

export const AI_PIPELINE = [
    "INPUT",
    "RETRIEVAL",
    "CONTEXT",
    "REASONING",
    "AGENTS",
    "INFERENCE",
    "EVALUATION",
    "OBSERVABILITY",
];

/* ============================================================
   Grid Coordinates Generator
============================================================ */

export function generateGridPoints(
    rows = 12,
    cols = 12,
    spacing = 1
) {
    const points: { x: number; y: number }[] = [];

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            points.push({
                x: x * spacing,
                y: y * spacing,
            });
        }
    }

    return points;
}

/* ============================================================
   Token Counter Formatter
============================================================ */

export function formatTokens(tokens: number) {
    if (tokens > 1_000_000)
        return `${(tokens / 1_000_000).toFixed(2)}M`;

    if (tokens > 1_000)
        return `${(tokens / 1_000).toFixed(1)}K`;

    return tokens.toString();
}

/* ============================================================
   Latency Formatter
============================================================ */

export function latencyColor(latency: number) {
    if (latency < 150) return "#22C55E";
    if (latency < 300) return "#38BDF8";
    if (latency < 600) return "#F59E0B";

    return "#EF4444";
}