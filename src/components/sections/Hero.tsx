import Media from "../Media";
import { videos } from "@/lib/assets";

const ORDER_URL = "https://littlematchacincy.square.site/";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Media asset={videos.hero} fill priority />

      {/* Legibility scrim — light enough to let the hero video read through */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-matcha-900/35 via-matcha-900/15 to-matcha-900/55" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(35,39,28,0.3)_100%)]" />

      {/* Floating leaves */}
      <svg
        viewBox="0 0 40 40"
        className="animate-float absolute left-[8%] top-[24%] hidden h-10 w-10 text-cream-foam/20 lg:block"
        aria-hidden="true"
      >
        <path d="M20 6c-6 4-7.7 10 0 17 7.7-7 6-13 0-17z" fill="currentColor" />
      </svg>
      <svg
        viewBox="0 0 40 40"
        className="animate-float-slow absolute right-[10%] top-[60%] hidden h-14 w-14 text-cream-foam/15 lg:block"
        aria-hidden="true"
      >
        <path d="M20 6c-6 4-7.7 10 0 17 7.7-7 6-13 0-17z" fill="currentColor" />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream-foam">
        <p
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cream-foam/80 opacity-0"
          style={{ animation: "lm-rise 0.9s var(--ease-out-soft) 0.1s forwards" }}
        >
          Covington, KY · Hand-whisked daily
        </p>
        <h1
          className="font-display text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem] opacity-0"
          style={{ animation: "lm-rise 1s var(--ease-out-soft) 0.25s forwards" }}
        >
          A tiny green escape.
        </h1>
        <p
          className="mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed text-cream-foam/90 sm:text-xl opacity-0"
          style={{ animation: "lm-rise 1s var(--ease-out-soft) 0.45s forwards" }}
        >
          Single-origin matcha, hojicha, and genmaicha — whisked by hand from a
          small family farm in Shizuoka, Japan.
        </p>
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0"
          style={{ animation: "lm-rise 1s var(--ease-out-soft) 0.65s forwards" }}
        >
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full rounded-full bg-cream-foam px-8 py-4 text-base font-semibold text-matcha-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-matcha-900/20 sm:w-auto"
          >
            Order Now
          </a>
          <a
            href="#menu"
            className="w-full rounded-full border border-cream-foam/40 px-8 py-4 text-base font-semibold text-cream-foam backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cream-foam/80 hover:bg-cream-foam/10 sm:w-auto"
          >
            See the Menu
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#story"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-foam/70 transition-colors hover:text-cream-foam"
        aria-label="Scroll to story"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream-foam/40 p-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cream-foam/80" />
        </span>
      </a>
    </section>
  );
}
