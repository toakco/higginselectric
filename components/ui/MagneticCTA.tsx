"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
  ariaLabel?: string;
};

export function MagneticCTA({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  ariaLabel,
}: Props) {
  const wrap = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };

  const onLeave = () => {
    if (wrap.current) wrap.current.style.transform = "translate(0, 0)";
  };

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-higgins-red text-higgins-bone border-higgins-red hover:bg-higgins-yellow hover:text-higgins-black hover:border-higgins-yellow",
    outline:
      "bg-transparent text-higgins-bone border-higgins-bone/40 hover:border-higgins-yellow hover:text-higgins-yellow",
    ghost:
      "bg-transparent text-higgins-bone border-transparent hover:text-higgins-yellow",
  };

  const inner = (
    <span
      ref={wrap}
      className={cn(
        "relative inline-flex items-center gap-3 border px-7 py-4 text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 ease-out will-change-transform",
        variants[variant],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-higgins-yellow group-hover:animate-spark-pulse" />
      {children}
    </span>
  );

  const wrapper = "group inline-block";

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={wrapper}
        data-cursor-hover
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={onClick ? "button" : "submit"}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label={ariaLabel}
      className={wrapper}
      data-cursor-hover
    >
      {inner}
    </button>
  );
}
