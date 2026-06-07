# Albania360 — Piano completo di sviluppo

## 1. Visione del prodotto

Albania360 è una web app responsive dedicata al turismo in Albania, pensata come una piattaforma premium di scoperta: immersiva come Netflix, ordinata e commerciale come Amazon Prime, con un'identità visiva nera, oro e rosso Albania. L'obiettivo è trasformare luoghi, esperienze, tradizioni e gastronomia in contenuti editoriali ad alto impatto, facili da esplorare e capaci di generare desiderio di viaggio.

## 2. Obiettivi principali

- Presentare l'Albania come destinazione premium, moderna e autentica.
- Guidare l'utente nella scoperta tramite classifiche, categorie, itinerari e dettagli narrativi.
- Creare una UI mobile-first, veloce, accessibile e fortemente visuale.
- Preparare una base tecnica scalabile con Next.js, TypeScript e Tailwind CSS.
- Rendere ogni contenuto azionabile: salvataggio, condivisione, navigazione verso itinerari e approfondimenti.

## 3. Pubblico di riferimento

- Viaggiatori europei alla ricerca di mare, natura, cultura e gastronomia.
- Coppie e gruppi interessati a esperienze premium o avventurose.
- Nomadi digitali e viaggiatori indipendenti che vogliono pianificare itinerari.
- Turisti italiani interessati a mete vicine, convenienti e ancora poco inflazionate.

## 4. Stack tecnico

### 4.1 Framework e linguaggio

- Next.js con App Router.
- TypeScript per tipizzazione forte dei dati turistici, componenti e props.
- React Server Components per contenuti statici/editoriali quando possibile.
- Client Components solo per interazioni come carousel, filtri, preferiti e menu mobile.

### 4.2 Styling

- Tailwind CSS come sistema principale di design.
- Design tokens personalizzati per colori, ombre, raggi, spaziature e gradienti.
- Componenti riutilizzabili per card, sezioni, hero, carousel, badge e CTA.

### 4.3 Dati iniziali

- Prima fase: contenuti statici tipizzati in file TypeScript.
- Seconda fase: possibile migrazione verso CMS headless o database.
- Strutture dati separate per luoghi, esperienze, tradizioni, gastronomia e itinerari.

## 5. Direzione creativa e stile visivo

## 5.1 Moodboard testuale

- Netflix: hero cinematografico, contenuti in righe orizzontali, card grandi, overlay scuri, ranking Top 10.
- Amazon Prime: navigazione chiara, sezioni modulari, focus su collezioni e categorie.
- Premium travel: fotografie immersive, spaziature generose, microcopy evocativo, contrasti eleganti.
- Albania: nero profondo, rosso bandiera, oro caldo, accenti metallici e pattern ispirati all'aquila bicipite.

### 5.2 Palette colori

- Nero notte: `#050505` per background principale.
- Nero grafite: `#111111` per superfici e card.
- Rosso Albania: `#E41E20` per CTA, badge e highlight.
- Oro premium: `#D6A84F` per bordi, testi speciali e dettagli.
- Bianco caldo: `#F8F3E8` per testi principali.
- Grigio pietra: `#A7A7A7` per testi secondari.

### 5.3 Tipografia

- Titoli: font sans-serif geometrico, pesante e cinematografico.
- Testi: font leggibile, moderno, ottimizzato mobile.
- Numeri Top 10: stile grande, outline o gradiente oro/rosso, con profondità visiva.

### 5.4 UI effects

- Overlay scuro su immagini per garantire leggibilità.
- Gradienti radiali e lineari nero/rosso/oro.
- Hover con scale leggero, bordo oro e ombra rossa diffusa.
- Skeleton loading per griglie e carousel futuri.
- Animazioni sobrie: fade-in, slide-up, reveal delle sezioni.

## 6. Architettura informativa

## 6.1 Pagine richieste

1. Home.
2. Esplora.
3. Luogo dettaglio.
4. Esperienza dettaglio.
5. Tradizione dettaglio.
6. Gastronomia dettaglio.

### 6.2 Rotte consigliate

- `/` — Home.
- `/esplora` — Hub di ricerca e categorie.
- `/luoghi/[slug]` — Dettaglio luogo.
- `/esperienze/[slug]` — Dettaglio esperienza.
- `/tradizioni/[slug]` — Dettaglio tradizione.
- `/gastronomia/[slug]` — Dettaglio sapore o piatto.

### 6.3 Navigazione globale

- Logo Albania360.
- Link: Home, Esplora, Luoghi, Esperienze, Tradizioni, Sapori, Itinerari.
- CTA principale: “Inizia a esplorare”.
- Menu mobile fullscreen con sfondo nero, accenti oro e CTA rosso.

## 7. Piano dettagliato delle pagine

## 7.1 Home

### Obiettivo

