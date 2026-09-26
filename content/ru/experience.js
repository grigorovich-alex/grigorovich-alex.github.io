import { TODO } from "../shared";

// TODO — данные, которые Алексей ещё не передал (см. CONTENT_TODO.md).

export const experience = [
  {
    id: "diamitry",
    role: "Архитектор ПО и ведущий разработчик",
    organization: "Бюро переводов «Диамитрий»",
    period: "2026 — н. в.",
    focus: ["Архитектура продукта", "Full-stack разработка", "Инфраструктура и CI/CD", "Миграция с legacy CRM"],
    summary:
      "Спроектировал и построил платформу бюро — маркетинговый сайт, клиентское PWA и внутреннюю CRM — и перевёл её с Vercel на собственный Docker-хостинг.",
    projectSlug: "diamitry",
  },
  {
    id: "marketplace",
    role: "Ведущий разработчик",
    organization: "Маркетплейс объявлений (заказчик, Чехия)",
    period: TODO,
    focus: ["Техническое лидерство", "SEO-архитектура", "Payload CMS", "Команда из 5 человек"],
    summary:
      "Руководил разработкой трёхъязычного маркетплейса-каталога с SEO-страницами, кабинетом рекламодателя и входом по телефону.",
    projectSlug: "marketplace",
  },
  {
    id: "healthy",
    role: "Технический руководитель",
    organization: "Исследовательский проект VR-реабилитации",
    period: "2026 — н. в.",
    focus: ["Архитектура", "WebXR", "Контракты данных", "Клиническая аналитика"],
    summary:
      "Отвечаю за техническую часть исследовательской платформы: VR-упражнения, контракт данных сессии, расчёт шкалы и кабинет специалиста.",
    projectSlug: "healthy",
  },
  {
    id: "earlier",
    role: TODO,
    organization: TODO,
    period: TODO,
    focus: ["Веб-продукты", "Full-stack разработка"],
    summary: TODO,
  },
];
