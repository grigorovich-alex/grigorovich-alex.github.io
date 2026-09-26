// Locale-independent values.

export const TODO = "TODO";

export const locales = ["en", "ru"];
export const defaultLocale = "en";

// Override with NEXT_PUBLIC_SITE_URL when the same build is hosted elsewhere (custom domain, Vercel, VPS).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://grigorovich-alex.github.io").replace(/\/$/, "");
