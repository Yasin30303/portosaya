"use client";

import React from "react";

// Star polygon: 10 vertices for a classic 5-pointed star
const STAR_POINTS =
  "12.0,1.0 15.1,7.8 22.5,8.6 16.9,13.6 18.5,20.9 12.0,17.2 5.5,20.9 7.1,13.6 1.5,8.6 8.9,7.8";

interface StarItem {
  id: string;
  color: string;
  size: number;
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  floatClass: string;
  opacity: number;
}

const STARS: StarItem[] = [
  // Top-left constellation cluster
  { id: "s1", color: "#F8C0BF", size: 30, top: "28px", left: "6%", rotate: 14, floatClass: "cmiygl-float-1", opacity: 0.85 },
  { id: "s2", color: "#C7E1BE", size: 22, top: "68px", left: "14%", rotate: -18, floatClass: "cmiygl-float-2", opacity: 0.80 },
  { id: "s3", color: "#68C9D2", size: 28, top: "34px", left: "24%", rotate: 22, floatClass: "cmiygl-float-3", opacity: 0.85 },
  { id: "s4", color: "#E2BE5E", size: 20, top: "88px", left: "32%", rotate: -8, floatClass: "cmiygl-float-1", opacity: 0.75 },

  // Center-top delicate accents (above hero headline)
  { id: "s5", color: "#F8C0BF", size: 18, top: "45px", left: "44%", rotate: 16, floatClass: "cmiygl-float-2", opacity: 0.70 },
  { id: "s6", color: "#68C9D2", size: 24, top: "38px", right: "42%", rotate: -20, floatClass: "cmiygl-float-3", opacity: 0.80 },

  // Top-right constellation cluster (framing right margin & photo card)
  { id: "s7", color: "#E2BE5E", size: 32, top: "25px", right: "26%", rotate: 25, floatClass: "cmiygl-float-1", opacity: 0.85 },
  { id: "s8", color: "#C7E1BE", size: 20, top: "75px", right: "18%", rotate: -12, floatClass: "cmiygl-float-2", opacity: 0.75 },
  { id: "s9", color: "#F8C0BF", size: 28, top: "42px", right: "8%", rotate: 18, floatClass: "cmiygl-float-3", opacity: 0.85 },
  { id: "s10", color: "#68C9D2", size: 22, top: "98px", right: "4%", rotate: -25, floatClass: "cmiygl-float-1", opacity: 0.80 },

  // Lower subtle perimeter accents
  { id: "s11", color: "#C7E1BE", size: 18, top: "160px", left: "2%", rotate: -15, floatClass: "cmiygl-float-2", opacity: 0.65 },
  { id: "s12", color: "#E2BE5E", size: 18, top: "180px", right: "3%", rotate: 20, floatClass: "cmiygl-float-3", opacity: 0.65 },
];

export function CmiyglStars() {
  return (
    <div className="cmiygl-stars-container" aria-hidden="true">
      {STARS.map((star) => (
        <div
          key={star.id}
          className={`cmiygl-star ${star.floatClass}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            right: star.right,
            opacity: star.opacity,
            transform: `rotate(${star.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <polygon points={STAR_POINTS} fill={star.color} />
          </svg>
        </div>
      ))}
    </div>
  );
}

