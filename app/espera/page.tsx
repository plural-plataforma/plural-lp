import type { Metadata } from "next";
import { LandingPageContent } from "@/app/components/LandingPageContent";
import { WHATSAPP_WAITLIST_URL } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Lista de espera — Oferta de lançamento",
  description:
    "Entre no grupo de espera no WhatsApp e garanta uma das 300 vagas com 50% de desconto no plano anual da Plural Plataforma, com bônus exclusivos de lançamento.",
};

export default function EsperaPage() {
  return (
    <LandingPageContent
      ctaHref={WHATSAPP_WAITLIST_URL}
      launchOfferVariant="waitlist"
      showClosingCTA={false}
    />
  );
}
