import { getContent } from "@/content";
import { fontVariables } from "@/lib/fonts";
import { JsonLd, personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { ThemeScript } from "./ThemeScript";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

// Shared <html> shell for every locale's root layout.
export function RootDocument({ locale, children }) {
  const { ui } = getContent(locale);
  return (
    <html lang={ui.htmlLang} suppressHydrationWarning className={`${fontVariables} h-full antialiased`}>
      {/* Rendered only from root layouts, where a plain <head> is correct. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={personJsonLd(locale)} />
        <JsonLd data={websiteJsonLd(locale)} />
        <SiteHeader locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
