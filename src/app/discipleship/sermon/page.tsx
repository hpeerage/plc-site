import FadeIn from '@/components/animations/FadeIn';
import PageHeader from '@/components/layout/PageHeader';

export default function SermonPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="성경강해훈련"
                subtitle="성경을 통해 예수그리스도를 따라가는 제자도를 배웁니다."
            />

            <div className="container mx-auto px-4 py-16">
                <FadeIn>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            그리스도의 제자인 우리가 말씀이신 그리스도를 깊이 알고 그 말씀대로 삶을 바라보고 살아갈 수
                            있도록 공동체 안에서 함께 그 제자도를 훈련하는 과정입니다.
                        </p>
                        <p>
                            이를 통해 성도들은 세상 가운데서 빛과 소금으로 살아가는 제자의 삶을 실천하게 됩니다.
                        </p>
                    </div>
                    {/* Featured Sermon Placeholder */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-deep-navy mb-6">최신 강해 설교</h2>
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-deep-navy mb-2">업데이트 예정입니다</h3>
                            <p className="text-gray-500">
                                현재 준비 중인 강해 설교 시리즈가 곧 공개될 예정입니다.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
