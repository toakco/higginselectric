"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Props = {
  className?: string;
  color?: string;
};

export function WireTrace({ className, color = "#FFD400" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current || !wrap.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const st = ScrollTrigger.create({
      trigger: wrap.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        gsap.to(path, {
          strokeDashoffset: length * (1 - self.progress),
          duration: 0.1,
          overwrite: true,
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div ref={wrap} className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <svg viewBox="0 0 1200 800" className="h-full w-full" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M0 120 L240 120 L280 80 L520 80 L560 200 L840 200 L880 160 L1200 160 M0 440 L160 440 L200 480 L420 480 L460 360 L740 360 L780 520 L1200 520 M0 680 L320 680 L360 640 L640 640 L680 720 L1200 720"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
        />
        <circle cx="280" cy="80" r="4" fill={color} />
        <circle cx="560" cy="200" r="4" fill={color} />
        <circle cx="880" cy="160" r="4" fill={color} />
        <circle cx="460" cy="360" r="4" fill={color} />
        <circle cx="780" cy="520" r="4" fill={color} />
        <circle cx="680" cy="720" r="4" fill={color} />
      </svg>
    </div>
  );
}
