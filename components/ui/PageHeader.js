import { Container } from "./Container";

export function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header className="border-b border-border bg-grid">
      <Container className="py-14 sm:py-20">
        {eyebrow && <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{description}</p>}
        {children}
      </Container>
    </header>
  );
}
