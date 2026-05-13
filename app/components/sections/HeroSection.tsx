import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import {
  FileText,
  ClipboardText,
  ChartBar,
  CalendarBlank,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

type BadgeConfig = {
  label: string;
  icon: Icon;
  className: string;
};

const badges: BadgeConfig[] = [
  { label: "PDI",                       icon: FileText,      className: "absolute left-2 top-[26%] md:left-0"    },
  { label: "PAEE",                      icon: CalendarBlank, className: "absolute left-2 top-[46%] md:left-0 md:bottom-[22%] md:top-auto" },
  { label: "Registros de\nAtendimento",  icon: ChartBar,      className: "absolute right-2 top-[32%] md:right-0"  },
  { label: "Relatórios",                icon: ClipboardText, className: "absolute right-2 top-[54%] md:right-0 md:bottom-[22%] md:top-auto" },
];

const benefits = [
  "PAEE pronto em minutos",
  "Relatórios sem sofrimento",
  "Menos tempo no Word",
  "Menos retrabalho",
  "Mais tempo com o aluno",
];

const features = [
  "Cadastro completo",
  "Avaliação Diagnóstica pronta",
  "Banco de Habilidades",
  "PAEE estruturado",
  "Acompanhamento pedagógico contínuo",
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background"
      style={{
        background:
          "linear-gradient(160deg, #ffffff 0%, #f3f0f8 50%, #edf5f8 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-0 pb-14 pt-16 md:flex-row md:items-center md:gap-16 md:px-6 md:pt-24 md:pb-20">

        {/* Bloco da foto — primeiro no DOM = primeiro no mobile */}
        <div className="hero-photo relative flex w-full flex-1 flex-col items-center md:order-2">

          {/* Foto + círculos + badges + fade */}
          <div className="relative w-full md:flex md:items-center md:justify-center">
            {/* Círculos decorativos */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[320px] rounded-full border border-[#259bbc]/25 md:size-[540px] md:border-2" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[260px] rounded-full border border-[#259bbc]/40 md:size-[450px] md:border-2" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[200px] rounded-full border border-[#259bbc]/55 bg-[#259bbc]/5 md:size-[360px] md:border-2" />

            {/* Foto */}
            <div className="relative z-10 mx-10 aspect-3/4 overflow-hidden rounded-2xl md:mx-0 md:aspect-auto md:h-[540px] md:w-[440px] md:rounded-[28px]">
              <Image
                src="/hero-photo.png"
                alt="Professora Plural"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover object-top -scale-x-100 aspect-3/4 md:aspect-auto"
                priority
              />
              {/* Fade na base — só mobile */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-b from-transparent to-[#ebebeb] md:hidden" />
            </div>

            {/* Badges */}
            {badges.map(({ label, icon: BadgeIcon, className }) => (
              <FeatureBadge
                key={label}
                label={label}
                icon={<BadgeIcon size={16} weight="regular" className="shrink-0 text-[#276678]" />}
                className={className}
              />
            ))}
          </div>

        </div>

        {/* ── Coluna de texto ─────────────────────────────────── */}
        <div className="flex w-full flex-1 flex-col items-center gap-6 px-6 pb-2 text-center md:order-1 md:max-w-[480px] md:items-start md:text-left">

          {/* Badge intro */}
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#276678]/20 bg-white px-4 py-1.5 text-xs font-bold text-[#276678] shadow-sm">
            <span className="size-1.5 rounded-full bg-[#FFBE33]" />
            A 1ª plataforma exclusiva para professoras do AEE
          </span>

          {/* Headline */}
          <h1 className="hero-h1 text-4xl font-black leading-[1.05] tracking-tight text-[#276678] md:text-[3.2rem]">
            Sua rotina no AEE
            <br />
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(90deg, #276678 0%, #3a9ab8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              muito mais leve
            </span>
          </h1>

          {/* Tagline */}
          <p className="hero-sub text-base leading-relaxed text-[#276678]/75 md:text-lg">
            Pare de perder horas com burocracia e volte seu tempo para o que
            realmente importa:{" "}
            <strong className="font-bold text-[#276678]">o aluno</strong>.
          </p>

          {/* Lista unificada de benefícios */}
          <ul className="hero-list w-full space-y-2.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="shrink-0 text-[#276678]"
                />
                <span className="text-sm font-semibold text-[#276678] md:text-[15px]">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          {/* Features como pills compactas */}
          <div className="hero-pills flex w-full flex-wrap justify-center gap-2 md:justify-start">
            {features.map((f) => (
              <span
                key={f}
                className="rounded-full bg-[#A786B6]/12 px-3 py-1 text-xs font-semibold text-[#7D5F94]"
              >
                {f}
              </span>
            ))}
            <span className="rounded-full bg-[#276678]/8 px-3 py-1 text-xs font-black text-[#276678]">
              + muito mais
            </span>
          </div>

          {/* CTAs */}
          <div className="hero-cta flex w-full flex-col gap-3 sm:flex-row">
            <a
              href="#inscricao"
              className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-[#276678] px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_6px_24px_rgba(39,102,120,0.35)] transition-all duration-300 hover:bg-[#1b4a57] hover:shadow-[0_8px_32px_rgba(39,102,120,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative z-10">Quero começar agora</span>
            </a>
            <a
              href="#planos"
              className="flex flex-1 items-center justify-center rounded-2xl border-2 border-[#276678]/30 px-6 py-4 text-center text-sm font-bold text-[#276678] transition-all hover:border-[#276678] hover:bg-[#276678]/5 active:scale-[0.98]"
            >
              Ver planos
            </a>
          </div>

          {/* Trust line */}
          <p className="hero-trust text-xs text-[#276678]/50">
            Tudo em um só lugar. Comece grátis, sem cartão de crédito.
          </p>

        </div>

      </div>
    </section>
  );
}

function FeatureBadge({
  label,
  icon,
  className,
}: {
  label: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`z-20 flex items-center gap-2 rounded-xl border border-[#276678]/25 bg-white px-3 py-2 shadow-[0_4px_14px_rgba(39,102,120,0.14)] ${className}`}
    >
      {icon}
      <span className="whitespace-pre-line text-xs font-semibold leading-tight text-[#276678]">
        {label}
      </span>
    </div>
  );
}
