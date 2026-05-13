import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

export function FooterSection() {
  return (
    <footer className="border-t border-[#276678]/10 bg-white py-10">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn direction="fade" className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Image
              src="/icon.png"
              alt="Plural Plataforma"
              width={36}
              height={36}
              style={{ width: 36, height: "auto" }}
            />
            <p className="text-xs text-[#276678]/50">
              Onde cada aluno importa, cada progresso conta.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#4C4C4C]/70">
            ®2026 Plural Plataforma. Todos os direitos reservados.
          </p>

          {/* Instagram */}
          <a
            href="https://instagram.com/pluralplataforma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#276678]/15 px-4 py-2 text-sm font-semibold text-[#276678] transition-colors hover:bg-[#276678]/5"
          >
            <InstagramLogo size={15} weight="bold" />
            @pluralplataforma
          </a>

        </AnimateIn>
      </div>
    </footer>
  );
}
