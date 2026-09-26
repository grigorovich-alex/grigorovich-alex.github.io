// Personal data. Every public fact about Alexey lives in content/<locale>/* — components only render it.
// Navigation paths are locale-neutral; lib/i18n.js adds the /ru prefix.

export const site = {
  name: "Alexey Grigorovich",
  shortName: "AG",
  roles: ["Software Architect", "CTO", "Lead Developer"],
  jobTitle: "Software Architect",
  positioning:
    "I design, build and scale modern web products — from product architecture and technical strategy to production infrastructure and delivery.",
  about: [
    "Software engineer and technical architect focused on building scalable web products, SaaS platforms and marketplace solutions.",
    "My focus is not only writing code, but designing systems that are scalable, maintainable, secure, SEO-friendly and performance-oriented.",
  ],
  ogLocale: "en_US",
  languages: [
    { name: "Russian", level: "Native" },
    { name: "English", level: "B1 (Intermediate)" },
  ],
};

export const contacts = [
  {
    id: "email",
    label: "Email",
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
  { href: "/projects/", label: "Projects" },
  { href: "/architecture/", label: "Architecture" },
  { href: "/engineering/", label: "Engineering" },
  { href: "/experience/", label: "Experience" },
  { href: "/contact/", label: "Contact" },
];
