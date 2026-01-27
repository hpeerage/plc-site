"use client";

import FadeIn from "@/components/animations/FadeIn";
import { MapPin, Phone, Mail } from "lucide-react";

export default function LocationPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-20" />

                <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">오시는 길</h1>
                        <p className="text-lg md:text-xl font-light text-gray-200">
                            PL교회로 오시는 길을 안내해 드립니다.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Location Info Section */}
            <section className="py-20 px-4 md:px-0">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Info */}
                        <FadeIn delay={0.2}>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-deep-navy mb-6">교회 정보</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-deep-navy shrink-0">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                                                <p className="text-gray-600">
                                                    서울 동작구 노들로2길 7 노량진드림스퀘어
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-deep-navy shrink-0">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">이메일</h3>
                                                <p className="text-gray-600">plchurch0505@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-deep-navy mb-3">대중교통 이용 시</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <span className="font-bold text-green-600 shrink-0">[지하철]</span>
                                            <span>노량진역 7번출구에서 도보 5분</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Map Placeholder */}
                        <FadeIn delay={0.4}>
                            <div className="h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                                {/* Embed Naver Map or Kakao Map here later */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 flex-col gap-2">
                                    <MapPin className="w-12 h-12 opacity-20" />
                                    <span className="text-sm font-medium opacity-50">지도 영역 (Naver/Kakao Map)</span>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.551989519632!2d126.9394!3d37.5137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca168d3af2e89%3A0x1234567890abcdef!2z7ISc7Jq4IOuPmeuztOq1rCDrhbjrk6TroZwy6ri4IDc!5e0!3m2!1sko!2skr!4v1733796000000!5m2!1sko!2skr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
