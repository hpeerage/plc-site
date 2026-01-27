"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Placeholder for a background image if available later */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-20" />

                <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">교회소개</h1>
                        <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed text-gray-200">
                            말씀을 내 삶으로 실천하는(Practical)<br className="md:hidden" /> 리더(Leadership)를 키우는 교회(Church)
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-0">
                <div className="container mx-auto max-w-4xl">
                    <FadeIn delay={0.2}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-deep-navy mb-4">PLC에 오신 것을 환영합니다</h2>
                            <div className="h-1 w-20 bg-gold-accent mx-auto" />
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-12 gap-12 items-start">
                        {/* Pastor's Image (Placeholder) */}
                        <div className="md:col-span-5 relative">
                            <FadeIn delay={0.4} x={-20}>
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg bg-gray-200">
                                    <Image
                                        src="/images/pastor_profile_final.png"
                                        alt="이정훈 담임목사"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-4 text-center md:text-left">
                                    <p className="text-xl font-bold text-deep-navy">이정훈 목사</p>
                                    <p className="text-sm text-gray-500">담임목사</p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Pastor's Greeting Text */}
                        <div className="md:col-span-7">
                            <FadeIn delay={0.6} x={20}>
                                <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 relative">
                                    {/* Decorative Quote Icon */}
                                    <div className="absolute -top-4 -left-4 text-gold-accent opacity-20">
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.896 14.389 16.03 15.133 15.402C15.877 14.774 16.979 14.46 18.439 14.46V11.87C16.639 11.87 15.429 12.28 14.809 13.1C14.189 13.92 13.879 15.25 13.879 17.09V21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.38897 16.03 6.13297 15.402C6.87697 14.774 7.97897 14.46 9.43897 14.46V11.87C7.63897 11.87 6.42897 12.28 5.80897 13.1C5.18897 13.92 4.87897 15.25 4.87897 17.09V21H5.01697Z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold text-deep-navy mb-6 pl-4">담임목사 인사말</h3>

                                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                        <p className="font-medium text-deep-navy">
                                            To. 예수님의 통치를 갈망하는 사랑하는 크리스천들에게
                                        </p>
                                        <p>
                                            안녕하세요 이정훈 목사입니다.
                                        </p>
                                        <p>
                                            예수님을 처음 만난 그 순간을 떠올리면 지금도 그 사랑과 은혜에 눈물이 흐릅니다.
                                        </p>
                                        <p>
                                            그날 저는 새로운 피조물이 되었습니다. 그 동안 저를 구성하던 가치관과 세계관, 기준들은 모두 무너져버렸지요.
                                        </p>
                                        <p>
                                            대신 제겐 새로운 질문들이 생겼습니다.
                                        </p>
                                        <blockquote className="border-l-4 border-gold-accent pl-6 py-2 italic text-gray-600 bg-white rounded-r-lg shadow-sm">
                                            "세상과 구별되는 빛과 소금으로 살라고 하셨는데<br />
                                            구체적인 삶의 현장에서 크리스천은 어떻게 살아야 할까."
                                        </blockquote>
                                        <p>
                                            삶에서 마주하는 선택의 순간들에 세상과 같은 선택을 한다면 그건 크리스천이라 할 수 없을 텐데 크리스천다운 가치를 담은 구체적인 판단기준은 무엇일까.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
