"use client";

import { useRef, useState } from "react";

/**
 * Video with a custom play button: the file starts buffering as soon as the
 * pointer approaches (or on focus), so playback begins right after the click,
 * and the overlay fades out smoothly instead of jumping to native controls.
 */
export function PilotVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const warmUp = () => {
    const v = videoRef.current;
    if (v && v.preload !== "auto") {
      v.preload = "auto";
      v.load();
    }
  };

  const play = async () => {
    const v = videoRef.current;
    if (!v) return;
    warmUp();
    setLoading(true);
    try {
      await v.play();
      setStarted(true);
    } catch {
      // Autoplay policies can block play(); fall back to native controls.
      setStarted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group relative" onPointerEnter={warmUp} onFocus={warmUp}>
      <video
        ref={videoRef}
        className="block w-full"
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        aria-label={label}
        onPlaying={() => setLoading(false)}
        onWaiting={() => started && setLoading(true)}
      />

      <button
        type="button"
        onClick={play}
        aria-label={`Play: ${label}`}
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out"
        style={{
          opacity: started ? 0 : 1,
          pointerEvents: started ? "none" : "auto",
          background: "radial-gradient(circle at center, rgba(10,10,11,0.15), rgba(10,10,11,0.45))",
        }}
      >
        <span
          // Smaller on phones so it doesn't cover the video; full size from tablet up.
          className="relative flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:scale-110 shadow-[0_0_0_4px_rgba(255,184,77,0.16),0_6px_18px_rgba(0,0,0,0.5)] sm:h-[84px] sm:w-[84px] sm:shadow-[0_0_0_8px_rgba(255,184,77,0.16),0_14px_40px_rgba(0,0,0,0.55),0_0_32px_rgba(255,184,77,0.3)] lg:h-[104px] lg:w-[104px] lg:shadow-[0_0_0_10px_rgba(255,184,77,0.16),0_18px_50px_rgba(0,0,0,0.55),0_0_40px_rgba(255,184,77,0.35)]"
          style={{ backgroundColor: "var(--amber)" }}
        >
          {/* soft pulse ring */}
          <span className="absolute inset-0 rounded-full motion-safe:animate-ping" style={{ backgroundColor: "rgba(255,184,77,0.25)", animationDuration: "2.4s" }} />
          {loading ? (
            <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black sm:h-7 sm:w-7 sm:border-[3px]" />
          ) : (
            <svg viewBox="0 0 24 24" className="relative ml-0.5 h-5 w-5 sm:ml-1 sm:h-9 sm:w-9 lg:h-11 lg:w-11" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="#0A0A0B" />
            </svg>
          )}
        </span>
      </button>

      {/* bottom label, fades with the overlay */}
      <div
        className="pointer-events-none absolute bottom-5 left-0 right-0 hidden justify-center transition-opacity duration-500 sm:flex"
        style={{ opacity: started ? 0 : 1 }}
      >
        <span
          className="font-dm-mono rounded-full px-3 py-1 text-[9px] uppercase sm:px-4 sm:py-1.5 sm:text-[11px]"
          style={{ letterSpacing: "0.16em", color: "#ffffff", backgroundColor: "rgba(10,10,11,0.6)", border: "1px solid rgba(255,255,255,0.14)" }}
        >
          Watch · 1:47
        </span>
      </div>
    </div>
  );
}
