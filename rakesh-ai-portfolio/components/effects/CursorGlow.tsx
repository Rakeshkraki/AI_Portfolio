"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function CursorGlow() {
    const { x, y } = useMousePosition();

    const springX = useSpring(x, {
        stiffness: 180,
        damping: 28,
        mass: 0.5,
    });

    const springY = useSpring(y, {
        stiffness: 180,
        damping: 28,
        mass: 0.5,
    });

    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const isTouch =
            window.matchMedia("(pointer: coarse)").matches ||
            "ontouchstart" in window;

        setEnabled(!isTouch);
    }, []);

    if (!enabled) return null;

    return (
        <>
            {/* Large Ambient Glow */}

            <motion.div
                style={{
                    translateX: springX,
                    translateY: springY,
                }}
                className="pointer-events-none fixed left-0 top-0 z-[1]"
            >
                <div
                    className="-translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
                    style={{
                        width: 220,
                        height: 220,
                        background:
                            "radial-gradient(circle, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0.08) 35%, rgba(34,211,238,0.02) 70%, transparent 100%)",
                    }}
                />
            </motion.div>

            {/* Small Cursor Dot */}

            <motion.div
                style={{
                    translateX: springX,
                    translateY: springY,
                }}
                className="pointer-events-none fixed left-0 top-0 z-[2]"
            >
                <div
                    className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60 bg-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                    style={{
                        width: 12,
                        height: 12,
                    }}
                />
            </motion.div>
        </>
    );
}