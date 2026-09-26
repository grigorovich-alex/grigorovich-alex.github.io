import { Mail, Send } from "lucide-react";
import { GithubMark } from "@/components/icons/GithubMark";
import { getContent } from "@/content";

const icons = { email: Mail, telegram: Send, github: GithubMark };

export function ContactList({ locale }) {
  const { contacts } = getContent(locale);
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {contacts.map((c) => {
        const IconCmp = icons[c.id];
        const external = c.href.startsWith("http");
        return (
          <li key={c.id}>
            <a
              href={c.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <IconCmp aria-hidden="true" className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-subtle">{c.label}</span>
                <span className="block truncate text-sm font-medium">{c.value}</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
