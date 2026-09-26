import { CvView, cvMetadata } from "@/components/views/CvView";

export const metadata = cvMetadata("ru");

export default function CvPage() {
  return <CvView locale="ru" />;
}
