import "../globals.css";
import { rootMetadata, viewport as sharedViewport } from "@/lib/metadata";
import { RootDocument } from "@/components/layout/RootDocument";

export const metadata = rootMetadata("ru");
export const viewport = sharedViewport;

export default function Layout({ children }) {
  return <RootDocument locale="ru">{children}</RootDocument>;
}
