"use client";

import { buildWhatsappUrl } from "@/app/lib/buildWhatsappUrl";

const DEFAULT_MESSAGE = "Olá! Vim pelo site da Plural e gostaria de saber mais.";

export function WhatsappFloatingButton() {
  return (
    <a
      href={buildWhatsappUrl(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-90 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_10px_36px_rgba(37,211,102,0.55)] active:scale-95 md:size-14"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping [animation-duration:2.5s]"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative size-6 md:size-7"
        aria-hidden
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.44-1.43c1.37.73 2.92 1.15 4.55 1.15 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 14.04c-.23.65-1.33 1.24-1.82 1.31-.47.07-1.06.1-1.71-.11-.39-.13-.9-.3-1.55-.58-2.72-1.17-4.5-3.92-4.64-4.1-.13-.18-1.09-1.45-1.09-2.76 0-1.31.69-1.96.93-2.22.24-.26.52-.33.69-.33.17 0 .35.01.5.01.16 0 .38-.06.59.45.22.52.74 1.8.8 1.93.07.13.12.27.02.43-.09.16-.14.26-.27.4-.13.14-.28.31-.4.41-.13.1-.27.22-.12.43.15.21.68.97 1.46 1.57.99.8 1.83 1.05 2.09 1.17.26.12.41.1.56-.06.15-.16.65-.76.83-1.02.17-.26.35-.21.58-.13.23.08 1.47.69 1.72.82.25.12.42.18.48.28.07.1.07.57-.16 1.12z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#183d47] px-3 py-1.5 text-sm font-bold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Fale conosco
      </span>
    </a>
  );
}
