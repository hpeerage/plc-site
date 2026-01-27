import { Youtube, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050e1b] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* 1. 교회 정보 */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white block mb-6">
                            PL<span className="text-gold-accent">CHURCH</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                            PL교회는 하나님의 말씀을 삶으로 실천하는 리더를 세우는 교회입니다.
                            우리는 성경적 세계관을 통해 세상의 빛과 소금이 되고자 합니다.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-deep-navy transition-all">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-deep-navy transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-accent hover:text-deep-navy transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* 2. 빠른 링크 */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">바로가기</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/about" className="hover:text-gold-accent transition-colors">교회소개</Link></li>
                            <li><Link href="/sermons" className="hover:text-gold-accent transition-colors">예배영상</Link></li>
                            <li><Link href="/discipleship" className="hover:text-gold-accent transition-colors">PL제자훈련원</Link></li>
                            <li><Link href="/pli" className="hover:text-gold-accent transition-colors">성경적세계관PLI</Link></li>
                            <li><Link href="/education" className="hover:text-gold-accent transition-colors">교육부서</Link></li>
                            <li><Link href="/community" className="hover:text-gold-accent transition-colors">PL가족</Link></li>
                            <li><Link href="/news" className="hover:text-gold-accent transition-colors">교회소식</Link></li>
                        </ul>
                    </div>

                    {/* 3. 연락처 정보 */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <span className="block text-gray-500 text-xs mb-1">주소</span>
                                서울 동작구 노들로2길 7 노량진드림스퀘어
                            </li>
                            <li>
                                <span className="block text-gray-500 text-xs mb-1">이메일</span>
                                plchurch0505@gmail.com
                            </li>
                            <li>
                                <span className="block text-gray-500 text-xs mb-1">계좌안내</span>
                                하나은행 361-910024-53405 (예금주: 피엘교회)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 하단 카피라이트 */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>© 2025 Practical Leadership Church. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">개인정보처리방침</a>
                        <a href="#" className="hover:text-gray-400">이용약관</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
