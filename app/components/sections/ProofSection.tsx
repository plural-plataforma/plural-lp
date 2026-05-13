import Image from "next/image";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

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

        {/* Slot principal — full width */}
        <AnimateIn direction="scale" className="mb-4">
          <div className="overflow-hidden rounded-3xl bg-[#276678] ring-1 ring-[#276678]/20">
            <div className="relative aspect-video w-full">
              <Image
                src="/plural-plataforma.svg"
                alt="Dashboard Plural Plataforma"
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                className="object-contain p-16 opacity-20"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                <span className="rounded-full bg-[#FFBE33]/25 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFBE33]">
                  Em breve
                </span>
                <p className="text-2xl font-black text-white md:text-3xl">
                  Print do Dashboard principal
                </p>
                <p className="text-sm text-white/50">
                  Visão geral dos alunos, atendimentos e planejamentos
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Grade de slots menores */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Cadastro de Alunos",         description: "Perfil completo com histórico centralizado",       isVideo: false },
            { label: "PAEE sendo construído",       description: "Do diagnóstico ao plano em minutos",               isVideo: true  },
            { label: "Avaliação Diagnóstica",       description: "Pronta e estruturada para cada aluno",             isVideo: true  },
            { label: "Interface mobile e desktop",  description: "Acesse de qualquer dispositivo, a qualquer hora", isVideo: false },
          ].map(({ label, description, isVideo }, i) => (
            <AnimateIn key={label} delay={i * 80} direction="up">
              <ProofSlot label={label} description={description} isVideo={isVideo} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

function ProofSlot({
  label,
  description,
  isVideo = false,
}: {
  label: string;
  description: string;
  isVideo?: boolean;
}) {
  return (
    <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 text-center ring-1 ring-[#276678]/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-md h-full">
      {isVideo ? (
        <div className="flex size-12 items-center justify-center rounded-full bg-[#A786B6]/15">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#A786B6]" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      ) : (
        <div className="flex size-12 items-center justify-center rounded-full bg-[#276678]/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5 text-[#276678]" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
      )}
      <p className="text-sm font-black text-[#276678]">{label}</p>
      <p className="text-xs text-[#276678]/50">{description}</p>
    </div>
  );
}
