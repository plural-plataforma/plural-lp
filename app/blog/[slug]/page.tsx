import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogPostCard } from "@/app/components/blog/BlogPostCard";
import {
  formatArtigoDate,
  formatArtigoReadTime,
  getArtigoCategoryColor,
  getArtigoPorSlug,
  getArtigos,
} from "@/app/lib/artigos";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getArtigos();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArtigoPorSlug(slug);
  if (!post) return {};

  return {
    title: post.titulo,
    description: post.resumo,
    openGraph: {
      title: post.titulo,
      description: post.resumo,
      type: "article",
      publishedTime: post.publicadoEm,
      images: post.imagemCapaUrl ? [post.imagemCapaUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getArtigoPorSlug(slug);
  if (!post) notFound();

  const todosPosts = await getArtigos();
  const otherPosts = todosPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-10 px-6 text-center md:px-12">
          {post.categoria && (
            <span
              className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${getArtigoCategoryColor(post.categoria)}`}
            >
              {post.categoria}
            </span>
          )}
          <h1 className="mb-5 text-3xl font-black leading-tight text-[#276678] md:text-4xl">
            {post.titulo}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-[#276678]/60">
            <span className="font-semibold text-[#276678]/80">{post.autor}</span>
            <span className="flex items-center gap-1.5">
              <CalendarBlank size={15} weight="bold" aria-hidden />
              {formatArtigoDate(post.publicadoEm)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} weight="bold" aria-hidden />
              {formatArtigoReadTime(post.tempoLeituraMinutos)}
            </span>
          </div>
        </header>

        {post.imagemCapaUrl && (
          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-3xl">
            <Image
              src={post.imagemCapaUrl}
              alt={post.titulo}
              fill
              sizes="(min-width: 768px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-5 rounded-3xl bg-white p-7 shadow-[0_4px_32px_rgba(39,102,120,0.06)] ring-1 ring-[#276678]/10 md:p-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h2 className="pt-2 text-xl font-black text-[#276678] md:text-2xl">{children}</h2>
              ),
              h2: ({ children }) => (
                <h2 className="pt-2 text-xl font-black text-[#276678] md:text-2xl">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="pt-2 text-lg font-black text-[#276678] md:text-xl">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-sm leading-relaxed text-[#276678]/80 md:text-base">{children}</p>
              ),
              ul: ({ children }) => <ul className="space-y-2 pl-1">{children}</ul>,
              ol: ({ children }) => <ol className="space-y-2 pl-5 list-decimal">{children}</ol>,
              li: ({ children }) => (
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-[#276678]/80 md:text-base">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#276678]/50" aria-hidden />
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => <strong className="font-bold text-[#276678]">{children}</strong>,
              a: ({ children, href }) => (
                <a href={href} className="font-bold text-[#276678] underline underline-offset-2">
                  {children}
                </a>
              ),
            }}
          >
            {post.conteudo}
          </ReactMarkdown>
        </div>

        <div className="mt-8 rounded-3xl bg-[#276678] p-7 text-center md:p-9">
          <p className="mb-4 text-lg font-black text-white md:text-xl">
            Pronta para organizar sua rotina no AEE?
          </p>
          <Link
            href="/#planos"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FFBE33] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#183d47] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Conhecer a Plural
            <ArrowRight size={16} weight="bold" aria-hidden />
          </Link>
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-14">
            <p className="mb-5 text-sm font-bold uppercase tracking-wide text-[#276678]/55">
              Continue lendo
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {otherPosts.map((p, i) => (
                <BlogPostCard key={p.slug} post={p} delay={i * 70} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
