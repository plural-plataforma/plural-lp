import { AnimateIn } from "@/app/components/ui/AnimateIn";

export function SupportSection() {
  return (
    <section className="bg-[#f8f7fc] py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <AnimateIn direction="scale" className="mx-auto max-w-md rounded-3xl bg-white px-8 py-10 ring-1 ring-[#276678]/10 shadow-sm">
          <p className="mb-6 text-lg leading-relaxed text-[#276678] md:text-xl">
            <strong className="font-black">Ficou com alguma dúvida?</strong>
            <br />
            <span className="text-[#276678]/70">
              Chama o suporte no WhatsApp que a gente te ajuda!
            </span>
          </p>
          <a
            href="http://wa.link/v4o6em"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-bold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all hover:scale-[1.02] hover:bg-[#1da851] active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
              aria-hidden
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.44-1.43c1.37.73 2.92 1.15 4.55 1.15 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 14.04c-.23.65-1.33 1.24-1.82 1.31-.47.07-1.06.1-1.71-.11-.39-.13-.9-.3-1.55-.58-2.72-1.17-4.5-3.92-4.64-4.1-.13-.18-1.09-1.45-1.09-2.76 0-1.31.69-1.96.93-2.22.24-.26.52-.33.69-.33.17 0 .35.01.5.01.16 0 .38-.06.59.45.22.52.74 1.8.8 1.93.07.13.12.27.02.43-.09.16-.14.26-.27.4-.13.14-.28.31-.4.41-.13.1-.27.22-.12.43.15.21.68.97 1.46 1.57.99.8 1.83 1.05 2.09 1.17.26.12.41.1.56-.06.15-.16.65-.76.83-1.02.17-.26.35-.21.58-.13.23.08 1.47.69 1.72.82.25.12.42.18.48.28.07.1.07.57-.16 1.12z" />
            </svg>
            Chamar o suporte
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
