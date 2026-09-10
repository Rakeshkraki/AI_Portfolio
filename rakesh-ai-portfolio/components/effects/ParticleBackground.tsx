"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
}

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 120;

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let animationRef: any;
    // @ts-ignore
    animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        const particles: Particle[] = Array.from(
            { length: PARTICLE_COUNT },
            () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1,
            })
        );

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];

                    const distance = Math.hypot(
                        p1.x - p2.x,
                        p1.y - p2.y
                    );

                    if (distance < CONNECTION_DISTANCE) {
                        ctx.strokeStyle = `rgba(34,211,238,${
                            (CONNECTION_DISTANCE - distance) /
                            CONNECTION_DISTANCE *
                            0.18
                        })`;

                        ctx.lineWidth = 1;

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            particles.forEach((particle) => {
                particle.x += particle.dx;
                particle.y += particle.dy;

                if (
                    particle.x < 0 ||
                    particle.x > canvas.width
                )
                    particle.dx *= -1;

                if (
                    particle.y < 0 ||
                    particle.y > canvas.height
                )
                    particle.dy *= -1;

                ctx.beginPath();
                ctx.fillStyle = "rgba(34,211,238,0.8)";
                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 -z-30 opacity-60"
            aria-hidden="true"
        />
    );
}