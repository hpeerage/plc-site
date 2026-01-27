"use client";

import { Play, Info } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SermonSlider from "@/components/sections/SermonSlider";

// Data for Sunday Morning Worship
const SUNDAY_MORNING_SERMONS = [
    {
        id: "xzUBuCcd2UI",
        title: "출애굽기17강ㅣ용서는 나를 위한 것입니다",
        desc: "용서와 화해의 구별ㅣ출20장, 엡6:1-3",
        thumbnail: "https://img.youtube.com/vi/xzUBuCcd2UI/maxresdefault.jpg",
        date: "2025.12.07",
    },
    {
        id: "z0NnoOCxKKs",
        title: "성찬예배ㅣ그리스도와 연합함",
        desc: "행2:38~42; 요6:53~57; 고전11:23~26",
        thumbnail: "https://img.youtube.com/vi/z0NnoOCxKKs/maxresdefault.jpg",
        date: "2025.11.30",
    },
    {
        id: "BN7T2X0xhgc",
        title: "출애굽기16강ㅣ하나님의 이름, 그 무게와 영광",
        desc: "출20장",
        thumbnail: "https://img.youtube.com/vi/BN7T2X0xhgc/maxresdefault.jpg",
        date: "2025.11.23",
    },
    {
        id: "jBr6rx5UzJ8",
        title: "출애굽기15강ㅣ하나님은 누구신가?",
        desc: "출20장",
        thumbnail: "https://img.youtube.com/vi/jBr6rx5UzJ8/maxresdefault.jpg",
        date: "2025.11.16",
    },
    {
        id: "AHPESOQ-sUw",
        title: "출애굽기14강ㅣ순종의 복",
        desc: "출19장",
        thumbnail: "https://img.youtube.com/vi/AHPESOQ-sUw/maxresdefault.jpg",
        date: "2025.11.09",
    },
    {
        id: "XX-PQX-zfvI",
        title: "출애굽기13강ㅣ그리스도 안에서 쉬라!",
        desc: "출14장, 요15장",
        thumbnail: "https://img.youtube.com/vi/XX-PQX-zfvI/maxresdefault.jpg",
        date: "2025.11.02",
    },
    {
        id: "UGk7JE17w84",
        title: "출애굽기12강ㅣ거룩이란 하나님 앞에서 즐거워하는것",
        desc: "무교병과 누룩ㅣ이스라엘이 된다는 것ㅣ출12장",
        thumbnail: "https://img.youtube.com/vi/UGk7JE17w84/maxresdefault.jpg",
        date: "2025.10.26",
    },
    {
        id: "FdCoz02tAsQ",
        title: "출애굽기11강ㅣ참된 믿음과 거짓 믿음",
        desc: "무교절과 성화ㅣ출12장",
        thumbnail: "https://img.youtube.com/vi/FdCoz02tAsQ/maxresdefault.jpg",
        date: "2025.10.19",
    },
    {
        id: "8-AGrFJwVJA",
        title: "출애굽기10강ㅣ하나님앞에서의 선택이 인격을 만든다",
        desc: "재앙과 구원ㅣ출7-9장, 갈6:7",
        thumbnail: "https://img.youtube.com/vi/8-AGrFJwVJA/maxresdefault.jpg",
        date: "2025.10.12",
    },
    {
        id: "4vbt_zkwzq0",
        title: "출애굽기9강ㅣ하나님의 사람이라는 확신",
        desc: "진노 중에도 긍휼을 잊지 마옵소서ㅣ출7장, 하박국3:2",
        thumbnail: "https://img.youtube.com/vi/4vbt_zkwzq0/maxresdefault.jpg",
        date: "2025.10.05",
    },
];

