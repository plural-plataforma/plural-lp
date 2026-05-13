import {
  CalendarBlank,
  Percent,
  UsersThree,
  Monitor,
  Lightbulb,
  WhatsappLogo,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

function GoldCard({
  icon: CardIcon,
  bold,
  rest,
}: {
  icon: React.ComponentType<{ size: number; weight: "bold"; className?: string }>;
  bold: string;
  rest: string;
}) {
  return (
    <div
      className="mx-auto flex w-full max-w-[462px] flex-col gap-4 rounded-2xl p-6 shadow-md"
      style={{
        backgroundImage: "url('/gold-fundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex size-10 items-center justify-center rounded-xl bg-black/10">
        <CardIcon size={20} weight="bold" className="text-black/60" />
      </div>
      <p className="text-base leading-snug text-black md:text-lg">
        <strong className="font-black">{bold}</strong> {rest}
      </p>
    </div>
  );
}

function PurpleCard({
  icon: CardIcon,
  bold,
  rest,
}: {
  icon: React.ComponentType<{ size: number; weight: "bold"; className?: string }>;
  bold: string;
  rest: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-linear-to-br from-[#A786B6] to-[#7D5F94] p-5 transition-all duration-200 hover:-translate-y-1">
      <div className="flex size-9 items-center justify-center rounded-lg bg-white/20">
        <CardIcon size={18} weight="bold" className="text-white" />
      </div>
      <p className="text-sm leading-snug text-white md:text-base">
        <strong className="font-black">{bold}</strong>{" "}
        <span className="text-white/80">{rest}</span>
      </p>
    </div>
  );
}

function BlockHeader({ label, prefix, highlight }: { label: string; prefix: string; highlight: string }) {
  return (
    <div className="mb-8 text-center">
      <span className="mb-3 inline-block rounded-full bg-[#A786B6]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#A786B6]">
        {label}
      </span>
      <h3 className="text-2xl font-black leading-snug text-[#276678] md:text-3xl">
        {prefix}{" "}
        <span className="text-[#FFBE33]">{highlight}</span>
      </h3>
    </div>
  );
}

export function BonusesSection() {
  return (
    <section className="bg-[#f8f7fc] py-24">
      <div className="mx-auto max-w-3xl px-6">

        {/* Bloco 1 — 300 primeiras */}
        <AnimateIn>
          <BlockHeader
            label="Bônus exclusivos"
            prefix="Vantagens exclusivas das"
            highlight="300 primeiras inscritas"
          />
        </AnimateIn>
        <div className="mb-16 flex flex-col items-center gap-4">
          <AnimateIn direction="scale" className="w-full flex justify-center">
            <GoldCard
              icon={CalendarBlank}
              bold="1 ano adicional de acesso gratuito à Plural"
              rest="ou seja, 2 anos completos pelo valor de 1."
            />
          </AnimateIn>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <AnimateIn direction="left">
              <PurpleCard
                icon={Percent}
                bold="50% de desconto"
                rest="garantido no valor oficial."
              />
            </AnimateIn>
            <AnimateIn direction="right">
              <PurpleCard
                icon={UsersThree}
                bold="Programa de Indicação e Afiliadas,"
                rest="que permite ganhar dinheiro indicando a plataforma e ajudando a expandir a inclusão."
              />
            </AnimateIn>
          </div>
        </div>

        {/* Divisor */}
        <div className="mb-16 h-px bg-[#276678]/10" />

        {/* Bloco 2 — 100 primeiras */}
        <AnimateIn>
          <BlockHeader
            label="Super bônus"
            prefix="E para as"
            highlight="100 primeiras inscritas..."
          />
        </AnimateIn>
        <div className="flex flex-col items-center gap-4">
          <AnimateIn direction="scale" className="w-full flex justify-center">
            <GoldCard
              icon={Monitor}
              bold="Acesso vitalício,"
              rest="pagando apenas uma vez."
            />
          </AnimateIn>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Lightbulb,      bold: "Entrada antecipada",                          rest: "para testar os recursos e dar feedback direto à equipe."       },
              { icon: WhatsappLogo,   bold: "Participação no grupo exclusivo de WhatsApp", rest: "com o time da Plural."                                         },
              { icon: ArrowsClockwise, bold: "Acesso antecipado",                          rest: "a novas ferramentas e melhorias contínuas."                    },
            ].map(({ icon, bold, rest }, i) => (
              <AnimateIn key={bold} delay={i * 80} direction="up">
                <PurpleCard icon={icon} bold={bold} rest={rest} />
              </AnimateIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
