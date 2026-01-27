"use client";

import FadeIn from "@/components/animations/FadeIn";
import { MapPin, Clock, UserPlus, ArrowRight } from "lucide-react";

export default function NewComerSection() {
    return (
        <section className="bg-white py-20 text-soft-black">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-deep-navy md:text-4xl">
                            처음 오셨나요?
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mt-4 text-gray-600">
                            PL교회에 오신 여러분을 진심으로 환영합니다.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Service Times */}
                    <FadeIn delay={0.1} className="h-full">
                        <div className="h-full rounded-2xl bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-deep-navy/10 text-deep-navy">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-deep-navy">예배 안내</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>주일 오전 예배</span>
                                    <span className="font-semibold">오전 11:00</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-2">
                                    <span>주일 오후 예배</span>
                                    <span className="font-semibold">오후 2:30</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>목요 예배</span>
                                    <span className="font-semibold">오후 8:00</span>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Location / Map */}
                    <FadeIn delay={0.2} className="h-full">
                        <div className="h-full rounded-2xl bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-deep-navy/10 text-deep-navy">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-deep-navy">오시는 길</h3>
                            <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                                {/* Map Placeholder */}
                                <div className="flex h-full w-full items-center justify-center bg-gray-300 text-gray-500">
                                    Map Placeholder
                                </div>
                            </div>
                            <p className="mb-4 text-sm text-gray-600">
                                서울시 강남구 테헤란로 123 PL빌딩 3층
                            </p>
                            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-deep-navy py-2 text-sm font-semibold text-deep-navy transition-colors hover:bg-deep-navy hover:text-white">
                                길찾기 바로가기
                            </button>
                        </div>
                    </FadeIn>

                    {/* Registration */}
                    <FadeIn delay={0.3} className="h-full">
                        <div className="flex h-full flex-col justify-between rounded-2xl bg-deep-navy p-8 text-white shadow-lg">
                            <div>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-accent">
                                    <UserPlus className="h-6 w-6" />
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-gold-accent">새가족 등록</h3>
                                <p className="mb-6 text-gray-300">
                                    온라인으로 간편하게 등록하실 수 있습니다.<br />
                                    새로운 가족이 되신 것을 축복합니다.
                                </p>
                            </div>
                            <button className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gold-accent py-3 font-bold text-deep-navy transition-transform hover:scale-105">
                                <span>온라인 등록하기</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
