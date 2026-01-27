"use client";

import FadeIn from "@/components/animations/FadeIn";
import NoticeList, { NoticeItem } from "@/components/board/NoticeList";

export default function NewsPage() {
    // 공식 소식 데이터 (행정, 주보, 중요 일정)
    const OFFICIAL_NOTICES: NoticeItem[] = [
        {
            id: 1,
            category: "주보",
            title: "2026년 3월 넷째 주 주보",
            date: "2026.03.22",
            isImportant: true,
        },
        {
            id: 2,
            category: "주보",
            title: "2026년 3월 셋째 주 주보",
            date: "2026.03.15",
            isImportant: false,
        },
        {
            id: 3,
            category: "행정",
            title: "제24회 정기 제직회 공고",
            date: "2026.03.10",
            isImportant: true,
        },
        {
            id: 4,
            category: "일정",
            title: "고난주간 특별 새벽기도회 일정 안내",
            date: "2026.03.05",
            isImportant: true,
        },
        {
            id: 5,
            category: "채용",
            title: "교육부서 파트 사역자 청빙 공고",
            date: "2026.02.28",
            isImportant: false,
        },
        {
            id: 6,
            category: "주보",
            title: "2026년 3월 둘째 주 주보",
            date: "2026.03.08",
            isImportant: false,
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Bg Image Placeholder - More formal/newsy */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-50 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1600")' }} // Mic/News/Paper
                />

                <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl font-bold md:text-5xl mb-4">
                            교회소식
                        </h1>
                        <p className="max-w-xl text-lg text-gray-200 font-light">
                            PLC 교회의 공식적인 소식과 주보를 확인하세요.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-start md:gap-12">

                    {/* Sidebar / Filter (Visual only for now) */}
                    <FadeIn delay={0.1} className="w-full md:w-64 mb-8 md:mb-0 flex-shrink-0">
                        <div className="sticky top-24 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold text-deep-navy">카테고리</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button className="flex w-full items-center justify-between rounded-lg bg-deep-navy px-3 py-2 text-sm font-medium text-white">
                                        <span>전체보기</span>
                                        <span className="text-xs opacity-70">24</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                                        <span>주보</span>
                                        <span className="text-xs text-gray-400">12</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                                        <span>행정/공지</span>
                                        <span className="text-xs text-gray-400">5</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                                        <span>언론보도</span>
                                        <span className="text-xs text-gray-400">3</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Main List */}
                    <div className="flex-1">
                        <FadeIn delay={0.2}>
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-deep-navy">전체 목록</h2>
                                <span className="text-sm text-gray-500">총 {OFFICIAL_NOTICES.length}건</span>
                            </div>
                            <NoticeList notices={OFFICIAL_NOTICES} />
                        </FadeIn>
                    </div>

                </div>
            </div>
        </main>
    );
}
