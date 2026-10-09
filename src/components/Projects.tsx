"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Terminal, Activity, Radio } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import CardTilt from "@/components/CardTilt";

const projectBadges: Record<string, string> = {
  "customer-churn": "PREDICTIVE ML // 87% AUC",
  "qkd-platform": "QUANTUM CRYPTOGRAPHY // QISKIT",
  "signal-clone": "REAL-TIME SYSTEMS // WEBSOCKETS",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-border-subtle relative bg-grid-technical select-none">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-2">
            <span className="text-technical text-foreground-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>01 • SELECTED WORK</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground font-sans">
              ENGINEERED ARTIFACTS
            </h2>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium border border-border-subtle bg-surface hover:bg-surface-elevated text-foreground transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
          >
            <span>GITHUB ARCHIVE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Editorial Project Showcase: High-Contrast Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const indexStr = `0${idx + 1}`;
            const badge = projectBadges[project.id] || "PRODUCTION BUILD";

            return (
              <CardTilt key={project.id} className="h-full">
                <div
                  onMouseEnter={() => sound.playHover()}
                  className="glass-panel p-7 sm:p-8 rounded-2xl border border-border-subtle hover:border-white/30 flex flex-col justify-between h-full space-y-6 transition-all duration-300 group shadow-md"
                >
                  <div className="space-y-4">
                    {/* Index & Badge */}
                    <div className="flex justify-between items-center pb-3 border-b border-border-subtle">
                      <span className="font-mono text-xl font-black text-foreground">
                        [{indexStr}]
                      </span>
                      <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                        {badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-wider block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent-blue transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {project.metrics?.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 rounded-xl bg-surface-elevated/70 border border-border-subtle text-center"
                        >
                          <div className="text-xs font-bold text-foreground font-mono">
                            {m.value}
                          </div>
                          <div className="text-[9px] font-mono text-foreground-muted uppercase tracking-wider mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & Actions */}
                  <div className="space-y-4 pt-4 border-t border-border-subtle">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-surface border border-border-subtle text-foreground-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sound.playClick()}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium border border-border-subtle bg-surface hover:bg-surface-elevated text-foreground transition-all hover:scale-[1.02] cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>REPO</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sound.playClick()}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold bg-foreground text-background hover:opacity-90 transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                        >
                          <span>LIVE DEMO</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardTilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
