"use client";

import { motion } from "framer-motion";

const NODES = Array.from({ length: 28 }, (_, index) => ({
    id: index,
    size: Math.random() * 10 + 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 6 + 6,
    delay: Math.random() * 2,
}));

const LINES = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    rotate: Math.random() * 360,
    top: Math.random() * 100,
    left: Math.random() * 100,
    width: Math.random() * 160 + 80,
    duration: Math.random() * 3 + 5,
}));

export default function HeroScene() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Cyan Ambient Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="absolute -top-48 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
            />

            {/* Violet Ambient Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[140px]"
            />

            {/* Outer Rotating Ring */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
            />

            {/* Inner Rotating Ring */}
            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 55,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/10"
            />

            {/* Neural Network Lines */}
            {LINES.map((line) => (
                <motion.div
                    key={line.id}
                    animate={{
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: line.duration,
                        repeat: Infinity,
                    }}
                    className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                    style={{
                        top: `${line.top}%`,
                        left: `${line.left}%`,
                        width: `${line.width}px`,
                        transform: `rotate(${line.rotate}deg)`,
                    }}
                />
            ))}

            {/* Floating Neural Nodes */}
            {NODES.map((node) => (
                <motion.div
                    key={node.id}
                    initial={{
                        opacity: 0.2,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.3, 0.8],
                        y: [0, -18, 0],
                    }}
                    transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        delay: node.delay,
                    }}
                    className="absolute rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                    style={{
                        width: node.size,
                        height: node.size,
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                    }}
                />
            ))}

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />

            {/* GraphRAG Status */}
            <motion.div
                animate={{
                    y: [-20, 20, -20],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
                className="absolute left-10 top-28 rounded-xl border border-cyan-400/20 bg-slate-950/70 px-4 py-3 backdrop-blur-xl"
            >
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    GraphRAG
                </p>

                <p className="mt-1 text-sm text-white">
                    Knowledge Graph Connected
                </p>
            </motion.div>

            {/* AI Agent Status */}
            <motion.div
                animate={{
                    y: [20, -20, 20],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="absolute right-12 top-40 rounded-xl border border-violet-400/20 bg-slate-950/70 px-4 py-3 backdrop-blur-xl"
            >
                <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                    AI Agent
                </p>

                <p className="mt-1 text-sm text-white">
                    Reasoning Workflow Active
                </p>
            </motion.div>

            {/* Vector Search Status */}
            <motion.div
                animate={{
                    y: [-15, 15, -15],
                }}
                transition={{
                    duration: 11,
                    repeat: Infinity,
                }}
                className="absolute bottom-24 left-20 rounded-xl border border-emerald-400/20 bg-slate-950/70 px-4 py-3 backdrop-blur-xl"
            >
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                    Vector Search
                </p>

                <p className="mt-1 text-sm text-white">
                    Qdrant + Neo4j Synced
                </p>
            </motion.div>

            {/* Vignette */}
            <motion.div
                animate={{
                    opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(2,6,23,0.5)_75%,rgba(2,6,23,0.9)_100%)]"
            />
        </div>

    );
}