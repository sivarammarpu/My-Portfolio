"use client";

import { useEffect, useState } from "react";

type Props = {
    text: string;
    speed?: number;
    className?: string;
};

export default function Typewriter({ text, speed = 50, className = "" }: Props) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, speed, text]);

    return <span className={className}>{displayedText}</span>;
}
