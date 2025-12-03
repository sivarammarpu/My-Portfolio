"use client";

import { useRef, useState } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How strong the magnetic pull is (higher = more movement)
};

export default function MagneticButton({ children, className = "", strength = 30 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = (clientX - centerX) / width;
        const deltaY = (clientY - centerY) / height;

        setPosition({
            x: deltaX * strength,
            y: deltaY * strength,
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-200 ease-out ${className}`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {children}
        </div>
    );
}
