// Timeline entries. `TODO` marks data Alexey still has to provide (see CONTENT_TODO.md);
// the UI renders it as a visible placeholder instead of inventing a value.

import { TODO } from "../shared";

export const experience = [
  {
    id: "diamitry",
    role: "Software Architect & Lead Developer",
    organization: "Diamitry translation bureau",
    period: "2026 — present",
    focus: ["Product architecture", "Full-stack development", "Infrastructure & CI/CD", "Legacy CRM migration"],
    summary:
      "Designed and built the bureau's platform — marketing site, client PWA and internal CRM — and moved it from Vercel to a self-hosted Docker setup.",
    projectSlug: "diamitry",
  },
  {
    id: "marketplace",
    role: "Lead Developer",
    organization: "Classifieds marketplace (client, Czech Republic)",
    period: TODO,
    focus: ["Technical leadership", "SEO architecture", "Payload CMS", "Team of 5"],
    summary:
      "Led development of a three-language directory marketplace with SEO landing pages, advertiser dashboard and phone authentication.",
    projectSlug: "marketplace",
  },
  {
    id: "healthy",
    role: "Technical Lead",
    organization: "VR rehabilitation research project",
    period: "2026 — present",
    focus: ["Architecture", "WebXR", "Data contracts", "Clinical analytics"],
    summary:
      "Own the technical side of a research platform: VR exercises, session data contract, scoring engine and specialist dashboard.",
    projectSlug: "healthy",
  },
  {
    id: "earlier",
    role: TODO,
    organization: TODO,
    period: TODO,
    focus: ["Web products", "Full-stack development"],
    summary: TODO,
  },
];
