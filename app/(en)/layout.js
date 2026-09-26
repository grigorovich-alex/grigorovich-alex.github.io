import "../globals.css";
import { rootMetadata, viewport as sharedViewport } from "@/lib/metadata";
import { RootDocument } from "@/components/layout/RootDocument";

export const metadata = rootMetadata("en");
export const viewport = sharedViewport;

export default function Layout({ children }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
