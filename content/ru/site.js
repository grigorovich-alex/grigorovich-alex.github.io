// Личные данные. Пути навигации без языкового префикса — /ru добавляет lib/i18n.js.

export const site = {
  name: "Алексей Григорович",
  shortName: "АГ",
  roles: ["Архитектор ПО", "CTO", "Ведущий разработчик"],
  jobTitle: "Архитектор программного обеспечения",
  positioning:
    "Проектирую, создаю и масштабирую современные веб-продукты — от архитектуры и технической стратегии до production-инфраструктуры и запуска.",
  about: [
    "Инженер и технический архитектор: создаю масштабируемые веб-продукты, SaaS-платформы и маркетплейсы.",
    "Для меня важно не только писать код, но и проектировать системы, которые масштабируются, легко поддерживаются, безопасны, дружат с SEO и работают быстро.",
  ],
  ogLocale: "ru_RU",
  languages: [
    { name: "Русский", level: "родной" },
    { name: "Английский", level: "B1 (средний)" },
  ],
};

export const contacts = [
  {
    id: "email",
    label: "Почта",
    value: "grigorovich.alex@icloud.com",
    href: "mailto:grigorovich.alex@icloud.com",
  },
  {
    id: "telegram",
    label: "Telegram",
    value: "@honey_badger_pln",
    href: "https://t.me/honey_badger_pln",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/grigorovich-alex",
    href: "https://github.com/grigorovich-alex",
  },
];

export const navigation = [
  { href: "/projects/", label: "Проекты" },
  { href: "/architecture/", label: "Архитектура" },
  { href: "/engineering/", label: "Принципы" },
  { href: "/experience/", label: "Опыт" },
  { href: "/contact/", label: "Контакты" },
];