Creare una landing immersiva che presenti subito l'Albania come destinazione emozionale, con sezioni editoriali in stile streaming platform.

### Sezioni

1. Hero fullscreen.
2. Top 10 Luoghi.
3. Top 10 Esperienze.
4. Top 10 Tradizioni.
5. Top 10 Sapori d'Albania.
6. Gemma nascosta.
7. Itinerari consigliati.

### Hero fullscreen

- Immagine o video background di forte impatto.
- Overlay nero sfumato.
- Titolo grande: “Albania360”.
- Sottotitolo: “Scopri il lato più autentico, selvaggio e premium dell'Albania”.
- CTA primaria: “Esplora ora”.
- CTA secondaria: “Guarda gli itinerari”.
- Badge editoriali: “Mare cristallino”, “Montagne epiche”, “Tradizioni vive”, “Sapori intensi”.

### Top 10 Luoghi

Esempi di contenuti:

1. Riviera Albanese — “Dove il Mar Ionio sembra scolpito nella luce”.
2. Ksamil — “Isole turchesi che sembrano un segreto mediterraneo”.
3. Gjirokastër — “La città di pietra che racconta secoli di storia”.
4. Berat — “Mille finestre affacciate sull'anima albanese”.
5. Theth — “Alpi selvagge, silenzio puro e sentieri leggendari”.
6. Valbona — “Una valle che sembra disegnata per gli esploratori”.
7. Lago di Koman — “Un fiordo balcanico nascosto tra pareti verdi”.
8. Tirana — “Energia urbana, colore e nuova creatività balcanica”.
9. Butrinto — “Rovine antiche sospese tra laguna e mito”.
10. Syri i Kaltër — “L'occhio blu che ipnotizza ogni viaggiatore”.

### Top 10 Esperienze

1. Road trip sulla Riviera — “Curve panoramiche, spiagge segrete e tramonti rossi”.
2. Trekking Theth-Valbona — “Il cammino più iconico delle Alpi Albanesi”.
3. Kayak sul Lago di Koman — “Acqua smeraldo tra montagne verticali”.
4. Cena tradizionale in guesthouse — “La vera Albania servita a tavola”.
5. Notte a Tirana — “Rooftop, cocktail e ritmo balcanico contemporaneo”.
6. Jeep tour nel sud — “Villaggi, canyon e panorami fuori rotta”.
7. Snorkeling a Ksamil — “Fondali limpidi e isole da raggiungere a nuoto”.
8. Visita ai bunker storici — “Memoria, mistero e architettura sotterranea”.
9. Degustazione di raki — “Il brindisi che apre ogni conversazione”.
10. Alba sul passo di Llogara — “Il mare sotto le nuvole, prima del mondo”.

### Top 10 Tradizioni

1. Besa — “La parola data che vale più di un contratto”.
2. Iso-polifonia — “Voci antiche che vibrano come montagne”.
3. Kanun — “Codici, onore e storia profonda delle comunità”.
4. Danze popolari — “Passi rapidi, costumi vivi e identità collettiva”.
5. Ospitalità albanese — “Entrare ospite e uscire famiglia”.
6. Costumi tradizionali — “Ricami, simboli e orgoglio regionale”.
7. Feste di villaggio — “Musica, fuoco e tavole infinite”.
8. Artigianato in pietra e legno — “Mani esperte che custodiscono memoria”.
9. Matrimoni albanesi — “Giorni di musica, rituali e celebrazione”.
10. Leggende delle Alpi — “Storie sussurrate tra neve, aquile e valli”.

### Top 10 Sapori d'Albania

1. Tavë kosi — “Il comfort food albanese per eccellenza”.
2. Byrek — “Sfoglia croccante, ripieni semplici e dipendenza immediata”.
3. Fërgesë — “Peperoni, formaggio e calore di casa”.
4. Qofte — “Spezie, brace e street food irresistibile”.
5. Speca të mbushura — “Peperoni ripieni che profumano d'estate”.
6. Petulla — “Frittelle dorate da colazione lenta”.
7. Baklava — “Dolcezza stratificata, miele e festa”.
8. Trilece — “Il dessert morbido che conquista al primo cucchiaio”.
9. Raki — “Il distillato che accende storie e amicizie”.
10. Pesce della Riviera — “Mare fresco, griglia e semplicità perfetta”.

### Gemma nascosta

- Card o sezione full-width dedicata a una meta meno conosciuta.
- Prima proposta: Përmet.
- Titolo: “Përmet, la capitale lenta del benessere albanese”.
- Frase: “Terme naturali, canyon, cucina casalinga e il ritmo perfetto per sparire dal rumore”.
- CTA: “Scopri la gemma”.

### Itinerari consigliati

