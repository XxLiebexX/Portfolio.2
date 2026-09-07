"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border-subtle py-8 px-4 sm:px-8 bg-surface text-foreground-muted select-none">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-foreground uppercase tracking-tight">
            YUVRAJ SINGH
          </span>
          <span className="text-technical text-[10px] text-accent border-l border-border-subtle pl-3">
            AI/ML &amp; FULL-STACK
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span>© {new Date().getFullYear()} YUVRAJ SINGH (XXLIEBEXX). ALL RIGHTS RESERVED.</span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground-muted hover:text-accent transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
