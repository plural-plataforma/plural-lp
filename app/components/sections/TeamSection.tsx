import Image from "next/image";

const founders = [
  {
    name: "Morgana\nda Cruz",
    photo: "/morgana.png",
    watermarkColor: "text-white/40",
    watermark: ["Mor", "ga", "na"],
    bio: "Especialista em AEE. Referência nacional. Criadora do método Descomplique o AEE, com mais de +2.400 professoras formadas. Mais de +300 professoras já utilizando a Plataforma Plural.",
  },
  {
    name: "Sabrina Ramalho",
    photo: "/sabrina.png",
    watermarkColor: "text-white/40",
    watermark: ["Sa", "bri", "na"],
    bio: "Especialista em EAD e tecnologia educacional. Responsável por levar inovação e impacto digital para a inclusão.",
  },
];

export function TeamSection() {
  return (
    <section id="time" className="bg-background py-16">
      <div className="mx-auto max-w-2xl px-6">
        {/* Título */}
        <h2 className="mb-3 text-center text-2xl font-black text-[#276678] md:text-3xl">
          Criada por quem vive o AEE de verdade
        </h2>
        <p className="mb-8 text-center text-base leading-relaxed text-[#276678]/70">
          A professora Morgana da Cruz conhece exatamente a realidade da sala de recursos.
        </p>

        {/* ── MOBILE: fotos individuais (oculto em md+) ── */}
        <div className="md:hidden">
          {founders.map(({ name, photo, watermarkColor, watermark, bio }) => (
            <div key={name} className="mb-12">
              {/* Watermark + foto */}
              <div className="relative flex items-start">
                {/* Watermark — esquerda */}
                <p
                  className={`absolute left-8 -top-5 select-none text-6xl font-black leading-[0.82] ${watermarkColor}`}
                  aria-hidden="true"
                >
                  {watermark.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </p>

                {/* Foto — direita, ocupa ~60% */}
                <div className="relative ml-auto h-[200px] w-[50%]">
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      sizes="58vw"
                      className="object-contain object-top"
                      loading="eager"
                    />
                </div>

                {/* Nome — self-end gruda no fim (bottom) da div flex */}
                <div className="self-end">
                  <p className="text-left md:text-lg font-black leading-tight text-[#a786b6]">
                    {name.split(" ").slice(0, -1).join(" ")}
                    <br />
                    {name.split(" ").slice(-1)[0]}
                  </p>
                </div>

              </div>



              {/* Bio — centralizada */}
              <p className="mt-4 text-center text-sm font-bold leading-relaxed text-[#276678] px-4">
                {bio}
              </p>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: foto da dupla + nomes lado a lado (oculto abaixo de md) ── */}
        <div className="hidden md:block">
          <div className="relative mb-6">
            <p
              className="pointer-events-none absolute -left-20 top-20 -translate-y-1/2 select-none text-7xl font-black leading-[0.8] text-white/40 md:text-8xl"
              aria-hidden="true"
            >
              Mor<br />ga<br />na
            </p>
            <p
              className="pointer-events-none absolute -right-18 top-65 -translate-y-1/2 select-none text-left text-7xl font-black leading-[0.8] text-white/40 md:text-8xl"
              aria-hidden="true"
            >
              Sa<br />bri<br />na
            </p>
            <div className="relative mx-auto h-[360px] max-w-[560px] overflow-hidden rounded-tl-[60px] rounded-br-[60px]">
              <Image
                src="/team-photo.png"
                alt="Morgana da Cruz e Sabrina Ramalho"
                fill
                sizes="560px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="text-right">
              <p className="mb-2 font-black text-right text-[#a786b6]">Morgana da Cruz</p>
              <p className="text-sm font-bold leading-relaxed text-[#276678]">
                Especialista em AEE. Referência nacional. Criadora do método
                Descomplique o AEE, com mais de +2.400 professoras formadas.
                Mais de +300 professoras já utilizando a Plataforma Plural.
              </p>
            </div>
            <div className="text-left">
              <p className="mb-2 font-black text-[#a786b6]">Sabrina Ramalho</p>
              <p className="text-sm font-bold leading-relaxed text-[#276678]">
                Especialista em EAD e tecnologia educacional. Responsável por
                levar inovação e impacto digital para a inclusão.
              </p>
            </div>
          </div>
        </div>

        {/* Texto de impacto — aparece em ambos */}
        <div className="text-center">
          <p className="mb-6 text-base font-bold leading-relaxed text-[#276678]">
            A Plural não foi criada por programadores que nunca pisaram em uma
            escola.
            <br />
            Foi criada por quem vive o AEE no chão da escola.
          </p>

          {/* Estatísticas */}
          <p className="mb-4 text-sm font-semibold text-[#276678]/60 uppercase tracking-widest">
            São mais de:
          </p>
          <div className="mb-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#A786B6]/10 p-5">
              <p className="text-3xl font-black text-[#A786B6]">+2.400</p>
              <p className="mt-1 text-sm font-bold text-[#276678]">
                professoras que conhecem o<br />método Descomplique o AEE
              </p>
            </div>
            <div className="rounded-2xl bg-[#276678]/10 p-5">
              <p className="text-3xl font-black text-[#276678]">+300</p>
              <p className="mt-1 text-sm font-bold text-[#276678]">
                professoras que já utilizam a<br />Plataforma Plural
              </p>
            </div>
          </div>
          <p className="mb-4 text-sm font-semibold text-[#276678]/60 uppercase tracking-widest">
            Além disso:
          </p>
          <div className="mb-8 rounded-2xl bg-[#FFBE33]/10 p-5">
            <p className="text-3xl font-black text-[#FFBE33]">+ milhares</p>
            <p className="mt-1 text-sm font-bold text-[#276678]">
              de professoras construindo o futuro do AEE
            </p>
          </div>

          <p className="mb-8 text-lg font-black text-[#276678] md:text-xl">
            Agora, toda essa experiência virou uma plataforma.
          </p>

          {/* Transição para depoimentos — exato do doc */}
          <p className="text-2xl font-black text-[#A786B6] md:text-3xl">
            O que as professoras estão dizendo
          </p>
        </div>
      </div>
    </section>
  );
}
