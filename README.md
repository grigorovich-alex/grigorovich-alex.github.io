# Alexey Grigorovich

**Software Architect · CTO · Lead Developer**

I design, build and scale modern web products — from product architecture and technical strategy to production infrastructure and delivery.

🌐 **Portfolio:** [grigorovich-alex.github.io](https://grigorovich-alex.github.io) · 📄 **CV:** [/cv](https://grigorovich-alex.github.io/cv/)

---

## About

Software engineer and technical architect focused on building scalable web products, SaaS platforms and marketplace solutions. My focus is not only writing code, but designing systems that are scalable, maintainable, secure, SEO-friendly and performance-oriented.

## What I do

- **Architecture** — system and data design, API and webhook contracts, auth and role-based access, migrations off legacy systems
- **Engineering** — Next.js App Router, React 19, Node.js, TypeScript, Payload CMS 3, MongoDB, PWAs, WebXR
- **Infrastructure** — Docker, Linux VPS, Nginx, GitHub Actions, GHCR, S3-compatible storage, cron
- **Product engineering** — MVPs, technical SEO, performance, LLM features (Gemini, OpenAI)

## Selected engineering work

| Project | What it shows |
|---|---|
| [Diamitry — Translation Bureau Platform](https://grigorovich-alex.github.io/projects/diamitry/) | Multilingual site, client PWA and internal CRM built and operated by one engineer; gradual migration off a legacy PHP CRM, 37,000+ files imported |
| [Multi-locale Classifieds Marketplace](https://grigorovich-alex.github.io/projects/marketplace/) | Lead developer in a team of 5: SEO landing pages from nested filters in 3 locales, advertiser dashboard, OTP rate limiting, pre-computed ranking |
| [VR Rehabilitation Platform](https://grigorovich-alex.github.io/projects/healthy/) | WebXR exercises for children with cerebral palsy → typed metrics contract → automatic clinical scale scoring → specialist dashboard |
| [Text & Seal](https://grigorovich-alex.github.io/projects/textandseal/) | Focused bilingual product launch: route wizard, transparent pricing, orders to Telegram without a database |

## Architecture

```
Browser / PWA
   ↓
Next.js App Router (Server Components)
   ↓
Payload CMS 3 — collections, hooks, access control
   ↓
MongoDB
   ↓
Docker · Nginx · GitHub Actions → GHCR → VPS
```

More: [architecture overview](https://grigorovich-alex.github.io/architecture/).

## Performance

Server Components by default, business values computed on write (totals, ratings, ranks), service-worker caching for PWAs, on-demand revalidation instead of full rebuilds, inline SVG instead of chart libraries.

## Technologies

`Next.js` `React` `Node.js` `TypeScript` `Payload CMS` `MongoDB` `Tailwind CSS` `next-intl` `PWA` `WebXR` `React Three Fiber` `Docker` `Nginx` `GitHub Actions` `S3`

## Engineering principles

1. **Architecture before implementation** — boundaries, data ownership, contracts, failure modes.
2. **Complexity must be justified** — the simplest architecture that works, until proven otherwise.
3. **Production is part of development** — deployed, observable and recoverable, or not done.
4. **Performance is a feature** — LCP, CLS, INP, TTFB and bundle size are design inputs.

## Current focus

Product platforms on Next.js + Payload CMS, legacy-system migrations, and practical LLM features inside business tools.

## Contact

- Email: [grigorovich.alex@icloud.com](mailto:grigorovich.alex@icloud.com)
- Telegram: [@honey_badger_pln](https://t.me/honey_badger_pln)
- Languages: Russian (native), English (B1)

---

## About this repository

Source of the portfolio site: a static Next.js App Router project (JavaScript, Tailwind CSS, lucide-react), exported to plain HTML and deployed to GitHub Pages by GitHub Actions.

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Production

```bash
pnpm build   # static export to ./out
pnpm start   # only for non-export hosting; for Pages, serve ./out
```

### Structure

```
app/          routes, metadata, sitemap, robots, /og.png
components/   layout · navigation · sections · projects · architecture · ui
content/      all texts and data: site, skills, projects, experience, principles, architecture
lib/          metadata and JSON-LD helpers
```

Content is separated from UI: edit `content/*.js` to change texts. Fields still to be filled are listed in [CONTENT_TODO.md](CONTENT_TODO.md).

### Hosting elsewhere

The export in `out/` is plain static files, so it also works on Vercel or behind Nginx on a VPS. Set `NEXT_PUBLIC_SITE_URL` to the final domain before building so canonical URLs, sitemap and Open Graph point to it.
