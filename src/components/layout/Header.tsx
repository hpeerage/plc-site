"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            name: "교회소개",
            href: "/about",
            subItems: [
                { name: "교회소개", href: "/about" },
                { name: "섬기는 이들", href: "/about/serving" },
                { name: "예배안내", href: "/about/worship" },
                { name: "오시는 길", href: "/about/location" },
                { name: "온라인 헌금", href: "/about/offering" },
            ]
        },
        { name: "예배영상", href: "/sermons" },
        {
            name: "PL제자훈련원",
            href: "/discipleship",
            subItems: [
                { name: "12주 교리교육", href: "/discipleship/doctrine" },
                { name: "성경강해훈련", href: "/discipleship/sermon" },
                { name: "데일리브레드", href: "/discipleship/daily-bread" },
            ],
        },
        { name: "성경적세계관PLI", href: "/pli" },
        { name: "교회학교", href: "/education" },
        { name: "PL가족", href: "/community" },
        { name: "교회소식", href: "/news" },
    ];

    // Determine header styles based on page and scroll state
    const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
    const headerBgClass = isTransparent ? "bg-transparent py-6" : "bg-white/90 py-4 backdrop-blur-md shadow-sm";
    const textColorClass = isTransparent ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-deep-navy";
    const logoClass = isTransparent ? "brightness-0 invert" : ""; // Original color (assumed dark) for white bg
    const mobileButtonClass = isTransparent ? "text-white" : "text-deep-navy";

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    headerBgClass
                )}
            >
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo */}
                    <Link href="/" className="relative h-10 w-40">
                        <Image
                            src="/logo.png"
                            alt="PL Church Logo"
                            fill
                            className={cn("object-contain transition-all duration-300", logoClass)}
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={cn("text-sm font-medium transition-colors flex items-center gap-1", textColorClass)}
                                >
                                    {link.name}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.subItems && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="bg-white rounded-lg shadow-lg py-2 min-w-[160px] overflow-hidden">
                                            {link.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-deep-navy transition-colors whitespace-nowrap"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="rounded-full bg-gold-accent px-5 py-2 text-sm font-bold text-deep-navy transition-transform hover:scale-105">
                            온라인 등록
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn("md:hidden", mobileButtonClass)}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-deep-navy pt-20 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-6 w-full px-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col items-center gap-4 w-full">
                                    <Link
                                        href={link.href}
                                        className="text-xl font-medium text-white"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.subItems && (
                                        <div className="flex flex-col items-center gap-3 w-full bg-white/5 rounded-xl py-4">
                                            {link.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="text-base text-gray-300 hover:text-white transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button className="mt-4 rounded-full bg-gold-accent px-8 py-3 text-lg font-bold text-deep-navy">
                                온라인 등록
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
