"use client";

import { HeroSection } from "components/HeroSection";
import { FeaturesSection } from "components/FeaturesSection";
import { PricingSection } from "components/PricingSection";
import { ReviewsSection } from "components/ReviewsSection";
import ComparisonSection from "components/ComparisonSection";
import ExampleSection from "components/ExampleSection";

import { Header } from "components/Header";
import Footer from "components/Footer";
import { FaqSection } from "components/FaqSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ComparisonSection />
        <FeaturesSection />
        <ReviewsSection />
        <PricingSection />
        <ExampleSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
