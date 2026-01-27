"use client";

import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

interface DepartmentCardProps {
    name: string;        // 부서명 (예: 유초등부)
    slogan: string;      // 표어 (예: 예수님을 닮아가는 어린이)
    target: string;      // 대상 (예: 초등 1~6학년)
    time: string;        // 예배 시간
    location: string;    // 예배 장소
    description: string; // 간단 소개
    imageSrc: string;    // 배경/대표 이미지 경로
    colorClass: string;  // 포인트 컬러 (예: text-blue-500)
    delay?: number;      // 애니메이션 딜레이
}

export default function DepartmentCard({
    name,
    slogan,
    target,
    time,
    location,
    description,
    imageSrc,
    colorClass,
    delay = 0,
}: DepartmentCardProps) {
    return (
        <FadeIn delay={delay} className="h-full">
            <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100">
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    {/* Placeholder for image if not valid */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 ${colorClass && 'opacity-20'}`}>
                        {/* Fallback pattern or solid color if image fails loading (handled by Image component usually, but this is visual placeholder) */}
                    </div>
                    {/* Actual Image */}
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium opacity-90">{target}</p>
                        <h3 className="text-2xl font-bold">{name}</h3>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <p className={`mb-4 text-sm font-bold ${colorClass}`}>
                        {slogan}
                    </p>
                    <p className="mb-6 text-gray-600 line-clamp-3 text-sm leading-relaxed">
                        {description}
                    </p>

                    <div className="space-y-3 border-t border-gray-100 pt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}
