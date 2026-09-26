import { defaultLocale, locales } from "@/content/shared";

// English lives at the site root, other locales under /<locale>/.
export function localePath(locale, path = "/") {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

// Splits "/ru/projects/" into { locale: "ru", path: "/projects/" }.
export function splitLocale(pathname) {
  const [, first] = pathname.split("/");
  if (locales.includes(first) && first !== defaultLocale) {
    return { locale: first, path: pathname.slice(first.length + 1) || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}
