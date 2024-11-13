import BlockFeatures from "../../Components/HomePage/BlockFeatures";
import FaqSection from "../../Components/HomePage/FaqSection";
import HeroSection from "../../Components/HomePage/HeroSection";
import LandPlots from "../../Components/HomePage/LandPlots";
import MapArea from "../../Components/HomePage/MapArea";
import OurCustomerReview from "../../Components/HomePage/OurCustomerReview";
import WorkingProcess from "../../Components/HomePage/WorkingProcess";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <WorkingProcess></WorkingProcess>
      <LandPlots></LandPlots>
      <BlockFeatures></BlockFeatures>
      <FaqSection></FaqSection>
      <OurCustomerReview></OurCustomerReview>
      <MapArea></MapArea>
    </div>
  );
}
