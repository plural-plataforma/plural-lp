import { AnimateIn } from "@/app/components/ui/AnimateIn";

type LaunchOfferSectionProps = {
  ctaHref: string;
};

type PlanoResumo = {
  id: "mensal" | "anual";
  label: string;
  originalPrice?: string;
  price: string;
  period: string;
  installment?: string;
};

const planos: PlanoResumo[] = [
  {
    id: "mensal",
    label: "assinatura mensal",
    price: "R$69,90",
    period: "/mês",
  },
  {
    id: "anual",
    label: "assinatura anual",
    originalPrice: "R$997,00",
    price: "R$588,00",
    period: "/ano",
    installment: "ou em até 12x de R$60,81",
  },
];

export function LaunchOfferSection({ ctaHref }: LaunchOfferSectionProps) {
  return (
    <section
      id="inscricao"
      className="bg-linear-to-b from-[#e8e0f0] via-[#c9b8db] to-[#A786B6] py-24"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">

        {/* Badge */}
        <AnimateIn direction="down">
          <span className="mb-6 inline-block rounded-full bg-white/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#276678]">
            Planos Mensal e Anual
          </span>

          <h2 className="mb-4 text-3xl font-black text-[#276678] md:text-5xl">
            Acesso completo à Plataforma Plural
          </h2>

          <p className="mb-12 text-base leading-relaxed text-[#444] md:text-lg">
            Entre no nosso grupo de espera no WhatsApp e garanta acesso aos
            planos <strong className="text-[#276678]">Mensal</strong> e{" "}
            <strong className="text-[#276678]">Anual</strong> assim que as
            inscrições abrirem.
          </p>
        </AnimateIn>

        {/* Pricing cards */}
        <div className="mb-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
          {planos.map((plano, i) => (
            <AnimateIn
              key={plano.id}
              direction="scale"
              delay={150 + i * 100}
              className="flex-1 overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(39,102,120,0.25)]"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="bg-[#276678]/15 px-8 py-4">
                  <p className="text-sm font-semibold text-[#276678]">{plano.label}</p>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col items-center justify-center bg-linear-to-b from-[#276678] to-[#14414e] px-8 py-10">
                  {plano.originalPrice && (
                    <p className="mb-1 text-center text-sm font-medium text-white/50 line-through">
                      {plano.originalPrice}
                    </p>
                  )}

                  <div className="mb-1 flex items-end justify-center gap-2">
                    <span className="text-5xl font-black text-[#FFBE33] md:text-6xl">
                      {plano.price}
                    </span>
                    <span className="mb-2 text-lg font-semibold text-[#FFBE33]/70">
                      {plano.period}
                    </span>
                  </div>

                  {plano.installment && (
                    <p className="mt-4 text-center text-sm text-white/60">
                      {plano.installment}
                    </p>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn direction="up" delay={200}>
          <p className="mt-10 text-base leading-relaxed text-[#444] md:text-lg">
            No nosso grupo de espera no Whats você tira dúvidas e é avisada
            assim que as inscrições abrirem.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={250} className="mt-10">
          <a
            href={ctaHref}
            target={ctaHref.startsWith("#") ? undefined : "_blank"}
            rel={ctaHref.startsWith("#") ? undefined : "noopener noreferrer"}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#276678] px-12 py-5 text-base font-extrabold uppercase tracking-wide text-white shadow-[0_8px_40px_rgba(39,102,120,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_50px_rgba(39,102,120,0.5)] active:scale-[0.98]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative z-10">Entrar no grupo de espera</span>
          </a>
        </AnimateIn>

      </div>
    </section>
  );
}
