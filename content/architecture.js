// Content of the /architecture page: the reference architecture used across the case studies.

export const systemCore = [
  { label: "Client", detail: "Browser · installable PWA · crawler" },
  { label: "Next.js App Router", detail: "Server Components, SSR/SSG, route handlers" },
  { label: "Business logic", detail: "Payload collections, hooks and access rules" },
  { label: "MongoDB", detail: "documents, relationships, indexes" },
];

export const systemAround = [
  { label: "CMS & admin", detail: "Payload admin panel — often the entire back office" },
  { label: "Authentication", detail: "Phone OTP, OAuth, email/password; role-based access" },
  { label: "Object storage", detail: "S3-compatible storage or Google Drive per file, local thumbnails" },
  { label: "Scheduled jobs", detail: "cron scripts for digests, imports, snapshots" },
  { label: "Notifications", detail: "Telegram with retries and a delivery log" },
  { label: "LLM APIs", detail: "Gemini / OpenAI for OCR, translation and summaries — cached, with fallbacks" },
];

export const database = {
  intro:
    "My recent products run on MongoDB through Payload CMS. The schema lives in code as typed collections, so the database stays flexible while the application enforces structure.",
  reasons: [
    { title: "Content-shaped data", body: "Orders with nested service lines, status histories, localized content and sessions with per-exercise metrics map naturally to documents." },
    { title: "Schema in code", body: "Collections, field validation and relationships are versioned with the application and generate TypeScript types." },
    { title: "Indexes for access patterns", body: "Queries are designed around indexed fields — e.g. a pre-computed listing rank instead of sorting at request time." },
    { title: "Aggregation for reporting", body: "Dashboards aggregate on the server through the Local API; heavier analytics are moved to aggregation pipelines." },
  ],
  tradeoff:
    "When a domain is dominated by multi-entity financial transactions or complex relational reporting, PostgreSQL is the better fit — and Payload's database adapter makes that switch a contained decision rather than a rewrite.",
};

export const caching = [
  { title: "HTTP & static assets", body: "Hashed build assets are cached long-term; HTML is revalidated." },
  { title: "Service worker", body: "Network-first for navigations, cache-first for hashed static files — fast repeat visits without stale pages." },
  { title: "On-demand revalidation", body: "Content changes refresh only the affected pages instead of rebuilding the site." },
  { title: "Computed on write", body: "Totals, balances, ratings and ranks are computed in hooks when data changes, so reads stay cheap." },
  { title: "Expensive results cached", body: "LLM insights are generated at most once per period and served from cache." },
  { title: "CDN", body: "Media and static assets belong behind a CDN once traffic justifies it." },
];

export const security = [
  { title: "Authentication", body: "Separate flows for customers (phone OTP, OAuth) and staff (email + password)." },
  { title: "Authorization", body: "Role-based and document-level access in Payload — partners and specialists see only their own records." },
  { title: "Validation", body: "Server-side validation on every write path, shared with the code that formats the data." },
  { title: "Rate limiting", body: "Global, per-IP and per-target limits on OTP and public endpoints; duplicate guards on webhooks." },
  { title: "Secrets", body: "Environment variables and CI secrets only — never in the repository." },
  { title: "Least privilege", body: "Public collections closed for create; only dedicated endpoints can write; audit logs are append-only." },
  { title: "Dependency updates", body: "Pinned framework versions, upgrades done deliberately and verified with a production build." },
];

export const deploymentFlow = [
  { label: "Git", detail: "push to main" },
  { label: "CI/CD", detail: "GitHub Actions" },
  { label: "Build", detail: "Next.js production build" },
  { label: "Docker", detail: "image → GHCR" },
  { label: "Production", detail: "VPS, Docker Compose" },
  { label: "Nginx", detail: "TLS, reverse proxy" },
  { label: "Next.js + Payload", detail: "app container" },
  { label: "MongoDB", detail: "container + volumes" },
];
