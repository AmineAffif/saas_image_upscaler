// import { Header } from "@/components/Header";
import { HeroSection } from "components/HeroSection";
import { FeaturesSection } from "components/FeaturesSection";
import { PricingSection } from "components/PricingSection";
import { TestimonialsSection } from "components/TestimonialsSection";
import { Header } from "components/Header";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </div>
  );
}
