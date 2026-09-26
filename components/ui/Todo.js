import { TODO } from "@/content/shared";

// True while a field still waits for data (see CONTENT_TODO.md); such fields are not rendered.
export const isTodo = (value) => !value || value === TODO;