- Card editoriali più larghe rispetto alle Top 10.
- Itinerario 3 giorni: “Weekend tra Tirana e Berat”.
- Itinerario 5 giorni: “Riviera Albanese premium”.
- Itinerario 7 giorni: “Dalle Alpi al mare”.
- Itinerario 10 giorni: “Albania completa on the road”.

## 7.2 Esplora

### Obiettivo

Offrire una pagina di scoperta completa, filtrabile e mobile-friendly.

### Sezioni

- Hero compatto con ricerca.
- Filtri per categoria: Luoghi, Esperienze, Tradizioni, Gastronomia.
- Filtri per area: Nord, Centro, Sud, Riviera, Montagne, Città.
- Filtri per mood: Avventura, Relax, Cultura, Food, Premium, Famiglia.
- Griglia responsive di card.
- Ordinamento: Popolari, Consigliati, Nuovi, Nascosti.
- Sezione “Continua a scoprire” con contenuti correlati.

### Stati UI

- Stato vuoto con suggerimenti.
- Stato loading con skeleton.
- Stato errore con CTA di retry.

## 7.3 Luogo dettaglio

### Obiettivo

Raccontare una destinazione con taglio editoriale e informazioni utili.

### Struttura

- Hero immagine fullscreen o semi-fullscreen.
- Breadcrumb.
- Titolo, località, ranking, tag e frase evocativa.
- Gallery fotografica.
- Sezione “Perché andarci”.
- Sezione “Cosa vedere”.
- Sezione “Esperienze da fare qui”.
- Box info: periodo migliore, durata consigliata, budget, accessibilità, come arrivare.
- Mappa o placeholder mappa.
- Contenuti correlati.

## 7.4 Esperienza dettaglio

### Obiettivo

Presentare attività e avventure con informazioni pratiche e storytelling.

### Struttura

- Hero emozionale.
- Titolo, durata, difficoltà, area e stagione consigliata.
- Descrizione narrativa.
- Highlights dell'esperienza.
- Cosa portare.
- A chi è consigliata.
- Luoghi collegati.
- CTA: “Aggiungi all'itinerario”.

## 7.5 Tradizione dettaglio

### Obiettivo

Rendere tradizioni e patrimonio culturale contenuti premium, facili da capire e condividere.

### Struttura

- Hero con immagine o pattern culturale.
- Titolo, area di origine, categoria culturale.
- Storia e significato.
- Come viverla da viaggiatore.
- Curiosità.
- Eventi o periodi in cui scoprirla.
- Collegamenti a luoghi e itinerari.

## 7.6 Gastronomia dettaglio

### Obiettivo

Valorizzare piatti, bevande e sapori come motivo di viaggio.

### Struttura

- Hero food photography.
- Titolo, categoria, regione, intensità del sapore.
- Descrizione evocativa.
- Ingredienti principali.
- Dove provarlo.
- Abbinamenti consigliati.
- Tradizioni collegate.
- CTA: “Scopri altri sapori”.

## 8. Specifica delle card

Ogni card deve includere obbligatoriamente:

- Immagine.
- Titolo.
- Frase che incuriosisce.

### Varianti card

- `ContentCard`: card standard per griglie e carousel.
- `RankedCard`: card Top 10 con numero grande.
- `FeatureCard`: card ampia per gemma nascosta e itinerari.
- `CompactCard`: card ridotta per contenuti correlati.

### Campi dati minimi

- `id`.
- `slug`.
- `title`.
- `teaser`.
- `image`.
- `category`.
- `region`.
- `tags`.
- `ranking` opzionale.
- `href`.

## 9. Componenti principali

- `Header`.
- `MobileMenu`.
- `Hero`.
- `SectionHeader`.
- `ContentRail`.
- `ContentCard`.
- `RankedCard`.
- `FeatureCard`.
- `ExploreFilters`.
- `DetailHero`.
- `InfoPanel`.
- `Gallery`.
- `RelatedContent`.
- `Footer`.

## 10. Responsive design

### Mobile

- Hero fullscreen con testo centrato o allineato in basso.
- Rail orizzontali scrollabili.
- Card larghe 75-85% viewport nei carousel.
- Menu mobile fullscreen.
- Filtri in bottom sheet o chips scrollabili.

### Tablet

- Griglie a 2 colonne.
- Hero con layout più largo e CTA affiancate.
- Dettagli con info panel sotto il contenuto principale.

### Desktop

- Rail cinematici stile streaming.
- Griglie a 3 o 4 colonne.
- Pagine dettaglio con contenuto principale e sidebar sticky.
- Header trasparente sopra hero, poi solido allo scroll.

## 11. Accessibilità

- Contrasto elevato tra testo e sfondo.
- Testi alternativi descrittivi per ogni immagine.
- Focus ring visibile in oro o rosso.
- Navigazione completa da tastiera.
- Riduzione animazioni se `prefers-reduced-motion` è attivo.
- Struttura semantica con heading ordinati.

## 12. Performance

