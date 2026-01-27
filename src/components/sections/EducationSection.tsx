"use client";

import { BookOpen, PenTool, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default function EducationSection() {
    return (
        <section className="py-20 bg-deep-navy text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* 왼쪽: 교육 철학 및 소개 */}
                    <div>
                        <FadeIn>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-10 bg-gold-accent"></span>
                                <span className="text-gold-accent font-bold tracking-widest text-sm">PLI EDUCATION</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                세상을 이기는<br />
                                <span className="text-gold-accent">성경적 세계관</span>을<br />
                                교육합니다.
                            </h2>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                PLI(Practical Leadership Institute)는 성경적 가치관으로 무장하여
                                각 영역에서 실천하는 리더를 양성하는 교육 기관입니다.
                                지금 바로 깨어있는 지성의 여정에 동참하세요.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gold-accent text-deep-navy px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all flex items-center gap-2">
                                    교육 신청하기 <ArrowRight size={20} />
                                </button>
                                <button className="border border-white/30 px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all">
                                    커리큘럼 자세히 보기
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* 오른쪽: 주요 교육 과정 카드 */}
                    <div className="grid gap-6">
                        <FadeIn delay={0.2} y={40}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold-accent/20 p-3 rounded-lg text-gold-accent group-hover:bg-gold-accent group-hover:text-deep-navy transition-colors">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">세계관 아카데미</h3>
                                        <p className="text-gray-400 text-sm mb-3">정치, 경제, 사회, 문화를 성경의 눈으로 바라보는 법을 배웁니다.</p>
                                        <span className="text-gold-accent text-sm font-semibold flex items-center gap-1">
                                            강의 듣기 <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} y={40}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold-accent/20 p-3 rounded-lg text-gold-accent group-hover:bg-gold-accent group-hover:text-deep-navy transition-colors">
                                        <PenTool size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">청소년 리더십 스쿨</h3>
                                        <p className="text-gray-400 text-sm mb-3">다음 세대를 이끌어갈 청소년들을 위한 집중 훈련 과정입니다.</p>
                                        <span className="text-gold-accent text-sm font-semibold flex items-center gap-1">
                                            강의 듣기 <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
