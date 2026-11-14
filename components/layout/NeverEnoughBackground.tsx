"use client";

import React from "react";
import Image from "next/image";
import { PixelBirds } from "@/components/ui/PixelBirds";
import { CmiyglStars } from "@/components/ui/CmiyglStars";

export function NeverEnoughBackground() {
  return (
    <div className="pointer-events-none z-0" aria-hidden="true">
      {/* ─────────────────────────────────────────────────────────────
          1. DARK THEME ATMOSPHERE: Daniel Caesar 'NEVER ENOUGH'
         ───────────────────────────────────────────────────────────── */}
      <div className="never-enough-backdrop">
        {/* Cinematic Electric Cobalt Twilight Sky Top Gradient (Anchored to Hero) */}
        <div className="absolute top-0 left-0 right-0 h-[880px] sm:h-[1020px] overflow-hidden pointer-events-none">
          {/* Cobalt Twilight Sky Gradient: #1c3ad9 / #244cdf -> #161245 -> transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c3ad9]/40 via-[#161245]/55 to-transparent" />

          {/* Top Radial Cobalt & Cyan Bloom */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(36,76,223,0.45)_0%,rgba(26,17,78,0.3)_45%,transparent_75%)]" />

          {/* Authentic Daniel Caesar 'Never Enough' Cover Atmosphere */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] sm:h-[800px] opacity-[0.30] mix-blend-screen overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/never-enough.jpg"
                alt="Daniel Caesar Never Enough Artwork"
                fill
                priority
                className="object-cover object-top filter contrast-[1.25] saturate-[1.3] brightness-[0.95]"
              />
              {/* Smooth edge vignettes fading into base abyss #070512 */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070512]/45 to-[#070512]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070512] via-transparent to-[#070512]" />
            </div>
          </div>

          {/* Micro-Atmospheric Pixel Birds (2-Direction Diagonal Perspective) */}
          <PixelBirds />
        </div>

        {/* Global 35mm Analog Film Grain Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.038] mix-blend-overlay film-grain-overlay" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. LIGHT THEME ATMOSPHERE: Tyler, The Creator 'CALL ME IF YOU GET LOST'
         ───────────────────────────────────────────────────────────── */}
      <div className="cmiygl-backdrop">
        {/* Warm Vintage Sky & Estate Scenery (Anchored to Hero) */}
        <div className="absolute top-0 left-0 right-0 h-[880px] sm:h-[1020px] overflow-hidden pointer-events-none">
          {/* Soft Vintage Pastel Sky Wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E2EFF6]/70 via-[#FAF4E1]/80 to-[#FAF4E1]" />

          {/* Pure CMIYGL Scenery Landscape (Gregory Ferrand oil painting aesthetic: sky, clouds, mountains) */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[640px] sm:h-[820px] opacity-[0.24] mix-blend-multiply overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/cmiygl-scenery.webp"
                alt="Call Me If You Get Lost Scenery Atmosphere"
                fill
                priority
                className="object-cover object-top filter contrast-[1.06] saturate-[1.12]"
              />
              {/* Vignettes fading seamlessly into the cream background #FAF4E1 */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF4E1]/35 to-[#FAF4E1]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF4E1] via-transparent to-[#FAF4E1]" />
            </div>
          </div>

          {/* The Iconic Floating CMIYGL Pastel Stars */}
          <CmiyglStars />
        </div>

        {/* Tactile Vintage Passport Paper Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.028] mix-blend-multiply film-grain-overlay" />
      </div>
    </div>
  );
}
