
"use client";

import { useRef } from "react";
import FadeIn from "@/components/animations/FadeIn";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import Image from "next/image";

// Dummy Data
const SERMONS = [
    { id: 1, title: "창세기 강해 1강", preacher: "이정훈 목사", date: "2024.01.07", thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80" },
    { id: 2, title: "창세기 강해 2강", preacher: "이정훈 목사", date: "2024.01.14", thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" },
    { id: 3, title: "창세기 강해 3강", preacher: "이정훈 목사", date: "2024.01.21", thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80" },
    { id: 4, title: "창세기 강해 4강", preacher: "이정훈 목사", date: "2024.01.28", thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80" },
    { id: 5, title: "창세기 강해 5강", preacher: "이정훈 목사", date: "2024.02.04", thumbnail: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&q=80" },
];

export default function SermonArchive() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left" ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-soft-black py-20 text-white">
            <div className="container mx-auto px-4">
                <FadeIn x={-20}>
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gold-accent md:text-3xl">창세기 강해 정주행</h2>
                            <p className="mt-2 text-gray-400">말씀의 깊이를 더하는 시간</p>
                        </div>
                        <div className="hidden gap-2 md:flex">
                            <button onClick={() => scroll("left")} className="rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition-colors">
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button onClick={() => scroll("right")} className="rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition-colors">
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3} y={100}>
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {SERMONS.map((sermon) => (
                            <div
                                key={sermon.id}
                                className="relative min-w-[280px] flex-shrink-0 cursor-pointer snap-start overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105 md:min-w-[320px]"
                            >
                                <div className="aspect-video w-full overflow-hidden relative">
                                    <Image
                                        src={sermon.thumbnail}
                                        alt={sermon.title}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100 z-10">
                                        <PlayCircle className="h-12 w-12 text-white" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-white">{sermon.title}</h3>
                                    <p className="text-sm text-gray-400">{sermon.preacher} | {sermon.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

