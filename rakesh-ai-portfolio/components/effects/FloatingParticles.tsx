"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
    id: number;
    size: number;
    left: number;
    duration: number;
    delay: number;
    opacity: number;
}

const PARTICLE_COUNT = 35;

export default function FloatingParticles() {
    const particles = useMemo<Particle[]>(() => {
        return Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
            id: index,
            size: Math.random() * 4 + 2,
            left: Math.random() * 100,
            duration: Math.random() * 12 + 12,
            delay: Math.random() * 8,
            opacity: Math.random() * 0.5 + 0.2,
        }));
    }, []);

    return (
        <div className="ai-particles fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.span
                    key={particle.id}
                    className="ai-particle absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.left}%`,
                        opacity: particle.opacity,
                    }}
                    initial={{
                        y: "110vh",
                        x: 0,
                        scale: 0.6,
                    }}
                    animate={{
                        y: "-10vh",
                        x: [0, 20, -15, 10, 0],
                        scale: [0.6, 1, 0.8, 1, 0.6],
                        opacity: [0, particle.opacity, particle.opacity, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Cyan Glow Orb */}

            <motion.div
                className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]"
                animate={{
                    x: [0, 40, -30, 0],
                    y: [0, -30, 20, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Purple Glow Orb */}

            <motion.div
                className="absolute right-[10%] top-[35%] h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]"
                animate={{
                    x: [0, -35, 20, 0],
                    y: [0, 25, -20, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blue Glow Orb */}

            <motion.div
                className="absolute bottom-[8%] left-[40%] h-80 w-80 rounded-full bg-sky-400/10 blur-[140px]"
                animate={{
                    x: [0, 25, -25, 0],
                    y: [0, -20, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}