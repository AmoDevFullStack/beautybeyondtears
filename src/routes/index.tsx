import { createFileRoute } from "@tanstack/react-router";
import bookCover from "@/assets/book-life-of-widow.jpg";
import articleWindow from "@/assets/article-window.jpg";
import articleTypewriter from "@/assets/article-typewriter.jpg";
import articleLibrary from "@/assets/article-library.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper text-ink font-sans selection:bg-accent/20">
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-ink/5">
        <a href="#top" className="font-serif italic text-2xl tracking-tight">
          P. Moselakgmo
        </a>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#books" className="hover:text-accent transition-colors">The Books</a>
          <a href="#journal" className="hover:text-accent transition-colors">Journal</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <a
          href="#newsletter"
          className="px-5 py-2 border border-ink text-[11px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-all"
        >
          Newsletter
        </a>
      </nav>

      <header
        id="top"
        className="relative px-6 md:px-10 pt-16 md:pt-20 pb-24 md:pb-32 grid grid-cols-12 gap-8 items-end"
      >
        <div className="col-span-12 lg:col-span-7">
          <span className="block text-accent uppercase tracking-[0.3em] text-[10px] mb-6 font-semibold italic">
            New Release
          </span>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tighter mb-8">
            Life of a <br />
            <span className="italic pl-8 md:pl-12">Widow</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink/70">
            An intimate exploration of loss, resilience, and the quiet
            architecture of rebuilding a life when the foundation shifts
            unexpectedly.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <img
            src={bookCover}
            alt="Cover of Life of a Widow by Pontsho Moselakgmo"
            width={800}
            height={1200}
            className="w-full aspect-[2/3] object-cover shadow-2xl transition-transform duration-500 hover:-rotate-1"
          />
        </div>
      </header>

      <section id="journal" className="px-6 md:px-10 py-20 md:py-24 bg-ink text-paper">
        <div className="flex justify-between items-end mb-16 border-b border-paper/10 pb-8">
          <h2 className="font-serif text-3xl md:text-4xl italic">The Anthology</h2>
          <a
            href="#journal"
            className="text-[10px] uppercase tracking-widest border-b border-paper/30 pb-1 hover:border-paper transition-all"
          >
            Read all entries
          </a>
        </div>

        <div className="grid grid-cols-12 gap-y-16 lg:gap-12">
          <article className="col-span-12 lg:col-span-6 group cursor-pointer">
            <div className="w-full aspect-video mb-6 overflow-hidden">
              <img
                src={articleWindow}
                alt="Woman looking out a rain-streaked window"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <span className="text-[9px] uppercase tracking-widest text-accent">Perspective</span>
              <span className="text-[9px] uppercase tracking-widest text-paper/40">8 Min Read</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:italic transition-all">
              Finding the words when silence is louder
            </h3>
            <p className="text-paper/60 leading-relaxed font-light">
              Reflections on the first chapter of &lsquo;Life of a Widow&rsquo;
              and the universal language of grief.
            </p>
          </article>

          <div className="col-span-12 lg:col-span-6 flex flex-col gap-12">
            <article className="grid grid-cols-12 gap-6 group cursor-pointer">
              <div className="col-span-4">
                <img
                  src={articleTypewriter}
                  alt="Vintage typewriter keys"
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="col-span-8">
                <span className="text-[9px] uppercase tracking-widest text-paper/40 mb-2 block">Process</span>
                <h4 className="font-serif text-xl">The Art of Truth-Telling in Fiction</h4>
                <p className="text-sm text-paper/50 mt-2">
                  How real-life experiences shape the narrative arc of
                  Moselakgmo&rsquo;s newest work.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-12 gap-6 group cursor-pointer">
              <div className="col-span-4">
                <img
                  src={articleLibrary}
                  alt="Sunlit home library"
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="col-span-8">
                <span className="text-[9px] uppercase tracking-widest text-paper/40 mb-2 block">Events</span>
                <h4 className="font-serif text-xl">A Seat at the Author&rsquo;s Table</h4>
                <p className="text-sm text-paper/50 mt-2">
                  Joining the upcoming virtual book tour and intimate reading
                  sessions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="books" className="px-6 md:px-10 py-24 md:py-32">
        <div className="flex justify-between items-end mb-16 border-b border-ink/10 pb-8">
          <h2 className="font-serif text-3xl md:text-4xl italic">The Library</h2>
          <span className="text-[10px] uppercase tracking-widest text-ink/40">Three volumes</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <article className="group">
            <div className="w-full aspect-[2/3] mb-6 overflow-hidden bg-ink/5">
              <img
                src={bookCover}
                alt="Life of a Widow"
                loading="lazy"
                width={600}
                height={900}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <span className="text-[9px] uppercase tracking-widest text-accent">2024 — Novel</span>
            <h3 className="font-serif text-2xl mt-2 group-hover:italic transition-all">Life of a Widow</h3>
            <p className="text-sm text-ink/60 mt-2 leading-relaxed">
              A meditation on the architecture of absence and the slow work of return.
            </p>
          </article>

          <article className="group md:mt-12">
            <div className="w-full aspect-[2/3] mb-6 bg-ink/5 flex items-center justify-center">
              <span className="font-serif italic text-ink/30 text-xl">The Silent Echo</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-accent">2021 — Essays</span>
            <h3 className="font-serif text-2xl mt-2 group-hover:italic transition-all">The Silent Echo</h3>
            <p className="text-sm text-ink/60 mt-2 leading-relaxed">
              Essays on inheritance, language, and the rooms our mothers kept.
            </p>
          </article>

          <article className="group md:mt-24">
            <div className="w-full aspect-[2/3] mb-6 bg-ink/5 flex items-center justify-center">
              <span className="font-serif italic text-ink/30 text-xl">Beyond the Horizon</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-accent">2018 — Novel</span>
            <h3 className="font-serif text-2xl mt-2 group-hover:italic transition-all">Beyond the Horizon</h3>
            <p className="text-sm text-ink/60 mt-2 leading-relaxed">
              A debut novel charting one woman&rsquo;s journey from Limpopo to Johannesburg.
            </p>
          </article>
        </div>
      </section>

      <section
        id="about"
        className="py-24 md:py-32 flex flex-col items-center text-center px-6 md:px-10"
      >
        <div className="w-16 h-px bg-accent mb-12" />
        <blockquote className="font-serif text-3xl md:text-5xl max-w-4xl leading-tight italic mb-12">
          &ldquo;Writing is how I navigate the map of the heart. Every book is a
          compass for a different season of the soul.&rdquo;
        </blockquote>
        <cite className="not-italic text-[11px] uppercase tracking-[0.4em] font-semibold text-accent">
          Pontsho Moselakgmo
        </cite>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32 grid grid-cols-12 gap-8 max-w-6xl mx-auto">
        <div className="col-span-12 lg:col-span-3">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
            Recognition
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-9 space-y-6">
          {[
            ["The Sunday Review", "“A voice of luminous restraint.”"],
            ["Mail & Guardian", "“Moselakgmo writes grief into something holy.”"],
            ["Literature Today", "“Devastating and necessary.”"],
          ].map(([outlet, quote]) => (
            <div
              key={outlet}
              className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-ink/10 pb-6 group"
            >
              <span className="text-xl md:text-2xl font-serif italic">{outlet}</span>
              <span className="text-sm text-ink/50 group-hover:text-ink transition-colors mt-2 md:mt-0">
                {quote}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="newsletter"
        className="bg-ink text-paper px-6 md:px-10 py-24 md:py-32"
      >
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50">
            Correspondence
          </span>
          <h3 className="font-serif italic text-3xl md:text-5xl mt-6 mb-12 leading-tight">
            Sign up for the occasional letter on life and letters.
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border-b border-paper/20 pb-3 max-w-xl"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="bg-transparent w-full outline-none text-sm placeholder:text-paper/40"
            />
            <button
              type="submit"
              className="text-[10px] uppercase tracking-widest font-semibold hover:text-accent transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer id="contact" className="px-6 md:px-10 py-20 border-t border-ink/5">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-serif italic text-3xl mb-6">P.M.</div>
            <p className="text-xs tracking-widest text-ink/40 leading-loose">
              © 2024 PONTSHO MOSELAKGMO.
              <br />
              ALL RIGHTS RESERVED.
              <br />
              ESTABLISHED IN SOUTH AFRICA.
            </p>
          </div>
          <div className="col-span-6 lg:col-span-4 flex flex-col gap-4">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-4">Literature</h5>
            <a href="#books" className="text-sm hover:italic transition-all">Life of a Widow</a>
            <a href="#books" className="text-sm hover:italic transition-all">The Silent Echo</a>
            <a href="#books" className="text-sm hover:italic transition-all">Beyond the Horizon</a>
          </div>
          <div className="col-span-6 lg:col-span-4 flex flex-col gap-4">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-4">Connect</h5>
            <a href="#" className="text-sm hover:italic transition-all">Instagram</a>
            <a href="#" className="text-sm hover:italic transition-all">Twitter</a>
            <a href="mailto:hello@pmoselakgmo.com" className="text-sm hover:italic transition-all">
              hello@pmoselakgmo.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}