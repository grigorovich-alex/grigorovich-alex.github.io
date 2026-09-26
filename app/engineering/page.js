import Link from "next/link";
import { principles } from "@/content/principles";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { PillList } from "@/components/ui/Pill";

export const metadata = pageMetadata({
  title: "Engineering principles",
  description: "How I make engineering decisions: architecture first, justified complexity, production as part of development, performance as a feature.",
  path: "/engineering/",
});

export default function EngineeringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering"
        title="Principles I build by"
        description="Engineering credibility over decoration. Each principle comes with a place where it shaped a real decision."
      />
      <Container className="py-14">
        <ol className="grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.id} className="reveal flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-3 leading-7 text-muted">{p.body}</p>
              <div className="mt-5">
                <PillList items={p.points} label={`${p.title}: key points`} />
              </div>
              <div className="mt-auto pt-6">
                <p className="border-t border-border pt-5 text-sm">
                <span className="text-subtle">In practice — </span>
                <Link href={p.example.href} className="link-underline font-medium text-accent">
                  {p.example.label}
                </Link>
                <span className="text-muted">: {p.example.text}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
