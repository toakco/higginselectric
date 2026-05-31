import { home } from "@/lib/content";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";

export function DualCTA() {
  const { forClients, forCareers } = home.dualCta;
  return (
    <section className="relative bg-higgins-black">
      <div className="grid md:grid-cols-2">
        {[forClients, forCareers].map((b, i) => (
          <div
            key={b.eyebrow}
            className={`relative flex flex-col justify-between gap-10 px-8 py-20 md:px-16 md:py-32 ${
              i === 0 ? "bg-higgins-red text-higgins-bone" : "bg-higgins-graphite text-higgins-bone"
            }`}
          >
            <span className="text-xs uppercase tracking-[0.4em] opacity-80">{b.eyebrow}</span>
            <h3 className="font-display text-fluid-2xl leading-[0.95] tracking-tight">
              <GSAPTextReveal as="span" split="words">
                {b.headline}
              </GSAPTextReveal>
            </h3>
            <div>
              <MagneticCTA
                href={b.cta.href}
                variant={i === 0 ? "outline" : "primary"}
              >
                {b.cta.label}
              </MagneticCTA>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
