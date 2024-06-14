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
// import { AuroraBackground } from "@/components/ui/aurora-background";
// import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      {/* <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        > */}
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
      {/* </motion.div>
      </AuroraBackground> */}
    </div>
  );
}
