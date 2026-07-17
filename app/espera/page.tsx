import type { Metadata } from "next";
import { LandingPageContent } from "@/app/components/LandingPageContent";
import { getWhatsappUrl } from "@/app/lib/getWhatsappUrl";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Lista de espera — Plural Plataforma",
  description:
    "Entre no grupo de espera no WhatsApp e garanta acesso ao Plano Anual da Plural Plataforma assim que as inscrições abrirem.",
};

export default async function EsperaPage() {
  const whatsappUrl = await getWhatsappUrl();

  return (
    <LandingPageContent
      ctaHref="#inscricao"
      ctaHrefFinal={whatsappUrl}
      secondaryCtaHref="#inscricao"
      showPricing={false}
      showLaunchOffer
      showClosingCTA={false}
    />
  );
}
