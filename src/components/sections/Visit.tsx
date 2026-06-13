import Media from "../Media";
import Reveal from "../Reveal";
import { videos } from "@/lib/assets";

const ORDER_URL = "https://littlematchacincy.square.site/";
const ADDRESS = "332 Scott St, Covington, KY 41011";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=332+Scott+St,+Covington,+KY+41011";
const MAP_EMBED =
  "https://www.google.com/maps?q=332+Scott+St,+Covington,+KY+41011&output=embed";

const hours = [
  { day: "Monday – Friday", time: "7:30 am – 4:00 pm" },
  { day: "Saturday", time: "10:00 am – 5:00 pm" },
  { day: "Sunday", time: "10:00 am – 4:00 pm" },
];

export default function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 bg-ink text-cream-foam">
      {/* Ambiance band */}
      <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <Media asset={videos.cafe} fill sizes="100vw" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-ink via-ink/25 to-ink/35" />
        <div className="absolute inset-0 z-[2] flex items-center justify-center px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matcha-200/90">
              Visit us
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Come sit with us.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            Little Matcha
          </h3>
          <p className="mt-3 text-lg text-cream-foam/80">{ADDRESS}</p>
          <p className="mt-1 text-cream-foam/60">
            Next to 12th Street Pilates — a little wellness corner of Covington.
          </p>

          <dl className="mt-9 divide-y divide-cream-foam/10 border-y border-cream-foam/10">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-4">
                <dt className="text-cream-foam/70">{h.day}</dt>
                <dd className="font-medium">{h.time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream-foam px-7 py-3.5 text-center font-semibold text-matcha-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Order ahead
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream-foam/30 px-7 py-3.5 text-center font-semibold text-cream-foam transition-all duration-300 hover:-translate-y-0.5 hover:border-cream-foam/70"
            >
              Get directions
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-cream-foam/10 shadow-xl shadow-black/30">
            <iframe
              title="Map to Little Matcha"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full grayscale-[0.2] sm:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
