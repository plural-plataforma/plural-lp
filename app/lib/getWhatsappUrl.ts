import { WHATSAPP_WAITLIST_URL } from "@/app/lib/constants";

/**
 * Busca o link do grupo do WhatsApp da Plural no admin (apps/web/apps/api do
 * monorepo `project`), com fallback para a constante hardcoded caso a API
 * esteja fora do ar ou não esteja configurada — evita que a LP fique sem
 * link de conversão.
 */
export async function getWhatsappUrl(): Promise<string> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();

  if (!apiUrl) {
    return WHATSAPP_WAITLIST_URL;
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/publico/configuracoes/whatsapp`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      return WHATSAPP_WAITLIST_URL;
    }

    const data = (await response.json()) as { pluralWhatsappUrl?: string };
    return data.pluralWhatsappUrl?.trim() || WHATSAPP_WAITLIST_URL;
  } catch {
    return WHATSAPP_WAITLIST_URL;
  }
}
