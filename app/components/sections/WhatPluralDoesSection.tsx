import { Check } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

const benefits = [
  "Cadastro completo e centralizado de cada aluno.",
  "Avaliação diagnóstica pronta e estruturada para identificar necessidades e potencialidades.",
  "Banco de habilidades organizado por áreas do desenvolvimento.",
  "PAEE pronto em minutos, com muito mais segurança e agilidade.",
  "Registro contínuo do acompanhamento pedagógico.",
  "Organização das informações para relatórios e pareceres.",
  "Continuidade pedagógica real entre anos, profissionais e atendimentos.",
  "Mais segurança profissional e menos sobrecarga emocional.",
] as const;

export function WhatPluralDoesSection() {
  return (
    <section
      id="o-que-a-plural-faz"
      className="relative overflow-hidden border-t border-[#276678]/8 bg-white py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#A786B6]/12 blur-3xl md:h-88 md:w-88"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#276678]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <AnimateIn className="mb-12 text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-[#A786B6]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#A786B6]">
            Benefícios
          </span>
          <h2 className="text-3xl font-black leading-tight text-[#276678] md:text-4xl">
            O que a Plural faz{" "}
            <span className="text-[#A786B6]">por você</span>
          </h2>
        </AnimateIn>

        <ul className="grid list-none gap-3 sm:grid-cols-2 sm:gap-4" role="list">
          {benefits.map((text, i) => (
            <AnimateIn key={text} delay={i * 65} direction="up">
              <li className="group relative flex h-full gap-4 overflow-hidden rounded-2xl bg-[#f8f7fc] p-5 ring-1 ring-[#276678]/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(39,102,120,0.12)] hover:ring-[#276678]/20 md:p-6">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(167,134,182,0.08) 0%, transparent 45%, rgba(39,102,120,0.06) 100%)",
                  }}
                />
                <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#276678] text-white shadow-[0_4px_14px_rgba(39,102,120,0.35)] ring-2 ring-white/30 md:size-12">
                  <Check size={22} weight="bold" className="text-[#FFBE33]" aria-hidden />
                </span>
                <span className="relative pt-0.5 text-left text-sm font-bold leading-snug text-[#276678] md:text-[15px]">
                  {text}
                </span>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
