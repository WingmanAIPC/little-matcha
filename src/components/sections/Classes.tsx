import Media from "../Media";
import Reveal from "../Reveal";
import { images } from "@/lib/assets";

const ORDER_URL = "https://littlematchacincy.square.site/";

const includes = [
  "The history of matcha, from leaf to bowl",
  "Hands-on whisking with a bamboo chasen",
  "A guided matcha latte flight",
  "Take-home supplies to keep the ritual going",
];

function Leaf() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-matcha-300" aria-hidden="true">
      <path d="M12 3c-4 2.6-5.1 6.7 0 11 5.1-4.3 4-8.4 0-11z" fill="currentColor" />
    </svg>
  );
}

export default function Classes() {
  return (
    <section id="classes" className="scroll-mt-20 bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-matcha-800 text-cream-foam lg:grid-cols-2">
            <div className="flex flex-col justify-center p-9 sm:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matcha-300">
                Sundays at Little Matcha
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Learn the way of matcha.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-cream-foam/80">
                Join an intimate four-person class and go from dry leaf to a
                bowl you whisked yourself. Perfect for a date, a catch-up, or a
                little solo treat.
              </p>
              <ul className="mt-8 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream-foam/90">
                    <Leaf />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-cream-foam px-7 py-3.5 font-semibold text-matcha-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Reserve your seat
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="relative min-h-[320px] lg:min-h-[560px]">
              <Media asset={images.classTable} fill sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-matcha-900/30 to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
