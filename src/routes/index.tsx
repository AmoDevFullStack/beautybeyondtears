import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/bbt/logo.jpeg.asset.json";
import flyer from "@/assets/bbt/flyer.jpeg.asset.json";
import g1 from "@/assets/bbt/g1.jpeg.asset.json";
import g2 from "@/assets/bbt/g2.jpeg.asset.json";
import g3 from "@/assets/bbt/g3.jpeg.asset.json";
import g4 from "@/assets/bbt/g4.jpeg.asset.json";
import g5 from "@/assets/bbt/g5.jpeg.asset.json";
import g6 from "@/assets/bbt/g6.jpeg.asset.json";
import g7 from "@/assets/bbt/g7.jpeg.asset.json";
import g8 from "@/assets/bbt/g8.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const gallery = [
  { src: g3.url, alt: "Beauty Beyond Tears community gathering" },
  { src: g4.url, alt: "Worship in song" },
  { src: g1.url, alt: "An embrace of comfort" },
  { src: g6.url, alt: "Voices lifted together" },
  { src: g7.url, alt: "Sisters of the ministry" },
  { src: g5.url, alt: "Fellowship and dance" },
  { src: g8.url, alt: "Three women at the threshold" },
  { src: g2.url, alt: "Pontsho M ministering" },
];

