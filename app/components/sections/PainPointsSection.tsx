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

      </div>
    </section>
  );
}
