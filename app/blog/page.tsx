import type { Metadata } from "next";
import { BlogPostCard } from "@/app/components/blog/BlogPostCard";
import { getArtigos } from "@/app/lib/artigos";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo prático sobre AEE, PAEE, Estudo de Caso e rotina pedagógica para professoras da Educação Especial.",
};

export default async function BlogPage() {
  const blogPosts = await getArtigos();

  return (
    <div className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center md:mb-14">
          <span className="mb-4 inline-block rounded-full bg-[#A786B6]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#A786B6]">
            Blog
          </span>
          <h1 className="mb-4 text-3xl font-black leading-tight text-[#276678] md:text-4xl">
            Conteúdo prático para o seu dia a dia no AEE
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#276678]/75 md:text-lg">
            Artigos sobre Estudo de Caso, PAEE e boas práticas, escritos por quem vive o
            Atendimento Educacional Especializado todos os dias.
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <p className="text-center text-base text-[#276678]/60">
            Em breve, novos artigos por aqui.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogPostCard key={post.slug} post={post} delay={i * 70} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
