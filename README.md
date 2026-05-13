# Plural — Landing Page

Landing page institucional da **Plural Plataforma**, construída com Next.js (App Router) + Tailwind CSS v4.

## Sobre o produto

A Plural é uma plataforma SaaS de **acompanhamento pedagógico** voltada a professoras — especialmente da educação especial (PAEE). Permite cadastrar escolas e alunos, elaborar planos individualizados (PAEE), aplicar avaliações diagnósticas e gerar relatórios em PDF.

## Stack

| Item | Tecnologia |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Linguagem | TypeScript 5 |
| Fonte | Nunito (Google Fonts) |

## Identidade visual

| Token | Cor |
|-------|-----|
| `--color-primary` (teal) | `#276678` |
| `--color-amber` (logo) | `#FFBE33` |
| `--color-purple` (accent) | `#8B7BAB` |
| `--color-success` | `#28a745` |
| `--color-danger` | `#FF0000` |

Todos os tokens estão em `app/globals.css` e expostos via `@theme` para uso direto nas classes Tailwind (ex.: `bg-primary`, `text-amber`, `border-purple`).

## Desenvolvimento

```bash
npm run dev      # inicia em http://localhost:3000
npm run build    # build de produção
npm run lint     # ESLint
```

## Relação com o monorepo principal

O produto vive em `/workspace/project` — monorepo Turborepo com:
- `apps/web-app` — app da professora (Vite + React 19 + Tailwind 4)
- `apps/api-node` — API Fastify (professoras)
- `apps/api-admin` — API Fastify (admin / Hotmart / Supabase)
- `apps/mobile` — Expo 54
- `packages/db` — Prisma + PostgreSQL
