import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";
import { getArtigoCategoryColor, type ArtigoResumo } from "@/app/lib/artigos";

type BlogPostCardProps = {
  post: ArtigoResumo;
  delay?: number;
};

export function BlogPostCard({ post, delay = 0 }: BlogPostCardProps) {
  return (
    <AnimateIn delay={delay} direction="up" className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_rgba(39,102,120,0.06)] ring-1 ring-[#276678]/10 transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(39,102,120,0.12)]"
      >
        {post.imagemCapaUrl && (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={post.imagemCapaUrl}
              alt={post.titulo}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-4 p-6">
          {post.categoria && (
            <span
              className={`inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${getArtigoCategoryColor(post.categoria)}`}
            >
              {post.categoria}
            </span>
          )}
          <h3 className="text-lg font-black leading-snug text-[#276678] group-hover:text-[#1b4a57] md:text-xl">
            {post.titulo}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-[#276678]/70">{post.resumo}</p>
          <span className="mt-auto flex items-center gap-2 text-sm font-bold text-[#276678]">
            Ler artigo
            <ArrowRight
              size={14}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </AnimateIn>
  );
}
