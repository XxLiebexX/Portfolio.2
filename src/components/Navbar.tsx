"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { useTheme } from "@/components/ThemeProvider";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAudioToggle = () => {
    const newMuteState = sound.toggleMute();
    setIsMuted(newMuteState);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="mx-auto max-w-7xl flex items-center justify-between glass-panel px-6 py-3 rounded-md shadow-sm border border-border-subtle/80 bg-surface/90 backdrop-blur-md">
        {/* Brand / Title (Prabal Sharma style) */}
        <a
          href="#hero"
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 group focus-visible:outline-none"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-bold tracking-tight text-foreground text-sm uppercase">
            Yuvraj Singh
          </span>
          <span className="text-technical text-[10px] hidden sm:inline-block border-l border-border-subtle pl-3 text-foreground-muted">
            AI/ML &amp; FULL-STACK
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              onMouseEnter={() => sound.playHover()}
              className="relative text-xs uppercase tracking-wider font-medium text-foreground-secondary hover:text-foreground transition-colors focus-visible:outline-none"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Controls: Theme Switcher + Audio + GitHub CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={() => {
              sound.playClick();
              toggleTheme();
            }}
            onMouseEnter={() => sound.playHover()}
            title={theme === "light" ? "Switch to Dark Spatial Mode" : "Switch to White Technical Mode"}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border border-border-subtle hover:border-accent bg-surface-elevated text-foreground transition-all cursor-pointer shadow-sm"
          >
            {theme === "light" ? (
              <>
                <Moon className="w-3.5 h-3.5 text-foreground-secondary" />
                <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-wider text-foreground-secondary">
                  DARK
                </span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-accent animate-spin-slow" />
                <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-wider text-accent">
                  WHITE
                </span>
              </>
            )}
          </button>

          {/* Audio Synthesizer */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => sound.playHover()}
            title={isMuted ? "Enable Ambient Audio" : "Mute Audio"}
            className="p-1.5 rounded text-foreground-secondary hover:text-accent border border-border-subtle hover:border-accent transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-accent animate-pulse" />}
          </button>

          {/* Action Buttons */}
          <a
            href={PORTFOLIO_DATA.personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            <span>LEETCODE</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden flex items-center gap-1 p-1 text-foreground-secondary hover:text-foreground"
          >
            <span className="text-technical text-[10px]">MENU</span>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 mx-auto max-w-7xl glass-panel p-4 rounded-md border border-border-subtle bg-surface/95 backdrop-blur-xl md:hidden flex flex-col gap-3 shadow-xl">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-xs uppercase tracking-wider font-medium text-foreground-secondary hover:text-foreground py-1"
            >
              {item.name}
            </button>
          ))}
          <div className="h-[1px] bg-border-subtle my-1" />
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => {
                sound.playClick();
                toggleTheme();
              }}
              className="text-xs font-mono text-foreground flex items-center gap-2"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-accent" />}
              <span>{theme === "light" ? "DARK MODE" : "WHITE MODE"}</span>
            </button>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-foreground-secondary hover:text-accent"
              >
                LEETCODE ↗
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-accent"
              >
                GITHUB →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
