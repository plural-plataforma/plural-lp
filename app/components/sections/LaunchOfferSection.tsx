import { AnimateIn } from "@/app/components/ui/AnimateIn";

export function LaunchOfferSection() {
  return (
    <section
      id="inscricao"
      className="bg-linear-to-b from-[#e8e0f0] via-[#c9b8db] to-[#A786B6] py-24"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">

        {/* Badge */}
        <AnimateIn direction="down">
          <span className="mb-6 inline-block rounded-full bg-white/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#276678]">
            Oferta de Lançamento
          </span>

          <h2 className="mb-4 text-3xl font-black text-[#276678] md:text-5xl">
            Oferta de Lançamento
          </h2>

          <div className="mb-8 inline-block rounded-2xl bg-[#276678] px-10 py-3">
            <p className="text-2xl font-black text-white md:text-3xl">
              Apenas 300 vagas
            </p>
          </div>

          <p className="mb-12 text-base leading-relaxed text-[#444] md:text-lg">
            Neste primeiro momento, serão 300 vagas com{" "}
            <strong className="text-[#276678]">50% de desconto</strong> no valor
            oficial.
          </p>
        </AnimateIn>

        {/* Pricing card */}
        <AnimateIn direction="scale" delay={150} className="mx-auto max-w-[420px] overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(39,102,120,0.25)]">

          {/* Header */}
          <div className="bg-[#276678]/15 px-8 py-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#276678]">assinatura anual</p>
              <span className="rounded-full bg-[#FFBE33] px-3 py-1 text-xs font-black text-[#276678]">
                50% OFF
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="bg-linear-to-b from-[#276678] to-[#14414e] px-8 py-10">

            {/* Preço original riscado */}
            <p className="mb-1 text-center text-sm font-medium text-white/50 line-through">
              R$598,80
            </p>

            {/* Preço à vista */}
            <div className="mb-1 flex items-end justify-center gap-2">
              <span className="text-5xl font-black text-[#FFBE33] md:text-6xl">
                R$299,40
              </span>
              <span className="mb-2 text-lg font-semibold text-[#FFBE33]/70">/ano</span>
            </div>
            <p className="mb-6 text-center text-xs text-white/50">à vista</p>

            {/* Divisor */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-semibold text-white/40">ou</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Parcelado */}
            <p className="mb-2 text-center text-sm text-white/60">
              parcelado no cartão em
            </p>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-sm font-semibold text-white/60">12x de R$</span>
              <span className="text-4xl font-black text-[#FFBE33]">24,95</span>
            </div>

          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
