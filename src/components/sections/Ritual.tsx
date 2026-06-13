import Media from "../Media";
import Reveal from "../Reveal";
import { videos } from "@/lib/assets";

const steps = [
  {
    n: "01",
    title: "Source",
    body: "Single-origin leaves from one family farm in Shizuoka, shade-grown and stone-milled.",
  },
  {
    n: "02",
    title: "Whisk",
    body: "Sifted, then whisked by hand with a bamboo chasen until the foam turns silky.",
  },
  {
    n: "03",
    title: "Serve",
    body: "Poured over the milk of your choice and made to order — calm, never rushed.",
  },
];

export default function Ritual() {
  return (
    <section className="bg-ink text-cream-foam">
      <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden sm:h-[78vh]">
        <Media asset={videos.ritual} fill sizes="100vw" />
        <div className="absolute inset-0 z-[2] bg-black/20" />
        <div className="absolute inset-0 z-[2] flex items-center justify-center px-6">
          <Reveal className="max-w-3xl text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matcha-200/90">
              The craft
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              The ritual, not the rush.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-cream-foam/80">
              Good matcha can&apos;t be hurried. Every cup is a few quiet minutes
              of whisking — and you can taste the difference.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-5 py-16 sm:grid-cols-3 sm:px-8 sm:py-20">
        {steps.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 120}
            className="px-2 sm:px-8 sm:first:pl-0 sm:last:pr-0"
          >
            <div className="font-display text-5xl font-semibold text-matcha-500/70">
              {step.n}
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-cream-foam/70">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
