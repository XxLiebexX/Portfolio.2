"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Mail, Copy, Check, Send, ExternalLink, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    if (!name || !email || !message) return;

    const mailto = `mailto:${PORTFOLIO_DATA.personal.socials.email}?subject=Portfolio Inquiry from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.open(mailto, "_blank");

    setStatus("DISPATCHING TO MAIL CLIENT...");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border-subtle relative bg-grid-technical">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-technical text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>COMMUNICATION // DIRECT TRANSMISSION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Start a Conversation
          </h2>
          <p className="text-sm text-foreground-secondary max-w-xl font-mono">
            Currently open to AI/ML, Software Engineering, and Full-Stack internship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Prabal-style CTA Button & Direct Email */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {/* Prabal's Signature Big CTA button */}
              <div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.socials.email}`}
                  onClick={() => sound.playClick()}
                  className="glass-panel px-8 py-5 border border-accent bg-accent/10 hover:bg-accent text-foreground hover:text-white font-mono text-sm font-bold uppercase tracking-wider rounded-md inline-flex items-center gap-4 transition-all duration-300 shadow-sm group cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                  <span>START A CONVERSATION →</span>
                </a>
              </div>

              {/* Direct email display with COPY button */}
              <div className="flex items-center gap-3 pt-2">
                <span className="font-mono text-xs text-foreground-secondary">
                  DIRECT: <strong className="text-foreground font-semibold">{PORTFOLIO_DATA.personal.socials.email}</strong>
                </span>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface border border-border-subtle hover:border-accent font-mono text-[10px] uppercase text-foreground-muted hover:text-accent transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-500">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-6 border-t border-border-subtle space-y-3">
              <span className="text-technical text-foreground-muted">
                EXTERNAL CHANNELS // VERIFIED
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3 py-1.5 rounded bg-surface border border-border-subtle hover:border-accent text-xs font-mono text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3 py-1.5 rounded bg-surface border border-border-subtle hover:border-accent text-xs font-mono text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>LEETCODE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3 py-1.5 rounded bg-surface border border-border-subtle hover:border-accent text-xs font-mono text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>GITHUB</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-3 py-1.5 rounded bg-surface border border-border-subtle hover:border-accent text-xs font-mono text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>PREVIOUS VERCEL</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Transmission Box */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-md border border-border-subtle space-y-4">
              <div className="flex justify-between items-center text-technical text-foreground-muted pb-2 border-b border-border-subtle">
                <span>TERMINAL DISPATCH // v1.0</span>
                <span className="text-accent">STATUS: READY</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-technical text-foreground-muted mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded bg-surface-elevated border border-border-subtle text-foreground text-xs font-mono focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-technical text-foreground-muted mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded bg-surface-elevated border border-border-subtle text-foreground text-xs font-mono focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-technical text-foreground-muted mb-1">
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Yuvraj, I reviewed your QKD research and want to discuss an internship..."
                    className="w-full px-4 py-2.5 rounded bg-surface-elevated border border-border-subtle text-foreground text-xs font-mono focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-3 rounded-sm bg-foreground text-background font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer transition-opacity"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status ? status : "TRANSMIT MESSAGE →"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
