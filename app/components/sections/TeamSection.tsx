import type { Icon } from "@phosphor-icons/react";
import Image from "next/image";
import { BookBookmark, CheckCircle, Users } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

type TeamMember = {
  avatarSrc: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
};

const teamMembers: TeamMember[] = [
  {
    avatarSrc: "/team/morgana.jpg",
    name: "Morgana da Cruz",
    role: "Especialista em AEE | Pedagoga e Psicopedagoga",
    bio: "Atua na educação desde 2010 e no Atendimento Educacional Especializado desde 2016. É responsável pelo Descomplique o AEE, formação que já recebeu mais de 2.500 professoras, além de compartilhar conteúdos sobre Educação Especial e AEE com uma comunidade de quase 200 mil pessoas.",
    quote:
      "A Plural nasceu daquilo que eu sentia falta na prática: um lugar que ajudasse a professora a organizar, planejar, registrar e acompanhar cada aluno sem transformar a documentação em mais uma sobrecarga.",
  },
  {
    avatarSrc: "/team/sabrina.jpg",
    name: "Sabrina Ramalho",
    role: "Especialista em EAD e Tecnologias Educacionais | Gestão e Estratégia",
    bio: "Mestre em Letras e especialista em Educação a Distância e Tecnologias Educacionais, atua na gestão e no desenvolvimento de projetos digitais voltados à educação. Na Plural, transforma as necessidades pedagógicas identificadas na prática em processos, tecnologia e soluções que funcionem de forma simples no dia a dia.",
    quote:
      "Nosso desafio sempre foi fazer a tecnologia trabalhar para a professora e não criar mais uma ferramenta complicada que ela precise aprender a usar.",
  },
];

function TeamMemberBio({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <AnimateIn delay={delay} direction="up" className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_32px_rgba(39,102,120,0.07)] ring-1 ring-[#276678]/10">
        <div className="relative aspect-[9/10] w-full">
          <Image
            src={member.avatarSrc}
            alt={member.name}
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            quality={100}
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
          <div>
            <p className="text-base font-black leading-tight text-[#276678] md:text-lg">{member.name}</p>
            <p className="mt-0.5 text-xs font-semibold leading-snug text-[#276678]/60 md:text-sm">
              {member.role}
            </p>
          </div>
          <blockquote className="relative border-l-4 border-[#A786B6] pl-4">
            <p className="text-sm font-semibold italic leading-relaxed text-[#276678] md:text-base">
              &ldquo;{member.quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </AnimateIn>
  );
}

function StatCard({
  icon: CardIcon,
  number,
  numberClass,
  description,
  gradientClass,
}: {
  icon: Icon;
  number: string;
  numberClass: string;
  description: string;
  gradientClass: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl bg-linear-to-br p-6 shadow-[0_8px_32px_rgba(39,102,120,0.08)] ring-1 ring-[#276678]/10 md:p-7 ${gradientClass}`}
    >
      <div className="flex size-11 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-[#276678]/10">
        <CardIcon size={22} weight="bold" className="text-[#276678]" />
      </div>
      <div>
        <p className={`text-4xl font-black tracking-tight md:text-5xl ${numberClass}`}>{number}</p>
        <p className="mt-3 text-sm font-bold leading-snug text-[#276678] md:text-base">{description}</p>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="time" className="relative overflow-hidden bg-[#f8f7fc] py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#A786B6]/20 blur-3xl md:h-88 md:w-88"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-24 h-64 w-64 rounded-full bg-[#276678]/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFBE33]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <AnimateIn className="mb-10 text-center md:mb-12">
          <span className="mb-4 inline-block rounded-full bg-[#276678]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#276678]">
            Quem está por trás da Plural
          </span>
          <h2 className="mx-auto max-w-xl text-lg font-black leading-snug text-[#276678] md:text-xl">
            A experiência de quem vive o AEE unida à tecnologia para tornar a rotina das
            professoras mais simples.
          </h2>
        </AnimateIn>

        <div className="grid gap-5 md:grid-cols-2">
          {teamMembers.map((member, i) => (
            <TeamMemberBio key={member.name} member={member} delay={120 + i * 80} />
          ))}
        </div>

        <div className="mb-14 grid gap-5 pt-6 md:mb-16 md:grid-cols-2">
          {teamMembers.map((member, i) => (
            <AnimateIn key={member.name} delay={160 + i * 80} direction="up">
              <p className="text-xs font-bold uppercase tracking-wide text-[#276678]/50">
                Atuação de {member.name.split(" ")[0]}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#276678]/70">{member.bio}</p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={120} className="mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#276678]/55">São mais de:</p>
        </AnimateIn>

        <div className="mb-14 flex flex-col gap-4 md:mb-16 md:grid md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-4">
          <AnimateIn delay={140} direction="up" className="h-full min-w-0">
            <StatCard
              icon={BookBookmark}
              number="+2.500"
              numberClass="text-[#A786B6]"
              description="professoras que conhecem o método Descomplique o AEE"
              gradientClass="from-white to-[#A786B6]/12"
            />
          </AnimateIn>
          <AnimateIn
            delay={180}
            direction="fade"
            className="flex min-h-0 shrink-0 items-center justify-center py-1 md:min-h-full md:py-0"
          >
            <span className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-[#276678]/35 shadow-sm ring-1 ring-[#276678]/10 md:min-h-14 md:min-w-14 md:text-xl">
              e
            </span>
          </AnimateIn>
          <AnimateIn delay={140} direction="up" className="h-full min-w-0">
            <StatCard
              icon={CheckCircle}
              number="+500"
              numberClass="text-[#276678]"
              description="professoras que já utilizam a Plataforma Plural"
              gradientClass="from-white to-[#276678]/12"
            />
          </AnimateIn>
        </div>

        <AnimateIn delay={200} direction="up" className="mb-14 md:mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#276678] via-[#215a6a] to-[#183d47] p-8 text-center shadow-[0_12px_40px_rgba(39,102,120,0.25)] ring-1 ring-white/10 md:p-10">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FFBE33]/25 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#A786B6]/20 blur-2xl"
              aria-hidden
            />
            <p className="relative mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/55">Além disso:</p>
            <div className="relative mx-auto flex max-w-xl flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
              <Users size={40} weight="bold" className="shrink-0 text-[#FFBE33] md:size-11" aria-hidden />
              <p className="text-4xl font-black tracking-tight text-[#FFBE33] md:text-5xl">+ milhares</p>
            </div>
            <p className="relative mx-auto mt-4 max-w-lg text-base font-semibold leading-snug text-white/90 md:text-lg">
              de professoras construindo o futuro do AEE
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={240} direction="up" className="text-center">
          <p className="mx-auto max-w-xl text-xl font-black leading-snug text-[#276678] md:text-2xl">
            Agora, toda essa experiência virou uma{" "}
            <span className="relative inline-block text-[#A786B6]">
              plataforma
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 right-0 h-2 rounded-full bg-[#FFBE33]/45"
              />
            </span>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
