"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChime();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-technical select-none">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 pb-6 border-b border-border-subtle">
          <div className="space-y-2">
            <span className="text-technical text-foreground-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>04 • TRANSMISSION TERMINAL</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground font-sans">
              INITIATE CONTACT
            </h2>
          </div>

          <div className="text-technical text-foreground-muted font-mono">
            <span>LOCATION // GREATER NOIDA, INDIA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct CTA & Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.socials.email}`}
                  onClick={() => sound.playClick()}
                  className="glass-panel px-8 py-5 rounded-2xl border border-border-subtle hover:border-white text-foreground hover:bg-foreground hover:text-background font-mono text-sm font-bold uppercase tracking-wider inline-flex items-center gap-4 transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span>START A CONVERSATION →</span>
                </a>
              </div>

              {/* Direct email display with COPY button */}
              <div className="flex items-center gap-3 pt-2">
                <span className="font-mono text-xs text-foreground-secondary">
                  DIRECT: <strong className="text-foreground font-bold">{PORTFOLIO_DATA.personal.socials.email}</strong>
                </span>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border-subtle hover:border-white font-mono text-[11px] text-foreground-secondary hover:text-foreground transition-all cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED</span>
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
              <span className="text-technical text-foreground-muted block">
                EXTERNAL CHANNELS // VERIFIED
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-full bg-surface border border-border-subtle hover:border-white text-xs font-mono text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-all shadow-xs hover:scale-[1.02]"
                >
                  <span>LEETCODE</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-full bg-surface border border-border-subtle hover:border-white text-xs font-mono text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-all shadow-xs hover:scale-[1.02]"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-full bg-surface border border-border-subtle hover:border-white text-xs font-mono text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 transition-all shadow-xs hover:scale-[1.02]"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Transmission Terminal */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-border-subtle shadow-xl space-y-5">
              <div className="flex justify-between items-center text-technical text-foreground-muted pb-3 border-b border-border-subtle">
                <span>TERMINAL DISPATCH // v2.0</span>
                <span className="text-foreground font-bold">STATUS: READY</span>
              </div>

              {sent ? (
                <div className="p-8 text-center space-y-3 bg-surface/50 rounded-xl border border-border-subtle">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-foreground">Message Transmitted</h4>
                  <p className="text-xs font-mono text-foreground-secondary">
                    Transmission received. Yuvraj will respond through encrypted channels.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-foreground-muted uppercase tracking-wider block">
                      IDENTIFIER / NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle focus:border-white focus:outline-none text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-foreground-muted uppercase tracking-wider block">
                      ELECTRONIC MAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle focus:border-white focus:outline-none text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-foreground-muted uppercase tracking-wider block">
                      PAYLOAD MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your technical requirements, research query, or opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border-subtle focus:border-white focus:outline-none text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-3.5 rounded-full bg-foreground text-background hover:bg-white/90 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer shadow-sm"
                  >
                    <span>TRANSMIT PACKET</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
