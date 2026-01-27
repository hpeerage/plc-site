"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function WorshipPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-20" />

                <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">예배안내</h1>
                        <p className="text-lg md:text-xl font-light text-gray-200">
                            하나님을 만나는 기쁨, PL교회 예배에 여러분을 초대합니다.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Service Times Section */}
            <section className="py-20 px-4 md:px-0">
                <div className="container mx-auto max-w-4xl">
                    <FadeIn delay={0.2}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-deep-navy mb-4">정기 예배</h2>
                            <div className="h-1 w-20 bg-gold-accent mx-auto" />
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider text-center">
                                <div className="col-span-4 md:col-span-3">예배명</div>
                                <div className="col-span-4 md:col-span-3">시간</div>
                                <div className="col-span-4 md:col-span-6">장소 / 비고</div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                <div className="grid grid-cols-12 py-6 px-6 hover:bg-gray-50 transition-colors items-center text-center">
                                    <div className="col-span-4 md:col-span-3 font-bold text-deep-navy">주일 오전 예배</div>
                                    <div className="col-span-4 md:col-span-3 text-gold-accent font-bold">오전 11:00</div>
                                    <div className="col-span-4 md:col-span-6 text-gray-600 text-sm md:text-base">본당 (대예배실)</div>
                                </div>
                                <div className="grid grid-cols-12 py-6 px-6 hover:bg-gray-50 transition-colors items-center text-center">
                                    <div className="col-span-4 md:col-span-3 font-bold text-deep-navy">주일 오후 예배</div>
                                    <div className="col-span-4 md:col-span-3 text-gold-accent font-bold">오후 2:30</div>
                                    <div className="col-span-4 md:col-span-6 text-gray-600 text-sm md:text-base">본당 (대예배실)</div>
                                </div>
                                <div className="grid grid-cols-12 py-6 px-6 hover:bg-gray-50 transition-colors items-center text-center">
                                    <div className="col-span-4 md:col-span-3 font-bold text-deep-navy">목요 예배</div>
                                    <div className="col-span-4 md:col-span-3 text-gold-accent font-bold">오후 8:00</div>
                                    <div className="col-span-4 md:col-span-6 text-gray-600 text-sm md:text-base">본당 (대예배실)</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                            <p className="text-gray-600">
                                * 모든 예배는 유튜브 채널을 통해 실시간으로 중계됩니다.
                            </p>
                            <a
                                href="https://www.youtube.com/@PLChurch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-deep-navy font-bold hover:text-gold-accent transition-colors underline"
                            >
                                PL교회 유튜브 채널 바로가기 &rarr;
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
