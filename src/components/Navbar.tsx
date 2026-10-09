"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Navbar() {
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAudioToggle = () => {
    const newMuteState = sound.toggleMute();
    setIsMuted(newMuteState);
  };

  const navLinks = [
    { name: "01 // WORK", href: "#projects" },
    { name: "02 // STACK", href: "#skills" },
    { name: "03 // RECORD", href: "#experience" },
    { name: "04 // CONTACT", href: "#contact" },
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
      <div className="mx-auto max-w-7xl flex items-center justify-between glass-panel px-6 py-3 rounded-full border border-border-subtle bg-surface/90 backdrop-blur-xl shadow-md">
        {/* Brand */}
        <a
          href="#hero"
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 group focus-visible:outline-none"
        >
          <span className="font-sans font-black tracking-tight text-foreground text-sm uppercase">
            YUVRAJ SINGH
          </span>
          <span className="text-foreground text-xs font-serif italic">Ψ</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              onMouseEnter={() => sound.playHover()}
              className="text-xs font-mono text-foreground-secondary hover:text-white transition-colors focus-visible:outline-none cursor-pointer tracking-wider"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Controls: Audio + LeetCode / GitHub */}
        <div className="flex items-center gap-2">
          {/* Audio Synthesizer */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => sound.playHover()}
            title={isMuted ? "Enable Ambient Audio" : "Mute Audio"}
            className="p-1.5 rounded-full text-foreground-secondary hover:text-white border border-border-subtle hover:border-white transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />}
          </button>

          {/* Action Buttons: LeetCode & GitHub */}
          <a
            href={PORTFOLIO_DATA.personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border-subtle bg-surface hover:border-white text-foreground transition-all hover:scale-[1.02] cursor-pointer"
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
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-foreground text-background hover:bg-white/90 transition-all hover:scale-[1.02] cursor-pointer shadow-sm"
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
            className="md:hidden flex items-center p-1 text-foreground-secondary hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 mx-auto max-w-7xl glass-panel p-5 rounded-2xl border border-border-subtle bg-surface/95 backdrop-blur-2xl md:hidden flex flex-col gap-3 shadow-2xl">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-xs font-mono uppercase tracking-wider text-foreground-secondary hover:text-white py-1.5"
            >
              {item.name}
            </button>
          ))}
          <div className="h-[1px] bg-border-subtle my-1" />
          <div className="flex items-center justify-between pt-1">
            <a
              href={PORTFOLIO_DATA.personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-foreground-secondary hover:text-white"
            >
              LEETCODE ↗
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-white"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
