import Image from "next/image";
import {
  UserCircle,
  Exam,
  BookBookmark,
  ClipboardText,
  ArrowsClockwise,
  NotePencil,
  FileText,
  ShieldCheck,
  X,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

type Feature = {
  icon: Icon;
  title: string;
};

const features: Feature[] = [
  { icon: UserCircle,       title: "Cadastro completo e centralizado de cada aluno."                                           },
  { icon: Exam,             title: "Avaliação Diagnóstica pronta e estruturada para identificar necessidades e potencialidades." },
  { icon: BookBookmark,     title: "Banco de Habilidades organizado por áreas do desenvolvimento."                             },
  { icon: ClipboardText,    title: "PAEE pronto em minutos, com muito mais segurança e agilidade."                             },
  { icon: NotePencil,       title: "Registro contínuo do acompanhamento pedagógico."                                           },
  { icon: FileText,         title: "Organização das informações para relatórios e pareceres."                                  },
  { icon: ArrowsClockwise,  title: "Continuidade pedagógica real entre anos, profissionais e atendimentos."                    },
  { icon: ShieldCheck,      title: "Mais segurança profissional e menos sobrecarga emocional."                                 },
];

const withoutPlural = [
  "Relatórios acumulados e cansativos.",
  "PAEE feito manualmente do zero.",
  "Procurando atividades soltas na internet sem direcionamento.",
  "Informações espalhadas em papéis e arquivos.",
  "Histórico perdido de um ano para o outro.",
  "Muito tempo no Word e pouco tempo com o aluno.",
  "Sensação constante de sobrecarga.",
];

const withPlural = [
  "Cadastro completo e centralizado de cada aluno.",
  "Avaliação diagnóstica pronta e estruturada.",
  "PAEE organizado com muito mais rapidez.",
  "Banco de habilidades por áreas do desenvolvimento.",
  "Continuidade pedagógica real.",
  "Mais segurança profissional e menos retrabalho.",
  "Mais clareza, leveza e confiança na rotina do AEE.",
];

function FeatureCard({ icon: CardIcon, title }: Feature) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl bg-white/8 p-6 ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-1 hover:bg-white/12 hover:ring-[#FFBE33]/30">
      <div className="flex size-11 items-center justify-center rounded-xl bg-[#FFBE33]/15">
        <CardIcon size={22} weight="bold" className="text-[#FFBE33]" />
      </div>
      <p className="text-[15px] font-bold leading-snug text-white">
        {title}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-[#276678] py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Título */}
        <AnimateIn className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FFBE33]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFBE33]">
            Funcionalidades
          </span>
          <h2 className="text-3xl font-black text-white md:text-5xl">
            O que a Plural{" "}
            <span className="text-[#FFBE33]">faz por você</span>
          </h2>
        </AnimateIn>

        {/* ── Sem Plural x Com Plural ── */}
        <AnimateIn direction="scale" className="mb-16 overflow-hidden rounded-3xl ring-1 ring-white/10">
          <div className="grid md:grid-cols-2">
            {/* Sem Plural */}
            <div className="border-b border-white/10 bg-white/5 p-8 md:border-b-0 md:border-r">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-red-500/20">
                  <X size={14} weight="bold" className="text-red-400" />
                </span>
                <p className="text-lg font-black text-white/50">Sem Plural</p>
              </div>
              <ul className="space-y-3">
                {withoutPlural.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-red-400/50" />
                    <span className="text-sm leading-relaxed text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Com Plural */}
            <div className="bg-[#FFBE33]/8 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#FFBE33]/25">
                  <Check size={14} weight="bold" className="text-[#FFBE33]" />
                </span>
                <p className="text-lg font-black text-[#FFBE33]">Com Plural</p>
              </div>
              <ul className="space-y-3">
                {withPlural.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#FFBE33]" />
                    <span className="text-sm leading-relaxed text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>

        {/* ── A Plural não é só uma plataforma ── */}
        <AnimateIn direction="up" className="mb-16 rounded-3xl border border-[#FFBE33]/20 bg-[#FFBE33]/8 p-8 md:p-12">
          <h3 className="mb-4 text-2xl font-black text-white md:text-3xl">
            A Plural não é só uma plataforma
          </h3>
          <p className="mb-4 text-lg font-bold text-[#FFBE33]">
            É a ferramenta que faltava para o AEE funcionar com segurança.
          </p>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Ela foi criada para simplificar sua rotina, organizar sua documentação
            e garantir continuidade pedagógica real.
          </p>
          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {[
              "Sem improviso.",
              "Sem retrabalho.",
              "Sem começar tudo do zero.",
              "Sem perder informações importantes de um ano para o outro.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                <span className="size-2 shrink-0 rounded-full bg-[#FFBE33]" />
                <span className="text-sm font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-base leading-relaxed text-white/80">
            A Plural foi pensada para devolver{" "}
            <span className="font-bold text-white">tempo, clareza e segurança</span>{" "}
            para a professora.{" "}
            <span className="font-bold text-[#FFBE33]">
              Porque inclusão só acontece porque você faz acontecer.
            </span>
          </p>
        </AnimateIn>

        {/* ── Grid de features ── */}
        <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 70} direction="up" className="flex">
              <FeatureCard {...f} />
            </AnimateIn>
          ))}
        </div>

        {/* Scroll + texto */}
        <div className="flex flex-col items-center gap-3 px-4 py-4 text-center">
          <Image
            src="/scroll.png"
            alt=""
            width={20}
            height={64}
            className="opacity-40"
            style={{ width: 20, height: "auto" }}
          />
          <p className="text-base font-semibold text-white/60">
            Tudo em um ambiente simples, intuitivo e pensado para o chão da escola.
          </p>
        </div>

        {/* Por que isso importa */}
        <AnimateIn direction="up" className="mt-20 grid gap-8 rounded-3xl bg-white/5 p-8 md:grid-cols-2 md:p-12 ring-1 ring-white/10">
          <div className="space-y-4">
            <p className="text-xl font-black leading-snug text-white md:text-2xl">
              Porque inclusão só acontece porque{" "}
              <span className="text-[#FFBE33]">você faz acontecer</span>.
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Você adapta conteúdos, garante que cada progresso seja registrado,
              acolhe famílias, constrói pontes.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-black leading-snug text-white md:text-2xl">
              Mas você não deveria carregar esse peso sozinha.
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              A Plural nasceu para ser{" "}
              <strong className="text-white">sua aliada</strong>: dar clareza,
              leveza e devolver tempo para o que realmente importa:{" "}
              <strong className="text-white">o aluno</strong>.
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
