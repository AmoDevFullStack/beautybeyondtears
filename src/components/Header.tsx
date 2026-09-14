import logo from "@/assets/bbt/logo.jpeg.asset.json";

export function Header() {
  return (
    <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 md:px-10 py-4 md:py-5 border-b border-ink/10 bg-paper">
      <a href="#top" className="flex min-w-0 items-center gap-3">
        <img
          src={logo.url}
          alt="Beauty Beyond Tears"
          className="h-10 w-10 md:h-12 md:w-12 shrink-0 object-contain"
        />
        <span className="font-serif text-base md:text-lg leading-none truncate text-ink">
          Beauty Beyond Tears
          <span className="block text-[10px] uppercase tracking-[0.3em] text-ink/50 italic mt-1">
            with Pontsho M
          </span>
        </span>
      </a>
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.22em] font-medium">
        <a href="#mission" className="hover:text-mauve transition-colors">Mission</a>
        <a href="#offer" className="hover:text-mauve transition-colors">We Offer</a>
        <a href="#gallery" className="hover:text-mauve transition-colors">Gallery</a>
        <a href="#contact" className="hover:text-mauve transition-colors">Contact</a>
      </div>
      <a
        href="https://wa.me/27684470413" target="_blank" rel="noreferrer"
        className="shrink-0 whitespace-nowrap px-3 md:px-5 py-2 md:py-2.5 bg-mauve text-paper text-[10px] uppercase tracking-widest font-semibold shadow-sm hover:bg-ink transition-all"
      >
        Talk to Us
      </a>
    </nav>
  );
}
