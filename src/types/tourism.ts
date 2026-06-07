export type ContentCategory = "luogo" | "esperienza" | "tradizione" | "gastronomia" | "itinerario";

export type TourismContent = {
  id: string;
  slug: string;
  title: string;
  teaser: string;
  description: string;
  image: string;
  category: ContentCategory;
  region: string;
  tags: string[];
  ranking?: number;
  duration?: string;
  bestFor?: string;
};
