import { ArrowRight, FileText, Mail, Network } from "lucide-react";
import { site } from "@/content/site";
import { heroStack } from "@/content/skills";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PillList } from "@/components/ui/Pill";
import { HeroDiagram } from "@/components/architecture/HeroDiagram";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-border bg-grid">
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-accent">{site.roles.join(" · ")}</p>
          <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">{site.positioning}</p>
          <div className="mt-8">
            <PillList items={heroStack} label="Core technologies" />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/projects/">
              View projects <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href="/architecture/" variant="secondary">
              <Network aria-hidden="true" className="size-4" /> Architecture
            </ButtonLink>
            <ButtonLink href="/cv/" variant="secondary">
              <FileText aria-hidden="true" className="size-4" /> Download CV
            </ButtonLink>
            <ButtonLink href="/contact/" variant="ghost">
              <Mail aria-hidden="true" className="size-4" /> Contact
            </ButtonLink>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <HeroDiagram />
        </div>
      </Container>
    </section>
  );
}
