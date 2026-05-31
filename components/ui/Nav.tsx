"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, business } from "@/lib/content";
import { HigginsLogo } from "@/components/brand/HigginsLogo";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-higgins-black/80 backdrop-blur-md border-b border-higgins-bone/10"
          : "bg-transparent"
      )}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label={business.name} className="shrink-0">
          <HigginsLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-base font-medium uppercase tracking-[0.18em] text-higgins-bone/80 transition-colors hover:text-higgins-bone"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-higgins-yellow transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href={`tel:${business.phone.replace(/-/g, "")}`}
            className="group relative inline-flex items-center gap-2 border border-higgins-bone/30 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-higgins-bone transition-colors hover:border-higgins-yellow hover:text-higgins-yellow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-higgins-red animate-spark-pulse" />
            {business.phone}
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="block h-px w-6 bg-higgins-bone" />
          <span className="mt-1.5 block h-px w-6 bg-higgins-bone" />
          <span className="mt-1.5 block h-px w-6 bg-higgins-bone" />
        </button>
      </div>

      {open && (
        <div className="border-t border-higgins-bone/10 bg-higgins-black md:hidden">
          <div className="container-edge flex flex-col gap-4 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-wider text-higgins-bone"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
            <a
              href={`tel:${business.phone.replace(/-/g, "")}`}
              className="mt-2 inline-flex w-fit items-center gap-2 border border-higgins-yellow px-4 py-2 text-sm tracking-widest text-higgins-yellow"
            >
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
