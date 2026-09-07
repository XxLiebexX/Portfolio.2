"use client";

import React, { useEffect, useState } from "react";

export default function SpatialAtmosphere() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setHasMoved(true);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden select-none">
      {/* 1. Interactive Cursor Follower Spotlight (Prabal Sharma signature effect) */}
      <div
        className={`fixed w-[600px] h-[600px] rounded-full pointer-events-none blur-[100px] transition-opacity duration-500 -z-30 ${
          hasMoved ? "opacity-30" : "opacity-0"
        }`}
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          background: "radial-gradient(circle, var(--accent) 0%, rgba(2, 132, 199, 0.5) 40%, transparent 75%)",
        }}
      />

      {/* 2. Ambient Pulsing Gradient Blur Orbs (Prabal Sharma signature background) */}
      <div
        className="absolute -top-[25%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-25 blur-[140px] animate-pulse pointer-events-none -z-30"
        style={{
          background: "radial-gradient(circle, #0284c7 0%, #38bdf8 50%, transparent 80%)",
        }}
      />

      <div
        className="absolute top-[35%] -right-[15%] w-[650px] h-[650px] rounded-full opacity-20 blur-[130px] pointer-events-none -z-30"
        style={{
          background: "radial-gradient(circle, #00b4d8 0%, #0284c7 60%, transparent 80%)",
        }}
      />

      <div
        className="absolute -bottom-[15%] left-[20%] w-[750px] h-[750px] rounded-full opacity-15 blur-[150px] pointer-events-none -z-30"
        style={{
          background: "radial-gradient(circle, #0284c7 0%, transparent 75%)",
        }}
      />

      {/* 3. Subtle Technical Blueprint Grid */}
      <div className="absolute inset-0 -z-20 pointer-events-none bg-grid-technical opacity-60" />

      {/* 4. Tactile Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay">
        <svg className="absolute inset-0 h-full w-full">
          <filter id="spatialNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#spatialNoise)" />
        </svg>
      </div>

      {/* Top and bottom gradient fade masks */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
