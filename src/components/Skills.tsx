"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Brain, Code2, Atom, Database, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-accent" />,
  Code2: <Code2 className="w-5 h-5 text-accent" />,
  Atom: <Atom className="w-5 h-5 text-accent" />,
  Database: <Database className="w-5 h-5 text-accent" />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    sound.playClick();
    setActiveTab(index);
  };

  const currentCategory = PORTFOLIO_DATA.skills[activeTab];

  return (
    <section id="skills" className="py-20 border-t border-border-subtle relative bg-grid-technical">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-technical text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>TECHNICAL ARCHITECTURE // STACK_MATRIX v2.0</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Skills &amp; Architecture
          </h2>
          <p className="text-sm text-foreground-secondary max-w-xl font-mono">
            A comprehensive matrix of software competencies, mathematical models, and cryptographic toolkits.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex overflow-x-auto gap-2 pb-2">
          {PORTFOLIO_DATA.skills.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => handleTabChange(idx)}
              onMouseEnter={() => sound.playHover()}
              className={`px-4 py-2.5 rounded-sm text-xs font-mono transition-all duration-200 whitespace-nowrap flex items-center gap-2 border cursor-pointer ${
                activeTab === idx
                  ? "bg-foreground text-background border-foreground font-bold shadow-sm"
                  : "bg-surface text-foreground-secondary border-border-subtle hover:text-foreground hover:border-border"
              }`}
            >
              <span>[{`0${idx + 1}`}]</span>
              <span>{category.title.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Specification Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-md border border-border-subtle space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle">
                {iconMap[currentCategory.icon]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">
                  {currentCategory.title}
                </h3>
                <span className="text-technical text-foreground-muted">
                  {currentCategory.skills.length} CERTIFIED PROTOCOLS &amp; TOOLS
                </span>
              </div>
            </div>

            <div className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20 w-fit">
              SYS_CHECK: VERIFIED
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                onMouseEnter={() => sound.playHover()}
                className="p-3.5 rounded bg-surface-elevated border border-border-subtle hover:border-accent transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs sm:text-sm font-mono text-foreground group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-foreground-muted hidden sm:inline-block uppercase">
                  ACTIVE
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
