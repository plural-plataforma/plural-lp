import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
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

      {/* Número de erro */}
      <p
        className="mt-12 font-black leading-none text-[#276678]"
        style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
        aria-hidden
      >
        404
      </p>

      {/* Headline */}
      <h1 className="mt-4 text-2xl font-black text-[#276678] md:text-3xl">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-base text-[#276678]/60">
        A página que você está procurando não existe ou foi movida.
        Volte para o início e continue explorando a Plural.
      </p>

      {/* Divisor */}
      <div className="my-8 flex items-center gap-3">
        <div className="h-px w-16 bg-[#A786B6]/30" />
        <span className="size-1.5 rounded-full bg-[#FFBE33]" />
        <div className="h-px w-16 bg-[#A786B6]/30" />
      </div>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center rounded-2xl bg-[#276678] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_6px_24px_rgba(39,102,120,0.30)] transition-all hover:bg-[#1b4a57] hover:scale-[1.02] active:scale-[0.98]"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
