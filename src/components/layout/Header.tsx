import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Esplora", "/esplora"],
  ["Luoghi", "/esplora?categoria=luogo"],
  ["Esperienze", "/esplora?categoria=esperienza"],
  ["Sapori", "/esplora?categoria=gastronomia"]
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-albania-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigazione principale">
        <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-albania-gold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-albania-red text-sm shadow-premium">A</span>
          Albania<span className="text-albania-gold">360</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-albania-cream/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-albania-gold">
              {label}
            </Link>
          ))}
        </div>
        <Link href="/esplora" className="hidden rounded-full bg-albania-red px-5 py-2 text-sm font-black text-white shadow-premium transition hover:bg-red-700 md:inline-flex">
          Esplora ora
        </Link>
        <details className="group relative md:hidden">
          <summary className="list-none rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-3xl border border-white/10 bg-albania-graphite p-3 shadow-2xl">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-albania-cream/80 hover:bg-white/10 hover:text-white">
                {label}
              </Link>
            ))}
            <Link href="/esplora" className="mt-2 block rounded-2xl bg-albania-red px-4 py-3 text-center text-sm font-black text-white">
              Inizia a esplorare
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
