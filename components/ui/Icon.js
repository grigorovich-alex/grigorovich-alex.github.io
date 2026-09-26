import { Boxes, Code2, Compass, Server } from "lucide-react";

const icons = { Boxes, Code2, Compass, Server };

export function Icon({ name, className = "size-5" }) {
  const Component = icons[name];
  return Component ? <Component aria-hidden="true" className={className} strokeWidth={1.6} /> : null;
}
