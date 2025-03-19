import GlobalInsightWidget from "@/components/GlobalInsightWidget";
import ImpactSection from "@/components/ImpactSection";
import NewsLetterWidget from "@/components/NewsLetterWidget";
import NewsWidget from "@/components/NewsWidget";
import ProgramSection from "@/components/ProgramSection";
import SpotlightMain from "@/components/SpotlightMain";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
      <SpotlightMain />
      <GlobalInsightWidget />
      <ProgramSection />
      <ImpactSection />
      <NewsWidget />
      {/* TakeAction widget */}
      {/* <TakeActionWidget /> */}
      {/* NewsLetter */}
      <NewsLetterWidget />
    </main>
  );
}
