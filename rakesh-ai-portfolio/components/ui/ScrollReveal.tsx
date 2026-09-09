"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: RevealDirection;
    delay?: number;
    duration?: number;
    distance?: number;
    once?: boolean;
}

const getVariants = (
    direction: RevealDirection,
    distance: number
): Variants => {
    switch (direction) {
        case "down":
            return {
                hidden: { opacity: 0, y: -distance },
                visible: { opacity: 1, y: 0 },
            };

        case "left":
            return {
                hidden: { opacity: 0, x: distance },
                visible: { opacity: 1, x: 0 },
            };

        case "right":
            return {
                hidden: { opacity: 0, x: -distance },
                visible: { opacity: 1, x: 0 },
            };

        case "scale":
            return {
                hidden: {
                    opacity: 0,
                    scale: 0.9,
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                },
            };

        case "up":
        default:
            return {
                hidden: { opacity: 0, y: distance },
                visible: { opacity: 1, y: 0 },
            };
    }
};

export default function ScrollReveal({
                                         children,
                                         className = "",
                                         direction = "up",
                                         delay = 0,
                                         duration = 0.6,
                                         distance = 40,
                                         once = true,
                                     }: ScrollRevealProps) {
    return (
        <motion.div
            className={className}
            variants={getVariants(direction, distance)}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once,
                amount: 0.2,
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 1, 0.5, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
