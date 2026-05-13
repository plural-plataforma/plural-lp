import { AnimateIn } from "@/app/components/ui/AnimateIn";

const faqs = [
  {
    q: "O que é exatamente a Plural Plataforma?",
    a: "É a primeira plataforma criada exclusivamente para professoras do AEE. Uma solução profissional que centraliza registros, planejamentos, avaliações e o histórico completo do aluno em um só lugar.",
  },
  {
    q: "Preciso ser boa em tecnologia para usar?",
    a: "Não. A plataforma foi feita para ser simples, intuitiva e prática.",
  },
  {
    q: "Funciona só para AEE?",
    a: "Sim. Ela foi criada especialmente para apoiar a professora do AEE.",
  },
  /* Temporário: menção a plano / acesso gratuito
  {
    q: "Existe plano gratuito?",
    a: "Sim. Você pode começar conhecendo a plataforma antes de avançar para os planos completos.",
  },
  */
  {
    q: "A plataforma vai evoluir com o tempo?",
    a: "Sim. A Plural está em constante desenvolvimento com base nas necessidades reais das professoras.",
  },
  {
    q: "É seguro colocar os dados dos alunos?",
    a: "Sim. A plataforma foi construída com segurança, confidencialidade e proteção de dados, respeitando a LGPD.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#276678] py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Título */}
        <AnimateIn className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FFBE33]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFBE33]">
            FAQ
          </span>
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Perguntas Frequentes
          </h2>
        </AnimateIn>

        {/* Lista de perguntas */}
        <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
          {faqs.map(({ q, a }, i) => (
            <AnimateIn key={q} delay={i * 60} direction="up">
            <div
              className={`px-8 py-7 ${i !== faqs.length - 1 ? "border-b border-white/10" : ""} ${i % 2 === 0 ? "bg-white/5" : "bg-white/3"}`}
            >
              <div className="grid gap-3 md:grid-cols-[1fr_1.4fr]">
                <p className="text-base font-black text-white md:text-lg">
                  {q}
                </p>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {a}
                </p>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
