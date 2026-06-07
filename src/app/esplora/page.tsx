import Link from "next/link";
import { ContentCard } from "@/components/cards/ContentCard";
import { allContent } from "@/data/content";
import { categoryLabels, cn } from "@/lib/utils";
import type { ContentCategory } from "@/types/tourism";

const categories: Array<["tutti" | ContentCategory, string]> = [
  ["tutti", "Tutti"],
  ["luogo", "Luoghi"],
  ["esperienza", "Esperienze"],
  ["tradizione", "Tradizioni"],
  ["gastronomia", "Sapori"],
  ["itinerario", "Itinerari"]
];

type ExplorePageProps = {
  searchParams: Promise<{ categoria?: string }>;
};

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const params = await searchParams;
  const selected = categories.some(([value]) => value === params.categoria) ? params.categoria : "tutti";
  const items = selected === "tutti" ? allContent : allContent.filter((item) => item.category === selected);

  return (
    <main className="min-h-screen bg-albania-black pt-24">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-albania-red/20 via-white/[0.04] to-albania-gold/10 p-6 shadow-premium md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-albania-gold">Esplora Albania360</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Trova il tuo prossimo luogo, sapore o momento memorabile.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-albania-cream/70">
            Una libreria premium di contenuti turistici mock, pronta per diventare un catalogo filtrabile con CMS, mappe e preferiti.
          </p>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Filtri categoria">
          {categories.map(([value, label]) => (
            <Link
              key={value}
              href={value === "tutti" ? "/esplora" : `/esplora?categoria=${value}`}
              className={cn(
                "shrink-0 rounded-full border px-5 py-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-albania-gold",
                selected === value
                  ? "border-albania-gold bg-albania-gold text-black"
                  : "border-white/10 bg-white/5 text-albania-cream/75 hover:border-albania-gold/60 hover:text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-albania-red">{items.length} contenuti</p>
            <h2 className="mt-1 text-2xl font-black text-white">
              {selected === "tutti" ? "Tutto il catalogo" : categoryLabels[selected as ContentCategory]}
            </h2>
          </div>
          <p className="hidden text-sm text-albania-cream/50 md:block">Layout responsive con card premium e hover morbidi.</p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="[&>a]:w-full">
              <ContentCard item={item} ranked={Boolean(item.ranking)} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
