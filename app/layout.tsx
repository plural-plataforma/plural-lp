import type { Metadata, Viewport } from "next";
import { Nunito, Inter, Lato } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const viewport: Viewport = {
  themeColor: "#276678",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pluralplataforma.com"),

  title: {
    default: "Plural Plataforma — A 1ª plataforma exclusiva para professoras do AEE",
    template: "%s | Plural Plataforma",
  },

  description:
    "Pare de perder horas com burocracia e volte seu tempo para o que realmente importa: o aluno. A Plural centraliza PAEE, Avaliação Diagnóstica, Banco de Habilidades, relatórios e acompanhamento pedagógico em um só lugar.",

  keywords: [
    "AEE",
    "PAEE",
    "plataforma AEE",
    "educação especial",
    "sala de recursos multifuncionais",
    "avaliação diagnóstica",
    "planejamento educacional individualizado",
    "professora AEE",
    "relatório pedagógico",
    "inclusão escolar",
    "educação inclusiva",
    "acompanhamento de alunos com deficiência",
    "TEA",
    "neurodivergente",
    "plural plataforma",
  ],

  authors: [{ name: "Plural Plataforma", url: "https://pluralplataforma.com" }],
  creator: "Plural Plataforma",
  publisher: "Plural Plataforma",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://pluralplataforma.com",
    languages: { "pt-BR": "https://pluralplataforma.com" },
  },

  openGraph: {
    title: "Plural Plataforma — Sua rotina no AEE muito mais leve",
    description:
      "A 1ª plataforma exclusiva para professoras do AEE. PAEE pronto em minutos, relatórios sem sofrimento e mais tempo para o aluno.",
    url: "https://pluralplataforma.com",
    siteName: "Plural Plataforma",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Plural Plataforma — A 1ª plataforma exclusiva para professoras do AEE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Plural Plataforma — Sua rotina no AEE muito mais leve",
    description:
      "A 1ª plataforma exclusiva para professoras do AEE. PAEE, relatórios e acompanhamento em um só lugar.",
    images: ["/opengraph-image.png"],
    creator: "@pluralplataforma",
    site: "@pluralplataforma",
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} ${inter.variable} ${lato.variable} ${nunito.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
