// Технологии и компетенции. Только то, что используется в проектах из кейсов.

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
    title: "Архитектура",
    icon: "Boxes",
    summary: "Продумываю систему до того, как её писать.",
    items: [
      "Архитектура систем и приложений",
      "Моделирование предметной области и данных",
      "Контракты API и вебхуков",
      "Аутентификация и ролевой доступ",
      "Кэширование и ревалидация",
      "Архитектура на базе CMS",
      "Интеграция с legacy-системами",
    ],
  },
  {
    id: "engineering",
    title: "Разработка",
    icon: "Code2",
    summary: "Full-stack на современном TypeScript-стеке.",
    items: [
      "Next.js App Router и React 19",
      "Node.js и TypeScript",
      "Payload CMS 3",
      "MongoDB",
      "REST API",
      "PWA и service workers",
      "WebXR (React Three Fiber)",
      "Мультиязычность (next-intl)",
    ],
  },
  {
    id: "infrastructure",
    title: "Инфраструктура",
    icon: "Server",
    summary: "Отвечаю за путь от коммита до продакшена.",
    items: [
      "Docker и Docker Compose",
      "Linux VPS",
      "Nginx",
      "CI/CD на GitHub Actions",
      "Реестр контейнеров (GHCR)",
      "S3-совместимые хранилища",
      "Задачи по расписанию (cron)",
    ],
  },
  {
    id: "product",
    title: "Продуктовая разработка",
    icon: "Compass",
    summary: "Превращаю задачу бизнеса в работающий продукт.",
    items: [
      "Архитектура продукта",
      "Разработка MVP",
      "Техническая стратегия",
      "Техническое SEO",
      "Производительность",
      "Функции на LLM (Gemini, OpenAI)",
      "Вывод в продакшен",
    ],
  },
];

export const cvSkills = [
  { group: "Frontend", items: "Next.js (App Router), React 19, Tailwind CSS, PWA, WebXR / React Three Fiber, next-intl" },
  { group: "Backend", items: "Node.js, TypeScript, Payload CMS 3, REST API, вебхуки, аутентификация и RBAC, OTP / OAuth" },
  { group: "Данные", items: "MongoDB, моделирование данных, агрегация и отчёты, S3-совместимые хранилища" },
  { group: "Инфраструктура", items: "Docker, Docker Compose, Linux VPS, Nginx, GitHub Actions, GHCR, cron" },
  { group: "Продукт", items: "Архитектура, запуск MVP, техническое SEO, производительность, интеграции с LLM" },
];
