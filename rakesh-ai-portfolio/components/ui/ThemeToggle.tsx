"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="icon-box-sm border-soft transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}