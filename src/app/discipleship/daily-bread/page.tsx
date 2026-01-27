import FadeIn from '@/components/animations/FadeIn';
import PageHeader from '@/components/layout/PageHeader';

// Extracted Daily Bread entries (title and date)
const entries = [
    { title: 'Daily Bread (25.12.08 - 25.12.13)', date: '2025-12-07' },
    { title: 'Daily Bread (25.12.01 - 25.12.06)', date: '2025-12-02' },
    { title: 'Daily Bread (25.11.24 - 25.11.29)', date: '2025-12-02' },
    { title: 'Daily Bread (25.11.17 - 25.11.22)', date: '2025-11-20' },
    { title: 'Daily Bread (25.11.10 - 25.11.15)', date: '2025-11-20' },
    { title: 'Daily Bread (25.11.03 - 25.11.08)', date: '2025-11-20' },
    { title: 'Daily Bread (25.10.27 - 25.11.01)', date: '2025-11-20' },
    { title: 'Daily Bread (25.10.20 - 25.10.25)', date: '2025-11-20' },
    { title: 'Daily Bread (25.10.13 - 25.10.18)', date: '2025-11-20' },
];

export default function DailyBreadPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="데일리브레드"
                subtitle="매주 제공되는 데일리브레드(성경 묵상) 컨텐츠 목록입니다."
            />

            <div className="container mx-auto px-4 py-16">
                <FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {entries.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-gold-accent/5 rounded-lg group-hover:bg-gold-accent/20 transition-colors">
                                        <svg className="w-6 h-6 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">
                                        {item.date}
                                    </span>
                                </div>
                                <h2 className="text-lg font-bold text-deep-navy mb-2 line-clamp-2 group-hover:text-gold-accent transition-colors">
                                    {item.title}
                                </h2>
                                <div className="mt-4 flex items-center text-sm font-medium text-gray-400 group-hover:text-deep-navy transition-colors">
                                    묵상하기
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
