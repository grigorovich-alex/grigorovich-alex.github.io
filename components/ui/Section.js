import { Container } from "./Container";

export function Section({ id, eyebrow, title, description, children, className = "" }) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <header className="reveal mb-10 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-3 text-base leading-7 text-muted">{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
