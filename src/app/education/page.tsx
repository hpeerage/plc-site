"use client";

import FadeIn from "@/components/animations/FadeIn";
import DepartmentCard from "@/components/cards/DepartmentCard";

export default function EducationPage() {
    const departments = [
        {
            name: "영유아유치부",
            slogan: "말씀의 씨앗을 심는 아이들",
            target: "0세 ~ 7세 (미취학)",
            time: "주일 오전 11:00",
            location: "비전센터 1층 꿈새싹홀",
            description: "하나님의 사랑 안에서 자라나는 믿음의 새싹들입니다. 오감 활동과 찬양, 말씀을 통해 하나님을 경험하며 예배의 기쁨을 배워갑니다. 부모님과 함께하는 가정 연계 활동을 중요하게 생각합니다.",
            imageSrc: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800", // Kids coloring/playing
            colorClass: "text-purple-500"
        },
        {
            name: "유초등부",
            slogan: "예수님을 닮아가는 어린이",
            target: "초등학교 1학년 ~ 6학년",
            time: "주일 오전 11:00",
            location: "비전센터 2층 드림홀",
            description: "말씀을 배우고 실천하며 예수님의 작은 제자로 자라납니다. 신나는 찬양, 깊이 있는 공과 공부, 즐거운 2부 순서를 통해 공동체의 소중함을 배우고 영적 성장을 이루어갑니다.",
            imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", // School kids
            colorClass: "text-blue-500"
        },
        {
            name: "중고등부",
            slogan: "세상을 이기는 거룩한 세대",
            target: "중학교 1학년 ~ 고등학교 3학년",
            time: "주일 오전 10:30",
            location: "본당 2층 유스채플",
            description: "입시와 진로의 고민 속에서도 하나님을 주인으로 모시는 청소년 세대입니다. 뜨거운 찬양과 예배, 제자훈련을 통해 세상의 가치관을 거스르고 성경적 세계관으로 무장합니다.",
            imageSrc: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", // Teens group
            colorClass: "text-green-500"
        },
        {
            name: "청년부",
            slogan: "부르심에 응답하는 청년",
            target: "20세 이상 미혼 청년",
            time: "주일 오후 2:00",
            location: "본당 3층 메인홀",
            description: "하나님 나라의 완성을 꿈꾸며 열정으로 예배하는 청년 공동체입니다. 삶의 현장에서 크리스천의 정체성을 가지고 치열하게 살아가며, 서로를 세워주고 함께 성장합니다.",
            imageSrc: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", // Friends gathering
            colorClass: "text-indigo-500"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Bg Image Placeholder - Can be replaced later */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600")' }} // Charity/Helping hands/Group
                />

                <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-accent backdrop-blur-md">
                            PLC CHURCH SCHOOL
                        </span>
                        <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl mb-6">
                            다음세대
                        </h1>
                        <p className="max-w-2xl text-lg text-gray-200 md:text-xl font-light leading-relaxed">
                            말씀으로 양육하고 사랑으로 품어<br />
                            세상을 변화시킬 하나님의 사람들을 세웁니다.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Department List Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-bold text-deep-navy md:text-4xl mb-4">
                                부서 안내
                            </h2>
                            <p className="text-gray-600">
                                연령별 눈높이에 맞춘 예배와 교육 프로그램을 제공합니다.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {departments.map((dept, index) => (
                            <DepartmentCard
                                key={dept.name}
                                {...dept}
                                delay={0.2 + (index * 0.1)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Slogan Banner */}
            <section className="bg-deep-navy py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn>
                        <p className="text-xl md:text-3xl font-bold leading-relaxed">
                            &quot;마땅히 행할 길을 아이에게 가르치라<br />
                            그리하면 늙어도 그것을 떠나지 아니하리라&quot;
                        </p>
                        <p className="mt-6 text-gold-accent font-medium">
                            잠언 22장 6절
                        </p>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
