import { WHATSAPP_WAITLIST_URL } from "@/app/lib/constants";

/**
 * Busca o link do grupo do WhatsApp da Plural, em 3 camadas de fallback —
 * cada uma só entra em jogo se a anterior falhar:
 * 1. API do admin (fonte da verdade, editável pela cliente)
 * 2. Variável de ambiente (NEXT_PUBLIC_WHATSAPP_WAITLIST_URL)
 * 3. Constante hardcoded em constants.ts
 *
 * NEXT_PUBLIC_API_URL segue o mesmo padrão do VITE_API_URL do admin, ou seja,
 * já inclui o sufixo "/api" (ex.: https://plural.runasp.net/api).
 */
export async function getWhatsappUrl(): Promise<string> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
  const envFallback = process.env.NEXT_PUBLIC_WHATSAPP_WAITLIST_URL?.trim() || WHATSAPP_WAITLIST_URL;

  if (!apiUrl) {
    return envFallback;
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/publico/configuracoes/whatsapp`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      return envFallback;
    }

    const data = (await response.json()) as { pluralWhatsappUrl?: string };
    return data.pluralWhatsappUrl?.trim() || envFallback;
  } catch {
    return envFallback;
  }
}
