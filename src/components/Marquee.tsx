import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: string[];
  className?: string;
}

function Dot() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden="true">
      <g transform="rotate(-12 12 12)">
        <path d="M12 3c-4 2.6-5.1 6.7 0 11 5.1-4.3 4-8.4 0-11z" fill="currentColor" />
      </g>
    </svg>
  );
}

export default function Marquee({ items, className }: MarqueeProps) {
  const sequence = [...items, ...items];
  return (
    <div
      className={cn(
        "relative flex overflow-hidden border-y border-matcha-700/15 py-4 select-none",
        className
      )}
    >
      <div className="animate-marquee flex shrink-0 items-center gap-6 pr-6">
        {sequence.map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="font-display text-lg tracking-tight whitespace-nowrap sm:text-xl">
              {item}
            </span>
            <Dot />
          </div>
        ))}
      </div>
      <div
        className="animate-marquee flex shrink-0 items-center gap-6 pr-6"
        aria-hidden="true"
      >
        {sequence.map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="font-display text-lg tracking-tight whitespace-nowrap sm:text-xl">
              {item}
            </span>
            <Dot />
          </div>
        ))}
      </div>
    </div>
  );
}
