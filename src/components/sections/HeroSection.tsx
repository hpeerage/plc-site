"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Play } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-black">
                    <iframe
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-60 md:h-[150%] md:w-[150%]"
                        src="https://www.youtube.com/embed/uZU46aoe_mQ?autoplay=1&mute=1&controls=0&loop=1&playlist=uZU46aoe_mQ&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <div className="max-w-3xl">
                    <FadeIn delay={0.2}>
                        <span className="mb-4 inline-block rounded-full bg-red-600/80 px-3 py-1 text-sm font-bold backdrop-blur-sm">
                            ON AIR : 주일 2부 예배 중
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.4} y={60}>
                        <h1 className="mb-6 text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl lg:text-7xl">
                            내삶의<br />
                            <span className="text-gold-accent">신앙개혁</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="mb-10 flex flex-col items-center gap-1">
                            <p className="text-2xl font-bold text-white md:text-4xl drop-shadow-md">
                                PL교회
                            </p>
                            <p className="text-sm font-light tracking-[0.2em] text-gray-200 md:text-lg drop-shadow-md">
                                PRACTICAL LEADERSHIP CHURCH
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <button className="group flex items-center justify-center gap-2 rounded-full bg-gold-accent px-8 py-4 text-lg font-bold text-deep-navy transition-all hover:-translate-y-1 hover:bg-white hover:text-deep-navy hover:shadow-lg">
                                <Play className="h-5 w-5 fill-current" />
                                <span>데일리 브래드 바로가기</span>
                            </button>

                            <button className="group flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-deep-navy hover:shadow-lg">
                                <div className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600"></span>
                                </div>
                                <span>실시간 예배 (ON AIR)</span>
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
