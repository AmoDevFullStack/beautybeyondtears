import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { WelcomeVerse } from "@/components/WelcomeVerse";
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

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children?: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as any;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Comp>
  );
}

const gallery = [
  {
    src: g3.url,
    alt: "Sisters together at a Beauty Beyond Tears gathering",
    chapter: "Chapter I",
    title: "Together, we bloom",
    story:
      "A circle of sisters around a balloon arch — proof that joy returns, even when we arrive in a wheelchair, even when we arrive in tears.",
  },
  {
    src: g4.url,
    alt: "A woman singing into a microphone",
    chapter: "Chapter II",
    title: "Worship as medicine",
    story:
      "When words run out, song carries us. Praise is the first language of healing in this house.",
  },
  {
    src: g1.url,
    alt: "Two women embracing at a community dinner",
    chapter: "Chapter III",
    title: "Held, not handled",
    story:
      "Sometimes ministry looks like a long hug over an unfinished plate of food — a witness that you are not invisible.",
  },
  {
    src: g6.url,
    alt: "Two worship leaders ministering in song",
    chapter: "Chapter IV",
    title: "Voices lifted together",
    story:
      "Side by side, two voices weave a covering of prayer over every woman in the room.",
  },
  {
    src: g7.url,
    alt: "Three women smiling, arms around each other",
    chapter: "Chapter V",
    title: "Mothers, sisters, friends",
    story:
      "The faces of a community that refuses to let anyone walk alone — across generations, across stories.",
  },
  {
    src: g5.url,
    alt: "Fellowship dancing in the meeting hall",
    chapter: "Chapter VI",
    title: "Dance after mourning",
    story:
      "Balloons on the floor, music in the air. Even the wheelchair joins the circle. Grief does not get the last word here.",
  },
  {
    src: g8.url,
    alt: "Three women at the threshold of the hall",
    chapter: "Chapter VII",
    title: "At the threshold",
    story:
      "Three women stand at the door of the gathering — a quiet picture of what restoration looks like in real life.",
  },
  {
    src: g2.url,
    alt: "Pontsho M ministering on stage",
    chapter: "Chapter VIII",
    title: "The word she carries",
    story:
      "Pontsho speaks the message that birthed this ministry: we are not defined by our pain — we are transformed through it.",
  },
];

