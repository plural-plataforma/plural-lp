import { AnimateIn } from "@/app/components/ui/AnimateIn";

const objections = [
  {
    context: "Talvez você pense:",
    question: '"Mas será que isso é para mim?"',
    answer: (
      <>
        Se você é professora do AEE,{" "}
        <strong className="text-[#276678]">a resposta é sim.</strong>
        <br />
        <br />
        A Plural nasceu da vivência real da professora Morgana e da inteligência
        coletiva de milhares de educadoras que compartilham diariamente suas
        dificuldades, necessidades e desafios.{" "}
        <strong className="text-[#276678]">
          Cada função foi pensada para a sua realidade.
        </strong>
        <br />
        <br />
        Não é teoria. É prática.
      </>
    ),
  },
  {
    context: "E se a sua preocupação for:",
    question: '"Eu não sou boa com tecnologia…"',
    answer: (
      <>
        Não precisa ser.
        <br />
        <br />
        A Plural foi desenhada para ser simples, intuitiva e prática.
        <br />
        <br />
        Se você já usa WhatsApp, vai conseguir usar a plataforma sem
        dificuldade. E ainda terá suporte sempre que precisar.
      </>
    ),
  },
  {
    context: "Você pode estar se perguntando:",
    question: '"Mas por que começar agora?"',
    answer: (
      <>
        Porque cada dia no improviso custa{" "}
        <strong className="text-[#276678]">
          tempo, energia e segurança profissional
        </strong>
        . Quanto antes você organiza sua rotina, mais leve fica seu trabalho.
        <br />
        <br />
        Você não está comprando apenas uma plataforma.{" "}
        Está comprando <strong className="text-[#276678]">tempo</strong>.{" "}
        <strong className="text-[#276678]">Clareza</strong>.{" "}
        <strong className="text-[#276678]">Organização</strong>. E{" "}
        <strong className="text-[#276678]">tranquilidade profissional</strong>.
      </>
    ),
  },
];

export function ObjectionsSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#276678]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#276678]">
            Dúvidas comuns
          </span>
        </div>

        <div className="space-y-0">
          {objections.map(({ question, context, answer }, i) => (
            <AnimateIn key={i} direction={i % 2 === 0 ? "left" : "right"} delay={50}>
              {/* Divisor com número */}
              <div className="flex items-center gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#276678]/8 text-sm font-black text-[#276678]/40">
                  {i + 1}
                </div>
                <div className="h-px flex-1 bg-[#276678]/10" />
              </div>

              {/* Q&A */}
              <div className="grid gap-6 py-10 md:grid-cols-2">
                {/* Coluna esquerda */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                    {context}
                  </p>
                  <p className="text-xl font-black italic leading-snug text-[#276678] md:text-2xl">
                    {question}
                  </p>
                </div>

                {/* Coluna direita */}
                <div className="rounded-2xl bg-[#276678]/5 p-6">
                  <p className="text-sm leading-relaxed text-[#276678]/80 md:text-base">
                    {answer}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Divisor final */}
          <div className="h-px w-full bg-[#276678]/10" />
        </div>

      </div>
    </section>
  );
}
