"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Props = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  decimals?: number;
};

export function VoltageGauge({ value, suffix = "", label, className, decimals = 0 }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const arcRef = useRef<SVGPathElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!wrap.current || !arcRef.current) return;
    const arc = arcRef.current;
    const length = arc.getTotalLength();
    gsap.set(arc, { strokeDasharray: length, strokeDashoffset: length });

    const counter = { v: 0 };
    const tween = gsap.to(counter, {
      v: value,
      duration: 2.2,
      ease: "power2.out",
      paused: true,
      onUpdate: () => setDisplay(counter.v),
    });

    const arcTween = gsap.to(arc, {
      strokeDashoffset: length * 0.25,
      duration: 2.2,
      ease: "power2.out",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: wrap.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        tween.play();
        arcTween.play();
      },
    });

    return () => {
      tween.kill();
      arcTween.kill();
    };
  }, [value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toString();

  return (
    <div
      ref={wrap}
      className={cn("relative flex flex-col items-start gap-2", className)}
    >
      <div className="relative h-20 w-32">
        <svg viewBox="0 0 200 110" className="h-full w-full">
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#2A2A2A"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            ref={arcRef}
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#FFD400"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="3" fill="#C8202C" />
        </svg>
      </div>
      <div className="flex items-baseline gap-1 font-display tabular-nums">
        <span className="text-5xl text-higgins-bone md:text-6xl">{formatted}</span>
        <span className="text-2xl text-higgins-yellow md:text-3xl">{suffix}</span>
      </div>
      <span className="text-xs uppercase tracking-[0.25em] text-higgins-concrete">{label}</span>
    </div>
  );
}
