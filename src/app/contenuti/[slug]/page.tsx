import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentCard } from "@/components/cards/ContentCard";
import { allContent } from "@/data/content";
import { categoryLabels } from "@/lib/utils";
import type { TourismContent } from "@/types/tourism";

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allContent.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: DetailPageProps) {
  const { slug } = await params;
  const item = allContent.find((content) => content.slug === slug);

  if (!item) {
    return { title: "Contenuto non trovato | Albania360" };
  }

  return {
    title: `${item.title} | Albania360`,
    description: item.teaser
  };
}

export default async function ContentDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const found = allContent.find((content) => content.slug === slug);

  if (!found) {
    notFound();
  }

  const item = found as TourismContent;
  const related = allContent.filter((content) => content.category === item.category && content.slug !== item.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-albania-black">
      <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-20">
        <Image src={item.image} alt={item.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-albania-black via-albania-black/65 to-albania-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <Link href="/esplora" className="mb-6 inline-flex text-sm font-bold text-albania-gold hover:text-white">
            ← Torna a Esplora
          </Link>
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-albania-gold/60 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-albania-gold backdrop-blur">
              {categoryLabels[item.category]} · {item.region}
            </p>
            <h1 className="mt-5 text-5xl font-black leading-none tracking-tight text-white md:text-7xl">{item.title}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-albania-cream/78">{item.teaser}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-albania-red">Dettaglio contenuto</p>
          <h2 className="mt-3 text-3xl font-black text-white">Perché vale il viaggio</h2>
          <p className="mt-5 text-lg leading-9 text-albania-cream/75">{item.description}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {item.tags.map((tag) => (
              <div key={tag} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-albania-gold">Focus</p>
                <p className="mt-2 text-lg font-black text-white">{tag}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="h-fit rounded-[2rem] border border-albania-gold/25 bg-gradient-to-br from-albania-gold/10 to-white/[0.03] p-6 lg:sticky lg:top-24">
          <h2 className="text-2xl font-black text-white">Info rapide</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-albania-cream/55">Categoria</dt>
              <dd className="font-bold text-white">{categoryLabels[item.category]}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-albania-cream/55">Regione</dt>
              <dd className="font-bold text-white">{item.region}</dd>
            </div>
            {item.duration ? (
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-albania-cream/55">Durata</dt>
                <dd className="font-bold text-white">{item.duration}</dd>
              </div>
            ) : null}
            <div className="flex justify-between gap-4">
              <dt className="text-albania-cream/55">Ideale per</dt>
              <dd className="font-bold text-white">{item.bestFor}</dd>
            </div>
          </dl>
          <Link href="/esplora" className="mt-6 flex justify-center rounded-full bg-albania-red px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-premium transition hover:-translate-y-1">
            Continua a esplorare
          </Link>
        </aside>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-albania-gold">Correlati</p>
          <h2 className="mt-2 text-3xl font-black text-white">Altri contenuti simili</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((content) => (
              <div key={content.id} className="[&>a]:w-full">
                <ContentCard item={content} ranked={Boolean(content.ranking)} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
