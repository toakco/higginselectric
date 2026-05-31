"use client";

import Image from "@/components/ui/Image";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceHoverCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const href = service.href ?? `#${service.slug}`;
  const isRoute = href.startsWith("/");

  const content = (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      className="group relative block aspect-[4/5] overflow-hidden bg-higgins-graphite focus:outline-none focus-visible:ring-2 focus-visible:ring-higgins-yellow"
      data-cursor-hover
    >
      <Image
        src={service.image}
        alt={service.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className={cn(
          "object-cover transition-all duration-500",
          open ? "scale-105 blur-md brightness-50" : "blur-0 brightness-100"
        )}
      />

      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          open
            ? "bg-higgins-black/70"
            : "bg-gradient-to-t from-higgins-black/80 via-higgins-black/30 to-transparent"
        )}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3
          className={cn(
            "font-display text-3xl leading-tight tracking-wide text-higgins-bone transition-all duration-500 md:text-4xl",
            open ? "translate-y-0 opacity-100" : "translate-y-0"
          )}
        >
          {service.name}
        </h3>

        <ul
          className={cn(
            "mt-4 space-y-2 transition-all duration-500",
            open
              ? "max-h-[24rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-base leading-snug text-higgins-bone/95 md:text-lg"
            >
              <span className="mt-2 inline-block h-px w-3 shrink-0 bg-higgins-red" />
              {b}
            </li>
          ))}
        </ul>

        <span
          className={cn(
            "mt-4 inline-flex w-fit border border-higgins-yellow/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-higgins-yellow transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0"
          )}
        >
          {isRoute ? "Open page" : "Request quote"}
        </span>
      </div>

      <span className="absolute inset-x-0 top-0 h-[2px] bg-higgins-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );

  if (isRoute) {
    return (
      <Link href={href} aria-label={service.name}>
        {content}
      </Link>
    );
  }

  return (
    <Link href={`/contact?service=${service.slug}`} aria-label={service.name}>
      {content}
    </Link>
  );
}
