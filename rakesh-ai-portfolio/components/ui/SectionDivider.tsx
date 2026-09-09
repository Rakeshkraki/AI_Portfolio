"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    className?: string;
}

export default function SectionDivider({
                                           className = "",
                                       }: SectionDividerProps) {
    return (
        <div className={`relative flex items-center justify-center py-12 ${className}`}>
            {/* Left Gradient Line */}

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px flex-1 origin-right bg-gradient-to-r from-transparent via-cyan-400/40 to-cyan-400/80"
            />

            {/* Center Glow */}

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: 0.3,
                }}
                className="relative mx-6 flex items-center justify-center"
            >
                {/* Outer Glow */}

                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute h-12 w-12 rounded-full bg-cyan-400/20 blur-xl"
                />

                {/* Middle Ring */}

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute h-8 w-8 rounded-full border border-cyan-400/30"
                />

                {/* Core Dot */}

                <div className="relative z-10 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </motion.div>

            {/* Right Gradient Line */}

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                }}
                className="h-px flex-1 origin-left bg-gradient-to-l from-transparent via-violet-400/40 to-violet-400/80"
            />
        </div>
    );
}