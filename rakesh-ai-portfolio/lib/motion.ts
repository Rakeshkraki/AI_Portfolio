import { Variants } from "framer-motion";

// ============================================================
// Fade In Animation
// ============================================================

export const fadeIn = (
    direction: "up" | "down" | "left" | "right" = "up",
    delay = 0,
    duration = 0.6
): Variants => {
    const distance = 40;

    const initial = {
        opacity: 0,
        x:
            direction === "left"
                ? distance
                : direction === "right"
                    ? -distance
                    : 0,
        y:
            direction === "up"
                ? distance
                : direction === "down"
                    ? -distance
                    : 0,
    };

    return {
        hidden: initial,
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay,
                duration,
                ease: [0.25, 1, 0.5, 1],
            },
        },
    };
};

// ============================================================
// Zoom In Animation
// ============================================================

export const zoomIn = (
    delay = 0,
    duration = 0.6
): Variants => ({
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

// ============================================================
// Slide In Animation
// ============================================================

export const slideIn = (
    direction: "left" | "right" | "up" | "down",
    type: "spring" | "tween" = "tween",
    delay = 0,
    duration = 0.8
): Variants => ({
    hidden: {
        x:
            direction === "left"
                ? "-100%"
                : direction === "right"
                    ? "100%"
                    : 0,
        y:
            direction === "up"
                ? "100%"
                : direction === "down"
                    ? "-100%"
                    : 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
        },
    },
});

// ============================================================
// Text Variant
// ============================================================

export const textVariant = (delay = 0): Variants => ({
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.7,
            ease: [0.25, 1, 0.5, 1],
        },
    },
});

// ============================================================
// Stagger Container
// ============================================================

export const staggerContainer = (
    staggerChildren = 0.12,
    delayChildren = 0
): Variants => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

// ============================================================
// Scale On Hover
// ============================================================

export const hoverScale = {
    whileHover: {
        scale: 1.03,
        y: -5,
        transition: {
            duration: 0.25,
        },
    },
};

// ============================================================
// Floating Animation
// ============================================================

export const floatingAnimation = {
    animate: {
        y: [0, -10, 0],
    },
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

// ============================================================
// Glow Pulse Animation
// ============================================================

export const glowPulse = {
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.08, 1],
    },
    transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

// ============================================================
// Rotate Animation
// ============================================================

export const rotateSlow = {
    animate: {
        rotate: 360,
    },
    transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
    },
};

// ============================================================
// Fade Up Children
// ============================================================

export const fadeUpChild: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// ============================================================
// Card Hover Variant
// ============================================================

export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    },
    hover: {
        scale: 1.02,
        y: -8,
        boxShadow: "0px 20px 40px rgba(34,211,238,0.15)",
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};

// ============================================================
// Button Hover Variant
// ============================================================

export const buttonHover = {
    whileHover: {
        scale: 1.04,
        y: -2,
    },
    whileTap: {
        scale: 0.98,
    },
};

// ============================================================
// Reveal Variant (Viewport Sections)
// ============================================================

export const revealVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

// ============================================================
// Hero Title Animation
// ============================================================

export const heroTitleVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

// ============================================================
// Hero Subtitle Animation
// ============================================================

export const heroSubtitleVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.7,
        },
    },
};

// ============================================================
// Hero CTA Animation
// ============================================================

export const heroCTAAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 0.6,
        },
    },
};