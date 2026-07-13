import { useEffect, useState } from "react";

const STORAGE_KEY = "bbt-welcome-verse-seen";

export function WelcomeVerse() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // slight delay so it feels intentional, not jarring
        const t = setTimeout(() => setOpen(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-verse-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-5 py-8 animate-fade-in"
    >
      {/* backdrop */}
      <button
        aria-label="Close welcome message"
        onClick={dismiss}
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
      />
      {/* card */}
      <div className="relative w-full max-w-lg bg-paper text-ink shadow-2xl animate-scale-in overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-mauve via-accent to-mauve" />
        <div className="px-7 md:px-10 py-10 md:py-12 text-center">
          <span className="inline-flex items-center gap-3 text-mauve uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold italic">
            <span className="inline-block w-6 h-px bg-mauve" />
            A Word for You
            <span className="inline-block w-6 h-px bg-mauve" />
          </span>
          <blockquote
            id="welcome-verse-title"
            className="font-serif text-2xl md:text-3xl leading-snug italic mb-6"
          >
            &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
          </blockquote>
          <cite className="not-italic block text-[11px] uppercase tracking-[0.4em] font-semibold text-accent mb-8">
            — Psalm 147:3
          </cite>
          <p className="text-sm md:text-base text-ink/70 leading-relaxed mb-8 max-w-md mx-auto">
            Welcome to Beauty Beyond Tears. Whatever brought you here — you are
            seen, you are loved, and you are not alone.
          </p>
          <button
            onClick={dismiss}
            className="group relative overflow-hidden px-8 py-3.5 bg-ink text-paper text-[11px] uppercase tracking-widest font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span className="relative z-10">Okay, proceed</span>
            <span className="absolute inset-0 bg-mauve translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </div>
    </div>
  );
}