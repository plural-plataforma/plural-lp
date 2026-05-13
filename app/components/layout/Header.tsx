"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos",          href: "#planos"          },
  { label: "Time",            href: "#time"            },
  { label: "FAQ",             href: "#faq"             },
];

export function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-[0_2px_20px_rgba(39,102,120,0.10)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">

          {/* Logo */}
          <a href="#" aria-label="Plural Plataforma — início">
            <Image
              src="/plural-logo-plus.png"
              alt="Plural Plataforma"
              width={140}
              height={46}
              style={{ width: 140, height: "auto" }}
              priority
            />
          </a>

          {/* Nav — desktop */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[#276678] transition-colors hover:bg-[#276678]/8 hover:text-[#276678]"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#inscricao"
              className="hidden items-center rounded-xl bg-[#276678] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#1b4a57] hover:shadow-md active:scale-[0.97] md:flex"
            >
              Quero começar
            </a>

            {/* Hamburger — mobile */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-xl text-[#276678] transition-colors hover:bg-[#276678]/8 md:hidden"
            >
              {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-x-0 top-[57px] z-40 overflow-hidden border-t border-[#276678]/10 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96 shadow-[0_8px_30px_rgba(39,102,120,0.12)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 pb-6 pt-4" aria-label="Menu mobile">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-[#276678] transition-colors hover:bg-[#276678]/6"
            >
              {label}
            </a>
          ))}
          <a
            href="#inscricao"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center rounded-xl bg-[#276678] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1b4a57]"
          >
            Quero começar agora
          </a>
        </nav>
      </div>

      {/* Overlay para fechar clicando fora — mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          aria-hidden
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