function Index() {
  return (
    <div className="bg-paper text-ink font-sans selection:bg-mauve/20">
      <WelcomeVerse />
      {/* NAV */}
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

      {/* HERO — logo is the main visual */}
      <header
        id="top"
        className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid grid-cols-12 gap-10 items-center grain"
      >
        {/* soft blush wash */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blush/50 via-paper to-paper" />
        {/* floating decorative orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-mauve/15 blur-3xl -z-10 animate-soft-pulse" />
        <div
          className="pointer-events-none absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-accent/15 blur-3xl -z-10 animate-soft-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
          <span className="inline-flex items-center gap-3 text-mauve uppercase tracking-[0.35em] text-[10px] mb-6 font-semibold italic animate-fade-in">
            <span className="inline-block w-8 h-px bg-mauve" />
            A Ministry of Hope &amp; Healing
          </span>
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.88] tracking-tight mb-8 animate-blur-in"
            style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
          >
            We are beautiful souls{" "}
            <span className="italic text-shimmer">beyond</span> the tears we cry.
          </h1>
          <p
            className="max-w-lg text-lg leading-relaxed text-ink/70 mb-10 animate-rise"
            style={{ animationDelay: "260ms", animationFillMode: "backwards" }}
          >
            Finding hope, healing &amp; love after pain. A sanctuary for women
            walking through grief, loss, and the long road back to themselves.
            You are seen. You are loved. You are not alone.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-rise"
            style={{ animationDelay: "400ms", animationFillMode: "backwards" }}
          >
            <a
              href="https://wa.me/27684470413" target="_blank" rel="noreferrer"
              className="group relative overflow-hidden px-7 py-4 bg-ink text-paper text-[11px] uppercase tracking-widest transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span className="relative z-10">Talk to Someone</span>
              <span className="absolute inset-0 bg-mauve translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
            <a
              href="#offer"
              className="group px-7 py-4 border border-ink/30 text-[11px] uppercase tracking-widest hover:border-ink transition-all hover:-translate-y-0.5"
            >
              What We Offer
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <div className="relative animate-scale-in group">
            {/* glow */}
            <div className="absolute -inset-10 bg-blush/40 rounded-full blur-3xl -z-10 animate-soft-pulse" />
            {/* rotating dashed ring */}
            <div className="pointer-events-none absolute -inset-6 rounded-full border border-dashed border-mauve/30 animate-slow-spin -z-10" />
            {/* inner ring, opposite spin */}
            <div
              className="pointer-events-none absolute inset-4 rounded-full border border-accent/20 animate-slow-spin -z-10"
              style={{ animationDirection: "reverse", animationDuration: "60s" }}
            />
            <div className="animate-floaty">
              <img
                src={logo.url}
                alt="Beauty Beyond Tears — Pontsho Moselakgomo"
                width={640}
                height={640}
                className="w-full max-w-md aspect-square object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE — modern editorial strip */}
      <div
        aria-hidden
        className="border-y border-ink/10 bg-paper overflow-hidden py-5"
      >
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_38s_linear_infinite] font-serif italic text-2xl md:text-3xl text-ink/80">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              <span>Beauty in dark places</span>
              <span className="text-mauve">✦</span>
              <span>Love beyond broken</span>
              <span className="text-mauve">✦</span>
              <span>Prayer beyond the tears</span>
              <span className="text-mauve">✦</span>
              <span>Transformed, not defined</span>
              <span className="text-mauve">✦</span>
              <span>You are not alone</span>
              <span className="text-mauve">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION VERSE */}
      <section
        id="mission"
        className="relative px-6 md:px-10 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mauve/40 to-transparent" />
        <Reveal className="w-16 h-px bg-accent mb-10" />
        <Reveal delay={120}>
          <blockquote className="font-serif text-3xl md:text-5xl max-w-4xl leading-tight italic mb-8 text-ink">
            &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={260}>
          <cite className="not-italic text-[11px] uppercase tracking-[0.4em] font-semibold text-accent">
            — Psalm 147:3
          </cite>
        </Reveal>
      </section>

      {/* VISION & MISSION — from the brand brief */}
      <section className="px-6 md:px-10 pb-24 md:pb-32 grid grid-cols-12 gap-10">
        <Reveal className="col-span-12 lg:col-span-5">
          <span className="inline-block px-3 py-1 bg-mauve text-paper text-[10px] uppercase tracking-[0.3em] font-semibold mb-8">
            Our Vision
          </span>
          <h3 className="font-serif text-3xl md:text-5xl leading-[1.05]">
            We see <span className="italic text-mauve">beauty</span> in dark places.
            We <span className="italic text-mauve">love</span> beyond broken.
            We <span className="italic text-mauve">pray</span> beyond the tears.
          </h3>
        </Reveal>
        <Reveal delay={150} className="col-span-12 lg:col-span-6 lg:col-start-7">
          <span className="inline-block px-3 py-1 bg-mauve text-paper text-[10px] uppercase tracking-[0.3em] font-semibold mb-8">
            Our Mission
          </span>
          <ul className="divide-y divide-ink/10">
            {[
              "We are not defined by our pain — we are transformed through it.",
              "We build platforms and support systems that turn loneliness into belonging.",
              "We affirm and show love daily, through speech and through action.",
              "We respect and respond to every individual who reaches out to us.",
            ].map((line, i) => (
              <li key={i} className="flex gap-6 py-5 group hover:translate-x-1 transition-transform duration-300">
                <span className="font-serif italic text-mauve text-xl pt-0.5 w-10 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-lg leading-relaxed text-ink/80 group-hover:text-ink transition-colors">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* WE OFFER */}
      <section id="offer" className="bg-ink text-paper px-6 md:px-10 py-20 md:py-28">
        <Reveal className="flex justify-between items-end mb-16 border-b border-paper/10 pb-8">
          <h2 className="font-serif text-3xl md:text-4xl italic">We Offer</h2>
          <span className="text-[10px] uppercase tracking-widest text-paper/40">Four pillars</span>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            ["01", "Confidential Counseling", "A private space to be heard, without judgement, in your own time."],
            ["02", "Prayer & Spiritual Encouragement", "Standing with you in faith through every season of the soul."],
            ["03", "A Safe Space to Heal", "Sister circles, retreats, and a community that holds you steady."],
            ["04", "Faith, Hope & Community", "Belonging — for every woman, every season, every story."],
          ].map(([n, title, copy], idx) => (
            <Reveal as="article" key={n} delay={idx * 120} className="group">
              <span className="block font-serif italic text-mauve text-4xl mb-6 group-hover:-translate-y-1 transition-transform duration-300">{n}</span>
              <h3 className="font-serif text-2xl mb-3 group-hover:italic transition-all">{title}</h3>
              <p className="text-sm text-paper/60 leading-relaxed font-light">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-10 items-center">
        <Reveal className="col-span-12 lg:col-span-5 overflow-hidden">
          <img
            src={g2.url}
            alt="Pontsho M ministering on stage"
            width={900}
            height={1200}
            className="w-full aspect-[3/4] object-cover shadow-2xl hover:scale-105 transition-transform duration-[1200ms]"
          />
        </Reveal>
        <Reveal delay={180} className="col-span-12 lg:col-span-6 lg:col-start-7">
          <span className="block text-mauve uppercase tracking-[0.3em] text-[10px] mb-6 font-semibold italic">
            The Founder
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] mb-8">
            Pontsho <span className="italic">Moselakgomo</span>
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
        </Reveal>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 md:px-10 py-20 md:py-28 bg-blush/25">
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 border-b border-ink/10 pb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-mauve font-semibold">
              The Field Journal
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic mt-3">
              Stories from the gatherings
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-ink/40">
            Eight chapters · One ministry
          </span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {gallery.map((img, i) => (
            <Reveal
              as="figure"
              key={img.src}
              delay={(i % 3) * 120}
              className={`group flex flex-col ${
                i === 0 ? "md:col-span-2 lg:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="overflow-hidden mb-5 bg-ink/5">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:brightness-105 ${
                    i === 0 ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/5]"
                  }`}
                />
              </div>
              <figcaption className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-mauve font-semibold mb-2">
                  {img.chapter}
                </span>
                <h3
                  className={`font-serif italic leading-tight mb-2 ${
                    i === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {img.title}
                </h3>
                <p
                  className={`text-ink/65 leading-relaxed font-light ${
                    i === 0 ? "text-base md:text-lg max-w-xl" : "text-sm"
                  }`}
                >
                  {img.story}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CALL */}
      <section id="contact" className="bg-mauve text-paper px-6 md:px-10 py-24 md:py-32">
        <Reveal className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-paper/70">
            For Support or to Talk to Someone
          </span>
          <h3 className="font-serif italic text-4xl md:text-6xl mt-6 mb-10 leading-tight">
            Come as you are.<br />Leave lighter, loved, and restored.
          </h3>
          <a
            href="https://wa.me/27684470413" target="_blank" rel="noreferrer"
            className="inline-block font-serif text-4xl md:text-6xl tracking-wide border-b-2 border-paper/40 hover:border-paper pb-2 transition-all hover:scale-105"
          >
            068&nbsp;447&nbsp;0413
          </a>
          <p className="mt-10 text-sm text-paper/70 tracking-wide">
            Confidential. Compassionate. Always.
          </p>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-16 border-t border-ink/10">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-5">
            <img src={logo.url} alt="Beauty Beyond Tears" className="h-16 w-16 object-contain mb-4" />
            <p className="font-serif italic text-xl mb-3">Beauty Beyond Tears</p>
            <p className="text-sm text-ink/70 leading-relaxed mb-4 max-w-sm italic">
              We are beautiful souls beyond the tears we cry.
            </p>
            <p className="text-xs tracking-widest text-ink/50 leading-loose">
              © 2026 PONTSHO M.<br />A MINISTRY OF HOPE & HEALING.<br />SOUTH AFRICA.
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3 flex flex-col gap-3">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-3">Visit</h5>
            <a href="#mission" className="text-sm hover:italic">Mission</a>
            <a href="#offer" className="text-sm hover:italic">We Offer</a>
            <a href="#gallery" className="text-sm hover:italic">Field Journal</a>
          </div>
          <div className="col-span-6 lg:col-span-4 flex flex-col gap-3">
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-3">Reach Out</h5>
            <a href="https://wa.me/27684470413" target="_blank" rel="noreferrer" className="text-sm hover:italic">
              Phone · 068 447 0413
            </a>
            <a
              href="mailto:Beautybeyondtears1@gmail.com"
              className="text-sm hover:italic break-all"
            >
              Beautybeyondtears1@gmail.com
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:italic"
            >
              Facebook · Pontsho mo
            </a>
            <a
              href="https://www.tiktok.com/@pontsho.m64"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:italic"
            >
              TikTok · @Pontsho.M64
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