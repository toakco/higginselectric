"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  count?: number;
};

/**
 * Subtle canvas spark animation — drifts upward in the background of a section.
 * Pauses when off-screen via IntersectionObserver.
 */
export function SparkBurst({ className, count = 28 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let active = true;
    const parent = canvas.parentElement!;
    let width = parent.clientWidth;
    let height = parent.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    type Spark = { x: number; y: number; vy: number; vx: number; r: number; life: number; max: number };
    const sparks: Spark[] = [];
    const spawn = (): Spark => ({
      x: Math.random() * width,
      y: height + 8,
      vy: -(0.3 + Math.random() * 0.9),
      vx: (Math.random() - 0.5) * 0.4,
      r: 0.6 + Math.random() * 1.6,
      life: 0,
      max: 240 + Math.random() * 200,
    });
    for (let i = 0; i < count; i++) sparks.push({ ...spawn(), y: Math.random() * height });

    const loop = () => {
      if (!active) {
        raf = requestAnimationFrame(loop);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      sparks.forEach((s, i) => {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        if (s.life > s.max || s.y < -10) sparks[i] = spawn();
        const alpha = Math.max(0, 1 - s.life / s.max) * 0.65;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 212, 0, ${alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    />
  );
}
