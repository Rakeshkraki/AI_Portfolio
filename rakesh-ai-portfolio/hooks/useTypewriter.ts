"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    loop?: boolean;
}

export function useTypewriter({
                                  words,
                                  typingSpeed = 80,
                                  deletingSpeed = 40,
                                  pauseDuration = 1800,
                                  loop = true,
                              }: UseTypewriterOptions) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!words.length) return;

        const currentWord = words[wordIndex];

        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (text.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setText(currentWord.slice(0, text.length + 1));
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseDuration);
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText(currentWord.slice(0, text.length - 1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);

                setWordIndex((prev) => {
                    const next = prev + 1;

                    if (next >= words.length) {
                        return loop ? 0 : prev;
                    }

                    return next;
                });
            }
        }

        return () => clearTimeout(timeout);
    }, [
        text,
        isDeleting,
        wordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        loop,
    ]);

    return {
        text,
        currentWord: words[wordIndex],
        isDeleting,
        wordIndex,
    };
}