// Technology and capability lists. Only tools used in the case-study projects are listed.

export const heroStack = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Payload CMS",
  "MongoDB",
  "Docker",
  "PWA",
  "WebXR",
];

export const capabilities = [
  {
    id: "architecture",
    title: "Architecture",
    icon: "Boxes",
    summary: "Shaping systems before writing them.",
    items: [
      "System & application architecture",
      "Domain & data modelling",
      "API & webhook contracts",
      "Authentication & role-based access",
      "Caching & revalidation",
      "CMS architecture",
      "Integrations with legacy systems",
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: "Code2",
    summary: "Full-stack delivery on a modern TypeScript stack.",
    items: [
      "Next.js App Router & React 19",
      "Node.js & TypeScript",
      "Payload CMS 3",
      "MongoDB",
      "REST APIs",
      "PWAs & service workers",
      "WebXR (React Three Fiber)",
      "i18n (next-intl)",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "Server",
    summary: "Owning the path from commit to production.",
    items: [
      "Docker & Docker Compose",
      "Linux VPS",
      "Nginx",
      "CI/CD with GitHub Actions",
      "Container registry (GHCR)",
      "S3-compatible storage",
      "Scheduled jobs (cron)",
    ],
  },
  {
    id: "product",
    title: "Product Engineering",
    icon: "Compass",
    summary: "Turning a business problem into a working product.",
    items: [
      "Product architecture",
      "MVP development",
      "Technical strategy",
      "Technical SEO",
      "Performance",
      "LLM features (Gemini, OpenAI)",
      "Production delivery",
    ],
  },
];

// Grouped list used on the printable CV.
export const cvSkills = [
  { group: "Frontend", items: "Next.js (App Router), React 19, Tailwind CSS, PWA, WebXR / React Three Fiber, next-intl" },
  { group: "Backend", items: "Node.js, TypeScript, Payload CMS 3, REST APIs, webhooks, auth & RBAC, OTP / OAuth" },
  { group: "Data", items: "MongoDB, data modelling, aggregation & reporting, S3-compatible storage" },
  { group: "Infrastructure", items: "Docker, Docker Compose, Linux VPS, Nginx, GitHub Actions, GHCR, cron" },
  { group: "Product", items: "Architecture, MVP delivery, technical SEO, performance, LLM integrations" },
];
