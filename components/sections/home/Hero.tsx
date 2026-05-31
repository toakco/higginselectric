"use client";

import Image from "@/components/ui/Image";
import { useEffect, useRef } from "react";
import { home } from "@/lib/content";
import { basePath } from "@/lib/basePath";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { ServiceTypeSelect } from "@/components/ui/ServiceTypeSelect";
import gsap from "gsap";

export function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
      gsap.to(logoRef.current, {
        scale: 1.03,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });
    }, logoRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-higgins-black pt-28 md:pt-36">
      {/* Lightning storm background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={`${basePath}/assets/photos/job-19.jpg`}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src={`${basePath}/assets/video/hero-lightning.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-higgins-black/70 via-higgins-black/40 to-higgins-black" />
      </div>

      {/* Eyebrow rail */}
      <div className="container-edge relative">
        <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.4em] text-higgins-yellow md:text-base">
          <span className="flex items-center gap-3">
            <span className="h-px w-12 bg-higgins-yellow" />
            {home.hero.eyebrow}
          </span>
        </div>
      </div>

      {/* Centered growing logo */}
      <div className="container-edge relative mt-12 flex flex-col items-center text-center md:mt-20">
        <div
          ref={logoRef}
          className="relative w-full max-w-[640px] bg-higgins-bone px-6 py-5 shadow-[0_0_60px_rgba(255,212,0,0.25)] md:px-10 md:py-7"
          style={{ transformOrigin: "center" }}
        >
          <Image
            src="/assets/brand/higgins-logo-full.png"
            alt="Higgins Electric"
            width={1200}
            height={300}
            priority
            sizes="(min-width: 768px) 640px, 90vw"
            className="h-auto w-full object-contain"
          />
        </div>

        <h1 className="mt-10 font-display text-fluid-2xl leading-[0.95] tracking-[0.04em] text-higgins-bone md:mt-12">
          <GSAPTextReveal as="span" split="words" stagger={0.06} trigger="mount" delay={0.6}>
            Power. Delivered.
          </GSAPTextReveal>
        </h1>

        <p className="mt-6 max-w-2xl text-fluid-lg leading-snug text-higgins-bone/90 md:mt-8">
          {home.hero.sub}
        </p>
      </div>

      {/* Service dropdown + CTAs */}
      <div className="container-edge relative mt-10 flex flex-col items-center gap-6 md:mt-14">
        <p className="text-base uppercase tracking-[0.4em] text-higgins-yellow md:text-lg">What do you need?</p>
        <ServiceTypeSelect />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticCTA href={home.hero.primaryCta.href} variant="primary">
            {home.hero.primaryCta.label}
          </MagneticCTA>
          <MagneticCTA href={home.hero.secondaryCta.href} variant="outline">
            {home.hero.secondaryCta.label}
          </MagneticCTA>
        </div>
      </div>

      {/* Bottom marker */}
      <div className="container-edge relative mt-16 flex items-center justify-between pb-10 text-sm uppercase tracking-[0.4em] text-higgins-concrete md:mt-20">
        <span>East Hampton, CT</span>
        <span className="flex items-center gap-2">
          <span className="block h-px w-12 bg-higgins-concrete/50" />
          Family owned. Crew run.
        </span>
      </div>
    </section>
  );
}
