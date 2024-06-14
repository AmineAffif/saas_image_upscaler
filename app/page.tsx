"use client";

import ComparisonSection from "components/ComparisonSection";
import ExampleSection from "components/ExampleSection";
import { FeaturesSection } from "components/FeaturesSection";
import { HeroSection } from "components/HeroSection";
import { PricingSection } from "components/PricingSection";
import { ReviewsSection } from "components/ReviewsSection";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { FaqSection } from "components/FaqSection";
import Footer from "components/Footer";
import { Header } from "components/Header";
import { motion } from "framer-motion";
import UserProofSection from "components/UserProofSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col min-h-[100dvh]"
        >
          <main className="flex-1">
            <HeroSection />
            <ComparisonSection />
            <FeaturesSection />
            <ReviewsSection />
            <UserProofSection />
            <PricingSection />
            <ExampleSection />
            <FaqSection />
            <Footer />
          </main>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
