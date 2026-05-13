"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Plural] Erro de aplicação:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      {/* Logo */}
      <Link href="/" aria-label="Voltar para a página inicial">
        <Image
          src="/plural-logo-plus.png"
          alt="Plural Plataforma"
          width={160}
          height={53}
          style={{ width: 160, height: "auto" }}
          priority
        />
      </Link>

      {/* Ícone de erro */}
      <div className="mt-12 flex size-20 items-center justify-center rounded-full bg-[#276678]/8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-10 text-[#276678]"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="mt-6 text-2xl font-black text-[#276678] md:text-3xl">
        Algo deu errado
      </h1>
      <p className="mt-3 max-w-md text-base text-[#276678]/60">
        Encontramos um erro inesperado. Você pode tentar novamente ou voltar
        para o início.
      </p>

      {/* Divisor */}
      <div className="my-8 flex items-center gap-3">
        <div className="h-px w-16 bg-[#A786B6]/30" />
        <span className="size-1.5 rounded-full bg-[#FFBE33]" />
        <div className="h-px w-16 bg-[#A786B6]/30" />
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-2xl bg-[#276678] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_6px_24px_rgba(39,102,120,0.30)] transition-all hover:bg-[#1b4a57] hover:scale-[1.02] active:scale-[0.98]"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-[#276678]/30 px-8 py-4 text-sm font-bold text-[#276678] transition-all hover:border-[#276678] hover:bg-[#276678]/5 active:scale-[0.98]"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
