// Timeline entries. `TODO` marks data Alexey still has to provide (see CONTENT_TODO.md);
// such fields are hidden in the UI instead of being filled with a guess.

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
    period: "Jul 2025 — May 2026",
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
    id: "msm",
    role: "Website development & support",
    organization: "MSM — double degree programme",
    period: TODO,
    focus: ["Support", "Redesign", "Email automation"],
    summary: "Maintenance and redesign of the programme website, automated email sending and other development work.",
  },
];
