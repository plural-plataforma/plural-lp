"use client";

import { useState } from "react";
import { ArrowRight, Bank, Buildings, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";
import { InstitutionalFormModal, type InstitutionType } from "@/app/components/sections/InstitutionalFormModal";

const checklist = [
  "Onboarding guiado para toda a equipe",
  "Acessos por papel: direção, coordenação, AEE e professores",
  "Estrutura dimensionada por volume de alunos",
  "Conformidade institucional com a nova legislação",
];

const steps = [
  {
    title: "Conte sobre a sua instituição",
    description:
      "Informe quantos profissionais e alunos utilizarão a Plural e quais são as principais necessidades da sua rede ou escola.",
  },
  {
    title: "Conheça a Plataforma Plural",
    description:
      "Nossa equipe apresenta as funcionalidades e mostra como a plataforma pode ser utilizada na rotina da instituição.",
  },
  {
    title: "Receba uma proposta personalizada",
    description:
      "Preparamos uma proposta de acordo com a quantidade de acessos e a estrutura necessária para a sua instituição.",
  },
];

export function InstitutionalSection() {
  const [modalType, setModalType] = useState<InstitutionType | null>(null);

  return (
    <section id="institucional" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FFBE33]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#276678]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <AnimateIn className="mb-10 text-center md:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFBE33]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D99C1A]">
            <Buildings size={14} weight="bold" aria-hidden />
            Para instituições
          </span>
          <h2 className="mb-4 text-3xl font-black leading-tight text-[#276678] md:text-[2.5rem]">
            Quer levar a Plural para toda a sua escola ou rede de ensino?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#276678]/75 md:text-lg">
            Temos condições e planos específicos para contratação institucional.
          </p>
        </AnimateIn>

        <AnimateIn direction="scale" delay={80}>
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_60px_rgba(39,102,120,0.14)] ring-1 ring-[#276678]/10">
            <div aria-hidden className="h-1.5 w-full bg-linear-to-r from-[#A786B6] via-[#276678] to-[#FFBE33]" />

            <div className="grid items-start gap-8 bg-[#f8f7fc] p-7 md:grid-cols-2 md:p-10">
              <div>
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#276678] to-[#1c4b58] shadow-[0_6px_18px_rgba(39,102,120,0.3)]">
                  <Buildings size={26} weight="bold" className="text-white" />
                </div>
                <h3 className="mb-2 text-xl font-black text-[#276678] md:text-2xl">
                  Para escolas e órgãos públicos
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-[#276678]/70 md:text-base">
                  A Plataforma Plural também oferece planos institucionais para escolas
                  particulares, redes de ensino e órgãos públicos que desejam apoiar o trabalho
                  dos profissionais do AEE e organizar os processos pedagógicos em um único
                  ambiente.
                </p>
                <p className="mb-5 text-sm leading-relaxed text-[#276678]/70 md:text-base">
                  A contratação é personalizada de acordo com o número de profissionais, alunos e
                  necessidades da instituição, com suporte desde a implantação até a utilização da
                  plataforma pela equipe.
                </p>
                <ul className="space-y-2.5">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-[#28a745]" />
                      <span className="text-sm leading-snug text-[#276678]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-[#276678]/10 md:p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-wide text-[#276678]/55">
                  Como funciona
                </p>
                <ol className="space-y-4">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#276678] to-[#1c4b58] text-xs font-black text-white shadow-sm">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#276678]">{step.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#276678]/65 md:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="grid gap-3 border-t border-[#276678]/10 bg-white p-5 sm:grid-cols-2 md:p-6">
              <button
                type="button"
                onClick={() => setModalType("particular")}
                className="group flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left ring-1 ring-[#276678]/12 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(39,102,120,0.14)] hover:ring-[#276678]/25"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#276678]/10 text-[#276678]">
                    <Buildings size={20} weight="bold" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[#276678]">Sou escola particular</span>
                    <span className="block text-xs text-[#276678]/60">Solicitar contato</span>
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="shrink-0 text-[#276678]/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#276678]"
                  aria-hidden
                />
              </button>

              <button
                type="button"
                onClick={() => setModalType("publico")}
                className="group flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left ring-1 ring-[#A786B6]/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(167,134,182,0.18)] hover:ring-[#A786B6]/35"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#A786B6]/12 text-[#A786B6]">
                    <Bank size={20} weight="bold" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[#276678]">
                      Sou órgão público ou rede de ensino
                    </span>
                    <span className="block text-xs text-[#276678]/60">Solicitar proposta</span>
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="shrink-0 text-[#A786B6]/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#A786B6]"
                  aria-hidden
                />
              </button>
            </div>
          </div>
        </AnimateIn>
      </div>

      <InstitutionalFormModal type={modalType} onClose={() => setModalType(null)} />
    </section>
  );
}
