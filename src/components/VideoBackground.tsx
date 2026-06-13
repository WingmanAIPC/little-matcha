"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface VideoBackgroundProps {
  src: string;
  poster?: string | null;
  className?: string;
}

/**
 * Background media: a raw <img> poster that paints instantly, with a <video>
 * layered on top. The video is lazy — it only downloads + plays once it scrolls
 * near the viewport, so the page doesn't try to fetch every video at once.
 * If autoplay is blocked, the poster photo stays visible underneath.
 */
export default function VideoBackground({
  src,
  poster,
  className,
}: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      video.muted = true;
      video.defaultMuted = true;
      video.load();
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          /* Autoplay blocked — poster photo stays visible. */
        });
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start();
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(video);

    // Safety net: also retry play on the first user interaction.
    const onInteract = () => {
      if (startedRef.current) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        start();
      }
    };
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });

    return () => {
      io.disconnect();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
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
        muted
        loop
        playsInline
        preload="none"
        poster={poster ?? undefined}
        aria-label="Background video"
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
