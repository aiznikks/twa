"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeMotion() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Hero timeline — single mount animation
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.12,
      });
      tl.from(".hero .eyebrow", { y: 8, opacity: 0, duration: 0.45 })
        .from(".hero__headline", { y: 24, opacity: 0, duration: 0.8 }, "-=0.2")
        .from(".hero__lede", { y: 14, opacity: 0, duration: 0.55 }, "-=0.5")
        .from(
          ".hero__ctas > *",
          { y: 12, opacity: 0, duration: 0.45, stagger: 0.07 },
          "-=0.35"
        )
        .from(".hero__meta", { opacity: 0, duration: 0.45 }, "-=0.15")
        .from(
          ".stadium",
          { opacity: 0, y: 26, duration: 0.85, ease: "power3.out" },
          "-=0.95"
        )
        .from(
          ".stadium__chip",
          { opacity: 0, scale: 0.85, duration: 0.5, ease: "back.out(1.6)" },
          "-=0.45"
        )
        .from(".stadium__caption", { opacity: 0, y: 6, duration: 0.45 }, "-=0.3");

      // Stat count-ups
      document
        .querySelectorAll<HTMLElement>(".stat__value[data-count]")
        .forEach((el) => {
          const target = parseFloat(el.dataset.count || "0");
          const decimals = el.dataset.decimals
            ? parseInt(el.dataset.decimals, 10)
            : 0;
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              const node = el.firstChild;
              if (node) node.nodeValue = obj.v.toFixed(decimals);
            },
            onComplete: () => {
              const node = el.firstChild;
              if (node) node.nodeValue = target.toFixed(decimals);
            },
          });
        });

      // Orbital path draw-on
      document
        .querySelectorAll<SVGPathElement>(".orbit-layer path")
        .forEach((path) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = String(len);
          path.style.strokeDashoffset = String(len);
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: path.closest("section"),
              start: "top 75%",
              once: true,
            },
          });
        });

      // Portrait breathe-in
      document.querySelectorAll<HTMLElement>(".portrait").forEach((p) => {
        gsap.fromTo(
          p,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: p, start: "top 88%", once: true },
          }
        );
        const meta = p.querySelector<HTMLElement>(".portrait__meta");
        const sat = p.querySelector<HTMLElement>(".satellite");
        if (meta)
          gsap.fromTo(
            meta,
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.25,
              ease: "power2.out",
              scrollTrigger: { trigger: p, start: "top 88%", once: true },
            }
          );
        if (sat)
          gsap.fromTo(
            sat,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.55,
              delay: 0.35,
              ease: "back.out(1.7)",
              scrollTrigger: { trigger: p, start: "top 88%", once: true },
            }
          );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
