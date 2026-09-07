"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { ArrowRight, ExternalLink, Github, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const projectPipelines: Record<string, string[]> = {
  "customer-churn": [
    "DATA INGESTION",
    "FEATURE ENGINEERING",
    "ENSEMBLE CLASSIFIER (87% AUC)",
    "FASTAPI INFERENCE (<25ms)",
  ],
  "qkd-platform": [
    "QISKIT QUANTUM CIRCUITS",
    "CHANNEL NOISE MODELING",
    "QBER & SHANNON ENTROPY",
    "SIFTED SECURE KEY",
  ],
  "signal-clone": [
    "WEBSOCKET DUPLEX ENGINE",
    "FASTAPI ASYNC ROUTER",
    "7-TABLE NORMALIZED DB",
    "LOW-LATENCY DISPATCH (<15ms)",
  ],
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border-subtle relative bg-grid-technical">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-technical text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>FEATURED WORK // RECENT PRODUCTION BUILDS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
              Featured Projects
            </h2>
            <p className="text-sm text-foreground-secondary max-w-xl font-mono">
              Highlighting end-to-end machine learning pipelines, quantum cryptographic platforms, and real-time systems.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
          >
            <button className="inline-flex items-center justify-center transition-all duration-300 px-6 py-3 rounded-sm text-xs font-mono font-medium border border-border bg-surface hover:bg-surface-elevated text-foreground group cursor-pointer">
              <span>EXPLORE ALL REPOSITORIES</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const pipeline = projectPipelines[project.id] || [
              "INITIALIZATION",
              "DATA PIPELINE",
              "COMPUTATION",
              "VERIFICATION",
            ];
            const scanId = `0${idx + 1}`;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 border-b border-border-subtle last:border-0"
              >
                {/* Left Column: Project Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-accent">
                      [{scanId}]
                    </span>
                    <span className="text-technical text-foreground-muted">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  {/* Transformation Pipeline (Prabal signature feature) */}
                  <div className="space-y-2 pt-2">
                    <span className="text-technical text-foreground-muted">
                      TRANSFORMATION PIPELINE
                    </span>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-accent">
                      {pipeline.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle text-[11px] font-medium text-foreground">
                            {step}
                          </span>
                          {sIdx < pipeline.length - 1 && (
                            <span className="text-foreground-muted text-[10px]">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground-secondary">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-sm border border-border-subtle bg-surface px-2.5 py-0.5 text-xs font-mono font-medium text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                      >
                        <button className="inline-flex items-center justify-center transition-all duration-300 px-5 py-2.5 rounded-sm text-xs font-mono font-medium border border-border bg-surface hover:bg-surface-elevated text-foreground cursor-pointer">
                          <span>EXPLORE CODE →</span>
                        </button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                      >
                        <button className="inline-flex items-center justify-center transition-all duration-300 px-5 py-2.5 rounded-sm text-xs font-mono font-medium bg-foreground text-background hover:opacity-90 cursor-pointer">
                          <span>LIVE DEMO</span>
                          <ExternalLink className="w-3 h-3 ml-1.5" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Framed Technical Card (Prabal scan-id frame) */}
                <div className="lg:col-span-5">
                  <div className="relative w-full glass-panel border border-border-subtle hover:border-accent p-6 rounded-md shadow-sm transition-colors space-y-6">
                    {/* Frame Corner Accents */}
                    <div className="flex justify-between items-center font-mono text-[9px] text-accent uppercase tracking-widest">
                      <span>┌ SCAN_ID // [{scanId}]</span>
                      <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-foreground-muted">
                        PRODUCTION GRADE
                      </span>
                    </div>

                    {/* KPI Metrics */}
                    <div className="space-y-3 py-2">
                      <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-wider">
                        PERFORMANCE VERIFICATION
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded bg-surface-elevated border border-border-subtle"
                          >
                            <div className="text-xl font-mono font-bold text-foreground">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono text-foreground-muted mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center font-mono text-[9px] text-foreground-muted pt-2 border-t border-border-subtle">
                      <span>└ VERIFIED ARCHITECTURE</span>
                      <span className="text-accent font-bold">STATUS: DEPLOYED ┘</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
