"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
    sectionIds: string[];
    rootMargin?: string;
}

export function useScrollSpy({
                                 sectionIds,
                                 rootMargin = "-40% 0px -40% 0px",
                             }: UseScrollSpyOptions) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleEntries.length > 0) {
                    setActiveSection(
                        visibleEntries[0].target.id
                    );
                }
            },
            {
                root: null,
                rootMargin,
                threshold: [0.2, 0.4, 0.6, 0.8],
            }
        );

        sections.forEach((section) =>
            observer.observe(section)
        );

        return () => observer.disconnect();
    }, [sectionIds, rootMargin]);

    return activeSection;
}
