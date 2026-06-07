import Image from "next/image";
import Link from "next/link";
import { ContentCard } from "@/components/cards/ContentCard";
import { ContentRail } from "@/components/sections/ContentRail";
import { hiddenGem, itineraries, topExperiences, topFlavors, topPlaces, topTraditions } from "@/data/content";
import { categoryHref } from "@/lib/utils";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-albania-black">
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90"
          alt="Costa cristallina dell'Albania al tramonto"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-gradient-to-r from-albania-black via-albania-black/55 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-albania-gold/50 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-albania-gold backdrop-blur">
              Albania premium travel
            </p>
            <h1 className="text-5xl font-black leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
              Scopri l'Albania come una serie da non interrompere.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-albania-cream/78 md:text-xl">
              Luoghi iconici, esperienze adrenaliniche, tradizioni vive e sapori intensi in una guida cinematografica mobile-first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/esplora" className="rounded-full bg-albania-red px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-premium transition hover:-translate-y-1 hover:bg-red-700">
                Esplora ora
              </Link>
              <a href="#itinerari" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-1 hover:border-albania-gold">
                Guarda itinerari
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Mare cristallino', 'Alpi Albanesi', 'UNESCO', 'Sapori locali'].map((badge) => (
                <span key={badge} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-albania-cream/75 backdrop-blur">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContentRail eyebrow="Classifica" title="Top 10 Luoghi" description="Le destinazioni essenziali per iniziare il viaggio Albania360 con impatto cinematografico." items={topPlaces} ranked />
      <ContentRail eyebrow="Da vivere" title="Top 10 Esperienze" description="Attività, tour e momenti memorabili: dal trekking alpino alle baie della Riviera." items={topExperiences} ranked />
      <ContentRail eyebrow="Cultura" title="Top 10 Tradizioni" description="Rituali, voci, ospitalità e simboli che rendono l'Albania profondamente autentica." items={topTraditions} ranked />
      <ContentRail eyebrow="Food journey" title="Top 10 Sapori d'Albania" description="Piatti e bevande da provare per capire l'Albania attraverso tavola, brace e dolci." items={topFlavors} ranked />

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-albania-gold/30 bg-gradient-to-br from-white/10 to-white/[0.03] p-4 shadow-gold md:grid-cols-[1.1fr_0.9fr] md:p-6">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem]">
              <Image src={hiddenGem.image} alt={hiddenGem.title} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-3 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.34em] text-albania-gold">Gemma nascosta della settimana</p>
              <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">{hiddenGem.title}</h2>
              <p className="mt-5 text-lg leading-8 text-albania-cream/75">{hiddenGem.teaser}</p>
              <Link href={categoryHref(hiddenGem.category, hiddenGem.slug)} className="mt-8 inline-flex w-fit rounded-full bg-albania-gold px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:-translate-y-1 hover:bg-[#e0bd73]">
                Scopri la gemma
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="itinerari" className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-albania-gold">Roadmap di viaggio</p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">Itinerari consigliati</h2>
          <p className="mt-3 max-w-2xl text-albania-cream/65">Percorsi pronti da trasformare in viaggio: weekend, Riviera, Alpi e tour completo.</p>
        </div>
        <div className="mt-6 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {itineraries.map((item) => (
              <ContentCard key={item.id} item={item} feature />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
