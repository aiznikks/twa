"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Kind = "fade" | "headline" | "stagger";

export default function Reveal({
  kind = "fade",
  children,
  className,
  as = "div",
}: {
  kind?: Kind;
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      return;
    }

    let tween: gsap.core.Tween | undefined;
    if (kind === "stagger") {
      gsap.set(el, { opacity: 1 });
      const kids = Array.from(el.children) as HTMLElement[];
      tween = gsap.from(kids, {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    } else {
      tween = gsap.fromTo(
        el,
        { y: kind === "headline" ? 28 : 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: kind === "headline" ? 0.85 : 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [kind]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </Tag>
  );
}
