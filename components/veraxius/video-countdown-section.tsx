"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/** Countdown reaches zero at local midnight after May 10 (end of May 10). */
function getTargetDate(): Date {
  return new Date(2026, 4, 11, 0, 0, 0, 0);
}

function useCountdown(target: Date) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return useMemo(() => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const totalSec = Math.floor(diff / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return { days, hours, minutes, seconds, ended: diff === 0 };
  }, [target, tick]);
}

function CountdownUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const display = String(value).padStart(2, "0");

  return (
    <div
      className="flex flex-col items-center gap-3 rounded-lg px-4 py-5 sm:px-6 sm:py-6"
      style={{
        backgroundColor: "var(--bg-panel)",
        border: "1px solid var(--divider)",
      }}
    >
      <span
        className="font-dm-mono tabular-nums tracking-tight"
        style={{
          fontSize: "clamp(28px, 7vw, 52px)",
          lineHeight: "1",
          color: "var(--amber)",
          textShadow: "0 0 24px rgba(255, 184, 77, 0.18)",
        }}
      >
        {display}
      </span>
      <span
        className="font-dm-mono text-[10px] uppercase sm:text-[11px]"
        style={{
          letterSpacing: "0.14em",
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function VideoCountdownSection() {
  const sectionRef = useRef(null);
  const videoWrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const programmaticPauseRef = useRef(false);
  const userPausedRef = useRef(false);
  const videoInViewportRef = useRef(false);

  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const videoInViewport = useInView(videoWrapRef, {
    once: false,
    amount: 0.35,
  });

  const target = useMemo(() => getTargetDate(), []);
  const { days, hours, minutes, seconds, ended } = useCountdown(target);

  useEffect(() => {
    videoInViewportRef.current = videoInViewport;
  }, [videoInViewport]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (videoInViewport) {
      if (!userPausedRef.current) {
        void el.play().catch(() => {});
      }
      return;
    }

    programmaticPauseRef.current = true;
    el.pause();
    queueMicrotask(() => {
      programmaticPauseRef.current = false;
    });
  }, [videoInViewport]);

  const handleVideoPause = () => {
    if (programmaticPauseRef.current) return;
    if (!videoInViewportRef.current) return;
    userPausedRef.current = true;
  };

  const handleVideoPlay = () => {
    userPausedRef.current = false;
  };

  return (
    <section
      ref={sectionRef}
      className="vx-section"
      style={{
        background:
          "linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
        borderTop: "1px solid var(--divider)",
      }}
    >
      <div className="vx-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto flex max-w-[960px] flex-col items-center text-center"
        >
          <div className="mb-12 w-full">
            <p
              className="font-dm-mono mb-6 text-[11px] uppercase"
              style={{
                letterSpacing: "0.18em",
                color: "var(--amber)",
              }}
            >
              Launch countdown · May 10
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              <CountdownUnit value={ended ? 0 : days} label="Days" />
              <CountdownUnit value={ended ? 0 : hours} label="Hours" />
              <CountdownUnit value={ended ? 0 : minutes} label="Minutes" />
              <CountdownUnit value={ended ? 0 : seconds} label="Seconds" />
            </div>

            {ended ? (
              <p
                className="font-dm-sans mt-8 text-[15px]"
                style={{ color: "var(--text-secondary)" }}
              >
                Countdown complete.
              </p>
            ) : null}
          </div>

          <div
            ref={videoWrapRef}
            className="relative w-full overflow-hidden rounded-xl border shadow-lg"
            style={{
              borderColor: "var(--divider-strong)",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.45)",
            }}
          >
            <video
              ref={videoRef}
              className="mx-auto block aspect-video w-full bg-black object-contain object-center"
              controls
              playsInline
              preload="metadata"
              aria-label="Veraxius promotional video"
              onPause={handleVideoPause}
              onPlay={handleVideoPlay}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
