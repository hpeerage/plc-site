import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "PL Church - 피엘교회",
  description: "Mobile First, Media Centric Church Website",
  keywords: ["PL교회", "피엘교회", "노량진 교회", "이정훈 목사", "데일리 브래드", "온라인 예배"],
  openGraph: {
    title: "PL Church - 피엘교회",
    description: "Mobile First, Media Centric Church Website",
    type: "website",
    locale: "ko_KR",
    // url: "https://plch.kr", // 추후 실제 도메인으로 변경
    // images: [{ url: "/og-image.jpg" }], // 추후 OG 이미지 추가
  },
};

import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
