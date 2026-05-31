import { home } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";

export function Trust() {
  return (
    <section className="bg-higgins-bone py-24 text-higgins-black md:py-32">
      <div className="container-edge">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-higgins-red">
          <span className="mr-3 inline-block h-px w-10 bg-higgins-red align-middle" />
          {home.trust.eyebrow}
        </p>
        <h2 className="max-w-[18ch] font-display text-fluid-2xl leading-[0.95] tracking-tightest">
          <GSAPTextReveal as="span" split="words">
            The reasons people stay with us.
          </GSAPTextReveal>
        </h2>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {home.trust.items.map((v, i) => (
            <GSAPFadeUp key={v.title} delay={i * 0.06}>
              <div className="border-t border-higgins-black/15 pt-6">
                <span className="mb-3 block font-mono text-xs uppercase tracking-[0.3em] text-higgins-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl leading-tight tracking-wide">{v.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-higgins-black/75 md:text-xl">{v.body}</p>
              </div>
            </GSAPFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
