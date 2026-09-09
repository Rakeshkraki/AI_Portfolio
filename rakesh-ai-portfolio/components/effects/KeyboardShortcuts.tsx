"use client";

import { useEffect } from "react";

export default function KeyboardShortcuts() {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isCommandK =
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k";

            if (isCommandK) {
                event.preventDefault();

                // Trigger Command Palette
                window.dispatchEvent(new CustomEvent("open-command-palette"));
                return;
            }

            if (event.key === "Escape") {
                window.dispatchEvent(new CustomEvent("close-command-palette"));
                return;
            }

            if (event.key === "Home") {
                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return null;
}