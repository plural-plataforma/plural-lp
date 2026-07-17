"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, List, X } from "@phosphor-icons/react/dist/ssr";
import { APP_URL } from "@/app/lib/constants";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Time", href: "#time" },
  { label: "FAQ", href: "#faq" },
] as const;

type HeaderProps = {
  ctaHref: string;
};

export function Header({ ctaHref }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
      const el = document.documentElement;
      const max = el.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const transitionMs = reduceMotion ? 0 : 300;

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-100">
        <div className="pointer-events-auto mx-auto max-w-6xl px-3 pt-3 sm:px-4 md:px-6 md:pt-4">
          {/* Moldura em gradiente (ilha) */}
          <div
            className={`relative rounded-[1.35rem] p-px shadow-lg transition-[box-shadow,transform] duration-500 ease-out md:rounded-[1.65rem] ${
              scrolled
                ? "bg-linear-to-r from-[#A786B6] via-[#276678] to-[#FFBE33] shadow-[0_12px_40px_rgba(39,102,120,0.18)] md:scale-[0.99]"
                : "bg-linear-to-r from-[#A786B6]/50 via-[#276678]/45 to-[#FFBE33]/50 shadow-[0_8px_32px_rgba(39,102,120,0.1)]"
            }`}
          >
            <div
              className={`relative flex items-center justify-between gap-2 overflow-hidden rounded-[1.3rem] px-3 py-2.5 backdrop-blur-xl backdrop-saturate-150 sm:gap-3 sm:px-4 md:rounded-[1.6rem] md:px-5 md:py-3 ${
                scrolled ? "bg-white/92" : "bg-white/72"
              }`}
            >
              {/* Brilho interno sutil */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(120% 80% at 10% 0%, rgba(167,134,182,0.12), transparent 55%), radial-gradient(100% 60% at 100% 100%, rgba(255,190,51,0.08), transparent 50%)",
                }}
              />

              {/* Barra de progresso de leitura */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden bg-[#276678]/8"
                aria-hidden
              >
                <div
                  className="h-full origin-left bg-linear-to-r from-[#A786B6] via-[#276678] to-[#FFBE33] transition-[width] duration-150 ease-out"
                  style={{
                    width: `${progress}%`,
                    transitionDuration: reduceMotion ? "0ms" : undefined,
                  }}
                />
              </div>

              <a
                href="#"
                className="relative z-10 shrink-0 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                aria-label="Plural Plataforma — início"
              >
                <Image
                  src="/plural-logo-plus.png"
                  alt="Plural Plataforma"
                  width={132}
                  height={44}
                  className="h-9 w-auto sm:h-10 md:h-11"
                  priority
                />
              </a>

              {/* Nav desktop — pílulas */}
              <nav
                className="relative z-10 hidden items-center gap-0.5 rounded-full bg-[#276678]/[0.07] p-1 ring-1 ring-[#276678]/10 md:flex"
                aria-label="Navegação principal"
              >
                {navLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="group relative rounded-full px-3.5 py-2 text-sm font-bold text-[#276678]/85 transition-colors duration-200 hover:bg-white/95 hover:text-[#276678] hover:shadow-sm lg:px-4"
                  >
                    <span className="relative z-10">{label}</span>
                    <span
                      aria-hidden
                      className="absolute inset-x-2 -bottom-px h-0.5 scale-x-0 rounded-full bg-linear-to-r from-[#A786B6] to-[#FFBE33] transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                  </a>
                ))}
              </nav>

              <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-full px-4 py-2.5 text-sm font-bold text-[#276678] ring-1 ring-[#276678]/25 transition-all duration-200 hover:bg-[#276678]/8 hover:ring-[#276678]/40 active:scale-[0.97] md:flex"
                >
                  Entrar
                </a>
                <a
                  href={ctaHref}
                  target={ctaHref.startsWith("#") ? undefined : "_blank"}
                  rel={ctaHref.startsWith("#") ? undefined : "noopener noreferrer"}
                  className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#276678] to-[#3a8fa5] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_4px_20px_rgba(39,102,120,0.35)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(39,102,120,0.45)] active:scale-[0.97] md:flex lg:px-6"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-linear-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
                  />
                  <span className="relative">Quero começar</span>
                  <ArrowRight
                    size={18}
                    weight="bold"
                    className="relative transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>

                <button
                  type="button"
                  aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex size-10 items-center justify-center rounded-xl text-[#276678] ring-1 ring-[#276678]/12 transition-all hover:bg-[#276678]/8 hover:ring-[#276678]/20 active:scale-95 md:hidden"
                >
                  {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile imersivo */}
      <div
        className={`fixed inset-0 z-110 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none invisible"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-[#0f2a32]/60 backdrop-blur-md transition-opacity duration-300 ease-out"
          style={{ opacity: menuOpen ? 1 : 0, transitionDuration: `${transitionMs}ms` }}
          onClick={closeMenu}
        />
        <div
          className={`absolute inset-0 flex flex-col bg-linear-to-b from-[#276678] via-[#215a6a] to-[#183d47] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            reduceMotion ? "transition-opacity duration-200" : "transition-[clip-path,opacity] duration-500"
          }`}
          style={{
            opacity: menuOpen ? 1 : 0,
            ...(reduceMotion
              ? {}
              : { clipPath: menuOpen ? "circle(150% at 100% 0%)" : "circle(0% at 100% 0%)" }),
          }}
        >
          <div className="flex items-center justify-between px-5 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <div className="inline-flex items-center rounded-2xl bg-white/95 px-2.5 py-1.5 shadow-[0_6px_28px_rgba(0,0,0,0.18)] ring-1 ring-white/70">
              <Image
                src="/plural-logo-plus.png"
                alt="Plural Plataforma"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <button
              type="button"
              aria-label="Fechar menu"
              tabIndex={menuOpen ? undefined : -1}
              onClick={closeMenu}
              className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
            >
              <X size={24} weight="bold" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col justify-center gap-1 px-6 pb-12"
            aria-label="Menu mobile"
          >
            {navLinks.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                tabIndex={menuOpen ? undefined : -1}
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-4 text-2xl font-black leading-none text-white transition-all hover:bg-white/10 active:scale-[0.99]"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: reduceMotion ? "0ms" : "400ms",
                  transitionDelay: menuOpen ? `${120 + i * 55}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div
            className="flex flex-col gap-3 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transitionProperty: "opacity, transform",
              transitionDuration: reduceMotion ? "0ms" : "450ms",
              transitionDelay: menuOpen ? "380ms" : "0ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? undefined : -1}
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-2xl bg-white/10 py-4 text-base font-bold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 active:scale-[0.98]"
            >
              Entrar
            </a>
            <a
              href={ctaHref}
              target={ctaHref.startsWith("#") ? undefined : "_blank"}
              rel={ctaHref.startsWith("#") ? undefined : "noopener noreferrer"}
              tabIndex={menuOpen ? undefined : -1}
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFBE33] py-4 text-base font-black uppercase tracking-wide text-[#183d47] shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition-transform active:scale-[0.98]"
            >
              Quero começar agora
              <ArrowRight size={20} weight="bold" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
