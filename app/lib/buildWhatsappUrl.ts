import { WHATSAPP_CONTACT_NUMBER } from "@/app/lib/constants";

export function buildWhatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
