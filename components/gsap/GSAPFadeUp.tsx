"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
};

export function GSAPFadeUp({
  children,
  className,
  delay = 0,
  y = 40,
  duration = 0.9,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    gsap.set(el, { y, opacity: 0 });
    const tween = gsap.to(el, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      paused: true,
    });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => tween.play(),
    });
    return () => {
      st.kill();
      tween.kill();
    };
  }, [delay, duration, y]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
