import { HeroSection } from "components/HeroSection";
import { FeaturesSection } from "components/FeaturesSection";
import { PricingSection } from "components/PricingSection";
import { ReviewsSection } from "components/ReviewsSection";

import { Header } from "components/Header";
import Footer from "components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ReviewsSection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
}
