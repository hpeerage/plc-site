"use client";

import { useRef } from "react";
import Image from "next/image";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

interface Sermon {
    id: string;
    title: string;
    desc: string;
    thumbnail: string;
    date?: string;
}

interface SermonSliderProps {
    title: string;
    description?: string;
    sermons: Sermon[];
    delay?: number;
}

export default function SermonSlider({ title, description, sermons, delay = 0 }: SermonSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left" ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="mb-12">
            <FadeIn delay={delay}>
                <div className="mb-4 flex items-end justify-between px-4 md:px-0">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
                        {description && <p className="text-sm text-gray-400">{description}</p>}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="rounded-full bg-white/10 p-1.5 hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="rounded-full bg-white/10 p-1.5 hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={delay + 0.2} y={20}>
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x px-4 md:px-0"
                >
                    {sermons.map((sermon) => (
                        <div
                            key={sermon.id}
                            className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer"
                            onClick={() => window.open(`https://www.youtube.com/watch?v=${sermon.id}`, "_blank")}
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-3 bg-gray-800">
                                <Image
                                    src={sermon.thumbnail}
                                    alt={sermon.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <PlayCircle className="h-12 w-12 text-white drop-shadow-lg" />
                                </div>
                                {sermon.date && (
                                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-[10px] font-bold rounded text-white">
                                        {sermon.date}
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div>
                                <h3 className="text-base font-bold leading-tight mb-1 text-gray-100 group-hover:text-gold-accent transition-colors line-clamp-2">
                                    {sermon.title}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-1">{sermon.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}
