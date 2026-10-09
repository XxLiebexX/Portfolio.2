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
      {/* 1. Subtle, Calming Cursor Follower Aura */}
      <div
        className={`fixed w-[550px] h-[550px] rounded-full pointer-events-none blur-[120px] transition-opacity duration-700 -z-30 ${
          hasMoved ? "opacity-15" : "opacity-0"
        }`}
        style={{
          transform: `translate(${mousePos.x - 275}px, ${mousePos.y - 275}px)`,
          background: "radial-gradient(circle, #38bdf8 0%, rgba(148, 163, 184, 0.3) 40%, transparent 75%)",
        }}
      />

      {/* 2. Ambient Soft Warm & Mist Blur Orbs */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[650px] h-[650px] rounded-full opacity-10 blur-[150px] pointer-events-none -z-30"
        style={{
          background: "radial-gradient(circle, #cbd5e1 0%, #e2e8f0 50%, transparent 80%)",
        }}
      />

      <div
        className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full opacity-10 blur-[140px] pointer-events-none -z-30"
        style={{
          background: "radial-gradient(circle, #bae6fd 0%, transparent 75%)",
        }}
      />

      {/* 3. Subtle Technical Blueprint Dot Grid */}
      <div className="absolute inset-0 -z-20 pointer-events-none bg-grid-technical opacity-70" />

      {/* Top and bottom gradient fade masks */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
