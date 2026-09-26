// Personal data and site-wide settings. Every public fact about Alexey lives here or in
// the other content/* files — components only render it.

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
  // Override with NEXT_PUBLIC_SITE_URL when the same build is hosted elsewhere (custom domain, Vercel, VPS).
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://grigorovich-alex.github.io").replace(/\/$/, ""),
  locale: "en_US",
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
