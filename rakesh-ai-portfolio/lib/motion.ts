// ============================================================
// lib/motion.ts
// Framer Motion Animation Library
// ============================================================

import { Variants } from "framer-motion";

/* ============================================================
   Transition Presets
============================================================ */

export const transition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
};

export const fastTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
};

export const slowTransition = {
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1],
};

/* ============================================================
   Hero Animation
============================================================ */

export const heroContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.3,
        },
    },
};

export const heroItem: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(12px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition,
    },
};

/* ============================================================
   Fade Up
============================================================ */

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition,
    },
};

/* ============================================================
   Fade Down
============================================================ */

export const fadeDown: Variants = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition,
    },
};

/* ============================================================
   Fade Left
============================================================ */

export const fadeLeft: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition,
    },
};

/* ============================================================
   Fade Right
============================================================ */

export const fadeRight: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition,
    },
};

/* ============================================================
   Scale Reveal
============================================================ */

export const scaleReveal: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.92,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition,
    },
};

/* ============================================================
   Blur Reveal
============================================================ */

export const blurReveal: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(16px)",
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition,
    },
};

/* ============================================================
   Stagger Container
============================================================ */

export const staggerContainer = (
    stagger = 0.12,
    delay = 0
): Variants => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: stagger,
            delayChildren: delay,
        },
    },
});

/* ============================================================
   Metric Counter Reveal
============================================================ */

export const metricReveal: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

/* ============================================================
   Floating Animation
============================================================ */

export const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

/* ============================================================
   Glow Pulse
============================================================ */

export const glowPulse = {
    scale: [1, 1.04, 1],
    opacity: [0.85, 1, 0.85],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

/* ============================================================
   Navigation Hover
============================================================ */

export const navHover = {
    rest: {
        y: 0,
        color: "#94A3B8",
    },
    hover: {
        y: -2,
        color: "#22D3EE",
        transition: fastTransition,
    },
};

/* ============================================================
   Button Hover
============================================================ */

export const buttonHover = {
    scale: 1.03,
    y: -3,
    transition: fastTransition,
};

export const buttonTap = {
    scale: 0.96,
};

/* ============================================================
   Card Hover
============================================================ */

export const cardHover = {
    rest: {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
    },
    hover: {
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
        transition: {
            duration: 0.35,
            ease: "easeOut",
        },
    },
};

/* ============================================================
   Project Card Reveal
============================================================ */

export const projectCard: Variants = {
    hidden: {
        opacity: 0,
        y: 80,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition,
    },
};

/* ============================================================
   Timeline Animation
============================================================ */

export const timelineLine: Variants = {
    hidden: {
        scaleY: 0,
        originY: 0,
    },
    visible: {
        scaleY: 1,
        originY: 0,
        transition: {
            duration: 1.4,
            ease: "easeOut",
        },
    },
};

export const timelineNode: Variants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "backOut",
        },
    },
};

/* ============================================================
   Neural Node Hover
============================================================ */

export const nodeHover = {
    rest: {
        scale: 1,
        opacity: 0.8,
    },
    hover: {
        scale: 1.15,
        opacity: 1,
        transition: fastTransition,
    },
};

/* ============================================================
   Terminal Typing Cursor
============================================================ */

export const cursorBlink = {
    opacity: [1, 0, 1],
    transition: {
        duration: 0.8,
        repeat: Infinity,
    },
};

/* ============================================================
   Page Transition
============================================================ */

export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        filter: "blur(12px)",
    },
    animate: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        filter: "blur(12px)",
        transition: {
            duration: 0.4,
        },
    },
};

/* ============================================================
   Section Reveal
============================================================ */

export const sectionReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 70,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/* ============================================================
   Dashboard Widget Reveal
============================================================ */

export const dashboardWidget: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: fastTransition,
    },
};

/* ============================================================
   Beam Animation (RAG Pipeline)
============================================================ */

export const beamAnimation = {
    x: ["-120%", "250%"],
    transition: {
        repeat: Infinity,
        duration: 2.5,
        ease: "linear",
    },
};

/* ============================================================
   Rotate Loop (Neural Rings)
============================================================ */

export const rotateLoop = {
    rotate: 360,
    transition: {
        repeat: Infinity,
        duration: 18,
        ease: "linear",
    },
};