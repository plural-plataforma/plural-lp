import { CHECKOUT_URL_MENSAL, CHECKOUT_URL_ANUAL } from "@/app/lib/constants";

export type CheckoutUrls = {
  mensal: string;
  anual: string;
};

/**
 * Busca os links de venda (checkout Hotmart) mensal e anual da Plural, em 3
 * camadas de fallback — cada uma só entra em jogo se a anterior falhar:
 * 1. API do admin (fonte da verdade, editável pela cliente)
 * 2. Variáveis de ambiente (NEXT_PUBLIC_CHECKOUT_URL_MENSAL/ANUAL)
 * 3. Constantes hardcoded em constants.ts
 *
 * NEXT_PUBLIC_API_URL segue o mesmo padrão do VITE_API_URL do admin, ou seja,
 * já inclui o sufixo "/api" (ex.: https://plural.runasp.net/api).
 */
export async function getCheckoutUrl(): Promise<CheckoutUrls> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
  const envFallback: CheckoutUrls = {
    mensal: process.env.NEXT_PUBLIC_CHECKOUT_URL_MENSAL?.trim() || CHECKOUT_URL_MENSAL,
    anual: process.env.NEXT_PUBLIC_CHECKOUT_URL_ANUAL?.trim() || CHECKOUT_URL_ANUAL,
  };

  if (!apiUrl) {
    return envFallback;
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/publico/configuracoes/checkout`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      return envFallback;
    }

    const data = (await response.json()) as {
      pluralCheckoutUrlMensal?: string;
      pluralCheckoutUrlAnual?: string;
    };

    return {
      mensal: data.pluralCheckoutUrlMensal?.trim() || envFallback.mensal,
      anual: data.pluralCheckoutUrlAnual?.trim() || envFallback.anual,
    };
  } catch {
    return envFallback;
  }
}
