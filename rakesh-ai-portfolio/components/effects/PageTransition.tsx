"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({
                                           children,
                                       }: {
    children: ReactNode;
}) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}