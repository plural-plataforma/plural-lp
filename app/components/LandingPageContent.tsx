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
type LandingPageContentProps = {
  ctaHref: string;
  ctaHrefFinal?: string;
  ctaHrefMensal?: string;
  ctaHrefAnual?: string;
  secondaryCtaHref?: string;
  showPricing?: boolean;
  showLaunchOffer?: boolean;
  showClosingCTA?: boolean;
};

export function LandingPageContent({
  ctaHref,
  ctaHrefFinal = ctaHref,
  ctaHrefMensal = "",
  ctaHrefAnual = "",
  secondaryCtaHref = "#planos",
  showPricing = true,
  showLaunchOffer = false,
  showClosingCTA = true,
}: LandingPageContentProps) {
  return (
    <>
      <Header ctaHref={ctaHref} />
      <HeroSection ctaHref={ctaHref} secondaryCtaHref={secondaryCtaHref} />
      <TickerSection />
      <PainPointsSection />
      <FeaturesSection />
      <ProofSection />
      <WhatPluralDoesSection />
      <TeamSection />
      <TestimonialsSection />
      {showPricing && (
        <PricingSection ctaHrefMensal={ctaHrefMensal} ctaHrefAnual={ctaHrefAnual} />
      )}
      {showLaunchOffer && <LaunchOfferSection ctaHref={ctaHrefFinal} />}
      <ObjectionsSection />
      <FAQSection />
      {showClosingCTA && <ClosingCTASection ctaHref={ctaHrefFinal} />}
      <SupportSection />
      <FooterSection />
    </>
  );
}
