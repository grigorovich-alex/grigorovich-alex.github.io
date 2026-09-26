import * as enSite from "./en/site";
import * as enSkills from "./en/skills";
import * as enProjects from "./en/projects";
import * as enExperience from "./en/experience";
import * as enPrinciples from "./en/principles";
import * as enArchitecture from "./en/architecture";
import { ui as enUi } from "./en/ui";
import * as ruSite from "./ru/site";
import * as ruSkills from "./ru/skills";
import * as ruProjects from "./ru/projects";
import * as ruExperience from "./ru/experience";
import * as ruPrinciples from "./ru/principles";
import * as ruArchitecture from "./ru/architecture";
import { ui as ruUi } from "./ru/ui";

// Both locales expose exactly the same shape; views only ever call getContent(locale).
const dictionaries = {
  en: { ...enSite, ...enSkills, ...enProjects, ...enExperience, ...enPrinciples, architecture: enArchitecture, ui: enUi },
  ru: { ...ruSite, ...ruSkills, ...ruProjects, ...ruExperience, ...ruPrinciples, architecture: ruArchitecture, ui: ruUi },
};

export function getContent(locale) {
  return dictionaries[locale];
}

export function getProject(locale, slug) {
  return dictionaries[locale].projects.find((p) => p.slug === slug);
}

export { TODO, locales, defaultLocale, SITE_URL } from "./shared";
