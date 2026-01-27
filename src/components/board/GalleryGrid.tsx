"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

// 임시 갤러리 데이터
const SAMPLE_GALLERY = [
    {
        id: 1,
        title: "2026 신년 특별 새벽기도회",
        date: "2026.01.05",
        imageSrc: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800", // Church/worship
        count: 12
    },
    {
        id: 2,
        title: "청년부 겨울 수련회 'Awakening'",
        date: "2026.02.15",
        imageSrc: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", // Group gathering
        count: 24
    },
    {
        id: 3,
        title: "성탄절 칸타타 발표회",
        date: "2025.12.25",
        imageSrc: "https://images.unsplash.com/photo-1510257038753-157945d812ab?auto=format&fit=crop&q=80&w=800", // Concert/Performance
        count: 35
    },
    {
        id: 4,
        title: "사랑의 연탄 나눔 봉사",
        date: "2025.12.10",
        imageSrc: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800", // Volunteer/Helping
        count: 18
    },
    {
        id: 5,
        title: "가을 야외 예배",
        date: "2025.10.20",
        imageSrc: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&q=80&w=800", // Park/Outdoor
        count: 42
    },
    {
        id: 6,
        title: "유초등부 성경학교",
        date: "2025.08.15",
        imageSrc: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800", // Kids playing
        count: 20
    },
];

export default function GalleryGrid() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_GALLERY.map((item, index) => (
                <FadeIn key={item.id} delay={index * 0.1}>
                    <div className="group cursor-pointer">
                        {/* Thumbnail */}
                        <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all group-hover:shadow-md">
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay with Count */}
                            <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm flex items-center gap-1">
                                <ImageIcon className="h-3 w-3" />
                                <span>+{item.count}</span>
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-deep-navy transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {item.date}
                            </p>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    );
}
