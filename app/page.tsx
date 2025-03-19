import GlobalInsightWidget from "@/components/GlobalInsightWidget";
import ImpactSection from "@/components/ImpactSection";
import NewsLetterWidget from "@/components/NewsLetterWidget";
import NewsWidget from "@/components/NewsWidget";
import SpotlightMain from "@/components/SpotlightMain";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
      {/* Spotlight widget */}
      <SpotlightMain />
      {/* General Insight widget */}
      <GlobalInsightWidget />
      <ImpactSection />
      {/* Newsroom widget */}
      <NewsWidget />
      {/* TakeAction widget */}
      {/* <TakeActionWidget /> */}
      {/* NewsLetter */}
      <NewsLetterWidget />
    </main>
  );
}
