import { AnimateIn } from "@/app/components/ui/AnimateIn";

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-[#276678] py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Título */}
        <AnimateIn className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FFBE33]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFBE33]">
            Depoimentos
          </span>
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Professoras de todo o Brasil já estão{" "}
            <span className="text-[#FFBE33]">vivendo essa transformação</span>
          </h2>
        </AnimateIn>

        {/* Grid de depoimentos */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <AnimateIn key={i} delay={i * 90} direction="up">
              <TestimonialSlot index={i + 1} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

function TestimonialSlot({ index }: { index: number }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white/8 p-6 ring-1 ring-white/10">
      <span className="text-5xl font-black leading-none text-[#FFBE33]/30" aria-hidden>
        "
      </span>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-8 text-center">
        <span className="rounded-full bg-[#FFBE33]/20 px-3 py-1 text-xs font-bold text-[#FFBE33]">
          Depoimento {index}
        </span>
        <p className="text-xs text-white/40">
          Inserir print ou feedback real de professora usando a plataforma
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-full bg-[#A786B6]/30 ring-1 ring-[#A786B6]/20" />
        <div className="space-y-1">
          <div className="h-2.5 w-24 rounded-full bg-white/20" />
          <div className="h-2 w-16 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}
