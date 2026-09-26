// Engineering principles, each with an example from the case studies.

export const principles = [
  {
    id: "architecture-first",
    title: "Architecture before implementation",
    body: "Before the first component, I define what the system owns and how data moves.",
    points: ["Domain boundaries", "Data ownership", "API contracts", "Caching strategy", "Failure modes", "Deployment model"],
    example: {
      label: "VR rehabilitation platform",
      text: "The session data contract was fixed before any game was written.",
      href: "/projects/healthy/",
    },
  },
  {
    id: "justified-complexity",
    title: "Complexity must be justified",
    body: "Prefer the simplest architecture that works until scale or requirements prove otherwise.",
    points: ["One app instead of many services", "Framework features before libraries", "Inline SVG before chart libraries"],
    example: {
      label: "Text & Seal",
      text: "No database at launch — requests go to Telegram, with an explicit fallback to email.",
      href: "/projects/textandseal/",
    },
  },
  {
    id: "production",
    title: "Production is part of development",
    body: "A feature is not finished when it works locally. It is finished when it is deployed, observable and recoverable.",
    points: ["CI/CD from day one", "Memory and resource budgets", "Notifications that never break the main flow", "Migrations without downtime"],
    example: {
      label: "Diamitry",
      text: "Legacy CRM replaced gradually while the business kept taking orders.",
      href: "/projects/diamitry/",
    },
  },
  {
    id: "performance",
    title: "Performance is a feature",
    body: "Speed is designed in, not optimised later.",
    points: ["LCP", "CLS", "INP", "TTFB", "Bundle size", "Database access patterns", "Image and media delivery"],
    example: {
      label: "Marketplace",
      text: "Listing rank computed on write, so listing pages sort by an indexed number.",
      href: "/projects/marketplace/",
    },
  },
];
