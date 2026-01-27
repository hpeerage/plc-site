"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Copy, CreditCard, Heart } from "lucide-react";
import { useState } from "react";

export default function OfferingPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("361-910024-53405");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] w-full overflow-hidden bg-deep-navy">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90 z-20" />

                <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">온라인 헌금</h1>
                        <p className="text-lg md:text-xl font-light text-gray-200">
                            마음을 담아 드리는 헌금은 하나님의 나라를 세워가는 귀한 통로입니다.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-0">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Bank Account */}
                        <FadeIn delay={0.2}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                                    <CreditCard className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-deep-navy mb-2">계좌 이체</h2>
                                <p className="text-gray-500 mb-8">국내 은행 계좌로 헌금하실 수 있습니다.</p>

                                <div className="w-full bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                                    <p className="text-sm text-gray-500 mb-1">하나은행</p>
                                    <p className="text-2xl font-bold text-deep-navy mb-2">361-910024-53405</p>
                                    <p className="text-sm text-gray-600">예금주 : 피엘교회</p>
                                </div>

                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-6 py-3 bg-deep-navy text-white rounded-lg hover:bg-opacity-90 transition-all active:scale-95"
                                >
                                    {copied ? (
                                        <>
                                            <span>복사 완료!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span>계좌번호 복사</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </FadeIn>

                        {/* PayPal */}
                        <FadeIn delay={0.4}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-deep-navy mb-2">해외 송금 (PayPal)</h2>
                                <p className="text-gray-500 mb-8">해외에 계신 분들은 PayPal을 이용하실 수 있습니다.</p>

                                <div className="w-full bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6 flex items-center justify-center h-[124px]">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 opacity-80" />
                                </div>

                                <a
                                    href="https://paypal.me/plijoaa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-[#003087] text-white rounded-lg hover:bg-opacity-90 transition-all active:scale-95 w-full justify-center"
                                >
                                    <span>PayPal로 헌금하기</span>
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.6}>
                        <div className="mt-12 p-8 bg-gray-50 rounded-2xl text-center">
                            <h3 className="font-bold text-deep-navy mb-4">기부금 영수증 발급 안내</h3>
                            <p className="text-gray-600 leading-relaxed">
                                기부금 영수증 발급을 원하시는 성도님께서는<br />
                                교회 사무실(051-746-0691)로 문의해 주시기 바랍니다.<br />
                                <span className="text-sm text-gray-500 mt-2 block">* 연말정산 시 세액공제 혜택을 받으실 수 있습니다.</span>
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
