import { useEffect, useState } from "react";

const SESSION_KEY = "bbt-welcome-verse-shown";

type Verse = { text: string; ref: string };

const VERSES: Verse[] = [
  { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "Weeping may stay for the night, but rejoicing comes in the morning.", ref: "Psalm 30:5" },
  { text: "She is clothed with strength and dignity; she can laugh at the days to come.", ref: "Proverbs 31:25" },
  { text: "For I know the plans I have for you — plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { text: "Be strong and courageous. Do not be afraid; the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "The Lord is my shepherd, I lack nothing.", ref: "Psalm 23:1" },
  { text: "When you pass through the waters, I will be with you.", ref: "Isaiah 43:2" },
  { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
  { text: "You are altogether beautiful, my darling; there is no flaw in you.", ref: "Song of Solomon 4:7" },
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
  { text: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
  { text: "He gives strength to the weary and increases the power of the weak.", ref: "Isaiah 40:29" },
  { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", ref: "Numbers 6:24-25" },
  { text: "You are precious and honored in my sight, and I love you.", ref: "Isaiah 43:4" },
  { text: "Peace I leave with you; my peace I give you. Do not let your hearts be troubled.", ref: "John 14:27" },
  { text: "And we know that in all things God works for the good of those who love him.", ref: "Romans 8:28" },
];

export function WelcomeVerse() {
  const [open, setOpen] = useState(false);
  const [verse, setVerse] = useState<Verse>(VERSES[0]);

  useEffect(() => {
    // Pick a fresh verse on each visit — every visit is a prayer.
    const pick = VERSES[Math.floor(Math.random() * VERSES.length)];
    setVerse(pick);
    try {
      // Only suppress within the same tab session so refreshes/navigations
      // within one visit don't re-trigger, but every new visit does.
      if (!sessionStorage.getItem(SESSION_KEY)) {
        const t = setTimeout(() => setOpen(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
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
            &ldquo;{verse.text}&rdquo;
          </blockquote>
          <cite className="not-italic block text-[11px] uppercase tracking-[0.4em] font-semibold text-accent mb-8">
            — {verse.ref}
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