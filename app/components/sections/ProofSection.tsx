import Image from "next/image";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

const dashboard = {
  src: "/sections/dash.png",
  alt: "Dashboard principal da Plural Plataforma",
  width: 2940,
  height: 1604,
} as const;

const desktopScreens = [
  {
    src: "/sections/aluno.png",
    alt: "Cadastro de alunos na Plural Plataforma",
    width: 2936,
    height: 1604,
    label: "Cadastro de Alunos",
    description: "Perfil completo com histórico centralizado",
  },
  {
    src: "/sections/paee.png",
    alt: "PAEE com habilidades na Plural Plataforma",
    width: 2942,
    height: 1602,
    label: "PAEE estruturado",
    description: "Do diagnóstico ao plano em minutos",
  },
  {
    src: "/sections/avaliacao.png",
    alt: "Avaliação diagnóstica na Plural Plataforma",
    width: 2936,
    height: 1598,
    label: "Avaliação Diagnóstica",
    description: "Pronta e estruturada para cada aluno",
  },
] as const;

const mobileScreens = [
  {
    src: "/sections/mobile1.png",
    alt: "Dashboard da Plural Plataforma no celular",
    width: 1290,
    height: 2796,
    label: "Dashboard mobile",
  },
  {
    src: "/sections/mobile2.png",
    alt: "Menu da Plural Plataforma no celular",
    width: 1290,
    height: 2796,
    label: "Navegação mobile",
  },
  {
    src: "/sections/mobileDark.png",
    alt: "Modo escuro da Plural Plataforma no celular",
    width: 1290,
    height: 2796,
    label: "Modo escuro",
  },
] as const;

export function ProofSection() {
  return (
    <section className="bg-[#f8f7fc] py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Título */}
        <AnimateIn className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#276678]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#276678]">
            Plataforma real
          </span>
          <h2 className="mb-3 text-3xl font-black text-[#276678] md:text-4xl">
            Veja a Plural funcionando{" "}
            <span className="text-[#A786B6]">na prática</span>
          </h2>
          <p className="text-base text-[#276678]/60 md:text-lg">
            Uma plataforma real. Feita para professoras reais.
          </p>
        </AnimateIn>

        {/* Dashboard principal */}
        <AnimateIn direction="scale" className="mb-4">
          <div className="overflow-hidden rounded-3xl ring-1 ring-[#276678]/15 shadow-[0_16px_48px_rgba(39,102,120,0.12)]">
            <Image
              src={dashboard.src}
              alt={dashboard.alt}
              width={dashboard.width}
              height={dashboard.height}
              sizes="(max-width: 768px) 100vw, 1000px"
              className="h-auto w-full"
              priority
            />
          </div>
        </AnimateIn>

        {/* Telas desktop */}
        <div className="mb-4 grid gap-4 md:grid-cols-3">
          {desktopScreens.map((screen, i) => (
            <AnimateIn key={screen.src} delay={i * 80} direction="up">
              <ProofCard {...screen} />
            </AnimateIn>
          ))}
        </div>

        {/* Telas mobile */}
        <AnimateIn className="mb-6 text-center">
          <p className="text-sm font-black text-[#276678] md:text-base">
            Interface mobile e desktop
          </p>
          <p className="text-xs text-[#276678]/50 md:text-sm">
            Acesse de qualquer dispositivo, a qualquer hora
          </p>
        </AnimateIn>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {mobileScreens.map((screen, i) => (
            <AnimateIn key={screen.src} delay={i * 80} direction="up">
              <MobileProofCard {...screen} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

function ProofCard({
  src,
  alt,
  width,
  height,
  label,
  description,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#276678]/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="h-auto w-full"
      />
      <div className="px-4 py-3 text-center">
        <p className="text-sm font-black text-[#276678]">{label}</p>
        <p className="text-xs text-[#276678]/50">{description}</p>
      </div>
    </div>
  );
}

function MobileProofCard({
  src,
  alt,
  width,
  height,
  label,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#276678]/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 80vw, 240px"
        className="h-auto w-full"
      />
      <p className="px-3 py-2.5 text-center text-xs font-bold text-[#276678]">
        {label}
      </p>
    </div>
  );
}