// Data for Sunday Afternoon Worship
const SUNDAY_AFTERNOON_SERMONS = [
    {
        id: "9tFV5p-mJL4",
        title: "말이삶_야고보서 3강ㅣ율법으로 승리하는 삶",
        desc: "약2,3장, 마25장",
        thumbnail: "https://img.youtube.com/vi/9tFV5p-mJL4/maxresdefault.jpg",
    },
    {
        id: "LhHkIrGsmuM",
        title: "말이삶_야고보서 2강ㅣ무엇을 믿는가?",
        desc: "약1,2장",
        thumbnail: "https://img.youtube.com/vi/LhHkIrGsmuM/maxresdefault.jpg",
    },
    {
        id: "a1lLhLRI1rI",
        title: "말이삶_야고보서 1강ㅣ꼬인 인생에서 탈출하는 법",
        desc: "약1장",
        thumbnail: "https://img.youtube.com/vi/a1lLhLRI1rI/maxresdefault.jpg",
    },
    {
        id: "rJ4W8X5Tf0o",
        title: "말이삶_히브리서16강ㅣ그리스도께서 나를 위해 하신 일",
        desc: "히13장, 히11:24-26",
        thumbnail: "https://img.youtube.com/vi/rJ4W8X5Tf0o/maxresdefault.jpg",
    },
    {
        id: "eXaT9f3WPNk",
        title: "말이삶_히브리서15강ㅣ고난과 저주의 구별",
        desc: "히12장",
        thumbnail: "https://img.youtube.com/vi/eXaT9f3WPNk/maxresdefault.jpg",
    },
    {
        id: "FrASeeSsMhI",
        title: "말이삶_히브리서14강ㅣ하나님이 기뻐하시는 믿음과 행위",
        desc: "히11장, 창4:3-6",
        thumbnail: "https://img.youtube.com/vi/FrASeeSsMhI/maxresdefault.jpg",
    },
    {
        id: "T89rNkMXllE",
        title: "말이삶_히브리서13강ㅣ구약의 제사와 신약의 예배",
        desc: "히10장, 시편40편",
        thumbnail: "https://img.youtube.com/vi/T89rNkMXllE/maxresdefault.jpg",
    },
    {
        id: "VX4M73EQm3M",
        title: "말이삶_히브리서12강ㅣ그리스도의 희생을 왜곡하는 죄",
        desc: "히9장",
        thumbnail: "https://img.youtube.com/vi/VX4M73EQm3M/maxresdefault.jpg",
    },
    {
        id: "Wnv7WcGZDkk",
        title: "말이삶_히브리서11강ㅣ크리스천의 특권",
        desc: "히8장, 마5장",
        thumbnail: "https://img.youtube.com/vi/Wnv7WcGZDkk/maxresdefault.jpg",
    },
    {
        id: "K8m3AsEDLNI",
        title: "말이삶_히브리서10강ㅣ아브라함이 소돔왕의 선물을 거절한 이유",
        desc: "히7장, 창14장, 시110편",
        thumbnail: "https://img.youtube.com/vi/K8m3AsEDLNI/maxresdefault.jpg",
    },
];

