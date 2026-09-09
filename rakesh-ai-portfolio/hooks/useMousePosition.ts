"use client";

import { useEffect, useState } from "react";

export interface MousePosition {
    x: number;
    y: number;
}

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", updateMousePosition, {
            passive: true,
        });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return mousePosition;
}