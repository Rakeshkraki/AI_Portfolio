"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

const logs = [
    "Initializing AI Runtime",
    "Loading GPT-5 Models",
    "Connecting Vector Database",
    "Building Knowledge Graph",
    "Starting AI Agents",
    "Portfolio Ready",
];

interface LoadingScreenProps {
    onComplete?: () => void;
}

export default function LoadingScreen({
                                          onComplete,
                                      }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((currentProgress) => {
                const nextProgress =
                    currentProgress + Math.random() * 8 + 2;

                if (nextProgress >= 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        setShow(false);
                        onComplete?.();
                    }, 600);

                    return 100;
                }

                return nextProgress;
            });
        }, 120);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#020617]"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_55%)]" />

                    {/* Animated Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                        }}
                        className="absolute h-[420px] w-[420px] rounded-full border border-cyan-500/10"
                    />

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 18,
                            ease: "linear",
                        }}
                        className="absolute h-[300px] w-[300px] rounded-full border border-violet-500/10"
                    />

                    {/* Center Content */}
                    <div className="relative flex w-full max-w-lg flex-col items-center px-8 text-center">
                        {/* AI Icon */}
                        <motion.div
                            animate={{ scale: [1, 1.12, 1] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                            }}
                            className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/10 shadow-[0_0_80px_rgba(34,211,238,0.4)]"
                        >
                            <BrainCircuit
                                size={52}
                                className="text-cyan-400"
                            />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="hero-gradient mt-8 text-5xl font-black"
                        >
                            Rakesh AI
                        </motion.h1>

                        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
                            Booting AI Infrastructure
                        </p>

                        {/* Progress */}
                        <div className="mt-10 w-full">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                                <motion.div
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.15 }}
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                                />
                            </div>

                            <div className="mt-3 flex justify-between text-xs text-slate-400">
                                <span>AI Runtime</span>
                                <span>{Math.floor(progress)}%</span>
                            </div>
                        </div>

                        {/* Logs */}
                        <div className="mt-10 w-full rounded-2xl border border-cyan-500/10 bg-slate-950/60 p-5 text-left font-mono text-xs backdrop-blur-xl">
                            {logs.map((log, index) => {
                                const isActive =
                                    progress > index * 16 &&
                                    progress < (index + 1) * 16;

                                return (
                                    <motion.p
                                        key={log}
                                        animate={{
                                            opacity: progress > index * 16 ? 1 : 0.2,
                                        }}
                                        className="mb-2 text-cyan-300 last:mb-0"
                                    >
                                        &gt; {log}
                                        {isActive && (
                                            <span className="animate-pulse"> ▋</span>
                                        )}
                                    </motion.p>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
