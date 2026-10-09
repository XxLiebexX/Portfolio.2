"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-border-subtle relative bg-grid-technical select-none">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-2">
            <span className="text-technical text-foreground-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>03 • TRAJECTORY &amp; RESEARCH</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground font-sans">
              EXPERIENCE RECORD
            </h2>
          </div>

          <div className="text-technical text-foreground-muted font-mono">
            <span>BENNETT UNIVERSITY // 2023 — 2027</span>
          </div>
        </div>

        {/* Milestone Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div
              key={item.role}
              onMouseEnter={() => sound.playHover()}
              className="glass-panel p-8 sm:p-10 rounded-2xl border border-border-subtle hover:border-white/30 transition-all duration-300 space-y-5 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-foreground font-bold">
                  <Calendar className="w-3.5 h-3.5 text-foreground-muted" />
                  <span className="px-3 py-1 rounded-full bg-surface-elevated border border-border-subtle">
                    {item.period}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-foreground-muted">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                  {item.role}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-foreground-secondary mt-1 uppercase tracking-wider">
                  {item.organization}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                {item.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-secondary">
                    <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface border border-border-subtle text-[11px] font-mono text-foreground-muted uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
