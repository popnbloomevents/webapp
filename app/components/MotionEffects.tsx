"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(
      "main > section:not(.heroV4), .workV4Card, .packageGrid article, .stepsV4 article, .collectionRow, .projectMasonry figure"
    );

    if (reduced) {
      targets.forEach((target) => target.classList.add("isVisible"));
      return;
    }

    targets.forEach((target, index) => {
      target.classList.add("revealMotion");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -7%" }
    );
    targets.forEach((target) => observer.observe(target));

    const progress = document.querySelector<HTMLElement>(".scrollProgress");
    const updateProgress = () => {
      if (!progress) return;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${available > 0 ? window.scrollY / available : 0})`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return <div className="scrollProgress" aria-hidden="true" />;
}
