import Media from "../Media";
import Reveal from "../Reveal";
import { images } from "@/lib/assets";

const stats = [
  { value: "1", label: "Family farm in Shizuoka, Japan" },
  { value: "3", label: "New flavors every two weeks" },
  { value: "100%", label: "Whisked by hand, to order" },
];

export default function Story() {
  return (
    <section id="story" className="relative scroll-mt-20 bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <Media
              asset={images.storyWhisk}
              className="w-full rounded-[2rem] shadow-xl shadow-matcha-900/10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-10 -right-4 w-44 rotate-3 overflow-hidden rounded-2xl border-4 border-cream shadow-lg shadow-matcha-900/15 sm:-right-8 sm:w-60">
              <Media
                asset={images.farm}
                className="w-full"
                sizes="240px"
              />
            </div>
            <div className="absolute -left-4 -top-6 flex h-24 w-24 animate-spin-slow items-center justify-center rounded-full bg-matcha-700 text-cream-foam sm:-left-8">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <defs>
                  <path
                    id="circle"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-cream-foam text-[10px] uppercase tracking-[0.25em]">
                  <textPath href="#circle">
                    single origin · shizuoka · single origin ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="order-1 lg:order-2" delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matcha-600">
            Our Story
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            From a Hyde Park pop-up to a little green corner of Covington.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone">
            <p>
              Little Matcha started with Cindy and Derek, a couple who traded
              Manhattan for Cincinnati and noticed something missing — a calm,
              beautiful place built entirely around great matcha.
            </p>
            <p>
              So they made one. We work directly with a small, family-owned farm
              in <span className="font-medium text-matcha-700">Shizuoka, Japan</span>{" "}
              for our own house label, then whisk every drink by hand. The menu
              rotates every two weeks, so there&apos;s always a new reason to
              come back.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-matcha-900/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-semibold text-matcha-700 sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-stone sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
