const API_URL = process.env.API_URL;

export type ArtigoResumo = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string | null;
  autor: string;
  tempoLeituraMinutos: number;
  imagemCapaUrl: string | null;
  publicadoEm: string;
};

export type ArtigoDetalhe = ArtigoResumo & {
  conteudo: string;
};

type ServiceResponse<T> = {
  sucesso: boolean;
  mensagens: string[];
  objeto?: T;
};

// Revalida a cada 5 min — publicação no admin aparece na LP sem precisar de novo deploy.
const REVALIDATE_SECONDS = 300;

export async function getArtigos(): Promise<ArtigoResumo[]> {
  if (!API_URL) return [];

  try {
    const response = await fetch(`${API_URL}/publico/artigos`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) return [];

    const data = (await response.json()) as ArtigoResumo[] | ServiceResponse<ArtigoResumo[]>;
    return Array.isArray(data) ? data : (data.objeto ?? []);
  } catch {
    return [];
  }
}

export async function getArtigoPorSlug(slug: string): Promise<ArtigoDetalhe | null> {
  if (!API_URL) return null;

  try {
    const response = await fetch(`${API_URL}/publico/artigos/${slug}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) return null;

    const data = (await response.json()) as ArtigoDetalhe | ServiceResponse<ArtigoDetalhe>;
    return "conteudo" in data ? data : (data.objeto ?? null);
  } catch {
    return null;
  }
}

export function formatArtigoDate(isoDate: string): string {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(isoDate));
}

export function formatArtigoReadTime(minutos: number): string {
  return `${minutos} min de leitura`;
}

const CATEGORY_COLOR_PALETTE = [
  "bg-[#A786B6]/15 text-[#7D5F94]",
  "bg-[#276678]/10 text-[#276678]",
  "bg-[#FFBE33]/20 text-[#D99C1A]",
];

// Categorias vêm do admin (texto livre) — sem paleta fixa, atribui cor por hash do nome
// pra manter a mesma cor sempre pra mesma categoria sem precisar cadastrar cores.
export function getArtigoCategoryColor(categoria: string | null): string {
  if (!categoria) return CATEGORY_COLOR_PALETTE[1];
  let hash = 0;
  for (let i = 0; i < categoria.length; i++) {
    hash = (hash * 31 + categoria.charCodeAt(i)) >>> 0;
  }
  return CATEGORY_COLOR_PALETTE[hash % CATEGORY_COLOR_PALETTE.length];
}
