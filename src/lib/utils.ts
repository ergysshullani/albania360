import type { ContentCategory } from "@/types/tourism";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function categoryHref(category: ContentCategory, slug: string) {
  return `/contenuti/${slug}`;
}

export const categoryLabels: Record<ContentCategory, string> = {
  luogo: "Luogo",
  esperienza: "Esperienza",
  tradizione: "Tradizione",
  gastronomia: "Sapori",
  itinerario: "Itinerario"
};
