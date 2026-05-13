import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import {
  ChartLineUp,
  ClipboardText,
  FolderOpen,
  Trash,
  ArrowCounterClockwise,
  MagnifyingGlass,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

type PainPoint = {
  label: string;
  icon: Icon;
};

const painPoints: PainPoint[] = [
  { label: "Relatórios acumulados.",                                                              icon: ChartLineUp         },
  { label: "PAEE feito no improviso.",                                                            icon: ClipboardText       },
  { label: "Informações espalhadas.",                                                             icon: FolderOpen          },
  { label: "Documentos perdidos.",                                                               icon: Trash               },
  { label: "Planejamentos refeitos várias vezes.",                                               icon: ArrowCounterClockwise },
  { label: "Procurando atividades soltas na internet sem saber exatamente o que aplicar.",       icon: MagnifyingGlass     },
  { label: "A sensação constante de que a burocracia consome o tempo que deveria ser do aluno.", icon: Clock               },
];

export function PainPointsSection() {
  return (
    <section className="overflow-hidden bg-[#f8f7fc] py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Headline */}
        <AnimateIn className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#A786B6]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#A786B6]">
            Reconhece isso?
          </span>
          <h2 className="text-3xl font-black leading-[1.1] text-[#A786B6] md:text-[3.2rem]">
            Você sente que passa mais tempo
            <br className="hidden md:block" />
            <span className="text-[#276678]"> organizando papéis</span> do que
            <br className="hidden md:block" />
            acompanhando seus alunos?
          </h2>
        </AnimateIn>

        <AnimateIn delay={100}>
          <p className="mb-8 text-center text-lg font-bold text-[#276678]/80">
            Você conhece bem essa rotina:
          </p>
        </AnimateIn>

        {/* Pain cards — linha de 4 */}
        <div className="mb-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {painPoints.slice(0, 4).map(({ label, icon: CardIcon }, i) => (
            <AnimateIn key={label} delay={i * 80} direction="up">
              <div className="group flex flex-col gap-3 rounded-2xl bg-[#276678] p-5 transition-transform duration-200 hover:-translate-y-1 h-full">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <CardIcon size={20} weight="bold" className="text-[#FFBE33]" />
                </div>
                <p className="text-sm font-bold leading-snug text-white md:text-[15px]">
                  {label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Pain cards — linha de 3 */}
        <div className="mb-16 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {painPoints.slice(4).map(({ label, icon: CardIcon }, i) => (
            <AnimateIn key={label} delay={i * 80} direction="up">
              <div className="group flex flex-col gap-3 rounded-2xl bg-[#276678] p-5 transition-transform duration-200 hover:-translate-y-1 h-full">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <CardIcon size={20} weight="bold" className="text-[#FFBE33]" />
                </div>
                <p className="text-sm font-bold leading-snug text-white md:text-[15px]">
                  {label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Fechamento */}
        <AnimateIn className="mb-16 text-center" direction="fade">
          <p className="text-lg font-semibold leading-relaxed text-[#276678]">
            Se você é professora do AEE, você conhece essa realidade.
            <br className="hidden md:block" />
            E foi exatamente por viver isso todos os dias que nasceu a{" "}
            <strong className="font-black text-[#A786B6]">Plural</strong>.
          </p>
        </AnimateIn>

        {/* Banner Morgana */}
        <AnimateIn direction="scale">
          <div className="mb-14 overflow-hidden rounded-[32px] bg-[#ebebeb]">
            <div className="flex flex-col items-center px-10 py-10">
              <div className="flex w-full max-w-[768px] flex-col mx-auto">
                <span className="text-left text-3xl font-black leading-[1.05] text-[#A786B6] md:text-[3.2rem]">
                  A professora
                </span>
                <div className="relative h-[120px] w-full">
                  <Image
                    src="/morgana-brand.png"
                    alt="Morgana da Cruz"
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-contain object-center"
                  />
                </div>
                <span className="text-right text-2xl font-black text-[#276678] md:text-3xl">
                  também já viveu isso.
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Cards revelação */}
        <div className="grid gap-5 md:grid-cols-2">
          <AnimateIn direction="left">
            <div className="flex min-h-[300px] flex-col justify-between rounded-3xl bg-linear-to-br from-[#A786B6] to-[#7D5F94] p-8 md:p-10">
              <p className="text-xl font-bold leading-snug text-white md:text-2xl">
                E por sentir na pele os mesmos desafios que você, nasceu a
              </p>
              <Image
                src="/plural-plataforma.svg"
                alt="Plural Plataforma"
                width={180}
                height={60}
                className="mt-8 w-full"
              />
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <div className="flex min-h-[300px] flex-col justify-between rounded-3xl bg-[#FFBE33] p-8 md:p-10">
              <p className="leading-none">
                <span
                  className="align-bottom text-[78px] font-black text-white"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  o{" "}
                </span>
                <span
                  className="text-[80px] font-black leading-none text-[#276678] md:text-[110px]"
                  style={{
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    letterSpacing: "-5px",
                  }}
                >
                  1º app
                </span>
              </p>
              <p className="text-[26px] font-black leading-tight md:text-[28px]">
                <span className="text-[#276678]">exclusivo para professoras do AEE, </span>
                <span className="font-bold text-white">
                  feito para simplificar sua rotina e dar visibilidade ao seu trabalho.
                </span>
              </p>
            </div>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
