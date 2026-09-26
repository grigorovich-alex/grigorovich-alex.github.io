import Link from "next/link";

const variants = {
  primary: "bg-fg text-bg hover:opacity-85",
  secondary: "border border-border-strong bg-surface text-fg hover:border-fg",
  ghost: "text-fg hover:bg-surface",
};

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-[opacity,border-color,background-color] duration-150";

export function ButtonLink({ href, variant = "primary", external = false, children, className = "", ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export const buttonClasses = { base, ...variants };
