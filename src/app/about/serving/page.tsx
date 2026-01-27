"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

export default function ServingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-20" />

                <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">섬기는 이들</h1>
                        <p className="text-lg md:text-xl font-light text-gray-200">
                            PL교회를 섬기는 목회자와 사역자들을 소개합니다.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Senior Pastor Profile Section */}
            <section className="py-20 px-4 md:px-0">
                <div className="container mx-auto max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-deep-navy mb-4">담임목사</h2>
                            <div className="h-1 w-20 bg-gold-accent mx-auto" />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="grid md:grid-cols-12 gap-12 items-start">
                            {/* Profile Text */}
                            <div className="md:col-span-7 order-2 md:order-1 space-y-12">
                                {/* Education */}
                                <div>
                                    <h3 className="text-xl font-bold text-deep-navy mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-gold-accent rounded-full"></span>
                                        학력
                                    </h3>
                                    <ul className="space-y-2 text-gray-700 ml-4">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>횃불트리니티 신학대학원 졸업</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>서울대학교 법학박사(Ph.D.)</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience */}
                                <div>
                                    <h3 className="text-xl font-bold text-deep-navy mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-gold-accent rounded-full"></span>
                                        경력
                                    </h3>
                                    <ul className="space-y-2 text-gray-700 ml-4">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>현)성경적세계관교육PLI 대표</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>현)엘정책연구원(ELPI) 원장</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>영국 에딘버러 대학교 객원연구원</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>일본 고베 대학교 객원교수</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>일본 인도태평양문제연구소 이사</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>울산대학교 사회과학대학 법학과 교수</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Books & Papers */}
                                <div>
                                    <h3 className="text-xl font-bold text-deep-navy mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-gold-accent rounded-full"></span>
                                        저서 및 논문
                                    </h3>
                                    <ul className="space-y-2 text-gray-700 ml-4">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>이정훈 교수의 성경적 세계관 : 경제 역사 법정치 문화 철학 영역별 적용, PLI (2022 베스트셀러)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>기독교와 선거, PLI (2020 베스트셀러)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>교회해체와 젠더이데올로기, 킹덤북스 (2018 베스트셀러)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>[공저]Beyond Versailles: The 1919 Moment and a New Order in East Asia, Lexington Books (2020)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>[공저]Confucianism, Law and Democracy in Contemporary Korea, R&L International (2015)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400 mt-1.5">•</span>
                                            <span>SSCI, KCI 논문다수</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Profile Image */}
                            <div className="md:col-span-5 order-1 md:order-2">
                                <div className="sticky top-24">
                                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                                        <Image
                                            src="/images/pastor_v2.png"
                                            alt="이정훈 목사 프로필"
                                            fill
                                            className="object-cover object-right"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Associate Pastors Section */}
            <section className="py-20 bg-gray-50 px-4 md:px-0">
                <div className="container mx-auto max-w-6xl">
                    <FadeIn delay={0.4}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-deep-navy mb-4">부교역자</h2>
                            <div className="h-1 w-20 bg-gray-300 mx-auto" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { name: "남궁영광 부목사", role: "성경적세계관교육 PLI", desc: "" },
                                { name: "전성준 부목사", role: "장년1부(남), 장년2부(남), 시니어부", desc: "40~59세 남성 및 60세 이상 남녀 담당" },
                                { name: "박진현 부목사", role: "찬양팀 / 청년2부(남)", desc: "30~39세 남성 담당" },
                                { name: "백승자 부목사", role: "초등부", desc: "7~12세 담당" },
                                { name: "김영리 전도사", role: "새가족 담당", desc: "" },
                                { name: "이휘영 전도사", role: "청년1부(여)", desc: "19~29세 여성 담당" },
                                { name: "홍선령 선교사", role: "청년2부(여), 장년1부(여)", desc: "35~39세 여성 및 40~49세 여성 담당" },
                                { name: "박영아 선교사", role: "청년2부(여), 장년2부(여)", desc: "30~34세 여성 및 50~59세 여성 담당" },
                                { name: "박민수 전도사", role: "초등부", desc: "7~12세 담당" },
                                { name: "이성은 전도사", role: "유아유치부", desc: "4~6세 담당" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                                        {/* Placeholder Image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            <span className="text-4xl opacity-20">IMG</span>
                                        </div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-deep-navy mb-1">{item.name}</h3>
                                        <p className="text-sm text-gold-accent font-medium mb-3">{item.role}</p>
                                        {item.desc && (
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Staff Section */}
            <section className="py-20 bg-white px-4 md:px-0 border-t border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <FadeIn delay={0.6}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-deep-navy mb-4">직원</h2>
                            <div className="h-1 w-20 bg-gray-300 mx-auto" />
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { name: "이선미", role: "사무처장" },
                                { name: "이다영", role: "찬양팀 간사" },
                                { name: "이세령", role: "찬양팀 간사" },
                                { name: "이유진", role: "회계팀" },
                                { name: "문향빈", role: "행정팀" },
                                { name: "노미광", role: "시설관리팀" },
                                { name: "문예찬", role: "방송팀 간사" },
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="aspect-square bg-gray-200 relative overflow-hidden rounded-t-xl">
                                        {/* Placeholder Image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            <span className="text-2xl opacity-20">IMG</span>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-bold text-deep-navy mb-1">{item.name}</h3>
                                        <p className="text-xs text-gray-500 font-medium">{item.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
