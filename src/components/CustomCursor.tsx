"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Disable on touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant inner dot placement
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth lerp for the outer ring (spring inertia)
    let animationFrameId: number;
    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.25;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.25;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Smooth Trailing Minimalist Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
      >
        <div
          className={`rounded-full transition-all duration-200 ease-out flex items-center justify-center ${
            isHovered
              ? "w-10 h-10 border border-accent bg-accent/10 shadow-[0_0_15px_var(--accent)]"
              : isClicked
              ? "w-6 h-6 border border-accent bg-accent/20 scale-90"
              : "w-7 h-7 border border-accent/40 bg-transparent"
          }`}
        />
      </div>

      {/* 2. Precision Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered
              ? "w-2 h-2 bg-accent scale-125"
              : isClicked
              ? "w-1 h-1 bg-accent scale-75"
              : "w-1.5 h-1.5 bg-accent"
          }`}
        />
      </div>
    </div>
  );
}