- Uso di `next/image` per ottimizzazione immagini.
- Lazy loading per contenuti sotto la fold.
- Immagini responsive con dimensioni definite.
- Dati statici iniziali generati server-side.
- Componenti client limitati alle interazioni necessarie.
- Bundle splitting naturale tramite App Router.

## 13. SEO e metadata

- Metadata specifici per ogni pagina.
- Open Graph image per contenuti condivisibili.
- Slug leggibili e coerenti.
- JSON-LD futuro per luoghi turistici, articoli e ricette.
- Sitemap e robots nelle fasi successive.

## 14. Modello dati iniziale

### Luogo

- Titolo.
- Slug.
- Teaser.
- Descrizione.
- Regione.
- Coordinate opzionali.
- Immagini.
- Periodo migliore.
- Durata consigliata.
- Budget indicativo.
- Tag.
- Esperienze correlate.

### Esperienza

- Titolo.
- Slug.
- Teaser.
- Descrizione.
- Durata.
- Difficoltà.
- Regione.
- Stagione.
- Cosa portare.
- Luoghi correlati.

### Tradizione

- Titolo.
- Slug.
- Teaser.
- Descrizione.
- Origine.
- Significato.
- Dove scoprirla.
- Periodo consigliato.

### Gastronomia

- Titolo.
- Slug.
- Teaser.
- Descrizione.
- Ingredienti.
- Regione.
- Dove provarla.
- Abbinamenti.

### Itinerario

- Titolo.
- Slug.
- Teaser.
- Durata.
- Tappe.
- Mood.
- Budget.
- Immagine.

## 15. Roadmap di sviluppo

### Fase 1 — Fondazione progetto

- Creare progetto Next.js con TypeScript e Tailwind CSS.
- Configurare struttura cartelle.
- Definire design tokens e tema Tailwind.
- Creare layout globale, metadata base e font.
- Implementare Header e Footer.

### Fase 2 — Design system

- Creare componenti card.
- Creare componenti hero e sezioni.
- Creare rail orizzontali e griglie responsive.
- Definire stati hover, focus e loading.
- Validare accessibilità cromatica.

### Fase 3 — Contenuti e Home

- Definire dataset statici Top 10.
- Implementare Hero fullscreen.
- Implementare tutte le sezioni Home richieste.
- Collegare card alle rotte dettaglio.
- Ottimizzare layout mobile.

### Fase 4 — Esplora

- Implementare pagina `/esplora`.
- Aggiungere filtri per categoria, regione e mood.
- Implementare griglia contenuti.
- Aggiungere stati vuoti e reset filtri.

### Fase 5 — Pagine dettaglio

- Implementare template dettaglio luogo.
- Implementare template dettaglio esperienza.
- Implementare template dettaglio tradizione.
- Implementare template dettaglio gastronomia.
- Aggiungere contenuti correlati e CTA.

### Fase 6 — Rifinitura premium

- Migliorare animazioni e transizioni.
- Aggiungere microcopy editoriale.
- Ottimizzare immagini e metadata.
- Verificare performance Lighthouse.
- Testare responsive su mobile, tablet e desktop.

### Fase 7 — Evoluzioni future

- Preferiti e liste salvate.
- Builder itinerari.
- Mappa interattiva.
- CMS per gestione contenuti.
- Multilingua italiano, inglese e albanese.
- Integrazione prenotazioni o affiliate link.

## 16. Struttura cartelle consigliata

```text
src/
  app/
    page.tsx
    esplora/page.tsx
    luoghi/[slug]/page.tsx
    esperienze/[slug]/page.tsx
    tradizioni/[slug]/page.tsx
    gastronomia/[slug]/page.tsx
    layout.tsx
    globals.css
  components/
    cards/
    layout/
    sections/
    detail/
    ui/
  data/
    places.ts
    experiences.ts
    traditions.ts
    gastronomy.ts
    itineraries.ts
  lib/
    routes.ts
    metadata.ts
    utils.ts
  types/
    tourism.ts
```

## 17. Criteri di accettazione iniziali

- La Home contiene tutte le sezioni richieste.
- Ogni card mostra immagine, titolo e frase incuriosente.
- Le pagine richieste esistono e sono responsive.
- Il design comunica chiaramente stile premium nero/oro/rosso.
- La navigazione funziona da desktop e mobile.
- Il codice è tipizzato in TypeScript.
- Tailwind CSS gestisce layout, colori e stati visuali.
- Le immagini sono ottimizzate e hanno testo alternativo.

## 18. Primo incremento consigliato

Il primo incremento dovrebbe concentrarsi su fondazione tecnica, design system e Home. La Home è la pagina più importante per validare direzione visiva, contenuti Top 10, card, rail e tono editoriale. Solo dopo aver stabilizzato questa esperienza conviene sviluppare Esplora e i template dettaglio.
