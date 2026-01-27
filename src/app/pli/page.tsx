import FadeIn from "@/components/animations/FadeIn";

export default function PLIPage() {
    return (
        <main className="min-h-screen bg-white pt-24">
            <div className="container mx-auto px-4 py-12">
                <FadeIn>
                    <h1 className="text-4xl font-bold text-deep-navy mb-6">성경적세계관 PLI</h1>
                    <p className="text-gray-600">세상을 이기는 성경적 세계관 교육 과정입니다.</p>
                    <div className="mt-12 p-12 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                        콘텐츠 준비 중입니다.
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
