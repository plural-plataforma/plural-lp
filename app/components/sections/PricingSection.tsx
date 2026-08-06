import { Check } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

type Plan = {
  id: "mensal" | "anual";
  label: string;
  price: string;
  period: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
  badge?: string;
  pricePrefix?: string;
  originalPrice?: string;
  installment?: string;
  savings?: string;
  ctaLabel?: string;
  recommendation?: string;
  perks: string[];
};

const plans: Plan[] = [
  /* Temporário: plano com acesso gratuito / exploratório
  {
    label: "Assinatura Gratuita",
    price: "Grátis",
    period: "",
    subtitle: "Para conhecer a plataforma e começar a explorar",
    perks: ["Acesso limitado à plataforma", "Ideal para explorar os recursos"],
  },
  */
  {
    id: "mensal",
    label: "Assinatura Mensal",
    price: "R$ 49,90",
    period: "Mensal",
    highlight: true,
    pricePrefix: "Apenas",
    title: "Comece hoje mesmo a transformar sua rotina no AEE.",
    subtitle:
      "Tenha acesso completo à Plataforma Plural com liberdade para cancelar quando desejar.",
    ctaLabel: "Quero assinar mensal",
    recommendation: "Sem fidelidade. Cancele quando desejar.",
    perks: [
      "Cadastro ilimitado de alunos",
      "Histórico pedagógico completo",
      "Acompanhamento individualizado dos alunos",
      "Avaliação Diagnóstica com atividades prontas",
      "Estudo de Caso guiado com auxílio de IA",
      "PAEE personalizado com habilidades da nossa base",
      "Registro dos atendimentos",
      "Atualizações contínuas da plataforma",
      "Suporte humano",
    ],
  },
  {
    id: "anual",
    label: "Assinatura Anual",
    price: "R$ 588,00",
    period: "",
    title: "Acesso completo à Plataforma Plural por 12 meses",
    subtitle:
      "Organize toda a sua rotina no AEE em um único lugar e economize horas de trabalho todas as semanas.",
    badge: "Recomendado",
    originalPrice: "R$ 997,00",
    installment: "ou em até 12x de R$ 60,81",
    savings: "Economia de R$ 409,00",
    ctaLabel: "Quero assinar anual",
    recommendation:
      "Recomendado para professoras que desejam organizar todo o ano letivo com economia e acesso às futuras atualizações da plataforma.",
    perks: [
      "Cadastro ilimitado de alunos",
      "Histórico pedagógico completo de cada estudante",
      "Acompanhamento individualizado dos alunos",
      "Avaliação Diagnóstica com atividades prontas",
      "Estudo de Caso guiado com auxílio de IA",
      "PAEE personalizado com habilidades da nossa base",
      "Registro dos atendimentos",
      "Atualizações contínuas da plataforma",
      "Suporte humano",
    ],
  },
];

type PricingSectionProps = {
  ctaHrefMensal: string;
  ctaHrefAnual: string;
};

export function PricingSection({ ctaHrefMensal, ctaHrefAnual }: PricingSectionProps) {
  return (
    <section id="planos" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">

        {/* Label + Título */}
        <AnimateIn className="contents">
          <span className="mb-4 inline-block rounded-full bg-[#A786B6]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#A786B6]">
            Planos
          </span>
          <h2 className="mb-12 text-3xl font-black text-[#276678] md:text-4xl">
            Escolha o plano ideal para você
          </h2>
        </AnimateIn>

        {/* Cards de preço */}
        <div className="mb-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
          {plans.map(
            (
              {
                id,
                label,
                price,
                period,
                title,
                subtitle,
                highlight,
                badge,
                pricePrefix,
                originalPrice,
                installment,
                savings,
                ctaLabel,
                recommendation,
                perks,
              },
              i,
            ) => (
            <AnimateIn
              key={label}
              delay={i * 100}
              direction={i === 0 ? "left" : i === plans.length - 1 ? "right" : "up"}
              className="flex flex-1"
            >
            <div
              className={`flex w-full flex-col overflow-hidden rounded-2xl ${
                highlight
                  ? "ring-2 ring-[#A786B6]"
                  : "ring-1 ring-[#276678]/15"
              }`}
            >
              {/* Header — badge integrado na mesma linha */}
              <div className="flex items-center justify-between gap-2 bg-[#276678]/8 px-5 py-3">
                <span className="text-sm font-semibold text-[#276678]">
                  {label}
                </span>
                {badge && (
                  <span className="shrink-0 rounded-full bg-[#FFBE33] px-2.5 py-0.5 text-[10px] font-black text-[#276678]">
                    {badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div
                className={`flex flex-1 flex-col gap-4 px-5 py-6 ${
                  highlight
                    ? "bg-linear-to-b from-[#A786B6] to-[#7D5F94]"
                    : "bg-linear-to-b from-[#2e7a8e] to-[#14414e]"
                }`}
              >
                <div>
                  <p className="text-sm font-bold leading-snug text-white">
                    {title}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white/50">
                    {subtitle}
                  </p>
                </div>

                {/* Perks */}
                <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                  O que está incluso:
                </p>
                <ul className="-mt-2 space-y-2 text-left">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Check size={13} weight="bold" className="mt-0.5 shrink-0 text-[#FFBE33]" />
                      <span className="text-xs leading-snug text-white/70">{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* Preço */}
                <div className="mt-2 flex flex-col gap-1">
                  {originalPrice && (
                    <p className="text-xs text-white/50">
                      De <span className="line-through">{originalPrice}</span> por apenas
                    </p>
                  )}
                  {pricePrefix && (
                    <span className="text-base font-semibold text-white/60">
                      {pricePrefix}
                    </span>
                  )}
                  <span className="text-3xl font-black text-white md:text-4xl">
                    {price}
                  </span>
                  {period && (
                    <span className="text-base font-semibold text-white/60">
                      {period}
                    </span>
                  )}
                  {installment && (
                    <p className="mt-1 text-xs text-white/60">{installment}</p>
                  )}
                  {savings && (
                    <p className="mt-1 text-xs font-bold text-[#FFBE33]">{savings}</p>
                  )}
                </div>

                {ctaLabel && highlight && (
                  <a
                    href={id === "mensal" ? ctaHrefMensal : ctaHrefAnual}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#276678] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {ctaLabel}
                  </a>
                )}

                {ctaLabel && !highlight && (
                  <a
                    href={id === "mensal" ? ctaHrefMensal : ctaHrefAnual}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-2 flex items-center justify-center overflow-hidden rounded-xl bg-linear-to-t from-[#276678] via-[#3a9ab8] to-[#55B3CE] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_6px_32px_rgba(39,102,120,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    <span className="relative z-10">{ctaLabel}</span>
                  </a>
                )}

                {recommendation && (
                  <p className="text-[11px] leading-snug text-white/60">
                    {recommendation}
                  </p>
                )}
              </div>
            </div>
            </AnimateIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
