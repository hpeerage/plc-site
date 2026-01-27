"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    x?: number;
    duration?: number;
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    y = 20,
    x = 0,
    duration = 0.8,
    className = "",
}: FadeInProps) {
    const el = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!el.current) return;

        gsap.fromTo(
            el.current,
            {
                opacity: 0,
                y: y,
                x: x,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: duration,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el.current,
                    start: "top 85%", // 요소가 뷰포트의 85% 지점에 도달했을 때 시작
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, [delay, y, x, duration]);

    return (
        <div ref={el} className={className}>
            {children}
        </div>
    );
}
