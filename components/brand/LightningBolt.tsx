"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Props = {
  className?: string;
  trigger?: "view" | "mount";
  delay?: number;
  duration?: number;
  stroke?: string;
  fill?: string;
};

export function LightningBolt({
  className,
  trigger = "view",
  delay = 0.2,
  duration = 1.4,
  stroke = "#FFD400",
  fill = "transparent",
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current || !wrap.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      duration,
      delay,
      ease: "power3.out",
      paused: true,
    });

    if (trigger === "mount") {
      tween.play();
    } else {
      ScrollTrigger.create({
        trigger: wrap.current,
        start: "top 80%",
        once: true,
        onEnter: () => tween.play(),
      });
    }

    return () => {
      tween.kill();
    };
  }, [trigger, delay, duration]);

  return (
    <div ref={wrap} className={cn("inline-block", className)}>
      <svg viewBox="0 0 100 200" className="h-full w-full" aria-hidden>
        <path
          ref={pathRef}
          d="M62 4 L18 110 H44 L34 196 L88 78 H58 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
