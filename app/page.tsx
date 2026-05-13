import { Header } from "@/app/components/layout/Header";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { TickerSection } from "@/app/components/sections/TickerSection";
import { PainPointsSection } from "@/app/components/sections/PainPointsSection";
import { FeaturesSection } from "@/app/components/sections/FeaturesSection";
import { ProofSection } from "@/app/components/sections/ProofSection";
import { TeamSection } from "@/app/components/sections/TeamSection";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { PricingSection } from "@/app/components/sections/PricingSection";
import { LaunchOfferSection } from "@/app/components/sections/LaunchOfferSection";
import { BonusesSection } from "@/app/components/sections/BonusesSection";
import { ObjectionsSection } from "@/app/components/sections/ObjectionsSection";
import { FAQSection } from "@/app/components/sections/FAQSection";
import { ClosingCTASection } from "@/app/components/sections/ClosingCTASection";
import { SupportSection } from "@/app/components/sections/SupportSection";
import { FooterSection } from "@/app/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TickerSection />
      <PainPointsSection />
      <FeaturesSection />
      <ProofSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <LaunchOfferSection />
      <BonusesSection />
      <ObjectionsSection />
      <FAQSection />
      <ClosingCTASection />
      <SupportSection />
      <FooterSection />
    </>
  );
}
