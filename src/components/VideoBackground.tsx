"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface VideoBackgroundProps {
  src: string;
  poster?: string | null;
  className?: string;
}

/**
 * Autoplaying background video with a guaranteed-visible poster layer.
 *
 * - The poster renders as a real <Image> behind the video (z-0), so a photo
 *   ALWAYS shows even if autoplay is blocked or the video never paints.
 * - The <video> sits on top (z-10) and covers the poster once it plays.
 * - play() is forced muted and retried on load events and on the first user
 *   interaction (covers Safari, Low Power Mode, and strict autoplay policies).
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
    video.playsInline = true;
    video.setAttribute("muted", "");

    const tryPlay = () => {
      video.muted = true;
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          /* Autoplay blocked — poster image stays visible behind. */
        });
      }
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    // Kick playback off on the first interaction if the browser blocked autoplay.
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
        <Image
          src={poster}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="z-0 object-cover"
          priority
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
