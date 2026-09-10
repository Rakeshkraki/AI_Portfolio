
import { Variants } from "framer-motion";

export const heroContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export const heroItem: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export const fadeUp = heroItem;
export const fadeUpChild = heroItem;

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

export const heroTitleVariant = heroItem;
export const heroSubtitleVariant = heroItem;
export const heroCTAAnimation = heroItem;
export const metricReveal = heroItem;

export const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
    },
};

export const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
};

export const buttonTap = {
    scale: 0.95,
};

export const navHover: Variants = {
    rest: { y: 0 },
    hover: {
        y: -2,
        transition: { duration: 0.2 },
    },
};