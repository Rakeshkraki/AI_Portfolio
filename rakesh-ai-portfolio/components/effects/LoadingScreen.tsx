"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const loadingMessages = [
    "Initializing AI Portfolio...",
    "Loading GraphRAG Projects...",
    "Connecting AI Infrastructure...",
    "Preparing Experience Timeline...",
    "Launching Portfolio...",
];

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressTimer);

                    setTimeout(() => setVisible(false), 500);

                    return 100;
                }

                return prev + 2;
            });
        }, 50);

        const messageTimer = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
        }, 900);

        return () => {
            clearInterval(progressTimer);
            clearInterval(messageTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* AI Logo */}

                    <motion.div
                        className="loading-logo"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{
                            scale: [0.9, 1.05, 1],
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        RK
                    </motion.div>

                    {/* Name */}

                    <motion.h2
                        className="hero-gradient mt-8 text-3xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                    >
                        Rakesh Kumar
                    </motion.h2>

                    {/* Subtitle */}

                    <motion.p
                        className="loading-text"
                        key={messageIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        {loadingMessages[messageIndex]}
                    </motion.p>

                    {/* Progress */}

                    <div className="loading-progress mt-8">
                        <motion.div
                            className="loading-progress-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <motion.span
                        className="mt-4 font-mono text-sm text-cyan-300"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                        {progress}%
                    </motion.span>

                    {/* Bottom Status */}

                    <motion.div
                        className="mt-12 flex items-center gap-3 text-sm text-slate-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="loader-dot" />

                        AI Backend Engineer Portfolio • Next.js 15 • GPT-5 Ready
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}