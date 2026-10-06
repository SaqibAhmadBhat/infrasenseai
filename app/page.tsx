import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import TheShift from "@/components/home/TheShift";
import ProductPipeline from "@/components/home/ProductPipeline";
import ProductLayers from "@/components/home/ProductLayers";
import Differentiation from "@/components/home/Differentiation";
import ClimateImpact from "@/components/home/ClimateImpact";
import MarketOpportunity from "@/components/home/MarketOpportunity";
import RoadmapPreview from "@/components/home/RoadmapPreview";
import TeamPreview from "@/components/home/TeamPreview";
import BusinessStatus from "@/components/home/BusinessStatus";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessStatus />
      <Problem />
      <TheShift />
      <ProductPipeline />
      <ProductLayers />
      <Differentiation />
      <ClimateImpact />
      <MarketOpportunity />
      <RoadmapPreview />
      <TeamPreview />
      <FinalCTA />
    </>
  );
}
