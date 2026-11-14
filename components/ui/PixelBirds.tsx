"use client";

import React from "react";

// 13x6 Retro Pixel Bird Sprite Paths
const F1_PATH =
  "M0,0h1v1h-1zM12,0h1v1h-1zM1,1h1v1h-1zM11,1h1v1h-1zM2,2h1v1h-1zM6,2h1v1h-1zM10,2h1v1h-1zM3,3h1v1h-1zM4,3h1v1h-1zM5,3h1v1h-1zM7,3h1v1h-1zM8,3h1v1h-1zM9,3h1v1h-1zM5,4h1v1h-1zM6,4h1v1h-1zM7,4h1v1h-1zM6,5h1v1h-1z";
const F2_PATH =
  "M1,1h1v1h-1zM2,1h1v1h-1zM3,1h1v1h-1zM4,1h1v1h-1zM5,1h1v1h-1zM6,1h1v1h-1zM7,1h1v1h-1zM8,1h1v1h-1zM9,1h1v1h-1zM10,1h1v1h-1zM11,1h1v1h-1zM3,2h1v1h-1zM4,2h1v1h-1zM5,2h1v1h-1zM6,2h1v1h-1zM7,2h1v1h-1zM8,2h1v1h-1zM9,2h1v1h-1zM5,3h1v1h-1zM6,3h1v1h-1zM7,3h1v1h-1zM6,4h1v1h-1z";
const F3_PATH =
  "M3,1h1v1h-1zM4,1h1v1h-1zM5,1h1v1h-1zM6,1h1v1h-1zM7,1h1v1h-1zM8,1h1v1h-1zM9,1h1v1h-1zM2,2h1v1h-1zM6,2h1v1h-1zM10,2h1v1h-1zM1,3h1v1h-1zM6,3h1v1h-1zM11,3h1v1h-1zM0,4h1v1h-1zM6,4h1v1h-1zM12,4h1v1h-1z";

function BirdSprite({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 13 6" className="bird-frame-1">
        <path d={F1_PATH} />
      </svg>
      <svg viewBox="0 0 13 6" className="bird-frame-2">
        <path d={F2_PATH} />
      </svg>
      <svg viewBox="0 0 13 6" className="bird-frame-3">
        <path d={F3_PATH} />
      </svg>
    </div>
  );
}

export function PixelBirds() {
  return (
    <div className="pixel-birds-container" aria-hidden="true">
      {/* 1. Left Diagonal Stream: Emerges bottom-left, flies toward center horizon, shrinks and fades into distance */}
      <div className="pixel-bird bird-left-lead w-5 h-2.5">
        <BirdSprite className="w-full h-full" />
      </div>
      <div className="pixel-bird bird-left-sub w-4 h-2">
        <BirdSprite className="w-full h-full" />
      </div>

      {/* 2. Right Diagonal Stream: Emerges bottom-right, flies toward center horizon, shrinks and fades into distance */}
      <div className="pixel-bird bird-right-lead w-5 h-2.5">
        <BirdSprite className="w-full h-full" />
      </div>
      <div className="pixel-bird bird-right-sub w-4 h-2">
        <BirdSprite className="w-full h-full" />
      </div>
    </div>
  );
}
