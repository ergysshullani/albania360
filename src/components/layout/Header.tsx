import Image from "next/image";
import Link from "next/link";

const brandLogo = {
  src: "/brand/albania360-logo.svg",
  alt: "Albania360 - Scopri, vivi, ricorda",
  width: 420,
  height: 136
};

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
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigazione principale">
        <Link
          href="/"
          className="group flex items-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-albania-gold focus-visible:ring-offset-2 focus-visible:ring-offset-albania-black"
          aria-label="Vai alla home di Albania360"
        >
          <Image
            src={brandLogo.src}
            alt={brandLogo.alt}
            width={brandLogo.width}
            height={brandLogo.height}
            priority
            className="h-12 w-auto drop-shadow-[0_0_18px_rgba(201,164,92,0.28)] transition duration-300 group-hover:scale-[1.03] sm:h-14 md:h-16"
          />
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
