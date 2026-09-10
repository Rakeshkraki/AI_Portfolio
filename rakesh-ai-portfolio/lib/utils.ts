import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ============================================================
// Tailwind Class Merge
// ============================================================

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// ============================================================
// Number Formatter
// ============================================================

export function formatNumber(value: number): string {
    return new Intl.NumberFormat("en-IN").format(value);
}

// ============================================================
// Compact Number Formatter
// Example: 1500 -> 1.5K
// ============================================================

export function formatCompactNumber(value: number): string {
    return new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(value);
}

// ============================================================
// Date Formatter
// ============================================================

export function formatDate(date: Date | string): string {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}

// ============================================================
// Greeting Based On Time
// ============================================================

export function getGreeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";

    return "Welcome";
}

// ============================================================
// Email Validation
// ============================================================

export function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ============================================================
// Copy Text To Clipboard
// ============================================================

export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
}

// ============================================================
// Smooth Scroll To Section
// ============================================================

export function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

// ============================================================
// Scroll To Top
// ============================================================

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// ============================================================
// Debounce
// ============================================================

export function debounce<T extends (...args: any[]) => void>(
    callback: T,
    delay = 300
) {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

// ============================================================
// Throttle
// ============================================================

export function throttle<T extends (...args: any[]) => void>(
    callback: T,
    delay = 300
) {
    let waiting = false;

    return (...args: Parameters<T>) => {
        if (waiting) return;

        callback(...args);
        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

// ============================================================
// Sleep Helper
// ============================================================

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================================================
// Random ID Generator
// ============================================================

export function generateId(prefix = "id"): string {
    return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

// ============================================================
// Random Integer
// ============================================================

export function randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============================================================
// Clamp Value
// ============================================================

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

// ============================================================
// Reading Time Calculator
// ============================================================

export function calculateReadingTime(text: string): number {
    const words = text.trim().split(/\s+/).length;

    return Math.max(1, Math.ceil(words / 200));
}

// ============================================================
// Experience Calculator
// ============================================================

export function calculateExperience(startYear = 2022): number {
    return new Date().getFullYear() - startYear;
}

// ============================================================
// Initials Generator
// ============================================================

export function getInitials(name: string): string {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

// ============================================================
// File Size Formatter
// ============================================================

export function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];

    const index = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, index)).toFixed(2))} ${sizes[index]}`;
}
export interface NeuralNodeData {
    id: number;
    x: number;
    y: number;
    z:number;
    size: number;
}

export function generateNeuralNodes(
    count = 30
): NeuralNodeData[] {
    return Array.from({ length: count }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 100,
        size: Math.random() * 8 + 4,
    }));
}
