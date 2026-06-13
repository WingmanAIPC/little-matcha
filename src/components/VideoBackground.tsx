"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface VideoBackgroundProps {
  src: string;
  poster?: string | null;
  className?: string;
}

/**
 * Autoplaying background video.
 * - A poster image sits behind the video so a real photo always shows,
 *   even if autoplay is blocked or the video is still buffering.
 * - play() is retried for Safari / low-power mode quirks.
 */
export default function VideoBackground({
  src,
  poster,
  className,
}: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.then === "function") {
        p.then(() => setPlaying(true)).catch(() => {
          /* Autoplay blocked — poster stays visible. */
        });
      }
    };

    const onPlaying = () => setPlaying(true);

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", onPlaying);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", onPlaying);
    };
  }, [src]);

  return (
    <>
      {poster && (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-[1] transition-opacity duration-700",
            playing ? "opacity-0" : "opacity-100"
          )}
          style={{
            backgroundImage: `url("${poster}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      <video
        ref={ref}
        className={cn(
          "absolute inset-0 z-[2] h-full w-full object-cover",
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
