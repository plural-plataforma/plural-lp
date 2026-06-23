import { Header } from "@/app/components/layout/Header";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { TickerSection } from "@/app/components/sections/TickerSection";
import { PainPointsSection } from "@/app/components/sections/PainPointsSection";
import { FeaturesSection } from "@/app/components/sections/FeaturesSection";
import { ProofSection } from "@/app/components/sections/ProofSection";
import { WhatPluralDoesSection } from "@/app/components/sections/WhatPluralDoesSection";
import { TeamSection } from "@/app/components/sections/TeamSection";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { PricingSection } from "@/app/components/sections/PricingSection";
import { LaunchOfferSection } from "@/app/components/sections/LaunchOfferSection";
import { ObjectionsSection } from "@/app/components/sections/ObjectionsSection";
import { FAQSection } from "@/app/components/sections/FAQSection";
import { ClosingCTASection } from "@/app/components/sections/ClosingCTASection";
import { SupportSection } from "@/app/components/sections/SupportSection";
import { FooterSection } from "@/app/components/sections/FooterSection";
import { CHECKOUT_URL } from "@/app/lib/constants";

type LandingPageContentProps = {
  ctaHref?: string;
  launchOfferVariant?: "checkout" | "waitlist";
  showClosingCTA?: boolean;
};

export function LandingPageContent({
  ctaHref = CHECKOUT_URL,
  launchOfferVariant = "checkout",
  showClosingCTA = true,
}: LandingPageContentProps) {
  return (
    <>
      <Header ctaHref={ctaHref} />
      <HeroSection ctaHref={ctaHref} />
      <TickerSection />
      <PainPointsSection />
      <FeaturesSection />
      <ProofSection />
      <WhatPluralDoesSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection ctaHref={ctaHref} />
      <LaunchOfferSection variant={launchOfferVariant} ctaHref={ctaHref} />
      <ObjectionsSection />
      <FAQSection />
      {showClosingCTA && <ClosingCTASection ctaHref={ctaHref} />}
      <SupportSection />
      <FooterSection />
    </>
  );
}
