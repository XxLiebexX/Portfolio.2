"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-border-subtle relative bg-grid-technical">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-technical text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>TRAJECTORY // RESEARCH &amp; ACADEMIA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Experience &amp; Education
          </h2>
          <p className="text-sm text-foreground-secondary max-w-xl font-mono">
            Research engineering at the forefront of quantum cryptography alongside rigorous computer science foundations.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div
              key={item.role}
              onMouseEnter={() => sound.playHover()}
              className="glass-panel p-6 sm:p-8 rounded-md border border-border-subtle hover:border-accent transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
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
                <div className="text-sm font-mono text-foreground-secondary mt-1">
                  {item.organization}
                </div>
              </div>

              <p className="text-sm text-foreground-secondary leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-surface-elevated text-foreground-secondary border border-border-subtle"
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
