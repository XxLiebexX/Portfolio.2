"use client";

import React, { useEffect, useState } from "react";

export default function SystemInitLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Quick, smooth progress animation (under 1.2s so it doesn't block the user)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 150);
          setTimeout(() => setIsVisible(false), 700);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col justify-between bg-background p-8 md:p-16 select-none transition-opacity duration-700 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top telemetry */}
      <div className="flex justify-between items-center text-technical text-foreground-muted">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          SYS_INIT // v1.0
        </span>
        <span>LAT 28.4744 LON 77.5040 // GREATER NOIDA</span>
      </div>

      {/* Center title */}
      <div className="my-auto max-w-2xl space-y-3">
        <p className="text-technical text-accent font-bold">
          YUVRAJ SINGH // XXLIEBEXX
        </p>
        <h1 className="text-3xl sm:text-5xl font-sans font-bold uppercase tracking-tight text-foreground">
          AI/ML &amp; Full-Stack Engineer
        </h1>
        <p className="text-xs sm:text-sm font-mono text-foreground-secondary">
          Bennett University Quantum Computing Lab • Systems Architecture
        </p>
      </div>

      {/* Bottom Progress Bar */}
      <div className="space-y-3 max-w-md">
        <div className="flex justify-between items-center text-caption font-mono">
          <span className="text-foreground-secondary uppercase tracking-wider text-[11px]">
            INITIALIZING SPATIAL SYSTEM
          </span>
          <span className="text-accent font-bold font-mono text-xs">
            {Math.min(100, progress)}%
          </span>
        </div>
        <div className="h-[2px] w-full bg-border-subtle overflow-hidden rounded-full relative">
          <div
            className="h-full bg-accent transition-all duration-100 ease-out"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
