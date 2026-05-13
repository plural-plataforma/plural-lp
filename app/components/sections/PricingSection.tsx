import { Check } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

type Plan = {
  label: string;
  price: string;
  period: string;
  subtitle: string;
  highlight?: boolean;
  badge?: string;
  perks: string[];
};

const plans: Plan[] = [
  {
    label: "Assinatura Gratuita",
    price: "Grátis",
    period: "",
    subtitle: "Para conhecer a plataforma e começar a explorar",
    perks: ["Acesso limitado à plataforma", "Ideal para explorar os recursos"],
  },
  {
    label: "Assinatura Mensal",
    price: "R$49,90",
    period: "/mês",
    subtitle: "Praticidade para começar",
    perks: ["Acesso completo à plataforma", "Suporte incluso"],
  },
  {
    label: "Assinatura Anual",
    price: "R$598,80",
    period: "/ano",
    subtitle: "Mais economia e acesso completo",
    highlight: true,
    badge: "Mais popular",
    perks: ["Acesso completo à plataforma", "Suporte incluso", "Economia vs. mensal"],
  },
];

export function PricingSection() {
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
          {plans.map(({ label, price, period, subtitle, highlight, badge, perks }, i) => (
            <AnimateIn key={label} delay={i * 100} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} className="flex flex-1">
            <div
              className={`flex h-full w-full flex-col overflow-hidden rounded-2xl ${
                highlight
                  ? "ring-2 ring-[#A786B6]"
                  : "ring-1 ring-[#276678]/15"
              }`}
            >
              {/* Header — badge integrado na mesma linha */}
              <div className={`flex items-center justify-between gap-2 px-5 py-3 ${highlight ? "bg-[#A786B6]" : "bg-[#276678]/8"}`}>
                <span className={`text-sm font-semibold ${highlight ? "text-white" : "text-[#276678]"}`}>
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
                  <span className="text-3xl font-black text-white md:text-4xl">
                    {price}
                  </span>
                  {period && (
                    <span className="text-base font-semibold text-white/60">
                      {period}
                    </span>
                  )}
                  <p className="mt-1 text-xs leading-snug text-white/50">
                    {subtitle}
                  </p>
                </div>

                {/* Perks */}
                <ul className="space-y-2 text-left">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Check size={13} weight="bold" className="mt-0.5 shrink-0 text-[#FFBE33]" />
                      <span className="text-xs leading-snug text-white/70">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>

        {/* Texto */}
        <p className="mb-2 text-lg font-bold text-[#276678] md:text-xl">
          A escolha é sua.
        </p>
        <p className="mb-12 text-lg text-[#276678]/80 md:text-xl">
          O objetivo é um só:{" "}
          <strong className="font-black text-[#276678]">organizar seu AEE com mais segurança.</strong>
        </p>

        {/* CTAs */}
        <AnimateIn direction="up" delay={150} className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#inscricao"
            className="group relative flex items-center justify-center overflow-hidden rounded-2xl bg-linear-to-t from-[#276678] via-[#3a9ab8] to-[#55B3CE] px-10 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_6px_32px_rgba(39,102,120,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative z-10">Quero começar agora</span>
          </a>
          <a
            href="#inscricao"
            className="flex items-center justify-center rounded-2xl border-2 border-[#276678] px-10 py-4 text-sm font-bold uppercase tracking-wide text-[#276678] transition-all hover:bg-[#276678]/5 active:scale-[0.98]"
          >
            Ver planos disponíveis
          </a>
        </AnimateIn>

      </div>
    </section>
  );
}
