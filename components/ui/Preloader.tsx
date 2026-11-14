"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  try {
    return (
      sessionStorage.getItem("portfolio-preloader-seen") === "true" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function Preloader() {
  const hasSeen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (hasSeen) {
    return null;
  }

  return <PreloaderAnimation />;
}

function PreloaderAnimation() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "complete" | "exiting" | "hidden">("loading");
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    let animationFrameId: number;
    let isComplete = false;

    // Minimum display duration: 1.1s, Hard cap: 1.8s
    const startTime = performance.now();
    const minDuration = 1100;
    const maxDuration = 1800;

    // Track critical browser readiness (fonts + window load)
    const checkAssetsLoaded = async () => {
      try {
        await Promise.race([
          Promise.all([
            document.fonts ? document.fonts.ready : Promise.resolve(),
            new Promise((res) => {
              if (document.readyState === "complete") {
                res(true);
              } else {
                window.addEventListener("load", () => res(true), { once: true });
              }
            }),
          ]),
          new Promise((res) => setTimeout(res, maxDuration)),
        ]);
      } catch {
        // Fallback gracefully
      }
      isComplete = true;
    };

    checkAssetsLoaded();

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const timeRatio = Math.min(elapsed / minDuration, 1);

      let targetProgress: number;
      if (!isComplete) {
        // Progressively approach 85% until critical assets are ready
        targetProgress = Math.min(timeRatio * 85, 88);
      } else {
        // Snap decisively from 85% to 100%
        const completionRatio = Math.min((elapsed - minDuration * 0.7) / (minDuration * 0.3), 1);
        targetProgress = 85 + Math.max(0, completionRatio * 15);
      }

      currentProgress += (targetProgress - currentProgress) * 0.18;

      if (currentProgress >= 99.5 && isComplete && elapsed >= minDuration) {
        setProgress(100);
        setPhase("complete");
        try {
          sessionStorage.setItem("portfolio-preloader-seen", "true");
        } catch {}

        setTimeout(() => {
          setPhase("exiting");
          document.body.style.overflow = "";

          setTimeout(() => {
            setPhase("hidden");
          }, 750);
        }, 250);
      } else {
        setProgress(Math.min(currentProgress, 99));
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    const handleSkip = (e: KeyboardEvent | MouseEvent) => {
      if ("key" in e && e.key !== "Escape") return;
      cancelAnimationFrame(animationFrameId);
      setIsSkipped(true);
      setProgress(100);
      setPhase("exiting");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("portfolio-preloader-seen", "true");
      } catch {}
      setTimeout(() => {
        setPhase("hidden");
      }, 350);
    };

    window.addEventListener("keydown", handleSkip);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleSkip);
      document.body.style.overflow = "";
    };
  }, []);

  const roundedProgress = Math.min(100, Math.round(progress));

  return (
    <AnimatePresence>
      {phase !== "hidden" && (
        <motion.div
          key="refokus-preloader"
          initial={{ opacity: 1, y: 0 }}
          animate={
            phase === "exiting"
              ? {
                  y: "-100%",
                  transition: {
                    duration: isSkipped ? 0.35 : 0.75,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }
              : { opacity: 1, y: 0 }
          }
          exit={{ y: "-100%" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background select-none cursor-default"
          style={{ willChange: "transform" }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={roundedProgress}
          aria-label="Loading portfolio experience"
        >
          {/* Subtle Deep Indigo Background Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-36 bg-accent/15 blur-[90px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={
              phase === "complete" || phase === "exiting"
                ? { opacity: 0, y: -16, transition: { duration: 0.25 } }
                : { opacity: 1, scale: 1 }
            }
            className="relative flex flex-col items-center z-10 w-full max-w-sm px-6"
          >
            {/* Minimalist System Cue */}
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted mb-8">
              <span>INITIALIZING SYSTEM</span>
            </div>

            {/* The Horizontal Glow Track & Traveling Bead (Time to Refokus signature) */}
            <div className="relative w-full h-[2px] rounded-full bg-border overflow-visible">
              {/* Illuminated Gradient Fill Beam */}
              <div
                className="absolute top-0 left-0 bottom-0 rounded-full bg-gradient-to-r from-accent via-accent to-accent-text"
                style={{
                  width: `${roundedProgress}%`,
                  boxShadow: "0 0 16px rgba(112, 112, 255, 0.8), 0 0 4px rgba(47, 47, 228, 1)",
                  transition: "width 0.05s linear",
                }}
              />

              {/* The Traveling Luminous Bead */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent dark:bg-white shadow-[0_0_12px_#7070FF,0_0_4px_rgba(47,47,228,0.8)]"
                style={{
                  left: `${roundedProgress}%`,
                  transition: "left 0.05s linear",
                }}
              />
            </div>

            {/* Large Tabular Percentage Counter */}
            <div className="mt-8 font-mono text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-foreground select-none tabular-nums">
              {roundedProgress}%
            </div>

            {/* Skip Hint */}
            <div className="mt-12 text-[10px] font-mono uppercase tracking-widest text-muted/60">
              [ ESC TO SKIP ]
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
