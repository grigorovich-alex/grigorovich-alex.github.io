import { CvView, cvMetadata } from "@/components/views/CvView";

export const metadata = cvMetadata("en");

export default function CvPage() {
  return <CvView locale="en" />;
}
