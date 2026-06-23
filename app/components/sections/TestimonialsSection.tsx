import Image from "next/image";
import { AnimateIn } from "@/app/components/ui/AnimateIn";

const testimonials = [
  {
    src: "/testimonials/1.png",
    alt: "Depoimento de professora sobre organização na Sala de Recursos",
    width: 740,
    height: 425,
  },
  {
    src: "/testimonials/2.png",
    alt: "Depoimento de professora sobre organização da vida funcional dos alunos",
    width: 739,
    height: 534,
  },
  {
    src: "/testimonials/3.png",
    alt: "Depoimento de professora sobre segurança na elaboração de documentos",
    width: 718,
    height: 465,
  },
  {
    src: "/testimonials/4.png",
    alt: "Depoimento de professora sobre organização de documentos do AEE",
    width: 717,
    height: 356,
  },
  {
    src: "/testimonials/5.png",
    alt: "Depoimento de Marcia Lara sobre a plataforma Plural",
    width: 637,
    height: 201,
  },
  {
    src: "/testimonials/6.png",
    alt: "Depoimento de professora recomendando a plataforma Plural",
    width: 634,
    height: 349,
  },
    {
    src: "/testimonials/7.png",
    alt: "Depoimento de professora recomendando a plataforma Plural da nova versão",
    width: 729,
    height: 328,
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-[#276678] py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Título */}
        <AnimateIn className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FFBE33]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFBE33]">
            O que as professoras estão dizendo
          </span>
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Professoras de todo o Brasil já estão{" "}
            <span className="text-[#FFBE33]">vivendo essa transformação</span>
          </h2>
        </AnimateIn>

        {/* Grid de depoimentos */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimateIn key={testimonial.src} delay={i * 90} direction="up">
              <TestimonialCard {...testimonial} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white/8 ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="h-auto w-full"
      />
    </div>
  );
}