function Index() {
  return (
    <div className="bg-paper text-ink font-sans selection:bg-mauve/20">
      {/* NAV */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 border-b border-ink/10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Beauty Beyond Tears" className="h-12 w-12 object-contain" />
          <span className="font-serif text-lg leading-none">
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
          href="tel:+27684470413"
          className="px-4 md:px-5 py-2 bg-mauve text-paper text-[10px] uppercase tracking-widest hover:bg-ink transition-all"
        >
          068 447 0413
        </a>
      </nav>

      {/* HERO — logo is the main visual */}
      <header
        id="top"
        className="relative px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid grid-cols-12 gap-10 items-center"
      >
        {/* soft blush wash */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blush/40 via-paper to-paper" />

        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
          <span className="block text-mauve uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold italic">
            A Ministry of Hope & Healing
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.88] tracking-tight mb-8">
            Finding hope, healing &amp;{" "}
            <span className="italic text-mauve">love</span> after pain.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-ink/70 mb-10">
            You are seen. You are loved. You are not alone. A safe space for women
            walking through grief, loss, and the long road back to themselves.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+27684470413"
              className="px-7 py-4 bg-ink text-paper text-[11px] uppercase tracking-widest hover:bg-mauve transition-colors"
            >
              Talk to Someone
            </a>
            <a
              href="#offer"
              className="px-7 py-4 border border-ink/30 text-[11px] uppercase tracking-widest hover:border-ink transition-colors"
            >
              What We Offer
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-blush/30 rounded-full blur-3xl -z-10" />
            <img
              src={logo.url}
              alt="Beauty Beyond Tears — Pontsho M"
              width={640}
              height={640}
              className="w-full max-w-md aspect-square object-contain"
            />
          </div>
        </div>
      </header>

      {/* MISSION VERSE */}
      <section
        id="mission"
        className="px-6 md:px-10 py-24 md:py-32 flex flex-col items-center text-center"
      >
        <div className="w-16 h-px bg-accent mb-10" />
        <blockquote className="font-serif text-3xl md:text-5xl max-w-4xl leading-tight italic mb-8 text-ink">
          &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
        </blockquote>
        <cite className="not-italic text-[11px] uppercase tracking-[0.4em] font-semibold text-accent">
          — Psalm 147:3
        </cite>
      </section>

      {/* WE OFFER */}
      <section id="offer" className="bg-ink text-paper px-6 md:px-10 py-20 md:py-28">
        <div className="flex justify-between items-end mb-16 border-b border-paper/10 pb-8">
          <h2 className="font-serif text-3xl md:text-4xl italic">We Offer</h2>
          <span className="text-[10px] uppercase tracking-widest text-paper/40">Four pillars</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            ["01", "Confidential Counseling", "A private space to be heard, without judgement, in your own time."],
            ["02", "Prayer & Spiritual Encouragement", "Standing with you in faith through every season of the soul."],
            ["03", "A Safe Space to Heal", "Sister circles, retreats, and a community that holds you steady."],
            ["04", "Faith, Hope & Community", "Belonging — for every woman, every season, every story."],
          ].map(([n, title, copy]) => (
            <article key={n} className="group">
              <span className="block font-serif italic text-mauve text-4xl mb-6">{n}</span>
              <h3 className="font-serif text-2xl mb-3 group-hover:italic transition-all">{title}</h3>
              <p className="text-sm text-paper/60 leading-relaxed font-light">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-5">
          <img
            src={g2.url}
            alt="Pontsho M ministering on stage"
            width={900}
            height={1200}
            className="w-full aspect-[3/4] object-cover shadow-2xl"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <span className="block text-mauve uppercase tracking-[0.3em] text-[10px] mb-6 font-semibold italic">
            The Founder
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] mb-8">
            Pontsho <span className="italic">Moselakgmo</span>
          </h2>
          <p className="text-lg leading-relaxed text-ink/70 mb-6">
            Speaker, writer and author of <em>Life of a Widow</em>, Pontsho founded
            Beauty Beyond Tears as a sanctuary for women navigating grief and the
            slow, sacred work of becoming whole again.
          </p>
          <p className="text-base leading-relaxed text-ink/60">
            Through ministry, counseling, and the written word, she walks alongside
            those who feel unseen — reminding them that beauty rises, even through
            tears.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 md:px-10 py-20 md:py-24 bg-blush/25">
        <div className="flex justify-between items-end mb-12 border-b border-ink/10 pb-8">
          <h2 className="font-serif text-3xl md:text-4xl italic">Moments of Beauty</h2>
          <span className="text-[10px] uppercase tracking-widest text-ink/40">From the gatherings</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {gallery.map((img, i) => (
            <figure
              key={img.src}
              className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* CALL */}
      <section id="contact" className="bg-mauve text-paper px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-paper/70">
            For Support or to Talk to Someone
          </span>
          <h3 className="font-serif italic text-4xl md:text-6xl mt-6 mb-10 leading-tight">
            Come as you are.<br />Leave lighter, loved, and restored.
          </h3>
          <a
            href="tel:+27684470413"
            className="inline-block font-serif text-4xl md:text-6xl tracking-wide border-b-2 border-paper/40 hover:border-paper pb-2 transition-colors"
          >
            068&nbsp;447&nbsp;0413
          </a>
          <p className="mt-10 text-sm text-paper/70 tracking-wide">
            Confidential. Compassionate. Always.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-16 border-t border-ink/10">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-5">
            <img src={logo.url} alt="Beauty Beyond Tears" className="h-16 w-16 object-contain mb-4" />
            <p className="font-serif italic text-xl mb-3">Beauty Beyond Tears</p>
            <p className="text-xs tracking-widest text-ink/50 leading-loose">
              © 2026 PONTSHO M.<br />A MINISTRY OF HOPE & HEALING.<br />SOUTH AFRICA.
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3 flex flex-col gap-3">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-3">Visit</h5>
            <a href="#mission" className="text-sm hover:italic">Mission</a>
            <a href="#offer" className="text-sm hover:italic">We Offer</a>
            <a href="#gallery" className="text-sm hover:italic">Gallery</a>
          </div>
          <div className="col-span-6 lg:col-span-4 flex flex-col gap-3">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-3">Reach Out</h5>
            <a href="tel:+27684470413" className="text-sm hover:italic">068 447 0413</a>
            <a href="mailto:hello@beautybeyondtears.co.za" className="text-sm hover:italic">
              hello@beautybeyondtears.co.za
            </a>
          </div>
        </div>
        <div className="mt-12">
          <img
            src={flyer.url}
            alt="Beauty Beyond Tears flyer"
            loading="lazy"
            className="sr-only"
          />
        </div>
      </footer>
    </div>
  );
}