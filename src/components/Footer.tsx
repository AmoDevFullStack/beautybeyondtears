import logo from "@/assets/bbt/logo.jpeg.asset.json";
import flyer from "@/assets/bbt/flyer.jpeg.asset.json";

export function Footer() {
  return (
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
  );
}
