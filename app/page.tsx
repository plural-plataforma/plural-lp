import { LandingPageContent } from "@/app/components/LandingPageContent";
import { getCheckoutUrl } from "@/app/lib/getCheckoutUrl";

export default async function Home() {
  const checkoutUrls = await getCheckoutUrl();
  return (
    <LandingPageContent
      ctaHref="#planos"
      ctaHrefMensal={checkoutUrls.mensal}
      ctaHrefAnual={checkoutUrls.anual}
    />
  );
}
