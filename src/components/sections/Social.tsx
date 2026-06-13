import Media from "../Media";
import Reveal from "../Reveal";
import { images, videos } from "@/lib/assets";

const IG_URL = "https://www.instagram.com/littlematcha.cincy/";

const tiles = [
  images.galleryFoam,
  images.galleryCounter,
  images.drinkSeasonal,
  images.productKit,
];

export default function Social() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matcha-600">
              The feed
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Follow the whisk.
            </h2>
            <p className="mt-4 text-lg text-stone">
              Daily pours, new-flavor drops, and behind-the-counter moments.
            </p>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-cream-foam transition-all duration-300 hover:-translate-y-0.5 hover:bg-matcha-900"
          >
            @littlematcha.cincy
          </a>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-stretch">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-matcha-900/10 ring-1 ring-matcha-900/5">
              <Media asset={videos.pour} className="w-full" sizes="(max-width: 1024px) 100vw, 22rem" />
              <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Reel
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {tiles.map((asset, i) => (
              <Reveal key={asset.id} delay={i * 80}>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[1.5rem] shadow-sm ring-1 ring-matcha-900/5"
                >
                  <Media
                    asset={asset}
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
