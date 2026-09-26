"use client";

import { Download } from "lucide-react";
import { buttonClasses } from "./ButtonLink";

export function PrintButton({ children = "Download CV (PDF)" }) {
  return (
    <button type="button" onClick={() => window.print()} className={`${buttonClasses.base} ${buttonClasses.primary}`}>
      <Download aria-hidden="true" className="size-4" />
      {children}
    </button>
  );
}
