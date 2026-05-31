import { home } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { SparkBurst } from "@/components/brand/SparkBurst";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-higgins-graphite py-32 md:py-48">
      <SparkBurst />
      <div className="container-edge relative text-center">
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-higgins-yellow">
          <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
          {home.mission.eyebrow}
        </p>
        <blockquote className="mx-auto max-w-[24ch] pb-2 font-display text-fluid-2xl leading-[1.05] text-higgins-bone md:max-w-[28ch] md:text-fluid-3xl md:leading-[1.02]">
          <GSAPTextReveal as="span" split="words" stagger={0.06}>
            {home.mission.statement}
          </GSAPTextReveal>
        </blockquote>

        <div className="mt-20 grid gap-10 text-left md:mt-32 md:grid-cols-3">
          {home.values.items.map((v, i) => (
            <GSAPFadeUp key={v.title} delay={i * 0.08}>
              <div className="border-t border-higgins-bone/20 pt-6">
                <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-higgins-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl leading-tight tracking-wide text-higgins-bone">
                  {v.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-higgins-concrete md:text-lg">{v.body}</p>
              </div>
            </GSAPFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
