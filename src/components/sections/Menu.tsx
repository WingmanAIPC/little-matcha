import Media from "../Media";
import Reveal from "../Reveal";
import { images, type BrandAsset, type Tone } from "@/lib/assets";
import { menu, milks, pastFavorites, type MenuItem } from "@/lib/menu";

const ORDER_URL = "https://littlematchacincy.square.site/";

function resolveAsset(item: MenuItem, tone: Tone): BrandAsset {
  if (item.assetId && images[item.assetId]) return images[item.assetId];
  return {
    id: item.name,
    kind: "image",
    src: null,
    alt: item.name,
    prompt: "",
    aspect: "1/1",
    tone,
  };
}

function DrinkCard({
  item,
  tone,
  delay,
}: {
  item: MenuItem;
  tone: Tone;
  delay: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group overflow-hidden rounded-3xl bg-cream shadow-sm ring-1 ring-matcha-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-matcha-900/10"
    >
      <div className="relative">
        <Media
          asset={resolveAsset(item, tone)}
          className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        {item.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-cream-foam/90 px-3 py-1 text-xs font-semibold text-matcha-800 backdrop-blur-sm">
            {item.badge}
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h4 className="font-display text-xl font-semibold text-ink">
            {item.name}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-stone">
            {item.description}
          </p>
        </div>
        <span className="shrink-0 font-display text-lg font-semibold text-matcha-700">
          {item.price}
        </span>
      </div>
    </Reveal>
  );
}

function ListRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-matcha-900/10 py-5 last:border-0">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <h4 className="font-display text-xl font-semibold text-ink">
            {item.name}
          </h4>
          {item.badge && (
            <span className="rounded-full bg-matcha-100 px-2.5 py-0.5 text-[0.7rem] font-semibold text-matcha-700">
              {item.badge}
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-stone">
          {item.description}
        </p>
      </div>
      <span className="ml-auto shrink-0 font-display text-lg font-semibold text-matcha-700">
        {item.price}
      </span>
    </div>
  );
}

export default function Menu() {
  const og = menu.find((c) => c.id === "signatures")!;
  const coffee = menu.find((c) => c.id === "coffee")!;
  const seasonal = menu.find((c) => c.id === "seasonal")!;

  return (
    <section id="menu" className="scroll-mt-20 bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matcha-600">
            The Menu
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Whisked to order, every time.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Hot or iced, with whole, oat, coconut, or almond milk. Our seasonal
            flavors change every two weeks — these are a taste of what&apos;s
            pouring now.
          </p>
        </Reveal>

        {/* OG Line */}
        <div className="mt-16">
          <Reveal className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {og.title}
              </h3>
              <p className="mt-2 max-w-xl text-stone">{og.blurb}</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {og.items.map((item, i) => (
              <DrinkCard key={item.name} item={item} tone="matcha" delay={i * 90} />
            ))}
          </div>
        </div>

        {/* Seasonal */}
        <div className="mt-20">
          <Reveal className="mb-7">
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {seasonal.title}
            </h3>
            <p className="mt-2 max-w-2xl text-stone">{seasonal.blurb}</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seasonal.items.map((item, i) => (
              <DrinkCard key={item.name} item={item} tone="clay" delay={i * 90} />
            ))}
          </div>
        </div>

        {/* Coffee + Notes */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {coffee.title}
            </h3>
            <p className="mt-2 text-stone">{coffee.blurb}</p>
            <div className="mt-6">
              {coffee.items.map((item) => (
                <ListRow key={item.name} item={item} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-8">
            <div className="rounded-3xl bg-matcha-700 p-8 text-cream-foam">
              <h4 className="font-display text-xl font-semibold">
                Make it yours
              </h4>
              <p className="mt-2 text-cream-foam/80">
                Every drink, your way. Choose your milk:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {milks.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-cream-foam/25 px-3.5 py-1.5 text-sm"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-ink">
                Flavors we&apos;ve loved before
              </h4>
              <p className="mt-1 text-sm text-stone">
                Past rotations — gone for now, but they always come back around.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pastFavorites.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-cream px-3.5 py-1.5 text-sm text-matcha-800 ring-1 ring-matcha-900/10"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-cream-foam transition-all duration-300 hover:-translate-y-0.5 hover:bg-matcha-900"
            >
              Order the full menu
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <p className="mt-12 text-sm text-stone/80">
          Menu rotates every two weeks; prices may vary in store.
        </p>
      </div>
    </section>
  );
}
