"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface VideoBackgroundProps {
  src: string;
  poster?: string | null;
  className?: string;
}

/**
 * Dead-simple background media: a raw <img> poster that ALWAYS paints, with a
 * <video> layered on top that covers it once playback starts. Everything uses
 * direct /public paths (no image optimizer) and native elements only, so it
 * renders identically in every browser. If autoplay is blocked, the poster
 * photo stays visible underneath.
 */
export default function VideoBackground({
  src,
  poster,
  className,
}: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      video.muted = true;
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          /* Autoplay blocked — poster photo stays visible. */
        });
      }
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const onInteract = () => tryPlay();
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
    };
  }, [src]);

  return (
    <>
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}
      <video
        ref={ref}
        className={cn(
          "absolute inset-0 z-10 h-full w-full object-cover",
          className
        )}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster ?? undefined}
        aria-label="Background video"
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
