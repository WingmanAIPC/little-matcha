import Media from "../Media";
import Reveal from "../Reveal";
import { images } from "@/lib/assets";
import { products } from "@/lib/products";

const ORDER_URL = "https://littlematchacincy.square.site/";

export default function Shop() {
  return (
    <section id="shop" className="scroll-mt-20 bg-cream-foam py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matcha-600">
            Take it home
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            The whole ritual, boxed up.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            The same single-origin matcha we whisk behind the counter, plus the
            tools to make it beautifully at home — including charms hand-sewn by
            Cindy.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal
              key={product.name}
              delay={i * 80}
              className="group flex flex-col overflow-hidden rounded-3xl bg-cream ring-1 ring-matcha-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-matcha-900/10"
            >
              <div className="relative">
                <Media
                  asset={images[product.assetId]}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-cream-foam/90 px-3 py-1 text-xs font-semibold text-matcha-800 backdrop-blur-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-matcha-600">
                  {product.tagline}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-matcha-700">
                    {product.price}
                  </span>
                  <a
                    href={ORDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-matcha-700/10 px-4 py-2 text-sm font-semibold text-matcha-800 transition-colors hover:bg-matcha-700 hover:text-cream-foam"
                  >
                    Shop
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
