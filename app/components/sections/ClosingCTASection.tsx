import { AnimateIn } from "@/app/components/ui/AnimateIn";

export function ClosingCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#276678] py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #FFBE33 0%, transparent 60%), radial-gradient(circle at 80% 50%, #A786B6 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">

        {/* Contraste */}
        <div className="mb-12 grid gap-3 md:grid-cols-2">
          <AnimateIn direction="left" className="h-full">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white/5 px-6 py-8 ring-1 ring-white/10">
              <p className="text-lg font-black leading-snug text-white/50 md:text-xl">
                Você pode continuar fazendo tudo no improviso
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={100} className="h-full">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-[#FFBE33]/12 px-6 py-8 ring-1 ring-[#FFBE33]/25">
              <p className="text-lg font-black leading-snug text-[#FFBE33] md:text-xl">
                ou pode começar hoje a organizar seu AEE{" "}
                <span className="text-white">com segurança.</span>
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Headline */}
        <AnimateIn direction="up" delay={50}>
          <p className="mb-2 text-3xl font-black text-white md:text-4xl">
            A decisão é sua
          </p>
          <p className="mb-12 text-xl font-bold text-[#FFBE33] md:text-2xl">
            Mas a transformação começa agora
          </p>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn direction="scale" delay={200}>
          <a
            href="#inscricao"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#FFBE33] px-12 py-5 text-center text-base font-extrabold uppercase tracking-wide text-[#276678] shadow-[0_8px_40px_rgba(255,190,51,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_50px_rgba(255,190,51,0.55)] active:scale-[0.98]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative z-10">Quero começar agora</span>
          </a>
        </AnimateIn>

      </div>
    </section>
  );
}
