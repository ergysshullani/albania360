import type { TourismContent } from "@/types/tourism";
import { ContentCard } from "@/components/cards/ContentCard";

type ContentRailProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: TourismContent[];
  ranked?: boolean;
};

export function ContentRail({ eyebrow, title, description, items, ranked = false }: ContentRailProps) {
  return (
    <section className="py-8 md:py-12" aria-labelledby={`${title}-heading`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-albania-gold">{eyebrow}</p>
          <h2 id={`${title}-heading`} className="mt-2 text-3xl font-black tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-albania-cream/65 md:text-base">{description}</p>
        </div>
      </div>
      <div className="overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {items.map((item) => (
            <ContentCard key={item.id} item={item} ranked={ranked} />
          ))}
        </div>
      </div>
    </section>
  );
}
