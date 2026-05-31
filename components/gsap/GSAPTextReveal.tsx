"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: string;
  as?: ElementType;
  className?: string;
  /** Split granularity */
  split?: "chars" | "words" | "lines";
  stagger?: number;
  delay?: number;
  trigger?: "view" | "mount";
};

export function GSAPTextReveal({
  children,
  as: Tag = "span",
  className,
  split = "words",
  stagger = 0.04,
  delay = 0,
  trigger = "view",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const parts = el.querySelectorAll<HTMLElement>("[data-split-unit]");
    if (parts.length === 0) return;

    gsap.set(parts, { yPercent: 110, opacity: 0 });

    const tween = gsap.to(parts, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger,
      delay,
      paused: true,
    });

    if (trigger === "mount") {
      tween.play();
    } else {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => tween.play(),
      });
      return () => {
        st.kill();
        tween.kill();
      };
    }

    return () => tween.kill();
  }, [children, split, stagger, delay, trigger]);

  const units = (() => {
    if (split === "chars") return Array.from(children);
    if (split === "lines") return children.split("\n");
    return children.split(" ");
  })();

  return (
    <Tag ref={ref as any} className={cn("inline-block", className)}>
      {units.map((u, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.2em] mb-[-0.2em]">
          <span data-split-unit className="inline-block will-change-transform">
            {u}
            {split === "words" && i < units.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