// Data for Thursday Worship
const THURSDAY_SERMONS = [
    {
        id: "9tFV5p-mJL4",
        title: "말이삶_야고보서 3강ㅣ율법으로 승리하는 삶",
        desc: "약2,3장, 마25장",
        thumbnail: "https://img.youtube.com/vi/9tFV5p-mJL4/maxresdefault.jpg",
    },
    {
        id: "LhHkIrGsmuM",
        title: "말이삶_야고보서 2강ㅣ무엇을 믿는가?",
        desc: "약1,2장",
        thumbnail: "https://img.youtube.com/vi/LhHkIrGsmuM/maxresdefault.jpg",
    },
    {
        id: "a1lLhLRI1rI",
        title: "말이삶_야고보서 1강ㅣ꼬인 인생에서 탈출하는 법",
        desc: "약1장",
        thumbnail: "https://img.youtube.com/vi/a1lLhLRI1rI/maxresdefault.jpg",
    },
    {
        id: "rJ4W8X5Tf0o",
        title: "말이삶_히브리서16강ㅣ그리스도께서 나를 위해 하신 일",
        desc: "히13장, 히11:24-26",
        thumbnail: "https://img.youtube.com/vi/rJ4W8X5Tf0o/maxresdefault.jpg",
    },
    {
        id: "eXaT9f3WPNk",
        title: "말이삶_히브리서15강ㅣ고난과 저주의 구별",
        desc: "히12장",
        thumbnail: "https://img.youtube.com/vi/eXaT9f3WPNk/maxresdefault.jpg",
    },
    {
        id: "FrASeeSsMhI",
        title: "말이삶_히브리서14강ㅣ하나님이 기뻐하시는 믿음과 행위",
        desc: "히11장, 창4:3-6",
        thumbnail: "https://img.youtube.com/vi/FrASeeSsMhI/maxresdefault.jpg",
    },
    {
        id: "T89rNkMXllE",
        title: "말이삶_히브리서13강ㅣ구약의 제사와 신약의 예배",
        desc: "히10장, 시편40편",
        thumbnail: "https://img.youtube.com/vi/T89rNkMXllE/maxresdefault.jpg",
    },
    {
        id: "VX4M73EQm3M",
        title: "말이삶_히브리서12강ㅣ그리스도의 희생을 왜곡하는 죄",
        desc: "히9장",
        thumbnail: "https://img.youtube.com/vi/VX4M73EQm3M/maxresdefault.jpg",
    },
    {
        id: "Wnv7WcGZDkk",
        title: "말이삶_히브리서11강ㅣ크리스천의 특권",
        desc: "히8장, 마5장",
        thumbnail: "https://img.youtube.com/vi/Wnv7WcGZDkk/maxresdefault.jpg",
    },
    {
        id: "K8m3AsEDLNI",
        title: "말이삶_히브리서10강ㅣ아브라함이 소돔왕의 선물을 거절한 이유",
        desc: "히7장, 창14장, 시110편",
        thumbnail: "https://img.youtube.com/vi/K8m3AsEDLNI/maxresdefault.jpg",
    },
];

export default function SermonsPage() {
    const featuredSermon = SUNDAY_MORNING_SERMONS[0];

    return (
        <main className="min-h-screen bg-soft-black text-white">
            {/* Hero Section (Featured Video) */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-soft-black via-soft-black/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-soft-black via-soft-black/30 to-transparent z-10" />
                    <img
                        src={featuredSermon.thumbnail}
                        alt={featuredSermon.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="relative z-20 flex h-full flex-col justify-end pb-20 px-4 md:px-12 lg:px-20 container mx-auto">
                    <FadeIn>
                        <span className="mb-4 inline-block rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                            최신 설교
                        </span>
                        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl max-w-4xl">
                            {featuredSermon.title}
                        </h1>
                        <p className="mb-8 text-lg text-gray-300 max-w-2xl">
                            {featuredSermon.desc}
                        </p>
                        <div className="flex gap-4">
                            <button
                                className="flex items-center gap-2 rounded bg-white px-8 py-3 text-lg font-bold text-black hover:bg-gray-200 transition-colors"
                                onClick={() => window.open(`https://www.youtube.com/watch?v=${featuredSermon.id}`, "_blank")}
                            >
                                <Play className="fill-current" /> 재생
                            </button>
                            <button className="flex items-center gap-2 rounded bg-gray-500/50 px-8 py-3 text-lg font-bold text-white hover:bg-gray-500/70 transition-colors backdrop-blur-sm">
                                <Info /> 상세 정보
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content Sliders */}
            <div className="container mx-auto -mt-20 relative z-30 pb-20">
                <SermonSlider
                    title="주일 오전 예배"
                    description="매주 주일 오전에 드려지는 은혜의 말씀"
                    sermons={SUNDAY_MORNING_SERMONS}
                />

                <SermonSlider
                    title="주일 오후 예배"
                    description="깊이 있는 성경 강해와 나눔"
                    sermons={SUNDAY_AFTERNOON_SERMONS}
                    delay={0.2}
                />

                <SermonSlider
                    title="목요 예배"
                    description="주중의 영적 갈급함을 채우는 시간"
                    sermons={THURSDAY_SERMONS}
                    delay={0.4}
                />
            </div>
        </main>
    );
}
