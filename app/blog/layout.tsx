import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { FooterSection } from "@/app/components/sections/FooterSection";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-[#276678]/10 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Plural Plataforma — início">
            <Image
              src="/plural-logo-plus.png"
              alt="Plural Plataforma"
              width={132}
              height={44}
              className="h-9 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#276678] ring-1 ring-[#276678]/20 transition-colors hover:bg-[#276678]/5"
          >
            <ArrowLeft size={16} weight="bold" aria-hidden />
            Voltar para o site
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
}
