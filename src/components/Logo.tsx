import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  showWord?: boolean;
  wordClassName?: string;
}

/** The Little Matcha mark — a whisked tea leaf in a bowl. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      <circle cx="20" cy="20" r="19" className="fill-matcha-700" />
      {/* bowl */}
      <path
        d="M9 21c0 6.6 4.9 11 11 11s11-4.4 11-11H9z"
        className="fill-matcha-100"
      />
      <path
        d="M9 21c0 6.6 4.9 11 11 11s11-4.4 11-11"
        className="stroke-matcha-200"
        strokeWidth="0.8"
      />
      {/* leaf */}
      <g transform="rotate(-12 20 14)">
        <path
          d="M20 5c-5 3.2-6.4 8.3 0 14 6.4-5.7 5-10.8 0-14z"
          className="fill-matcha-200"
        />
        <path
          d="M20 6.5V18"
          className="stroke-matcha-700"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default function Logo({
  className,
  showWord = true,
  wordClassName,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showWord && (
        <span
          className={cn(
            "font-display text-[1.35rem] leading-none font-semibold tracking-tight",
            wordClassName
          )}
        >
          little matcha
        </span>
      )}
    </span>
  );
}
