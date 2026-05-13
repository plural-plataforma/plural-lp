const items = Array(10).fill("ENTRAR NA PLATAFORMA");

export function TickerSection() {
  return (
    <div className="overflow-hidden bg-[#276678] py-5">
      <div className="flex w-max animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="mx-4 flex shrink-0 items-center gap-4 text-base font-black uppercase tracking-[0.2em] text-white md:text-lg"
          >
            {item}
            <span className="size-2 rounded-full bg-[#FFBE33]" />
          </span>
        ))}
      </div>
    </div>
  );
}
