"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { BookOpen, Mic2, Coffee } from "lucide-react";

export default function DiscipleshipPage() {
    const programs = [
        {
            title: "12주 교리교육",
            description: "성경을 바르게 이해하기 위한 기초, 성경 전체를 관통하는 교리를 배웁니다.",
            icon: <BookOpen className="w-8 h-8 text-white" />,
            href: "/discipleship/doctrine",
            color: "from-blue-600 to-blue-800",
            delay: 0.2
        },
        {
            title: "성경강해훈련",
            description: "그리스도를 깊이 알고 말씀대로 살아가는 제자도를 훈련합니다.",
            icon: <Mic2 className="w-8 h-8 text-white" />,
            href: "/discipleship/sermon",
            color: "from-stone-600 to-stone-800",
            delay: 0.3
        },
        {
            title: "데일리브레드",
            description: "매일의 묵상을 통해 삶 속에서 말씀의 인도를 받습니다.",
            icon: <Coffee className="w-8 h-8 text-white" />,
            href: "/discipleship/daily-bread",
            color: "from-amber-600 to-amber-800",
            delay: 0.4
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Optional: Add a subtle pattern or background image here */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-20" />

                <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">PL 제자훈련원</h1>
                        <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl mx-auto">
                            "너희는 가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 침례를 베풀고
                            내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라" (마 28:19-20)
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Programs Grid Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <FadeIn delay={0.1}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-deep-navy mb-4">훈련 과정 안내</h2>
                            <div className="h-1 w-20 bg-gold-accent mx-auto mb-6" />
                            <p className="text-gray-600 text-lg">
                                PL교회는 성도 한 사람 한 사람이 그리스도의 온전한 제자로 세워지기를 소망합니다.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <FadeIn key={program.title} delay={program.delay}>
                                <Link href={program.href} className="block h-full group">
                                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden hover:-translate-y-2 flex flex-col">
                                        {/* Icon Header */}
                                        <div className={`h-32 bg-gradient-to-br ${program.color} flex items-center justify-center relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                                {program.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-1 flex flex-col text-center">
                                            <h3 className="text-xl font-bold text-deep-navy mb-4 group-hover:text-amber-700 transition-colors">
                                                {program.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed flex-1">
                                                {program.description}
                                            </p>
                                            <div className="mt-6 text-sm font-semibold text-gray-400 group-hover:text-deep-navy flex items-center justify-center gap-1 transition-colors">
                                                자세히 보기
                                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
