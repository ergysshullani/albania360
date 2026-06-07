import Image from "next/image";
import Link from "next/link";
import type { TourismContent } from "@/types/tourism";
import { categoryHref, categoryLabels, cn } from "@/lib/utils";

type ContentCardProps = {
  item: TourismContent;
  ranked?: boolean;
  feature?: boolean;
};

export function ContentCard({ item, ranked = false, feature = false }: ContentCardProps) {
  return (
    <Link
      href={categoryHref(item.category, item.slug)}
      className={cn(
        "group relative block shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-albania-graphite shadow-2xl outline-none transition duration-500 hover:-translate-y-2 hover:border-albania-gold/70 hover:shadow-gold focus-visible:ring-2 focus-visible:ring-albania-gold",
        feature ? "h-[420px] w-[86vw] max-w-5xl md:w-[720px]" : "h-[340px] w-[78vw] sm:w-[340px] lg:w-[360px]"
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={feature ? "(min-width: 768px) 720px, 86vw" : "(min-width: 1024px) 360px, 78vw"}
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-albania-black via-albania-black/55 to-transparent" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <span className="rounded-full border border-albania-gold/50 bg-albania-black/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-albania-gold backdrop-blur">
          {categoryLabels[item.category]}
        </span>
        {ranked && item.ranking ? (
          <span className="text-6xl font-black leading-none text-white/10 [-webkit-text-stroke:1px_#C9A45C]">
            {item.ranking}
          </span>
        ) : null}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-albania-cream/85 backdrop-blur">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-black text-white md:text-3xl">{item.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-albania-cream/78">{item.teaser}</p>
      </div>
    </Link>
  );
}
