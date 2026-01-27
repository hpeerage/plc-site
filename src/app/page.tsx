import HeroSection from "@/components/sections/HeroSection";
import SermonArchive from "@/components/sections/SermonArchive";
import NewComerSection from "@/components/sections/NewComerSection";
import EducationSection from "@/components/sections/EducationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 2. 메인 배너 */}
      <HeroSection />

      {/* 3. 설교 리스트 (White) */}
      <SermonArchive />

      {/* 4. 새가족 안내 (Gray) */}
      <NewComerSection />

      {/* 5. PLI 교육 (Navy) - 시각적 강렬함 */}
      <EducationSection />
    </main>
  );
}
