import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { getContent, locales } from "@/content";
import { localePath } from "@/lib/i18n";
import { buttonClasses } from "@/components/ui/ButtonLink";

export const metadata = {
  title: "404 — Page not found · Страница не найдена",
};

// Unmatched URLs don't belong to either locale, so the page speaks both languages.
export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontVariables} h-full antialiased`}>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full items-center font-sans">
        <main className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-accent">404</p>
          <div className="mt-6 grid gap-12 md:grid-cols-2">
            {locales.map((locale) => {
              const t = getContent(locale).ui.notFound;
              return (
                <section key={locale} lang={locale}>
                  <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.title}</h1>
                  <p className="mt-4 text-muted">{t.text}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={localePath(locale)} className={`${buttonClasses.base} ${buttonClasses.primary}`}>
                      {t.home}
                    </a>
                    <a href={localePath(locale, "/projects/")} className={`${buttonClasses.base} ${buttonClasses.secondary}`}>
                      {t.projects}
                    </a>
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </body>
    </html>
  );
}
