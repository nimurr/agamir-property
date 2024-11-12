import BlockFeatures from "../../Components/HomePage/BlockFeatures";
import HeroSection from "../../Components/HomePage/HeroSection";
import LandPlots from "../../Components/HomePage/LandPlots";
import WorkingProcess from "../../Components/HomePage/WorkingProcess";

export default function HomePage() {
  return (
    <div className="">
      
      <HeroSection></HeroSection>
      <WorkingProcess></WorkingProcess>
      <LandPlots></LandPlots>
      <BlockFeatures></BlockFeatures>
    </div>
  );
}
