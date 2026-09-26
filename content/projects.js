// Case studies. Facts come from the projects' own code and architecture notes;
// anything not verifiable there is left out or listed in CONTENT_TODO.md.
//
// Diagram format: { title, caption?, nodes: [{ label, detail? }] } — rendered top-to-bottom.

export const projects = [
  {
    slug: "diamitry",
    title: "Diamitry — Translation Bureau Platform",
    shortTitle: "Diamitry",
    type: "Product platform · Architecture & full-stack",
    status: "In production",
    role: "Architect & sole developer",
    stack: ["Next.js 16", "React 19", "Payload CMS 3", "MongoDB", "next-auth", "PWA", "Docker", "GitHub Actions", "Gemini API"],
    summary:
      "End-to-end platform for a translation bureau: a multilingual marketing site, a client PWA for placing and tracking orders, and an internal CRM that replaced a legacy system — designed, built and operated by one engineer.",
    highlights: [
      "Marketing site in 5 locales with CMS-driven service pages and blog",
      "Client PWA with phone + SMS one-time-code login",
      "Internal CRM on Payload: 20+ collections, invoices, payments, analytics",
      "Migration off a legacy PHP CRM, incl. 37,000+ order files",
      "Self-hosted Docker deployment with CI/CD via GHCR",
    ],
    links: [{ label: "Live site", href: "https://xn--80ahmbags7ar.xn--p1ai" }],
    overview:
      "Diamitry is a translation bureau. The platform covers the whole customer journey: a public site that brings in leads, a mobile-first client app where customers upload documents and follow their orders, and a CRM where the team runs orders, invoices, payments and reporting. It started on top of an existing third-party PHP CRM and was gradually moved to a CRM built on the same stack as the rest of the platform.",
    problem:
      "Orders, files and client communication were spread between a legacy CRM, messengers and email. The bureau needed a single system where every order has one source of truth, clients can self-serve, and the team sees the pipeline and money in real time — without a big-bang rewrite that would stop the business.",
    constraints: [
      "One engineer for product, code and operations",
      "The business keeps running during migration — no downtime window",
      "Legacy CRM stays live in parallel until the new one takes over",
      "Shared 4 GB VPS without swap: memory budgets matter",
      "Clients sign in with a phone number, not email",
    ],
    diagrams: [
      {
        title: "Platform",
        caption: "Two Next.js + Payload applications with their own databases, connected through webhooks.",
        nodes: [
          { label: "Marketing site & client PWA", detail: "Next.js App Router · next-intl · service worker" },
          { label: "Application layer", detail: "Payload CMS 3 in the same Next.js app · next-auth (phone OTP)" },
          { label: "MongoDB", detail: "orders, users, services, tracking events" },
          { label: "Webhooks & sync", detail: "orders, leads, statuses and files pushed to the CRM" },
          { label: "Internal CRM", detail: "Payload admin as the whole UI · own MongoDB" },
        ],
      },
      {
        title: "Order lifecycle in the CRM",
        nodes: [
          { label: "Lead", detail: "landing-page webhook with per-source secret" },
          { label: "Order", detail: "services × quantity × price → amount" },
          { label: "Invoice", detail: "numbering from settings, VAT, status events" },
          { label: "Payments", detail: "recalculate invoice status and order balance" },
          { label: "Notifications", detail: "Telegram + notification log" },
        ],
      },
    ],
    decisions: [
      {
        title: "Payload CMS inside Next.js instead of a separate backend",
        body: "Admin UI, auth, REST API, typed collections and hooks come from one package that runs in the same App Router app. For a one-person team this removes a whole service to build, deploy and keep in sync.",
      },
      {
        title: "Strangler-style migration off the legacy CRM",
        body: "First a custom PHP bridge plugin (token-protected endpoints) let the new app read and write the old CRM. Then the new CRM took over entity by entity, with a sync from the client app. The business never had a cut-over day.",
      },
      {
        title: "Business rules in collection hooks",
        body: "Order totals, invoice numbering and VAT, payment reconciliation, status history and lead time are computed in beforeChange/afterChange hooks. Every write path — admin UI, REST, webhooks — goes through the same rules.",
      },
      {
        title: "Order statuses as data, not an enum",
        body: "Statuses live in an editable collection with colour, sort order and a behaviour flag (active / done / canceled). Analytics and funnels read the behaviour flag, so the team can rename or add statuses without code changes.",
      },
      {
        title: "Inline SVG charts, no chart library",
        body: "The CRM dashboard (KPIs, funnel, invoice donut, revenue by month, team load, lead-time stats) is a React Server Component querying Payload's Local API and drawing SVG directly — no client-side charting bundle.",
      },
      {
        title: "LLM features with fallbacks and caching",
        body: "Gemini powers OCR of uploaded documents and an 'AI manager' that summarises metrics against goals. Insights are cached and generated at most once a day per scope; if the model fails, a non-AI summary is returned instead.",
      },
    ],
    dataModel: [
      { name: "clients · leads · sources", detail: "Who the customer is and which channel brought them; per-source webhook secrets." },
      { name: "orders · order-statuses", detail: "Services, amount, deadline, manager, status history with timestamps and lead time." },
      { name: "invoices · payments", detail: "Invoice numbering, VAT, paid / partially paid / overdue, recalculated from payments." },
      { name: "order-activity · order-messages", detail: "Immutable activity log and per-order team discussion." },
      { name: "media", detail: "Files stored on disk or Google Drive per file; OCR text extracted." },
      { name: "goals · ai-tasks · ai-insights", detail: "Targets, recommendations turned into tasks, cached AI summaries." },
      { name: "users · team-members · partners", detail: "Roles: admin, team, partner — partners see only their own data." },
    ],
    performance: [
      "Service worker: network-first for navigations, cache-first for hashed static assets",
      "Server Components and Payload Local API for dashboards — no extra HTTP hop, no client charting library",
      "Node heap and container memory limits tuned for a shared 4 GB host",
      "Thumbnails always served locally; Drive originals cached on disk",
    ],
    security: [
      "Phone + SMS one-time-code sign-in for clients; separate email/password auth for staff",
      "Role-based access in Payload (admin / team / partner) with document-level filters",
      "Lead webhooks: per-source secret, active-flag check, 60-second duplicate guard",
      "Public create on leads closed — only the webhook can write them",
      "Immutable activity log (create allowed, update closed)",
      "Secrets only in environment variables and CI secrets",
    ],
    deployment: {
      nodes: [
        { label: "git push to main" },
        { label: "GitHub Actions", detail: "build Docker image" },
        { label: "GHCR", detail: "container registry" },
        { label: "VPS over SSH", detail: "update compose, restart containers" },
        { label: "Nginx → Next.js + Payload", detail: "MongoDB 7 container, persistent media volume" },
      ],
      notes: "Moved from Vercel to self-hosting in August 2026 to keep the database, files and legacy CRM on one controlled host.",
    },
    challenges: [
      "Running two CRMs in parallel without data drift during the migration",
      "Importing 37,000+ historical order files and attaching them to the right orders",
      "Keeping a Next.js + Payload build and runtime inside a tight memory budget",
      "Designing analytics that stay correct when the team edits statuses",
    ],
    improvements: [
      "Move long-running imports and AI jobs to a proper job queue instead of cron scripts",
      "Add automated tests around invoice and payment reconciliation hooks",
      "Replace browser-side aggregation in the analytics builder with MongoDB aggregation pipelines",
      "Structured observability (logs, error tracking, uptime) instead of Telegram-only alerts",
    ],
  },
  {
    slug: "marketplace",
    title: "Multi-locale Classifieds Marketplace",
    shortTitle: "Marketplace",
    type: "Client project · Lead Developer",
    status: "Client project · team of 5",
    role: "Lead Developer",
    stack: ["Next.js 15", "React 19", "Payload CMS 3", "MongoDB", "next-intl", "Tailwind CSS", "S3", "GitHub Actions"],
    summary:
      "Content-heavy directory marketplace for the Czech market in three languages: businesses and individual providers publish listings, visitors search with deep SEO-friendly filters, and advertisers run their profiles from a self-service dashboard.",
    highlights: [
      "27 Payload collections: listings, services, locations, reviews, discounts",
      "Nested filter URLs rendered on the server as indexable landing pages",
      "Per-locale sitemaps, hreflang alternates and canonical URLs (cs / en / ru)",
      "Phone OTP and Google sign-in with layered rate limiting",
      "Pre-computed listing ranking with promoted slots per page",
    ],
    links: [],
    confidential: "Client and brand name are withheld at the client's discretion.",
    overview:
      "A directory marketplace where two kinds of advertisers — venues and independent providers — publish profiles with services, prices, schedules, photos and discounts, while visitors browse by category, location and service, read reviews and follow profiles. I led development in a team of five contributors.",
    problem:
      "Organic search is the main acquisition channel, so every meaningful combination of category, service and location needs its own fast, indexable page with unique text — in three languages. At the same time advertisers need to manage their own content without an operator in the loop.",
    constraints: [
      "Three locales from day one: Czech (primary), English, Russian",
      "Thousands of filter combinations must stay crawlable and canonical",
      "Advertiser content changes constantly — pages must refresh without full rebuilds",
      "SMS verification costs money and invites abuse",
      "A team of five working in one codebase",
    ],
    diagrams: [
      {
        title: "Request path",
        nodes: [
          { label: "Browser / crawler", detail: "localized URL: /[locale]/category/[...filters]" },
          { label: "Next.js App Router", detail: "server-rendered listing & profile pages, next-intl" },
          { label: "Filter & SEO layer", detail: "slug lookup → query + per-location SEO text + canonical/hreflang" },
          { label: "Payload CMS 3", detail: "collections, access control, hooks, admin" },
          { label: "MongoDB", detail: "listings, taxonomy, reviews, ranking fields" },
        ],
      },
      {
        title: "Media",
        nodes: [
          { label: "Advertiser upload", detail: "dashboard" },
          { label: "Payload media collection" },
          { label: "S3-compatible storage", detail: "@payloadcms/storage-s3" },
        ],
      },
    ],
    decisions: [
      {
        title: "Filters as path segments, not query strings",
        body: "Catch-all routes turn category / service / location combinations into clean, localized paths. A slug lookup layer maps them back to queries and to hand-written SEO text for each service × location pair, so each landing page is unique and indexable.",
      },
      {
        title: "Ranking computed on write, not on read",
        body: "Listing order (promoted slots per page plus regular listings) is recomputed in the background with a debounce and a single-flight guard, then stored as a rank field. Listing pages just sort by an indexed number.",
      },
      {
        title: "On-demand revalidation",
        body: "A revalidation endpoint lets content changes refresh the affected pages without rebuilding the site.",
      },
      {
        title: "Layered OTP rate limiting",
        body: "One-time codes are limited globally, per IP and per phone range; suspicious requests get a fake success response so attackers learn nothing, and SMS spend stays bounded.",
      },
      {
        title: "Payload as the backbone for both admin and advertisers",
        body: "The operator admin is Payload's panel; the advertiser dashboard (profile, staff, timetable, discounts, verification) is a custom front end over the same collections and access rules.",
      },
    ],
    dataModel: [
      { name: "venues · providers", detail: "Two advertiser types with profiles, staff, schedules and verification." },
      { name: "services · service groups · categories · tags", detail: "Taxonomy that drives filters and SEO landing pages." },
      { name: "regions · locations", detail: "Geographic hierarchy with address suggestions and maps." },
      { name: "SEO texts", detail: "Unique copy per service × location combination." },
      { name: "reviews · review comments · reactions", detail: "User reviews with automatic rating recalculation." },
      { name: "discounts · follows · notifications", detail: "Promotions, subscriptions to profiles and alerts." },
      { name: "public users · OTP codes · reports", detail: "Visitor accounts, verification codes and moderation reports." },
    ],
    performance: [
      "Server-side rendering for all listing and profile pages",
      "Pagination with pre-computed rank instead of sorting at request time",
      "Media offloaded to S3-compatible storage",
      "On-demand revalidation instead of full rebuilds",
    ],
    security: [
      "Phone OTP and Google OAuth for visitors; separate admin auth",
      "OTP limits: global, per IP, per phone range, with decoy responses",
      "Age gate and user-driven reporting for moderation",
      "Collection-level access control in Payload",
    ],
    deployment: {
      nodes: [
        { label: "git push" },
        { label: "GitHub Actions", detail: "package sources" },
        { label: "VPS", detail: "install & build on the server" },
        { label: "Next.js + Payload", detail: "MongoDB, S3 media" },
      ],
      notes: "Build-on-server pipeline chosen for a simple single-VPS setup.",
    },
    challenges: [
      "Keeping thousands of filter URLs canonical across three locales",
      "Ranking that is fair to promoted and regular listings on every page",
      "Coordinating a five-person team on one Payload schema",
    ],
    improvements: [
      "Build a Docker image in CI instead of building on the production server",
      "Move deploy credentials to SSH keys in CI secrets and rotate them",
      "Add a CDN in front of media and static assets",
      "Automated tests for filter-to-URL mapping and ranking",
    ],
  },
  {
    slug: "healthy",
    title: "VR Rehabilitation Platform for Children with Cerebral Palsy",
    shortTitle: "VR Rehab",
    type: "Research product · Technical lead",
    status: "MVP in development",
    role: "Technical lead: architecture & development",
    stack: ["WebXR", "React Three Fiber", "three.js", "Next.js 16", "Payload CMS 3", "MongoDB", "Meta Quest 3"],
    summary:
      "Game-based VR exercises for children with cerebral palsy that capture movement metrics automatically and turn them into an objective progress score for the rehabilitation specialist.",
    highlights: [
      "Contract-first design: exercise → metrics → clinical scale",
      "WebXR scenes that run in the Quest 3 browser and in a desktop emulator",
      "Automatic sub-scores for a 20-item, 5-domain assessment scale",
      "Specialist dashboard, per-patient analytics and printable course report",
      "Role-based access: admin, specialist, parent",
    ],
    links: [],
    overview:
      "A child plays short movement games in a VR headset. Each game records motion metrics — reaction time, amplitude, accuracy, smoothness, symmetry. The backend aggregates sessions, pre-fills the clinical assessment scale where metrics map directly to items, and the specialist confirms scores and follows the dynamics over a 6–8 week course.",
    problem:
      "Progress in rehabilitation is usually judged by observation. The research team had a methodology, an exercise catalogue and an assessment scale on paper; they needed software that captures objective digital metrics during play and connects them to that scale.",
    constraints: [
      "Children with impaired grip — hand tracking instead of controllers",
      "Standalone headset, no gaming PC",
      "Medical data of minors: strict access control, encryption planned",
      "Clinical scale thresholds are owned by the clinical lead, not by code",
      "Must be testable without a headset during development",
    ],
    diagrams: [
      {
        title: "Data flow",
        nodes: [
          { label: "VR exercise (WebXR, R3F)", detail: "Quest 3 browser · hand tracking" },
          { label: "Session contract", detail: "typed metrics per exercise, stable slugs" },
          { label: "POST /api/sessions", detail: "Payload Local API" },
          { label: "Scale hook", detail: "metric → scale item mapping, sub-scores, total 0–80" },
          { label: "Specialist dashboard", detail: "dynamics T0 → T3, report" },
        ],
      },
    ],
    decisions: [
      {
        title: "Data contract before any game",
        body: "The shape of a session — exercises, difficulty, duration and typed metrics with stable keys — was fixed first and shared by the VR code and the backend. Games became interchangeable producers of that contract.",
      },
      {
        title: "WebXR instead of Unity",
        body: "Exercises are simple scenes, so heavy physics isn't needed. WebXR runs natively in the Quest browser, can be tested in a desktop emulator, and keeps the headset app, API and dashboard in one TypeScript repository. Unity stays as a fallback if tracking performance becomes a limit.",
      },
      {
        title: "Scale scoring in a collection hook",
        body: "The assessment collection computes five domain sub-scores, the total and its interpretation on every save, so the admin UI, the API and the seed script always produce consistent results.",
      },
      {
        title: "Automation only where the metric is objective",
        body: "Items with a direct metric (amplitude, accuracy, symmetry, weight shift) get a draft score; subjective items remain manual. The specialist always confirms.",
      },
      {
        title: "Sensor simulator for development",
        body: "A simulator produces hand kinematics, jerk, physiological tremor, heart rate and fatigue, so analytics and dashboards can be built and demonstrated before the hardware pipeline is complete.",
      },
    ],
    dataModel: [
      { name: "users", detail: "Roles admin / specialist / parent." },
      { name: "patients", detail: "Anonymous code, clinical classification (GMFCS, MACS), affected side, lead specialist." },
      { name: "courses", detail: "Course dates, goal, assigned exercises and progress." },
      { name: "sessions", detail: "Assessment point, device, exercises[] with metrics — 1:1 with the contract." },
      { name: "scale-assessments", detail: "20 items in 5 domains, auto-computed sub-scores and total." },
      { name: "patient-notes", detail: "Dated specialist observations between assessment points." },
    ],
    performance: [
      "Lightweight scenes; three.js pinned to a single version to avoid duplicate bundles",
      "Raw trajectories referenced from file storage, not stored in the main database",
      "Charts built from small theme-aware primitives instead of a charting library",
    ],
    security: [
      "Specialists see only their own patients; admins see the clinic",
      "Patients stored under anonymous codes",
      "Field-level encryption of medical data planned before pilot",
      "Session time limits and stop control are part of clinical requirements",
    ],
    deployment: {
      nodes: [
        { label: "Monorepo", detail: "VR scenes + API + dashboard" },
        { label: "Next.js + Payload build" },
        { label: "MongoDB" },
      ],
      notes: "Production hosting will be chosen for the clinical pilot; currently runs in development and demo environments.",
    },
    challenges: [
      "Translating clinical descriptions into measurable, stable metrics",
      "Keeping exercises safe and engaging for children with different motor profiles",
      "Designing a dashboard that clinicians trust: drafts, not verdicts",
    ],
    improvements: [
      "Real hand-trajectory capture for smoothness and affected-hand usage",
      "Adaptive difficulty engine based on recent sessions",
      "Encryption at rest and audit log for medical data",
      "Live session monitoring over WebSocket",
    ],
  },
  {
    slug: "textandseal",
    title: "Text & Seal — Documents from Russia, Handled in San Francisco",
    shortTitle: "Text & Seal",
    type: "Product launch · Design & development",
    status: "Launch stage",
    role: "Product, design and development",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "next-intl", "PWA"],
    summary:
      "A focused bilingual site for people in San Francisco who need Russian civil documents: a step-by-step route wizard explains the chain — power of attorney, apostille, translation — and shows a transparent price receipt before the order.",
    highlights: [
      "Route wizard that builds the document chain for each case",
      "Live price receipt from a typed pricing config",
      "Russian and English, SEO metadata, installable PWA",
      "Orders delivered to the manager's Telegram with honeypot and validation",
    ],
    links: [],
    overview:
      "A small product built from scratch around one flow: understand which documents are needed, what the steps are and what it costs, then place a request. Everything else on the site supports that form.",
    problem:
      "Getting documents from Russian registry offices while living in the US is confusing: people don't know which steps apply to them or what the total cost will be. Generic translation-agency sites don't answer that.",
    constraints: [
      "No invented prices, office or guarantees — only verifiable information",
      "Two languages with the same structure",
      "Minimal operations: no database or admin to maintain at launch",
    ],
    diagrams: [
      {
        title: "Order flow",
        nodes: [
          { label: "Route wizard", detail: "document type, steps, options" },
          { label: "Price receipt", detail: "computed from pricing config" },
          { label: "Route handler /api/order", detail: "validation, honeypot" },
          { label: "Telegram", detail: "message to the manager's topic" },
        ],
      },
    ],
    decisions: [
      {
        title: "No database at launch",
        body: "Requests go straight to the manager's Telegram topic. If delivery isn't configured or fails, the API answers with an explicit error and the form offers email — a request is never lost silently.",
      },
      {
        title: "Pricing as typed configuration",
        body: "Prices live in one config file used by both the wizard and the receipt, so a price change is a one-line edit.",
      },
      {
        title: "Server-side validation shared with formatting",
        body: "One module validates the order and formats the message, keeping the API and the notification in sync.",
      },
    ],
    dataModel: [
      { name: "order (in-memory)", detail: "Contact, documents, route steps, options, locale — validated, never stored." },
      { name: "pricing config", detail: "Services and prices shared by wizard and receipt." },
    ],
    performance: [
      "Mostly static pages; the wizard is the only interactive island",
      "Generated icons and Open Graph images, no raster assets to load",
    ],
    security: [
      "Honeypot field against bots",
      "Strict server-side validation with field-level errors",
      "Bot token and chat IDs only in environment variables",
    ],
    deployment: {
      nodes: [{ label: "Next.js 16 build" }, { label: "Node.js hosting" }],
      notes: "Small footprint: one Next.js app, no database.",
    },
    challenges: ["Explaining a bureaucratic multi-step process in a single, calm flow"],
    improvements: ["Store requests in a CRM and add status tracking for clients", "Online payment after the manager confirms the route"],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
