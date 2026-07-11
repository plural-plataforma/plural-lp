import type { Metadata } from "next";
import { LandingPageContent } from "@/app/components/LandingPageContent";
import { getWhatsappUrl } from "@/app/lib/getWhatsappUrl";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Lista de espera — Oferta de lançamento",
  description:
    "Entre no grupo de espera no WhatsApp e garanta uma das 300 vagas com 50% de desconto no plano anual da Plural Plataforma, com bônus exclusivos de lançamento.",
};

export default async function EsperaPage() {
  const whatsappUrl = await getWhatsappUrl();

  return (
    <LandingPageContent
      ctaHref={whatsappUrl}
      launchOfferVariant="waitlist"
      showClosingCTA={false}
    />
  );
}
