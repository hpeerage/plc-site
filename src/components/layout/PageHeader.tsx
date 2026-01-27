"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    category?: string;
    className?: string;
    backgroundImage?: string;
}

export default function PageHeader({
    title,
    subtitle,
    category = "PL 제자훈련원",
    className,
    backgroundImage,
}: PageHeaderProps) {
    return (
        <section className={cn("relative py-24 md:py-32 bg-deep-navy overflow-hidden", className)}>
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#1a2b4b] to-deep-navy" />

                {/* Abstract Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />

                {/* Optional Custom Background Image */}
                {backgroundImage && (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                )}

                {/* Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-gold-accent/30 bg-gold-accent/5 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
                        <span className="text-gold-accent text-sm font-medium tracking-wide uppercase">
                            {category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />
        </section>
    );
}
