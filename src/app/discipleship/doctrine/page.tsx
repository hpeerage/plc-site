"use client";

import FadeIn from "@/components/animations/FadeIn";
import PageHeader from "@/components/layout/PageHeader";

export default function DoctrinePage() {
    const curriculum = [
        { week: 1, title: "하나님은 누구신가", subtitle: "참된 예배와 영적 존재" },
        { week: 2, title: "하나님의 속성", subtitle: "신실하신 하나님" },
        { week: 3, title: "복 주시고 양육하시는 하나님", subtitle: "" },
        { week: 4, title: "삼위일체와 그리스도의 위격", subtitle: "" },
        { week: 5, title: "그리스도의 위격과 기독교 이단들", subtitle: "" },
        { week: 6, title: "성령의 역사와 그리스도 중심의 신앙생활", subtitle: "" },
        { week: 7, title: "성경의 권위와 직통계시의 위험성", subtitle: "" },
        { week: 8, title: "언약신학과 하나님의 계시", subtitle: "" },
        { week: 9, title: "성령은 누구신가?", subtitle: "" },
        { week: 10, title: "성령은 어떻게 역사하시는가?", subtitle: "" },
        { week: 11, title: "교회란 무엇인가?", subtitle: "" },
        { week: 12, title: "교회가 하나님 나라인가?", subtitle: "" },
    ];

    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="12주 교리교육"
                subtitle="성경을 바르게 이해하기 위한 기초, 성경 전체를 관통하는 교리를 배웁니다."
            />

            {/* Introduction Section */}
            <section className="py-16 px-4 md:px-0">
                <div className="container mx-auto max-w-4xl">
                    <FadeIn delay={0.2}>
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                성경을 바르게 이해하기 위해서는 성경 전체를 관통하는 <span className="font-bold text-deep-navy">교리</span>를 이해해야 합니다.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                교리는 성경을 이해하는 틀이며, 삶에 적용하는 기준입니다.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                PL교회는 이 <span className="font-bold text-deep-navy">12주 교리교육</span>을 통해 제자훈련의 기초를 다집니다.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50 px-4 md:px-0">
                <div className="container mx-auto max-w-6xl">
                    <FadeIn delay={0.4}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-deep-navy mb-2">커리큘럼</h2>
                            <p className="text-gray-600">12주 동안 체계적으로 배우는 성경적 교리</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {curriculum.map((item, index) => (
                                <FadeIn key={item.week} delay={0.1 * (index % 6)}>
                                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                                        <div className="flex items-start gap-4">
                                            {/* Week Number Badge */}
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-deep-navy to-gray-700 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-white font-bold text-lg">{item.week}주</span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-bold text-deep-navy mb-1 leading-tight">
                                                    {item.title}
                                                </h3>
                                                {item.subtitle && (
                                                    <p className="text-sm text-gray-500 leading-snug">
                                                        {item.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-deep-navy text-white px-4 md:px-0">
                <div className="container mx-auto max-w-4xl text-center">
                    <FadeIn delay={0.6}>
                        <h2 className="text-2xl font-bold mb-6">성경적 세계관의 기초</h2>
                        <div className="inline-block bg-gold-accent/10 border-2 border-gold-accent px-8 py-4 rounded-lg">
                            <p className="text-gold-accent font-semibold text-lg">
                                12주 과정을 통해 흔들리지 않는 믿음의 뼈대를 세우세요
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
