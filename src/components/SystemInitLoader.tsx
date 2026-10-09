"use client";

import React, { useEffect, useState } from "react";

export default function SystemInitLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Quick, smooth progress animation (under 1s so it doesn't block the user)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 120);
          setTimeout(() => setIsVisible(false), 550);
          return 100;
        }
        return prev + Math.floor(Math.random() * 22) + 12;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col justify-between bg-background p-8 md:p-16 select-none transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Telemetry */}
      <div className="flex justify-between items-center text-technical text-foreground-muted">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
          SYSTEM INIT // v2.0
        </span>
        <span>YUVRAJ SINGH // BENNETT UNIVERSITY</span>
      </div>

      {/* Center Title */}
      <div className="my-auto max-w-2xl space-y-3">
        <p className="text-xs font-mono text-foreground-muted uppercase tracking-widest">
          PORTFOLIO ARCHITECTURE
        </p>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-foreground">
          Yuvraj Singh
        </h1>
        <p className="text-xs sm:text-sm font-mono text-foreground-secondary">
          AI/ML Researcher • Full-Stack Developer • Systems Architecture
        </p>
      </div>

      {/* Bottom Progress Bar */}
      <div className="space-y-3 max-w-md">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-foreground-muted uppercase tracking-wider text-[11px]">
            INITIALIZING SERENE SPATIAL CORE
          </span>
          <span className="text-foreground font-semibold font-mono text-xs">
            {Math.min(100, progress)}%
          </span>
        </div>
        <div className="h-[2px] w-full bg-border-subtle overflow-hidden rounded-full relative">
          <div
            className="h-full bg-foreground transition-all duration-100 ease-out"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
