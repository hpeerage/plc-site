"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import NoticeList from "@/components/board/NoticeList";
import GalleryGrid from "@/components/board/GalleryGrid";
import { Megaphone, Images } from "lucide-react";

type TabType = 'notice' | 'gallery';

export default function CommunityPage() {
    const [activeTab, setActiveTab] = useState<TabType>('notice');

    // 커뮤니티 성격의 데이터
    const COMMUNITY_NOTICES = [
        {
            id: 1,
            category: "공지",
            title: "2026년 봄 정기 심방 안내",
            date: "2026.03.15",
            isImportant: true,
        },
        {
            id: 2,
            category: "예배",
            title: "부활절 칸타타 연합 성가대 모집",
            date: "2026.03.10",
            isImportant: true,
        },
        {
            id: 3,
            category: "소식",
            title: "3월 새가족 교육 수료자 명단",
            date: "2026.03.01",
        },
        {
            id: 4,
            category: "모집",
            title: "토요 쉐마 학교 교사 모집",
            date: "2026.02.24",
        },
        {
            id: 5,
            category: "공지",
            title: "교회 주차장 이용 수칙 변경 안내",
            date: "2026.02.20",
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Bg Image Placeholder */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1600")' }} // Group gathering/Community
                />

                <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl font-bold md:text-5xl mb-4">
                            PL가족
                        </h1>
                        <p className="max-w-xl text-lg text-gray-200 font-light">
                            하나님 안에서 한 가족 된 우리의 소식과 이야기를 나눕니다.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">

                {/* Tabs */}
                <FadeIn delay={0.1}>
                    <div className="mb-12 flex justify-center">
                        <div className="flex w-full max-w-md rounded-full bg-white p-1.5 shadow-sm border border-gray-100">
                            <button
                                onClick={() => setActiveTab('notice')}
                                className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all ${activeTab === 'notice'
                                        ? "bg-deep-navy text-white shadow-md"
                                        : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                <Megaphone className="h-4 w-4" />
                                <span>교회소식</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('gallery')}
                                className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all ${activeTab === 'gallery'
                                        ? "bg-deep-navy text-white shadow-md"
                                        : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                <Images className="h-4 w-4" />
                                <span>행사앨범</span>
                            </button>
                        </div>
                    </div>
                </FadeIn>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    {activeTab === 'notice' && (
                        <div key="notice"> {/* Key resets animation on tab switch if needed, but FadeIn handles it inside list */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-deep-navy mb-2">교회소식</h2>
                                <p className="text-gray-500">PLC 교회의 새로운 소식들을 전해드립니다.</p>
                            </div>
                            <NoticeList notices={COMMUNITY_NOTICES} />
                        </div>
                    )}

                    {activeTab === 'gallery' && (
                        <div key="gallery">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-deep-navy mb-2">행사앨범</h2>
                                <p className="text-gray-500">은혜와 기쁨이 가득했던 순간들을 기록합니다.</p>
                            </div>
                            <GalleryGrid />
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}
