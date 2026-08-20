import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimateIn } from "@/app/components/ui/AnimateIn";
import { BlogPostCard } from "@/app/components/blog/BlogPostCard";
import { getArtigos } from "@/app/lib/artigos";

export async function BlogSection() {
  const artigos = await getArtigos();
  const featuredPosts = artigos.slice(0, 3);

  if (featuredPosts.length === 0) return null;

  return (
    <section id="blog" className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:mb-14 md:flex-row md:text-left">
          <div>
            <span className="mb-4 inline-block rounded-full bg-[#A786B6]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#A786B6]">
              Blog
            </span>
            <h2 className="text-3xl font-black leading-tight text-[#276678] md:text-4xl">
              Conteúdo prático para o seu dia a dia no AEE
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#276678] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#1b4a57]"
          >
            Ver todos os artigos
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </AnimateIn>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredPosts.map((post, i) => (
            <BlogPostCard key={post.slug} post={post} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
