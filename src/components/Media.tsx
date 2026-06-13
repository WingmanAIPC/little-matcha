import Image from "next/image";
import type { ReactNode } from "react";
import type { BrandAsset, Tone } from "@/lib/assets";
import { cn } from "@/lib/cn";
import VideoBackground from "./VideoBackground";

const toneGradient: Record<Tone, string> = {
  matcha: "linear-gradient(135deg,#eef3e3 0%,#a7bd83 42%,#4d5d2c 100%)",
  deep: "linear-gradient(140deg,#637736 0%,#3b4724 55%,#23271c 100%)",
  hojicha: "linear-gradient(135deg,#ecd3bb 0%,#c67b4e 45%,#7a4f35 100%)",
  clay: "linear-gradient(135deg,#f5ddc6 0%,#d99a6e 55%,#a85f37 100%)",
  cream: "linear-gradient(135deg,#fdfcf7 0%,#f1ebdd 55%,#e2d6bd 100%)",
};

const toneGlow: Record<Tone, string> = {
  matcha: "rgba(244,247,236,0.55)",
  deep: "rgba(151,173,95,0.45)",
  hojicha: "rgba(247,228,206,0.55)",
  clay: "rgba(255,241,227,0.6)",
  cream: "rgba(255,255,255,0.7)",
};

function Placeholder({ tone }: { tone: Tone }) {
  return (
    <div
      className="grain absolute inset-0 z-0 overflow-hidden"
      style={{ backgroundImage: toneGradient[tone] }}
    >
      <div
        className="animate-float-slow absolute -left-1/4 top-[-30%] h-[80%] w-[80%] rounded-full blur-3xl"
        style={{ background: toneGlow[tone] }}
      />
      <div
        className="animate-float absolute bottom-[-20%] right-[-10%] h-[55%] w-[55%] rounded-full opacity-60 blur-3xl"
        style={{ background: toneGlow[tone] }}
      />
      <svg
        viewBox="0 0 40 40"
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
        aria-hidden="true"
      >
        <g transform="rotate(-12 20 20)">
          <path
            d="M20 6c-6 4-7.7 10-0 17 7.7-7 6-13 0-17z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}

interface MediaProps {
  asset: BrandAsset;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
}

export default function Media({
  asset,
  className,
  fill = false,
  priority = false,
  sizes = "100vw",
  children,
}: MediaProps) {
  const hasMedia = Boolean(asset.src);
  const aspectStyle = fill
    ? undefined
    : { aspectRatio: asset.aspect.replace("/", " / ") };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-sand text-matcha-900",
        fill && "absolute inset-0",
        className
      )}
      style={aspectStyle}
    >
      {/* Only show gradient placeholder when no real asset is wired up */}
      {!hasMedia && <Placeholder tone={asset.tone} />}

      {asset.src && asset.kind === "image" && (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="z-[1] object-cover"
        />
      )}

      {asset.src && asset.kind === "video" && (
        <VideoBackground
          src={asset.src}
          poster={asset.poster}
        />
      )}

      {children}
    </div>
  );
}
