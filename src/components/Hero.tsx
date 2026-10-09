"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { sound } from "@/lib/sound";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const LiquidChrome = dynamic(() => import("@/components/canvas/LiquidChrome"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-foreground-muted">
      <span>INITIALIZING LIQUID MERCURY...</span>
    </div>
  ),
});

export default function Hero() {
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(
        now.toISOString().substring(11, 19) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-20 pb-4 px-4 sm:px-8 border-b border-border-subtle bg-grid-technical select-none overflow-hidden"
    >
      {/* Editorial Top Telemetry Strip */}
      <div className="flex justify-between items-center text-technical text-foreground-muted border-b border-border-subtle pb-3 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>PORTFOLIO // VOLUME 2.0</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>AI RESEARCHER &amp; FULL-STACK SYSTEMS</span>
          <span>LAT 28.4744° N // LON 77.5040° E</span>
        </div>
        <div>
          <span>{utcTime || "14:38:00 UTC"}</span>
        </div>
      </div>

      {/* Centerpiece: Massive Kinetic Typography + Morphing 3D Liquid Chrome */}
      <div className="relative my-auto w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-6 sm:py-12">
        {/* Architectural Massive Serif / Sans Accents */}
        <div className="w-full flex justify-between items-center text-xs font-mono text-foreground-muted uppercase tracking-widest px-4 pb-2">
          <span>AI/ML ARCHITECTURE</span>
          <span className="text-accent font-serif italic text-base">Ψ</span>
          <span>QUANTUM COMPUTING</span>
        </div>

        {/* Giant Typographic Title Layers */}
        <div className="relative w-full leading-none flex flex-col items-center justify-center">
          <div className="text-displayGiant font-sans font-black tracking-tighter text-foreground uppercase select-none opacity-90 drop-shadow-sm">
            YUVRAJ
          </div>
          <div className="text-displayGiant font-sans font-black tracking-tighter text-foreground uppercase select-none opacity-90 drop-shadow-sm">
            SINGH
          </div>

          {/* Morphing Liquid Chrome 3D Sculpture Centered directly on top */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-10">
            <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px]">
              <LiquidChrome />
            </div>
          </div>
        </div>

        {/* Editorial Subtitle Below Sculpture */}
        <div className="pt-6 max-w-xl mx-auto space-y-4 relative z-20">
          <p className="text-xs sm:text-sm font-mono text-foreground-secondary uppercase tracking-widest">
            ENGINEERING INTELLIGENT SYSTEMS AT THE INTERSECTION OF MACHINE LEARNING &amp; QUANTUM SIMULATION
          </p>

          {/* Action CTAs */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollTo("#projects")}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-2.5 rounded-full bg-foreground text-background text-xs font-mono font-medium hover:opacity-90 transition-all hover:scale-[1.02] cursor-pointer shadow-sm"
            >
              <span>EXPLORE WORK</span>
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-2.5 rounded-full border border-border-subtle bg-surface text-foreground text-xs font-mono font-medium hover:bg-surface-elevated transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>TRANSMIT MESSAGE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Bottom Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border-subtle text-caption font-mono text-foreground-muted">
        <div>
          <span className="text-technical text-foreground block">STATUS</span>
          <span className="text-emerald-400 font-bold">● ACTIVE RESEARCH</span>
        </div>
        <div>
          <span className="text-technical text-foreground block">ROC-AUC SCORE</span>
          <span>87% ML PIPELINE</span>
        </div>
        <div className="hidden sm:block">
          <span className="text-technical text-foreground block">SIMULATIONS</span>
          <span>500+ QC PROTOCOLS</span>
        </div>
        <div className="text-right">
          <span className="text-technical text-foreground block">LATENCY</span>
          <span>&lt;15ms WEBSOCKET</span>
        </div>
      </div>
    </section>
  );
}
