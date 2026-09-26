import { ArrowDown, ArrowRight } from "lucide-react";

// Step-by-step flow. Vertical by default; `horizontal` switches to a row from the md breakpoint.
export function FlowDiagram({ title, caption, nodes, horizontal = false }) {
  const list = horizontal ? "flex flex-col md:flex-row md:items-stretch" : "flex flex-col";
  return (
    <figure className="print-avoid-break">
      {title && <figcaption className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-subtle">{title}</figcaption>}
      <ol className={list}>
        {nodes.map((node, i) => (
          <li key={node.label} className={horizontal ? "flex flex-col md:flex-1 md:flex-row md:items-center" : "flex flex-col"}>
            <div className="flex-1 rounded-xl border border-border bg-surface px-4 py-3">
              <p className="text-sm font-medium">{node.label}</p>
              {node.detail && <p className="mt-0.5 text-xs leading-5 text-muted">{node.detail}</p>}
            </div>
            {i < nodes.length - 1 && (
              <span aria-hidden="true" className="flex justify-center py-1.5 text-subtle md:px-1.5 md:py-0">
                {horizontal ? (
                  <>
                    <ArrowDown className="size-4 md:hidden" />
                    <ArrowRight className="hidden size-4 md:block" />
                  </>
                ) : (
                  <ArrowDown className="size-4" />
                )}
              </span>
            )}
          </li>
        ))}
      </ol>
      {caption && <p className="mt-3 text-sm text-muted">{caption}</p>}
    </figure>
  );
}
