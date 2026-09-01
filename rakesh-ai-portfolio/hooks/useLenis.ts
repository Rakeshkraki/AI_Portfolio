"use client";

// ============================================================
// hooks/useLenis.ts
// Smooth scrolling + scroll velocity + scroll progress
// ============================================================

import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

export interface LenisState {
    scroll: number;
    progress: number;
    velocity: number;
    direction: number;
    isScrolling: boolean;
}

export function useLenis(enabled: boolean = true) {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number>(0);

    const [state, setState] = useState<LenisState>({
        scroll: 0,
        progress: 0,
        velocity: 0,
        direction: 1,
        isScrolling: false,
    });

    useEffect(() => {
        if (!enabled) return;

        // Respect accessibility settings
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const lenis = new Lenis({
            duration: 1.25,
            smoothWheel: true,
            // smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Listen for scroll updates
        lenis.on("scroll", (e: any) => {
            setState({
                scroll: e.scroll,
                progress: e.progress,
                velocity: e.velocity,
                direction: e.direction,
                isScrolling: Math.abs(e.velocity) > 0.01,
            });
        });

        // Animation frame loop
        const raf = (time: number) => {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafRef.current);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [enabled]);

    // Scroll to element
    const scrollTo = (
        target: string | HTMLElement,
        offset: number = -40
    ) => {
        if (!lenisRef.current) return;

        lenisRef.current.scrollTo(target, {
            offset,
            duration: 1.2,
        });
    };

    // Stop scrolling (used during loader)
    const stop = () => {
        lenisRef.current?.stop();
    };

    // Resume scrolling
    const start = () => {
        lenisRef.current?.start();
    };

    return {
        lenis: lenisRef.current,
        scrollTo,
        stop,
        start,
        ...state,
    };
}