"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Calendar, ChevronRight } from "lucide-react";

export interface NoticeItem {
    id: number;
    category: string;
    title: string;
    date: string;
    isImportant?: boolean;
}

interface NoticeListProps {
    notices: NoticeItem[];
}

export default function NoticeList({ notices }: NoticeListProps) {
    return (
        <div className="w-full">
            <div className="min-w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <ul className="divide-y divide-gray-100">
                    {notices.map((notice, index) => (
                        <li key={notice.id} className="group hover:bg-gray-50 transition-colors">
                            <FadeIn delay={index * 0.1}>
                                <a href={`#notice-${notice.id}`} className="flex items-center gap-4 p-5 sm:p-6">
                                    {/* Category Badge */}
                                    <div className="flex-shrink-0">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${notice.isImportant
                                                ? "bg-red-50 text-red-600"
                                                : "bg-gray-100 text-gray-600"
                                                }`}
                                        >
                                            {notice.category}
                                        </span>
                                    </div>

                                    {/* Title & Date */}
                                    <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                        <p className={`truncate text-sm font-medium ${notice.isImportant ? "text-gray-900" : "text-gray-700"} group-hover:text-deep-navy group-hover:underline`}>
                                            {notice.title}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-gray-400 sm:text-sm">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>{notice.date}</span>
                                        </div>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="flex-shrink-0 text-gray-300 group-hover:text-deep-navy">
                                        <ChevronRight className="h-5 w-5" />
                                    </div>
                                </a>
                            </FadeIn>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pagination (Visual Only) */}
            <div className="mt-8 flex justify-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-gray-500 hover:bg-gray-50">1</button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md bg-deep-navy text-sm text-white">2</button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-gray-500 hover:bg-gray-50">3</button>
            </div>
        </div>
    );
}
