"use client";

import React from "react";
import dynamic from "next/dynamic";
import { sound } from "@/lib/sound";
import { Zap, Compass } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import CardTilt from "@/components/CardTilt";

const QuantumCore = dynamic(() => import("@/components/canvas/QuantumCore"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-accent">
      <span>INITIALIZING 3D SPATIAL CORE...</span>
    </div>
  ),
});

export default function Hero() {
  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between px-4 sm:px-6 lg:px-12 pt-24 pb-8 overflow-hidden select-none bg-grid-technical"
    >
      {/* HUD Telemetry Corner Elements (Prabal Sharma style) */}
      <div className="absolute top-20 left-6 font-mono text-[9px] text-accent/70 tracking-widest uppercase hidden lg:flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        <span>SPATIAL_OS // LAT 28.4744° N</span>
      </div>

      <div className="absolute top-20 right-6 font-mono text-[9px] text-foreground-muted tracking-widest uppercase hidden lg:flex items-center gap-2 pointer-events-none">
        <span>LON 77.5040° E // BENNETT_QC_LAB</span>
        <span>┼</span>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-foreground-muted/80 tracking-widest uppercase hidden lg:flex items-center gap-2 pointer-events-none">
        <span>FPS: 60 // WEBGL2_RENDER</span>
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-accent tracking-widest uppercase hidden lg:flex items-center gap-2 pointer-events-none">
        <span>SYS_STATUS: ACTIVE</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      </div>

      {/* Main Grid Content */}
      <div className="mx-auto w-full max-w-7xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6 relative z-10">
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <span className="text-technical flex items-center gap-2 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              HERO // 000
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-display font-sans uppercase tracking-tighter text-foreground leading-[0.95]">
              Yuvraj Singh
            </h1>
            <p className="text-h3 font-mono font-medium text-accent tracking-wide uppercase">
              AI/ML Researcher &amp; Full-Stack Engineer
            </p>
          </div>

          <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-xl">
            {PORTFOLIO_DATA.personal.bio}
          </p>

          {/* Action Buttons (Prabal Sharma aesthetic) */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollTo("#projects")}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center justify-center transition-all duration-300 px-6 py-3 rounded-sm text-sm font-mono font-medium bg-foreground text-background hover:opacity-90 cursor-pointer shadow-sm"
            >
              VIEW SELECTED WORK →
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center justify-center transition-all duration-300 px-6 py-3 rounded-sm text-sm font-mono font-medium border border-border bg-surface hover:bg-surface-elevated text-foreground cursor-pointer"
            >
              EXPLORE PROFILE
            </button>
          </div>

          {/* Quick Metrics Tag */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="px-2.5 py-1 rounded bg-surface border border-border-subtle text-[11px] font-mono text-foreground-secondary">
              <strong className="text-foreground">87%</strong> ROC-AUC ML MODEL
            </div>
            <div className="px-2.5 py-1 rounded bg-surface border border-border-subtle text-[11px] font-mono text-foreground-secondary">
              <strong className="text-foreground">500+</strong> QC SIMULATIONS
            </div>
            <div className="px-2.5 py-1 rounded bg-surface border border-border-subtle text-[11px] font-mono text-foreground-secondary">
              <strong className="text-foreground">&lt;15ms</strong> WEBSOCKET ENGINE
            </div>
          </div>
        </div>

        {/* Right Column: Framed 3D Model Card (Exact Prabal Meta Quest 3 replica) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[460px] lg:max-w-[520px] flex items-center justify-center p-2 select-none">
            <CardTilt className="w-full h-full">
              <div className="relative w-full h-full glass-panel border border-border-subtle hover:border-accent p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-lg rounded-xl transition-colors duration-300">
                {/* Card Top Technical Header */}
                <div className="flex justify-between items-center text-technical text-[10px] z-20">
                  <div className="flex items-center gap-1.5 text-accent font-bold">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span>QUANTUM CORE // 3D INTERACTIVE MODEL</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[9px] font-mono uppercase border bg-surface-elevated text-foreground border-border-subtle flex items-center gap-1">
                    <Zap className="w-3 h-3 text-accent" />
                    <span>REAL-TIME GLB</span>
                  </span>
                </div>

                {/* Card Center: Canvas & Rotating Dashed Ring */}
                <div className="relative my-auto w-full h-[280px] md:h-[320px] flex items-center justify-center">
                  {/* Rotating Dashed Reticle (Prabal signature visual) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
                    <div className="w-[280px] h-[280px] rounded-full border border-accent border-dashed animate-spin-slow" />
                    <div className="absolute w-[210px] h-[210px] rounded-full border border-border" />
                  </div>

                  {/* 3D Canvas */}
                  <div className="w-full h-full relative z-10">
                    <QuantumCore />
                  </div>
                </div>

                {/* Card Bottom Technical Footer */}
                <div className="flex justify-between items-end z-20 text-caption font-mono pt-2 border-t border-border-subtle/50">
                  <div className="flex flex-col text-[10px] text-foreground-muted space-y-0.5">
                    <span className="text-accent font-bold flex items-center gap-1.5">
                      <Compass className="w-3 h-3 text-accent" />
                      <span>MODEL: QUANTUM CORE // 6-DOF TRACKING</span>
                    </span>
                    <span>MOVE MOUSE TO ROTATE CORE IN 3D SPACE</span>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-mono text-[9px] font-bold uppercase">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </CardTilt>
          </div>
        </div>
      </div>

      {/* Bottom Technical Ticker */}
      <div className="mx-auto w-full max-w-7xl flex items-end justify-between pt-8 border-t border-border-subtle z-10">
        <div className="hidden xl:flex items-center gap-6 text-caption font-mono text-foreground-muted uppercase tracking-wider">
          <span className="text-accent">//</span>
          <span>MACHINE LEARNING</span>
          <span className="text-border">•</span>
          <span>QUANTUM CRYPTOGRAPHY</span>
          <span className="text-border">•</span>
          <span>WEBSOCKET REAL-TIME</span>
          <span className="text-border">•</span>
          <span>IBM QISKIT</span>
          <span className="text-border">•</span>
          <span>FASTAPI &amp; NEXT.JS</span>
        </div>

        <div className="mx-auto xl:mx-0">
          <button
            onClick={() => scrollTo("#projects")}
            className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
          >
            <span className="text-technical text-[10px] text-foreground-muted group-hover:text-accent transition-colors">
              SCROLL TO EXPLORE
            </span>
            <div className="h-8 w-[1px] bg-border-subtle overflow-hidden relative">
              <div className="h-full w-full bg-accent" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
