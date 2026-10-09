"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Brain, Code2, Atom, Database } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-foreground" />,
  Code2: <Code2 className="w-5 h-5 text-foreground" />,
  Atom: <Atom className="w-5 h-5 text-foreground" />,
  Database: <Database className="w-5 h-5 text-foreground" />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    sound.playClick();
    setActiveTab(index);
  };

  const currentCategory = PORTFOLIO_DATA.skills[activeTab];

  return (
    <section id="skills" className="py-24 border-b border-border-subtle relative bg-grid-technical select-none">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-2">
            <span className="text-technical text-foreground-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>02 • ARCHITECTURAL INDEX</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground font-sans">
              TECHNICAL MATRIX
            </h2>
          </div>

          <div className="text-technical text-foreground-muted font-mono">
            <span>VOLUME 2.0 // DEPLOYED STACK</span>
          </div>
        </div>

        {/* Category Pill Selectors */}
        <div className="flex overflow-x-auto gap-2 pb-2">
          {PORTFOLIO_DATA.skills.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => handleTabChange(idx)}
              onMouseEnter={() => sound.playHover()}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap border cursor-pointer ${
                activeTab === idx
                  ? "bg-foreground text-background border-foreground font-bold shadow-sm scale-[1.02]"
                  : "bg-surface text-foreground-secondary border-border-subtle hover:text-foreground hover:border-white/30"
              }`}
            >
              <span>{`[0${idx + 1}]`} {category.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-border-subtle space-y-8 shadow-lg">
          <div className="flex items-center gap-4 pb-6 border-b border-border-subtle">
            <div className="w-11 h-11 rounded-xl bg-surface border border-border-subtle flex items-center justify-center">
              {iconMap[currentCategory.icon] || <Brain className="w-5 h-5 text-foreground" />}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                {currentCategory.title}
              </h3>
              <p className="text-[11px] font-mono text-foreground-muted mt-0.5 uppercase tracking-widest">
                VERIFIED ARCHITECTURE &amp; PRODUCTION TOOLING
              </p>
            </div>
          </div>

          {/* Skill Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl bg-surface border border-border-subtle hover:border-white/40 transition-all flex items-center justify-between group hover:bg-surface-elevated cursor-default"
              >
                <span className="font-mono text-xs sm:text-sm font-medium text-foreground group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
